import React from 'react'
import * as C from './styles'

import { CiInstagram, CiPhone } from "react-icons/ci"
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <>
            <C.Container>
                <div className='content'>
                    <div className='first-content'>
                        <h2>Hospedagem Web</h2>
                        <p>Muito longe, atrás da palavra montanhas, longe dos países Vokalia e Consonantia, vivem os textos cegos. Muito longe, atrás da palavra montanhas, longe dos países Vokalia e Consonantia, vivem os textos cegos.</p>
                        <div className='icon-container'>
                            <div className='icon-circle'>
                                <CiTwitter />
                            </div>
                            <div className='icon-circle'>
                                <CiInstagram />
                            </div>
                            <div className='icon-circle'>
                                <CiFacebook />
                            </div>
                        </div>
                    </div>

                    <div className='second-content'>
                        <h2>Links úteis</h2>
                        <ul className='list'>
                            <li className='list-items'>Servidores</li>
                            <li className='list-items'>alojamento windows</li>
                            <li className='list-items'>Hospedagem em nuvem</li>
                            <li className='list-items'>Servidores OS</li>
                            <li className='list-items'>Servidores LINUX</li>
                            <li className='list-items'>Política</li>
                        </ul>
                    </div>

                    <div className='thirty-content second-content'>
                        <h2> Navegação</h2>
                        <ul className='list'>
                            <li className='list-items'>Home</li>
                            <li className='list-items'>Domínio</li>
                            <li className='list-items'>Hospedagem</li>
                            <li className='list-items'>Sobre</li>
                            <li className='list-items'>Blog</li>
                            <li className='list-items'>Contato</li>
                        </ul>
                    </div>

                    <div className='forty-content second-content'>
                        <h2> Escritório</h2>
                        <div className='logo-container'>
                            <FaMapMarkerAlt className='icons' />
                            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className='logo-container'>
                            <CiPhone className='icons' />
                            <p>	+2 392 3929 210 </p>
                        </div>
                        <div className='logo-container'>
                            < CiMail className='icons' />
                            <p> info@yourdomain.com </p>
                        </div>
                    </div>
                </div>
            </C.Container>
            <p className='footer-text'>Copyright ©2024 All rights reserved | Criado por Matheus Souza</p>
        </>
    )
}

export default Footer