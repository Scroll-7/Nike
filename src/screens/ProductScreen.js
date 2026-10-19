// Écran d'affichage du catalogue de produits Nike
import { FlatList, Image, StyleSheet, View } from 'react-native';
import products from '../data/products';

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        key={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});