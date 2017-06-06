import React, { Component } from 'react';
// connection in base

// material-ui

//connect components
import ReturnToolbar from '../../shared/Toolbar';

class Home extends Component {

  constructor(props) {
        super(props);
        this.state = ({
            open: false
        });
    }

  componentWillMount() {
  
  };


  render() {
    return (
        <div>
            <ReturnToolbar handleOpen={ this.handleOpen } />
        </div>
    );
  }

}


export default Home;
