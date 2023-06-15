import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NavBar({title}: {title: string}) {
  return (
    <View style={styles.container}>
        <Text style={{position: "relative", left: 10, fontSize: 15}}>← Account</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({  container: {
    flex: 1,
    padding: 20,
    gap: 10,

  },
    title: {
        color: "#3A2337",
        fontSize: 32,
        fontWeight: "bold",
        borderWidth: 0,
        position: "relative",
        left: 20
    }
})