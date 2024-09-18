import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

function screen01({ navigation, route }) {
  const [phone, setphone] = useState({
    image: require('../assets/vs_blue.png'),
    name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
    price: ' 1.790.000 đ',
  });

  const handPress = () => {
    navigation.navigate('screen2', params={phone : phone});
  };

  useEffect(() => {
    if(route.params?.newphone){
      setphone({...route.params?.newphone})
    }
  },[]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={phone.image} style={{ height: 370, width: 290 }} />
      </View>
      <View
        style={{ flex: 0.8, justifyContent: 'space-around', marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>{phone.name}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../assets/star.png')}
              style={{ marginRight: 6 }}
            />
            <Image
              source={require('../assets/star.png')}
              style={{ marginRight: 6 }}
            />
            <Image
              source={require('../assets/star.png')}
              style={{ marginRight: 6 }}
            />
            <Image
              source={require('../assets/star.png')}
              style={{ marginRight: 6 }}
            />
            <Image
              source={require('../assets/star.png')}
              style={{ marginRight: 6 }}
            />
          </View>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
            {phone.price}
          </Text>
          <Text
            style={{
              color: 'gray',
              marginHorizontal: 30,
              fontSize: 18,
              fontWeight: 'bold',
              textDecorationLine: 'line-through',
            }}>
            1.790.000 đ
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FA0000' }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image
            source={require('../assets/Group 1.png')}
            style={{ marginLeft: 12 }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              width: '100%',
              borderWidth: 1,
              borderRadius: 12,
            }}
            onPress={handPress}>
            <Text>4 MÀU-CHỌN MÀU</Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/Vector.png')}
            style={{ position: 'absolute', left: 300 }}
          />
        </View>
        <View style={{ flex: 0.4 }}>
          <TouchableOpacity
            style={{
              borderRadius: 12,
              height: 50,
              backgroundColor: '#CA1536',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 28,
                fontWeight: 'bold',
                color: 'white',
              }}>
              CHỌN MUA
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default screen01;
