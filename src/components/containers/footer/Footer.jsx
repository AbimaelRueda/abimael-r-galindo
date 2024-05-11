import React from 'react';
import { IoLogoWhatsapp, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import logo from '../../../img/logo-edr.svg';
import './footer.css';

function Footer()
{
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-panel-left">
        <span>
          Copyright &copy; 2024 Abimael Rueda Galindo.
        </span>
      </div>

      <div>
        <div className="social-media">
          <IconContext.Provider value={{ size: '2.5vw' }}>
            <a
              href="https://api.whatsapp.com/send?phone=2226366620"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp style={{ color: '#4BCA5A' }} />
            </a>
            <a
              href="https://github.com/AbimaelRueda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub style={{ color: '#000000' }} />
            </a>
            <a
              href="https://www.linkedin.com/in/abimael-rueda-galindo-4b131b244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin style={{ color: '#00669A' }} />
            </a>
          </IconContext.Provider>
        </div>
      </div>

      <div className="footer-panel-right">
        <img src={logo} alt="ARG" loading="lazy" />
      </div>
    </footer>
  );
}

export default Footer;
