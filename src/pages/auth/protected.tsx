import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { Login, RefreshData, Register, VerifyEmail } from '../../redux/slice/userSlice';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.user.data.isLogin);
  const [localLoginStatus, setLocalLoginStatus] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      const userSession = localStorage.getItem('userSession');
      if (userSession) {
        try {
          const parsedSession = JSON.parse(userSession);
          if (parsedSession.isLogin) {
            setLocalLoginStatus(true);
            dispatch(Register({ name: parsedSession.name, email: parsedSession.email }));
            dispatch(RefreshData(parsedSession))
            dispatch(Login(true));
            dispatch(VerifyEmail(parsedSession.verifiedEmail));
          } else {
            setLocalLoginStatus(false);
          }
        } catch (error) {
          console.error('Failed to parse user session from localStorage:', error);
          setLocalLoginStatus(false);
        }
      } else {
        setLocalLoginStatus(false);
      }
    }
  }, [isAuthenticated, dispatch]);

  if (!isAuthenticated && localLoginStatus === false) {
    return <Navigate to="/auth/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
