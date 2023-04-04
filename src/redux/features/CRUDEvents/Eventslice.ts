import { nanoid } from "nanoid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./constant/initialState";
import { InitialStateType } from "./InitialState.type";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import _ from "lodash";
interface bookTicketPayloadType {
  id: string | undefined;
}

const eventsSlice = createSlice({
  name: "Events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<InitialStateType>) => {
      const event = action.payload;
      event.id = nanoid();
      state.push(event);
    },
    bookTicket: (state, action: PayloadAction<bookTicketPayloadType>) => {
      const eventid = action.payload.id;
      const updatedEvent = state.map((event: InitialStateType) => {
        if (event.id === eventid && typeof event.ticketleft === "number") {
          return {
            ...event,
            ticketleft: event.ticketleft - 1,
          };
        }
        return event;
      });

      return updatedEvent;
    },
  },
});

export const { addEvent, bookTicket } = eventsSlice.actions;

export const getAllEvents = (state: RootState) => state.events;

export default eventsSlice.reducer;
