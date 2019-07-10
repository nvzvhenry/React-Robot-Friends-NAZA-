import React,{ Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';
import './App.css';


class App extends Component {
    
    constructor(){
        super();
        this.state = {
            robot: [],
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {

            const filteredRobots = this.state.robot.filter(robot => {
            return  robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div className='tc'>
                <h1 className='f1'> RoboFriends</h1>
                <br/>

                <SearchBox searchChange={this.onSearchChange}/>
                <hr/>

                <CardList robots={filteredRobots} />
            </div>
        );
    }


    componentDidMount(){
        this.setState({robot: robots });
    }
        
}

export default App;