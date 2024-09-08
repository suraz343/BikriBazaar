import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function FooterSection(){
  return (
    <footer className="bg-gray-900 py-8">
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
        {/* Top Section */}
        <div className="flex justify-between text-white text-sm">
          {/* About Bikri Bazaar */}
          <div>
            <h3 className="text-base font-bold mb-3">About Bikri Bazaar</h3>
            <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-bold mb-3">Support</h3>
            <ul>
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Safety Center</li>
              <li>Community Guidelines</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-bold mb-3">Legal</h3>
            <ul>
              <li className="mb-2">Terms of Service</li>
              <li className="mb-2">Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-base font-bold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer className="text-black text-center py-3">
            <div className="container">
                <p className="mb-0">© {year} Bikri Bazaar. All rights reserved.</p>
            </div>
        </footer>
    );
}
export { Footer, FooterSection };
