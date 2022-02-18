import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from './../redux/actions'

class ItemForm extends Component {
  state = {
    name: ""
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatchAddItem({
      id: Math.ceil(Math.random(1, 10) * 1000000000),
      name: this.state.name
    })

    this.setState({name: ""})
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="item" 
          value={this.state.name} 
          onChange={this.handleChange} 
        />
        <input type="submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatchAddItem: item => dispatch(addItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(ItemForm)
