import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function screen02({ route, navigation }) {
  const [phone, setphone] = useState(route.params?.phone);
  function changeColorPhone(params) {
    let newphone = phone;
    newphone.image = params;
    setphone({...newphone})
  }

  function goback(params) {
    navigation.navigate('screen1', params={newphone: phone});
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#C4C4C4' }}>
      <View
        style={{ flex: 0.7, flexDirection: 'row', backgroundColor: 'white' }}>
        <Image
          source={phone.image}
          style={{ height: 140, width: 113, margin: 12 }}
        />
        <Text
          style={{
            fontSize: 17,
            margin: 10,
            fontWeight: '500',
            paddingTop: 12,
          }}>
          {phone.name}
        </Text>
      </View>
      <View style={{ flex: 2.1 }}>
        <Text style={{ fontSize: 18, fontWeight: 500, padding: 8 }}>
          Chọn một màu bên dưới:
        </Text>
        <View
          style={{
            flex: 4,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 90,
              width: 90,
              backgroundColor: '#C5F1FB',
            }}
            onPress={() => {
              changeColorPhone(require('../assets/vs_silver.png'));
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 90,
              width: 90,
              backgroundColor: '#F30D0D',
            }}
            onPress={() => {
              changeColorPhone(require('../assets/vs_red.png'));
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 90,
              width: 90,
              backgroundColor: '#000000',
            }}
            onPress={() => {
              changeColorPhone(require('../assets/vs_black.png'));
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 90,
              width: 90,
              backgroundColor: '#234896',
            }}
            onPress={() => {
              changeColorPhone(require('../assets/vs_blue.png'));
            }}></TouchableOpacity>
        </View>
        <View
          style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: '#1952E294',
              width: 340,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
            }}
            onPress={() => {
              goback();
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              XONG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default screen02;
