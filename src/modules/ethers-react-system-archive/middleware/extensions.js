export const extensionsInitialize = (extensions, state, dispatch) =>
  extensions.map(extension => {
    return Object.values(extension.hooks).map(effect =>
      effect(state, dispatch)
    );
  });
