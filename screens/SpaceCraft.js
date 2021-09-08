import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DailyScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop:50
                }}>
                <Text>Space Craft Screen!</Text>
            </View>
        )
    }
}