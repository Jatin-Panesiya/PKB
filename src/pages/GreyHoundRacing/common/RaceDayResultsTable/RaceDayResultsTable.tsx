import { Table } from "@mantine/core";
import { greyhoundTableData } from "../../../../utils/common.constants.ts";
import SvgIcon from "../../../../components/Icon/SvgIcon.tsx";

const RaceDayResultsTable = () => {
  const rows = greyhoundTableData.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td className="border-l-1 border-[#E2E2E2]">
        <div className="text-white bg-[#2DA65D] w-4 h-4 p-2 md:w-9 md:h-9 rounded-full max-md:text-xs md:rounded flex items-center justify-center">
          {element.position}
        </div>
      </Table.Td>

      <Table.Td className="min-w-72">
        <div className="flex items-center gap-6">
          <div className="flex gap-1">
            <div className="font-bold">{element.name}</div>
            <div>{element.role}</div>
          </div>
          <div className="text-[#666666]">{element.subName}</div>
        </div>
      </Table.Td>
      <Table.Td className="min-w-10">{element.range}</Table.Td>
      <Table.Td className="text-[#666666]">{element.distance}</Table.Td>
      <Table.Td className="border-r-1 border-[#E2E2E2]">
        <div className="flex gap-0.5 items-center text-[#0000FF] cursor-pointer">
          <span>Final</span>{" "}
          <SvgIcon icon="RIGHT_ARROW_ICON" className="pt-0.5" />
        </div>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="border-t-1 border-b-1 border-[#E2E2E2] rounded-xl overflow-auto w-full max-w-4xl mx-auto">
      <Table className="w-full">
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default RaceDayResultsTable;
