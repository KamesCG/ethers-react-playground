/* --- Local --- */
import { ExampleCard } from "@components";
import {
  Address,
  AccountBalance,
  AccountNonce,
  Enable,
  NetworkName,
  NetworkID,
  Providers,
  TransactionLocal,
  TransactionGlobal,
  TransferLocal,
  TokenDeploy,
  ApproveLocal
} from "@ethers-react/ui";

/* --- Component : EthersHookTransactionExample --- */
export const EthersHookTransactionExample = props => {
  return (
    <Atom.Box>
      <Atom.Flex
        alignCenter
        between
        sx={{
          bg: "neutral",
          borderRadius: 12,
          p: 3
        }}
      >
        <a href="#useWalletSendTransaction">
          <Atom.Heading as="h4" m0 xl>
            <Atom.Span sx={{ fontWeight: 300 }}>hooks.</Atom.Span>
            useWalletSendTransaction
          </Atom.Heading>
        </a>
        <Atom.Span tag>Dispatch transaction to the blockchain</Atom.Span>
      </Atom.Flex>
      {/* Schema : Example */}
      <ExampleCard>
        <Atom.Box sx={{ p: 3 }}>
          <Atom.Heading as="h5" xxl>
            Schema
          </Atom.Heading>
          <Atom.Paragraph sm>
            The useWalletSendTransaction hook helps developers initialize and
            track the transaction lifecyle state: dispatched, broadcast and
            confirmed.
          </Atom.Paragraph>
          <ul>
            <li>
              <strong>dispatched:</strong> Local application.
            </li>
            <li>
              <strong>broadcast:</strong> in the blockchain memepool.
            </li>
            <li>
              <strong>confirmed:</strong> transaction confirmed or rejected on
              public chain.
            </li>
          </ul>
        </Atom.Box>
        <Molecule.CodeHighlight>
          {`
{
  init,
  isBroadacast: isTransactionBroadcast,
  isConfirmed: isTransactionConfirmed,
  hash: transactionHash,
  broadcast: transactionBroadcast,
  confirmed: transactionConfirmed,
  broadcastError: transactionBroadcastError,
  confirmedError: transactionConfirmedError
}
  `}
        </Molecule.CodeHighlight>
      </ExampleCard>

      {/* Initialize Dispatch : Example */}
      <ExampleCard>
        <Atom.Box sx={{ p: 3 }}>
          <Atom.Heading as="h5" xxl>
            Initialize Dispatch
          </Atom.Heading>
          <Atom.Paragraph sm>
            The first step is to initialize ethers-react provider. The provider
            manages global state, provides blockchain selectors and enables
            other important functionality.
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

      <Atom.Flex>
        <Atom.Box sx={{ flex: 1, p: 3 }}>
          <TransactionLocal />
        </Atom.Box>
        <Atom.Box sx={{ flex: 1, p: 3 }}></Atom.Box>
      </Atom.Flex>
    </Atom.Box>
  );
};
