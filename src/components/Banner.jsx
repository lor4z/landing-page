import React from 'react';
import './Banner.css';
import fundoHomem from '../assets/fundo-homen.png';
import scrollPng from '../assets/SCROLL.png';
import esferaCromada from '../assets/esfera_cromada_3d.png';
import traçoVerde2 from '../assets/traço-verde-mini.png';
import traçoVerde3 from '../assets/traço-verde-3.png';
import telefoneIp from '../assets/telefone-pbx.png';
import barraAzul from '../assets/barra-azul.png';

const Banner = () => {
    return (
        
        <div className="banner-informations">
             <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
            <img src={fundoHomem} alt="Fundo homem" id="fundo-banner-man"/>
            <ul>
                <li className="highlight-text">Crescer é<br /> uma decisão,<br /> e ela vem junto<br /> com a automação<br /> dos recursos.</li>
            </ul>
            <ul>
                <li className="sub-text">Melhore a performance da sua empresa,<br /> seja nos atendimentos telefônicos, na<br /> infraestrutura de rede, na segurança de<br /> dados ou na segurança eletrônica.</li>
            </ul>
            <img src={scrollPng} alt="Esfera cromada" id="scroll-png"/>
            <img src={esferaCromada} alt="Esfera cromada" id="esfera-cromada"/>
            <img src={traçoVerde2} alt="Traço verde" id="traço-verde2"/>
            <img src={traçoVerde3} alt="Traço verde" id="traço-verde3"/>
            <img src={telefoneIp} alt="telefone-ip" id="telefone-ip"/>
            <label className="sub-text-telefone">A solução que você precisa<br /> está a apenas <strong>um clique</strong></label>
            <div className="banner-sollutions">
                <img src={barraAzul} alt="barra-azul-informações" id="barra-azul"/>
                <p className="text-banner-inform">Conheça nossas Soluções Tecnológicas</p>
            </div>
        </div>
    );
}

export default Banner;
