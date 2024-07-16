import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";
import EventForm from "../form/EventForm";
import { useState } from "react";
import { AppEvent } from "../../../app/types/Event";

type Props = {
  formOpen: boolean,
  setFormOpen: (value: boolean) => void
}

export default function EventDashboard({formOpen, setFormOpen}: Props) {

  const [selectedEvents, setSelectedEvents] = useState<AppEvent | null>(null);

  function handleSelectedEvents(event: AppEvent) {
    setSelectedEvents(event);
    setFormOpen(true)
  }

  return (
    <Grid>
        <Grid.Column width={10}>
            <EventList 
              selectedEvent={handleSelectedEvents} 
              events={sampleData}/>
        </Grid.Column>
        <Grid.Column width={6}>
          {
            formOpen &&
            <EventForm 
              selectedEvents={selectedEvents} 
              setFormOpen={setFormOpen}/>
          }
        </Grid.Column>
    </Grid>
  )
}
