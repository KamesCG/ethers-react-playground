export const getExtensionsReducers = extensions =>
  extensions
    .map(({ name, reducer }) => {
      return { name, reducer };
    })
    .reduce((acc, cur) => {
      acc[cur.name] = cur.reducer;
      return acc;
    }, {});
