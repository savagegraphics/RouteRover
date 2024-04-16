import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const App = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <Datepicker
      showShortcuts={true}
      showFooter={true}
      configs={{
        shortcuts: {
          today: "TText",
          yesterday: "YText",
          past: period => `P-${period} Text`,
          currentMonth: "CMText",
          pastMonth: "PMText"
        },
        footer: {
          cancel: "CText",
          apply: "AText"
        }
      }}
      value={value}
      onChange={handleValueChange}
    />
  );
};

export default App;
