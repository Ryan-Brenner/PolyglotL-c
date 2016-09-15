var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var JobSchema = new Schema({
    title: {type:String, required: true},
    customer: { type: Array, default: []},
    translator: { type: Array, default: []},
    review: { type: Array, default: []},
    requiredProficiency: { type: Array, default: []},
    requiredLanguages: { type: Array, default: [{ from: "English" }, { to: "French" }] },
    potential_translator_IDs: { type: Array, default: []}, /// need a function to auto populate
    location: { type: Array, default: [{ latitude: 37.7749 }, { longitude: -122.4194 }] },
    scheduled: { type: Boolean, default: false },
    appointment: { type: Number, default: Date.now() },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    completed: { type: Boolean, default: false }
});


var Job = mongoose.model('Job', JobSchema);
module.exports = Job;
