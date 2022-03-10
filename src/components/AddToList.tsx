import React, { useState } from 'react'
import { IState as Props } from "../App"

interface IProps {
  people: Props["people"]
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

  const [input, setInput] = useState({
    name: "",
    url: "",
    id: "",
    position: "",
  })
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if(!input.name || !input.url || !input.id || !input.position) return setError(true)
    setPeople([
      ...people,
      {
        name: input.name,
        id: parseInt(input.id),
        url: input.url,
        position: input.position,
      }
    ])
    setInput({
      name: "",
      url: "",
      id: "",
      position: "",
    })
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <input
        type="number"
        placeholder="Employee Id"
        className="AddToList-input"
        value={input.id}
        onChange={handleChange}
        name="id"
      />
      <textarea
        placeholder="Position"
        className="AddToList-input"
        value={input.position}
        onChange={handleChange}
        name="position"
      />
      <button className="AddToList-btn"
        onClick={handleClick}
      >
        Add to list
      </button>
      {error && <p>Please fill in all fields.</p>}
    </div>
  )
}

export default AddToList
