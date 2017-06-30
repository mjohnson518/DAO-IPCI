/* eslint quote-props: 0 */
/* eslint quotes: 0 */
/* eslint object-curly-spacing: 0 */
/* eslint key-spacing: 0 */
/* eslint comma-spacing: 0 */
export default [{ constant: false, inputs: [{ name: '_uri', type: 'string' }], name: 'setSecurityCheck', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_beneficiary', type: 'address' }], name: 'setBeneficiary', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'beneficiary', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_buildingCostWei', type: 'uint256' }], name: 'setCost', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'buildingCostWei', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_name', type: 'string' }, { name: '_symbol', type: 'string' }, { name: '_decimals', type: 'uint8' }, { name: '_operator_core', type: 'address' }, { name: '_group', type: 'string' }, { name: '_client', type: 'address' }], name: 'create', outputs: [{ name: '', type: 'address' }], payable: true, type: 'function' }, { constant: true, inputs: [], name: 'getLastContract', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }, { name: '', type: 'uint256' }], name: 'getContractsOf', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'securityCheckURI', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { anonymous: false, inputs: [{ indexed: true, name: 'client', type: 'address' }, { indexed: true, name: 'instance', type: 'address' }], name: 'Builded', type: 'event' }]
