import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 18" {...props} width="26px">
      <image width="26" height="18" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAABr0lEQVQ4ja3UzYuNcRQH8M+97piX8lIWEnnPSxbIRhayIhsLSWQhETulFDZkduysLC34HyxmwUqiWCgvGylRlJXIzNyZq6PvradpNjPur57ndzrPOd/fOef7fX4tD3oXcBUr8QNti1tr8L6D25jEOsygtQi4WWzB0wLsBmQcQ/n4ByNYkoRuDh1tHFiHTyWul87anXxcjf2xq/W9eIsvAajqd+AFfgVgPbbiGX5juHL7gC9xJPZuPMb17AV4FA9xGp8TdwK34vuKZZjoNFqajj2ZCqbiF1tGMd3w9eLrZp+Zj9FWAltzfOYhrNdQRbv/qqGONYJq2EvnJHdC2HDDN5yn30WROVqAr7APB7EWZ0PM+UhhGy6G4WvYgF24gs04lbxz2F7C3oibOIOPWIX7CRxJdSX4R7icWa3AG7zGpRC1CXcKUBL7FT7Huyj/UFp5gu+p6EBkMoGfkdtOfChZFWBV86nQ5yFooetuzfA4jg0ArHR4uJ2ZTA4A8J922zFmBwBYGL0CLA0uHwBgXSRjJYliq2Z4D98aN8xCVol7T10iBXgjt8rJ/5hl/VVDGP8LDwNlKUoEm1AAAAAASUVORK5CYII="/>
    </Svg>
  );
};

export default Icon;
