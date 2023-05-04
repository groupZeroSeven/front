import AdvertsProvider from '@/src/contexts/advertsContext';
import LoadProvider from '@/src/contexts/loadingContext';
import UserProvider from '@/src/contexts/userContext';
import StyledGlobal from '@/src/styles/global';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoadProvider>
        <UserProvider>
          <AdvertsProvider>
            <ToastContainer
              className="my-toast"
              position="top-right"
              autoClose={2500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
              theme="colored"
            />
            <StyledGlobal />
            <Component {...pageProps} />
          </AdvertsProvider>
        </UserProvider>
      </LoadProvider>
    </>
  );
}
