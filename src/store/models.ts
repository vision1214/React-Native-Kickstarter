export type Restaurant = {
  id: number;
  uid: string;
  name: string;
  type: string;
  description: string;
  review: string;
  logo: string;
  phone_number: string;
  address: string;
  hours: OpeningHours;
};

export interface DaySchedule {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface OpeningHours {
  [monday: string]: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}
