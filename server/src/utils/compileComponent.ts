import babel from "@babel/core";

export function compileJSXtoJS(jsxCode: string): string {
  const result = babel.transformSync(jsxCode, {
    presets: ["@babel/preset-react"], 
    sourceType: "module",             
    filename: "Component.jsx",        
    comments: false,                  
    compact: true                     
  });

  if (!result || !result.code) {
    throw new Error("JSX compilation failed");
  }

  return result.code;
}

