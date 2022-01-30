const { ethers, deployments, getNamedAccounts } = require("hardhat")
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const { expect } = chai;
const { utils } = ethers


chai.use(chaiAsPromised)

describe("Manager", function () {
  beforeEach(async () => {
    await deployments.fixture(["Manager"]);
    accounts = await ethers.getSigners();
    managerInstance = await deployments.get("Manager");
    manager = new ethers.Contract(
      managerInstance.address,
      managerInstance.abi,
      accounts[0]
    )
  });

  describe('initialize', () => {
    it('initializes with admin - other addresses cannot call onlyAdmin methods', async () => {
      await manager.initialize(61, 1643707379);
      const { userOne } = await getNamedAccounts();

      const managerUserOneSigner = manager.connect(
        userOne
      );
      await manager.registerPool('0x0000000000000000000000000000000000000000')

      await expect(managerUserOneSigner.registerPool('0x0000000000000000000000000000000000000001')).to.eventually.be.rejected
    })
  })
});

