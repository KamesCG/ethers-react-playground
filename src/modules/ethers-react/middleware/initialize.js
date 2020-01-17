/**
 * @function contractLoad
 */
export const contractLoad = contracts => initialState => {
  let deployed = {};

  contracts.forEach(contract => {
    contract.address
      ? (deployed[contract.address] = {
          address: contract.address,
          abi: contract.abi,
          bytecode: contract.bytecode,
          id: contract.id,
          network: contract.network
        })
      : (deployed[contract.id] = {
          abi: contract.abi,
          bytecode: contract.bytecode
        });
  });

  return {
    ...initialState,
    contracts: {
      ...deployed
    }
  };
};
