import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Card, Icon, Image, Container } from 'semantic-ui-react';
import AppHeader from '../AppHeader/AppHeader';

class HealthcarePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resourcesList: [],
        }
    }

    componentDidMount = () => {
        axios.get('/api/healthcare')
            .then((response) => {
                console.log('healthcare GET', response);
                this.setState({
                    resourcesList: response.data
                })
            })
    }
    
    render() {
        return (
            <div>
                <Container>
                    <AppHeader />
                </Container>
                <div>
                    <Container>
                        <Grid container stackable centered columns={3}>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    {this.state.resourcesList.map(resources => {
                                            return (
                                                <Card key={resources.id}>
                                                    <Image src={resources.image_url} />
                                                    <Card.Header>{resources.biz_name}</Card.Header>
                                                    <Card.Meta>{resources.address}</Card.Meta>
                                                    <Card.Content>
                                                        <ul>
                                                            <li>Contact: {resources.contact_name}</li>
                                                            <li>Contact Gender: {resources.gender}</li>
                                                            <li>Is Contact POC?: {resources.race}</li>
                                                            <li>Languages Spoken: {resources.language}</li>
                                                        </ul>
                                                        <Card.Description>{resources.biz_notes}</Card.Description>
                                                    </Card.Content>
                                                </Card>
                                            )
                                        })}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>                    
                    </Container>                
                </div>
            </div>
        );
    }
}

export default HealthcarePage;
