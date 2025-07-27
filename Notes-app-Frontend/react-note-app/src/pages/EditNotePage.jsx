import { useEffect, useState } from 'react'
import './AddNotes.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const EditNotePage = ({updateNote}) => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState("")

  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/notes/${id}`)
    .then(res => {
      console.log(res.data)
      setTitle(res.data.title)
      setBody(res.data.body)
      setCategory(res.data.category)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [id]) 

  const updatedNote = {
    title: title,
    body: body,
    category: category
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title && !body && !category) {
      return;
    }
    updateNote(updatedNote, id)
    navigate(`/notes/${id}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <h5>Edit Note</h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter note's title"
          value={title}
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
          value={body}
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
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
          <option value="">Pick a category</option>
          <option value="BUSINESS">Business</option>
          <option value="PERSONAL">Personal</option>
          <option value="IMPORTANT">Important</option>
        </select>
      </div>

        


      <button className="btn btn-primary d-flex justify-content-center" style={{width:"100%"}}>Update Note</button>
    </form>
  )
}

export default EditNotePage