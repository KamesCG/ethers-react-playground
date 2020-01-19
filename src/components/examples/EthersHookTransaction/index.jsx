import { ExampleCard } from "@components";

/* --- Component --- */
const EthersCoreSetup = props => {
  return (
    <ExampleCard>
      <Atom.Box sx={{ p: 3 }}>
        <Atom.Heading as="h5" xxl>
          Initialize Dispatch
        </Atom.Heading>
        <Atom.Paragraph>
          The first step is to initialize ethers-react provider. The provider
          manages global state, provides blockchain selectors and enables other
          important functionality.
        </Atom.Paragraph>
      </Atom.Box>
      <Molecule.CodeHighlight>
        {`
const { handleSubmit, register, errors } = useForm();

const transactionRequest = hooks.useWalletSendTransaction();

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
  `}
      </Molecule.CodeHighlight>
    </ExampleCard>
  );
};
export default EthersCoreSetup;
