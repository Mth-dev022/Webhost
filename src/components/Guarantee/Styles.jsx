import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Work Sans', sans-serif;
    padding-top: 100px;
    background-color: #FAFAFA;

    .title {
        text-align: center;
        color: #627BED;
        font-size: 30px;
        padding-bottom: 30px;
    }
    .sub-title {
        text-align: center;
        color: #989898;
    }
    .card-container {
        display:flex;
        justify-content:center;
        width: 100%;
        margin-top: 100px;
        gap: 150px;
    }
    .cards {
        display:flex;
        align-items: center;
        flex-direction: column;
        width:300px;
        background-color: #FFFFFF;
        padding-top: 30px;
    }
    .icon-circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;;
        background: linear-gradient(to right, #29E6B6, #72E573);
        display:flex;
        justify-content:center;
        align-items: center;
    }
    .card-title {
        padding: 20px 0px 20px 0px;
        font-size: 20px;
        color: #0D0D0D;
    }
    .card-text {
        text-align: center;
        color: #838383;
        padding-bottom: 50px;
        width:85%;
    }
`
    
