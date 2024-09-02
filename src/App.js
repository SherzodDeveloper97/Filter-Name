import './App.css';
import Card from './Card';
import { names } from './names';
import SearchBox from './SearchBox';
import { Component } from 'react';

class App extends Component {
  // state ={
  //   names: names,
  //   searchfield: "",
  // }

  constructor(props) {
    super(props);

    this.state = {
        names: names,
        searchfield: "",
    };

    this.onSearchChange = this.onSearchChange.bind(this);
}

  onSearchChange(event){
    this.setState({searchfield:event.target.value});
    // return(
    //   console.log(this.state.searchfield)
    // )
  }

  
  render(){
    const filteredName = this.state.names.filter((name) => {
      return name.fName.toLowerCase().includes(this.state.searchfield.toLowerCase()) || name.lName.toLowerCase().includes(this.state.searchfield.toLowerCase()) || name.email.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="App m-5">
        <h1 className="title">Search Name</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Card names={filteredName} />
      </div>
    )
  }
}

export default App;
