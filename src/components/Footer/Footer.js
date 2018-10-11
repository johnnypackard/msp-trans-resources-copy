import React from 'react';
import { Segment, Container, Grid, Header, List} from 'semantic-ui-react';

const Footer = () => (
    <div>
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
            <Container textAlign='center'>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            {/* <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Who we are</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                            </List> */}
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='Additional Info' />
                            <List link inverted>
                                <List.Item>
                                    <a href="https://www.genderbread.org/">
                                        Genderbread Person
                                    </a>
                                </List.Item>
                                <List.Item>
                                    <a href="https://www.hrc.org/resources/transgender-faq">
                                        Transgender FAQ
                                    </a>
                                </List.Item>
                                <List.Item>
                                    <a href="https://www.glaad.org/transgender/resources">
                                        External Resources
                                    </a>
                                </List.Item>
                                <List.Item>
                                    <a href="https://www.lambdalegal.org/issues/transgender-rights">
                                        Legal Help
                                    </a>
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column floated='right' width={5}>
                            <Header as='h4' inverted>
                                About this website
                            </Header>
                            <p>
                                This web app was created by Johnny Packard as a student at Prime Digital Academy
                                to satisfy the Solo Project requirement. 
                            </p>
                            <p>
                                <sub>"Citation: [1] <a href='https://www.glaad.org/tdor'>https://www.glaad.org/tdor</a>
                                        Website Title: GLAAD
                                        Article Title: Transgender Day of Remembrance #TDOR - November 20
                                        Date Published: November 17, 2017
                                        Date Accessed: July 16, 2018 "</sub>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>    
    </div>
);

export default Footer;
