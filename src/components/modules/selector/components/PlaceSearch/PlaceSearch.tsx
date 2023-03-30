import React, { useState } from "react";
import ReactSelect from "../../ReactSelect";
import placeSearchAPI from "../../../../../utils/PlaceSearchService";
import { PlaceSearchProps } from "./PlaceSearch.type";

const PlaceSearchSelector = ({
  options,
  setOptions,
  onChange,
}: PlaceSearchProps) => {
  const [loading, setLoading] = useState(false);
  const handleInputChange = (inputValue: string) => {
    setLoading(true);
    if (!inputValue) {
      setOptions([]);
      return;
    }

    placeSearchAPI(inputValue)
      ?.then((res) => {
        console.log(res);
        const options = res.data.map((place) => ({
          label: place.display_name,
          value: place.display_name,
        }));
        setOptions(options);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <ReactSelect
      type="PLACESEARCH"
      onInputChange={handleInputChange}
      option={options}
      isLoading={loading}
      onChange={onChange}
    />
  );
};

export default PlaceSearchSelector;
