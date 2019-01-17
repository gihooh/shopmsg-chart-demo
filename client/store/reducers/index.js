import { combineReducers } from 'redux';

import reports from './reports';
import ui from './ui';

export default combineReducers({
  reports,
  ui
});
