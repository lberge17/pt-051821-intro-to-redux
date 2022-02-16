import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App(props) {
  const items = useSelector(state => state)

  return (
    <div className="App">
      <h1>My cart</h1>
      <ul>
        {items.map(i => <li>{i}</li>)}
      </ul>
    </div>
  );
}

// function mapStateToProps(state){
// // return object that will be be merged with my props
//   return {
//     items: state
//   }
// }

export default App;
