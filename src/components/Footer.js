import React from 'react';

const footerStyle = {
  backgroundColor: '#96D6E0',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  textAlign: 'center',
};

const linkedinStyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft: '5px',
};

const paragraphStyle = {
  color: 'white',
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <p style={paragraphStyle}>© 2023 Educar en Redes</p>
      <a
        href="https://www.linkedin.com/in/lenyn-conde-837767260/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkedinStyle}
      >
        LinkedIn
      </a>
    </footer>
  );
}

export default Footer;
