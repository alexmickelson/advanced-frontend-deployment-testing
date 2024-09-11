import { FC, ReactNode } from "react";

export const Button: FC<{
  onClick: () => void;
  children: ReactNode;
}> = ({ onClick, children }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};
