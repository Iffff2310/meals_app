import { View, Text, StyleSheet } from 'react-native';

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Better separation between items
    padding: 10, // Slightly increased padding for a better layout
    backgroundColor: '#f8f8f8', // Light background for better contrast
    borderRadius: 8, // Rounded corners for a modern look
  },
  detailItem: {
    marginHorizontal: 8, // Increased margin for clearer separation
    fontSize: 14, // Slightly larger font for readability
    color: '#444', // Darker color for better visibility
    fontWeight: '600', // Added weight to make the text stand out
  },
});
