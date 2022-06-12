import React, {useEffect, Fragment} from 'react';
import DisplayCard from './DisplayCard';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Styles/DisplayCard.css';
import {getAllUsers} from '../Redux/actions/apiCalls';
import Spinner from './Spinner';
const Home = ({getAllUsers, apiCalls: {loading}}) => {
  useEffect(() => {
    getAllUsers();
  }, []);
  return <Fragment>{loading ? <Spinner /> : <DisplayCard />}</Fragment>;
};
Home.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  apiCalls: state.apiCalls,
});
export default connect(mapStateToProps, {getAllUsers})(Home);
