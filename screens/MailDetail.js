import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MailDetailsScreen = () => {
  const navigation = useNavigation();
  const [mails, setMails] = useState([
    { id: 'Mail1', subject: 'Subject 1', sendTo: 'john.doe@example.com', content: 'Content 1' },
  ]);

  const handleMailPress = (mailId) => {
    // Navigate to MailDetailsScreen with the mailId
    navigation.navigate('NextScreen', { mailId });
  };

  const replyMail = (mailId) => {
    // Save the email
    saveEmail(mailId);
  };

  const replyAllMail = (mailId) => {
    // Save the email
    saveEmail(mailId);
  };

  const forwardMail = (mailId) => {
    // Save the email
    saveEmail(mailId);
  };

  const updateSubject = (mailId, newSubject) => {
    const updatedMails = mails.map((mail) =>
      mail.id === mailId ? { ...mail, subject: newSubject } : mail
    );
    setMails(updatedMails);
  };

  const updateSendTo = (mailId, newSendTo) => {
    const updatedMails = mails.map((mail) =>
      mail.id === mailId ? { ...mail, sendTo: newSendTo } : mail
    );
    setMails(updatedMails);
  };

  const updateContent = (mailId, newContent) => {
    const updatedMails = mails.map((mail) =>
      mail.id === mailId ? { ...mail, content: newContent } : mail
    );
    setMails(updatedMails);
  };

  const saveEmail = (mailId) => {
    const savedMail = mails.find((mail) => mail.id === mailId);
    // Save the email logic goes here (e.g., store it in AsyncStorage or send it to a server)
    console.log('Email saved:', savedMail);
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>

      {/* Display existing mail boxes */}
      {mails.map((mail) => (
        <TouchableOpacity
          key={mail.id}
          style={styles.mailBox}
          onPress={() => handleMailPress(mail.id)}
        >
          <TextInput
            style={styles.mailSubject}
            value={mail.subject}
            placeholder="Subject"
            onChangeText={(newSubject) => updateSubject(mail.id, newSubject)}
          />
          <TextInput
            style={styles.mailSendTo}
            value={mail.sendTo}
            placeholder="Email"
            onChangeText={(newSendTo) => updateSendTo(mail.id, newSendTo)}
          />
          <TextInput
            style={styles.mailContent}
            multiline
            value={mail.content}
            placeholder="Write your content here..."
            onChangeText={(newContent) => updateContent(mail.id, newContent)}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.replyButton}
              onPress={() => {
                replyMail(mail.id);
                navigation.navigate('NextScreen', { updatedMail: mail });
              }}
            >
              <Text style={styles.buttonText}>Reply</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.replyAllButton}
              onPress={() => {
                replyAllMail(mail.id);
                navigation.navigate('NextScreen', { updatedMail: mail });
              }}
            >
              <Text style={styles.buttonText}>Reply All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forwardButton}
              onPress={() => {
                forwardMail(mail.id);
                navigation.navigate('NextScreen', { updatedMail: mail });
              }}
            >
              <Text style={styles.buttonText}>Forward</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
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
  mailSubject: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: 5,
  },
  mailSendTo: {
    fontSize: 16,
    color: 'gray',
    width: '100%',
    marginBottom: 5,
  },
  mailContent: {
    fontSize: 16,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    minHeight: 100,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  replyButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  replyAllButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  forwardButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MailDetailsScreen;
