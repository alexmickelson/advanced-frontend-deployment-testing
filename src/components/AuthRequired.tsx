import { FC, ReactNode } from "react";
import { useAuth } from "react-oidc-context";

export const AuthRequired: FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useAuth();

  if (auth.isAuthenticated) {
    console.log("user", auth.user);
    return <>{ children }</>;
  }

  return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
};
