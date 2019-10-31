import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  createUser: ['user'],
});

export const UserTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  creatingUser: {
    data: {},
    loading: false,
  },
});

const onCreateUser = state =>
  state.creatingUser.merge({
    loading: true,
  });

export const UserReducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_USER]: onCreateUser,
});
