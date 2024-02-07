import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    background-color: #233142;
    height: 500px;
    display:flex;
    justify-content: space-around;
    font-family: 'Work Sans', sans-serif;
    color: #FFFFFF;
    margin-top: 150px;

    .content{
       display:flex;
       gap: 150px;
       margin-top: 100px;
    }
    .first-content {
        display:flex;
        flex-direction: column;
        gap: 50px;
        width: 250px;
    }
    .icon-container {
        display:flex;
        gap: 30px;
    }
    .icon-circle {
        width: 50px;
        height:50px;
        border-radius: 50%;
        background: linear-gradient(to right, #29E6B6, #72E573);
        display:flex;
        justify-content:center;
        align-items:center;
        font-size: 30px;
    }
    .second-content {
        display:flex;
        flex-direction:column;
        gap: 30px;
    }
    .list {
        list-style:none;
        display:flex;
        flex-direction: column;
        align-items:center;
        gap: 30px;
        color: #899099;
        cursor: pointer;
    }
    .list-items {
        display:flex;
    }
    .logo-container {
        display:flex;
        gap: 20px;
    }
    .icons {
        font-size: 30px;
    }
`