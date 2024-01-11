import { Body3, Header1 } from "../../styles/typography";
import {
  Background,
  ColumnText,
  Content,
  LeftSide,
  LoginButton,
  RightSide,
} from "./styles";
import { useTheme } from "styled-components";
import { Form, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FormGroup } from "../../components/FormGroup";
import { ToastContext } from "../../context/ToastContext";

const Login = () => {
  const { addToast } = useContext(ToastContext);
  const { colors: theme } = useTheme();
  const navigate = useNavigate();
  const [isLoginOn, setIsLoginOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [useToast, setUseToast] = useState(false);
  const [password, setPassoword] = useState<string>("");
  const [email, setEmail] = useState("");
  const { getErrorMessageByFieldName } = useErrors();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    // await handleLogin(email, password);
    setIsLoading(false);
  }
  return (
    <Background>
      <Content>
        <LeftSide>
          {isLoginOn ? (
            <Form onSubmit={handleSubmit}>
              <FormGroup
                width={"100%"}
                error={getErrorMessageByFieldName("user-email")}
              >
                <DefaultInput
                  error={errorEmail ? "errorEmail" : ""}
                  removeError={(value: string) => {
                    removeError(value);
                    setErrorEmail(false);
                  }}
                  width="100%"
                  height="80px"
                  id="email"
                  placeholder={"Inserir E-mail"}
                  label="Email"
                  value={email}
                  onChange={(event) =>
                    HandleInput.getInstance().formatWithRegex(
                      event,
                      FormatInputType.USER_EMAIL,
                      setEmail,
                      setError,
                      removeError,
                      "user-email",
                      "E-mail inválido"
                    )
                  }
                />
              </FormGroup>
            </Form>
          ) : (
            <>
              <ColumnText>
                <Header1 fontcolor={theme.typography.lightGray}>
                  Experience
                </Header1>
                <Header1 fontcolor={theme.typography.lightYellow}>
                  Reliability.
                </Header1>
              </ColumnText>
              <Body3 fontcolor={theme.typography.lightGray}>
                Try our innovative solutions for your enterprise
              </Body3>
              <LoginButton onClick={() => setIsLoginOn(true)}>
                LOGIN
              </LoginButton>
            </>
          )}
        </LeftSide>
        <RightSide />
      </Content>
    </Background>
  );
};

export default Login;
