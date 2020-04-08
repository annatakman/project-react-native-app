import React from "react"
import LottieView from "lottie-react-native"


const Animation = () => {
  return (
    <LottieView style={{ width: 350, height: 350, backgroundColor: "#F8EFBA" }} source={require('../assets/walking.json')} autoPlay loop />
  )
}

export default Animation