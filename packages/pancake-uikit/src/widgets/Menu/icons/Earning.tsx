import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 17" {...props} width="26px">
      <image id="Earning" width="26" height="17" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAARCAYAAAA2cze9AAACCUlEQVQ4ja3USYjOcRgH8M+8tuz7NmpI0pQQpRwccMBBsmXJcpHionGQG3FwUdbLHGwRhTiQ5iAjlHJAkWUkNImxJMpuLD08r97ezJjDPPUefm/P//t8v99nqXDwp3aMfViFAK0otCcytmF7AMejYwtJlajGUDTjER7gXVnedLzFjXwPwQJcxvhy8ABbj9XohSZ0xgDcwg4cx2fMxFk8wywMwmlcSYzaUs/H4RiqsBOX0IhOqWIeVuAAzmNPMqxMUt1wE4tTYVURfBgu4ivmpwURG/EQp/K9KBihD05ksX5JpCm/fVNkG7YMxhb0xLQEHoXJqMHjLFqfgN9xBOfwDS8wA+9LgSMKCRiSd+M+RqMOh7Pr1ell/Lqkirr0tRiN5cBF8GX4kmDSs2jiBEyKrmMOPqF35pxMn6tbm8uwZSI+Ztcj7qA/NiWbril9M15mzr0kNjbV/jMKWaB0Tc9gbXo7sMS6mKQemdOclrW0J3+ZN2BkSo4Rmp2MatKKH5iLQznv0bgRWbyhNfBCfhTSl+R/z7ESt3EV17E3Z7poy9KyzWwRvD7ndF026RoWJuDwZL4By7M3U1JJbWvAfvv2Z4nG4ALuJqtoYMTWvCuhLmIqjmZeFPjQFvCIWIT96WVcttjY6EGHVBQjuyZvR5zVJ21lXoyY6bAgDlF3vMqm98XTPFq78Pp/wPALxUmGZ+oe7R0AAAAASUVORK5CYII="/>
    </Svg>
  );
};

export default Icon;
