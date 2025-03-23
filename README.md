# **SolDrop** 🪂

**Seamless Solana Devnet Airdrops**

SolDrop is a user-friendly web application that allows users to request SOL airdrops on the Solana Devnet. Built with React and the Solana Wallet Adapter, SolDrop simplifies the process of getting test SOL for development and testing purposes.

---

## **Features** ✨

- **Connect Wallet**: Seamlessly connect your Solana wallet (e.g., Phantom, Solflare).
- **Request Airdrop**: Request SOL tokens directly to your connected wallet.
- **Devnet Support**: Works on the Solana Devnet for testing purposes.
- **Clean UI**: Modern and intuitive user interface.
- **Responsive Design**: Works on both desktop and mobile devices.

---

## **Live Demo** 🌐

Check out the live version of SolDrop: [SolDrop Live Demo](#)  
*https://sol-drop-pied.vercel.app/*

---

## **Screenshots** 📸

![SolDrop Screenshot 1](#)  
*![image](https://github.com/user-attachments/assets/841d3870-45ae-40cb-a212-912e638b1711)
*


![SolDrop Screenshot 2](#) 
 
 
*![image](https://github.com/user-attachments/assets/00151a00-1b5a-4f81-ae7b-5a0b82743997)
*
---

## **Tech Stack** 💻

- **Frontend**: React, TypeScript
- **Solana Integration**: `@solana/web3.js`, `@solana/wallet-adapter-react`
- **Styling**: CSS (with Flexbox for layout)
- **RPC Provider**: Alchemy (Solana Devnet)
- **Deployment**: Vercel/Netlify (or your preferred platform)

---

## **Getting Started** 🚀

### **Prerequisites**

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- A Solana wallet (e.g., [Phantom](https://phantom.app/))

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/soldrop.git
   cd soldrop
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run the development server**:
   ```bash
   yarn start
   # or
   npm start
   ```

4. **Open the app**:
   Visit `http://localhost:3000` in your browser.

---

## **Usage** 🛠️

1. **Connect Your Wallet**:
   - Click the "Connect Wallet" button and select your Solana wallet (e.g., Phantom).
   - Ensure your wallet is connected to the **Solana Devnet**.

2. **Request Airdrop**:
   - Enter the amount of SOL you want to request.
   - Click "Request Airdrop" to send the transaction.

3. **Check Your Wallet**:
   - Once the transaction is confirmed, the SOL tokens will appear in your wallet.

---

## **Configuration** ⚙️

### **Environment Variables**

To run this project, you need to set up the following environment variables:

- `REACT_APP_SOLANA_RPC`: Your Solana Devnet RPC endpoint (e.g., Alchemy or public RPC).

Create a `.env` file in the root directory and add the following:

```env
REACT_APP_SOLANA_RPC=https://solana-devnet.g.alchemy.com/v2/YOUR_API_KEY
```

---

## **Contributing** 🤝

Contributions are welcome! If you'd like to contribute to SolDrop, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## **License** 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments** 🙏

- [Solana](https://solana.com/) for the amazing blockchain platform.
- [Solana Wallet Adapter](https://github.com/solana-labs/wallet-adapter) for simplifying wallet integration.
- [Alchemy](https://www.alchemy.com/) for providing the Solana Devnet RPC.

---

## **Contact** 📧

If you have any questions or feedback, feel free to reach out:

- **Kartikeya Nainkhwal**  
  - GitHub: [KartikeyaNainkhwal](#)  
  - Email: [kartikeyanainkhwal@gmail.com](#)  

---

## **Support the Project** ☕

If you find this project helpful, consider supporting it:

- **Star the Repository** ⭐  
  Show your love by starring the repo on GitHub.

- **Donate** 💸  
  Send SOL to my wallet: `Your_Solana_Wallet_Address`.

---

Thank you for using **SolDrop**! 🎉  
Happy building on Solana! 🚀

---

This README is designed to be **comprehensive yet concise**, providing all the necessary information for users and developers. Let me know if you’d like to customize it further! 😊
