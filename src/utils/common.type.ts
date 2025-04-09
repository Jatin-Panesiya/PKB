import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

export interface IIcons {
  HORSE_ICON: ReactElement;
  SMALL_HORSE_ICON: ReactElement;
  DOG_ICON: ReactElement;
  SMALL_DOG_ICON: ReactElement;
  MAN_RACING_ICON: ReactElement;
  SMALL_MAN_RACING_ICON: ReactElement;
  STAR_ICON: ReactElement;
  LOCATION_ICON: ReactElement;
  FILE_ICON: ReactElement;
  THREE_DOT_ICON: ReactElement;
  RIGHT_ARROW_ICON: ReactElement;
}

export interface ISvgIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  /**
   * key of the icon
   */
  icon: keyof IIcons;
  fill?: string;
  key?: string;
}

export enum TABS_KEYS {
  HORSE_RACING = "horseRacing",
  GREY_HOUND_RACING = "greyHoundRacing",
  HARNESS_RACING = "harnessRacing",
}

interface Coalfield {
  number: number;
  name: string;
  coName: string;
}

interface TableDataItem {
  coalfield: Coalfield;
  topTote: string;
  sp: string;
  margin: string;
}

export type ITableData = TableDataItem[];
