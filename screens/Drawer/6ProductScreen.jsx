import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import Beverages from '../Productsscreens/Beverages'; 

const ProductScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Beverages');
  const isDay = useSelector(state => state.theme.isDay); 

  const renderModalContent = () => (
    <View style={styles(isDay).modalContent}>
      <TouchableOpacity onPress={() => {
        setIsModalVisible(false); 
        navigation.navigate('Food');}}>
        <Text style={styles(isDay).modalText}>Food</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setIsModalVisible(false); 
        navigation.navigate('Lunch');}}>
        <Text style={styles(isDay).modalText}>Lunch</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setIsModalVisible(false); 
        navigation.navigate('Pizza');}}>
        <Text style={styles(isDay).modalText}>Pizza</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setIsModalVisible(false); 
        navigation.navigate('Drinks');}}>
        <Text style={styles(isDay).modalText}>Drinks</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles(isDay).container}>
      <View style={styles(isDay).header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color={isDay ? "#000000" : "#FFFFFF"} />
        </TouchableOpacity>
        <Text style={styles(isDay).headerTitle}>Products</Text>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Icon name="ellipsis-v" size={24} color={isDay ? "#000000" : "#FFFFFF"} />
        </TouchableOpacity>
      </View>

      {activeTab === 'Beverages' && <Beverages navigation={navigation} />}

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity style={styles(isDay).modalOverlay} onPress={() => setIsModalVisible(false)}>
          <View style={styles(isDay).modalContainer}>
            {renderModalContent()}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = (isDay) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: isDay ? '#FFFFFF' : 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: isDay ? '#000000' : '#FFFFFF',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: isDay ? '#FFFFFF' : '#444444',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '50%',
  },
  modalContent: {
    flexDirection: 'column',
  },
  modalText: {
    fontSize: 18,
    marginVertical: 10,
    color: isDay ? '#000000' : '#FFFFFF',
  },
});

export default ProductScreen;
