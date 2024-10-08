import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Login, RefreshData } from "../redux/slice/userSlice"
import { useNavigate } from 'react-router-dom';
import { Address } from '../types/address';
import { Cart } from '../types/user';
import { Stores } from '../types/stores';

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
        console.log('Fetched user data from hooks:', result);
  
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
          };
  
          localStorage.setItem('userSession', JSON.stringify(userSessionData));
          setSession(userSessionData);
          console.log('Session after set:', userSessionData);
  
          dispatch(Login(true));
          dispatch(RefreshData(result.data));
  
          navigate('/home');
        } else if (result.status === 404) {
          navigate('/auth/send-email')
        } else if (result.status === 403) {
          navigate('/auth/login')
        } else {
          localStorage.removeItem('userSession');
          setSession(null);
          dispatch(RefreshData({
            name: '', email: '', verifiedEmail: false, isLogin: false,
            phone: '', profileImage: '', role: 'user', address: [], carts: [], stores: []
          }));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        localStorage.removeItem('userSession');
        setSession(null);
        dispatch(RefreshData({
          name: '', email: '', verifiedEmail: false, isLogin: false,
          phone: '', profileImage: '', role: 'user', address: [], carts: [], stores: []
        }));
      } finally {
        setLoading(false);
      }
    };
  
    const userData = localStorage.getItem('userSession');
    console.log('userData from localStorage:', userData);
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        console.log('Parsed session:', parsedData);
        setSession(parsedData);
        dispatch(RefreshData(parsedData));
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
