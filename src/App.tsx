import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './modules/reminder';
import ReminderService from './services/reminder';
import NewReminder from './components/NewReminder';


function App() {

  // example of using state hook
  const [reminderList, setReminderList] = useState<Reminder[]>([])


  // example of using effect hook
  useEffect(()=>{
      loadReminders();
  }, []) // terminate componentDidUpdate()

  const loadReminders = async() => {
    const response = await ReminderService.getReminders()
    setReminderList(response);
  }

  const handleDelete = (id:number) => {
    setReminderList(reminderList.filter(reminder => reminder.id !== id));    
  }

  const addReminder = async (title: string) => {
    const newReminder = await ReminderService.addReminders(title);
    setReminderList([newReminder, ...reminderList]);
  }

  return (
    <div className="App">
      <NewReminder onAdd={addReminder}/>
      <ReminderList items={reminderList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
