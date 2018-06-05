import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';



class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            SearchField: ''  
        }

    }
    
    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users')
           .then (response => response.json())
           .then(users => {this.setState({robots: users})})
       
    }
    
    onSearchChange = (event) => {
        this.setState({SearchField: event.target.value})

    }

    render(){
        const FliteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={FliteredRobots}/>
                </Scroll>
                
            </div>
        );
    }
}

export default App;