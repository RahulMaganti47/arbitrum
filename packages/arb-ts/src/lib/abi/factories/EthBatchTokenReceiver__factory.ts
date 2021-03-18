/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import {
  Contract,
  ContractFactory,
  PayableOverrides,
} from '@ethersproject/contracts'

import type { EthBatchTokenReceiver } from '../EthBatchTokenReceiver'

export class EthBatchTokenReceiver__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: EthBatchTokenReceiverLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      EthBatchTokenReceiver__factory.linkBytecode(linkLibraryAddresses),
      signer
    )
  }

  static linkBytecode(
    linkLibraryAddresses: EthBatchTokenReceiverLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$6bf011c07207fd4b4f621f21ef466e3cdb\\$__', 'g'),
      linkLibraryAddresses['__$6bf011c07207fd4b4f621f21ef466e3cdb$__']
        .replace(/^0x/, '')
        .toLowerCase()
    )

    return linkedBytecode
  }

  deploy(
    _inbox: string,
    _l2Deployer: string,
    _maxGas: BigNumberish,
    _gasPrice: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<EthBatchTokenReceiver> {
    return super.deploy(
      _inbox,
      _l2Deployer,
      _maxGas,
      _gasPrice,
      overrides || {}
    ) as Promise<EthBatchTokenReceiver>
  }
  getDeployTransaction(
    _inbox: string,
    _l2Deployer: string,
    _maxGas: BigNumberish,
    _gasPrice: BigNumberish,
    overrides?: PayableOverrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _inbox,
      _l2Deployer,
      _maxGas,
      _gasPrice,
      overrides || {}
    )
  }
  attach(address: string): EthBatchTokenReceiver {
    return super.attach(address) as EthBatchTokenReceiver
  }
  connect(signer: Signer): EthBatchTokenReceiver__factory {
    return super.connect(signer) as EthBatchTokenReceiver__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EthBatchTokenReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EthBatchTokenReceiver
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l2Deployer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPrice',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'codeHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
    ],
    name: 'distributeBatch',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    name: 'finalizeBuddyDeploy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'contract IInbox',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'contractInitCode',
        type: 'bytes',
      },
    ],
    name: 'initiateBuddyDeploy',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Buddy',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Connection',
    outputs: [
      {
        internalType: 'enum L1Buddy.L2Connection',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Deployer',
    outputs: [
      {
        internalType: 'contract BuddyDeployer',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'width',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'bytes32[]',
        name: 'peaks',
        type: 'bytes32[]',
      },
      {
        internalType: 'bytes32[]',
        name: 'siblings',
        type: 'bytes32[]',
      },
    ],
    name: 'redeemWithdrawal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405260405162001bc138038062001bc1833981810160405260808110156200002957600080fd5b50805160208083015160408085015160609095015160008054600180546001600160a01b03808a166001600160a01b0319909216919091179091558516610100026001600160a81b031990911617905590519394919391929091620000be91849184916200009990820162000557565b6020820181038252601f19601f82011660405250620000c860201b6200059e1760201c565b5050505062000565565b600260005460ff166002811115620000dc57fe5b141562000124576040805162461bcd60e51b8152602060048201526011602482015270185b1c9958591e4818dbdb9b9958dd1959607a1b604482015290519081900360640190fd5b60035415806200013b575080516020820120600354145b6200018d576040805162461bcd60e51b815260206004820152601e60248201527f4f6e6c792072657472792069662073616d65206465706c6f7920636f64650000604482015290519081900360640190fd5b60405160206024820181815283516044840152835160609363658c6a1d60e11b9386939283926064019185019080838360005b83811015620001da578181015183820152602001620001c0565b50505050905090810190601f168015620002085780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909616959095179094525091925050341590506200035d5760015460008054604051630bd22ceb60e31b815260048101888152602482018890526101009092046001600160a01b03908116604483018190526080606484019081528751608485015287519290961695635e9167589534958c958c958b94929360a4909201916020860191908190849084905b83811015620002d7578181015183820152602001620002bd565b50505050905090810190601f168015620003055780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303818588803b1580156200032757600080fd5b505af11580156200033c573d6000803e3d6000fd5b50505050506040513d60208110156200035457600080fd5b50620004709050565b600154600080546040516345318d5360e11b815260048101888152602482018890526001600160a01b036101009093048316604483018190526064830185905260a060848401908152875160a485015287519490961695638a631aa6958b958b95939491938a939160c4909101906020850190808383895b83811015620003ef578181015183820152602001620003d5565b50505050905090810190601f1680156200041d5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b1580156200044157600080fd5b505af115801562000456573d6000803e3d6000fd5b505050506040513d60208110156200046d57600080fd5b50505b8180519060200120600381905550620004ad600060019054906101000a90046001600160a01b031630600354620004e060201b62000f9a1760201c565b600280546001600160a01b0319166001600160a01b039290921691909117905550506000805460ff191660011790555050565b604080517fff000000000000000000000000000000000000000000000000000000000000006020808301919091526001600160601b0319606087901b1660218301526001600160a01b0385166035830152605580830185905283518084039091018152607590920190925280519101209392505050565b6105bc806200160583390190565b61109080620005756000396000f3fe6080604052600436106100765760003560e01c806306cad3381461007b5780630f3be77b146100a957806318edaaf2146101595780634caa1a7514610180578063580d8455146101b15780635cccb974146103025780639861c6631461032c578063a432298014610365578063fb0e722b1461037a575b600080fd5b34801561008757600080fd5b506100a76004803603602081101561009e57600080fd5b5035151561038f565b005b6100a7600480360360608110156100bf57600080fd5b813591602081013591810190606081016040820135600160201b8111156100e557600080fd5b8201836020820111156100f757600080fd5b803590602001918460018302840111600160201b8311171561011857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061059e945050505050565b34801561016557600080fd5b5061016e61098e565b60408051918252519081900360200190f35b34801561018c57600080fd5b50610195610994565b604080516001600160a01b039092168252519081900360200190f35b3480156101bd57600080fd5b506100a7600480360360c08110156101d457600080fd5b6001600160a01b038235169160208101359160408201359160608101359181019060a081016080820135600160201b81111561020f57600080fd5b82018360208201111561022157600080fd5b803590602001918460208302840111600160201b8311171561024257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561029157600080fd5b8201836020820111156102a357600080fd5b803590602001918460208302840111600160201b831117156102c457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506109a3945050505050565b34801561030e57600080fd5b506100a76004803603602081101561032557600080fd5b5035610d1e565b34801561033857600080fd5b50610341610f6e565b6040518082600281111561035157fe5b60ff16815260200191505060405180910390f35b34801561037157600080fd5b50610195610f77565b34801561038657600080fd5b50610195610f8b565b600160005460ff1660028111156103a257fe5b146103de5760405162461bcd60e51b815260040180806020018281038252602181526020018061103a6021913960400191505060405180910390fd5b600154604080516373c6754960e11b815290516000926001600160a01b03169163e78cea92916004808301926020929190829003018186803b15801561042357600080fd5b505afa158015610437573d6000803e3d6000fd5b505050506040513d602081101561044d57600080fd5b50516040805163ab5d894360e01b815290516001600160a01b039092169163ab5d894391600480820192602092909190829003018186803b15801561049157600080fd5b505afa1580156104a5573d6000803e3d6000fd5b505050506040513d60208110156104bb57600080fd5b505160005460408051634032458160e11b815290519293506001600160a01b03610100909204821692918416916380648b0291600480820192602092909190829003018186803b15801561050e57600080fd5b505afa158015610522573d6000803e3d6000fd5b505050506040513d602081101561053857600080fd5b50516001600160a01b03161461057f5760405162461bcd60e51b81526004018080602001828103825260228152602001806110186022913960400191505060405180910390fd5b81156105925761058d610ffe565b61059a565b61059a611006565b5050565b600260005460ff1660028111156105b157fe5b14156105f8576040805162461bcd60e51b8152602060048201526011602482015270185b1c9958591e4818dbdb9b9958dd1959607a1b604482015290519081900360640190fd5b600354158061060e575080516020820120600354145b61065f576040805162461bcd60e51b815260206004820152601e60248201527f4f6e6c792072657472792069662073616d65206465706c6f7920636f64650000604482015290519081900360640190fd5b60405160206024820181815283516044840152835160609363658c6a1d60e11b9386939283926064019185019080838360005b838110156106aa578181015183820152602001610692565b50505050905090810190601f1680156106d75780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909616959095179094525091925050341590506108245760015460008054604051630bd22ceb60e31b815260048101888152602482018890526101009092046001600160a01b03908116604483018190526080606484019081528751608485015287519290961695635e9167589534958c958c958b94929360a4909201916020860191908190849084905b838110156107a357818101518382015260200161078b565b50505050905090810190601f1680156107d05780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303818588803b1580156107f157600080fd5b505af1158015610805573d6000803e3d6000fd5b50505050506040513d602081101561081c57600080fd5b506109319050565b600154600080546040516345318d5360e11b815260048101888152602482018890526001600160a01b036101009093048316604483018190526064830185905260a060848401908152875160a485015287519490961695638a631aa6958b958b95939491938a939160c4909101906020850190808383895b838110156108b457818101518382015260200161089c565b50505050905090810190601f1680156108e15780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b15801561090457600080fd5b505af1158015610918573d6000803e3d6000fd5b505050506040513d602081101561092e57600080fd5b50505b81516020830120600381905560005461095b916101009091046001600160a01b0316903090610f9a565b600280546001600160a01b0319166001600160a01b039290921691909117905550506000805460ff191660011790555050565b60035481565b6002546001600160a01b031681565b6004546109e9576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d253925512505312569151608a1b604482015290519081900360640190fd5b60008381526006602052604090205460ff1615610a40576040805162461bcd60e51b815260206004820152601060248201526f1053149150511657d49151115153515160821b604482015290519081900360640190fd5b6000838152600660209081526040808320805460ff1916600117905560045481516001600160a01b038b16818501528083018a9052825180820384018152606082019384905263265f6e0160e21b90935260648101828152608482018a905260a4820189905260c060c483019081528451610124840152845173__$6bf011c07207fd4b4f621f21ef466e3cdb$__9763997db8049795968d968d9691958d958d959194909360e481019361010482019361014490920192908a0191908190849084905b83811015610b1b578181015183820152602001610b03565b50505050905090810190601f168015610b485780820380516001836020036101000a031916815260200191505b508481038352865181528651602091820191808901910280838360005b83811015610b7d578181015183820152602001610b65565b50505050905001848103825285818151815260200191508051906020019060200280838360005b83811015610bbc578181015183820152602001610ba4565b50505050905001995050505050505050505060206040518083038186803b158015610be657600080fd5b505af4158015610bfa573d6000803e3d6000fd5b505050506040513d6020811015610c1057600080fd5b50511515600114610c54576040805162461bcd60e51b81526020600482015260096024820152682120a22fa82927a7a360b91b604482015290519081900360640190fd5b6005546040805163a9059cbb60e01b81526001600160a01b038981166004830152602482018990529151919092169163a9059cbb9160448083019260209291908290030181600087803b158015610caa57600080fd5b505af1158015610cbe573d6000803e3d6000fd5b505050506040513d6020811015610cd457600080fd5b5051610d16576040805162461bcd60e51b815260206004820152600c60248201526b2120a22faa2920a729a322a960a11b604482015290519081900360640190fd5b505050505050565b600260005460ff166002811115610d3157fe5b14610d73576040805162461bcd60e51b815260206004820152600d60248201526c139bdd0818dbdb9b9958dd1959609a1b604482015290519081900360640190fd5b6002546001600160a01b0316610dc3576040805162461bcd60e51b815260206004820152601060248201526f1b0c88189d59191e481b9bdd081cd95d60821b604482015290519081900360640190fd5b600154604080516373c6754960e11b815290516000926001600160a01b03169163e78cea92916004808301926020929190829003018186803b158015610e0857600080fd5b505afa158015610e1c573d6000803e3d6000fd5b505050506040513d6020811015610e3257600080fd5b50516040805163ab5d894360e01b815290516001600160a01b039092169163ab5d894391600480820192602092909190829003018186803b158015610e7657600080fd5b505afa158015610e8a573d6000803e3d6000fd5b505050506040513d6020811015610ea057600080fd5b505160408051634032458160e11b815290519192506001600160a01b038316916380648b0291600480820192602092909190829003018186803b158015610ee657600080fd5b505afa158015610efa573d6000803e3d6000fd5b505050506040513d6020811015610f1057600080fd5b50516002546001600160a01b03908116911614610f68576040805162461bcd60e51b81526020600482015260116024820152704e6f742066726f6d206c3220627564647960781b604482015290519081900360640190fd5b50600455565b60005460ff1681565b60005461010090046001600160a01b031681565b6001546001600160a01b031681565b604080516001600160f81b03196020808301919091526bffffffffffffffffffffffff19606087901b1660218301526001600160a01b0385166035830152605580830185905283518084039091018152607590920190925280519101209392505050565b611006611008565b565b6000805460ff1916600217905556fe57726f6e67204c3220616464726573732074726967676572696e67206f7574626f78436f6e6e656374696f6e206e6f7420696e20696e69746961746564207374617465a26469706673582212206e6a68f7a88c4e8f6f7cc68b725a1946bf630359d368111d7a6cdb87580fe84864736f6c634300060b0033608060405234801561001057600080fd5b5061059c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063733490d01461003b578063d5d683a414610045575b600080fd5b610043610062565b005b6100436004803603602081101561005b57600080fd5b50356103a7565b6005544310156100a4576040805162461bcd60e51b81526020600482015260086024820152672a27a7afa9a7a7a760c11b604482015290519081900360640190fd5b60646001600160a01b031663928c169a30600073__$6bf011c07207fd4b4f621f21ef466e3cdb$__63c522e7bc90916040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561010757600080fd5b505af415801561011b573d6000803e3d6000fd5b505050506040513d602081101561013157600080fd5b50516006546040805163c2eeeebd60e01b815290516001600160a01b039092169163c2eeeebd91600480820192602092909190829003018186803b15801561017857600080fd5b505afa15801561018c573d6000803e3d6000fd5b505050506040513d60208110156101a257600080fd5b5051604080516024808201949094526001600160a01b03928316604480830191909152825180830382018152606492830184526020810180516001600160e01b0316630c9fb1e560e11b178152845160e08a901b6001600160e01b03191681529588166004870190815296860194855281519286019290925280519095949092019180838360005b8381101561024257818101518382015260200161022a565b50505050905090810190601f16801561026f5780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b15801561028f57600080fd5b505af11580156102a3573d6000803e3d6000fd5b505050506040513d60208110156102b957600080fd5b5050600654604080516370a0823160e01b8152306004820181905291516001600160a01b039093169263f3fef3a3929184916370a0823191602480820192602092909190829003018186803b15801561031157600080fd5b505afa158015610325573d6000803e3d6000fd5b505050506040513d602081101561033b57600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b039093166004840152602483019190915251604480830192600092919082900301818387803b15801561038b57600080fd5b505af115801561039f573d6000803e3d6000fd5b503392505050ff5b600654604080516323b872dd60e01b81523360048201523060248201526044810184905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b15801561040157600080fd5b505af1158015610415573d6000803e3d6000fd5b505050506040513d602081101561042b57600080fd5b5051610470576040805162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b604482015290519081900360640190fd5b604080513360208083019190915281830184905282518083038401815260608301808552637319a76f60e11b905260006064840181815260848501958652825160a4860152825173__$6bf011c07207fd4b4f621f21ef466e3cdb$__9663e6334ede9693959293909260c49091019190850190808383895b838110156105005781810151838201526020016104e8565b50505050905090810190601f16801561052d5780820380516001836020036101000a031916815260200191505b50935050505060006040518083038186803b15801561054b57600080fd5b505af415801561055f573d6000803e3d6000fd5b505050505056fea2646970667358221220c9e6c37ef1a41283a1b4bb9e2562423ac1c8a0f6aa04ec7d0f0ee3027919a0eb64736f6c634300060b0033'

export interface EthBatchTokenReceiverLibraryAddresses {
  ['__$6bf011c07207fd4b4f621f21ef466e3cdb$__']: string
}