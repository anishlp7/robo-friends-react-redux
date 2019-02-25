import React, { Component } from 'react';
import {connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components//SearchBox';
import Scroll from '../components//Scroll';
import './App.css';

import {setSearchField,requestRobots} from '../Actions';

const mapStateToProps = state => {
        return {
            searchField:state.searchRobots.searchField,
            isPending:state.requestRobots.isPending,
            robots:state.requestRobots.robots,
            error:state.requestRobots.error
        }
    }
const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {

    componentDidMount() {
       this.props.onRequestRobots()
    }


    render(){
        
        const {searchField, onSearchChange,robots} = this.props;
        const FliteredRobots =robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">robofriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={FliteredRobots}/>
                </Scroll>
                
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);