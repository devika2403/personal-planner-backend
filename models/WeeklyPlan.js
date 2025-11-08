import mongoose from 'mongoose';
const WeeklyPlanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  weekStart: Date,
  details: String
}, { timestamps: true });
export default mongoose.model('WeeklyPlan', WeeklyPlanSchema);
