import React, { useEffect } from 'react'
import { BiSolidTrashAlt } from "react-icons/bi"
import { FiEdit } from "react-icons/fi"
import './NotesDetailPage.css'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { FormatDate } from '../components/FormatDate'
import Modal from '../components/Modal'

const NotesDetailPage = ({deleteNote}) => {

  const [note, setNote] = useState({})
  const {id} = useParams([])
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  

  useEffect(() => {
  axios.get(`http://127.0.0.1:8000/api/v1/notes/${id}`)
  .then(res => {
      console.log(res.data)
      setNote(res.data)
      // setIsLoading(false)
    })
    .catch(err => {
      console.log(error.message)
    })
  }, [id])

  return (
    <>
    <div className="note-container">
    <h3 className="title">
      {/* get note title from api */}
      { note.title }
    </h3>
    <span className="d-flex justify-content-center">
    <p className="note-date font-12 text-muted me-5"> created: {FormatDate(note.created)}</p>
    <p className="note-date font-12 text-muted me-5">last updated: {FormatDate(note.updated)}</p>
    </span>
    <span className="button-group">
      <Link to={`/edit-note/${id}`}>
        <button className="btn btn-primary"><FiEdit /><span>Edit</span></button>
      </Link>
      
      <button 
        className="btn btn-danger"
        onClick={handleIsOpen}
      >
        <BiSolidTrashAlt /><span>Delete</span>
        </button>
    
    </span>
    <p className="description">
      { note.body }
    </p>

  </div>

  { isOpen && 
    <Modal 
      handleIsOpen={handleIsOpen} 
      deleteNote={() => deleteNote(id)} 
    />
  }

  </>
  )
}

export default NotesDetailPage