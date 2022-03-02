import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const titlePilots = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    font-family: "Roboto", sans-serif;
    color: #000;
    margin-top: 2rem;
`
export const containerPilots = styled.div `
    width: 85vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto; 
    
`
export const linkPilots = styled(Link)`
    border-radius: 1rem;
    box-sizing: border-box;
    cursor: pointer;
    margin-top: 1rem;
    color: #000;
    padding: 0.5rem;
    font-weight: bold;
    font-family: Roboto, sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: url(https://images.unsplash.com/photo-1624467906831-1f80d34ed5ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80);
    background-position: center top 415px;
    width: 200px;
    height: 200px;

    &:hover {
        color: #f36f56;
        border: 4px solid #f36f56;
    }
`
export const btnDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`
export const linkNext = styled(Link)`
    width: 100px;
    text-align: center;
    border-radius: 10px;
    color: #FFF;
    padding: 10px;
    margin: 10px auto;
    text-decoration: none;
    background-color: #1F2738;

    &:hover {
        background-color: #f36f56;
        color: #000;
    }

`