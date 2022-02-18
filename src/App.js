import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import ItemForm from './components/ItemForm';
import Item from './components/Item';
// import { useSelector } from 'react-redux';

function App(props) {
  // const items = useSelector(state => state)
  // console.log(props)
  return (
    <div className="App">
      <h1>My cart</h1>
      <ItemForm />
      <ul>
        {props.items.map(i => <Item key={i.id} id={i.id} name={i.name} />)}
      </ul>
    </div>
  );
}

function mapStateToProps(state){
// return object that will be be merged with my props
  return {
    items: state
  }
}

export default connect(mapStateToProps)(App);
