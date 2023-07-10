# React Fundamentals

### _[React](https://react.dev) is a JavaScript library for building user interfaces, Not a Framework. It was created by Facebook and is widely used by developers to build single-page applications, mobile applications, and more._

## Components

- React is based on the idea of building reusable components. Components are the building blocks of React applications, and they can be thought of as custom HTML tags.
- Each component can have its own state, which determines how it should be rendered, and its own properties, which can be used to customize the component.

## JSX

- React uses a syntax called JSX to define components. JSX is a JavaScript extension that allows you to write HTML-like code in your JavaScript files.
- JSX code is then transpiled into JavaScript code that can be interpreted by browsers.

## Lifecycle Methods

- React components have a number of lifecycle methods that can be used to control how they behave.
- These methods are called in a specific order during the component's lifecycle, and they can be used to initialize state, update state, and handle events.

- ### Unmounting Phase Method

  - **`componentWillUnmount()`**
    - Method is invoked immediately before a component is unmounted and destroyed.
    - Cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers
    - Don't call the setState method

- ### Error Handling Phase Methods

  - **`static getDerivedStateFromError(error)`**
  - **`componentWillCatch(error, info)`**

  </br>

  > When there is an error during rendering, in a Lifecycle method, or in the constructor of any child component.

## State and Props

- State and props are two important concepts in React.
- State is used to keep track of the current state of a component, while props are used to pass data from one component to another.

## Refs

- Refs makes it possible to access DOM nodes directly in React.

- Refs are a way to access DOM nodes or React elements created in the render method. They can be used to interact with the actual DOM or to pass values between components. Refs can be created using the createRef method or the useRef hook.

- **Use-case :** Focusing a text input

## Memo

- Memoization is a technique used to optimize performance by caching the results of expensive function calls.
- React provides a `memo` higher-order component that can be used to memoize functional components, which can improve the performance of your application.

## Event Handling

- React uses a synthetic event system that normalizes browser-specific event handling.
- You can attach event handlers to elements using the 'onxyz' props, where 'xyz' is the name of the event.

## Conditional Rendering

- Conditional rendering allows you to show or hide elements based on a condition.
- You can use conditional rendering in your component's render method using standard JavaScript if statements, ternary operators, or logical operators.

## Pure Components

- Pure components are components that only render when their props or state change. They are useful for improving performance by reducing the number of unnecessary renders.

- A pure component implements shouldComponentUpdate with a shallow prop and state comparison.

  ```markdown
  SC of prevState with currState
                                  ==== Difference? ====> Re-render
  SC of prevProps with currProps
  ```

| Regular Component                                                                                          | Pure Component                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| A Regular Component doesn't implement the shouldComponentUpdate method. It always returns true by default. | A Pure Component on the other hand implements shouldComponentUpdate with a shallow props and state comaprison |

### Shallow Comparison (SC)

- **Primitive Types**

  - a (SC) b return true if a and b have the same value and are of the same type
  - Ex: string 'Adarsh' (SC) string 'Adarsh' returns true

- **Complex Types**

  - a (SC) b return true if a and b references the exact same object

  ```javaScript
  var a = [1,2,3];
  var b = [1,2,3];
  var c = a;

  var ab_eq = (a === b); // false
  var ac_eq = (a === c); // true
  ```
