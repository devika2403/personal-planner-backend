import mongoose from 'mongoose';
const HabitSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  frequency: String,
  streak: { type: Number, default: 0 }
}, { timestamps: true });
export default mongoose.model('Habit', HabitSchema);
