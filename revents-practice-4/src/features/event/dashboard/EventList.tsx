import { AppEvent } from "../../../app/types/Event";
import EventListItem from "./EventListItem";

type Props = {
    selectedEvent: (event: AppEvent) => void
    events: AppEvent[]
}

export default function EventList({events, selectedEvent}: Props) { // eslint-disable-line
  return (
    <>
        {events.map((event: any) => ( // eslint-disable-line
            <EventListItem selectedEvent={selectedEvent} event={event} />
        ))}
        
    </>
  )
}
