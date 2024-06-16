import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import Eventform from "../form/Eventform";
import { sampleData } from "../../../app/api/sampleData";
import { AppEvent } from "../../../app/types/event";
import { useEffect, useState } from "react";

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void;
}

export default function EventDashboard({formOpen, setFormOpen}: Props) {
  const [events, setEvents] = useState<AppEvent[]>([])

  useEffect(() => {
    setEvents(sampleData);
  }, [])

  return (
    // Semantic UI uses 16 columns
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} /> 
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen &&
      <Eventform setFormOpen={setFormOpen}/>}
      </Grid.Column>
    </Grid>
  )
}
