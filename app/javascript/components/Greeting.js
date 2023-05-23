import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetingReducer';

const Greeting = () => {
  const greet = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Random Greeting Generator: </h1>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>{greet}</h2>
    </>
  );
};

export default Greeting;
