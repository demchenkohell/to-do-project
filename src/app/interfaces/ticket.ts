export interface ITicket {
  title: string;
  deadline: Date;
  isReady: boolean;
  isInProgress: boolean;
  tags: string[];
  notes: string;
}
