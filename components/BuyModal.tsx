
import React from 'react';
import { XMarkIcon } from './icons/XMarkIcon';

interface BuyModalProps {
  show: boolean;
  onClose: () => void;
}

const BuyModal: React.FC<BuyModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-slate-900 rounded-2xl border border-slate-700/50 shadow-2xl w-full max-w-lg transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">How to Buy $SAB</h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="step">
            <h3 className="text-lg font-semibold text-indigo-400 mb-1">1. Get a Crypto Wallet</h3>
            <p className="text-slate-300">You'll need a wallet that supports ERC-20 tokens, like MetaMask or Trust Wallet. Download and set it up on your browser or mobile device.</p>
          </div>
          <div className="step">
            <h3 className="text-lg font-semibold text-indigo-400 mb-1">2. Fund Your Wallet with ETH</h3>
            <p className="text-slate-300">Buy Ethereum (ETH) from a major exchange (like Coinbase, Binance, etc.) and send it to your personal wallet address.</p>
          </div>
          <div className="step">
            <h3 className="text-lg font-semibold text-indigo-400 mb-1">3. Go to a Decentralized Exchange (DEX)</h3>
            <p className="text-slate-300">Connect your wallet to a DEX like Uniswap. Use the official link to avoid scams.</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
              Go to Uniswap
            </a>
          </div>
            <div className="step">
            <h3 className="text-lg font-semibold text-indigo-400 mb-1">4. Swap ETH for $SAB</h3>
            <p className="text-slate-300">Enter the amount of ETH you want to swap. You may need to import the $SAB token by pasting our contract address.</p>
            <div className="mt-3 bg-slate-800 p-3 rounded-lg">
                <p className="text-sm text-slate-400">SAB Contract Address:</p>
                <p className="font-mono text-white break-all text-sm">0xAbC...deF</p>
            </div>
            </div>
        </div>
            <div className="p-6 bg-slate-950/50 rounded-b-2xl text-center">
            <p className="text-xs text-slate-500">Always double-check contract addresses and be mindful of transaction fees (gas). Happy trading!</p>
            </div>
      </div>
    </div>
  );
};

export default BuyModal;
