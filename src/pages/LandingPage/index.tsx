import { LoginButton } from "../../components/Button/LoginButton";
import { ContainerColumn } from "../../styles/global";
import { Body3, Body2, Header1, Header4 } from "../../styles/typography";
import {
  Background,
  ColumnText,
  Content,
  GlassHeader,
  LeftSide,
  RightSide,
} from "./styles";
import { useTheme } from "styled-components";

const LandingPage = () => {
  const { colors: theme } = useTheme();

  return (
    <Background>
      {/* <GlassHeader>Inicio</GlassHeader> */}
      <Content>
        <LeftSide>
          <ColumnText>
            <Header1 fontcolor={theme.typography.darkGray}>Experience</Header1>
            <Header1 fontcolor={theme.typography.lightYellow}>
              Reliability.
            </Header1>
          </ColumnText>
          <Body3 fontcolor={theme.typography.lightGray}>
            Try our innovative solutions for your enterprise
          </Body3>
          <LoginButton />
        </LeftSide>
        <RightSide />
      </Content>
    </Background>
  );
};

export default LandingPage;
