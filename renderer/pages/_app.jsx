import React from 'react';

import '../styles/globals.css'; // _app.jsx
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { store } from '../app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (

    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
