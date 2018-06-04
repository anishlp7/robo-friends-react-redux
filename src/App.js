import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';



class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:robots,
            SearchField:''  
        }

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
                <CardList robots={FliteredRobots}/>
            </div>
        );
    }
}

export default App;