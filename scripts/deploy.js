async function main() {
    const Ops = await ethers.getContractFactory("Operations")
  
    // Start deployment, returning a promise that resolves to a contract object
    const ops = await Ops.deploy()
    await ops.deployed()
    console.log("Contract deployed to address:", ops.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  