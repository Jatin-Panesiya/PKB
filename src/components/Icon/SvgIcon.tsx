import { ICONS } from "./Icons.tsx";
import { ISvgIconProps } from "../../utils/common.type.ts";
import { JSX } from "react";

const SvgIcon = ({ icon, key, ...restProps }: ISvgIconProps): JSX.Element => (
  <i key={key} {...restProps}>
    {ICONS[`${icon}`]}
  </i>
);

export default SvgIcon;
