import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SvgIcon from "../../../../components/Icon/SvgIcon.tsx";
import { tabData } from "../../../../utils/common.constants.ts";
import { IIcons, TABS_KEYS } from "../../../../utils/common.type.ts";
import { AppContext } from "../../../../context/AppContext/AppContext.tsx";

const RacingTabs = () => {
  const { activeTab, setActiveTab } = useContext(AppContext);
  const [activeTabLocal, setActiveTabLocal] = useState<string>(
    activeTab ?? TABS_KEYS.HORSE_RACING,
  );

  useEffect(() => {
    setActiveTabLocal(activeTab ?? TABS_KEYS.HORSE_RACING);
  }, [activeTab]);

  const getTabClasses = (isActive: boolean) =>
    `${isActive ? "bg-[#002503] text-[#F0E62A]" : "bg-[#F4F4F4] text-[#333333]"} 
     flex items-center w-full h-8 md:h-[74px] rounded-md justify-center gap-2 md:font-bold cursor-pointer`;

  const getIconClasses = (isActive: boolean) =>
    `${isActive ? "fill-[#F0E62A]" : "fill-[#333333]"}`;

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-2">
      {tabData.map((tab) => {
        const isActive = tab.value === activeTabLocal;
        return (
          <div
            key={tab.value}
            className={getTabClasses(isActive)}
            onClick={() => {
              setActiveTabLocal(tab.value);
              setActiveTab(tab.value);
              navigate(tab.link);
            }}
          >
            <SvgIcon
              icon={tab.icon as keyof IIcons}
              className={`${getIconClasses(isActive)} max-md:hidden`}
            />
            <SvgIcon
              icon={`SMALL_${tab.icon}` as keyof IIcons}
              className={`${getIconClasses(isActive)} md:hidden`}
            />
            <div className="max-sm:text-xs text-base">
              {tab.label} <span className="max-md:hidden">Racing</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RacingTabs;
