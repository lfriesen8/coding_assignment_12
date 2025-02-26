# **Component Library - Coding Assignment 12**

## **Project Overview**

This project is a **React Component Library** built with **Storybook** for UI development. The library contains multiple reusable components, including buttons, labels, tables, dropdowns, radio buttons, images, and more.

The project is containerized using **Docker**, and the application can be accessed on **localhost:8083** after running the container.

---

## **Project Setup**

### **1. Clone the Repository**

To get started, clone this repository to your local machine:

```sh
git clone https://github.com/your-github-username/coding_assignment_12.git
cd coding_assignment_12
```

### **2. Install Dependencies**

Run the following command to install all required dependencies:

```sh
npm install
```

### **3. Run Storybook**

To view the components in isolation using Storybook, use:

```sh
npm run storybook
```

Storybook will start on **localhost:6006** by default.

### **4. Run the React App**

If you want to run the full React app, execute:

```sh
npm start
```

The app will be available on **localhost:3000**.

---

## **Project Structure**

```
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.styles.tsx
│   │   │   ├── Button.types.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.tests.tsx
│   │   │   ├── index.ts
│   │   ├── Label/
│   │   ├── Table/
│   │   ├── Dropdown/
│   │   ├── RadioButton/
│   │   ├── Img/
│   │   ├── HeroImage/
│   │   ├── Card/
│   ├── App.tsx
│   ├── index.tsx
│
├── .storybook/
├── Dockerfile
├── README.md
├── package.json
├── tsconfig.json
```

---

## **Component Features**

Each component follows these guidelines:

1. **Styled Components** are used for styling.
2. **Storybook Controls** allow modifying properties dynamically.
3. **Components have default & disabled states.**
4. **Disabled state changes the color & cursor style.**
5. **Each component has at least 2 tests:**
   - **Visibility test** (checks if the component renders).
   - **Disabled state test** (checks if the background color changes when disabled).

---

## **Testing**

Run unit tests using:

```sh
npm test
```

---

## **Docker Setup**

This project includes a **Dockerfile** for running the production build inside a container.

### **1. Build the Docker Image**

```sh
docker build -t friesen_liam_coding_assignment12 .
```

### **2. Run the Container**

```sh
docker run -d -p 8083:8083 --name friesen_liam_coding_assignment12 friesen_liam_coding_assignment12
```

The application will now be accessible on **localhost:8083**.

### **3. Stop & Remove the Container**

```sh
docker stop friesen_liam_coding_assignment12
```

```sh
docker rm friesen_liam_coding_assignment12
```

### **4. Remove the Docker Image (If Needed)**

```sh
docker rmi friesen_liam_coding_assignment12
```

---

## **Pushing to GitHub**

After making changes, push them to GitHub:

```sh
git add .
git commit -m "Updated components"
git push origin main
```

---

## **Final Notes**

- This project follows **Component-Driven Development (CDD)** principles.
- All components are built, tested, and displayed using **Storybook**.
- The production build is **Dockerized** and runs on **localhost:8083**.

If you encounter any issues, feel free to reach out. 🚀

