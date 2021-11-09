import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import macbook from './macbook.jpg';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.textHeader}>Styling Component</Text>
      <View style={styles.container}>
        <Image source={macbook} style={styles.image} />
        <Text style={styles.textPrimary}>New Macbook Pro 2021</Text>
        <Text style={styles.textNominal}>Rp. 25.000.000</Text>
        <Text style={styles.textLocation}>Jakarta Selatan</Text>
        <View style={styles.buttonPrimary}>
          <Text style={styles.textButtonPrimary}>BELI</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 8,
  },
  textHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 12,
    marginVertical: 12,
  },
  textPrimary: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  textNominal: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 14,
    color: '#F2994A',
  },
  textLocation: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  image: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  buttonPrimary: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  textButtonPrimary: {
    fontSize: 14,
    color: '#EEEEEE',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default StylingReactNativeComponent;
