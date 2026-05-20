import React, { useState } from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity,
  SafeAreaView, Platform, StatusBar, TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import FloatingNav from '../components/FloatingNav';


const categories = ['All Reports', 'Dirty', 'Clean'];

const markers = [
  { id: 1, top: '28%', left: '42%', type: 'dirty', label: 'Civic Plaza' },
  { id: 2, top: '55%', left: '65%', type: 'clean', label: 'Oak St' },
  { id: 3, top: '40%', left: '20%', type: 'dirty', label: 'Riverside' },
];

export default function MapScreen() {
  const [selected, setSelected] = useState('All Reports');

  const filteredMarkers = markers.filter(m => {
    if (selected === 'All Reports') return true;
    if (selected === 'Dirty') return m.type === 'dirty';
    if (selected === 'Clean') return m.type === 'clean';
  });

  return (
    <SafeAreaView
      style={[
        tw`flex-1 bg-[#f7fafc]`,
        { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
      ]}
    >
      <StatusBar barStyle="light-content" backgroundColor="#2ea64f" />

      {/* Green Header */}
      <View style={tw`bg-[#2ea64f] px-5 pt-4 pb-4 rounded-b-[36px] z-10`}>
        <View style={tw`flex-row items-center justify-between mb-3`}>
          <Text style={tw`text-white text-2xl font-bold`}>Map</Text>
          <TouchableOpacity style={tw`bg-white/20 p-2 rounded-full`}>
            <Ionicons name="options-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={tw`bg-white rounded-2xl flex-row items-center px-4 py-2.5 mb-3`}>
          <Ionicons name="search-outline" size={18} color="#a0aec0" style={tw`mr-2`} />
          <TextInput
            placeholder="Search for locations..."
            placeholderTextColor="#a0aec0"
            style={tw`flex-1 text-gray-700 text-sm`}
          />
        </View>

        {/* Category Pills */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(cat => (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelected(cat)}
              style={tw`mr-2 px-4 py-1.5 rounded-full ${selected === cat ? 'bg-white' : 'bg-white/30'}`}
            >
              <Text style={tw`text-sm font-semibold ${selected === cat ? 'text-green-700' : 'text-white'}`}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Map Area */}
      <View style={tw`flex-1 relative`}>
        <Image
          source={require('../../assets/images/map_bg.webp')}
          style={tw`w-full h-full absolute top-0 left-0`}
          resizeMode="cover"
        />

        {/* Overlay tint */}
        <View style={tw`absolute inset-0 bg-black/10`} />

        {/* Map Markers */}
        {filteredMarkers.map(marker => (
          <View
            key={marker.id}
            style={[
              tw`absolute items-center`,
              { top: marker.top, left: marker.left },
            ]}
          >
            <View style={tw`${marker.type === 'dirty' ? 'bg-red-500' : 'bg-green-500'} w-8 h-8 rounded-full items-center justify-center shadow-lg border-2 border-white`}>
              <Ionicons
                name={marker.type === 'dirty' ? 'alert' : 'checkmark'}
                size={14}
                color="white"
              />
            </View>
            <View style={tw`bg-white px-2 py-0.5 rounded-full mt-1 shadow-sm`}>
              <Text style={tw`text-xs font-bold text-gray-700`}>{marker.label}</Text>
            </View>
          </View>
        ))}

        {/* Floating Detail Card at Bottom */}
        <View style={tw`absolute bottom-28 left-5 right-5 bg-white rounded-2xl shadow-xl overflow-hidden flex-row`}>
          <Image
            source={require('../../assets/images/civic_plaza.webp')}
            style={tw`w-24 h-24`}
            resizeMode="cover"
          />
          <View style={tw`flex-1 p-3 justify-between`}>
            <View>
              <Text style={tw`text-gray-800 font-bold text-sm`}>Civic Plaza Cleanup</Text>
              <Text style={tw`text-gray-400 text-xs mt-0.5`}>12 Nov, 9:00 AM  •  0.4 km away</Text>
              <View style={tw`flex-row items-center mt-1`}>
                <View style={tw`bg-red-100 px-2 py-0.5 rounded-full`}>
                  <Text style={tw`text-red-600 text-xs font-bold`}>Dirty Spot</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={tw`bg-[#2ea64f] py-1.5 rounded-xl items-center mt-2`}>
              <Text style={tw`text-white text-xs font-bold`}>View Details  →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FloatingNav currentScreen="map" />
    </SafeAreaView>
  );
}
