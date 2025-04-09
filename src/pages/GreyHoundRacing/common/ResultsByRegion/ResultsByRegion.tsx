import { racingResults } from "../../../../utils/common.constants.ts";

const ResultsByRegion = () => {
  return (
    <div className="space-y-8">
      {racingResults.map((region) => (
        <div key={region?.date} className="space-y-8">
          <div>
            <div className="text-xl font-extrabold">{region?.region}</div>
            <div className="text-[#666666] font-extrabold">{region?.date}</div>
          </div>
          <div className="space-y-1">
            {region?.venues?.map((venue) => (
              <div
                key={venue?.name}
                className="border w-fit border-[#E2E2E2] rounded-lg"
              >
                <div className="flex items-center">
                  <div className="p-4 min-w-40">
                    <div className="font-bold">{venue?.name}</div>
                    <div className="text-[#666666]">{`(${venue?.state})`}</div>
                  </div>
                  <div className="flex flex-wrap w-full">
                    {Object.entries(venue?.results).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-[#F4F4F4] last:rounded-r-lg last:border-r-0 flex items-center justify-center flex-col w-[74px] h-[81px] border-[#E2E2E2]  border-r-1 border-l-1"
                      >
                        <div className="font-medium">{key}</div>
                        <div className="flex gap-2 text-sm text-gray-700">
                          {Array.isArray(value) ? (
                            value.map((result, index) => (
                              <div key={index}>{result}</div>
                            ))
                          ) : (
                            <div className="text-red-500">No results</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsByRegion;
