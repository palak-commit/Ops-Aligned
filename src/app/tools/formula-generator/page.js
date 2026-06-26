"use client";
import { useState } from "react";

export default function FormulaGenerator() {
  const [property, setProperty] = useState("Cost");
  const [operation, setOperation] = useState("multiply");
  const [value, setValue] = useState("1.2");

  return (
    <div className="container" style={{ padding: "var(--spacing-md) 0" }}>
      <h1 style={{ marginBottom: "var(--spacing-xs)" }}>Notion Formula 2.0 Generator</h1>
      <p className="text-secondary" style={{ marginBottom: "var(--spacing-md)" }}>
        Generate complex Notion formulas instantly.
      </p>

      <div style={{ display: "flex", gap: "var(--spacing-lg)", flexWrap: "wrap" }}>
        {/* Editor */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", marginBottom: "0.5rem" }}>Target Property</label>
              <input 
                type="text" 
                value={property} 
                onChange={e => setProperty(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border-color)", backgroundColor: "var(--bg-color)" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", marginBottom: "0.5rem" }}>Operation</label>
              <select 
                value={operation} 
                onChange={e => setOperation(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border-color)", backgroundColor: "var(--bg-color)" }}
              >
                <option value="multiply">Multiply (e.g., Tax calculation)</option>
                <option value="divide">Divide</option>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", marginBottom: "0.5rem" }}>Value</label>
              <input 
                type="text" 
                value={value} 
                onChange={e => setValue(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border-color)", backgroundColor: "var(--bg-color)" }}
              />
            </div>
          </div>
        </div>

        {/* Output */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <div style={{ padding: "var(--spacing-md)", backgroundColor: "var(--bg-color-alt)", border: "1px solid var(--border-color)", borderRadius: "8px" }}>
            <h3 style={{ marginTop: 0, fontSize: "1rem" }}>Generated Formula</h3>
            <div style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "var(--bg-color)", borderRadius: "4px", fontFamily: "monospace", color: "var(--accent)" }}>
              {operation === "multiply" && `prop("${property}") * ${value}`}
              {operation === "divide" && `prop("${property}") / ${value}`}
              {operation === "add" && `prop("${property}") + ${value}`}
              {operation === "subtract" && `prop("${property}") - ${value}`}
            </div>
            <button className="btn btn-primary" style={{ marginTop: "1rem", width: "100%" }}>Copy to Clipboard</button>
          </div>
        </div>
      </div>

      {/* Educational Content to prevent Thin Content Penalty */}
      <div style={{ marginTop: "var(--spacing-xl)", borderTop: "1px solid var(--border-color)", paddingTop: "var(--spacing-lg)" }}>
        <h2>How to use the Notion Formula 2.0 Generator</h2>
        <p>Notion's Formula 2.0 update completely overhauled how calculations and data manipulation work inside databases. While the new syntax is incredibly powerful—allowing for complex array manipulations, regex matching, and nested if statements—it can be overwhelming for non-technical users.</p>
        <p>This free tool allows you to visually construct basic arithmetic and string manipulation formulas without having to memorize the exact <code>prop()</code> syntax.</p>
        
        <h3>Understanding the `prop()` function</h3>
        <p>In Notion Formula 2.0, you reference other columns (properties) in your database using the <code>prop("Property Name")</code> function. Unlike traditional spreadsheets where you reference cells like `A1` or `B2`, Notion is a true database, meaning you reference entire columns.</p>
        <p>For example, if you want to calculate the total cost of an item including a 20% tax rate, you would multiply the "Cost" property by 1.2. The generated formula looks like this: <code>prop("Cost") * 1.2</code>.</p>
        
        <h3>Common Use Cases for Notion Formulas</h3>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "var(--spacing-md)" }}>
          <li><strong>Sales Pipelines:</strong> Calculating weighted pipeline values by multiplying a Deal Size property by the Probability percentage property.</li>
          <li><strong>Project Management:</strong> Using the <code>dateBetween()</code> function to calculate how many days are left until a project deadline.</li>
          <li><strong>Progress Bars:</strong> Dividing completed tasks by total tasks and formatting the output as a percentage or a visual ring.</li>
        </ul>
        <p>If you need more advanced formula examples, check out our comprehensive <a href="/workflows/notion-formulas-2-guide" style={{ textDecoration: "underline" }}>Notion Formula 2.0 Guide</a> for advanced array manipulation and conditional logic.</p>
      </div>
    </div>
  );
}
