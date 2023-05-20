import { create } from "zustand";

export interface FilterStoreInterface {
  filters: any;
  setFilters: (filters: any) => void;
}

const useFilterStore = create<FilterStoreInterface>((set) => ({
  filters: {
    sortBy: "popularity.desc",
    keyword: "",
    genre: "",
    startDate: "",
    endDate: new Date().toISOString().slice(0, 10),
    voteAverageGte: "0",
    voteAverageLte: "10",
    runTimeGte: "0",
    runTimeLte: "360",
  },
  setFilters(filters) {
    set({ filters });
  },
}));

export default useFilterStore;
