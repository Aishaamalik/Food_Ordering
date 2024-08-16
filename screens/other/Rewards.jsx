import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const rewardsData = [
  { id: '1', title: 'Extra Deluxe Gayo Coffee Packages', date: 'June 18, 2020', time: '4:00 AM', points: '+250' },
  { id: '2', title: 'Buy 10 Brewed Coffee Packages', date: 'June 18, 2020', time: '4:00 AM', points: '+100' },
  { id: '3', title: 'Ice Coffee Morning', date: 'June 18, 2020', time: '4:00 AM', points: '+250' },
  { id: '4', title: 'Hot Blend Coffee with Morning Cakes', date: 'June 18, 2020', time: '4:00 AM', points: '+250' },
];

const RewardsScreen = ({ navigation }) => {
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState('Newest');
  
  const handleSortOptionSelect = (option) => {
    setSortOption(option);
    setSortModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.rewardItem}>
      <View style={styles.rewardInfo}>
        <Text style={styles.rewardTitle}>{item.title}</Text>
        <Text style={styles.rewardDate}>{item.date} | {item.time}</Text>
      </View>
      <Text style={styles.rewardPoints}>{item.points} Pts</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rewards</Text>
      </View>

      <View style={styles.pointsCard}>
        <Text style={styles.pointsText}>My Points</Text>
        <Text style={styles.pointsValue}>87,550</Text>
        <TouchableOpacity style={styles.redeemButton}>
          <Text style={styles.redeemButtonText}>Redeem Gift</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>History Reward</Text>
        <TouchableOpacity style={styles.sortButton} onPress={() => setSortModalVisible(true)}>
          <Text style={styles.sortText}>{sortOption}</Text>
          <Icon name="arrow-drop-down" size={24} color="#000" />
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
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => handleSortOptionSelect('Newest')} style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Newest</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSortOptionSelect('Oldest')} style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Oldest</Text>
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
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderColor: '#ddd',
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
    color: '#000',
  },
  pointsCard: {
    backgroundColor: '#4CAF50',
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
    backgroundColor: '#81C784',
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
    color: '#000',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 16,
    color: '#000',
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
    borderColor: '#ddd',
  },
  rewardInfo: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  rewardDate: {
    fontSize: 14,
    color: '#757575',
  },
  rewardPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 200,
    backgroundColor: '#FFFFFF',
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
    color: '#000',
  },
});

export default RewardsScreen;
