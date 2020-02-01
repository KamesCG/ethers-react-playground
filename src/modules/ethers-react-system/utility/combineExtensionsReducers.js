export const combineExtensionsReducers = extensions => {
  return (state = {}, action) => {
    let nextState = state;
    for (let i = 0; i < extensions.length; i++) {
      const ext = extensions[i];
      if (ext.reducer) {
        const nextStateForKey = ext.reducer(nextState, action);
        nextState = { ...nextState, ...nextStateForKey };
      }
    }
    return nextState;
  };
};
