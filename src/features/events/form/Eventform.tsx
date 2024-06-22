import { ChangeEvent, useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { AppEvent } from "../../../app/types/event";
import { createId } from "@paralleldrive/cuid2";

type Props = {
    setFormOpen: (value: boolean) => void;
    addEvent: (event: AppEvent) => void;
    selectedEvent: AppEvent | null;
    updateEvent: (event: AppEvent) => void
}

export default function Eventform({setFormOpen, addEvent, selectedEvent, updateEvent}: Props) {
  
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }
  
  const [values, setValues] = useState(initialValues);

  function onSubmit() {
    selectedEvent  
        ? updateEvent({...selectedEvent, ...values}) 
        : addEvent({...values, id: createId(), hostedBy: 'bob', attendees: [], hostPhotoURL: ''});
    setFormOpen(false);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target
    setValues({...values, [name]: value})
    console.log('SetValues:', e.target)
  }

  return (
    <Segment clearing>
        <Header content={selectedEvent ? 'Update Event':'Create Event'} />
        <Form onSubmit={onSubmit}>
            <Form.Field>
                <input 
                    type="text" 
                    placeholder="Event title" 
                    value={values.title}
                    name='title'
                    onChange={e => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                    type="text" 
                    placeholder="Category" 
                    value={values.category}
                    name='Category'
                    onChange={e => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={values.description}
                    name='description'
                    onChange={e => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                    type="text" 
                    placeholder="City" 
                    value={values.city}
                    name='city'
                    onChange={e => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                    type="text" 
                    placeholder="Venue" 
                    value={values.venue}
                    name='venue'
                    onChange={e => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                    type="date" 
                    placeholder="Date" 
                    value={values.date}
                    name='date'
                    onChange={e => handleInputChange(e)}
                />
            </Form.Field>
        
            <Button type="submit" floated='right' positive content='Submit' />
            <Button onClick={() => setFormOpen(false)} type="button" floated='right' positive content='Cancel' />
        </Form>
    </Segment>
  )
}
