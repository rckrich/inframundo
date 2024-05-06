const options = { method: 'GET', headers: { Accept: 'application/json' } };

export async function fetchCollection() {

    if (window.ethereum) {

        if (window.userWalletAddress == null) {
            console.log('No wallet connected!');
            return;
        }
        
        let hasNFT = false;

        await fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${window.userWalletAddress}&offset=0&limit=300`, options)
            .then(response =>  response.json().then(data => {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].name == "Unicorn Motorcycle Gang") {
                        hasNFT = true;
                        break;
                    }else{
                        hasNFT = false;
                    }
                }
            }))
            .catch(err => console.error(err));
        return hasNFT;
    } else {
        console.log('MetasMask is not installed!');
        return false;
    }
}

export async function fetchCollectionWithWallet(_wallet) {

    if (window.ethereum) {

        if (_wallet == null) {
            Console.log('No wallet connected!');
            return;
        }
        
        let hasNFT = false;

        await fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${_wallet}&offset=0&limit=300`, options)
            .then(response =>  response.json().then(data => {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].name == "Unicorn Motorcycle Gang") {
                        hasNFT = true;
                        break;
                    }else{
                        hasNFT = false;
                    }
                }
            }))
            .catch(err => console.error(err));
        return hasNFT;
    } else {
        console.log('MetasMask is not installed!');
        return false;
    }
}
