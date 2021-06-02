import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';

// after `expo install react-native-safe-area-context`.
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// SafeArea 에러 해결

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: [],
        };
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/example0312/weather-crawler/master/availableCityNames')
            // fetch 함수 인자 주소 404 NotFound로 인한 페이지 정보표시 불가
            .then(response => response.json())
            .then(cities => {
                console.log('cities =', cities.length);
                this.setState({
                    cities
                });
            });
    }

    onPressCity(item) {
        console.log('onPressCity =', item);
    }

    renderItem(city) {
        return (
            <SafeAreaProvider>
                <TouchableOpacity style={styles.item} onPress={this.onPressCity}>
                    <Text style={styles.text}>{city}</Text>
                </TouchableOpacity>
            </SafeAreaProvider>
        );
    }

    render() {
        return (
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <FlatList style={styles.container}
                              keyExtractor={item => item}
                              renderItem={({item}) => this.renderItem(item)}
                              data={this.state.cities}
                    />
                    <StatusBar style="auto"/>
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'orange',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
});