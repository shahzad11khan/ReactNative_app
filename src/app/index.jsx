import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import tw from 'twrnc';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/welcome');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Image
        source={require('../../assets/images/logo.webp')}
        style={tw`w-64 h-64`}
        resizeMode="contain"
      />
    </View>
  );
}
