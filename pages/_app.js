import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import withReduxStore from "../common/withReduxStore";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ToastContainer } from 'react-toastify';


function MyApp({ Component, pageProps,reduxStore,reduxPresitor}) {
  return ( 
  <Provider store={reduxStore}>
    <PersistGate loading={null} persistor={reduxPresitor}>
        <Component {...pageProps} />
        <ToastContainer/>
    </PersistGate>
  </Provider>
  );
 
}

export default withReduxStore(MyApp)
