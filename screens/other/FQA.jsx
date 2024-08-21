
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const faqData = [
  {
    id: '1',
    question: 'What is included with my purchase?',
    answer: 'Package have the HTML files, SCSS files, CSS files, JS files, Well Define Documentation, Fonts and Icons, Responsive Designs, Image Assets, Customization Options, and many more.',
  },
  {
    id: '2',
    question: 'What features does Ombe offer?',
    answer: 'Ombe offers a wide range of features including responsive design, customizable layouts, product catalog pages, shopping cart functionality, checkout pages, user account management, and more.',
  },
  {
    id: '3',
    question: "Can I customize the template's design?",
    answer: 'Yes, you can customize the template’s design using the provided options.',
  },
  {
    id: '4',
    question: 'Is the template SEO-friendly?',
    answer: 'Yes, the template is designed to be SEO-friendly.',
  },
  {
    id: '5',
    question: 'Are there pre-designed page templates included?',
    answer: 'Yes, there are several pre-designed page templates included.',
  },
  {
    id: '6',
    question: 'Does Ombe provide customer support?',
    answer: 'Yes, Ombe provides customer support for all users.',
  },
  {
    id: '7',
    question: 'Is coding knowledge required to use Ombe?',
    answer: 'No, coding knowledge is not required to use Ombe.',
  },
  {
    id: '8',
    question: 'How can I get started with Ombe?',
    answer: 'You can get started with Ombe by following the documentation provided with your purchase.',
  },
];

const FAQScreen = () => {
  const [expandedId, setExpandedId] = useState(null);
  const isDay = useSelector(state => state.theme.isDay);
  const navigation = useNavigation(); 

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, { borderColor: isDay ? '#E0E0E0' : '#444444' }]}>
      <TouchableOpacity 
        style={[styles.questionContainer, { backgroundColor: isDay ? 'black' : '#555555' }]} 
        onPress={() => toggleExpand(item.id)}
      >
        <Text style={[styles.questionText, { color: isDay ? 'white' : 'lightgray' }]}>
          {item.question}
        </Text>
        <Icon name={expandedId === item.id ? 'chevron-up' : 'chevron-down'} size={24} color={isDay ? 'white' : 'lightgray'} />
      </TouchableOpacity>
      {expandedId === item.id && (
        <View style={[styles.answerContainer, { backgroundColor: isDay ? 'white' : '#333333' }]}>
          <Text style={[styles.answerText, { color: isDay ? 'gray' : 'lightgray' }]}>
            {item.answer}
          </Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDay ? 'white' : '#222222' }]}>
      <View style={[styles.header, { borderBottomColor: isDay ? '#E0E0E0' : '#444444' }]}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Icon name="arrow-left" size={24} color={isDay ? 'black' : 'white'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? 'black' : 'white' }]}>
          Questions & Answers
        </Text>
        <Icon name="menu" size={24} color={isDay ? 'black' : 'white'} />
      </View>
      <FlatList
        data={faqData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    margin: 8,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  answerContainer: {
    padding: 16,
  },
  answerText: {
    fontSize: 14,
  },
});

export default FAQScreen;
