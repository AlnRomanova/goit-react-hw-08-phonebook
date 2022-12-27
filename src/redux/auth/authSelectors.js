export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.user.name;

export default selectAuth =  {
  selectLoggedIn,
  selectUserName,
};
