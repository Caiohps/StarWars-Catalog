import React, { useEffect, useState } from "react";

import * as S from './styled'

import Actions from "../../components/Actions";
import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";

export default function StarshipInfo() {
    const [ starshipInfo, setStarshipInfo ] = useState([]);
    useEffect(() =>{
        let starshipPick = localStorage.getItem('starshipPick');
        starshipPick = JSON.parse(starshipPick);
        setStarshipInfo(starshipPick);
    }, []);

    return (
        <>
            <Header>
                <Logo />
                <Actions />
            </Header>
            <S.infoContainer>
                <S.titleStarshipInfo>
                    <strong> Starship :</strong> {starshipInfo.name}
                </S.titleStarshipInfo>
                <S.contentStarshipInfo>
                    <strong>Model : </strong> {starshipInfo.model}
                </S.contentStarshipInfo>
                <S.contentStarshipInfo>
                    <strong>Manufacturer :</strong> {starshipInfo.manufacturer}
                </S.contentStarshipInfo>
                <S.contentStarshipInfo>
                    <strong>length : </strong>{starshipInfo.length}
                </S.contentStarshipInfo>
                <S.contentStarshipInfo>
                    <strong>Atmosphering Speed : </strong> {starshipInfo.max_atmosphering_speed}
                </S.contentStarshipInfo>
                <S.contentStarshipInfo>
                    <strong> Passengers : </strong>{starshipInfo.passengers}
                </S.contentStarshipInfo>
                <S.contentStarshipInfo>
                    <strong> Cargo Capacity : </strong>{starshipInfo.cargo_capacity}
                </S.contentStarshipInfo>
                <S.contentStarshipInfo>
                    <strong> Pilots : </strong>{starshipInfo.pilots}
                </S.contentStarshipInfo>
            </S.infoContainer>
        </>
    )
}