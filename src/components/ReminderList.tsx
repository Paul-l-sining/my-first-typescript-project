import React from 'react';
import Reminder from '../modules/reminder';

interface ReminderListProps{
    items: Reminder[]; 
    onDelete: (id: number)=>void;
}


function ReminderList({ items, onDelete }: ReminderListProps) {
    return (
        <div>
            <ul className='list-group'>
                {items.map(item => <li className='list-group-item' key={item.id}>
                    {item.title}
                    <button onClick={() => onDelete(item.id)} className='btn btn-outline-danger mx-2 rounded-pill'>Delete</button>
                </li>)}
            </ul>
        </div>
    );
}

export default ReminderList;