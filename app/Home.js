import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.card} onPress={() => { this.props.navigation.navigate('FlexDesign') }}>
                    <Text style={styles.text}>Flex</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.card} onPress={() => { this.props.navigation.navigate('FlexDesign') }}>
                    <Text style={styles.text}>UIComponents</Text>
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    card: {
        height: 50,
        padding: 10,
        minWidth:80,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#F06292',
        margin: 5,
        borderRadius: 10
    },
    text: {
        alignContent: 'center',
        color: '#FFFFFF',
        
    }
});