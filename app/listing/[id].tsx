import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const Page = () => {
  const { id } = useLocalSearchParams();
console.log(id)
  return (
    <View>
      <Text>Page</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})