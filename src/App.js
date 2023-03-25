import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Login from './pages/Login'
import AddTip from './pages/tips/AddTip'
import TipList from './pages/tips/TipList'
import AddEvent from './pages/events/AddEvent'
import EventList from './pages/events/EventList'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<AddTip />} />
            <Route path='/tiplist' element={<TipList />} />
            <Route path='/addevent' element={<AddEvent />} />
            <Route path='/eventlist' element={<EventList />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App