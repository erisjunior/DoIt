import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import reactrotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.7' })
    .setAsyncStorageHandler(AsyncStorage)
    .configure({ name: 'VondME' })
    .useReactNative({
      networking: {
        ignoreUrls: /symbolicate|codepush/,
      },
    })
    .use(reactotronRedux())
    .use(reactrotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
