import React, {type PropsWithChildren} from 'react';
import {Pressable, View, StyleSheet, Text} from 'react-native';
import type {DrawerHeaderProps} from '@react-navigation/drawer';
import {Menu} from 'lucide-react-native';

function HeaderItem(props: PropsWithChildren) {
  return <View style={styles.headerWrapper}>{props.children}</View>;
}

type NavigatorHeaderProps = {
  topInset: number;
} & DrawerHeaderProps;

export default function NavigatorHeader(props: NavigatorHeaderProps) {
  const {topInset, navigation} = props;

  return (
    <View style={{...styles.wrapper, paddingTop: topInset}} collapsable={false}>
      <HeaderItem>
        <Pressable
          onPress={evt => {
            evt.stopPropagation();
            navigation.openDrawer();
          }}>
          <Menu size={30} color="black" />
        </Pressable>
      </HeaderItem>

      <HeaderItem>
        <Text>{props.route.name}</Text>
      </HeaderItem>

      <HeaderItem />
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    width: 80,
    maxWidth: 80,
    alignItems: 'center',
  },
  wrapper: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
});
