import { useEffect, useState } from "react";
import Actions from "../../components/Actions";
import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";
import * as S from "./styled"

export default function PilotInfo() {
    const [ pilotInfo, setPilotInfo ] = useState([]);
    useEffect(() =>{
        let person = localStorage.getItem('person');
        person = JSON.parse(person);
        setPilotInfo(person);
    }, []);

    return (
        <>
            <Header>
                <Logo />
                <Actions />
            </Header>
            <S.infoContainer>
                <S.titlePilotInfo>{ pilotInfo.name }</S.titlePilotInfo>
                    <S.contentPilotInfo>
                        <strong> Height :</strong>{pilotInfo.height}
                    </S.contentPilotInfo>
                    <S.contentPilotInfo>
                        <strong> Mass : </strong>{pilotInfo.mass}
                    </S.contentPilotInfo>
                    <S.contentPilotInfo>
                        <strong> Hair Color : </strong>{pilotInfo.hair_color}
                    </S.contentPilotInfo>
                    <S.contentPilotInfo>
                        <strong> Skin Color : </strong>{pilotInfo.skin_color}
                    </S.contentPilotInfo>
                    <S.contentPilotInfo>
                        <strong> Eye Color : </strong>{pilotInfo.eye_color}
                    </S.contentPilotInfo>
                    <S.contentPilotInfo>
                        <strong> Gender : </strong>{pilotInfo.gender}
                    </S.contentPilotInfo>
                    <S.contentPilotInfo>
                        <strong> Starships : </strong>{pilotInfo.starships}
                    </S.contentPilotInfo>
            </S.infoContainer>
        </>
    )
}
