# Overview

This documentation provides an overview of the frontend architecture and components used in my personal portfolio web app. The app is built using modern web technologies including Tailwind CSS, React, TypeScript, Framer Motion, Tremor, React Router, and Zustand for state management.

## Technologies Used

### 1. React

JavaScript library for building user interfaces. React is the core library used for building the UI components of the application.

### 2. TypeScript

A superset of JavaScript that adds static types. TypeScript is used to ensure type safety and improve code quality.

### 3. Tailwind CSS

A utility-first CSS framework for rapid UI development. Tailwind CSS is used for styling the application with a focus on utility classes to achieve a responsive design.

### 4. Framer Motion

A library for creating animations and interactions. Framer Motion is used to add animations and transitions to various components for a more dynamic user experience.

### 5. Tremor

A component library for building dashboards and data visualization. Tremor is used to display charts and graphs showcasing my skills and project statistics.

### 6. React Router

A library for routing in React applications. React Router is used to handle navigation between different pages of the portfolio.

### 7. Zustand

A small, fast state-management library. Zustand is used to manage the global state of the application.

## Project Structure

```
src/
├── assets/          # Static assets like images and fonts
├── components/      # Reusable React components
|   ├── landing/     # Components for the landing page
│   ├── navigator/   # Header and Footer
│   ├── projects/    # Components for the page projects
├── data/            # Static data
├── pages/           # Pages that compounds the app
├── store/           # Zustand state management files
├── routes/          # React Router pages
├── App.tsx          # Main App component
├── index.tsx        # Entry point of the application
└── utils/           # Reusable components

```

## Conclusion

This documentation provides an overview of the frontend architecture and key components used in my personal portfolio web app. By leveraging modern web technologies like React, TypeScript, Tailwind CSS, Framer Motion, Tremor, React Router, and Zustand, this app is designed to be responsive, dynamic, and maintainable. If you have any questions or need further assistance, feel free to reach out.
