import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Icon, Image, Button, Container } from 'semantic-ui-react';
import AppHeader from '../AppHeader/AppHeader';

function InfoPage(props) {
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
                      
                    </Container>                
                </div>
            </div>
        ); 
}

InfoPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default InfoPage;