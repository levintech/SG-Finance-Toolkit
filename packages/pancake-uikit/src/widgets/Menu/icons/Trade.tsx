import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 17" {...props} width="26px">
      <image id="Trade" width="26" height="17" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACeUlEQVRIibWWWWtTURSFv9weo1Zb41y14ljHirP44FBQChYRHxV/lb9B8Fkp6IsgKKgPrVUUx1JxKCoU09baaIdEVlhHS2hsL1w3HHLJPVlrj2snt+XqB+rYWmA/cBDYCjQBia9WgJ/AF+A50AMMAJNA3nf1PBb+AX4WOAlsACaAUeAHUAYWAc3APmAzsB64DbwClgN7gCLwspYgB7QBncAxQO9fAG8BhTpsgiXAOmCbCRTpAqDVn0cEDvSHGvCdwBXgEPAauAU8AUoOuez0JCbPm+g0cBTY7XsF4CO+FG07cNkkD4Buk/yaJYXTBhLxiJ+VvgvAGeCbnasSyJvVQAdwGHgEXAfe1at+jSnnm/y5DGhRcWPEwSGeAo7b4+4U4LKlwA6fYRdb9RpUpMEF6XRnXHNR09iQQe87G9NuYaVpIrgDVgFPfSZTEqgO7+u9TNxmI+6W8ZTgc5oIVhpYbTWVIbbaPglOybjbrJIhgeSlRQT3PNajGRO0a/hEcMNRFDMmkIa1Bfds1lZw25eS/wCu4m70ABbDjC/zZg0+FRe+ZJGbrwnngCV/MBI0Ars8dAtNqM56DLzxZM7XWq3GDVKFSKANdAK4ZKHqd22aaxR3LpPX503yUMMba5D3VtJ63Gv2AYveWArPL1qVFfVdDW/0bspz8Bn47vSUPemNTtFsdWhw3QR+zitWe/qmda0q1zkXdMhhxSXT5Zo8s8JK0OREBF5hYBVUe0R9r99qrqrguhgjkMfaoUqH/iXI68VutzVOnRxQdJJj7V0tF+mYiGRy7o4b44/NbEctdoX31a0pPdfi18hrS4lM4DF1OlKAT0Af0Osl89eA3wfEphDjDCH1AAAAAElFTkSuQmCC"/>
    </Svg>
  );
};

export default Icon;
