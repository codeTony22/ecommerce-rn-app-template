import { Pressable, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text, View } from '../../components/Themed'
import { defaultStyles } from '../../constants/styles'
import Header from '../../components/Header';
import { useRouter } from 'expo-router';

const Page = () => {

  const router  = useRouter()
  return (
    <SafeAreaView style={defaultStyles.container}>
        <View style={[defaultStyles.container, {padding: 20, }]}>
         <Header 
            title='Signup' 
            headerText='Create Account!'
            desc='Fill in your details to create a new account'
            actionText='Sign In'
          />

          <View style={{ marginTop: 20 }}>
            <Pressable>
              <TextInput
                autoCapitalize='none'
                placeholder='Email Address'
                placeholderTextColor={"#808080"}
                style={[defaultStyles.inputField, { marginBottom: 20 }]}
              />
            </Pressable>
            <Pressable>
              <TextInput
                autoCapitalize='none'
                placeholder='Password'
                placeholderTextColor={"#808080"}
                style={[defaultStyles.inputField, { marginBottom: 20 }]}
              />
            </Pressable>

          </View>

          <View>
            <TouchableOpacity onPress={() => router.push("/login/")}>
              <Text style={{ textAlign: "center", fontFamily: "bold", fontSize: 16 }}>Have An Account?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.ptag}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FC6A03",
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 100    
  },
  ptag: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "bold"
  }
})

export default Page

