import React from 'react';
import { Text, View, TextInput, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');

function Register({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: 'white'
    }}>
      <ImageBackground
        style={{
          height: height / 3
        }}
        source={require('../assets/undraw_Finance_re_gnv2.png')}
      />

      <View style={{
        marginTop: hp('10'),
        paddingHorizontal: wp('10')
      }}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 20
        }}>Register to your Account</Text>
        <View style={{
          marginTop: hp('5')
        }}>
          <View>
            <TextInput style={{
              backgroundColor: '#dfe4ea',
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}
              placeholder={'username'}
              placeholderColor='#c4c3cb'
            />
          </View>
          <View style={{
            marginTop: hp('2')
          }}>
            <TextInput style={{
              backgroundColor: '#dfe4ea',
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}
              placeholder={'email'}
              placeholderColor='#c4c3cb'
            />
          </View>
          <View style={{
            marginTop: hp('2')
          }}>
            <TextInput style={{
              backgroundColor: '#dfe4ea',
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}
              placeholder={'password'}
              placeholderColor='#c4c3cb'
            />
          </View>

          <View style={{
            marginTop: hp('3')
          }}>
            <TouchableOpacity style={{
              backgroundColor: '#DC143C',
              padding: 20,
              borderRadius: 35,
              alignItems: 'center'
            }}
            >
              <Text style={{
                fontSize: 22,
                color: 'white',
                fontWeight: 'bold'
              }}>Register </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

      <View style={{
        marginTop: hp('1')
      }}>
        <Text style={{
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 15
        }}>Already have an Account? <Text style={{ color: '#DC143C', fontSize: 18 , textDecorationLine: 'underline'}} onPress={()=>{
            navigation.navigate('Login')
        }}>Login</Text>
        <Text style={{ color: 'blue', fontSize: 18 , textDecorationLine: 'underline'}} onPress={()=>{
            navigation.navigate('OtpScreen')
        }}>OTP</Text>
        
        </Text>

      </View>

    </SafeAreaView>
  )
}

export default Register;
