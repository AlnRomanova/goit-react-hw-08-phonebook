import { useSelector } from 'react-redux';
import { selectLoggedIn, selectUser, selectIsRefreshing } from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
