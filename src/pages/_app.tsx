import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider autoDismiss={false} autoDismissTimeout={1000}> 
        <Component {...pageProps} />
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default MyApp;
