import { useEffect, useState } from 'react';
import { Address, Cart, Stores } from '../types';
import { useDispatch } from 'react-redux';
import { Login, Register, VerifyEmail } from "../redux/slice/userSlice"
import { useNavigate } from 'react-router-dom';

type UserSession = {
  name: string;
  email: string;
  verifiedEmail: boolean;
  isLogin: boolean;
  phone: string;
  profileImage: string;
  role: string;
  address: Array<Address>;
  carts: Array<Cart>;
  stores: Array<Stores>;
};

function useUserSession() {
  const [session, setSession] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState(true); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/auth/user', {
          method: 'GET',
          credentials: 'include',
        });
        const result = await response.json();
        console.log('Fetched user data:', result);

        if (result.status === true) {
          const userSessionData = {
            isLogin: true,
            verifiedEmail: true,
            name: result.data.name,
            email: result.data.email,
            phone: result.data.phone,
            profileImage: result.data.profileImage,
            role: result.data.role,
            address: result.data.address,
            carts: result.data.carts,
            stores: result.data.stores,
          }

          localStorage.setItem('userSession', JSON.stringify(userSessionData));
          setSession(userSessionData);
          
          dispatch(Register({ name: result.data.name, email: result.data.email }));
          dispatch(Login({ ...result.data, isLogin: true }));
          dispatch(VerifyEmail(result.data.verifiedEmail));

          navigate('/home');
        } else {
          localStorage.removeItem('userSession');
          setSession(null);
          
          dispatch(Login({
            name: '', email: '', verifiedEmail: false, isLogin: false,
            phone: '', profileImage: '', role: 'user', address: [], carts: [], stores: []
          }));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        localStorage.removeItem('userSession');
        setSession(null);

        // Reset Redux store
        dispatch(Login({
          name: '', email: '', verifiedEmail: false, isLogin: false,
          phone: '', profileImage: '', role: 'user', address: [], carts: [], stores: []
        }));
      } finally {
        setLoading(false);
      }
    };

    const userData = localStorage.getItem('userSession');
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        setSession(parsedData);
        console.log('Session from localStorage:', parsedData);
      } catch (error) {
        console.error('Failed to parse userData:', error);
      }
      setLoading(false);
    } else {
      fetchUserData(); 
    }
  }, [dispatch, navigate]);

  if (loading) {
    return { session: null, loading: true }; 
  }

  return { session, loading: false };
}

export default useUserSession;
