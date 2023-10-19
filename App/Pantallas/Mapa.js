import React, { Component } from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';

export default function Mapa(){

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WebView
                source={{ uri: 'https://www.google.com/maps/place/Paso+Desnivel+Portezuelo/@12.1488797,-86.2252763,16.5z/data=!4m6!3m5!1s0x8f73fdcfb7c1dfd9:0x6129ef1921d5ec07!8m2!3d12.1495456!4d-86.223854!16s%2Fg%2F11c1qs9cfr?entry=ttu' }}
            />
        </SafeAreaView>
    );
}