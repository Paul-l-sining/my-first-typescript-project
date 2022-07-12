import React from 'react';
import Reminder from '../modules/reminder';

// example of creating rsf(react stateless function)
// decorate the props
interface ReminderListProps{
    items: Reminder[]; 
    onDelete: (id: number)=>void;
}


// example of implementing a button
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