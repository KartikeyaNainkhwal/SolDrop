import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export function Airdrop() {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [amount, setAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    async function sendAirdropToUser() {
        if (!wallet.publicKey) {
            setStatus({
                type: "error",
                message: "Wallet not connected. Please connect your wallet first.",
            });
            return;
        }

        const lamports = Number.parseFloat(amount) * 1000000000;

        if (isNaN(lamports) || lamports <= 0) {
            setStatus({
                type: "error",
                message: "Please enter a valid amount.",
            });
            return;
        }

        setIsLoading(true);
        setStatus(null);

        try {
            const signature = await connection.requestAirdrop(wallet.publicKey, lamports);
            console.log("Transaction signature:", signature);
            setStatus({
                type: "success",
                message: `Airdrop of ${amount} SOL sent successfully!`,
            });
        } catch (error) {
            console.error("Airdrop error:", error);
            setStatus({
                type: "error",
                message: `Failed to send airdrop: ${error instanceof Error ? error.message : "Unknown error"}`,
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="airdrop-card">
            <div className="card-header">
                <h2 className="card-title">Request SOL Airdrop</h2>
                <p className="card-description">Request test SOL to be sent to your connected wallet</p>
            </div>
            <div className="card-content">
                {status && (
                    <div className={`alert ${status.type === "error" ? "alert-error" : "alert-success"}`}>
                        <div className="alert-icon">
                            {status.type === "error" ? "⚠️" : "✅"}
                        </div>
                        <div className="alert-message">
                            <h3>{status.type === "error" ? "Error" : "Success"}</h3>
                            <p>{status.message}</p>
                        </div>
                    </div>
                )}

                <div className="input-group">
                    <label htmlFor="amount">Amount (SOL)</label>
                    <input
                        id="amount"
                        type="number"
                        placeholder="0.1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        disabled={isLoading}
                    />
                </div>

                <div className="wallet-info">
                    {wallet.publicKey ? (
                        <p>
                            Connected: {wallet.publicKey.toString()}
                        </p>
                    ) : (
                        <p>Wallet not connected</p>
                    )}
                </div>
            </div>
            <div className="card-footer">
                <button
                    onClick={sendAirdropToUser}
                    disabled={isLoading || !wallet.publicKey}
                    className="request-button"
                >
                    {isLoading ? "Processing..." : "Request Airdrop"}
                </button>
            </div>
        </div>
    );
}