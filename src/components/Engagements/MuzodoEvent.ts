export interface MuzodoEvent {
  GUID: string;
  Name: string;
  Confirmed: 0 | 1;
  Cancelled: 0 | 1;
  EventType: "PUBLIC" | "PRIVATE" | "REHEARSAL" | "MEETING";
  Address: string;
  MapUrl: string;
  FormattedDate: string;
  FormattedArriveTime: string;
  FormattedStartTime: string;
  FormattedEndTime: string;
  CreateDateTime: Date;
}
