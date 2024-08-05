import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondStackSwiperWapper = ({children}) => {
  return (
    <View style={[styles.container]}>
      {children}
    </View>
  )
}

export default SecondStackSwiperWapper

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})