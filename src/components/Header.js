import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({startLogout}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active" >Dashboard</NavLink>
    {/*<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>*/}
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>  
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);
