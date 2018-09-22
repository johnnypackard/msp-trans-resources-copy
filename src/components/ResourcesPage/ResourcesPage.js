import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Icon, Image, Button, Container } from 'semantic-ui-react';
import AppHeader from '../AppHeader/AppHeader';

function ResourcesPage(props) {
    const { classes } = props;

    const handleClick = (pageLink) => () => {
        props.history.push(pageLink);
    }
        return(
            <div>
                 <Container>
                    <AppHeader history={props.history} />
                </Container>
                <div>
                    <Container>
                        <Grid container stackable centered columns={3}>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    <Card>
                                        <Image src='/images/housing.png' />
                                        <Card.Content>
                                            <Card.Header>Housing</Card.Header>
                                            <Card.Meta>Do you need assistance with housing?</Card.Meta>
                                            <Card.Description>
                                                Homelessness is a critical issue for transgender people; one in five transgender individuals have experienced homelessness at some point in their lives.
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui buttonLabeledIcon'>
                                                <Button onClick={handleClick('/housing')} fluid icon color='blue' size='large' labelPosition='left'>
                                                    Housing
                                                    <Icon name='building' />
                                                </Button>
                                            </div>
                                        </Card.Content>   
                                    </Card>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Card>
                                        <Image src='/images/financial.png' />
                                        <Card.Content>
                                            <Card.Header textAlign='center'>Financial</Card.Header>
                                            <Card.Meta textAlign='center'>Find financial assistance</Card.Meta>
                                            <Card.Description>
                                                Transgender people are nearly four times more likely to have a household income of less than $10,000, compared to the general population.
                                                Whether saving for the future and in need of financial planning, in need of financial assistance, or both, we know people who can help.
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui buttonLabeledIcon'>
                                                <Button onClick={handleClick('/financial')} fluid icon color='blue' size='large' labelPosition='left'>
                                                    Financial
                                                    <Icon name='dollar sign' />
                                                </Button>
                                            </div>
                                        </Card.Content>   
                                    </Card>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Card>
                                        <Image src='/images/legal.png' />
                                        <Card.Content>
                                            <Card.Header textAlign='center'>Legal Services</Card.Header>
                                            <Card.Meta textAlign='center'>Name Change and Other Legal Needs</Card.Meta>
                                            <Card.Description>
                                                You deserve to be treated with dignity and respect in court, but unfortunately, not all judges and court staff will respect your gender identity or expression, sexual orientation, or HIV status.
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui buttonLabeledIcon'>
                                                <Button onClick={handleClick('/legal')} fluid icon color='blue' size='large' labelPosition='left'>
                                                    Legal
                                                    <Icon name='balance scale' />
                                                </Button>
                                            </div>
                                        </Card.Content>   
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    <Card>
                                        <Image src='/images/healthcare.png' />
                                        <Card.Content>
                                            <Card.Header textAlign='center'>Healthcare</Card.Header>
                                            <Card.Meta textAlign='center'>Mental and Medical Health</Card.Meta>
                                            <Card.Description>
                                                Within the TBLGQI+ community, transgender people can face an exceptional degree of discomfort and bias, especially in healthcare. We have resources to help.
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui buttonLabeledIcon'>
                                                <Button onClick={handleClick('/healthcare')} fluid icon color='blue' size='large' labelPosition='left'>
                                                    Healthcare
                                                    <Icon name='talk' />
                                                </Button>
                                            </div>
                                        </Card.Content>   
                                    </Card>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Card>
                                        <Image src='/images/education.png' />
                                        <Card.Content>
                                            <Card.Header textAlign='center'>Education</Card.Header>
                                            <Card.Meta textAlign='center'>School and University</Card.Meta>
                                            <Card.Description>
                                                One basic area of student diversity which schools rarely acknowledge is gender. However, gender inclusive schools and classrooms welcoming all people are within our community's reach.
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui buttonLabeledIcon'>
                                                <Button onClick={handleClick('/education')} fluid icon color='blue' size='large' labelPosition='left'>
                                                    Education
                                                    <Icon name='graduation' />
                                                </Button>
                                            </div>
                                        </Card.Content>   
                                    </Card>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Card>
                                        <Image src='/images/community.png' />
                                        <Card.Content>
                                            <Card.Header textAlign='center'>Community</Card.Header>
                                            <Card.Meta textAlign='center'>Local TBLGQI+ inclusive businesses.</Card.Meta>
                                            <Card.Description>
                                                We've all experienced the fear of walking into a business for the first time, and wondering if it is a safe space. These resources are available to help lessen the fears you may have.
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui buttonLabeledIcon'>
                                                <Button onClick={handleClick('/community')} fluid icon color='blue' size='large' labelPosition='left'>
                                                    Community
                                                    <Icon name='coffee' />
                                                </Button>
                                            </div>
                                        </Card.Content>   
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>                    
                    </Container>                
                </div>
            </div>
        ); 
}

ResourcesPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ResourcesPage;


