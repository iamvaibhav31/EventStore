import { eventCategoryType } from "../../constant/index";
export interface EventCardProps {
  id?: string;
  bannerURL: string;
  name: string;
  category: eventCategoryType;
  description: string;
  organizerImgURL: string;
  organizerName: string;
  organizeAt: string;
  startingDate: Date;
  startingTime: string;
  endingDate: Date;
  endingTime: string;
  ticketleft: number | "SOLD OUT";
  totalticket: number;
}
