import { Document, Schema, model, Types } from "mongoose";

interface CodeFile {
  name: string;       //  e.g., "FancyButton.jsx "
  path: string;       //  e.g., "src/components"
  language: string;   //  e.g., "jsx", "css"
  content: string;    //  full source code 
}

interface PropExample {
  label: string;      //  e.g., "Click Me" 
}

export interface IComponent extends Document {
  _id: Types.ObjectId;
  name: string;
  view: number;
  description: string;
  files: CodeFile[];
  propsExample: PropExample;
  createdBy: Types.ObjectId;  // refer to User _id
  createdAt: Date;
  updatedAt: Date;
}

const componentSchema = new Schema<IComponent>(
  {
    _id: {
      type: Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    name: { type: String, required: true },
    view: {type:Number, default: 0},
    description: { type: String },
    files: [
      {
        name: { type: String, required: true },
        path: { type: String, required: true },
        language: { type: String, required: true },
        content: { type: String, required: true },
      }
    ],
    propsExample: {
      label: { type: String, required: true },
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Component = model<IComponent>("Component", componentSchema);
export default Component;
