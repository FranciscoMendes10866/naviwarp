import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import type {ScreenProps} from './navigation';

export function HomeScreen(props: ScreenProps<'Home'>) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Button
        onPress={evt => {
          evt.stopPropagation();
          navigation.navigate('Notifications');
        }}
        title="Go to notifications"
      />
    </View>
  );
}

export function NotificationsScreen(props: ScreenProps<'Notifications'>) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Button
        onPress={evt => {
          evt.stopPropagation();
          navigation.navigate('Home');
        }}
        title="Go back home"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
