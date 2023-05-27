import { HashtagIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useGetUserDiscoverQuery } from "../../app/tiktokAPI";
import { ErrorState, LoadingState } from "../QueryActions";

const Discover = () => {
    const { data, isError, isLoading } = useGetUserDiscoverQuery();
    // console.log(data)
    if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;
  
  return (
    <>
      <div className="grid items-center justify-items-start gap-2">
        <h1 className="text-slate-900 ml-3 font-bold">Discover</h1>
        <div className="flex items-center justify-start flex-wrap gap-2 px-3">
        {data?.category_list?.map((val, i) => (
            <div key={i} className="ring-1 ring-slate-300 px-2 py-0.5 rounded-full flex items-center gap-1 hover:bg-slate-100 cursor-pointer">
                <HashtagIcon className="w-4 h-4 stroke-[1.7] text-slate-900" />
                <h1 className="text-sm font-medium text-gray-700">{val?.challenge_info?.cha_name}</h1>
            </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Discover;
