import React from 'react'
import * as C from './Styles'
import Dashboard from './../../assets/Announcement-images/dashboard.jpg'

const Announcement = () => {
    return (
        <>
            <C.Container>
                <div className='left-side'>
                    <h1 className='title'>A plataforma de hospedagem feita para você</h1>
                    <p className='text'>um pequeno rio chamado Duden flui em seus lugares e fornece as regalias necessárias</p>

                    <button className='btn'>Iniciar</button>
                    <button className='btn2'>Ler mais</button>

                </div>
                <div className='right-side'>
                    <img width={'1000px'} src={Dashboard} />
                </div>
            </C.Container>
            <C.Footer>
                <div className='left-side'>
                    <h2 className='title'> Pesquise seu nome de domínio</h2>
                    <p className='text'>Um pequeno rio chamado Duden passa por seu lugar</p>
                </div>

                <div className='right-side'>
                    <input placeholder='Entre com seu domínio' className='input' type='text' />
                    <button className='input-btn'>Pesquisar</button>

                    <div className='span-container'>
                        <div>
                            <span className='span-01'>.com</span>
                            <span className='span-02'>$9.75</span>
                        </div>

                        <div>
                            <span className='span-01'>.net</span>
                            <span className='span-02'>$8.75</span>
                        </div>

                        <div>
                            <span className='span-01'>.biz</span>
                            <span className='span-02'>$5.75</span>
                        </div>

                        <div>
                            <span className='span-01'>.co</span>
                            <span className='span-02'>10.75</span>
                        </div>

                        <div>
                            <span className='span-01'>.me</span>
                            <span className='span-02'>$9.75</span>
                        </div>
                    </div>
                </div>
            </C.Footer>
        </>
    )
}

export default Announcement