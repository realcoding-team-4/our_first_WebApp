import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const API_KEY = '{YOUR_API_KEY}';
const queryUrl = (city) => `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
// API ȣ��Ұ��� ���� temp defined error �ذ�
// API ����

export default class WeatherDetailScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        };
    }
    componentDidMount() {
        const {
            route: {
                params: { city },
            },
        } = this.props;
        fetch(queryUrl(city))
            .then(response => response.json())
            .then(info => {
                console.log(info);
                this.setState({
                    ...info,
                    isLoading: false,
                });
            });
    }

    render() {
        const {
            route: {
                params: { city },
            },
            navigation,
        } = this.props;

        navigation.setOptions({ title: `Weather Information: ${city}` });

        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>�����͸� �ҷ����� ���Դϴ�.</Text>
                </View>
            )
        }
        let celsius = this.state.main.temp - 273.15;
        return (
            <View style={styles.container}>
                <Text>�µ�: {celsius.toFixed(1)}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});