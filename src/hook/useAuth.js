import { useSelector } from 'react-redux';
import { selectLoggedIn, selectIsRefreshing, selectUserName } from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUserName);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
