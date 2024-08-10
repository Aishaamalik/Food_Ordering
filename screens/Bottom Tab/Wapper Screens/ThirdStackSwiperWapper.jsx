import { StyleSheet,View } from 'react-native'
import React from 'react'

const ThirdStackSwiperWapper = ({children}) => {
  return (
    <View style={[styles.container]}>
      {children}
    </View>
  )
}

export default ThirdStackSwiperWapper

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})