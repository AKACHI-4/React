import React from 'react'
import PersonList from './PersonList'

function NameList() {

    const names = ['bruce', 'Clark', 'Diana']
    const persons = [
        { 
            id: 1, 
            name: 'Bruce', 
            age: 30, 
            skill: 'React'
        }, 
        { 
            id: 2, 
            name: 'Clark', 
            age: 25, 
            skill: 'Vue'
        }, 
        { 
            id: 3, 
            name: 'Diana', 
            age: 28, 
            skill: 'Angular'
        }
    ]
    
    const nameList = names.map(
        (name, index) => <h2 key={index}> {index} - {name} </h2>
    )

    // Problem of using key as index
    // https://codepen.io/gopinav/pen/gQpepq

    // const nameList = names.map(name => <h2>{name}</h2>)
    // const personList = persons.map(person => (
    //     <PersonList key={person.id} person={person} />
    // ))
    
    // Key props are not accessible in child Components it is not to the render any data as well 

    return <div>{nameList}</div>
    // return <div>{personList}</div>

    // return (
    //     <div>
    //         {/* Whenever we have to use JS code inside the JSX so we have to use curly braces */}
    //         { names.map(name => <h2>{name}</h2>) }
    //     </div>
    // )
}

// When to use index as key ?
/*
    1. Items in list do not have a unique id 
    2. list is a static list and will not change
    3. list will never be recordered or filtered ( like sorting and filtering )
*/

// Why Problem occurs in the above example ? 
/*
    1. It happens because of the way React updates the DOM
    2. It believes on preserving or utilizing the DOM nodes as much as possible
    3. In that way it becomes efficient in updating the DOM and never assigned a hard coded index or key to list item 
*/

export default NameList