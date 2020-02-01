export const extensionsInitialize = (extensions, state, dispatch) =>
  extensions.map(extension => {
    return Object.values(extension.hooks).map(effect =>
      effect(state, dispatch)
    );
  });

const getExtensionsInitialState = (extensions) => extensions.map(({ name, initialState }) => {
  return { name, initialState }
}).reduce((acc, cur) => {
  acc[cur.name] = cur.initialState;
  return acc;
}, {});

const getExtensionsReducers = (extensions) => extensions.map(({ name, reducer }) => {
  return { name, reducer }
}).reduce((acc, cur) => {
  acc[cur.name] = cur.reducer;
  return acc;
}, {});

export const getExtensions = (extensions) => {
  return {
    extensionsInitialState: getExtensionsInitialState(extensions),
    extensionsReducers: getExtensionsReducers(extensions)
  }
}