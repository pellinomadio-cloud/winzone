import React, { useState } from 'react';
import { Icons } from './Icons';
import { User } from '../types';

interface ChixTaskPageProps {
  user: User;
  onClaim: () => void;
  onBack: () => void;
}

const ChixTaskPage: React.FC<ChixTaskPageProps> = ({ user, onClaim, onBack }) => {
  const [hasClickedJoin, setHasClickedJoin] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');

  const handleJoinClick = () => {
    window.open('https://t.me/chix9jacom', '_blank');
    setHasClickedJoin(true);
    setError('');
  };

  const handleVerifyAndClaim = () => {
    if (!hasClickedJoin) {
      setError('Please click "Join Channel" first to open and subscribe to @chix9jacom on Telegram.');
      return;
    }

    setIsVerifying(true);
    setError('');

    // Simulate verification check
    setTimeout(() => {
      setIsVerifying(false);
      onClaim();
    }, 2500);
  };

  return (
    <div className="px-4 py-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      {/* Back Button */}
      <div className="flex items-center space-x-3">
        <button 
          onClick={onBack}
          className="p-2 bg-gray-900 border border-gray-800 rounded-xl text-gray-300 hover:text-white"
        >
          <Icons.ArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-black text-white uppercase tracking-tight">Telegram Task</h2>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-br from-purple-900 via-indigo-950 to-black p-6 rounded-3xl border border-purple-500/30 text-center space-y-4 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-green-neon/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="w-16 h-16 bg-blue-500/20 rounded-2xl mx-auto flex items-center justify-center text-blue-400 border border-blue-500/30 shadow-lg">
          <Icons.Send size={32} />
        </div>

        <div>
          <span className="text-[10px] font-black bg-green-neon text-black px-3 py-1 rounded-full uppercase tracking-widest">
            Special Task
          </span>
          <h3 className="text-2xl font-black text-white mt-2">Join Telegram Channel</h3>
          <p className="text-xs text-gray-400 mt-1">
            Subscribe to <span className="text-green-neon font-bold">@chix9jacom</span> and claim your instant reward.
          </p>
        </div>

        <div className="bg-gray-900/80 p-4 rounded-2xl border border-gray-800 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-400 uppercase">Reward Amount:</span>
          <span className="text-xl font-black text-green-neon tracking-wider">₦70,000</span>
        </div>
      </div>

      {/* Task Instructions */}
      <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 space-y-4">
        <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider">Task Instructions</h4>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${hasClickedJoin ? 'bg-green-500 text-black' : 'bg-gray-800 text-gray-400'}`}>
              {hasClickedJoin ? '✓' : '1'}
            </div>
            <div>
              <p className="text-sm font-bold text-white">Join Official Channel</p>
              <p className="text-xs text-gray-400">Click the button below to join <span className="text-purple-400 font-semibold">@chix9jacom</span> on Telegram.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-7 h-7 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
              2
            </div>
            <div>
              <p className="text-sm font-bold text-white">Verify Subscription</p>
              <p className="text-xs text-gray-400">Return here and click verify to instantly receive ₦70,000 in your account balance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-950/60 border border-red-800/80 p-3.5 rounded-xl text-red-300 text-xs font-medium flex items-center space-x-2">
          <Icons.AlertTriangle size={16} className="text-red-400 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <button 
          onClick={handleJoinClick}
          className={`w-full py-4 rounded-2xl font-black transition-all flex items-center justify-center space-x-2 active:scale-95 shadow-lg ${
            hasClickedJoin 
              ? 'bg-gray-800 text-green-400 border border-green-500/30' 
              : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/30'
          }`}
        >
          <Icons.Send size={20} />
          <span>{hasClickedJoin ? '✓ Opened @chix9jacom (Joined)' : '1. Join Channel @chix9jacom'}</span>
        </button>

        <button 
          onClick={handleVerifyAndClaim}
          disabled={isVerifying}
          className={`w-full py-4 rounded-2xl font-black transition-all flex items-center justify-center space-x-2 shadow-lg ${
            isVerifying
              ? 'bg-purple-900/50 text-purple-300 cursor-wait'
              : hasClickedJoin
                ? 'bg-green-neon text-black hover:bg-green-400 active:scale-95 shadow-green-950/50'
                : 'bg-gray-800 text-gray-400 border border-gray-700'
          }`}
        >
          {isVerifying ? (
            <>
              <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
              <span>Verifying Membership...</span>
            </>
          ) : (
            <>
              <Icons.ShieldCheck size={20} />
              <span>2. Verify & Claim ₦70,000</span>
            </>
          )}
        </button>
      </div>

      <button onClick={onBack} className="w-full py-2 text-gray-500 text-xs font-medium hover:text-white transition-colors">
        Cancel and Return
      </button>
    </div>
  );
};

export default ChixTaskPage;
