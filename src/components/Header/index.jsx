import React from "react";

import * as S from "./styled.js";

export default function Header({ children }) {
    return (
    <S.Bar>
        { children }
    </S.Bar>
    )
}