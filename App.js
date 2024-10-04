import * as React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Icons from expo vector icons

// Sample data for shoes
const shoes = [
  { id: '1', title: 'Nike Air Max', price: '$120', image: 'https://www.solescience.ca/wp-content/uploads/2020/06/How-to-shop-for-shoes.jpg' },
  { id: '2', title: 'Adidas UltraBoost', price: '$150', image: 'https://s.shld.net/is/image/Sears/20180427_k_dzcm_77289_vis_nav_shoes_comfort_v1-qm-op_sharpen-eq-1' },
  { id: '3', title: 'Puma Running', price: '$80', image: 'https://images-na.ssl-images-amazon.com/images/G/31/img21/shoes/XCM/Women/Header/sports-shoes._CB637087252_.gif' },
  { id: '4', title: 'Reebok Classic', price: '$100', image: 'https://ae01.alicdn.com/kf/HTB1k58VnmfD8KJjSszhq6zIJFXa9/2018-New-Arrivals-sport-shoes-woman-air-Mesh-Women-Sport-Walking-Shape-ups-shoes-Beautiful.jpg_640x640.jpg' },
  { id: '5', title: 'Vans Old Skool', price: '$70', image: 'https://m.media-amazon.com/images/G/31/img2021/Sportswear_21/SW_22/August/Coop/Coop-02._CB629962404_.gif' },
  { id: '6', title: 'New Balance 574', price: '$90', image: 'https://cdn.cliqueinc.com/posts/279488/best-spring-zara-shoes-279488-1556138641035-main.1200x0c.jpg?interlace=true&quality=70' },
];

//////////////////////////////////////////////////////
// Home Screen: Contains Search Bar, Offer, and Grid //
//////////////////////////////////////////////////////
function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput 
        style={styles.searchBar} 
        placeholder="Search for shoes..." 
      />

      {/* Offer Tagline */}
      <View style={styles.offerContainer}>
        <Text style={styles.offerText}>🔥 Exclusive 50% off on all shoes! Limited Time! 🔥</Text>
      </View>

      {/* Product Grid */}
      <FlatList
        data={shoes}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2} // Grid with 2 columns
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

//////////////////////////
// Reusable Product Card //
//////////////////////////
const ProductCard = ({ product }) => (
  <View style={styles.productItem}>
    <Image source={{ uri: product.image }} style={styles.productImage} />
    <Text style={styles.productTitle}>{product.title}</Text>
    <Text style={styles.productPrice}>{product.price}</Text>
  </View>
);

//////////////////////////////////////
// Wishlist Screen: Basic placeholder//
//////////////////////////////////////
function WishlistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageHeader}>Your Wishlist</Text>
      <Text>No items in wishlist yet!</Text>
    </View>
  );
}

//////////////////////////////////////
// Notifications Screen //
//////////////////////////////////////
function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageHeader}>Notifications</Text>
      <Text>No new notifications!</Text>
    </View>
  );
}

//////////////////////////////////////////////////////////
// Bottom Tab Navigator with icons from @expo/vector-icons //
//////////////////////////////////////////////////////////
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Wishlist') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }

            // Return icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/////////////////////////////////////////////////////
// Styles for the UI //
/////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  offerContainer: {
    backgroundColor: '#f7c6c7',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  offerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d32f2f',
    textAlign: 'center',
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  productItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  pageHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginVertical: 20,
    color: '#333',
  },
});


