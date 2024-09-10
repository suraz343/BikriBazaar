import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const FooterSection = () => {
  return (
    
    
    <footer className="bg-gray-900 py-8">
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
        {/* Top Section */}
        <div className="flex justify-between text-white text-sm">
          {/* About Bikri Bazaar */}
          <div className="text-center">
            <h3 className="text-base font-bold mb-3">About Bikri Bazaar</h3>
            <ul className="flex flex-col items-center">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center">
            <h3 className="text-base font-bold mb-3">Support</h3>
            <ul className="flex flex-col items-center">
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Safety Center</li>
              <li>Community Guidelines</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center">
            <h3 className="text-base font-bold mb-3">Legal</h3>
            <ul className="flex flex-col items-center">
              <li className="mb-2">Terms of Service</li>
              <li className="mb-2">Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center">
            <h3 className="text-base font-bold mb-3">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-white text-sm">
          <p className="mb-0">© 2024 Bikri Bazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
