import React from 'react';
import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 160, // slightly taller for a better visual
    borderRadius: 12, // smoother edges
    elevation: 6, // slightly higher elevation for better shadow on Android
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.3, // stronger shadow
    shadowOffset: { width: 0, height: 4 }, // more pronounced shadow offset
    shadowRadius: 10, // smoother shadow on iOS
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
    borderRadius: 12, // ensure the pressable matches the container's border radius
  },
  buttonPressed: {
    opacity: 0.7, // reduce the opacity change for a more subtle effect
  },
  innerContainer: {
    flex: 1,
    padding: 20, // increased padding for better spacing
    borderRadius: 12, // make sure the inner container also has smooth corners
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20, // larger font size for a more prominent title
    color: '#333', // slightly muted color for better readability
  },
});
