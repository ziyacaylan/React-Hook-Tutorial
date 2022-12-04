import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) {
      console.log('formu gönder')
      const person = { id: new Date().getTime().toString(), name, email }
      console.log(person)
      setPeople((people) => {
        return [...people, person]
      })
      setName('')
      setEmail('')
    } else {
      console.log('boş değerler')
    }
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Name :</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Kişi ekle</button>
        </form>
        {people.map((person, index) => {
          const { id, name, email } = person
          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
