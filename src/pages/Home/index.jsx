import Header from "../../components/Header";
import Logo from "../../components/Header/Logo";
import Actions from "../../components/Actions";

import * as S from './styled';
export default function Home() {
    return (
        <>
        <Header>
          <Logo />
          <Actions />
        </Header>
        <S.Initial>
            <S.initialLink to='/Pilots' >Pilots</S.initialLink>
            <S.initialLink to='/Starships'>Starships</S.initialLink>
        </S.Initial>
      </>
    )
}