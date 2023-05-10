import React, { useState, useEffect } from 'react';
import {
    FlatList,
    View,
    ScrollView,
    Text,
    StyleSheet,
    Alert,
    Dimensions
} from 'react-native';
import { Colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
import { ResponsiveDimensions } from '../utils/ResponsiveDimensions';
import { ProfilePicture } from '../components/picture/ProfilePicture';
import { ExpenseStatus } from '../components/expense_status/ExpenseStatus';
import { ExpenseCard } from '../components/expense_card/ExpenseCard';
import { getExpenses } from '../service';

const ProfileScreen = ({route, navigation}) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        getExpenses(setExpenses);
    }, []);

    let username = 'Marinna';
    let Title = 'Perfil';
    return (
        <View style={styles.outerContainer}>
            <View style={styles.upperContainer}>
                <View style={styles.flexEnd}>
                    <ProfilePicture
                        style="styles.profilePic"
                    />
                </View>
                <View style={styles.flexStart}>
                    <View>
                        <Text style={[Fonts.displaySmall, styles.greetingText, {color: Colors.onPrimaryKeyColor}]}>{username}</Text>
                    </View>
                </View>
                
            </View>
            <View>
                
            </View>
            
            <View 
                style={
                    [
                        styles.expenseBoard
                    ]
                }
            >
                <View style={styles.currentExpensesTitleContainer}>
                    <Text style={[Fonts.headlineMedium, styles.currentExpensesTitle]}>{Title}</Text>

                    <Text style={[Fonts.headlineSmall, styles.textOpcoes]}>Detalhes da Conta</Text>       
                </View>
            </View> 
        </View> 
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.primaryKeyColor,
        marginTop: ResponsiveDimensions.screen.defaultMarginTop,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePic: {
        flex: 2,
        height: 50
    },
    upperContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        margin: ResponsiveDimensions.homeScreen.upperContainer.margin
    },
    flexStart: {
        flex: 1, 
        alignItems: 'flex-start'
    },
    flexEnd: {
        flex: 1, 
        alignItems: 'flex-end'
    },
    greetingText: {
        marginTop: 150,
        fontWeight: 'bold', 
        color: Colors.onPrimaryKeyColor
    },
    expenseStatus: {
        flex: 4,
        marginBottom: 20
    },
    expenseBoard: {
        flex: 2,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        paddingHorizontal: 5,
        backgroundColor: Colors.secondaryKeyColor,
        width: ResponsiveDimensions.screen.width
    },
    currentExpensesTitleContainer: {
        margin: 20
    },
    currentExpensesTitle: {
        fontWeight: 'bold', 
        textAlign: 'center'
    },
    textOpcoes: {
        marginTop: 30,
        textAlign: 'center'
    },
});

export { ProfileScreen };
