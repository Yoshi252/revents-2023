import { ChangeEvent, useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { AppEvent } from "../../../app/types/Event";
import { Link } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import { createId } from "@paralleldrive/cuid2";

type Props = {
    selectedEvents: AppEvent | null;
    setFormOpen: (value: boolean) => void;
}

export default function EventForm({selectedEvents}: Props) {
  const initalValues = selectedEvents ?? {
    title: '',
    city: '',
    venue: '',
    description: '',
    category: '',
    date: '',
  }

  const [values, setValues] = useState(initalValues);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target;
    setValues({...values, [name]: value})
  }

  function onSubmit(data: FieldValues) {
    console.log(data);
    id = id ?? createId();
    event  
        ? dispatch(updateEvent({...event, ...values}))
        : dispatch(createEvent({...values, id, hostedBy: 'bob', attendees: [], hostPhotoURL: ''}));
        navigate(`/events/${id}`);
    }
    

  return (
    <Segment clearing>
        <Header content="Create Event" />

        <Form>
            <Form.Field>
                <input 
                    type="text" 
                    placeholder="Event Title"
                    name='title'
                    value={values.title}
                    onChange={e => handleInputChange(e)}
                    />
            </Form.Field>
            <Form.Field>
                <input 
                    type="text" 
                    placeholder="Category"
                    name='category'
                    value={values.category}
                    onChange={e => handleInputChange(e)}
                    />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="City"
                name='city'
                value={values.city}
                onChange={e => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="Venue"
                name='venue'
                value={values.venue}
                onChange={e => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="City"
                name='city'
                value={values.city}
                onChange={e => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input type="date" placeholder="Date"
                name='date'
                value={values.date}
                onChange={e => handleInputChange(e)}
                />
            </Form.Field>
        

            <Button type="submit" floated="right" positive content="Submit"/>
            <Button as={Link} to='/events' type="button" floated="right" content="Cancel"/>
        </Form>
    </Segment>
    
  )
}
