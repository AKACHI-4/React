import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Adarsh",
    };
    console.log("LifeCycleA constructor");
  }

  /* 
    - When the state of the component depends on Changes in props over time 
    - Called every time a component is re-rendered
    - set the state
    - Do not cause side effects 
  */
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  /*
    - Dicatates if the component should re-render or not
    - Performance optimization
    - Do not cause side effects 
    - Calling the setState method 
  */
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  /*
    - called right before the changes from the virtual DOM are to be reflected in the DOM 
    - Capture some information from the DOM 
    - Method will either return null or return a value 
    - Returned value will be passed as the 3rd parameter to the next method
  */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  /*
    - Called after the render is finished in the re-render cycles 
    - Cause side effects 
  */
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  /* Invoked immediately after a component and all its children components have been rendered to the DOM. Cause Side effects */
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  changeState = () => {
    this.setState({
      name: "weGrow",
    });
  };

  /* 
    - Only required method 
    - Read props and state and return JSX 
    - Do not change state or interact with DOM or make AJAX calls
  */
  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
