const mongoose = require('mongoose');

const { Schema } = mongoose;

// * Title - Text
// * Description - Text
// * Comments - Text
// * Ratings - scale of 1 to 10
// * Image -Text - URL
// * Start Date - DateTime
// * End Date -DateTime
// * Latitude - Number
// * Longitude - Number
// * Created At - DateTime
// * Updated At - DateTime

// const requiredNumber = {
//   type: Number,
//   required: true,
// };

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  comments: String,
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 0,
  },
  Image: String,
  // location: {
  //   type: {
  //     type: String, // Don't do `{ location: { type: String } }`
  //     enum: ['Point'], // 'location.type' must be 'Point'
  //     required: true,
  //   },
  //   coordinates: {
  //     type: [Number],
  //     required: true,
  //   },
  // },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  visitDate: {
    required: true,
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
