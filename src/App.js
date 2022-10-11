// import logo from './logo.svg';
import './App.css';
import {Calendar,dateFnsLocalizer} from "react-big-calendar"
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


const locales={
  "en-US":require("date-fns/locale/en-US")
}

const localizer=dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales 

})

const events=[{
  title:"Exam",
  start:new Date(2022,10,11),
  end:new Date(2022,10,12)
},
{
  title:"Exam",
  start:new Date(2022,10,14),
  end:new Date(2022,10,14)
},
{
  title:"Exam",
  start:new Date(2022,10,18),
  end:new Date(2022,10,18)
}]

function App() {

  const [newEvent,setNewEvent]=useState({title:"",start:"",end:""})
  const [allEvents,setAllEvents]=useState(events)

  function handleAddEvent(){
    setAllEvents([...allEvents,newEvent])
  }

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input type={"text"} style={{width:"20%",marginRight:"10px"}} placeholder={"Add title"}
        value={newEvent.title} onChange={(e)=>setNewEvent({...newEvent,title:e.target.value})}/>
        <DatePicker placeholderText='Start Date' style={{marginLeft:"100px"}} selected={newEvent.start}
        onChange={(start)=>setNewEvent({...newEvent,start})}/>
        <DatePicker placeholderText='End Date' style={{marginRight:"100px"}} selected={newEvent.end}
        onChange={(end)=>setNewEvent({...newEvent,end})}/>
        <button style={{marginTop:"10px"}} onClick={handleAddEvent}>Add Event</button>
      </div>
    <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor={"end"} style={{height:"500px",margin:"50px"}}/>
    </div>
  );
}

export default App;
