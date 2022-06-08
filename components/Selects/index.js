import * as React from 'react';
import { Text, View, StyleSheet, Image, Picker } from 'react-native';
//import {Picker} from '@react-native-picker/picker'

export function PickerLang({ data, map, selectedValue, onValueChange, ...rest }) {
    return (
        <View style={styles.container}>
            <Picker style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}
            {...rest}>
                {data.map((item) => (
                    <Picker.Item
                        label={item[map.name]}
                        key={item[map.lang]}
                        value={item[map.lang]} />
                ))}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '35%',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
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
