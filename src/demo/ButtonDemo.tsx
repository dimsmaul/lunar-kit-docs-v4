'use client'

import Demonstration from '@/components/demontration'
import { Button } from '@/lunar-kit/components/button'
import { View } from 'react-native'
import React from 'react'

const ButtonDemo = () => {
  return (
    <Demonstration components={
      <View>
        <Button variant={'destructive'}>ButtonDemo</Button>
      </View>
    } code={`// Example code for ButtonDemo`}/>
  )
}

export default ButtonDemo