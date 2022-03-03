import React, { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";

import axios from 'axios';

import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";
import Actions from "../../components/Actions";

import * as S from './styled'


export default function Starships() {
    const query = useQuery();
    const [ starship, setStarship ] = useState([]);
    const page = (query.get('page'));

    useEffect (() => {
        axios.get(`https://swapi.dev/api/starships${page ? '?page='+ page: ''}`).then(response => {
                setStarship((response.data.results))
            })
    }, [page]);
    function handleStarship(starship, event) {
        let starshipPick = starship
        localStorage.setItem('starshipPick', JSON.stringify(starshipPick));
    }
        //programação declarativa para imprimir os itens do array se existir itens nele.    
    return(
        <>
            <Header>
                <Logo />
                <Actions />                
            </Header>
            <S.titleStarships>Starships</S.titleStarships>
           <S.containerStarships> 
               { starship.map(starship => {
                   return (
                    <S.linkStarships to='/Starship-Info'key={starship.name} onClick={(event) => handleStarship(starship, event)}>
                        { starship.name }
                    </S.linkStarships>
                   )
                }) }                    
            </S.containerStarships>
            <S.btnDiv>
                { (Number(page) > 1 ?  <S.linkNext to={`/Starships?page=${page ? Number(page) -1 : 0}`}>Previous</S.linkNext>: <> </>)}
                { (Number(page) < 4 ?  <S.linkNext to={`/Starships?page=${page ? Number(page) +1 : 2}`}>Next</S.linkNext> : <> </>)}
            </S.btnDiv>      
        </>
    )
}