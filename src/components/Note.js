import React from 'react'
import { css } from 'glamor'
import { FaTimes, FaCircle } from 'react-icons/fa'
import { MdCheckCircle } from 'react-icons/md';

const Note = (props) => {

    const {name, status} = props.note
    return (
        <div {...css(styles.container)}>
        {
          status === 'new' && (
            <FaCircle
              color='#FF9900'
              {...css(styles.new)}
              size={22}
              onClick={() => props.updateNote(props.note)}
            />
          )
        }
        {
          status === 'completed' && (
            <MdCheckCircle
              {...css(styles.completed)}
              size={22}
              color='#FF9900'
              onClick={() => props.updateNote(props.note)}
            />
          )
        }
        <p {...css(styles.name)}>{name}</p>
        <div {...css(styles.iconContainer)}>
          <FaTimes
            onClick={() => props.deleteNote(props.note)}
            color='red'
            size={22}
            {...css(styles.times)}
          />
        </div>
      </div>
    )
}

const styles = {
    container: {
      borderBottom: '1px solid rgba(0, 0, 0, .15)',
      display: 'flex',
      alignItems: 'center'
    },
    name: {
      textAlign: 'left',
      fontSize: 18
    },
    iconContainer: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    new: {
      marginRight: 10,
      cursor: 'pointer',
      opacity: .3
    },
    completed: {
      marginRight: 10,
      cursor: 'pointer'
    },
    times: {
      cursor: 'pointer',
      opacity: 0.7
    }
  }

export default Note