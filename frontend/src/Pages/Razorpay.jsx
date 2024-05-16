import React from 'react';
import './CSS/Razorpay.css';
import RazorpayLogo from '../Components/Assets/Razorpay.png';
import VisaLogo from '../Components/Assets/Visa.png';
import NetBankingLogo from '../Components/Assets/NetBanking.png';
import WalletLogo from '../Components/Assets/Wallet.png';
import UPILogo from '../Components/Assets/UPI.png';

const Razorpay = () => {
  return (
    <div className="payment-container">
      <div className="header">
        <div className="title">
          <img src={RazorpayLogo} alt="Logo" />
          Razorpay Corp
        </div>
        <div className="amount">₹ XXXX</div>
      </div>
      <div className="details">
        <div>
          <span className="label">Phone:</span>
          <span className="value">XXXXXXXXXX</span>
        </div>
        <div>
          <span className="label">Email:</span>
          <span className="value">XX@gkmit.co</span>
        </div>
      </div>
      <div className="payment-methods">
        <div>
          <img src={VisaLogo} alt="Card" />
          <div>Card</div>
        </div>
        <div>
          <img src={NetBankingLogo} alt="Netbanking" />
          <div>Netbanking</div>
        </div>
        <div>
          <img src={WalletLogo} alt="Wallet" />
          <div>Wallet</div>
        </div>
        <div>
          <img src={UPILogo} alt="UPI" />
          <div>UPI</div>
        </div>
      </div>
    </div>
  );
};

export default Razorpay;
