import React from "react";
import { Button } from "./components/Button";  // Import your Button component
import { Header } from "./components/Header";  // Import Header if needed

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Component Library</h1>
      
      {/* Example Button Usage */}
      <Button primary={true} label="Primary Button" />
      <Button primary={false} label="Secondary Button" />
      
      {/* Example Header Usage */}
      <Header title="Welcome to Storybook!" />
    </div>
  );
}

export default App;

