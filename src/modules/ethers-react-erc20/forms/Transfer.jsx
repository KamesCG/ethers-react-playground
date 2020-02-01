import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { withEthers, selectors } from "@ethers-react/system";

/* --- Transfer : Component --- */
export const Transfer = ({ contractAddress, contractName, ...props }) => {
  const { handleSubmit, register, errors } = useForm();

  /* --- Application : State --- */
  const ethersProvider = withEthers();

  /* --- Compoinent : State --- */
  const contractSelection = selectors.useSelectContractByName(contractName);

  /* --- Submit : Action --- */
  const onSubmit = async values => {
    contractSelection.contract.api.transfer(values.address, values.amount, {
      gasLimit: 100000
    });
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    console.log(contractSelection);
  }, [contractSelection]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="address"
        placeholder="Address"
        defaultValue={ethersProvider.address}
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Molecule.Field
        name="amount"
        placeholder="Amount"
        defaultValue="1000000000000000000"
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Atom.Button md disabled={!contractSelection.isFound} sx={styles.button}>
        {!contractSelection.isFound ? (
          <Atom.Span>Contract Not Found ({contractName})</Atom.Span>
        ) : (
          <Atom.Span>
            {props.label} ({contractSelection.contract.name})
          </Atom.Span>
        )}
      </Atom.Button>
    </form>
  );
};

const styles = {
  field: {
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: 0,
    p: 10,
    my: 1,
    width: "100%"
  },
  button: {
    mt: 2,
    width: "100%"
  }
};

Transfer.defaultProps = {
  label: "Submit"
};
