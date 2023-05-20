import React, { forwardRef, useState } from "react";

//ThirdParty imports
import CustomDatePicker from "react-datepicker";

//Styles imports
import "react-datepicker/dist/react-datepicker.css";

const CustomInput = forwardRef(
  ({ value, onClick }: { value: any; onClick: any }, ref: any) => (
    <div className="relative w-full">
      <input
        className="p-4 rounded-md bg-gray-700 w-full outline-none"
        onClick={onClick}
        ref={ref}
        value={value}
        id="floatingDates"
        type="text"
        placeholder="Enter Date Range"
        readOnly
      />
    </div>
  )
);

const DatePicker = ({ startDate, endDate, setDateRange }: any) => {
  return (
    <CustomDatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      isClearable={true}
      //@ts-ignore
      customInput={<CustomInput />}
      onChange={(update: any) => setDateRange(update)}
    />
  );
};

export default DatePicker;
