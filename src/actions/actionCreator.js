import { ADD_TASK, CHANGE_FILTER, SHOW_PAGE, LOG_IN } from "../utils/constants";

export const addTask = ({ id, text, username, email, status }) => ({
  type: ADD_TASK,
  id,
  text,
  username,
  email,
  status
});

export const changeFilter = ({ activeFilter, filterValue }) => ({
  type: CHANGE_FILTER,
  activeFilter,
  filterValue
});

export const showPage = ({ activePage }) => ({
  type: SHOW_PAGE,
  activePage
});

export const logIn = ({ status }) => ({
  type: LOG_IN,
  status
})
