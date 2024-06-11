import React, {useCallback, useMemo} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  type DrawerContentComponentProps,
  type DrawerScreenProps,
  type DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {HomeScreen, NotificationsScreen} from '../screens';
import NavigatorHeader from './components/Header';

export type Routes = {
  Home: undefined;
  Notifications: undefined;
};

export type RoutePaths = keyof Routes;

export type ScreenProps<Path extends RoutePaths> = DrawerScreenProps<
  Routes,
  Path
>;

const Drawer = createDrawerNavigator<Routes>();

const DRAWER_ROUTES: Array<RoutePaths> = ['Home', 'Notifications'];

export function Router() {
  const {top: topInset} = useSafeAreaInsets();

  const drawerContent = useCallback(
    (props: DrawerContentComponentProps) => {
      // const {routeNames, index} = props.state;
      // const focusedRoute = routeNames[index];

      const rootStyles = {
        flex: 1,
        paddingTop: topInset,
      } satisfies StyleProp<ViewStyle>;

      return (
        <DrawerContentScrollView {...props} style={rootStyles}>
          {DRAWER_ROUTES.map((path, idx) => (
            <View
              key={`${path}-#${idx}`}
              style={styles.drawerItem}
              collapsable={false}>
              <Pressable
                style={styles.content}
                onPress={evt => {
                  evt.stopPropagation();
                  props.navigation.navigate(path);
                }}>
                <Text>{path}</Text>
              </Pressable>
            </View>
          ))}
        </DrawerContentScrollView>
      );
    },
    [topInset],
  );

  const screenOptions = useMemo(
    () =>
      ({
        header: props => <NavigatorHeader {...props} topInset={topInset} />,
      } satisfies DrawerNavigationOptions),
    [topInset],
  );

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={drawerContent}
        screenOptions={screenOptions}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerItem: {
    marginHorizontal: 10,
    marginVertical: 4,
    overflow: 'hidden',
    borderRadius: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});
