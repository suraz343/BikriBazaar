import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="text-black text-center py-3">
            <div className="container">
                <p className="mb-0">© {year} Bikri Bazaar. All rights reserved.</p>
            </div>
        </footer>
    );
}


export default Footer;
