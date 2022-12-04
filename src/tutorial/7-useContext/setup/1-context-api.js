import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const kaldırılmışKişi = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} kaldırılmışKişi={kaldırılmışKişi} />
    </section>
  )
}

const List = ({ people, kaldırılmışKişi }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            kaldırılmışKişi={kaldırılmışKişi}
          />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name, kaldırılmışKişi }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => kaldırılmışKişi(id)}>kaldır</button>
    </div>
  )
}

export default ContextAPI
