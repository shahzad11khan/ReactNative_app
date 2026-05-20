import React from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity,
  SafeAreaView, Platform, StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import FloatingNav from '../components/FloatingNav';


const posts = [
  {
    id: 1,
    image: require('../../assets/images/trash_post.webp'),
    title: 'Littered trash near riverside',
    status: 'Pending',
    statusColor: 'bg-yellow-400',
    date: '12 Nov, 9:00 AM',
    points: '+5 pts',
  },
  {
    id: 2,
    image: require('../../assets/images/clean_post.webp'),
    title: 'Cleaned up Central Park zone',
    status: 'Approved',
    statusColor: 'bg-green-500',
    date: '10 Nov, 2:30 PM',
    points: '+10 pts',
  },
];

const nearby = [
  { id: 1, title: 'Civic Plaza Park', distance: '0.4 km away', type: 'Dirty', color: 'bg-red-100', dot: 'bg-red-500' },
  { id: 2, title: 'Oak Street Corner', distance: '0.9 km away', type: 'Clean', color: 'bg-green-100', dot: 'bg-green-500' },
  { id: 3, title: 'Riverside Walk', distance: '1.2 km away', type: 'Dirty', color: 'bg-red-100', dot: 'bg-red-500' },
];

export default function Home() {
  return (
    <SafeAreaView
      style={[
        tw`flex-1 bg-[#f7fafc]`,
        { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
      ]}
    >
      <StatusBar barStyle="light-content" backgroundColor="#2ea64f" />

      {/* Green Header */}
      <View style={tw`bg-[#2ea64f] px-5 pt-4 pb-8 rounded-b-[36px]`}>
        <View style={tw`flex-row items-center justify-between mb-4`}>
          <Text style={tw`text-white text-2xl font-bold`}>Home</Text>
          <TouchableOpacity style={tw`bg-white/20 p-2 rounded-full`}>
            <Ionicons name="notifications-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={tw`bg-white rounded-2xl p-4 flex-row items-center shadow-sm`}>
          <Image
            source={require('../../assets/images/alex_davis.webp')}
            style={tw`w-14 h-14 rounded-full mr-4`}
            resizeMode="cover"
          />
          <View style={tw`flex-1`}>
            <Text style={tw`text-gray-800 font-bold text-base`}>Alex Davis</Text>
            <Text style={tw`text-gray-500 text-xs`}>Clean & Earn Rewards</Text>
            <View style={tw`flex-row items-center mt-1`}>
              <View style={tw`bg-green-100 px-2 py-0.5 rounded-full flex-row items-center`}>
                <Ionicons name="star" size={11} color="#2ea64f" />
                <Text style={tw`text-green-700 text-xs font-bold ml-1`}>125 pts</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={tw`bg-[#2ea64f] px-4 py-2 rounded-xl`}>
            <Text style={tw`text-white text-xs font-bold`}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`px-5 pb-36`}>

        {/* Your Posts Section */}
        <Text style={tw`text-gray-800 font-bold text-lg mt-6 mb-3`}>Your Posts</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`-mx-1`}>
          {posts.map((post) => (
            <View key={post.id} style={tw`bg-white rounded-2xl mr-4 w-60 shadow-sm overflow-hidden`}>
              <View style={tw`relative`}>
                <Image
                  source={post.image}
                  style={tw`w-full h-36`}
                  resizeMode="cover"
                />
                <View style={tw`absolute top-2 left-2 ${post.statusColor} px-2 py-0.5 rounded-full`}>
                  <Text style={tw`text-white text-xs font-bold`}>{post.status}</Text>
                </View>
                <View style={tw`absolute top-2 right-2 bg-black/50 px-2 py-0.5 rounded-full`}>
                  <Text style={tw`text-white text-xs font-bold`}>{post.points}</Text>
                </View>
              </View>
              <View style={tw`p-3`}>
                <Text style={tw`text-gray-800 font-semibold text-sm`} numberOfLines={1}>{post.title}</Text>
                <Text style={tw`text-gray-400 text-xs mt-1`}>{post.date}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Nearby Section */}
        <Text style={tw`text-gray-800 font-bold text-lg mt-6 mb-3`}>Points Nearby You</Text>
        {nearby.map((item) => (
          <TouchableOpacity key={item.id} style={tw`bg-white rounded-2xl p-4 mb-3 flex-row items-center shadow-sm`}>
            <View style={tw`${item.color} p-3 rounded-xl mr-3`}>
              <View style={tw`${item.dot} w-3 h-3 rounded-full`} />
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`text-gray-800 font-semibold text-sm`}>{item.title}</Text>
              <Text style={tw`text-gray-400 text-xs mt-0.5`}>{item.distance}</Text>
            </View>
            <View style={tw`${item.type === 'Dirty' ? 'bg-red-100' : 'bg-green-100'} px-3 py-1 rounded-full`}>
              <Text style={tw`${item.type === 'Dirty' ? 'text-red-600' : 'text-green-600'} text-xs font-bold`}>{item.type}</Text>
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>

      <FloatingNav currentScreen="home" />
    </SafeAreaView>
  );
}
