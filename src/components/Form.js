import React from 'react'
import { css } from 'glamor'
import { MdAdd } from 'react-icons/md'
import {useState} from 'react'

const Form = (props) => {

    const [name, setName] = useState('')

    const onChange = e => {
        setName(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && name !== '') {
            let note = {
                name, status: 'new'        
            }
        props.createNote(note)
        setName({name: ''})
        }
    }

    return (
        <div {...css(styles.container)}>
        <div {...css(styles.form)}>
          <MdAdd size={28} />
          <input
            placeholder='Note Name'
            {...css(styles.input)}
            onKeyPress={handleKeyPress}
            onChange={e => onChange(e)}
            value={name}
          />
        </div>
      </div>
    )
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

export default Form