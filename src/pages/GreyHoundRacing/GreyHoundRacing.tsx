import { useContext, useEffect } from "react";
import ResultsByRegion from "./common/ResultsByRegion/ResultsByRegion.tsx";
import RaceDayResultsTable from "./common/RaceDayResultsTable/RaceDayResultsTable.tsx";
import RacingTabs from "../HorseRacing/common/RacingTabs/RacingTabs.tsx";
import DayTabs from "../HorseRacing/common/DayTabs/DayTabs.tsx";
import { AppContext } from "../../context/AppContext/AppContext.tsx";
import { TABS_KEYS } from "../../utils/common.type.ts";

const GreyHoundRacing = () => {
  const { setActiveTab } = useContext(AppContext);

  useEffect(() => {
    setActiveTab(TABS_KEYS.GREY_HOUND_RACING);
  }, [setActiveTab]);

  return (
    <div className="container mx-auto max-w-[926px] pt-5 md:py-[64px] px-3 space-y-8">
      <div>
        <div className="text-2xl text-[#333333] md:text-[39px] font-extrabold">
          Greyhound Racing Results
        </div>
        <div className="text-base text-[#666666] pt-3">
          See all of today's greyhound racing results for all Australian and New
          Zealand meetings.
        </div>
      </div>
      <div className="space-y-8">
        <RacingTabs />
        <DayTabs isOnlyDate />
      </div>

      <div className="font-extrabold text-sm md:text-xl">
        Saturday 15th March 2025
      </div>
      <div className="space-y-8">
        <RaceDayResultsTable />
        <ResultsByRegion />
      </div>
    </div>
  );
};

export default GreyHoundRacing;
