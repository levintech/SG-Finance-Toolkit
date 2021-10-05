import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 18" {...props} width="26px">
      <image width="26" height="18" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAABqklEQVQ4jaXUTYhOcRTH8c+YO2bSyMtC2ZksWAgbNqyUJGEhTaIU5SU7yUrZWVgqigWKDclLzazQmBmayEYkiWJh6S2p8To6dW7d586dx9uvnnqe53/u93/O75xzO5ybkFqJ/fiJH5iO0xjTqoU4hB58QzcGcXlaJWwVvuA6ruIr1pisZZiDG/l5ho0RVeAAlmMRjmMgH4+bj2IBTuFzxi7Btbw09DS/n4/MdmIGjuBuJY87OIiuzHp1go7hSiXuDXZjPDJ7n5CRWkEfMIS52JFVxO/btbiw4yE+FvlHV4M3pYayId0NzWiBlrCJNkHvKv6003h41pk3/6/6iky/H7NxCS//EjoLu2I8AnYYi7EZr/8B1pcNOlOkqWNZ7vacq5i1R7+BzMfW3JwHsS1F5fBmrlLc0vsHsBXYhou4J2enVJR4FjOxBXtzLJ7XIPNyfcKWJzhZHhQmazBHZVM2pw5bmg0bxa3qQRPsBU7gLfZl6QP5EliPtQmJPW5RE6xU+BDjsiFBn7AHFzDc9EA72Kv0I3ZvHb7jftWjuqrvs6kUZYd3keXjKaPwCzGRXoC/6ISnAAAAAElFTkSuQmCC"/>
    </Svg>
  );
};

export default Icon;
