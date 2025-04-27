import { Document, Schema, model, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  avatarUrl: string;
  joinedAt: Date;
}

const userSchema = new Schema<IUser>({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatarUrl: String,
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = model<IUser>("User", userSchema);
export default User;
