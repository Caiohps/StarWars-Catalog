import styled from "styled-components";

export const infoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const titlePilotInfo = styled.h2`
    text-align: center;
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    color: #fff;
    margin-top: 2rem;
    border-radius: 16px;
    background-image: url(https://images.unsplash.com/photo-1624467906831-1f80d34ed5ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80);
    background-position: center top -170px;
    width: 200px;
    height: 200px;
    &:hover {
        color: #f36f56;
        border: 4px solid #f36f56;
    }
`
export const contentPilotInfo = styled.p`
    text-align: center;
    margin: 5px auto;
    font-family: "Roboto", sans-serif;
    color: #000;

`