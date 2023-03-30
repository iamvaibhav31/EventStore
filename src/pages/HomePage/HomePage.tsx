import React, { useMemo, useState } from "react";
import "./HomePage.css";
import { DataPicker, Select } from "./../../components/modules";
import PlaceSearchSelector from "../../components/modules/selector/components/PlaceSearch/PlaceSearch";
import { EventCard } from "../../components";
import { getAllEvents } from "../../redux/features/CRUDEvents/Eventslice";
import { useStoreSelector } from "../../hooks/UseReducer";
import _ from "lodash";
import { eventCategory } from "../../constant";
import { InitialStateType } from "../../redux/features/CRUDEvents/InitialState.type";
interface Option {
  label: string;
  value: string;
}
const HomePage = () => {
  const events = useStoreSelector(getAllEvents);
  const [select, setSelect] = React.useState(new Date());
  const [showFilter, setShowFilter] = React.useState(false);
  const [applyingfilter, setApplyingFilter] = useState<{
    category?: string;
  }>({});
  const [options, setOptions] = useState<Option[]>([]);
  const filterWrapper = (events: InitialStateType[]) => {
    let filterdata = events;

    if (_.size(applyingfilter) !== 0) {
      filterdata = _.filter(filterdata, (event) => {
        return _.every(applyingfilter, (value, key) => {
          return event[key] === value;
        });
      });
    }

    return filterdata;
  };
  const filteredEvent = filterWrapper(events);

  return (
    <div className="homeContainer">
      <div className="homePageHeader">
        <div className="homePageTitle">Events</div>
        <button
          className="homePagefilter"
          onClick={() => {
            setShowFilter((preState) => !preState);
          }}
        >
          Filter
        </button>
      </div>
      <hr />

      {showFilter && (
        <section className="homePageFilterContainer">
          <div className="homePageFilters">
            <Select
              type="CATEGORY"
              option={eventCategory}
              onChange={(newValue) => {
                console.log(newValue?.value);
                setApplyingFilter((prevState) => {
                  return { ...prevState, category: newValue?.value };
                });
              }}
            />
          </div>
          <div className="homePageFilters">
            <PlaceSearchSelector
              options={options}
              setOptions={setOptions}
              onChange={(newValue) => {
                setApplyingFilter((prevState) => {
                  return { ...prevState, category: newValue?.value };
                });
              }}
            />
          </div>
          <div>
            <button
              className="homePageFilterReset"
              onClick={() => {
                setApplyingFilter({});
              }}
            >
              Reset
            </button>
          </div>
        </section>
      )}

      <section className="homeEventContainer">
        {filteredEvent.map((item) => (
          <EventCard
            id={item.id}
            bannerURL={item.bannerURL}
            name={item.name}
            category={item.category}
            description={item.description}
            organizeAt={item.organizeAt}
            endingDate={item.endingDate}
            endingTime={item.endingTime}
            organizerImgURL={item.organizerImgURL}
            organizerName={item.organizerName}
            startingDate={item.startingDate}
            startingTime={item.startingTime}
            ticketleft={item.ticketleft}
            totalticket={item.totalticket}
          />
        ))}
        {/* <EventCard /> */}
      </section>
    </div>
  );
};

export default HomePage;
