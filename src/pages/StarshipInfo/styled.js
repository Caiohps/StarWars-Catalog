import styled from "styled-components";

export const infoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const titleStarshipInfo = styled.h2`
    text-align: center;
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    color: #FFF;
    margin-top: 2rem;
    border-radius: 16px;
    background-image: url(https://images.unsplash.com/photo-1552591864-acc3cd2618e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
    background-position: center;
    background-size: 150%;
    width: 200px;
    height: 200px;
    &:hover {
        color: #f36f56;
        border: 4px solid #f36f56;
    }
`
export const contentStarshipInfo = styled.p`
    text-align: center;
    margin: 5px auto;
    font-family: "Roboto", sans-serif;
    color: #000;

`