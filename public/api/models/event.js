
import mongoose, { Schema, Types } from 'mongoose';

const EventSchema = new Schema({
  value: String
});

//const Event = mongoose.model('Event', EventSchema);

function getList(userId, callback) {
  Event.find({userId: userId}, callback);
}

function getEvent(eventId, callback) {
  Event.findOne({_id: Types.ObjectId(eventId)}, callback);
}

function save(value, callback) {
  Event.count({value: value, (err, number) => {
    if (err) {
      return callback(err);
    }
    let event = new Event({value: value});
    event.save(callback);
  });
}

function update(eventId, attendee, callback) {
  Event.findOneAndUpdate({_id: Types.ObjectId(eventId)}, {$push: {attendees: attendee}}, {new: true}, callback);
}

function updateAttendee(eventId, attendee, callback) {
  Event.findOneAndUpdate({_id: Types.ObjectId(eventId), "attendees._id": Types.ObjectId(attendee.attendeeId)}, {$set: {"attendees.$.attendeeName": attendee.attendeeName, "attendees.$.personalizedDateSelection": attendee.personalizedDateSelection}}, {new: true}, callback);
}

function remove(userId, accessKeyId, secretAccessKey, callback) {
  Event.remove({userId: userId, accessKeyId: accessKeyId, secretAccessKey: secretAccessKey}, callback);
}

module.exports = {
  getList: getList,
  getEvent: getEvent,
  update: update,
  save: save,
  updateAttendee: updateAttendee,
  remove: remove
};
