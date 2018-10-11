import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const body = {
        username: this.state.username,
        password: this.state.password,
      };

      // making the request to the server to post the new user's registration
      axios.post('/api/users/register/', body)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/home');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div className='login-form'>
        {this.renderAlert()}
        <style>{`
          body > div,
          body > div > div
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Register for an account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Field>
                  <input
                    placeholder='Username'
                    type='text'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                  />
                </Form.Field>
                <Segment>
                  <Button
                    fluid
                    size='large'
                    type='submit'
                    name='submit'
                    value='Register'
                    onSubmit={this.registerUser}
                    as={Link} to='/resources'
                  >
                  Register
                  </Button>
                </Segment>
                <Segment>
                  <Button 
                    as={Link} 
                    to='/homepage' 
                    name='cancel' 
                    negative
                    fluid
                    size='large'
                  >
                  Cancel
                  </Button>
                </Segment>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(RegisterPage);

