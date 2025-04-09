import { createContext, Dispatch, SetStateAction } from "react";
import { TABS_KEYS } from "../../utils/common.type.ts";

interface IAppContextType {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<TABS_KEYS>>;
}

export const AppContext = createContext<IAppContextType>({
  activeTab: TABS_KEYS.HORSE_RACING,
  setActiveTab: () => {},
});
