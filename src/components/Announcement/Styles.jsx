import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    position:relative;
    background-image: linear-gradient(to right, #D574D3, #A256EF);
    font-family: 'Work Sans', sans-serif;
    color: #FFFFFF;

    .left-side {
        width:50%;
        padding: 150px 150px;
    }
    .title {
        font-size: 45px;
    }
    .text {
        font-weight: 600;
        font-size: 18px;
        padding: 30px 0px 80px 0px;
    }
    .right-side {
        width:49%;
        position:absolute;
        right:50px;
        top: -85px;
    }
    .btn {
        padding: 20px 60px;
        border-radius: 20px;
        border: none;
        color: #FFFFFF;
        font-weight: 800;
        background: linear-gradient(to right, #29E6B6, #72E573);
    }
    .btn2 {
        padding: 20px 60px;
        border-radius: 20px;
        margin-left: 20px;
        color: #FFFFFF;
        font-weight: 800;
        border: none;
        background: linear-gradient(to right, #59B9F8, #608BF0);
    }
`
export const Footer = styled.div`
    width: 100%;
    height:250px;
    background-color: #233142;
    display:flex;
    justify-content:space-around;
    padding-top: 80px;
    font-family: 'Work Sans', sans-serif;

    .left-side {
        margin-left: 150px;
    }
    .title {
        color :#FFFFFF;
        font-weight: 600;
        padding-bottom: 10px;
    }
    .text {
        color: #818993;
    }
    .right-side {
       margin-right: 150px;
    }
    .input {
        padding: 20px 130px;
        border: none;
        outline: none;
    }
    .input-btn {
        padding: 20px 70px;
        background: linear-gradient(to right, #58BEF9, #608AF0);
        border: none;
    }
    .span-container {
        display:flex;
        gap: 20px;
        margin-top: 15px;
    }
    .span-01 {
        color:#2A66B2;
        font-size: 13px;
        font-weight: 900;
    }
    .span-02 {
        margin-left: 5px;
        font-size: 18px;
        font-weight: 600;
        color: #FFFFFF;
    }
`