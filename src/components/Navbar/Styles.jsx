import styled from 'styled-components'

export const Container = styled.div`
    padding: 40px 30px;
    width: 100%;
    display:flex;
    justify-content:space-around;
    font-family: 'Work Sans', sans-serif;
    color: #FFFFFF;
    background-image: linear-gradient(to right, #D574D3, #A256EF);

    .title {
        font-weight: 700;
        font-size: 20px;
    }
    .nav-list {
        display:flex;
        list-style: none;
        gap: 30px;
        font-size: 14px;
    }
    .nav-list-button {
        padding:3px 50px;
        background-color:#FFFFFF;
        border-radius: 10px;
        cursor:pointer;
    }
    .texto-degrade {
    background-image: linear-gradient(to right, #D574D3, #A256EF);
    -webkit-background-clip: text; /* Para navegadores WebKit */
    background-clip: text;
    color: transparent;
    font-weight: 600;
}

`