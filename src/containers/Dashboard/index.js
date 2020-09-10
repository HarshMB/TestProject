import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1'
import CardView from 'react-native-cardview'

class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Dashboard</Text>
                <FlatList
                    data={this.props.dashboardData.user}
                    keyExtractor={(item, index) => uuidv1()}
                    style={{ flex: 1 }}
                    renderItem={({ item, index }) => (
                        <View style={{ margin: 10 }} key={uuidv1()}>
                            <CardView cardElevation={7}
                                cardMaxElevation={7}
                                cornerRadius={5}
                                style={{ backgroundColor: 'white', padding: 5 }}
                            >
                                <View style={{ flexDirection: 'row', padding: 5 }}>
                                    <Text style={{ flex: 1 }}>Name</Text>
                                    <Text style={{ flex: 2 }}>: {item.name}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', padding: 5 }}>
                                    <Text style={{ flex: 1 }}>Age</Text>
                                    <Text style={{ flex: 2 }}>: {item.age}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', padding: 5 }}>
                                    <Text style={{ flex: 1 }}>Gender</Text>
                                    <Text style={{ flex: 2 }}>: {item.gender}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', padding: 5 }}>
                                    <Text style={{ flex: 1 }}>Email</Text>
                                    <Text style={{ flex: 2 }}>: {item.email}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', padding: 5 }}>
                                    <Text style={{ flex: 1 }}>Phone Number</Text>
                                    <Text style={{ flex: 2 }}>: {item.phoneNo}</Text>
                                </View>
                            </CardView>
                        </View>
                    )}
                    onEndReached={this.onScrollHandler}
                    onEndThreshold={5}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        margin: 10,
        fontSize: 20
    }
});

const mapStateToProps = (state) => {
    return {
        dashboardData: state.DashboardRedux.dashboardData
    }
};

export default connect(mapStateToProps)(Dashboard);