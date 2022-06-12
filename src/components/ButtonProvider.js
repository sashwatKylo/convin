import React, {Fragment} from 'react';
import Button from '@mui/material/Button';
import {getUser} from '../Redux/actions/apiCalls';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './Styles/DisplayCard.css';
const ButtonProvider = ({apiCalls: {users}, getUser}) => {
  const onClickHandler = (e) => {
    getUser(e.target.id);
  };

  return (
    <Fragment>
      {users.length > 0
        ? users.map((element, index) => {
            return (
              <Button
                id={element.id}
                key={index}
                size='small'
                onClick={(e) => onClickHandler(e)}
              >
                {index + 1}
              </Button>
            );
          })
        : ''}
    </Fragment>
  );
};

ButtonProvider.propTypes = {
  apiCalls: PropTypes.object.isRequired,
};
//This is for state
const mapStateToProps = (state) => ({
  apiCalls: state.apiCalls,
});
export default connect(mapStateToProps, {getUser})(ButtonProvider);
