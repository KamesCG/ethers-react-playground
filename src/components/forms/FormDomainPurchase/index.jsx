/* --- Global --- */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { withEthers, hooks } from "@ethers-react/system";

/* --- Form : Component --- */
const DomainPurchase = props => {
  const ethersProvider = withEthers();
  const { handleSubmit, register, errors } = useForm();

  const transactionRequest = hooks.useWalletSendTransaction({});

  const onSubmit = async values => {
    let tx = {
      to: values.address,
      value: ethersProvider.instance.utils.parseEther(values.amount),
      data: values.data
    };
    transactionRequest.init(ethersProvider.wallet, tx);
  };

  useEffect(() => {
    console.log(transactionRequest);
  }, [transactionRequest]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Atom.Flex alignCenter>
        <Molecule.Field
          name="subDomain"
          placeholder="Sub-Domain"
          // defaultValue={ethersProvider.address}
          register={register}
          errors={errors}
          sx={styles.field}
          sxWrapper={{
            flex: 3
          }}
        />

        <Atom.Flex
          center
          sx={{
            bg: "neutral",
            color: "text",
            flex: 2,
            p: 3,
            height: 50,
            width: 200
          }}
        >
          <Atom.Span sx={{}}>.milliondevs.eth</Atom.Span>
        </Atom.Flex>

        <Atom.Flex>
          <Atom.Button
            md
            type="button"
            gradient="amin"
            direction={180}
            sx={styles.button}
          >
            Earn
          </Atom.Button>
          <Atom.Button md gradient="green" direction={180} sx={styles.button}>
            Purchase
          </Atom.Button>
        </Atom.Flex>
      </Atom.Flex>
    </form>
  );
};

const styles = {
  field: {
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: 0,
    flex: 3,
    height: 50,
    p: 10
    // width: "100%"
  },
  button: {
    height: 50,
    flex: 1,
    width: 200
  }
};

DomainPurchase.defaultProps = {
  label: "Purchase"
};

export default DomainPurchase;
