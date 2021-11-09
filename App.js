import React from 'react';
import {View, ScrollView} from 'react-native';
import FlexBox from './FlexBox';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <FlexBox />
        <StylingReactNativeComponent />
      </ScrollView>
    </View>
  );
};

export default App;
