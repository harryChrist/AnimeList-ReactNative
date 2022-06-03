import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker'

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
