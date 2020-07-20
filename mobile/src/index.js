import React from 'react'
import { StatusBar } from 'react-native'
//npx ou yarn json-server server.json, observar adb reverse tcp:3000 tcp:3000
import Routes from './routes'

export default function App() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#e0e0e0" />
        <Routes />
      </>
    )
}