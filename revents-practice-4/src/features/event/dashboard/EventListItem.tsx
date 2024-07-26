import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../app/types/Event";

type Props = {
    event: AppEvent
    selectedEvent: (event: AppEvent) => void;
}

export default function EventListItem({event, selectedEvent}: Props) { 
  return (
    <SegmentGroup>
        <Segment>
            <ItemGroup>
                <Item>
                    <Item.Image circular size="small" src={event.hostPhotoURL} alt="user"/>
                    <Item.Content>
                        <Item.Header>{event.title}</Item.Header>
                        <Item.Description>
                            Hosted By {event.hostedBy}
                        </Item.Description>
                    </Item.Content>
                </Item>
            </ItemGroup>
        </Segment>
        <Segment secondary>
            <List horizontal>
                {event.attendees.map(attendee => (
                    <EventListAttendee attendee={attendee}/>
                ))} 
            </List>
        </Segment>
        <Segment>
            <span>
                <Icon name="clock"/> {event.date} <br/>
                <Icon name="map"/> {event.venue}
            </span>
        </Segment>
        <Segment clearingS>
            {event.description}
            <Button onClick={() => selectedEvent(event)} color="teal" content="View" />
        </Segment>
    </SegmentGroup>
  )
}
