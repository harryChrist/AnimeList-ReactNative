import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker'

export function PickerLang({ data, map, onValueChange }) {
    return (
        <View style={styles.container}>
            <Picker style={styles.picker} onValueChange={onValueChange}>
                {data.map((item) => (
                    <Picker.Item
                        label={item[map.name]}
                        value={item[map.lang]} />
                ))}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 10,
    },
    picker: {
        padding: 10,
        color: 'white',
    },
    pickerItem: {
        color: 'red',
        fontSize: 20,
    }
});
