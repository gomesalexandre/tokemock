async function main() {
  const Manager = await ethers.getContractFactory("Manager");
  const manager = await Manager.deploy();
  await manager.deployed()
  const managerAddress = manager.address

  const Pool = await ethers.getContractFactory("Pool");
  const pool = await Pool.deploy();
  await pool.deployed()
  const poolAddress = pool.address;

  await pool.initialize(
        '0x07865c6e87b9f70255377e024ace6630c1eaa37f', // underlyer
        managerAddress,
        'USD Coin',
        'USDC,'
  )

  const Rewards = await ethers.getContractFactory("Rewards");
  const rewards = await Rewards.deploy(
    '0xdcc9439fe7b2797463507dd8669717786e51a014', // Goerli Tokemak, maybe not the "real" one
    '0x0000000000000000000000000000000000000000' // second unused arg, to make solc happy
  );
  await rewards.deployed()
  const rewardsAddress = rewards.address
  console.log({managerAddress, poolAddress, rewardsAddress})
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
