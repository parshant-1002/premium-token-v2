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
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { endpoint } from './shared/constants';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import "@solana/wallet-adapter-react-ui/styles.css";

function App() {

    const phantomWallet = new PhantomWalletAdapter();
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[phantomWallet]}>
                <WalletModalProvider>
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
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;
