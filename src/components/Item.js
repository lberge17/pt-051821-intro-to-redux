import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from './../redux/actions'

function Item(props) {
  function handleClick(){
    console.log("deleting item number: ", props.id)
    props.deleteItem(props.id)
  }

  return (
    <>
      <li>{props.name}</li>
      <button onClick={handleClick}>X</button>
    </>
  )
}

export default connect(null, { deleteItem })(Item)