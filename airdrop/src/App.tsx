import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { Airdrop } from '../components/Airdrop';
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css';

function App() {
    return (
        <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/Yzb3CJZpfi-D1nJQ6Unb1F1xuhGGZP3T">
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "10px 20px",
                                marginBottom: "70px",

                            }}
                        >
                            <div
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    fontFamily: "'Poppins', sans-serif",
                                    color: "#000000",
                                    marginLeft: "20px",
                                }}
                            >
                                SolDrop
                            </div>
                            <div style={{ display: "flex", gap: "10px" ,marginRight: "20px"}}>
                                <WalletMultiButton style={{ padding: "8px 16px", fontSize: "14px" }} />
                                <WalletDisconnectButton style={{ padding: "8px 16px", fontSize: "14px" }} />
                            </div>
                        </div>

                        <div className="content">
                            <Airdrop />
                        </div>

                        <footer className="footer">
                            Made with ❤️ by Kartikeya Nainkhwal
                        </footer>
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;
