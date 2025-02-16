import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
}

const UserSchema = new Schema({
  name: { type: String, required: true }
});

export default model<IUser>('User', UserSchema);
