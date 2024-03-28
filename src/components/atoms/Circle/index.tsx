import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Circle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1}>
        <View style={styles.circle2}>
          <TouchableOpacity>
            <Text style={styles.text}>{'Add\nPhoto'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle1: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 110,
    border: 1,
    borderColor: '#8D92A3',
    borderWidth: 3.5,
    borderRadius: 180,
    borderStyle: 'dashed',
  },
  circle2: {
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    border: 1,
    borderRadius: 180,
  },
  text: {
    fontFamily: 'poppins',
    fontSize: 14,
    textAlign: 'center',
  },
});
