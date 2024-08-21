// RewardsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

const rewardsData = [
  { id: '1', title: 'Extra Deluxe Gayo Coffee Packages', date: 'June 18, 2020', time: '4:00 AM', points: '+250' },
  { id: '2', title: 'Buy 10 Brewed Coffee Packages', date: 'June 18, 2020', time: '4:00 AM', points: '+100' },
  { id: '3', title: 'Ice Coffee Morning', date: 'June 18, 2020', time: '4:00 AM', points: '+250' },
  { id: '4', title: 'Hot Blend Coffee with Morning Cakes', date: 'June 18, 2020', time: '4:00 AM', points: '+250' },
];

const RewardsScreen = ({ navigation }) => {
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState('Newest');
  const isDay = useSelector(state => state.theme.isDay);

  const handleSortOptionSelect = (option) => {
    setSortOption(option);
    setSortModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.rewardItem, { borderColor: isDay ? '#ddd' : '#444' }]}>
      <View style={styles.rewardInfo}>
        <Text style={[styles.rewardTitle, { color: isDay ? '#000' : '#FFF' }]}>{item.title}</Text>
        <Text style={[styles.rewardDate, { color: isDay ? '#757575' : '#B9B9B9' }]}>
          {item.date} | {item.time}
        </Text>
      </View>
      <Text style={[styles.rewardPoints, { color: isDay ? '#4CAF50' : '#66BB6A' }]}>{item.points} Pts</Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#FFFFFF' : '#121212' }]}>
      <View style={[styles.header, { backgroundColor: isDay ? '#F5F5F5' : '#333333' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={isDay ? '#000' : '#FFF'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? '#000' : '#FFF' }]}>Rewards</Text>
      </View>

      <View style={[styles.pointsCard, { backgroundColor: isDay ? '#4CAF50' : '#388E3C' }]}>
        <Text style={styles.pointsText}>My Points</Text>
        <Text style={styles.pointsValue}>87,550</Text>
        <TouchableOpacity style={[styles.redeemButton, { backgroundColor: isDay ? '#81C784' : '#66BB6A' }]}>
          <Text style={styles.redeemButtonText}>Redeem Gift</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.historyHeader}>
        <Text style={[styles.historyTitle, { color: isDay ? '#000' : '#FFF' }]}>History Reward</Text>
        <TouchableOpacity style={styles.sortButton} onPress={() => setSortModalVisible(true)}>
          <Text style={[styles.sortText, { color: isDay ? '#000' : '#FFF' }]}>{sortOption}</Text>
          <Icon name="arrow-drop-down" size={24} color={isDay ? '#000' : '#FFF'} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={rewardsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.rewardsList}
      />

      {/* Sort Modal */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={sortModalVisible}
        onRequestClose={() => setSortModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setSortModalVisible(false)}>
          <View style={[styles.modalContainer, { backgroundColor: isDay ? '#FFFFFF' : '#333333' }]}>
            <TouchableOpacity onPress={() => handleSortOptionSelect('Newest')} style={styles.modalOption}>
              <Text style={[styles.modalOptionText, { color: isDay ? '#000' : '#FFF' }]}>Newest</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSortOptionSelect('Oldest')} style={styles.modalOption}>
              <Text style={[styles.modalOptionText, { color: isDay ? '#000' : '#FFF' }]}>Oldest</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
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
  },
  backButton: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#E0F2F1',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pointsCard: {
    borderRadius: 10,
    margin: 20,
    padding: 20,
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  pointsValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 10,
  },
  redeemButton: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  redeemButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 16,
  },
  rewardsList: {
    paddingHorizontal: 20,
  },
  rewardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  rewardInfo: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rewardDate: {
    fontSize: 14,
  },
  rewardPoints: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 200,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  modalOption: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalOptionText: {
    fontSize: 16,
  },
});

export default RewardsScreen;
