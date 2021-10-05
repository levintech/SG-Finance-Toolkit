import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 15" {...props} width="26px">
      <image width="26" height="15" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAABJklEQVQokZXTSyuFURTG8Z+DlHQoDGTq8glk5jIxUzI0ky+ATBgoMcJYZlJGvgGlyJBEisxMXTJwKbl0tLRPvV7HwFOrd++113+33tazq2yUZNSPETThFVWowz22cVQurcl8p9COHVzhJoFt6MIEerDm+2CjFNAsCljFS7osiqtxmfZFzOAZ61E8lpJLGSjUgc7M/hGLqYPpAAewgk8/dYqTXO4dm2gJ8Ay3fmsYoxXyF1gI8LzCYag2RV5vuAvw4w+wlKKiCpmR/EsBdv+TifaLhTTU5goFMfyIvGJM8wEeJNfkFcOPyF82HqMLcCslwxXZ/91L9iurHnN4wnLZ5A2YTObexTEeEtGKXgzhOnn1Nfs6oo1B9KExWSxysY7XsY/D70p8AcJaOR24tQBOAAAAAElFTkSuQmCC"/>
    </Svg>
  );
};

export default Icon;
