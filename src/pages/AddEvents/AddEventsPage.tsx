import "./AddEventPage.css";
import { FileUpload, DataPicker, Select } from "../../components/modules";
import { eventCategory } from "../../constant";
import { useState } from "react";

import ImageUrlGenerator from "../../utils/FileUrlService";
import { addEvent } from "../../redux/features/CRUDEvents/Eventslice";
import { useStoreDispatch } from "../../hooks/UseReducer";
import { useNavigate } from "react-router-dom";
import PlaceSearchSelector from "../../components/modules/selector/components/PlaceSearch/PlaceSearch";
import { showToastMessage } from "../../components/modules/Toastify/ToastMessages";
const AddEventsPage = () => {
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const [options, setOptions] = useState<Option[]>([]);
  const [bannerImgUrl, setBannerImgUrl] = useState("");
  const [organizerImgUrl, setOrganizerImgUrl] = useState("");
  const [bannerImg, setBannerImg] = useState("");
  const [organizerImg, setOrganizerImg] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [organizerName, setOrganierName] = useState("");
  const [startingDate, setStartingDate] = useState(new Date());
  const [startingTime, setStartingTime] = useState("2:00 AM");
  const [endingDate, setEndingDate] = useState(new Date());
  const [endingTime, setEndingTime] = useState("2:00 AM");
  const [eventCatagory, setEventCatagory] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [tiketAvailable, setTiketAvailable] = useState(0);

  const handelOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const bannerIMG = ImageUrlGenerator(bannerImg);
      const organizerIMG = ImageUrlGenerator(organizerImg);

      bannerIMG.then((res) => {
        if (res.success) {
          setBannerImgUrl(res.imgURL);
        }
      });

      organizerIMG.then((res) => {
        if (res.success) {
          setOrganizerImgUrl(res.imgURL);
        }
      });
      dispatch(
        addEvent({
          name: eventName,
          bannerURL: bannerImgUrl,
          organizerName: organizerName,
          organizerImgURL: organizerImgUrl,
          totalticket: tiketAvailable,
          ticketleft: tiketAvailable,
          startingDate: startingDate,
          startingTime: startingTime,
          category: eventCatagory,
          description: eventDesc,
          organizeAt: eventLocation,
          endingDate: endingDate,
          endingTime: endingTime,
        }),
      );
      navigate("/");
      showToastMessage("SUCCESS", "Event Was Created");
    } catch (err) {
      showToastMessage("ERROR", err);
    }
  };

  return (
    <div className="eventAddContainer">
      <div className="addEventPageTitle">
        Add Events
        <hr />
      </div>

      <form className="addEventFormContainer">
        <div className="formGroup">
          <div className="formGroupElement">
            <label htmlFor="" className="formLabel">
              Banner
            </label>
            <FileUpload
              onChange={(e) => {
                setBannerImg(e.target.files[0]);
              }}
            />
          </div>

          <div className="formGroupElement">
            <label htmlFor="" className="formLabel">
              Organizer Image
            </label>
            <FileUpload
              onChange={(e) => {
                setOrganizerImg(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="formGroup">
          <div className="formGroupElement">
            <label htmlFor="" className="formLabel">
              Event Name
            </label>
            <input
              type="text"
              className="formInput"
              onChange={(e) => {
                setEventName(e.target.value);
              }}
              required
            />
          </div>
          <div className="formGroupElement">
            <label htmlFor="" className="formLabel">
              Organizer Name
            </label>
            <input
              type="text"
              className="formInput"
              onChange={(e) => {
                setOrganierName(e.target.value);
              }}
              required
            />
          </div>
          <div className="formGroupElement">
            <label htmlFor="" className="formLabel">
              Ticket Available
            </label>
            <input
              type="number"
              className="formInput"
              onChange={(e) => {
                setTiketAvailable(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="formGroup">
          <div className="formGroupElement">
            <label htmlFor="">Category</label>
            <Select
              type="CATEGORY"
              option={eventCategory}
              onChange={(newValue) => {
                console.log(newValue?.value);
                setEventCatagory(newValue?.value);
              }}
            />
          </div>
          <div className="formGroupElement">
            <label htmlFor="">Location</label>
            <PlaceSearchSelector
              options={options}
              setOptions={setOptions}
              onChange={(newValue) => {
                console.log(newValue);
                setEventLocation(newValue?.value);
              }}
            />
          </div>
        </div>
        <div className="formGroupTextField">
          <label htmlFor="Descriptions">Descriptions</label>
          <textarea
            id="Descriptions"
            className="formTextArea"
            onChange={(e) => {
              setEventDesc(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <div className="formGroup">
          <div className="formGroupElement">
            <label htmlFor="">Starting At:</label>
            <div className="formGroupElementGroup">
              <DataPicker select={startingDate} onChange={() => {}} />
              {/* <DataPicker select={startingDate} onChange={() => {}} /> */}
            </div>
          </div>
          <div className="formGroupElement">
            <label htmlFor="">Starting At:</label>
            <div className="formGroupElementGroup">
              <DataPicker select={startingDate} onChange={() => {}} />
              {/* <DataPicker select={startingDate} onChange={() => {}} /> */}
            </div>
          </div>
        </div>

        <div className="formButtonContainer ">
          <button className="formButton" onClick={handelOnSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEventsPage;
