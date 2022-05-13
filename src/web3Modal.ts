import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: "INFURA_ID" // required
        }
    }
};

const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
});

export async function connect() {
    const instance = await web3Modal.connect();
    return instance;
}
