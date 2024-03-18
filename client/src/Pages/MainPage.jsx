import { styled } from "styled-components";
import logo from "../Logo/logo.png";

export default function MainPage() {
  return (
    <PageStyle>
      <LogoDiv>
        <Logo src={logo} />
      </LogoDiv>
    </PageStyle>
  );
}

const PageStyle = styled.div`
  margin: 0 auto;
  text-align: center;
  min-height: 100dvh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff7ed;
`;

const LogoDiv = styled.div``;

const Logo = styled.img`
  height: 10vh;
  width: 10%;
`;
