import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/red_jacket.jpg')}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>red jacket</AppText>
        <AppText style={styles.price}>100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/ssssssss.jpg')}
            title="Mahmut Esat"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});
