import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const TermsOfService = () => {
    return (
        <div className="w-full max-w-[1280px] h-auto bg-white flex flex-col items-center">
            <Header />
            <div className="w-full max-w-[1280px] mx-auto px-5 py-5">
            <br />
            <h1 className="text-[#111616] text-[28px] font-bold font-['Plus Jakarta Sans'] leading-8"> Terms of Service </h1>
            <br />
            <p className="text-[10px] text-right"> Last updated: [2024-08-15]</p>
            <br />
            <p> By accessing our website and services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our services.</p>
            <br />
            <div className="p-3 border border-[#dbe2e5] rounded-lg">
            <p > You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for any content you post or transmit through our services and must ensure it does not violate any laws or regulations</p>
            <p> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.</p>
            </div>
            <br />
            <p> If you have any questions or concerns about these terms, please contact us. </p>
            <br />
            <Link to="/About" className="bg-[#33b2e5] text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"> Contact Us Now!</Link>
        </div>
        </div>
    );
};

export default TermsOfService;
