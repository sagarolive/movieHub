import React from "react";
import { Range } from "react-range";

const RangeSlider = ({ label, values, setValues, step, min, max }: any) => {
  return (
    <div>
      <h3 className="mb-5">{label}</h3>
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        renderMark={({ props, index }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "10px",
              width: "2px",
              zIndex: "1",
              backgroundColor: index * 10 < values[0] ? "#548BF4" : "#ccc",
            }}
          />
        )}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "3px",
              width: "100%",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "2rem",
              width: "2rem",
              borderRadius: "25%",
              backgroundColor: "#2DD4Df",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "8",
            }}
          >
            <div
              style={{
                position: "absolute",
                color: isDragged ? "#111" : "#fff",
              }}
            >
              {values[index]}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default RangeSlider;
