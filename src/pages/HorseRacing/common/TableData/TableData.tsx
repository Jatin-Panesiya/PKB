import { Table } from "@mantine/core";
import SvgIcon from "../../../../components/Icon/SvgIcon.tsx";
import { bgColors } from "../../../../utils/common.constants.ts";
import { ITableData } from "../../../../utils/common.type.ts";

const TableData = ({ date, data }: { date: string; data: ITableData }) => {
  return (
    <div>
      <div className="flex items-center justify-between space-y-8">
        <div className="font-extrabold text-sm md:text-xl">{date}</div>
        <div className="bg-[#002503] min-h-6 md:hidden cursor-pointer text-[#F0E62A] font-bold flex items-center gap-1 px-2 text-xs rounded-md">
          Full results
          <SvgIcon icon="THREE_DOT_ICON" className="pt-0.5" />
        </div>
      </div>
      <div className="space-y-8">
        <div className="border-t-1 border-b-1 border-[#E2E2E2] rounded-xl overflow-auto w-full max-w-4xl mx-auto">
          <Table border={2} borderColor="#E2E2E2">
            <Table.Thead className="!bg-[#F4F4F4]">
              <Table.Tr>
                <Table.Th className="!font-normal border border-[#E2E2E2]">
                  <div className="font-normal">
                    <div>
                      <strong>Caulfield - Race 1</strong> Avenel Equine Hospital
                      VOBIS Gold Distaff
                    </div>
                    <div className="text-[#666666]">
                      2400m Total $150k: 1st $82.5k Good 4
                    </div>
                    <div className="flex justify-between ">
                      <div className="text-[#666666]">
                        9 hours ago{" "}
                        <span className="text-[#0000FF]">Form Guide</span>
                      </div>
                      <div className="bg-[#002503] max-md:hidden cursor-pointer text-[#F0E62A] font-bold flex items-center gap-1 px-2 text-xs rounded-md">
                        Full results
                        <SvgIcon icon="THREE_DOT_ICON" className="pt-0.5" />
                      </div>
                    </div>
                  </div>
                </Table.Th>
                <Table.Th className="!font-normal !text-center border border-[#E2E2E2]">
                  Top Tote
                </Table.Th>
                <Table.Th className="!font-normal !text-center border border-[#E2E2E2]">
                  SP
                </Table.Th>
                <Table.Th className="!font-normal !text-center border border-[#E2E2E2]">
                  Margin
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.map((element, index) => (
                <Table.Tr key={index}>
                  <Table.Td className="!font-normal border border-[#E2E2E2] min-w-60">
                    <div className="flex items-center gap-2">
                      <div
                        className="text-white w-4 h-4 p-2 md:w-9 md:h-9 rounded-full max-md:text-xs md:rounded flex items-center justify-center"
                        style={{
                          backgroundColor: bgColors[index % bgColors.length],
                        }}
                      >
                        {" "}
                        {index + 1}
                      </div>
                      <div className="grid grid-cols-2 w-full gap-2 items-center">
                        <div className="flex gap-2 items-center">
                          <div className="min-w-5">
                            {element.coalfield.number}
                          </div>
                          <div className="max-sm:text-sm text-[#0000FF]">
                            {window.innerWidth < 640
                              ? `${element.coalfield.name.slice(0, 5)}...`
                              : element.coalfield.name}
                          </div>
                        </div>
                        <div className="text-[#666666]">
                          {element.coalfield.coName}
                        </div>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td className="!font-normal !text-center !border !border-[#E2E2E2]">
                    {element.topTote}
                  </Table.Td>
                  <Table.Td className="!font-normal !text-center border border-[#E2E2E2]">
                    {element.sp}
                  </Table.Td>
                  <Table.Td className="!font-normal !text-center border border-[#E2E2E2]">
                    {element.margin}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TableData;
