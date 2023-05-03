import React, { useState } from 'react';

import {
    TextInput,
    StyleSheet,
} from 'react-native';

import { Colors } from '../../utils/Colors';
import { Sizes } from '../../utils/Sizes';
import { ResponsiveDimensions } from '../../utils/ResponsiveDimensions';

const CustomTextInput = ({placeHolder, size=Sizes.small}) => {
    return ( 
        <TextInput
            placeholder={placeHolder}
            style={
                [
                    styles.textInput, 
                    {
                        width: ResponsiveDimensions.customTextInput[size].width, 
                        height: ResponsiveDimensions.customTextInput[size].height
                    }
                ]
            }
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: Colors.secondaryKeyColor,
        color: Colors.onSecondaryKeyColor,
        borderColor: Colors.onSecondaryKeyColor,
        borderWidth: 1,
        padding: 10,
        margin: 10
    }
});

export default CustomTextInput;
