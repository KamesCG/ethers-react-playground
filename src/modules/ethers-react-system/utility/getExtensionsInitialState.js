export const getExtensionsInitialState = extensions =>
  extensions
    .map(({ name, initialState }) => {
      return { name, initialState };
    })
    .reduce((acc, cur) => {
      acc[cur.name] = cur.initialState;
      return acc;
    }, {});
