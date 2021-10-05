import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 15" {...props} width="26px">
      <image width="26" height="15" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAPCAYAAAAPr1RWAAACD0lEQVQ4jY3UScjOURQG8J/Pa56LlVlYWEgS2VAibFjYyFyyUAoLpVDGZGFhZSWFhSIWSpKFIUvKhpJCERkylOk1vDo8L282vlO3e///e+5zn/Occ24Px1uXMRL30PLbfqA/BvprLd2zHmhiTCMgB/C5fgSk/t/C7TjLge/dvOAbdhfIK3zFXlzOJVMxEys6AJdicaIqAh9DTMe6K8DH8KYrm73QD30y+mdudLDZEPkehNAqPMl6DV7iPqaFSLMOD8YHbMUw9MYj3MSXDvCK4BTORKr5OBgCi0qG+A1AX9loBKRuXoKTuIa1WIf9eJGDmyJXAUzAkUQ4DkfxHgtwTjR6H8aHcCfzcqzHcOz6J1HN5KiVdbNj/S1Dm3lXnIvdFDzPuhI7JFXTtmJ3NrLMwDb0xCxsjs+nTlkGRfN9WInTkaUcJuNEB/iaSFB5Go0d8RuFPXgXWa60wZvRrZJyPVLMwc5UwuqAlHyTMD6at7XunTE2JIelXH+BtzuvWL6OHBPxGNvTYJOj5eFUS0l5I+XZSGWtC87OlPXbRjRrJZQ3YXkmET3L3BW/ZXkShobpxvREdfaWnJ+by/40yfeEVKHfzTtTB6tjC+h8GqQkmhcyFzE75y9gekg8xaXaK/BKSGlYt9VmJaYyXiClazGv75oLsLu2sF7FqxiBhwm9ktFOdNvqeWjL9z+rMv2MiT8B9iKNzvjLEtkAAAAASUVORK5CYII="/>
    </Svg>
  );
};

export default Icon;
