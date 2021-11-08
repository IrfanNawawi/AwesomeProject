import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import macbook from './macbook.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
};

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

const SampleComponent = () => {
  return (
    <View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#3498db',
          borderWidth: 1,
          borderColor: '#9b59b6',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View style={{width: 80, height: 80, backgroundColor: '#3498db'}}></View>
      <Text>Irfan</Text>
      <LastName />
      <Text>Ainun</Text>
      <Text>Zahwa</Text>
      <Avatar />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Animal />
    </View>
  );
};

const LastName = () => {
  return <Text>Nawawi Ganteng banget</Text>;
};

const Avatar = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Animal extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text>Ini macan</Text>
      </View>
    );
  }
}

export default App;
