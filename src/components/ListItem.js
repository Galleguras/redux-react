import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 18,
  },
  strike: { textShadowColor:'red', textDecorationLine: 'line-through', textDecorationStyle: 'solid' },
});
export default ({ desc, onPress, completed }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {completed ? (
        <Text style={[styles.text, styles.strike]}></Text>
      ) : (
        <Text style={styles.text}>{desc}</Text>
      )}
    </TouchableOpacity>
  );
};
