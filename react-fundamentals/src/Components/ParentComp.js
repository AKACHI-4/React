// import React, { Component } from 'react'
import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

// class ParentComp extends Component {
class ParentComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'Adarsh'
      }
    }

    componentDidMount() {
      setInterval( ()=> {
          this.setState ({
            name: 'Adarsh'
          })
      }, 2000 )
    }
    

  render() {
    console.log('------------ Parent Component Render ------------')
    return (
      <div>
        Parent Component
        <MemoComp name={ this.state.name } />
        {/* <RegularComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp
