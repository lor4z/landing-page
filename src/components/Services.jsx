import React from 'react';
import './Services.css';
import greenLine from '../assets/Linha.png';
import telefoneVoip from '../assets/voip-3d.png';
import cloudPbx from '../assets/pabx.png';
import cloudBackup from '../assets/backup.png';
import suporteTecnico from '../assets/suporte.png';
import infraRede from '../assets/rede.png';
import circuitoSeguranca from '../assets/camerasegurança.png';
import seta from '../assets/seta.png';

const services = [
    {
        img: telefoneVoip,
        title: 'Cloud Fone Corporativo',
        description: 'É o telefone fixo com a flexibilidade de um telefone móvel. A linha direta com a inovação e com os grandes resultados da sua empresa.'
    },
    {
        img: cloudPbx,
        title: 'Cloud PBX',
        description: 'Com a Cloud PABX, sua empresa se comunica em qualquer lugar do mundo usando a mesma linha telefônica.'
    },
    {
        img: cloudBackup,
        title: 'Cloud Backup',
        description: 'A segurança dos dados da sua empresa, com um armazenamento inteligente e funcional.'
    },
    {
        img: suporteTecnico,
        title: 'Suporte Técnico',
        description: 'Terceirize o suporte técnico da sua empresa com a Telenova.'
    },
    {
        img: infraRede,
        title: 'Infraestrutura de Rede',
        description: 'Invista em uma infraestrutura de rede planejada por especialistas e tenha uma rede de TI profissional.'
    },
    {
        img: circuitoSeguranca,
        title: 'Circuito de Segurança Eletrônica / CFTV',
        description: 'Instalação de soluções de segurança personalizadas para cada ambiente.'
    }
];

const Services = () => {
    return (
        <div className="informations-produts">
            <img src={greenLine} alt="linha-verde" id="green-line"/>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-item" key={index}>
                        <div className="text-content">
                        <img src={service.img} alt={service.title} className="service-image"/>
                            <h3><strong>{service.title}</strong></h3>
                            <p>{service.description}</p>
                            <div className="button-container">
                                <button className="button-more-info">
                                    Saiba Mais
                                    <img src={seta} alt="seta branca" className="seta-img"/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
