# React UI Component Library

This project is a **reusable UI component library** built using **React, TypeScript, Styled Components, and Storybook**.  
It is designed for developers who want **pre-built UI elements** that can be used in different applications.  

---

## 📌 Features
- **Reusable UI Components:** Includes buttons, dropdowns, tables, labels, images, and more.
- **Storybook Integration:** Visualize and test components in an isolated environment.
- **Styled Components:** Components are styled dynamically based on props.
- **TypeScript Support:** Provides strong typing for better maintainability.
- **Jest + React Testing Library:** Ensures components work as expected.
- **Dockerized Deployment:** Runs in a Docker container for easy setup.
- **CI/CD Ready:** Can be extended for automated testing and deployments.

README.md - React UI Component Library
md
Copy
Edit
# React UI Component Library

This project is a **React-based UI component library** built using **TypeScript, Styled Components, and Storybook**. It provides reusable UI elements such as buttons, dropdowns, tables, images, and more.

---

## 📌 Dependencies

Before starting, ensure you have **Node.js** and **npm** installed.  

This project uses the following dependencies:

### **Main Dependencies**
- `react` - Core library for building UI components.
- `react-dom` - Required for rendering components.
- `styled-components` - CSS-in-JS library for component styling.
- `@types/react` - TypeScript type definitions for React.

### **Storybook (Component Testing)**
- `@storybook/react` - Storybook framework for React.
- `@storybook/addon-essentials` - Useful Storybook addons.

### **Testing (Jest & React Testing Library)**
- `jest` - JavaScript testing framework.
- `@testing-library/react` - Utility for testing React components.

### **Docker (For Deployment)**
- `docker` - Used to containerize and run the application.

---

## 🛠 Installation

### **1️⃣ Clone the Repository**
```sh
git clone <repository-url>
cd coding_assignment_12
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
npm install --save-dev @types/jest @types/styled-components
npm install styled-components
npm install storybook
This will install all necessary packages.

🚀 Running the Project1️⃣ Start the React App
sh
Copy
Edit
npm start
Runs the app in development mode. Open http://localhost:3000.

2️⃣ Run Storybook
sh
Copy
Edit
npm run storybook
Opens Storybook at http://localhost:6006 for testing UI components.

3️⃣ Run Tests
sh
Copy
Edit
npm test
Runs all unit tests using Jest.

🏗️ Project Structure
plaintext
Copy
Edit
📂 src
 ┣ 📂 components
 ┃ ┣ 📂 Button
 ┃ ┃ ┣ 📜 Button.tsx
 ┃ ┃ ┣ 📜 Button.styles.ts
 ┃ ┃ ┣ 📜 Button.types.ts
 ┃ ┃ ┣ 📜 Button.stories.tsx
 ┃ ┃ ┗ 📜 Button.tests.tsx
 ┃ ┣ 📂 Dropdown
 ┃ ┣ 📂 Table
 ┃ ┣ 📂 RadioButton
 ┃ ┣ 📂 HeroImage
 ┃ ┗ 📂 Img
 ┣ 📂 stories
 ┣ 📜 App.tsx
 ┣ 📜 index.tsx
 ┗ 📜 README.md
Each component folder contains:

Component.tsx - The functional React component.
Component.styles.ts - Styling with Styled Components.
Component.types.ts - Type definitions for props.
Component.stories.tsx - Storybook visualization file.
Component.tests.tsx - Unit tests using Jest.
🧩 Available Components
✅ Button
Supports primary, secondary, disabled states.
Storybook allows modifying background color dynamically.
✅ Dropdown
Select dropdown with multiple options.
Can be disabled.
✅ Table
Supports adding/removing rows dynamically.
Can be disabled.
✅ Radio Button
Allows users to select one option from a set.
✅ Img
Displays an image with alt text.
✅ Hero Image
A large banner image with optional overlay and text.
✅ Card
A styled container for grouping content.
