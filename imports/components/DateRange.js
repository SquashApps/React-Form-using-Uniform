import React from 'react';
import connectField from 'uniforms/connectField';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const setStartAndStop = (startTimeAndEndTime, value, onChange) => {
    let dates = startTimeAndEndTime.map((data) => new Date(data))
    value['start'] = dates[0];
    value['end'] = dates[1];
    onChange(value)

}
const Range = ({ onChange, value }) => {
    return (<section className="range">
        <label className="dateLabel">Date</label>
        <RangePicker onChange={startTime => setStartAndStop(startTime, value, onChange)} />
    </section>)
};

export default connectField(Range);
