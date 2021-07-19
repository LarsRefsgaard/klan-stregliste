export type User = {
  id: string;
  name: string;
  'scout-name': string;
};

export type Event = {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
};

export type Liste = {
  id: string;
  beer: number;
  cider: number;
  eventID: Event;
  userID: User;
};
