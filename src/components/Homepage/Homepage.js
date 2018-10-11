import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react';

const HomepageHeading = ({ mobile }) => (
    <Container text style={{ marginTop: '5em' }}>
            <Header
                as='h1'
                content='MPLS Transgender Resource Project'
                inverted
                style={{
                    fontSize: mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: mobile ? '1.5' : '3em',
                }}
            />
            <Header
                as='h2'
                content='"Sometimes the people around you won&#39;t understand your journey. They don&#39;t need to, it&#39;s not for them."'
                inverted
                style={{
                    fontSize: mobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: mobile ? '0.5em' : '1.5em',
                }}
            />
            <Button as={Link} to='resources' primary size='huge'>
                Find Resources
                <Icon name='right arrow' />            
            </Button> 
        {/* <Image fluid src={window.location.origin + '/images/transflagbg.jpg'} /> */}
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false})
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive {...Responsive.onlyComputer}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as={Link} to='/homepage' active>
                                    Home
                                </Menu.Item>
                                {/* <Menu.Item as={Link} to='/info'>About</Menu.Item> */}
                                <Menu.Item as={Link} to='/volunteer'>Volunteer</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as={Link} to='/login' inverted={!fixed}>
                                        Log In
                                    </Button>
                                    <Button as={Link} to='/register' inverted={!fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = { 
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive {...Responsive.onlyMobile}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
                        <Menu.Item as='a' active>
                            Home
                        </Menu.Item>
                        <Menu.Item as={Link} to='/about'>About</Menu.Item>
                        <Menu.Item as={Link} to='/donate'>Donate</Menu.Item>
                        <Menu.Item as={Link} to='/volunteer'>Volunteer</Menu.Item>
                        <Menu.Item as={Link} to='/login'>Log In</Menu.Item>
                        <Menu.Item as={Link} to='/register'>Sign Up</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher
                        dimmed={sidebarOpened}
                        onClick={this.handlePusherClick}
                        style={{ minHeight: '100vh' }}
                    >
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ minHeight: 350, padding: '1em 0em' }}
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as={Link} to='/login' inverted>
                                            Log In
                                        </Button>
                                        <Button as={Link} to='/register' inverted style={{ marginLeft: '0.5em' }}>
                                            Sign Up
                                        </Button>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile />
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  )
  
  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }
  

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical >
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Transgender people are in need of safe spaces
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            "In 2017, there were 325 reported cases globally of reported killings of trans and gender-diverse people between October 2016 and October 2017."<sup>"[1]"</sup>
                        </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Transgender rights are civil rights
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            On February 10, 2017, the Minneapolis City Council approved Resolution 2017R-06, establishing the Transgender Equity Council. The council serves as an advisory board to the City on matters of importance to the Trans community.
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={8}>
                        <Image bordered rounded size='big' src={window.location.origin + '/images/transRights.png'} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button as='a' href='http://www.hrc.org/your-elected-officials' size='huge' primary>How can I help?</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "We are in a place now where more and more trans people want to come forward and say, 'This is who I am.'"
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            <b>Laverne Cox </b>Actress, Producer, Equal Rights Advocate
                        </p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }} >
                            "Trans people are exactly who they say they are, no matter what the culture or media would lead us to believe."
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            <b>Janet Mock </b> Author, Advocate, and TV Host
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Are you in need of resources in your community?
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    We believe trans folx deserve to feel safe to exist anywhere in the community and be treated respectfully.
                    Therefore, we seek to create a safe space online where the transgender community of Minneapolis can share 
                    first-hand experiences of local businesses, offering assistance to other trans folx who are seeking safe, 
                    respectful, and welcoming resources.
                </p>
                <Button primary as={Link} to='/resources' size='large'>
                    Find Resources
                </Button>
                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href='https://www.outfront.org/legal-help'>Know Your Rights</a>
                </Divider>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Segment>
                                <Header textAlign='center' as='h3' style={{ fontSize: '2em' }}>
                                    Discrimination Prohibited by MN Law
                            </Header>    
                            </Segment>
                            <Grid.Row vertical-align='top'>
                                <ol style={{ fontSize: '1.33em' }}>
                                    <li>Employment, including labor union membership</li>
                                    <li>Real property &#40;Housing&#41;</li>
                                    <li>Publc accommodations &#40;such as theaters or restaurants&#41;</li>
                                    <li>Public services &#40;those provided by the government&#41;</li>
                                    <li>Education, including private, secular schools</li>
                                    <li>Credit</li>
                                    <li>Business contracting</li>
                                </ol>    
                            </Grid.Row>
                            
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment>
                                <Header textAlign='center' as='h3' style={{ fontSize: '2em' }}>
                                    Discrimination Which Still Remains Legal
                                </Header>    
                            </Segment>
                                <Grid.Row vertical-align='top'>
                                    <ol style={{ fontSize: '1.33em' }}>
                                        <li>Youth-serving agencies (employees or volunteers only)</li>
                                        <li>Duplex rentals</li>
                                        <li>Religious institutions (applies to education)</li>
                                        <li>Employment, housing/real property, or use of facilities, but not “secular business activities”</li>
                                    </ol>    
                                </Grid.Row>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Segment textAlign='center'>
                    <p style={{ fontSize: '1.33em' }}>
                        If you feel you have been a victim of discrimination, contact
                        <br /> 
                        <a href='http://www.genderjustice.us/' >GenderJustice.us</a>
                        <br />
                        Supporting gender non-conforming and trans legal issues since 2010.
                    </p>
                    <Grid centered columns={3}>
                        <Segment compact vertical> 
                            <Button.Group>
                                <Button as='a' href='tel:651-789-2090' color='pink' content='651-789-2090' icon='phone' labelPosition='left'>
                                </Button>
                                <Button.Or />
                                <Button as='a' href='mailto:CHRISTY.HALL@GENDERJUSTICE.US' color='blue' content='E-Mail' icon='at' labelPosition='right' />
                            </Button.Group>  
                        </Segment> 
                    </Grid> 
                       
                </Segment>
                
            </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        {/* <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Who we are</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                            </List>
                        </Grid.Column> */}
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
    </ResponsiveContainer>
)

export default HomepageLayout;