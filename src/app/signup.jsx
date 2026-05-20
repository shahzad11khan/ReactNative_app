import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('alex.davis@perfectclean.com'); // Prepopulated like mockup
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('••••••••');
  const [confirmPassword, setConfirmPassword] = useState('•••••••'); // Intentionally mismatched for mockup style
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Mismatched check to show mockup error style
  const passwordsMatch = password === confirmPassword;

  return (
    <SafeAreaView style={tw`flex-1 bg-[#f7fafc] pt-${Platform.OS === 'android' ? '10' : '0'}`}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={tw`flex-1`}>
        <ScrollView contentContainerStyle={tw`flex-grow`} showsVerticalScrollIndicator={false}>
          
          {/* Header Card */}
          <View style={tw`bg-[#2ea64f] pt-8 pb-10 px-6 rounded-b-[40px] items-center shadow-md`}>
            <Text style={tw`text-white text-3xl font-bold mb-1 text-center`}>Create Account</Text>
            <Text style={tw`text-green-100 text-sm text-center font-medium`}>Join the community & earn rewards</Text>
          </View>

          {/* Form Content */}
          <View style={tw`px-6 -mt-6`}>
            <View style={tw`bg-white rounded-3xl p-6 shadow-xl`}>
              
              {/* Full Name */}
              <View style={tw`mb-4`}>
                <Text style={tw`text-gray-500 font-bold text-xs tracking-wider mb-2`}>FULL NAME</Text>
                <View style={tw`flex-row items-center bg-[#f7fafc] rounded-xl px-4 py-3 border border-gray-150`}>
                  <TextInput
                    style={tw`flex-1 text-gray-800 text-sm`}
                    placeholder="Enter your name"
                    placeholderTextColor="#a0aec0"
                    value={name}
                    onChangeText={setName}
                  />
                </View>
              </View>

              {/* Email Address - with premium check icon and active border */}
              <View style={tw`mb-4`}>
                <Text style={tw`text-gray-500 font-bold text-xs tracking-wider mb-2`}>EMAIL ADDRESS</Text>
                <View style={tw`flex-row items-center bg-[#f7fafc] rounded-xl px-4 py-3 border-2 border-green-500`}>
                  <TextInput
                    style={tw`flex-1 text-gray-800 text-sm`}
                    placeholder="yourname@domain.com"
                    placeholderTextColor="#a0aec0"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                  />
                  <Ionicons name="checkmark-circle" size={20} color="#2ea64f" style={tw`ml-2`} />
                </View>
              </View>

              {/* Phone Number */}
              <View style={tw`mb-4`}>
                <Text style={tw`text-gray-500 font-bold text-xs tracking-wider mb-2`}>PHONE NUMBER</Text>
                <View style={tw`flex-row items-center bg-[#f7fafc] rounded-xl px-4 py-3 border border-gray-150`}>
                  <TextInput
                    style={tw`flex-1 text-gray-800 text-sm`}
                    placeholder="+1 (555) 000-0000"
                    placeholderTextColor="#a0aec0"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                  />
                </View>
              </View>

              {/* Password */}
              <View style={tw`mb-4`}>
                <Text style={tw`text-gray-500 font-bold text-xs tracking-wider mb-2`}>PASSWORD</Text>
                <View style={tw`flex-row items-center bg-[#f7fafc] rounded-xl px-4 py-3 border border-gray-150`}>
                  <TextInput
                    style={tw`flex-1 text-gray-800 text-sm`}
                    placeholder="Enter password"
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

              {/* Confirm Password - showing the validation error design from mockup */}
              <View style={tw`mb-6`}>
                <Text style={tw`text-gray-500 font-bold text-xs tracking-wider mb-2`}>CONFIRM PASSWORD</Text>
                <View style={tw`flex-row items-center bg-red-50 rounded-xl px-4 py-3 border-2 border-red-500`}>
                  <TextInput
                    style={tw`flex-1 text-gray-800 text-sm`}
                    placeholder="Confirm password"
                    placeholderTextColor="#a0aec0"
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                  />
                  <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <Ionicons name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color="#e53e3e" />
                  </TouchableOpacity>
                </View>
                {!passwordsMatch && (
                  <Text style={tw`text-red-500 text-xs font-semibold mt-1 ml-1`}>Password does not match</Text>
                )}
              </View>

              {/* Sign Up Button */}
              <TouchableOpacity
                style={tw`bg-[#2ea64f] py-4 rounded-xl items-center shadow-lg mb-4`}
                onPress={() => router.replace('/')}
              >
                <Text style={tw`text-white font-bold text-base`}>Sign Up</Text>
              </TouchableOpacity>

              {/* OR Divider */}
              <View style={tw`flex-row items-center justify-center my-2`}>
                <View style={tw`flex-1 h-[1px] bg-gray-200`} />
                <Text style={tw`text-gray-400 text-sm px-4`}>or</Text>
                <View style={tw`flex-1 h-[1px] bg-gray-200`} />
              </View>

              {/* Google Button */}
              <TouchableOpacity
                style={tw`flex-row items-center justify-center bg-white border border-gray-300 py-3.5 rounded-xl mt-2`}
              >
                <Ionicons name="logo-google" size={18} color="#EA4335" style={tw`mr-2`} />
                <Text style={tw`text-gray-700 font-semibold text-sm`}>Continue with Google</Text>
              </TouchableOpacity>

              {/* Footer navigation link */}
              <View style={tw`flex-row justify-center mt-6`}>
                <Text style={tw`text-gray-500 text-sm`}>Already have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/login')}>
                  <Text style={tw`text-[#2ea64f] font-bold text-sm`}>Login</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
