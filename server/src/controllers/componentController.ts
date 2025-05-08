import { Request, Response } from "express";
import Component, { PropExample, CodeFile } from "../models/Component.js";

interface CreateComponentBody {
  name: string;
  description: string;
  propsExample: PropExample;
  files: CodeFile[];
  createdBy: string;
}

// POST request to upload a new component
export async function createComponent(
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

// GET request that returns one component by Id
export async function getComponentById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const component = await Component.findById(id);

    if (!component) {
      return res.status(404).json({ error: "Component not found" });
    }

    res.status(200).json(component);
  } catch (error) {
    console.log("Error fetching component by ID", error);
    res.status(500).json({ error: "Failed to fetch component" });
  }
}

// GET request that returns all components by page and limit
export async function getAllComponents(req: Request, res: Response) {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 16;
    const skip = (page - 1) * limit;

    const components = await Component.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Component.countDocuments();

    res.status(200).json({
      components,
      page,
      totalPages: Math.ceil(total / limit),
      total,
    });
  } catch (error) {}
}
