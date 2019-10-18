import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

import { css } from 'glamor'

import Form from './components/Form'
import Notes from './components/Notes'

function App() {

  const [notes, setNotes] = useState([])
  const [filter, setFilter] = useState('none')

  const createNote = async note => {
    setNotes([note, ...notes])
  }

  const updateNote = async note => {
    const updatedNote = {
      ...note,
      status: note.status === 'new' ? 'completed' : 'new'
    }
    const index = notes.findIndex(i => i.id === note.id);
    const newNotes = notes;
    newNotes[index] = updatedNote;
    setNotes(newNotes);
  }

  const updateFilter = filter => setFilter(filter)

  if (filter === 'completed') {
    notes = notes.filter(n => n.status === 'completed')
  }
  if (filter === 'new') {
    notes = notes.filter(n => n.status === 'new')
  }

  return (

    <div {...css(styles.container)}>
      <p {...css(styles.title)}>Notes</p>
      <Form
        createNote={createNote}
      />
      <Notes
        notes={notes}
        updateNote={updateNote}
      />
      <div {...css(styles.bottomMenu)}>
        <p
          onClick={() => updateFilter('none')}
          
        >All</p>
        <p
          onClick={() => updateFilter('completed')}
          
        >Completed</p>
        <p
          onClick={() => updateFilter('new')}
          
        >Pending</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: 360,
    margin: '0 auto',
    borderBottom: '1px solid #ededed',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 35,
    width: '360px',
    border: 'none',
    outline: 'none',
    marginLeft: 10,
    fontSize: 20,
    padding: 8,
  }
}

export default App;
