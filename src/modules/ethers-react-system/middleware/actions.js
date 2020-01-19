/**
 * @function enhanceActions
 * @description Wrap extenion actions with dispatch
 */
export const enhanceActions = (extensions, dispatch) => {
  let actions = {};
  extensions.map(extension => {
    if (extension.actions) {
      return Object.keys(extension.actions).forEach(action => {
        actions[action] = extension.actions[action](dispatch);
      });
    }
  });
  return actions;
};
