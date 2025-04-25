import { Document, Schema, model, Types } from "mongoose";

export interface IFavorite extends Document {
  _id: Types.ObjectId;
  userId: Types.ObjectId;       //refer to user_id
  componentId: Types.ObjectId;  //refer to component_id
  favoritedAt: Date;
}

const favoriteSchema = new Schema<IFavorite>({
  _id: {
    type: Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  userId: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  componentId: {
    type: Types.ObjectId,
    ref: "Component",
    required: true,
  },
  favoritedAt: {
    type: Date,
    default: Date.now,
  },
})

const Favorite = model<IFavorite>("Favorite", favoriteSchema);
export default Favorite;
