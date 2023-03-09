import { Image, StyleSheet, Text, View } from 'react-native'

import KEY_AP from "../constants/map"
import React from 'react'

KEY_AP.KEY_AP
const MapPreview = ({location, style, children}) => {
    const MapPreview = location ? `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=${KEY_AP.KEY_AP}&signature=YOUR_SIGNATURE` : ""
  return (
    <View>
      <Text>MapPreview</Text>
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({})