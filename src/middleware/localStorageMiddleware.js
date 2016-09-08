import { SIGNIN_USER_SUCCESS, SIGNOUT_USER } from '../../src/constants/authConst';

export default function ({ dispatch }) {
  return next => action => {
    switch (action.type) {
      case SIGNIN_USER_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        break;
      case SIGNOUT_USER:
        localStorage.removeItem('token');
        break;
    }
    next(action);
  };
}