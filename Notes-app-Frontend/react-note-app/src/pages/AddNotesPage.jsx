import React, { useState } from 'react'
import './AddNotes.css'
import { useNavigate } from 'react-router-dom'

const AddNotesPage = ({addNote}) => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState("")

  const navigate = useNavigate()

  const newNote = {
    title: title,
    body: body,
    category: category
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title && !body && !category) {
        return;
      }
    addNote(newNote)
    navigate("/")
    console.log(newNote)
      
  }
  
  return (
    <form
      onSubmit={handleSubmit}
    >
      <h5>Add New Note</h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter note's title"
          value={ title }
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={4}
          placeholder="Enter note's content"
          value={ body }
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Note's category
        </label>
      <select 
        className="form-select" 
        aria-label="Default select example" 
        style={{height: "40px"}}
        value={ category }
        onChange={(e) => setCategory(e.target.value)}
      >
          <option value="" selected>Pick a category</option>
          <option value="BUSINESS">Business</option>
          <option value="PERSONAL">Personal</option>
          <option value="IMPORTANT">Important</option>
        </select>
      </div>

        


      <button className="btn btn-primary d-flex justify-content-center" style={{width:"100%"}}>Add Note</button>
    </form>
  )
}

export default AddNotesPage