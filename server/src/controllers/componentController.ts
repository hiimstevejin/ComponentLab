import { Request, Response } from "express";
import Component, {
  PropExample,
  CodeFile,
} from "../models/Component.js";

interface CreateComponentBody {
  name: string;
  description: string;
  propsExample: PropExample;
  files: CodeFile[];
  createdBy: string;
}

export default async function createComponent(
  req: Request<{}, {}, CreateComponentBody>,
  res: Response
) {
  try {
    const { name, description, propsExample, files, createdBy } = req.body;

    if (!name || !description || !propsExample || !files) {
      return res
        .status(400)
        .json({ error: "name, description, propsExample are required" });
    }

    const component = new Component({
      name,
      description,
      propsExample,
      files,
      createdBy,
    });
    await component.save();

    res
      .status(201)
      .json({ message: "Component created successfully", component });
  } catch (error) {
    console.log("Error creating component:", error);
    res.status(500).json({ error: "Failed to create component" });
  }
}
