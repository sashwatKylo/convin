import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useEffect, Fragment} from 'react';
import {getUser} from '../Redux/actions/apiCalls';
import './Styles/DisplayCard.css';
import ButtonProvider from './ButtonProvider';
import PlaceHolder from './PlaceHolder';
import Spinner from './Spinner';
const DisplayCard = ({apiCalls: {users, user}}) => {
  useEffect(() => {
    console.log(user);
  }, [users, user]);

  return (
    <Fragment>
      {Object.keys(user).length === 0 ? (
        <PlaceHolder />
      ) : (
        <Card
          sx={{backgroundColor: '#E7F1FB'}}
          variant='outlined'
          className='container'
        >
          <CardContent>
            {user.avatar ? (
              <img className='image' src={user.avatar} alt='avatar' />
            ) : (
              <Spinner />
            )}
            <Typography sx={{fontSize: 24}} color='text.secondary' gutterBottom>
              {user.first_name ? user.first_name : ''}{' '}
              {user.last_name ? user.last_name : ''} {user.id ? user.id : ''}
            </Typography>
            <Typography variant='h6' component='div'>
              {user.email ? user.email : ''}
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Button Provider */}
      <CardActions className='buttonCount'>
        <ButtonProvider users={users} />
      </CardActions>
    </Fragment>
  );
};
DisplayCard.propTypes = {
  apiCalls: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  apiCalls: state.apiCalls,
});
export default connect(mapStateToProps, {getUser})(DisplayCard);
