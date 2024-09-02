import React from 'react';
import './Choice.css';
import logo from '../assets/logo-tel.png';
import linha1 from "../assets/linha-verde-tel.png";
import linha2 from '../assets/linha-verde-tel2.png';
import seta from '../assets/seta.png';
import logoCompleta from '../assets/logo-comple.png';

const inforTelenova = () => {
    return(
        <div className='inforTelenova'>
            <div className='img-tel'>
                <img src={logoCompleta} alt='Logo Telenova' id='logo-tel'/>
            </div>
            <div className='text-tel'>
        
                    <h2>Por que escolher a Telenova?</h2>
                    <p>Trabalhamos com soluções tecnológicas mas sem perder nosso principal diferencial humano.
                    A Telenova traz soluções inteligentes, recursos inovadores para o desempenho da sua empresa, de forma próxima, humana e com um atendimento personalizado.
                    Porque sabemos que um dos principais pilares de sucesso de qualquer marca é um atendimento primoroso e eficiente. 
                    E para nós, cliente satisfeito é nosso dever e resultado da nossa dedicação.
                    </p>
                <ul>
                    <li>Por isso nossos principais diferenciais são:</li>
                </ul>
               
               <div className='button-info'>
                    <button className="button-tel">
                        <img src={seta} alt="seta branca" className="seta-img"/>
                    </button>
                    <p>Tecnologia de ponta para soluções personalizadas</p>
                </div>
                <div className='button-info'>
                    <button className="button-tel2">
                        <img src={seta} alt="seta branca" className="seta-img"/>
                    </button>
                    <p>Compromisso com prazos e qualidade</p>
                </div>
                <p>em todo processo - do atendimento a entrega e manutenção</p>
            </div>
        </div>
    );
}

export default inforTelenova;
