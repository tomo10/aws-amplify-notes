import React from 'react'
import { css } from 'glamor'

import Note from './Note'

const Notes = (props) => {

    return (
        <div {...css(styles.container)}>
        {
          props.notes.map((t, i) => (
          <Note
            key={i}
            note={t}
            
            updateNote={props.updateNote}
          />
          ))
        }
      </div>
    )
}

const styles = {
    container: {
      width: '360px',
      margin: '0 auto',
      '@media(max-width: 360px)': {
        width: 'calc(100% - 40px)'
      }
    }
  }

export default Notes