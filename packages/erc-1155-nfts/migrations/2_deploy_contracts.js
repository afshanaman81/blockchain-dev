const factoryContract = artifacts.require("Factory");
const nftContract = artifacts.require("NFT_ERC1155");

module.exports = function (deployer) {
  deployer.deploy(factoryContract);
  deployer.deploy(nftContract);
};
