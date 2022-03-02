import React from "react";
import * as S from "./styled"

export default function Actions() {
    return(
        <S.Navbar>
            <S.linkNavbar to="/">HOME</S.linkNavbar>
            <S.linkNavbar to="/Pilots">PILOTS</S.linkNavbar>
            <S.linkNavbar to="/Starships">SPACESHIPS</S.linkNavbar>
        </S.Navbar>
    )
}