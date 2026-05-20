import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import tw from 'twrnc';

export default function Spot() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white pt-${Platform.OS === 'android' ? '10' : '0'}`}>
      <View style={tw`flex-1`}>
        <View style={tw`relative w-full h-[55%]`}>
            <Image
                source={require('../../assets/images/spot_it.webp')}
                style={tw`w-full h-full rounded-b-3xl`}
                resizeMode="cover"
            />
            <View style={tw`absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm`}>
                <Text style={tw`text-green-600 font-bold text-xs tracking-widest`}>SNAP IT</Text>
            </View>
        </View>
        
        <View style={tw`flex-1 px-6 pt-8 pb-10 justify-between`}>
            <View>
                <Text style={tw`text-green-700 text-3xl font-bold mb-4`}>
                Spot It. Snap It.
                </Text>
                <Text style={tw`text-gray-600 text-base leading-relaxed`}>
                See littered spots around you? Take a photo and pin it on the map. Your report alerts the community instantly.
                </Text>
            </View>

            <TouchableOpacity
                style={tw`bg-green-700 py-4 rounded-full flex-row justify-center items-center w-full shadow-lg`}
                onPress={() => router.push('/clean')}
            >
                <Text style={tw`text-white text-lg font-bold mr-2`}>Next</Text>
                <Text style={tw`text-white text-xl font-bold`}>→</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
