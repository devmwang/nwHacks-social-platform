import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerDiv() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={(date: React.SetStateAction<Date>) => setSelectedDate(date)}
            />
        </div>
    );
}
