import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, Button } from 'react-bulma-components';
import { getMenuIsOpen } from '../state/selectors/navigation.selectors';
import { togglePrimaryMenu } from '../state/actions/navigation.actions';
import { getIsLoggedIn } from '../state/selectors/user.selectors';
import { Link } from 'react-router-dom';
import Logo from '../assets/imgs/macro-tracker-logo.png';

function PrimaryNav(props) {
  const { menuIsOpen, isLoggedIn } = props;
  const iconName = menuIsOpen ? 'fa-times' : 'fa-bars';

  return (
    <Navbar color="dark" className="primary-nav">
      <Navbar.Brand>
        <Link to="/" className="is-size- has-text-white"><img alt="MacroTracker" src={Logo} /></Link>
      </Navbar.Brand>
      {isLoggedIn && (
        <Button
          color="primary"
          className="primary-nav-button"
          onClick={props.togglePrimaryMenu}
        >
          <i className={`fa ${iconName}`} aria-hidden="true"></i>
        </Button>
      )}
    </Navbar>
  );
}

PrimaryNav.defaultProps = {
  menuIsOpen: false,
};

PrimaryNav.propTypes = {
  togglePrimaryMenu: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool,
};

const mapStateToProps = state => ({
  menuIsOpen: getMenuIsOpen(state),
  isLoggedIn: getIsLoggedIn(state),
});

const mapDispatchToProps = {
  togglePrimaryMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryNav);
