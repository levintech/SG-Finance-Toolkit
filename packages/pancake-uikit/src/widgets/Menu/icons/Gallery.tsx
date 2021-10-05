import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 23" {...props} width="26px">
      <image width="26" height="23" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAACRklEQVRIia3WS4iNYRgH8N+YGZcZTG5RQy4LLChyG0osKNfYWJgolx1lYYWN2FkQuS1mIZKFko1slVvYupRLiELuuY1xGz31nDrpnDPflKe+vu+87/f83+f9v//n/506J7oVjGacxWXsK5LSpygydqITC7G4SEJDQeAAnIpVaMuFbuJTraSilW/EMOzJqmdgUU9JRcAnYijO4wGe4hRW/A/wmbiN/fn+s9zBEIyolVjiPLY87p+5OjzHBLzBDkzCcHTgI6bgSS7ypyzvO+4H+Fq0pxJ+loH3xZksIBLnZsXrkvPPCTobczK/FLGrRw15WNcysVJMS/Ajqe/XOIZd+JDa/zf6xXiA/8a7GtSNQiMO42HSEdfkBKkUXXgbBxQtWl/lpWVYmWppSKUEcGtyvxWjK+QFbn0ttUzHNixHU/4uxfqk5nRSNbgSQK0OjaouYR5mYUNW2Zga70rg5mysc5XKrxahls1JyZZUxfwUwOMUwJocb+pt5R259RvpLVHht1TIeFxPlS3F3d6CXyl7voPtGBvNkQfbnUq7UA2gqHG9xSAsScN6kcA1oyfLHZScht2uLuM+KDua9nCrWnI18BaMST/5mp5yFfcSsD29vSXBT+buvtcCb80PQWt25sWUW/+ybuxMWb7CSBzHghwP6R4qmVgJPAxrIA7m4e3OA3uf8z/KCviVnEe8TOMLnCimZMsHYjIe4vqSzhYeszfvJeCeIioOhwzf2ZS7iEb7HSvGRPjEgOQt7lF1yK7wX4MyBgKvDd1/AWXAgqwfDIS8AAAAAElFTkSuQmCC"/>
    </Svg>
  );
};

export default Icon;
