pragma solidity ^0.4.23;


contract Bank {

	// ���X�����֦���

    address private owner;


	// �x�s�Ҧ��|�����l�B

    mapping (address => uint256) private balance;

    
    //�]�w�]�w�|���ʶR���w�s���B

    mapping (address => uint256) private certificate;

    
    // �]�w�|���ʶR�w�s����

    mapping (address => uint256) private period;


	// �ƥ�̡A�Ω�q���e�� web3.js
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
    
	// �غc�l
    constructor() public payable {
        owner = msg.sender;
    }
    
    	// �s��
    function deposit() public payable {
        balance[msg.sender] += msg.value;

        emit DepositEvent(msg.sender, msg.value, now);
    }

	// ����
    function withdraw(uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        msg.sender.transfer(weiValue);

        balance[msg.sender] -= weiValue;

        emit WithdrawEvent(msg.sender, etherValue, now);
    }

	// ��b
    function transfer(address to, uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        balance[msg.sender] -= weiValue;
        balance[to] += weiValue;

        emit TransferEvent(msg.sender, to, etherValue, now);
    }


	// �ʶR�w�s
	function purchase(uint256 etherValue, uint256 periodValue) public  payable {
	    uint256 weiValue = etherValue * 1 ether;
	    require(periodValue <= 12, "your input are wrong");
	    
        balance[msg.sender] += weiValue;
        period[msg.sender] = periodValue;
        certificate[msg.sender] += weiValue;

        emit PurchaseEvent(msg.sender, etherValue, periodValue, now);
    }


    // �X������
    function contractDone() public {
        uint256 weiValue = certificate[msg.sender];
        uint256 period1 =  period[msg.sender];
        
        weiValue = weiValue * period1 / 100;
        
        balance[msg.sender] += weiValue;
        certificate[msg.sender] = 0;
        period[msg.sender] = 0;
        
        emit ContractDoneEvent(msg.sender,weiValue, now);
        
    }


	//  ���e�Ѭ�
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

	// �ˬd�Ȧ�b��l�B
    function getBankBalance() public view returns (uint256) {
        return balance[msg.sender];
    }

    function kill() public isOwner {
        selfdestruct(owner);
    }
}  