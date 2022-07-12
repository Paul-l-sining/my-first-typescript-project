import React, { useState } from 'react';

interface NewReminderProps {
    onAdd: (title: string) => void;
}



function NewReminder({ onAdd }:NewReminderProps): JSX.Element {

    const [title, setTitle] = useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (title === "") return;
        onAdd(title);
        setTitle("");
    }

    // example of implementing input box
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title"></label>
            <input value={title} onChange={e => setTitle(e.target.value)} id="title" type="text" className="form-control" />
            <button type="submit" className="btn btn-primary rounded-pill my-3">Add Reminder</button>
        </form>
    );
}

export default NewReminder;