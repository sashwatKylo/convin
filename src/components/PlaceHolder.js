import React, {Fragment} from 'react';
import Typography from '@mui/material/Typography';
import './Styles/DisplayCard.css';
const PlaceHolder = () => {
  return (
    <Fragment>
      {' '}
      <Typography
        className='container'
        sx={{fontSize: 34}}
        color='text.secondary'
        gutterBottom
      >
        Click on any button
      </Typography>
    </Fragment>
  );
};

export default PlaceHolder;
