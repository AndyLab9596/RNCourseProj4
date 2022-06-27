import React from 'react'

import { View, Text } from 'react-native';

interface IMealItem {
    title: string
}

const MealItem: React.FC<IMealItem> = ({ title }) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default MealItem