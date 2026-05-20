import { useRouter } from 'expo-router';
import { Image, Platform, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-[#2ea64f] pt-${Platform.OS === 'android' ? '10' : '0'}`}>
      <View style={tw`flex-1 justify-center items-center px-6`}>
        <View style={tw`bg-white rounded-full p-6 mb-8 shadow-lg`}>
          <Image
            source={require('../../assets/images/logo.webp')}
            style={tw`w-32 h-32`}
            resizeMode="contain"
          />
        </View>

        <Text style={tw`text-white  text-3xl font-bold mb-2 text-center`}>
          NEAT & CLEAN
        </Text>
        <Text style={tw`text-white font-semibold text-lg tracking-widest mb-6`}>
          ENVIRONMENT
        </Text>
        <Text style={tw`text-white text-center text-lg mb-12 px-4`}>
          Report Waste. Earn Rewards.{'\n'}Keep Environment Clean.
        </Text>

        <View style={tw`w-full`}>
          <TouchableOpacity
            style={tw`bg-[#165a2a] py-4 rounded-full flex-row justify-center items-center w-full`}
            onPress={() => router.push('/spot')}
          >
            <Text style={tw`text-white text-lg font-bold mr-2`}>Get Started</Text>
            <Text style={tw`text-white text-xl font-bold`}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`border border-white py-4 rounded-full items-center mt-4 w-full`}
            onPress={() => router.push('/login')}
          >
            <Text style={tw`text-white text-lg font-bold`}>I Already Have an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
