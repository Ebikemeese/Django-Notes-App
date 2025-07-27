import React from 'react'
import Filter from "../components/filter"
import NoteCardContainer from "../components/NoteCardContainer"


const HomePage = ({ notes, loading, handleFilterText }) => {
  return (
    <>
    <Filter handleFilterText={handleFilterText} />
    <NoteCardContainer notes={ notes } loading={ loading } />
    </>
  )
}

export default HomePage