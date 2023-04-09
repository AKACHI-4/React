# React Fundamentals

[React](https://react.dev) is a JavaScript library for building user interfaces. It was created by Facebook and is widely used by developers to build single-page applications, mobile applications, and more.

## Components

React is based on the idea of building reusable components. Components are the building blocks of React applications, and they can be thought of as custom HTML tags. Each component can have its own state, which determines how it should be rendered, and its own properties, which can be used to customize the component.

## JSX

React uses a syntax called JSX to define components. JSX is a JavaScript extension that allows you to write HTML-like code in your JavaScript files. JSX code is then transpiled into JavaScript code that can be interpreted by browsers.

### Lifecycle Methods

React components have a number of lifecycle methods that can be used to control how they behave. These methods are called in a specific order during the component's lifecycle, and they can be used to initialize state, update state, and handle events.

## State and Props

State and props are two important concepts in React. State is used to keep track of the current state of a component, while props are used to pass data from one component to another.

## Refs
Refs are a way to access DOM nodes or React elements created in the render method. They can be used to interact with the actual DOM or to pass values between components. Refs can be created using the createRef method or the useRef hook.

## Memo

Memoization is a technique used to optimize performance by caching the results of expensive function calls. React provides a memo higher-order component that can be used to memoize functional components, which can improve the performance of your application.

## Event Handling
React uses a synthetic event system that normalizes browser-specific event handling. You can attach event handlers to elements using the 'onxyz' props, where 'xyz' is the name of the event.

## Conditional Rendering
Conditional rendering allows you to show or hide elements based on a condition. You can use conditional rendering in your component's render method using standard JavaScript if statements, ternary operators, or logical operators.
