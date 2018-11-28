import { SimpleSchema } from 'meteor/aldeed:simple-schema';


export const schema = new SimpleSchema({
    dateRange: { type: Object },
    "dateRange.start": { type: Date },
    "dateRange.end": { type: Date },
    timeRange: { type: Object },
    "timeRange.start": { type: Date },
    "timeRange.end": { type: Date },
    repeater: { optional: true, type: Array },
    'repeater.$': { type: String },
})
