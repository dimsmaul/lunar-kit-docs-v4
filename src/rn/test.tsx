"use client"

import { Button } from '@/lunar-kit/components/button'
import React from 'react'
import { Text, View } from 'react-native'

const TestReactNative = () => {
  return (
    <View className=''>
        <Button onPress={()=> alert('lala')} variant={'destructive'}>
            Nativewind Button
        </Button>
    </View>
  )
}

export default TestReactNative