import { Button } from "./styles";
import { useNavigate } from "react-router-dom";

export function LoginButton() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate("/contacts")}>Login</Button>;
}
