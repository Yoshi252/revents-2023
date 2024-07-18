import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useAppSelector } from "../../../app/store/store";


export default function EventDashboard() {
  const {events} = useAppSelector(state => state.events)

  return (
    // Semantic UI uses 16 columns
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events}/> 
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Filters</h2>
      </Grid.Column>
    </Grid>
  )
}
