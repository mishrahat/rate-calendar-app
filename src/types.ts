export type Calender = {
  id: string;
  date: string;
  available: number;
  status: boolean;
  booked: number;
};

export type RateCalender = {
  id: string;
  date: string;
  rate: number;
  min_length_of_stay: number;
  reservation_deadline: number;
};

export type RatePlan = {
  id: number;
  name: string;
  calendar: RateCalender[];
};

export type Data = {
  id: string;
  name: string;
  occupancy: number;
  inventory_calendar: Calender[];
  rate_plans: RatePlan[];
};

export type Rooms = {
  code: string;
  data: Data[];
  message: string;
};
