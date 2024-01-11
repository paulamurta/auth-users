export interface IAuthProvider {
  children: JSX.Element;
}

export interface IAuthContext {
  transactions?: number[];
  userName?: string | null;
  profile?: string | null;
  name?: string | null;
  Logout?: (boolean: boolean) => void;
  setVisivleModalLogout: (boolean: boolean) => void;
  handleLogin: (identifier: string, password: string) => void;
  visibleModalLogout?: boolean;
  errorLogin: string | undefined;
  setErrorLogin: (value: string | undefined) => void;
}
