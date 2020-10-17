import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-compoment';
import { InputField } from './components/input/input.component';


class App extends Component
{
  constructor()
  {
    super();
    this.state={
      monsters:[],
      search:''
    }
  }
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then($monster=> this.setState({monsters:$monster}))
  }
  render()
  {
    // const monsters=this.state.monsters;
    // const search=this.state.search;
    const filtered=this.state.monsters.filter(monster=>
      monster.name.toLowerCase().includes(this.state.search.toLowerCase()));
    return(
    <div className= 'App'>
      <InputField 
      handleEvent={e=>this.setState({search:e.target.value})}
      placeholder='search monsters'

      ></InputField>
      <CardList  monsters={filtered}>
      
      </CardList>
      
    </div>
    )
  }
}
export default App;
