import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Container } from 'semantic-ui-react';
import AppHeader from '../AppHeader/AppHeader';
import Footer from '../Footer/Footer';

function VolunteerPage(props) {
    
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
                        <Table celled></Table>
                            <Table.Header>
                                <Table.HeaderCell>Organization</Table.HeaderCell>
                                <Table.HeaderCell>Volunteer Opportunity</Table.HeaderCell>
                                <Table.HeaderCell>Org Contact</Table.HeaderCell>
                                <Table.HeaderCell>Call</Table.HeaderCell>
                                <Table.HeaderCell>E-mail</Table.HeaderCell>
                                <Table.HeaderCell>Vist Website</Table.HeaderCell>    
                            </Table.Header>
                            
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        Human Rights Campaign
                                    </Table.Cell>
                                    <Table.Cell>
                                        The 22nd annual HRC National Dinner will be held on Saturday, Sept. 15, 2018 at the Walter E. Washington Convention Center. 
                                    </Table.Cell>
                                    <Table.Cell>
                                        Check back for updates!
                                    </Table.Cell>
                                    <Table.Cell>
                                        Check back for updates!
                                    </Table.Cell>
                                    <Table.Cell>
                                        Check back for updates!
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button as='a' href='http://hrcnationaldinner.org/get-involved/volunteer/' primary>
                                            Vist Site
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>

                    </Container>
                    <div>
                        <Footer />
                    </div>                
                </div>
            </div>
        ); 
}

VolunteerPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default VolunteerPage;


