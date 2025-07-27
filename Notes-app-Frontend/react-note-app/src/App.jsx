import MainLayout from './layouts/MainLayout'
import AddNotesPage from './pages/AddNotesPage'
import HomePage from './pages/HomePage'
import EditNotePage from './pages/EditNotePage'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NotesDetailPage from './pages/NotesDetailPage'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { TbError404Off } from 'react-icons/tb'
import { toast } from 'react-toastify'

const App = () => {

  const [searchText, setSearchText] = useState("")
  const [isLoading, setIsLoading] = useState(false) 
  const [notes, setNotes] = useState([])
  const [filterText, setFilterText] = useState("")

  const handleSearchText = (val) => {
    setSearchText(val)
  }

  const handleFilterText = (val) => {
    setFilterText(val)
  }

  const filteredNotes = 
    filterText === "BUSINESS" 
      ? notes.filter(note => note.category=="BUSINESS")
      : filterText === "PERSONAL" ? notes.filter(note => note.category=="PERSONAL")
      : filterText === "IMPORTANT" ? notes.filter(note => note.category=="IMPORTANT")
      : notes

      useEffect(() => {
        if(searchText.length < 3) return;
        axios.get(`http://127.0.0.1:8000/api/v1/notes-search/?search=${searchText}`)
        .then(res => {
          setNotes(res.data)
        })
        .catch(err => {
          console.log(error.message)
        })
      }, [searchText])

  useEffect(() => {
    setIsLoading(true)
    axios.get("http://127.0.0.1:8000/api/v1/notes")
    .then(res => {
      console.log(res.data)
      setNotes(res.data)
      setIsLoading(false)
    })
    .catch(err => {
      console.log(TbError404Off.message)
    })
  }, [])

  const addNote = (data) => {
    axios.post("http://127.0.0.1:8000/api/v1/notes/", data)
    .then(res => {
      setNotes([...notes, data])
      toast.success("New note added successfully")
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  const updateNote = (data, id) => {
    axios.put(`http://127.0.0.1:8000/api/v1/notes/${id}/`, data)
    .then(res => {
      // setNotes([...notes])
      toast.success("Note Edited Successfully")
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  const deleteNote = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/v1/notes/${id}/`)
    .then(res => {
      // setNotes([...notes])
    })
    .catch(err => {
      console.log(error.message)
    })
  }

  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={ 
      <MainLayout 
        searchText={searchText}
        handleSearchText={handleSearchText}
      />
       
    }>
      <Route index 
        element={ 
          <HomePage 
            notes={ filteredNotes } 
            loading={ isLoading } 
            handleFilterText={handleFilterText} 
          /> 
        }
      />
      <Route path='/add-note' element={ <AddNotesPage addNote={addNote} /> } />
      <Route path='/notes/:id' element={ <NotesDetailPage deleteNote={deleteNote} /> } />
      <Route path='/edit-note/:id' element={ <EditNotePage updateNote={updateNote} /> } /> 
    
    </Route>
  
  ))


  return <RouterProvider router={router} />
}

export default App