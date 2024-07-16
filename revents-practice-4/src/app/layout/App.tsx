import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/event/dashboard/EventDashboard'
import './style.css'
import NavBar from './navbar/NavBar'
import { useState } from 'react'
 
function App() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
      
    </>
  )
}

export default App
