import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NextScreen = () => {
  const navigation = useNavigation();
  const [mails, setMails] = useState(['Mail1', 'Mail2', 'Mail3', 'Mail4', 'Mail5']);

  const handleMailPress = (mailId) => {
    // Navigate to MailDetailsScreen with the mailId
    navigation.navigate('MailDetailsScreen', { mailId });
  };  

  const addMail = () => {
    const newMail = `Mail${mails.length + 1}`;
    setMails([...mails, newMail]);
  };

  const removeMail = () => {
    if (mails.length > 0) {
      const updatedMails = [...mails];
      updatedMails.pop();  // Remove the last mail
      setMails(updatedMails);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>

      {/* Display existing mail boxes */}
      {mails.map((mail) => (
        <TouchableOpacity
          key={mail}
          style={styles.mailBox}
          onPress={() => handleMailPress(mail)}
        >
          <Text style={styles.mailText}>{mail}</Text>
        </TouchableOpacity>
      ))}

      {/* Circular button with plus symbol */}
      <TouchableOpacity style={styles.addButton} onPress={addMail}>
        <Icon name="plus" size={30} color="white" />
      </TouchableOpacity>

      {/* Circular button with minus symbol */}
      <TouchableOpacity style={styles.removeButton} onPress={removeMail}>
        <Icon name="minus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mailBox: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  mailText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 60,
    right: 30,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 60,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    position: 'absolute',
    bottom: 60,
    left: 30,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 60,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NextScreen;
