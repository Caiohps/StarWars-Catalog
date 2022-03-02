import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 1rem;
`

export const linkNavbar = styled(Link)`
    text-decoration: none;
    text-align: center;
    display: inline-block;
    width: 200px;
    height: 60px;
    color: #EEEEEE;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 23px 25px;
    background-color: transparent;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        background: #f56f36;
        color: #000;
    }
`   