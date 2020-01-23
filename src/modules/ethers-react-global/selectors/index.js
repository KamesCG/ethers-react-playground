import { useState, useEffect } from 'react';

/**
 * @function useEnableSelector
 */
export const useEnableSelector = state => {
  const [isEnabled, setEnabled] = useState(false);
  const [isDispatched, setDispatched] = useState(false);

  useEffect(() => {
    if (state.core.isEnableRequested) setDispatched(true);
  }, [state.core.isEnableRequested]);

  useEffect(() => {
    if (state.core.isEnableSuccess) setEnabled(true);
  }, [state.core.isEnableSuccess]);

  return {
    ready: isEnabled,
    dispatched: isDispatched
  };
};
