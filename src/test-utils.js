import { render } from '@testing-library/react';
import { theme } from 'assets/styles/theme';
import AppProvider from 'providers/AppProvider';

const AllProviders = ({ children }) => <AppProvider theme={theme}>{children}</AppProvider>;

const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options });

// re-export all stuff
export * from '@testing-library/react';

// overwrite common custom with custom wrapped with providers
export { customRender as render };
