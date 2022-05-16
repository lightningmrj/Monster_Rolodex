import React, { Component } from 'react';
import { CardList } from './components/cardlist/cardlist.components';
import './components/cardlist/cardlist.styles.css';
import './App.css';
import { SearchBox } from './components/searchbox/searchbox.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  // const handleChange = function (e) {
  //   this.setState({ searchfield: e.target.value });
  // };

  render() {
    const { monsters, searchfield } = this.state;
    //the above is equivalent to:
    //const monster = this.state.onster
    //const searchfield = this.state.searchfield;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
