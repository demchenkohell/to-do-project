import {ITicket} from "../interfaces/ticket";

export const ticketsMock: ITicket[] = [
  {
    title: 'New Ticket title',
    deadline: new Date(),
    isReady: false,
    isInProgress: false,
    tags: [
      'first tag',
      'second tag',
    ],
    notes: 'some notes'
  }
]
