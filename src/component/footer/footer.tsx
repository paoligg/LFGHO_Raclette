import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 LFRaclette Open-Source Project LFGHO Hackathon
                <a href="https://github.com/paoligg/LFGHO_Raclette" className="flex items-center">
                    <img src="/images/github.png" height="30" width="30" style={{ margin: 'auto' }} />
                </a>
        </p>
        </footer>
    );
}

export default Footer;