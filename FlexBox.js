import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class FlexBox extends Component {
  render() {
    return (
      <View style={{padding: 12}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#95a5a6',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}>
          <View style={{backgroundColor: '#e74c3c', flex: 1, height: 20}} />
          <View style={{backgroundColor: '#f1c40f', flex: 1, height: 20}} />
          <View style={{backgroundColor: '#2ecc71', flex: 1, height: 20}} />
          <View style={{backgroundColor: '#9b59b6', flex: 1, height: 20}} />
        </View>

        <View style={{flexDirection: 'row', alignContent: 'center'}}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/37669007?v=4',
            }}
            style={{width: 50, height: 50, borderRadius: 50, marginRight: 12}}
          />
          <View style={{marginTop: 8}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Irfan Nawawi</Text>
            <Text style={{fontSize: 12}}>Mobile Developer</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
