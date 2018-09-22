import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogout } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, Menu, Dropdown, Container, Image } from 'semantic-ui-react';

const mapStateToProps = state => ({
  user: state.user,
});

class Nav extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    this.props.history.push('goodbye');
  };

  render() {
    return(
        <Container style={{ marginBottom: '5em' }}>
          <Menu>
            <Menu.Menu position='left'>

              <Menu.Item>
                <Image size='mini' src='images/TransIcon.png' /> 
              </Menu.Item>

              <Menu.Item>
                <Button as={Link} name='Home' to='/home' primary>
                  Home
                </Button>
              </Menu.Item>

              <Menu.Item>
                <Button as={Link} name='About' to='/about' primary>
                  About
                </Button>
              </Menu.Item>

              <Menu.Item>
                <Button as={Link} name='Resources' to='/resources' primary>
                  Resources
                </Button>
              </Menu.Item>

              <Menu.Item>
                <Button as={Link} name='Volunteer' to='/volunteer' primary>
                  Volunteer
                </Button>
              </Menu.Item>
              
            </Menu.Menu>
            
            <Menu.Menu position='right'>

              <Dropdown item text='Profile'>
                <Dropdown.Menu>
                  <Dropdown.Item icon='user' text='View Profile' />
                  <Dropdown.Item icon='edit' text='Edit Profile' />
                  <Dropdown.Item icon='settings' text='Account Settings' />
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Item>
                <Button negative name='logout' onClick={this.logout}>
                  Log Out
                </Button> 
              </Menu.Item>

            </Menu.Menu>
          </Menu>  
        </Container>
      );
  }
}


export default connect(mapStateToProps)(Nav);
