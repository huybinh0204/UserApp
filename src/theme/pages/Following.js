import React, {Component} from 'react';
import {View, Text, Image, FlatList, ScrollView, TouchableOpacity, Alert} from "react-native";

const items = [
    {id: 1, ag: 'user 1', agm: 'full name 1', name: 'https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg'},
    {id: 2, ag: 'user 2', agm: 'full name 2', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 3, ag: 'user 3', agm: 'full name 3', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 4, ag: 'user 4', agm: 'full name 4', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 5, ag: 'user 5', agm: 'full name 5', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
]

class Following extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: items,
        }
    }
    showAlert = () => {
        Alert.alert('Show Title',
            'My Alert Msg',)
    }


    render() {
        return (
            <ScrollView>
                <View style={{flex: 1}}>
                    <View style={{
                        marginTop: 10,
                        padding: 10,
                        height: 130,
                        elevation: 7,
                        backgroundColor: '#f5f5f5'
                    }}>
                        <FlatList horizontal
                                  data={this.state.data} renderItem={({item}) =>
                            <View tyle={{
                                marginLeft: 10
                            }}>
                                <Image style={{
                                    width: 60,
                                    height: 60,
                                    marginLeft: 15,
                                    marginRight: 15,
                                    borderRadius: 50
                                }}
                                       source={{uri: item.name}}/>
                                <View>
                                    <Text style={{textAlign: 'center', color: '#4b4b4b'}}>
                                        {item.ag}
                                    </Text>
                                    <Text style={{
                                        textAlign: 'center',
                                        color: '#4b4b4b'
                                    }}>
                                        {item.agm}
                                    </Text>
                                </View>
                            </View>
                        }/>
                    </View>
                    <View style={{marginLeft: 20, marginTop: 10}}>
                        <Text style={{fontSize: 20}}>Recent Products</Text>
                    </View>
                    <View>
                        <FlatList
                            data={this.state.data} renderItem={({item}) =>
                            <View style={{
                                margin: 20,
                                elevation: 7,
                                orderRadius: 10,
                                borderRadius: 10,
                                backgroundColor: '#f5f5f5'
                            }}>
                                <View style={{flexDirection: 'row', padding: 10}}>
                                    <View style={{flex: 1}}>
                                        <Image style={{
                                            width: 40,
                                            height: 40, borderRadius: 50
                                        }}
                                               source={{uri: item.name}}/>
                                    </View>
                                    <View style={{flex: 5, marginLeft: 5}}>
                                        <Text style={{color: '#4b4b4b'}}>
                                            {item.ag}
                                        </Text>
                                        <Text style={{color: '#4b4b4b'}}>
                                            {item.agm}
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>{this.showAlert()}} style={{flex: 1, alignItems: 'flex-end', marginTop: 10}}>
                                        <Image style={{
                                            width: 20,
                                            height: 20
                                        }}
                                               source={require('../../asset/menu.png')}/>
                                    </TouchableOpacity>

                                </View>
                                <View>
                                    <Image style={{
                                        width: '100%',
                                        height: 130
                                    }}
                                           source={{uri: item.name}}/>
                                    <View>
                                        <Text style={{padding: 10, fontSize: 16, color: '#4b4b4b'}}>
                                            {item.ag}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                        }/>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

export default Following;
