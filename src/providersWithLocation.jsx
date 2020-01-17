/* --- Global --- */
import {ThemeProvider} from 'theme-ui';

/* --- Local --- */
import theme from './assets/theme';

// Routing
import createHashSource from 'hash-source';
import {createHistory, LocationProvider} from '@reach/router';

/* --- Special Routing History (Useful for GitHub) --- */
let source = createHashSource();
let history = createHistory(source);

export default props => {
  return (
    <LocationProvider history={history}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </LocationProvider>
  );
};
