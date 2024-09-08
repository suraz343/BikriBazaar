import React from "react";

const WhyChooseSection = () => {
    return(
        <section className="py-8 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Bikri Bazaar?</h2>
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-1.5 16.5a2 2 0 01-2 1.5H6.5a2 2 0 01-2-1.5L3 3z" /></svg>
          </div>
          <h3 className="font-bold text-lg">Wide Selection</h3>
          <p className="text-gray-600">Find a vast array of quality second-hand items for your home.</p>
        </div>
        <div>
          <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m6.938 2H4.062A2.062 2.062 0 012 17.938v-3.5A7.5 7.5 0 0112 5a7.5 7.5 0 0110 9.438v3.5A2.062 2.062 0 0119.938 17H18" /></svg>
          </div>
          <h3 className="font-bold text-lg">Secure Transactions</h3>
          <p className="text-gray-600">Shop with confidence using our secure payment and escrow services.</p>
        </div>
        <div>
          <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 5 9-5m-9 5v10" /></svg>
          </div>
          <h3 className="font-bold text-lg">Community-Driven</h3>
          <p className="text-gray-600">Join a thriving community of buyers and sellers in your area.</p>
        </div>
      </div>
    </section>
    );

}

export default WhyChooseSection;