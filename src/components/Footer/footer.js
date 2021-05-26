import React from 'react';
import './footer.css';
function Footer() {
    return (
    <footer>
        <h1>FIND US</h1>
        <p className = 'address' >Rautatienkatu 21 B, 5. krs. <br></br>33100 Tampere </p>
        <ul className = 'CompanyInfo'>
          <li className = 'email'>info@devolution.fi</li>
          <li className = 'phone'>+358 44 280 0489</li>
          <li className = 'CompanyNb'>Y-tunnus: 3129924-4</li>
          <li className = 'Conf'><a href="https://devolution.fi/tietosuojaseloste/"> Tietosuojaseloste</a></li>
        </ul>
      </footer>
    );
  }
  export default Footer;