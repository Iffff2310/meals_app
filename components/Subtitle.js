import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    paddingVertical: 8, // Increased padding for better spacing
    marginHorizontal: 16, // Slightly increased horizontal margin
    marginVertical: 8, // Larger vertical margin for separation
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    width: '80%', // Reduced width to center-align the subtitle with space on the sides
    alignSelf: 'center', // Center-align the subtitle
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 20, // Slightly larger font for emphasis
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
