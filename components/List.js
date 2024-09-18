import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8, // Slightly smoother corner
    paddingHorizontal: 12, // Increased padding for better spacing
    paddingVertical: 6, // More padding for a more balanced look
    marginVertical: 6, // Slightly larger margin for better separation
    marginHorizontal: 16, // Better horizontal spacing
    backgroundColor: '#f5c6a5', // Slightly lighter and warmer color
    shadowColor: 'black', // Added shadow for a modern look
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3, // Shadow for Android
  },
  itemText: {
    color: '#3e2b12', // A more subtle brown
    textAlign: 'center',
    fontSize: 16, // Increased font size for better readability
    fontWeight: 'bold', // Added weight for a more defined text
  },
});
