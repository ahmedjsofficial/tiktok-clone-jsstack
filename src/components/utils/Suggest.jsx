import React, { useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useGetUserSuggestQuery } from "../../app/tiktokAPI";
import { ErrorState, LoadingState } from "../QueryActions";

const Suggest = () => {
  const [suggestToSee, setSuggestToSee] = useState(5);
  const { data, isLoading, isError } = useGetUserSuggestQuery();
  console.log(data)
  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;
  return (
    <>
      <div className="grid items-center justify-items-start gap-2">
        <h1 className="text-slate-900 ml-3 font-bold">Suggest Accounts</h1>
        {data?.user_list?.slice(0, suggestToSee)?.map((val, i) => (
          <a href={val?.aweme?.share_info?.share_url} target="_blank" className="flex items-center w-full" key={i}>
          <div
            className="flex items-center gap-3 hover:bg-slate-50/30 hover:shadow rounded hover:shadow-slate-200 w-full py-2 px-3"
          >
            <div className="flex items-center">
              <img
                src={val?.user?.avatar_thumb?.url_list[0]}
                alt={val?.user?.unique_id}
                className="w-9 h-auto object-cover rounded-full"
              />
            </div>
            <div className="grid items-center">
              <h1 className="font-semibold text-sm flex items-center">
                {val?.user?.recommend_reason}{" "}
                <sup>
                  <CheckBadgeIcon className="w-4 h-4 text-sky-500" />
                </sup>
              </h1>
              <h1 className="text-xs text-slate-500">{val?.user?.nickname}</h1>
            </div>
          </div>
          </a>
        ))}
        <div className="flex items-center ml-3">
          {suggestToSee === 5 ? (
            <button
              onClick={() => setSuggestToSee(data?.user_list?.length)}
              className="text-sm px-3 py-1 shadow rounded shadow-slate-200 font-medium text-rose-500"
            >
              See All
            </button>
          ) : (
            <button
              type="button"
              className="text-sm px-3 py-1 shadow rounded shadow-slate-200 font-medium text-rose-500"
              onClick={() => setSuggestToSee(5)}
            >
              See Less
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Suggest;
