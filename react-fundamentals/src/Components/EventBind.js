import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hare Krishna",
    };

    // #W3
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler () {
  //     this.setState( {
  //         message: 'Krishna Krishna'
  //     })
  // } // error coz this is of clickHandler's scope but we need this of lexical scope so possible solution might be that we have to use arrow function for clickHandler method

  // clickHandler = () => {
  //     this.setState( {
  //         message: 'Krishna Krishna'
  //     })
  // }

  // Other possible ways of this problem are to bind eventHandler and there are no. of ways through which we can do so which we can get in diff-diff blogs, articles and so on

  //  Some of them are here

  // Note : Here render method is this.clickHandler function

  // Way-1 : Use `bind()` keyword and bind the Handler in the render method
  // clickHandler() {
  //     this.setState( {
  //         message: 'Krishna Krishna'
  //     })
  //     console.log(this);
  // }
  // Limitation : Every update to the state cost the component to re-render this intern generate a brand new eventHandler on every render, Which could be troublesome in Large Applications and components that contain nested children component

  // Way-2 : Use Arrow Function in the render method
  // clickHandler () {
  //     this.setState( {
  //         message: 'Krishna Krishna'
  //     })
  // }
  // Limitation : Performance Implication in some scenario

  // Way-3 : Used in most of the cases, Also in the official React documentation -- This approach deals with the binding the eventHandler in the constructor as opposed to binding in the render method
  // clickHandler () {
  //     this.setState( {
  //         message: 'Krishna Krishna'
  //     })
  // } // + #W3
  // Merits : As binding happens once in the constructor, This is the better compare to binding in render Method

  // Way-4 : Use Arrow function as a class property
  // clickHandler = () => {
  //     this.setState( {
  //         message: 'Krishna Krishna'
  //     })
  // }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* Way-1 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Way-2 */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* Way-3 + Way-4 */}
        {/* <button onClick={this.clickHandler}>Click</button>  */}
        {/* React docs suggets either Way-3 or Way-4
        {/* Way-4 is still in experimental feature */}
        {/* So Way-3 is best option Right now */}
      </div>
    );
  }
}

export default EventBind;

/*
  this keyword - JavaScript

  - In JavaScript, the value of `this` is determined by how a function is called. 
  
  - Global context: When this is used outside of any function or object, it refers to the global object, which is usually the window object in a web browser or the global scope in Node.js.

  - Function context: When this is used within a regular function (not an arrow function), its value depends on how the function is called:
    - If the function is called as a method of an object (object.method()), this refers to the object itself.
    - If the function is called as a standalone function (myFunction()), this refers to the global object (in non-strict mode) or undefined (in strict mode).

  - Arrow function context: Arrow functions have a lexical this binding, which means that this is not determined by how the function is called but rather by the surrounding context in which the arrow function is defined. The value of this inside an arrow function refers to the this value of the enclosing scope.


*/
