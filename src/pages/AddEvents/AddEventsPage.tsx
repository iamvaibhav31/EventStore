import "./AddEventPage.css";
import { FileUpload, DataPicker, Select } from "../../components/modules";
import { eventCategory, eventCategoryType } from "../../constant";
import { useState } from "react";

import ImageUrlGenerator from "../../utils/FileUrlService";
import { addEvent } from "../../redux/features/CRUDEvents/Eventslice";
import { useStoreDispatch } from "../../hooks/UseReducer";
import { useNavigate } from "react-router-dom";
import PlaceSearchSelector from "../../components/modules/selector/components/PlaceSearch/PlaceSearch";
import { showToastMessage } from "../../components/modules/Toastify/ToastMessages";
import { ActionMeta, MultiValue, OnChangeValue } from "react-select";

interface Option {
  label: string;
  value: string;
}

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
  const [startingDate, setStartingDate] = useState<Date>(new Date());
  const [startingTime, setStartingTime] = useState("2:00 AM");
  const [endingDate, setEndingDate] = useState<Date>(new Date());
  const [endingTime, setEndingTime] = useState("2:00 AM");
  const [eventCatagory, setEventCatagory] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [tiketAvailable, setTiketAvailable] = useState(0);

  const fileUpload = async () => {
    const bannerIMG = ImageUrlGenerator(bannerImg);
    const organizerIMG = ImageUrlGenerator(organizerImg);

    await bannerIMG.then((res) => {
      if (res.success) {
        console.log(res, bannerImgUrl);
        setBannerImgUrl(res.imgURL);
      }
    });

    await organizerIMG.then((res) => {
      if (res.success) {
        console.log(res);
        setOrganizerImgUrl(res.imgURL);
      }
    });
  };

  const handelOnSubmit = (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    fileUpload();
    console.log(event);
    try {
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
      showToastMessage("ERROR", "Something Went Wrong");
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  const reader = new FileReader();
                  reader.readAsDataURL(files[0]);
                  reader.onload = () => {
                    const dataUrl = reader.result as string;
                    setBannerImg(dataUrl);
                  };
                }
              }}
            />
          </div>

          <div className="formGroupElement">
            <label htmlFor="" className="formLabel">
              Organizer Image
            </label>
            <FileUpload
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  const reader = new FileReader();
                  reader.readAsDataURL(files[0]);
                  reader.onload = () => {
                    const dataUrl = reader.result as string;
                    setOrganizerImg(dataUrl);
                  };
                }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTiketAvailable(parseInt(e.target.value));
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
              onChange={(
                newValue: OnChangeValue<Option | MultiValue<Option>, boolean>,
                actionMeta: ActionMeta<Option>,
              ) => {
                console.log(newValue);
                setEventCatagory((newValue as Option)?.value);
              }}
            />
          </div>
          <div className="formGroupElement">
            <label htmlFor="">Location</label>
            <PlaceSearchSelector
              options={options}
              setOptions={setOptions}
              onChange={(
                newValue: OnChangeValue<Option | MultiValue<Option>, boolean>,
                actionMeta: ActionMeta<Option>,
              ) => {
                console.log(newValue);
                setEventLocation((newValue as Option)?.value);
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
              <DataPicker
                select={startingDate}
                onChange={(data: Date) => {
                  setStartingDate(data);
                }}
              />
              {/* <DataPicker select={startingDate} onChange={() => {}} /> */}
            </div>
          </div>
          <div className="formGroupElement">
            <label htmlFor="">Ending At:</label>
            <div className="formGroupElementGroup">
              <DataPicker
                select={endingDate}
                onChange={(data: Date) => {
                  setEndingDate(data);
                }}
              />
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
