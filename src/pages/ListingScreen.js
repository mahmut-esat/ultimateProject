import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listing = [
  {
    id: 1,
    title: 'Red Jacket',
    price: 100,
    image: require('../assets/red_jacket.jpg'),
  },
  {
    id: 2,
    title: 'Red Jacket',
    price: 2200,
    image: require('../assets/red_jacket.jpg'),
  },
];

function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
