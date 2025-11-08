import mongoose from 'mongoose';
const JournalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  content: String,
  entryDate: Date
}, { timestamps: true });
export default mongoose.model('Journal', JournalSchema);
