import React from 'react'
import * as C from './Styles'

const InfoAndPrices = () => {
    return (
        <>
            <C.InfoContainer>
                <p className='text'>MAIS DE 100.000 SITES HOSPEDADOS</p>
                <div className='content'>
                    <div>
                        <h1>2,000</h1>
                        <p className='content-text'>Instalações CMS</p>
                    </div>
                    <div>
                        <h1>100</h1>
                        <p className='content-text'>Prêmios ganhos</p>
                    </div>
                    <div>
                        <h1>32,000</h1>
                        <p className='content-text'>Domínios registrados</p>
                    </div>
                    <div>
                        <h1>21,999</h1>
                        <p className='content-text'>Clientes satisfeitos</p>
                    </div>
                </div>
            </C.InfoContainer>

            <C.PricingContainer>
                <p className='title'>Preço dos planos</p>
                <h1 className='sub-title'>Nosso melhor preço</h1>

                <div className='card-container'>

                    <div className='card'>
                        <p>Gratis</p>
                        <div>
                            <span >R$</span>
                            <span className='zero-number'>0</span>
                        </div>
                        <p className='free'>100% gratis para sempre</p>
                        <p>Aproveite todas as funcionalidades</p>

                        <div>
                            <span>150 GB</span>
                            <span className='bandwidth'>Bandwidth</span>
                        </div>

                        <div>
                            <span>100 GB</span>
                            <span className='storage'>Storage</span>
                        </div>
                        <div>
                            <span>$1.00 / GB</span>
                            <span className='overages'>Overage</span>
                        </div>
                        <p className='all-features'>All features</p>
                        <button className='btn'>Escolher plano</button>
                    </div>

                    <div className='card'>
                        <p>Startup</p>
                        <div>
                            <span >R$</span>
                            <span className='zero-number'>19</span>
                        </div>
                        <p className='free'>100% gratis para sempre</p>
                        <p>Aproveite todas as funcionalidades</p>

                        <div>
                            <span>450 GB</span>
                            <span className='bandwidth'>Bandwidth</span>
                        </div>

                        <div>
                            <span>400 GB</span>
                            <span className='storage'>Storage</span>
                        </div>
                        <div>
                            <span>$2.00 / GB</span>
                            <span className='overages'>Overage</span>
                        </div>
                        <p className='all-features'>All features</p>
                        <button className='btn'>Escolher plano</button>
                    </div>


                    <div className='card'>
                        <p>Premium</p>
                        <div>
                            <span >R$</span>
                            <span className='zero-number'>49</span>
                        </div>
                        <p className='free'>100% gratis para sempre</p>
                        <p>Aproveite todas as funcionalidades</p>

                        <div>
                            <span>660 GB</span>
                            <span className='bandwidth'>Bandwidth</span>
                        </div>

                        <div>
                            <span>500 GB</span>
                            <span className='storage'>Storage</span>
                        </div>
                        <div>
                            <span>$5.00 / GB</span>
                            <span className='overages'>Overage</span>
                        </div>
                        <p className='all-features'>All features</p>
                        <button className='btn'>Escolher plano</button>
                    </div>


                    <div className='card'>
                        <p>Pro</p>
                        <div>
                            <span >R$</span>
                            <span className='zero-number'>99</span>
                        </div>
                        <p className='free'>100% gratis para sempre</p>
                        <p>Aproveite todas as funcionalidades</p>

                        <div>
                            <span>1000 GB</span>
                            <span className='bandwidth'>Bandwidth</span>
                        </div>

                        <div>
                            <span>2000 GB</span>
                            <span className='storage'>Storage</span>
                        </div>
                        <div>
                            <span>$10.00 / GB</span>
                            <span className='overages'>Overage</span>
                        </div>
                        <p className='all-features'>All features</p>
                        <button className='btn'>Escolher plano</button>
                    </div>


                </div>

            </C.PricingContainer>
        </>
    )
}

export default InfoAndPrices