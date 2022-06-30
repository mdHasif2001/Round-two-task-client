import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>

            <div className='flex justify-center align-middle'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div>
            <div>
                <p className='text-2xl text-center text-indigo-700'>You have selected: {format(date, 'PP')}</p>
            </div>
        </div>



    );
};

export default Calender;