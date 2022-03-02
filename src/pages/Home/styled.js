import styled from "styled-components";
import { Link } from "react-router-dom";

export const Initial = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
text-align: center;
min-height: 100vh;
width: 100vw;

background-image: url(https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
background-size: 100%;
`
export const initialLink = styled(Link)`
    width: 270px;
    height: 70px;
    border: none;
    padding: 15px;
    color: #EEEEEE;
    background-color: #1f2738;
    border-radius: 6px;
    cursor: pointer;
    font-size: 2rem;
    text-decoration: none;
    text-align: center;
    outline: none;
    transition: all 0.3s ease;

    &:hover {
        background: #f56f36;
        color: #000;
    }
`