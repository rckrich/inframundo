import { fetchCollection } from './opensea.js';

window.userWalletAddress = null;

const connectButton = document.getElementById('connectButton');
const connectButtonSpan = document.getElementById('connectButtonSpan');

function toggleButton() {
    if (!window.ethereum) {
        connectButtonSpan.innerText = 'Connect Wallet \n MetasMask is not installed!';
        connectButton.addEventListener('click', mobileUMGMetamaskDeepLink)//rich
    }
    else {//rich
        connectButton.addEventListener('click', logInWithMetaMask)
    }
}

async function logInWithMetaMask() {
    connectButtonSpan.innerText = 'Connecting..';//rich
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        .catch((e) => {
            console.error(e.message);
            connectButtonSpan.innerText = 'Connect Wallet';//rich
            return;
        });
    window.userWalletAddress = accounts[0];
    connectButtonSpan.innerText = 'Connected \n' + window.userWalletAddress;//rich
    connectButton.removeEventListener('click', logInWithMetaMask);
    setTimeout(() => {
        connectButton.addEventListener('click', signOutOfMetaMask);
    }, 200);

    /*await fetchCollection().then(response => {
        if (response) {
            //TODO: Open up bar!
            console.log("Has UMG NFT");
        } else {
            //TODO: Close up bar!
            console.log("Doesn't has UMG NFT");
        }
    }).catch((e) => {
        console.error(e.message);
    });*/

}

function signOutOfMetaMask() {
    window.userWalletAddress = null;
    connectButtonSpan.innerText = 'Connect Wallet';
    connectButton.removeEventListener('click', signOutOfMetaMask);
    setTimeout(() => {
        connectButton.addEventListener('click', logInWithMetaMask);

    }, 200);
}

function mobileUMGMetamaskDeepLink() {//rich
    window.location.href = "https://metamask.app.link/dapp/unicornmotorcyclegang.io/main";
}

window.addEventListener('DOMContentLoaded', (event) => {
    toggleButton();
})