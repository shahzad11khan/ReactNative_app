import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

export default function FloatingNav({ currentScreen }) {
  const router = useRouter();

  return (
    <View style={tw`absolute bottom-6 left-6 right-6 bg-white rounded-full h-18 flex-row items-center justify-around px-4 shadow-2xl border border-gray-100`}>
      {/* Home Tab */}
      <TouchableOpacity 
        style={tw`items-center justify-center w-12 h-12 rounded-full ${currentScreen === 'home' ? 'bg-[#2ea64f]/10' : ''}`}
        onPress={() => router.replace('/home')}
      >
        <Ionicons name="grid" size={24} color={currentScreen === 'home' ? '#2ea64f' : '#a0aec0'} />
      </TouchableOpacity>

      {/* Add Spot Tab (Center Diamond) */}
      <TouchableOpacity 
        style={tw`items-center justify-center bg-[#2ea64f] w-14 h-14 rounded-2xl rotate-45 -mt-6 shadow-lg`}
        onPress={() => alert('Post Spot Clicked! You can capture a new report.')}
      >
        <View style={tw`-rotate-45`}>
          <Ionicons name="add" size={30} color="white" />
        </View>
      </TouchableOpacity>

      {/* Map Tab */}
      <TouchableOpacity 
        style={tw`items-center justify-center w-12 h-12 rounded-full ${currentScreen === 'map' ? 'bg-[#2ea64f]/10' : ''}`}
        onPress={() => router.replace('/map')}
      >
        <Ionicons name="map" size={24} color={currentScreen === 'map' ? '#2ea64f' : '#a0aec0'} />
      </TouchableOpacity>
    </View>
  );
}
