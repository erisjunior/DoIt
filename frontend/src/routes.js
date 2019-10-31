import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as Pages from '~/pages';

const createRoutes = () =>
  createAppContainer(
    createStackNavigator(
      {
        ...Pages,
      },
      {
        initialRouteName: 'Home',
        transitionConfig: () => ({
          transitionSpec: {
            duration: 0,
          },
        }),
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        },
      },
    ),
  );

const Routes = createRoutes();
export default Routes;
