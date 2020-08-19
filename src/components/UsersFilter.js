import React from 'react';
import {connect} from 'react-redux';

import './UsersFilter.css';

const UsersFilter  = (props) => {
    return(
        <div>
        {
            props.users.map((u,i) => {
                let final = '';
                if(!u.dp){
                    const dpForNotImageFound = u.name.split(" ");
                    const firstLetter = dpForNotImageFound[0].charAt(0);
                    const secondLetter = dpForNotImageFound[1].charAt(0);
                    final = `${firstLetter}${secondLetter}` 
                }

                return <div className="images" key={u._id}>{ u.dp ? <img src={u.dp} alt="No Avatar"
                className="userimage" onClick={() => props.setText(u.name)}
                ></img> : <div key={i} className="noimage"
                onClick={() => props.setText(u.name)}
                >{final}</div> } </div>
            })
        }
        </div>
    )
};

const mapStateToProps = state => {
    return{
        users: state.usersData
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setText: (name) => dispatch({
            type: 'SET_TEXT',
            text: name
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersFilter);