import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, SvgIcon, Menu, MenuItem, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = (theme) => ({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1,
    },
    appBarWithSideBar: {
        left: '240px',
        width: 'auto'
    },
    appBar: {
        width: '100%'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class MainAppBar extends PureComponent {
    state = {
        mobileMoreAnchorEl: null,
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    render()
    {
        const {classes, title, sideBar} = this.props;
        const { mobileMoreAnchorEl } = this.state;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const githubLink = props => <a
            href={process.env.REACT_APP_REPO} {...props}>{props.children}</a>;

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <Button to="/" component={Link}>
                        <HomeIcon />
                        &nbsp;
                        Home
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button to="/favourites" component={Link}>
                        <FavoriteIcon />
                        &nbsp;
                        Favourites
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button aria-label="github" target="_blank" component={githubLink}>
                        <SvgIcon>
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </SvgIcon>
                        &nbsp;
                        GitHub
                    </Button>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={sideBar ? classes.appBarWithSideBar : classes.appBar} color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            {title}
                        </Typography>
                        <div className={classes.sectionDesktop}>
                            <Button to="/" component={Link}>
                                <HomeIcon />
                                &nbsp;
                                Home
                            </Button>
                            <Button to="/favourites" component={Link}>
                                <FavoriteIcon />
                                &nbsp;
                                Favourites
                            </Button>
                            <Button aria-label="github" target="_blank" component={githubLink}>
                                <SvgIcon>
                                    <path
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </SvgIcon>
                            </Button>
                        </div>

                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
            </div>
        );
    }
}

MainAppBar.defaultProps = {
    sideBar: false
};

MainAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    sideBar: PropTypes.bool
};

export default withStyles(styles)(MainAppBar);