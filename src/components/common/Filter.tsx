import React, { useState } from "react";

//ThirdParty imports
import { useQuery } from "react-query";
import { CiFilter } from "react-icons/ci";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemButton,
  AccordionItemHeading,
} from "react-accessible-accordion";
import { RiArrowUpSLine } from "react-icons/ri";

//Components imports
import Select from "./Select";
import Drawer from "./Drawer";
import DatePicker from "./DatePicker";
import RangeSlider from "./RangeSlider";
import CustomAsyncSelect from "./AsyncSelect";

//Hooks imports
import { useDrawerStore, useFilterStore } from "@/hooks";

//Styles imports
import "react-accessible-accordion/dist/fancy-example.css";

const sortByOptions = [
  {
    label: "Popularity(ASC)",
    value: "popularity.asc",
  },
  {
    label: "Popularity(DESC)",
    value: "popularity.desc",
  },
  {
    label: "Release Date(ASC)",
    value: "release_date.asc",
  },
  {
    label: "Release Date(DESC)",
    value: "release_date.desc",
  },
  {
    label: "Vote Count(ASC)",
    value: "vote_count.asc",
  },
  {
    label: "Vote Count(DESC)",
    value: "vote_count.desc",
  },
  {
    label: "Title(A-Z)",
    value: "original_title.asc",
  },
  {
    label: "Title(Z-A)",
    value: "original_title.desc",
  },
];

const Filter = () => {
  const { closeDrawer, toggleDrawer } = useDrawerStore();
  const [sortBy, setSortBy] = useState<any>("popularity.desc");
  const [genre, setGenre] = useState<string>("");
  const [dateRange, setDateRange] = useState<any>([null, null]);
  const [startDate, endDate] = dateRange;
  const [keyword, setKeyword] = useState<any>("");
  const [userRating, setUserRating] = useState([0, 9]);

  const { setFilters } = useFilterStore();

  const { data, isLoading } = useQuery(
    "movieGenres",
    async () => {
      const response = await fetch("/api/getMovieGenre");
      return response.json();
    },
    {
      select(data) {
        return data?.genres?.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
      },
    }
  );

  const handleLoadOptions = async (
    inputText: any,
    loadedOptions: any,
    { page }: any
  ) => {
    const res = await fetch(
      `/api/getKeyword?page=${page}&keyword=${inputText}`
    ).then((res) => res.json());
    return {
      options: res?.results?.map((item: any) => ({
        label: item.name,
        value: item.id,
      })),
      hasMore: res.results?.length >= 1,
      additional: {
        page: inputText ? 2 : page + 1,
      },
    };
  };

  return (
    <div className="flex mb-9 justify-end text-sm">
      <button
        onClick={toggleDrawer}
        className="bg-teal-400  cursor-pointer flex p-2 rounded-md  items-center"
      >
        <CiFilter />
        Filters
      </button>
      <Drawer>
        <div className="flex flex-col justify-between h-full  ">
          <Accordion allowZeroExpanded preExpanded={["a"]}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton className=" border-b-0 flex items-center justify-between w-full p-5 font-medium text-left  border  rounded-t-xl   focus:ring-gray-800 border-gray-700 text-gray-400 hover:bg-gray-800">
                  Sort By
                  <AccordionItemState>
                    {({ expanded }) => (
                      <RiArrowUpSLine
                        className={`w-6 h-6 ${
                          expanded ? "rotate-180" : "rotate-0"
                        } `}
                      />
                    )}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="border border-b-0 border-gray-700 text-gray-400 p-7">
                <Select
                  options={sortByOptions}
                  defaultValue={{
                    label: "Popularity(DESC)",
                    value: "popularity.desc",
                  }}
                  handleChange={(property) => setSortBy(property.value)}
                />
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton className=" flex items-center justify-between w-full p-5 font-medium text-left  border    focus:ring-gray-800 border-gray-700 text-gray-400 hover:bg-gray-800">
                  Filters
                  <AccordionItemState>
                    {({ expanded }) => (
                      <RiArrowUpSLine
                        className={`w-6 h-6 ${
                          expanded ? "rotate-180" : "rotate-0"
                        } `}
                      />
                    )}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="border border-gray-700 text-gray-400">
                <div className="p-7 border border-gray-700 border-x-0 border-t-0">
                  <Select
                    isLoading={isLoading}
                    options={data}
                    handleChange={(property) => setGenre(property?.value)}
                    placeholder="Select Genre"
                  />
                </div>

                <div className="p-7 border-gray-700 border-x-0 border-t-0 border">
                  <DatePicker
                    startDate={startDate}
                    endDate={endDate}
                    setDateRange={setDateRange}
                  />
                </div>
                <div className="p-7 border-gray-700 border-x-0 border-t-0 border">
                  <CustomAsyncSelect
                    handleChange={(property) => setKeyword(property?.value)}
                    handleLoadOptions={handleLoadOptions}
                    placeholder="Search keyword"
                  />
                </div>
                <div className="p-7 w-full">
                  <RangeSlider
                    values={userRating}
                    setValues={setUserRating}
                    label="User Score"
                    step={1}
                    min={0}
                    max={10}
                  />
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <div className="flex space-x-2">
            <button
              className="bg-gray-300 rounded-md p-3 w-full"
              onClick={closeDrawer}
            >
              Close
            </button>
            <button
              className="bg-teal-400 rounded-md p-3 w-full hover:bg-teal-500"
              onClick={() => {
                let temp = {
                  sortBy: sortBy ?? "",
                  genre: genre ?? "",
                  keyword: keyword ?? "",
                  startDate: dateRange[0]
                    ? new Date(dateRange[0]).toISOString().slice(0, 10)
                    : "",
                  endDate: dateRange[1]
                    ? new Date(dateRange[1]).toISOString().slice(0, 10)
                    : "",

                  voteAverageGte: userRating[0],
                  voteAverageLte: userRating[1],
                };

                setFilters(temp);
                closeDrawer();
              }}
            >
              Apply Filter
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Filter;
