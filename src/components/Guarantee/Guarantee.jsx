import React from 'react'
import * as C from './Styles'
import { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

import GuaranteeIcon from './../../assets/Guarantee-images/guarantee-icon.png'
import Shield from './../../assets/Guarantee-images/shield.png'
import Support from './../../assets/Guarantee-images/support.png'
import Monitor from './../../assets/Guarantee-images/monitor.png'
import Engine from './../../assets/Guarantee-images/engine.png'
import Spinner from './../../assets/Guarantee-images/spinner.png'

const Guarantee = () => {
    useEffect(() => {
        // Configuração do ScrollReveal
        ScrollReveal().reveal('.cards', {
            duration: 1000,
            delay: 100,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease-in-out',
            reset: true
        });
    }, []);

    return (
        <C.Container>
            <h1 className='title'>A garantia do WebHost</h1>
            <p className='sub-title'>Mesmo o todo-poderoso Apontar não tem controle sobre os textos cegos, é quase não ortográfico.</p>

            <div >

                <div className='card-container'>
                    <div className='cards'>
                        <div className='icon-circle'>
                            <img src={GuaranteeIcon} />
                        </div>
                        <h2 className='card-title'>Tempo de atividade</h2>
                        <p className='card-text'>Mesmo o todo-poderoso Apontar não tem controle sobre os textos cegos, é quase não ortográfico.</p>
                    </div>

                    <div className='cards'>
                        <div className='icon-circle'>
                            <img src={Shield} />
                        </div>
                        <h2 className='card-title'>Seguro e protegido</h2>
                        <p className='card-text'>Mesmo o todo-poderoso Apontar não tem controle sobre os textos cegos, é quase não ortográfico.</p>
                    </div>

                    <div className='cards'>
                        <div className='icon-circle'>
                            <img src={Support} />
                        </div>
                        <h2 className='card-title'>Nosso suporte dedicado</h2>
                        <p className='card-text'>Mesmo o todo-poderoso Apontar não tem controle sobre os textos cegos, é quase não ortográfico.</p>
                    </div>

                </div>

                <div>

                    <div className='card-container'>
                        <div className='cards'>
                            <div className='icon-circle'>
                                <img src={Monitor} />
                            </div>
                            <h2 className='card-title'>Transferência de Domínio</h2>
                            <p className='card-text'>Mesmo o todo-poderoso Apontar não tem controle sobre os textos cegos, é quase não ortográfico.</p>
                        </div>

                        <div className='cards'>
                            <div className='icon-circle'>
                                <img src={Engine} />
                            </div>
                            <h2 className='card-title'>Controle DNS</h2>
                            <p className='card-text'>Mesmo o todo-poderoso Apontar não tem controle sobre os textos cegos, é quase não ortográfico.</p>
                        </div>

                        <div className='cards'>
                            <div className='icon-circle'>
                                <img src={Spinner} />
                            </div>
                            <h2 className='card-title'>Carregado rapidamente</h2>
                            <p className='card-text'>Mesmo o todo-poderoso Apontar não tem controle sobre os textos cegos, é quase não ortográfico.</p>
                        </div>

                    </div>

                </div>

            </div>
        </C.Container>
    )
}

export default Guarantee