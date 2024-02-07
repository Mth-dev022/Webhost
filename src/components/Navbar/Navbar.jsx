import React from 'react'
import * as C from './Styles'

const Navbar = () => {
    return (
        <C.Container>
            <div>
                <h1 className='title'>WEBHOST</h1>
            </div>
            <div>
                <ul className='nav-list'>
                    <li className='nav-list-items'>Home</li>
                    <li className='nav-list-items'>Sobre</li>
                    <li className='nav-list-items'>Dominio</li>
                    <li className='nav-list-items'>Hospedagem</li>
                    <li className='nav-list-items'>Blog</li>
                    <li className='nav-list-items'>Contato</li>
                    <li className='nav-list-button'><p class="texto-degrade">Comece</p></li>
                </ul>
            </div>
        </C.Container>
    )
}

export default Navbar