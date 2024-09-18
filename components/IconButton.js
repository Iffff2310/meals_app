import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <Ionicons name={icon} size={28} color={color} /> {/* Slightly larger icon */}
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 10, // Added padding for better touch area
    borderRadius: 20, // Rounded shape for a softer design
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.6, // Slightly lower opacity on press for smoother feedback
    transform: [{ scale: 0.95 }], // Slight scaling effect for better interaction
  },
});
