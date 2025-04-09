import { useEffect, useState } from "react";
import { Input, Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { dayTabsData } from "../../../../utils/common.constants.ts";
import SvgIcon from "../../../../components/Icon/SvgIcon.tsx";

const DayTabs = ({ isOnlyDate = false }: { isOnlyDate?: boolean }) => {
  const [activeTab, setActiveTab] = useState<string>("latest");
  const [value, setValue] = useState<Date | null>(null);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    setIsFilterExpanded(screenWidth >= 768);
  }, []);

  const getTabClasses = (isActive: boolean) =>
    `${isActive ? "bg-[#002503] text-[#F0E62A]" : "bg-white text-[#666666]"} 
     flex items-center w-full h-10 rounded-md justify-center text-base cursor-pointer`;

  return (
    <div className="bg-[#F4F4F4] p-4 rounded-md">
      <div className="sm:hidden">
        <Select
          data={dayTabsData.map((tab) => tab.label as string)}
          className="md:!max-w-[236px]"
          classNames={{
            input:
              "!border-none mt-2 !text-base !h-[50px] !rounded-md placeholder:!px-2",
            label: "text-[#333333]",
          }}
          defaultValue="Latest"
          placeholder="Search big races"
          label="View by date"
        />

        <button
          className="mt-4 text-[#0000FF]"
          onClick={() => {
            setIsFilterExpanded(!isFilterExpanded);
          }}
        >
          {isFilterExpanded ? "Collapse filter +" : "Expand filter +"}{" "}
        </button>
      </div>
      <div className="md:flex gap-2 justify-between hidden sm:grid grid-cols-2 sm:grid-cols-3">
        {dayTabsData.map((tab) => {
          const isActive = tab.value === activeTab;
          return (
            <div
              key={tab.value}
              className={getTabClasses(isActive)}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      {isFilterExpanded && (
        <div
          className={`mt-4 ${isFilterExpanded ? "grid" : "hidden"} sm:grid gap-2 ${isOnlyDate ? "md:grid-cols-1" : "md:grid-cols-3"}`}
        >
          {!isOnlyDate && (
            <>
              <Select
                data={["React", "Angular", "Vue"]}
                leftSectionPointerEvents="none"
                className="md:!max-w-[236px]"
                classNames={{
                  input:
                    "!border-none !text-base !h-[50px] !rounded-md placeholder:!px-2",
                }}
                leftSection={<SvgIcon icon="STAR_ICON" />}
                placeholder="Search big races"
              />
              <Input
                placeholder="Search locations"
                leftSectionPointerEvents="none"
                className="md:!max-w-[236px]"
                classNames={{
                  input:
                    "!border-none !text-base !h-[50px] !rounded-md placeholder:!px-2",
                }}
                leftSection={<SvgIcon icon="LOCATION_ICON" />}
              />
            </>
          )}
          <DatePickerInput
            placeholder="Select date"
            value={value}
            leftSectionPointerEvents="none"
            className={`${isOnlyDate ? "md:max-w-full" : "md:!max-w-[236px]"}`}
            classNames={{
              input:
                "!border-none !text-base !h-[50px] !rounded-md placeholder:!px-2",
              placeholder: "!px-2",
            }}
            leftSection={<SvgIcon icon="FILE_ICON" />}
            onChange={setValue}
          />
        </div>
      )}
    </div>
  );
};

export default DayTabs;
