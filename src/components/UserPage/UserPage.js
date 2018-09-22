import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from '../AppHeader/AppHeader';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { Button } from 'semantic-ui-react';


const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('login');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          <h2>
            Would you like to add a resource?
          </h2>
          <Button>
            Add a resource
          </Button>
        </div>
      );
    }

    return (
      <div>
        <div>
          <AppHeader/>  
        </div>
        <div>
          { content }  
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

