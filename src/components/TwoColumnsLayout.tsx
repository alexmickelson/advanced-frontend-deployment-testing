import { FC, ReactNode } from "react";

export const TwoColumnsLayout: FC<{
  leftSide: ReactNode;
  rightSide: ReactNode;
}> = ({ leftSide, rightSide }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">{leftSide}</div>
        <div className="col-3 flex flex-row justify-content-center">
          <div className="">{rightSide}</div>
        </div>
      </div>
    </div>
  );
};
