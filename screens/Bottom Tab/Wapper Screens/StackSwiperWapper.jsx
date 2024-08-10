import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StackSwiperWapper = ({children}) => {
  return (
    <View style={[styles.container]}>
      {children}
    </View>
  )
}

export default StackSwiperWapper

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})