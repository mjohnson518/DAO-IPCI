/* eslint quote-props: 0 */
/* eslint quotes: 0 */
/* eslint object-curly-spacing: 0 */
/* eslint key-spacing: 0 */
/* eslint comma-spacing: 0 */
export default [{ constant: true, inputs: [], name: 'count', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: 'txId', type: 'string' }, { name: 'ipfs', type: 'string' }], name: 'append', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'list', outputs: [{ name: 'txId', type: 'string' }, { name: 'ipfs', type: 'string' }, { name: 'owner', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: 'txId', type: 'string' }], name: 'getIndex', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }]