import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 19" {...props} width="26px">
      <image width="26" height="19" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACEklEQVQ4jY3US4iPYRQG8N+YkfvdimKGQmwMNmxRSMgtycLCwiU1qMmlGMS4JFFMIhbWY8WCskA2klxyK0RpRC7JLTFGR2emz7//GKe+vu973/M+7znPc86pcKZNGVuGpfiGfbhXzqmcdStZq0yweViNE9iLif8LWFXyPwLrsBhv8umOHWjAnfSrxie8KwUsjfA1LmNNYS/+D2A7+mNa0nAQNV0BfkUj+mFXYb0VHzETGxLsPPZntB3WmShVCfwZVxP8Sa4fwu30C64XYlN7+qURtttPbC6I1Jz8NhbAwm5iUFJRNuWitSZv5zAOa/GgsF+dKR/H82Jq5awCUzA5BdqNxwW/4diG67iLDt7KRdgzy2Q5euA0ZmFF7kfqTRiA8TiW704j/IGxWS6ncm1UXtKWZXMjL2lKavZkFrcqLWgIQn+hdx7olWCrkvAQ4QNacBhHMTW/r+AF3qMeDwNwa0o+J6NZhGe4kF3TNzvkO8YkUG2Kci2DCP+XqAsOh2FwClGT3bIy3+sxG0swNDOR6g7EzoIOMUD6dMtUapOX6dkBQ7AlO2YjZuBklpCMtj7pCdDRSUVzAF7EpBwEUU916dySXfAqBYl+vlRS/HFpiBJTKXDORuuF0vMxN/s0xtbIPHwfT/NQZxbTKAr/z8ws9nKATchJEpdE+lFrR/DlH4B/WelwCIVD7Uf5vM1+jdrs2vAbQ5aFEL91RSEAAAAASUVORK5CYII="/>
    </Svg>
  );
};

export default Icon;
