import { Schema, model, Document, Types } from 'mongoose';



export interface IQuestion extends Document {
  question: string;
  user_id: Types.ObjectId;
  options: IOption[];
}
interface IOption extends Document {
    option_name: string;
    votes: { user_id: Types.ObjectId; created_at: Date }[];
  }

const OptionSchema = new Schema({
  option_name: { type: String, required: true },
  votes: [{
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    created_at: { type: Date, default: Date.now }
  }]
});

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  options: [OptionSchema]
});

export default model<IQuestion>('Question', QuestionSchema);
