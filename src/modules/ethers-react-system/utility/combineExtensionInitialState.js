export const combineExtensionInitialState = extensions =>
  extensions
    .map(({ name, initialState }) => {
      return { name, initialState };
    })
    .reduce((acc = {}, { initialState }) => {
      return { ...acc, ...initialState };
    }, {});
