import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Platform, KeyboardAvoidingView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

export default function Login() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={tw`flex-1 bg-[#f7fafc] pt-${Platform.OS === 'android' ? '10' : '0'}`}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={tw`flex-1`}>
        <ScrollView contentContainerStyle={tw`flex-grow`} showsVerticalScrollIndicator={false}>
          
          {/* Header Card */}
          <View style={tw`bg-[#2ea64f] pt-8 pb-10 px-6 rounded-b-[40px] items-center shadow-md`}>
            <Text style={tw`text-white text-3xl font-bold mb-1 text-center`}>Welcome Back</Text>
            <Text style={tw`text-green-100 text-sm text-center font-medium`}>We are glad to see you back!</Text>
          </View>

          {/* Form & Graphic Content */}
          <View style={tw`px-6 -mt-6`}>
            <View style={tw`bg-white rounded-3xl p-6 shadow-xl items-center`}>
              
              {/* Login Illustration Graphic */}
              <View style={tw`w-full h-40 items-center justify-center mb-6`}>
                <Image
                  source={require('../../assets/images/login_illustration.webp')}
                  style={tw`w-full h-full`}
                  resizeMode="contain"
                />
              </View>

              {/* Email / Phone Input */}
              <View style={tw`w-full mb-4`}>
                <Text style={tw`text-gray-500 font-bold text-xs tracking-wider mb-2`}>EMAIL OR PHONE NUMBER</Text>
                <View style={tw`flex-row items-center bg-[#f7fafc] rounded-xl px-4 py-3 border border-gray-150`}>
                  <TextInput
                    style={tw`flex-1 text-gray-800 text-sm`}
                    placeholder="yourname@domain.com"
                    placeholderTextColor="#a0aec0"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={emailOrPhone}
                    onChangeText={setEmailOrPhone}
                  />
                </View>
              </View>

              {/* Password Input with Forgot Password link */}
              <View style={tw`w-full mb-2`}>
                <Text style={tw`text-gray-500 font-bold text-xs tracking-wider mb-2`}>PASSWORD</Text>
                <View style={tw`flex-row items-center bg-[#f7fafc] rounded-xl px-4 py-3 border border-gray-150`}>
                  <TextInput
                    style={tw`flex-1 text-gray-800 text-sm`}
                    placeholder="••••••••"
                    placeholderTextColor="#a0aec0"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color="#a0aec0" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Forgot Password Link */}
              <TouchableOpacity style={tw`self-end mb-6`}>
                <Text style={tw`text-[#2ea64f] font-bold text-xs`}>Forgot Password?</Text>
              </TouchableOpacity>

              {/* Login Button */}
              <TouchableOpacity
                style={tw`bg-[#2ea64f] w-full py-4 rounded-xl items-center shadow-lg mb-4`}
                onPress={() => router.replace('/')}
              >
                <Text style={tw`text-white font-bold text-base`}>Login</Text>
              </TouchableOpacity>

              {/* OR Divider */}
              <View style={tw`flex-row items-center justify-center my-2 w-full`}>
                <View style={tw`flex-1 h-[1px] bg-gray-200`} />
                <Text style={tw`text-gray-400 text-sm px-4`}>or</Text>
                <View style={tw`flex-1 h-[1px] bg-gray-200`} />
              </View>

              {/* Google Sign In */}
              <TouchableOpacity
                style={tw`flex-row items-center justify-center bg-white border border-gray-300 w-full py-3.5 rounded-xl mt-2`}
              >
                <Ionicons name="logo-google" size={18} color="#EA4335" style={tw`mr-2`} />
                <Text style={tw`text-gray-700 font-semibold text-sm`}>Continue with Google</Text>
              </TouchableOpacity>

              {/* Don't have an account link */}
              <View style={tw`flex-row justify-center mt-6`}>
                <Text style={tw`text-gray-500 text-sm`}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/signup')}>
                  <Text style={tw`text-[#2ea64f] font-bold text-sm`}>Sign Up</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
