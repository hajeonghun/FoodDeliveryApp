import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import AppInner from './AppInner';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppInner />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
