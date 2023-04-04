import "./EventCard.css";
import { EventCardProps } from "./EventCardProps.type";
import { timeFormate } from "../../utils/TimeFunc";
import { bookTicket } from "../../redux/features/CRUDEvents/Eventslice";
import { useStoreDispatch } from "../../hooks/UseReducer";
import useAuth from "../../hooks/useAuth";
import { showToastMessage } from "../modules/Toastify/ToastMessages";
const EventCard = ({
  id,
  name,
  category,
  startingDate,
  startingTime,
  organizeAt,
  organizerImgURL,
  organizerName,
  endingDate,
  endingTime,
  bannerURL,
  description,
  ticketleft,
  totalticket,
}: EventCardProps) => {
  const dispatch = useStoreDispatch();
  const { isAuth } = useAuth();
  return (
    <div className="eventCardContainer" key={id}>
      <div className="eventCardBanner">
        <img
          src={bannerURL}
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="eventCardInfo">
        <div className="eventCardAboutInfo">
          <div className="eventCardAboutTitle">
            {name}
            <br />
            <div className="eventOrganizerDetails">
              <div>
                By <b> {organizerName}</b>{" "}
              </div>
              <div>
                At <b> {organizeAt}</b>
              </div>
              <div>
                Starting At:{" "}
                <b>
                  {timeFormate(startingDate).date} {}
                </b>
              </div>
              <div>
                Ending At:{" "}
                <b>
                  {timeFormate(endingDate).date} {}
                </b>
              </div>
              <div>
                Category: <b>{category}</b>
              </div>
            </div>
          </div>
          <div>{description}</div>
        </div>
        <div className="eventCardTicketInfo">
          <div className="eventCardTickets">
            <div>
              <span className="eventCardTicketNumber">{ticketleft}</span>
              <br />
              Ticket Remain
            </div>
            <div>
              <span className="eventCardTicketNumber">{totalticket}</span>
              <br />
              Ticket Available
            </div>
          </div>
          <div className="eventCardBuyTicketInfo">
            {/* <div className="eventCardBuyNoOfTicket">
              <label htmlFor="ticketnum" className="eventCardTicketNumber">
                No of Ticket:
              </label>
              <input
                type="number"
                id="ticketnum"
                className="eventCardBuyNoOfTicketInput"
              />
            </div> */}
            <button
              className="eventCardButton"
              onClick={() => {
                if (isAuth) {
                  dispatch(bookTicket({ id }));
                  showToastMessage(
                    "SUCCESS",
                    `You Ticket Was Booked For ${name} Events`,
                  );
                } else {
                  showToastMessage("ERROR", `Please Login First!`);
                }
              }}
            >
              Book Ticket
            </button>
          </div>
        </div>
      </div>

      <div></div>

      <div className="eventCardLogoContainer">
        <img
          src={organizerImgURL}
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default EventCard;
