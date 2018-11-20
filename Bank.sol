pragma solidity ^0.4.23;


contract Bank {

	// 此合約的擁有者

    address private owner;


	// 儲存所有會員的餘額

    mapping (address => uint256) private balance;

    
    //設定設定會員購買的定存金額

    mapping (address => uint256) private certificate;

    
    // 設定會員購買定存之期

    mapping (address => uint256) private period;


	// 事件們，用於通知前端 web3.js
	event PurchaseEvent(address indexed from, uint256 value1, uint256 value2, uint256 timestamp);

	event ContractDoneEvent(address indexed from, uint256 value, uint256 timestamp);

	event ContractReleaseEvent(address indexed from, uint256 value, uint256 timestamp);

    event DepositEvent(address indexed from, uint256 value, uint256 timestamp);

    event WithdrawEvent(address indexed from, uint256 value, uint256 timestamp);

    event TransferEvent(address indexed from, address indexed to, uint256 value, uint256 timestamp);

    /*

    event DepositEvent(address indexed from, uint256 value, uint256 timestamp);

    event WithdrawEvent(address indexed from, uint256 value, uint256 timestamp);

    event TransferEvent(address indexed from, address indexed to, uint256 value, uint256 timestamp);

    */
  
    modifier isOwner() {
        require(owner == msg.sender, "you are not owner");
        _;
    }
    
	// 建構子
    constructor() public payable {
        owner = msg.sender;
    }
    
    	// 存錢
    function deposit() public payable {
        balance[msg.sender] += msg.value;

        emit DepositEvent(msg.sender, msg.value, now);
    }

	// 提錢
    function withdraw(uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        msg.sender.transfer(weiValue);

        balance[msg.sender] -= weiValue;

        emit WithdrawEvent(msg.sender, etherValue, now);
    }

	// 轉帳
    function transfer(address to, uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        balance[msg.sender] -= weiValue;
        balance[to] += weiValue;

        emit TransferEvent(msg.sender, to, etherValue, now);
    }


	// 購買定存
	function purchase(uint256 etherValue, uint256 periodValue) public  payable {
	    uint256 weiValue = etherValue * 1 ether;
	    require(periodValue <= 12, "your input are wrong");
	    
        balance[msg.sender] += weiValue;
        period[msg.sender] = periodValue;
        certificate[msg.sender] += weiValue;

        emit PurchaseEvent(msg.sender, etherValue, periodValue, now);
    }


    // 合約期滿
    function contractDone() public {
        uint256 weiValue = certificate[msg.sender];
        uint256 period1 =  period[msg.sender];
        
        weiValue = weiValue * period1 / 100;
        
        balance[msg.sender] += weiValue;
        certificate[msg.sender] = 0;
        period[msg.sender] = 0;
        
        emit ContractDoneEvent(msg.sender,weiValue, now);
        
    }


	//  提前解約
    function contractrelease(uint256 periodValue2) public{
        uint256 weiValue = certificate[msg.sender];
        uint256 period1 = period[msg.sender];
        uint256 period2 = periodValue2;
        
        require(period2 < period1, "your input are wrong");
        
        weiValue = weiValue * period2 / 100;
        
        balance[msg.sender] += weiValue;
        period[msg.sender] = 0;
        certificate[msg.sender] = 0;
        
        emit ContractReleaseEvent(msg.sender, weiValue, now);
    }

	// 檢查銀行帳戶餘額
    function getBankBalance() public view returns (uint256) {
        return balance[msg.sender];
    }

    function kill() public isOwner {
        selfdestruct(owner);
    }
}  