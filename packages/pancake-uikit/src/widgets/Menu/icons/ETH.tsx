import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 18" {...props} width="26px">
      <image width="26" height="18" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAASCAYAAACNdSR1AAABXUlEQVQokX3SsUuVYRTH8c/ViykZSdoQVBYGriViUhAk1FBL4BS4Fbj5JzQU4iIViJOiEJEQERQpTSGNLU0VgSgOFoSIJmqmqRw5Fy5y7YGH5315v+f3/s75PQXjuyqsfnzBi/JPVRXAu7iD+7jwP/g6rmIYr9GLY5XgU7iJIWzgKybxANUH4fN4hu+oyz2NBdwrwcfRjUV8Kysu5DmGFlyryqrYa2XgX2yWPb9DXxEf8AOP8A9TaEUjjqIDWxgN5bO4nOBnHEnFYqq/TavtAc9jLv2fxs8c3cssuIEdzARQiwbU4Bea0ZNNR7zPsYKTUXkJZ1J9MQveox4XcSttNBWz23NYRVu+d2YQMevoJeCasPEKEwlFYvHLE2kv/EcwMfORgH9ncnGGwkDa+YQnOak3+FiKexuP0YUrmMVS3rz1hPdHU1p/UvUhltNvNP30sCsal2YQt2NU4TPTA3vI2FBvboxywQAAAABJRU5ErkJggg=="/>
    </Svg>
  );
};

export default Icon;
