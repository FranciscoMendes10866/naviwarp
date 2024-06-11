import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}
