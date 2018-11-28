import React from 'react';
import connectField from 'uniforms/connectField';
import { TimePicker } from 'antd';
import moment from 'moment';

const startAndEndTime = (time, value, onChange) => {
    value['start'] = new Date(time);
    onChange(value);
}
const checkStartAndEndTime = (time, value, onChange) => {
    value['end'] = new Date(time)
    onChange(value);
}
const disableHours = (value) => {
    if(value['start']){
    let timeLimit = value['start'].getHours();
    return Array.apply(null, { length: timeLimit }).map(Number.call, Number)
    }
    
}

const TimeRange = ({ onChange, value }) => {
    console.log('inside time range component',value['start'])
    return (<section className="time_range">
        <label>Time</label>
        <TimePicker onChange={start => startAndEndTime(start, value, onChange)} />
        <TimePicker onChange={stop => checkStartAndEndTime(stop, value, onChange)} disabledHours={() => disableHours(value)} />
    </section>)
};
export default connectField(TimeRange);
