const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')

const whitelistWallets = [
    '0x2d5d0f2b1a9f8e7f8f0c5e7c8d3b5c4f9c1c8c8',
    '0x56380d757eE8707c7C26b1036F671316e3cB8234',
    '0x452E69eebC19296270b8ED2f691891AA9E513397',
    '0x452E69eebC19296270b8ED2f691891AA9E513399',
    '0x7f2d4062D7D4b106DFDe98343bd50D179b406dF5'
 ]

const leafNodes = whitelistWallets.map(addr => keccak256(addr))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

const rootHash = merkleTree.getRoot()
console.log('Root hash: 0x' + rootHash.toString('hex'))


//Generating proof
const claimingAddress = '0x7f2d4062D7D4b106DFDe98343bd50D179b406dF5'
const hexProof = merkleTree.getHexProof(keccak256(claimingAddress))
console.log('Hex proof: ' + hexProof)
