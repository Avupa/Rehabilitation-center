import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store/store';

function Check(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth/sugn-up'); // перенаправление, если пользователь неопределен
    } else {
      navigate('/profile'); // перенаправление, если пользователь определен
    }
  }, [user, navigate]);

  return <div />;
}

export default Check;
