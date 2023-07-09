import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true // Button

      }
    }
    

  render() {

    // 4. Short Circuit operator ( most cases )
    // Specific case of ternary opeartor 
    return (
        this.state.isLoggedIn && <div>Hare Krishna</div>
    ) // if Left hand side is true then right side text displayed and if it is false then text will not displayed 

    // 3. Ternary conditional operator ( mostly used )
    // Can be used Inside JSX
    // return (
    //     this.state.isLoggedIn ? (
    //     <div>Hare Krishna</div> 
    //     ) : (
    //     <div>Hare Rama</div>
    //     )
    // )

    // 2. Element Variable approach
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Hare Krishna</div>
    // } else { 
    //     message = <div>Hare Rama</div>
    // }
    // return <div>{message}</div>

    // 1. Using if/else statement
    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>Hare Krishna</div>
    //     )
    // } else {
    //     return ( 
    //         <div>Hare Rama</div>
    //     )
    // }

    // 0. Normal One
    return (
        <div>
            <div>Hare Krishna</div> {/* isLoggedIn - true */}
            <div>Hare Rama</div> {/* isLoggedIn - false */}
        </div>
    )
  }
}

export default UserGreeting


/* Using if/else condition inside jsx is not valid */