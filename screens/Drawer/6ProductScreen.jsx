import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Beverages from '../Productsscreens/Beverages'; // Import the Beverages component


const ProductScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Beverages'); // Add state for tabs


  const renderModalContent = () => (
    <View style={styles.modalContent}>
      <TouchableOpacity onPress={() => {
        setIsModalVisible(false); 
        navigation.navigate('Food');}}>
        <Text style={styles.modalText}>Food</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setIsModalVisible(false); 
        navigation.navigate('Lunch');}}>
        <Text style={styles.modalText}>Lunch</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setIsModalVisible(false); 
        navigation.navigate('Pizza');}}>
        <Text style={styles.modalText}>Pizza</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setIsModalVisible(false); 
        navigation.navigate('Drinks');}}>
        <Text style={styles.modalText}>Drinks</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Products</Text>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Icon name="ellipsis-v" size={24} color="#000000" />
        </TouchableOpacity>
      </View>



      {activeTab === 'Beverages' && <Beverages navigation={navigation} />}
      {/* Conditionally render Beverages component based on activeTab */}

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalContainer}>
            {renderModalContent()}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
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
    color: '#000000',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
    paddingBottom: 8,
    marginRight: 20,
  },
  inactiveTab: {
    fontSize: 16,
    color: '#AAAAAA',
    paddingBottom: 8,
    marginRight: 20,
  },
  productList: {
    paddingTop: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  ratingContainer: {
    position: 'absolute',
    bottom: 8,
    left: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6347',
    marginBottom: -20,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  ratingText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  productCategory: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 5,
  },
  actionContainer: {
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#E0F2F1',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  buyButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
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
    color: '#000000',
  },
});

export default ProductScreen;
