import React from 'react';
import { StatusBar } from 'expo-status-bar';
//yarn json-server server.json -d 1000 -w, observar adb reverse tcp:3000 tcp:3000
import Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#e0e0e0" />
      <Routes />
    </>
  );
}
