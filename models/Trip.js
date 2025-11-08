import mongoose from 'mongoose';
const TripSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  from: String,
  to: String,
  startDate: Date,
  endDate: Date,
  notes: String
}, { timestamps: true });
export default mongoose.model('Trip', TripSchema);
