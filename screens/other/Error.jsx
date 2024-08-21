import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

const ErrorScreen = ({ navigation }) => {
  const isDay = useSelector(state => state.theme.isDay);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#FFFFFF' : '#333333' }]}>
      <View style={[styles.header, { backgroundColor: isDay ? '#F5F5F5' : '#444444' }]}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={[styles.backButton, { backgroundColor: isDay ? '#E0F2F1' : '#555555' }]}>
          <Icon name="arrow-back" size={24} color={isDay ? '#000' : '#FFF'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? '#000' : '#FFF' }]}>
          Error
        </Text>
      </View>

      <View style={styles.content}>
        <Icon name="error-outline" size={100} color={isDay ? '#4CAF50' : '#FF5722'} />
        <Text style={[styles.errorTitle, { color: isDay ? '#4CAF50' : '#FF5722' }]}>
          Sorry
        </Text>
        <Text style={[styles.errorMessage, { color: isDay ? '#757575' : '#CCCCCC' }]}>
          Requested content not found.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  backButton: {
    padding: 5,
    borderRadius: 20,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  errorMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ErrorScreen;
