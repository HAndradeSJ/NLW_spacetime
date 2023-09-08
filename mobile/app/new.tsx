import React, { useState } from 'react'
import { Switch, TouchableOpacity, View } from 'react-native'
import NLWLogo from '../assets/icon.png'
import Icons from '@expo/vector-icons/Feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()
  const [ispublic, setispublic] = useState(false)
  return (
    <View
      className="flex-1 px-8"
      style={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="flex-row  mt-4 items-center justify-between">
        <NLWLogo />

        <Link href="/memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icons name="arrow-left" size={16} color={'#fff'} />
          </TouchableOpacity>
        </Link>
      </View>
      <View className="mt-6 spcae-y-6">
        <View className="flex-row items-center gap-2">
          <Switch
            value={ispublic}
            onValueChange={setispublic}
            thumbColor={'#5c3ea3'}
          />
        </View>
      </View>
    </View>
  )
}
