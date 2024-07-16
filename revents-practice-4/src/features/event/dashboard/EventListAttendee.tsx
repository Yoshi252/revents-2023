import { List, Item } from "semantic-ui-react";
import { Attendee } from "../../../app/types/Event";

type Props = {
    attendee: Attendee
}

export default function EventListAttendee({attendee}: Props) { // eslint-disable-line
  return (
    <List.Item>
        <Item.Image circular size="mini"src={attendee.photoURL}/>
    </List.Item>
  )
}
