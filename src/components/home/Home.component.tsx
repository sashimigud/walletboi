import React, { FC, useState } from 'react';
import './home.styles.scss';
declare let window: any;

const Home: FC = () => {
  const [currentAccount, setCurrentAccount] = useState(null);

  async function connectWalletHandler() {
    if (!window.ethereum) {
      alert('install metamask');
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('found account: ', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="home-container">
      <div className="logo-container">
        <h1>Wallet</h1>
        <h1>Boi</h1>
      </div>

      {currentAccount ? (
        <div className="current-account">
          Welcome <span>{currentAccount}</span>
        </div>
      ) : (
        <div
          className="connect-wallet-btn"
          onClick={() => connectWalletHandler()}>
          Connect wallet
        </div>
      )}
    </div>
  );
};

export default Home;
