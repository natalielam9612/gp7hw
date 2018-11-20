let bankBytecode =
  "608060405260008054600160a060020a031916331790556106a9806100256000396000f30060806040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632e1a7d4d81146100925780632ef95086146100ac57806341c0e1b5146100c157806370876c98146100d65780637b83b50b146100e457806393ec49331461010b578063a9059cbb14610123578063d0e30db014610154575b600080fd5b34801561009e57600080fd5b506100aa60043561015c565b005b3480156100b857600080fd5b506100aa610255565b3480156100cd57600080fd5b506100aa6102d7565b6100aa600435602435610361565b3480156100f057600080fd5b506100f9610436565b60408051918252519081900360200190f35b34801561011757600080fd5b506100aa600435610449565b34801561012f57600080fd5b506100aa73ffffffffffffffffffffffffffffffffffffffff60043516602435610534565b6100aa610625565b33600090815260016020526040902054670de0b6b3a76400008202908111156101cf576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b604051339082156108fc029083906000818181858888f193505050501580156101fc573d6000803e3d6000fd5b5033600081815260016020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b336000818152600260209081526040808320805460038085528386208054600187528588208054606495830295909504948501905593879055908552949094558151848152429381019390935281519394909390927f44589457c9f80f6e807c0acb3d9c9ca86aabe3733875d22f061455b4519ede8692908290030190a25050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610346576040805160e560020a62461bcd02815260206004820152601160248201527f796f7520617265206e6f74206f776e6572000000000000000000000000000000604482015290519081900360640190fd5b60005473ffffffffffffffffffffffffffffffffffffffff16ff5b670de0b6b3a76400008202600c8211156103c5576040805160e560020a62461bcd02815260206004820152601460248201527f796f757220696e707574206172652077726f6e67000000000000000000000000604482015290519081900360640190fd5b3360008181526001602090815260408083208054860190556003825280832086905560028252918290208054850190558151868152908101859052428183015290517f4d28b0527b61511e95e214c4b5dc5ef6a46f03f9484a44eb6168f446530a239b9181900360600190a2505050565b3360009081526001602052604090205490565b33600090815260026020908152604080832054600390925290912054828181106104bd576040805160e560020a62461bcd02815260206004820152601460248201527f796f757220696e707574206172652077726f6e67000000000000000000000000604482015290519081900360640190fd5b336000818152600160209081526040808320805460649887029890980497880190556003825280832083905560028252808320929092558151868152429181019190915281517fee164514e4599cd84fbc246a9a9b64a48e9b9dc605a00a25b036766bfac84c1c929181900390910190a250505050565b33600090815260016020526040902054670de0b6b3a76400008202908111156105a7576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b3360008181526001602090815260408083208054869003905573ffffffffffffffffffffffffffffffffffffffff8716808452928190208054860190558051868152429281019290925280519293927fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd69281900390910190a3505050565b336000818152600160209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a25600a165627a7a72305820c17e3dcc3168c79dc1f164eeaf748da813b463fc9f06043d5eb11663419d7c480029"


let bankAbi = [
	{
		"constant": false,
		"inputs": [],
		"name": "contractDone",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "periodValue2",
				"type": "uint256"
			}
		],
		"name": "contractrelease",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "etherValue",
				"type": "uint256"
			},
			{
				"name": "periodValue",
				"type": "uint256"
			}
		],
		"name": "purchase",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "etherValue",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "etherValue",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value1",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "value2",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "PurchaseEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "ContractDoneEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "ContractReleaseEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "DepositEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "WithdrawEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "TransferEvent",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBankBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]