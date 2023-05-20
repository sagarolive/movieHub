import React, { FC } from "react";

//ThirdParty imports
import { FormatOptionLabelMeta, GroupBase } from "react-select";
import { AsyncPaginate, LoadOptions } from "react-select-async-paginate";

//Components imports
import { customStyles } from "./Select";

interface IAsyncPaginateSelectProps {
  placeholder?: string;
  handleChange: (property: any) => void;
  formatOptionLabel?:
    | ((
        data: any,
        formatOptionLabelMeta: FormatOptionLabelMeta<any>
      ) => React.ReactNode)
    | undefined;
  handleLoadOptions: LoadOptions<
    any,
    GroupBase<any>,
    {
      page: any;
    }
  >;
}

const CustomAsyncSelect: FC<IAsyncPaginateSelectProps> = ({
  handleChange,
  handleLoadOptions,
  placeholder,
  formatOptionLabel,
}) => {
  return (
    <div className="w-full">
      <AsyncPaginate
        onChange={handleChange}
        placeholder={placeholder}
        loadOptions={handleLoadOptions}
        styles={customStyles}
        isClearable={true}
        additional={{
          page: 1,
        }}
        debounceTimeout={1500}
        key="async-paginate-select"
        loadOptionsOnMenuOpen={false}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};

export default CustomAsyncSelect;
