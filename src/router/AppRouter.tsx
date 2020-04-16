import React, { useEffect } from 'react';
import {
  RouteComponentProps,
  Router,
  useLocation,
  useNavigate,
} from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';
import { SIGN_IN, PERSONNEL } from 'configs/paths';

import { requestProfile } from 'redux/profile/thunks';
import {
  isAuthChecked as isAuthCheckedSelector,
  getProfileInfo,
} from 'redux/profile/selectors';

import { SignIn } from 'pages/signIn/signIn';
import { Main } from 'pages/main/main';

import { LoadingScreen } from 'components/LoadingScreen';

const AppRouter: React.FC<RouteComponentProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const profileInfo = useSelector(getProfileInfo);
  const isAuthChecked = useSelector(isAuthCheckedSelector);
  const isSignInPage = location.pathname === SIGN_IN;

  useEffect(() => {
    if (!isAuthChecked) {
      dispatch(requestProfile());
    }
  }, [dispatch, isAuthChecked]);

  if (!isAuthChecked) {
    return <LoadingScreen />;
  }

  if (!isSignInPage && isAuthChecked && !profileInfo) {
    navigate(SIGN_IN);
    return null;
  }

  if (isSignInPage && isAuthChecked && profileInfo) {
    navigate(PERSONNEL);
    return null;
  }

  return (
    <Router>
      <SignIn path={SIGN_IN} />
      <Main path="/*" />
    </Router>
  );
};

export { AppRouter };
