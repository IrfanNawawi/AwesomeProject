import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

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

export default SampleComponent;
