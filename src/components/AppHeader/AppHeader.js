import React from 'react';
import { Header } from 'semantic-ui-react';
import Nav from '../Nav/Nav';
import './AppHeader.css';

const AppHeader = () => (
    <div fixed='top' className='landing-image' style={{ marginTop: '5em' }}>
        <Header as='h1' textAlign='center'>
            {/* <Image src='/images/TransIcon.png' /> */}
            <Header.Content>MPLS Transgender Resource Project</Header.Content>
            <Header.Subheader><i>"Don't look to society to give you permission to be yourself"</i></Header.Subheader>
            <Header.Subheader>Dr. Steve Maraboli</Header.Subheader>
        </Header>
        <Nav />
    </div>
)

export default AppHeader;