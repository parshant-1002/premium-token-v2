import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from './store';
import { useEffect, useState } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { endpoint } from './shared/constants';
import { CoinbaseWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter, WalletConnectWalletAdapter } from '@solana/wallet-adapter-wallets';
import Loader from './shared/components/loader';
import RootRouter from './routes/RootRouter';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@solana/wallet-adapter-react-ui/styles.css";
import './App.scss';
import ScrollToTop from './pages/home/components/ScrollTop/ScrollToTop';

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 400) {
                // Add class to body when scrolled down 400 pixels
                document.body.classList.add('scrolled');
                setScrolled(true);
            } else {
                // Remove class from body when scrolled less than 400 pixels
                document.body.classList.remove('scrolled');
                setScrolled(false);
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const phantomWallet = new PhantomWalletAdapter();
    const coinbaseWallet = new CoinbaseWalletAdapter();
    const solFlareWallet = new SolflareWalletAdapter();
    const walletConnectWallet = new WalletConnectWalletAdapter({
        network: "mainnet-beta",
        options: {
            relayUrl: 'wss://relay.walletconnect.com',
            projectId: import.meta.env.VITE_PROJECT_ID,
            metadata: {
                name: 'Premium Token',
                description: 'Premium Token',
                url: 'https://github.com/solana-labs/wallet-adapter',
                icons: ['https://avatars.githubusercontent.com/u/35608259?s=200'],
            },
            chains: ['eip155:1'],
        },
    });
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[phantomWallet, coinbaseWallet, solFlareWallet, walletConnectWallet]}>
                <WalletModalProvider>
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <HelmetProvider>
                                <BrowserRouter>
                                    <Loader />
                                    <ScrollToTop />
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
