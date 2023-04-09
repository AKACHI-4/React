import React from 'react'

function Columns() {

    const items = [
      'Hare',
      'Krishna'
    ]

  return (
    // <React.Fragment>
    //   {
    //     items.map( item => (
    //       <React.Fragment key={item.id}>
    //         <h1>Title</h1>
    //         <p>{item.title}</p>
    //       </React.Fragment>
    //     ))
    //   }
    //   <td>Name</td>
    //   <td>Adarsh</td>
    // </React.Fragment>
    <>
      <td>Name</td>
      <td>Adarsh</td>
    </>
    // With this shorthand technique one Limitation is that we can not use key attribute
  )
}

export default Columns
