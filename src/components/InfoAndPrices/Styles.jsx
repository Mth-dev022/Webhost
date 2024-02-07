import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: linear-gradient(to right, #E883C4, #A05EF9);
  width: 100%;
  color: #FFFFFF;
  font-family: 'Work Sans', sans-serif;
  margin-top: 100px;

    .text{
        text-align: center;
        padding-top: 100px;
        font-size: 14px;
        font-weight: 100;
        letter-spacing: 2px;
    }
    .content {
        display:flex;
        justify-content: center;
        gap: 100px;
        margin-top: 50px;
        padding-bottom: 100px;
    }
    .content-text {
        padding-top: 20px;
    }
`
export const PricingContainer = styled.div`
    width:100%;
    background-color: #FAFAFA;
    font-family: 'Work Sans', sans-serif;
    font-size: 15px;

    .title {
        text-align: center;
        margin-top: 100px;
        margin-bottom: 30px;
        color:#6880EE;
        font-size: 32px;
    }
    .sub-title {
        text-align: center;
        color: #999999;
        font-size: 17px;
    }
    .card-container {
        display:flex;
        justify-content:center;
        margin-top: 150px;
        gap: 50px;
    }
    .card {
        display:flex;
        justify-content:center;
        flex-direction: column;
        align-items: center;
        background-color: #FFFFFF;
        gap: 20px;
        padding: 25px 20px;
    }
    .zero-number {
        font-size: 50px;
        background-image: linear-gradient(to right, #29E6B6, #72E573);
        -webkit-background-clip: text; 
        background-clip: text;
        color: transparent;
        font-weight: 600;
    }
    .free {
        color: #C6C6C6;
    }
    .bandwidth {
        color: #C6C6C6;
        margin-left: 10px;
    }
    .storage {
        color: #C6C6C6;
        margin-left: 10px;
    }
    .overages {
        color: #C6C6C6;
        margin-left: 10px;
    }
    .all-features {
        color: #C6C6C6;
        margin-left: 10px;
    }
    .btn {
    background-image: linear-gradient(to right ,#29E6B6, #72E573);
    border: none;
    border-radius: 20px;
    padding: 20px 50px;
    color: #FFFFFF;
    font-weight: 600;
    margin-top: 20px;
    }
`