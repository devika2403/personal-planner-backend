import mongoose from 'mongoose';
const GoalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  targetDate: Date,
  completed: { type: Boolean, default: false }
}, { timestamps: true });
export default mongoose.model('Goal', GoalSchema);
