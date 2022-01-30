const { HardhatRuntimeEnvironment } = require("hardhat/types")

const func = async function (hre) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { admin } = await getNamedAccounts();
  await deploy("Manager", {
    from: admin,
    // args: [],
    log: true,
  });
};
module.exports = func;
func.tags = ["Manager"];
