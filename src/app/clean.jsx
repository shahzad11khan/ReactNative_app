import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import tw from 'twrnc';

export default function Clean() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white pt-${Platform.OS === 'android' ? '10' : '0'}`}>
      <View style={tw`flex-1`}>
        <View style={tw`relative w-full h-[55%]`}>
            <Image
                source={require('../../assets/images/clean_it.webp')}
                style={tw`w-full h-full rounded-b-3xl`}
                resizeMode="cover"
            />
            <View style={tw`absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm`}>
                <Text style={tw`text-green-600 font-bold text-xs tracking-widest`}>EARN POINTS</Text>
            </View>
        </View>
        
        <View style={tw`flex-1 px-6 pt-8 pb-10 justify-between`}>
            <View>
                <Text style={tw`text-green-700 text-3xl font-bold mb-4`}>
                Clean It. Earn Points.
                </Text>
                <Text style={tw`text-gray-600 text-base leading-relaxed`}>
                Every waste report earns you 5 points. Clean a spot? Earn 10 more. Redeem points for real rewards and vouchers.
                </Text>
            </View>

            <TouchableOpacity
                style={tw`bg-green-700 py-4 rounded-full flex-row justify-center items-center w-full shadow-lg`}
                onPress={() => {
                  router.push('/signup');
                }}
            >
                <Text style={tw`text-white text-lg font-bold mr-2`}>Get Started</Text>
                <Text style={tw`text-white text-xl font-bold`}>→</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
