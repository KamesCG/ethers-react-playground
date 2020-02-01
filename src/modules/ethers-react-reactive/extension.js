import * as hooks from "./hooks";
import reducer from "./reducer";
export const extension = {
  name: "ethers-react-reactive",
  hooks,
  reducer,
  initialState: {
    blockCurrent: 0,
    reactive: {
      watchAccountBalance: false,
      watchAccountOnChange: false,
      watchAccountNonce: false,
      watchBlockCurrent: false
    }
  }
};
