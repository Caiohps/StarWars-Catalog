//Hook useEffect monitora a mudança em uma variável e quando ocorre a mudança dispara uma função
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useQuery } from '../../hooks/useQuery';

import Actions from "../../components/Actions";
import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";

import * as S from './styled.js';

export default function Pilots() {
    const query = useQuery();
    const page = (query.get('page')); 

    //definindo um estado (valor do estado e a função que da set no estado). Inicialmente array vazio.
    const [ pilots, setPilots ] = useState([]);

       
    useEffect (() => {
        axios.get(`https://swapi.dev/api/people${page ? '?page='+ page : ''}`).then(response => {
                setPilots((response.data.results))
            })
            
    //variável page foi passada para ser monitorada, logo a função vai disparar quando a variavel mudar
    }, [page]);


    function handlePerson(pilot, event) {
        let person = pilot
        localStorage.setItem('person', JSON.stringify(person));
    }      
        //programação declarativa para imprimir os itens do array se existir itens nele.
    return(
        <>
            <Header>
                <Logo />
                <Actions />                
            </Header>
            <S.titlePilots>Pilots</S.titlePilots>
            <S.containerPilots>
                { pilots.map(pilot => {
                    return (
                        <S.linkPilots to='/Pilot-Info' key={pilot.name} onClick={(event) => handlePerson(pilot, event)}>
                            { pilot.name }
                        </S.linkPilots>
                    )
                }) }         
            </S.containerPilots>
            <S.btnDiv>
                { (Number(page) > 1 ?  <S.linkNext to={`/Pilots?page=${page ? Number(page) -1 : 0}`}>Previous</S.linkNext>: <> </>)}
                { (Number(page) < 9 ?  <S.linkNext to={`/Pilots?page=${page ? Number(page) +1 : 2}`}>Next</S.linkNext> : <> </>)}
            </S.btnDiv>
        </>
    )
}