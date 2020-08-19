import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserFilter from './UsersFilter';
import SearchBox from './SearchBox';
import './Dashboard.css';
import selector from '../selector';

class Dashboard extends Component{

    render(){
        return(
            <div className="container">
                <UserFilter />
                <SearchBox />
                <div className="todolist">
                    <label>To DO</label>
                    <div className="dataContainer">
                     {
                         this.props.users ? this.props.users.map(
                             u => {
                                 if(u.status === 'To Do')
                                 {
                                     const dpForNotImageFound = u.name.split(" ");
                                     const firstLetter = dpForNotImageFound[0].charAt(0);
                                     const secondLetter = dpForNotImageFound[1].charAt(0);
                                     const final = `${firstLetter}${secondLetter}`
                                     return (
                                    <div key={u._id} className="card">
                                        <p>{u.task}</p>
                                        <span className="taskid">{u._id}</span>
                                        { !u.dp ? <div className="noimage">{final}</div> :
                                       <img src={u.dp} alt={final}></img> }
                                    </div>
                                    )
                                 } else return null
                             }
                         ) : <p>No To Do task available</p>
                     }   
                    </div>
                </div>
                <div className="inprogress">
                    <label>IN PROGRESS</label>
                    <div className="dataContainer">
                    {
                        this.props.users ? this.props.users.map(
                            u => {
                                if(u.status === 'In Progress')
                                {
                                     const dpForNotImageFound = u.name.split(" ");
                                     const firstLetter = dpForNotImageFound[0].charAt(0);
                                     const secondLetter = dpForNotImageFound[1].charAt(0);
                                     const final = `${firstLetter}${secondLetter}`
                                    return (
                                   <div key={u._id} className="card">
                                       <p>{u.task}</p>
                                       <span className="taskid">{u._id}</span>
                                       { !u.dp ? <div className="noimage">{final}</div> :
                                       <img src={u.dp} alt={final}></img> }
                                   </div>
                                   )
                                } else return null
                            }
                        ) : <p>No In Progress task available</p>
                    } 
                    </div>
                </div>
                <div className="completed">
                    <label>DONE</label>
                    <div className="dataContainer">
                    {
                        this.props.users ? this.props.users.map(
                            u => {
                                if(u.status === 'Done')
                                {
                                     const dpForNotImageFound = u.name.split(" ");
                                     const firstLetter = dpForNotImageFound[0].charAt(0);
                                     const secondLetter = dpForNotImageFound[1].charAt(0);
                                     const final = `${firstLetter}${secondLetter}`
                                    return (
                                   <div key={u._id} className="card">
                                       <p>{u.task}</p>
                                       <span>{u._id}</span>
                                       { !u.dp ? <div className="noimage">{final}</div> :
                                       <img src={u.dp} alt={final}></img> }
                                   </div>
                                   )
                                } else return null
                            }
                        ) : <p>No Done task available</p>
                    } 
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return{
        users: selector(state.usersData,state.filter.text)
    }
}

export default connect(mapStateToProps)(Dashboard);