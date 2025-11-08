import mongoose from 'mongoose';
const DailyTaskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  description: String,
  date: Date,
  done: { type: Boolean, default: false }
}, { timestamps: true });
export default mongoose.model('DailyTask', DailyTaskSchema);
