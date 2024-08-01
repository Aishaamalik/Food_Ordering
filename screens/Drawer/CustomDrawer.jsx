import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>Main Menu</Text> {/* Added Main Menu Text */}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#000',
  },
  version: {
    fontSize: 12,
    color: '#888',
  },
  menuContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#f4f4f4',
    paddingVertical: 10,
    alignItems: 'center',
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
  },
});
