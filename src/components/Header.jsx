import React from 'react';
import './Header.css';
import logo from '../assets/logo-telefone.png';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo telenova" id="logo-telenova"/>
            <ul>
                <a href="#">TELENOVA</a>
                <a href="#">SERVIÇOS E SOLUÇÕES</a>
                <a href="#">FAQ</a>
                <a href="#">CLIENTES E PARCEIROS</a>
                <input type="submit" value="CLOUD FONE" className="button-cloud-fone"/>
                <input type="submit" value="CLOUD PABX" className="button-cloud-pabx"/>
            </ul>
        </div>
    );
}

export default Header;
