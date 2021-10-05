import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 26" {...props} width="26px">
      <image id="Home" width="26" height="26" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAC4ElEQVRIiaWWy2+MYRTGf9/X6UVvKkqLoFEblESClbgkFjYuG3+IPwc7WysLIRLEZWVBiMTCrUQEodWajtaYGXmT39ucfCpx+ZKTme8y53nOeZ5z5is6nQ7/cZRAUYmO0c7fa/+QvzB5F9AN9PhZev8H8B1o+v3H34KkxDWT9gH9Rq/3Evsl4CvQAL6la38KUho9Jh8ABoEhYLXXEkgLqEui8PyPKill3yvrnDjFGmA9sBXYDmwCpoELoW2LK4EUgXmtwn7Y5CPGIeCIQHM+uw24BMwbZRWky+iR+arQmuEQk8AZK3gKPAQ+ADuAjZKrZTNEkMh6MLDOMSTofuAk8Ao4r9A9/j63i2jjDJIt2WvydcC4bVjrZwKZAI4C14Gb/qbPZCNWcUPgbOFldxUy6fPhDfb2GLDTSrps3TXgtvYswtAdBD4Dj3RYQ+HbZQDJrFLCKeAscNgqG16/DzwQYDEMXSK2zwrfa4KFKki06hhwGtgiy9L2TStyS+a5vYnYKeAZcEdH1SXSrA5jFmoGuCKb3cBmYBZ4HVo65LOpfSfU8ZwAc078oppQtXDHG5+Al7ZxwOe6HMZR3ZeO455fBD4KMBf1iCBxAMuwEpqCTapTU4D0zF5ddxd4Z4vmQxW5rcsDkwewP+yklHSXgF8Ud69VjlvxUliEGSBr0YpiFwIM6KBRkx/QITgrb8Pa6JZ9UzflFZId1YoaxO3aL8iE+ygZ4I2TXbMFj62qJXBK+sJr9SB2pwpShC2b1sYe3TIt40224JXX7vubZPV7VjQryLLY8aitIPqUmmxVh5TgMvDcCjJwYnvVNs6oTbNaRXRXSxYLAs27Im4BT9ywc7aidGbq6jFrLFa1yEd6kejWUWsUfcwKCt2TB6wuSK68beJGcNhvK2lbRd0ETavA740gavZ+fivJs5TAl+dipUriP2D+P0nnefoTgbwIq6LGV59fBI8g0cpx4uP7U46/f0kDfgIJ//tV8iVGcwAAAABJRU5ErkJggg=="/>
    </Svg>
  );
};

export default Icon;
