import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext/AppContext.tsx";
import { TABS_KEYS } from "../../utils/common.type.ts";
import CustomTabs from "./common/RacingTabs/RacingTabs.tsx";
import DayTabs from "./common/DayTabs/DayTabs.tsx";
import TableData from "./common/TableData/TableData.tsx";
import { masterTableData } from "../../utils/common.constants.ts";

const HorseRacing = () => {
  const { setActiveTab } = useContext(AppContext);

  useEffect(() => {
    setActiveTab(TABS_KEYS.HORSE_RACING);
  }, [setActiveTab]);

  return (
    <div className="space-y-8 pt-5 md:py-[64px] container mx-auto max-w-[758px] px-3">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="text-2xl text-[#333333] md:text-[39px] font-extrabold">
            Race Results
          </div>
          <div>
            <div className="text-[#666666] text-base">
              See all the latest racing results, or use the date picker to see
              older results. View the latest
            </div>
            <div className="text-[#0000FF]">Melbourne Cup results here</div>
          </div>
        </div>
        <div className="space-y-8">
          <CustomTabs />
          <DayTabs />
        </div>
      </div>
      <div className="space-y-8">
        {masterTableData.map((item, index) => (
          <TableData key={index} date={item.date} data={item.tableData} />
        ))}
      </div>
    </div>
  );
};

export default HorseRacing;
