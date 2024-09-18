import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { addFavorite, removeFavorite } from '../store/favorites';

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favoriteMealIds = useSelector((state) => state.favorites.ids);
  const isFavorite = favoriteMealIds.includes(id);

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }

  const toggleFavoriteHandler = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ id }));
    } else {
      dispatch(addFavorite({ id }));
    }
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
        accessibilityLabel={`View details for ${title}`}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            <Pressable onPress={toggleFavoriteHandler} style={styles.favoriteButton}>
              {isFavorite ? (
                <Ionicons name="heart" size={22} color="red" />
              ) : (
                <Ionicons name="heart-outline" size={22} color="black" />
              )}
            </Pressable>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 12, // Slightly increased border radius for smoother edges
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 5, // Slightly higher elevation for a better shadow
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10, // Larger shadow radius for iOS
  },
  buttonPressed: {
    opacity: 0.8, // Subtler pressed effect
  },
  innerContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220, // Increased image height for better visibility
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20, // Slightly larger font size for emphasis
    marginVertical: 10, // Increased vertical margin
    marginHorizontal: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // More space between items
    paddingHorizontal: 16, // Added padding for better layout
    paddingVertical: 10,
  },
  detailItem: {
    marginHorizontal: 8, // More spacing between detail items
    fontSize: 14, // Slightly larger font size for better readability
    fontWeight: '500', // Added weight for detail items
  },
  favoriteButton: {
    padding: 6, // Added padding around the favorite icon for better touchability
  },
});
