import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';

const LoadingScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation for loading
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      navigation.navigate('NextScreen'); // Redirect to the next screen
    }, 3000); // Adjust the delay time as needed

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(loadingTimer);
  }, [navigation]);

  return (
    <Modal isVisible={loading} backdropOpacity={0.8} animationIn="fadeIn" animationOut="fadeOut">
      <View style={styles.modalContainer}>
        <LottieView
          source={require('../animations/animation.json')} // Replace with the correct path
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200, // Adjust the width and height as needed
    height: 200,
  },
});

export default LoadingScreen;
