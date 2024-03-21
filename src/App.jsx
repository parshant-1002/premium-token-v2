import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from './store';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import RootRouter from './routes/RootRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Web3ModalProvider } from './shared/HOC/Web3ModalProvider';

function App() {
    return (
        <Web3ModalProvider>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <HelmetProvider>
                    <BrowserRouter>
                        {/* <Loader /> */}
                        <ToastContainer autoClose={3000} limit={3} />
                        <RootRouter />
                    </BrowserRouter>
                </HelmetProvider>
            </PersistGate>
        </Provider>
        </Web3ModalProvider>
    );
}

export default App;
