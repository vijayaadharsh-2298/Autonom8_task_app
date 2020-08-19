import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBox extends Component {

    render(){
    return(
        <div>
            <input className="form-control" type="text" placeholder="Search"
            onChange={e => this.props.addFilterText(e.target.value)}
            />
        </div>
    )}
}

const mapDispatchToProps = dispatch => {
    return{
        addFilterText: (e) => dispatch({type:'SET_TEXT', text: e})
    }
}

export default connect(null,mapDispatchToProps)(SearchBox);