import React from 'react';

import '~/config/StatusBarConfig';
import '~/config/ReactrotronConfig';

import store from './store';
import { Provider } from 'react-redux';

import { setNavigator } from '~/services/navigation';
import Routes from '~/routes';

export default function App() {
  return (
    <Provider store={store}>
      <Routes ref={setNavigator} />
    </Provider>
  );
}
