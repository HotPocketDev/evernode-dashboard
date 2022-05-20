import React from 'react'

const evernode = require("evernode-js-client");

const { createContext, useContext } = React;

const EvernodeContext = createContext(null);

export const EvernodeProvider = (props) => {
    const value = {
        getRegistryAddress: props.getRegistryAddress || getRegistryAddress,
        getEnvironment: props.getEnvironment || getEnvironment,
        getConfigs: props.getConfigs || getConfigs,
        getTos: props.getTos || getTos,
        getHosts: props.getHosts || getHosts,
        decodeLeaseUri: props.decodeLeaseUri || decodeLeaseUri,
        getHostInfo: props.getHostInfo || getHostInfo,
        getLeases: props.getLeases || getLeases,
        getEVRBalance: props.getEVRBalance || getEVRBalance,
        onLedger: props.onLedger || onLedger
    }

    xrplApi.connect();

    return (
        <EvernodeContext.Provider value={value}>
            {props.children}
        </EvernodeContext.Provider>
    )
}

export const useEvernode = () => {
    return useContext(EvernodeContext)
}

const registryAddress = process.env.REACT_APP_REGISTRY_ADDRESS;
const environment = 'XRPL NFT DevNet';
let licenceUrl = 'https://stevernode.blob.core.windows.net/evernode-$ENV$/licence.txt'
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
    licenceUrl = licenceUrl.replace('$ENV$', 'dev');
else
    licenceUrl = licenceUrl.replace('$ENV$', 'beta');

const xrplApi = new evernode.XrplApi();
evernode.Defaults.set({
    registryAddress: registryAddress,
    xrplApi: xrplApi
});
const regClient = new evernode.RegistryClient();

const getRegistryAddress = () => {
    return registryAddress;
}

const getEnvironment = () => {
    return environment;
}

const getConfigs = async () => {
    await regClient.connect();
    return regClient.config;
}

const getTos = async () => {
    // return await fetch(licenceUrl);
    return `
    Evernode beta Licence

Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the "Software"), to use the software for, or in connection,
with the Evernode network for the duration of the beta test.

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS IN BETA AND PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`
}

const getHosts = async (filters = null, pageSize = null, nextPageToken = null) => {
    await regClient.connect();
    return regClient.getHosts(filters, pageSize, nextPageToken);
}

const decodeLeaseUri = (uri) => {
    return evernode.UtilHelpers.decodeLeaseNftUri(uri);
}

const getHostInfo = async (address) => {
    const client = new evernode.HostClient(address);
    await client.connect();
    return await client.getRegistration();
}

const getLeases = async (address) => {
    const client = new evernode.HostClient(address);
    await client.connect();

    const nfts = await client.xrplAcc.getNfts();
    const leaseNfts = nfts.filter(n => n.URI.startsWith(evernode.EvernodeConstants.LEASE_NFT_PREFIX_HEX));

    const offers = await client.xrplAcc.getNftOffers();
    let leaseOffers = [];
    for (const offer of offers) {
        const nft = leaseNfts.find(l => l.NFTokenID === offer.NFTokenID);
        if (nft)
            leaseOffers.push({
                nfTokenId: nft.NFTokenID,
                offerIndex: offer.index,
                uri: nft.URI
            });
    }

    return leaseOffers;
}

const getEVRBalance = async (address) => {
    const client = new evernode.HostClient(address);
    await client.connect();

    return await client.getEVRBalance();
}

const onLedger = async (callback) => {
    xrplApi.on(evernode.XrplApiEvents.LEDGER, async (e) => {

        const ledgerIndex = e.ledger_index;
        const moment = await regClient.getMoment(ledgerIndex);
        callback({
            ledgerIndex: ledgerIndex,
            moment: moment
        })
    });
}