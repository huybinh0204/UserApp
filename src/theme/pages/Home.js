import React, {Component} from 'react';
import {View, Text, ScrollView, Image, FlatList, TouchableOpacity} from "react-native";

const items = [
    {id: 1, ag: 'user 1', name: 'https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg'},
    {id: 2, ag: 'user 2', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 3, ag: 'user 3', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 4, ag: 'user 4', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 5, ag: 'user 5', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: items,
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1}}>
                    <View style={{
                        marginTop: 10,
                        padding: 10,
                        height: 230,
                        elevation: 7,
                        backgroundColor: '#f5f5f5'
                    }}>
                        <Text style={{fontSize: 20, paddingBottom: 5}}>
                            Explore By Genre
                        </Text>
                        <FlatList horizontal
                                  data={this.state.data} renderItem={({item}) =>
                            <View tyle={{
                                marginLeft: 10
                            }}>
                                <Image style={{
                                    width: 130,
                                    height: 130,
                                    margin: 10,
                                    borderRadius: 10
                                }}
                                       source={{uri: item.name}}/>
                                <View>
                                    <Text style={{textAlign: 'center'}}>
                                        {item.ag}
                                    </Text>
                                </View>
                            </View>
                        }/>
                    </View>

                    <View style={{
                        marginTop: 10,
                        padding: 10,
                        elevation: 7,
                        backgroundColor: '#f5f5f5'
                    }}>
                        <Text style={{fontSize: 20, paddingBottom: 5}}>
                            Explore By Category
                        </Text>
                        <FlatList
                            data={this.state.data} renderItem={({item}) => (
                            <View tyle={{
                                marginLeft: 10
                            }}>
                                <Image style={{
                                    width: 65,
                                    height: 65,
                                    margin: 10,
                                    borderRadius: 10
                                }}
                                       source={{uri: item.name}}/>
                                <View>
                                    <Text style={{textAlign: 'center'}}>
                                        {item.ag}
                                    </Text>
                                </View>
                            </View>
                        )}
                            numColumns={4}
                            keyExtractor={(item, index) => index.toString()}/>
                    </View>

                    <View style={{
                        marginTop: 10,
                        padding: 10,
                        height: 200,
                        elevation: 7,
                        backgroundColor: '#f5f5f5'
                    }}>
                        <Text style={{fontSize: 20, paddingBottom: 5}}>
                            Top lenders around you
                        </Text>
                        <FlatList horizontal={true}
                                  data={this.state.data} renderItem={({item}) =>
                            <View tyle={{
                                marginLeft: 10,
                                margin: 10
                            }}>
                                <Image style={{
                                    width: 50,
                                    height: 50,
                                    margin: 10,
                                    borderRadius: 50
                                }}
                                       source={{uri: item.name}}/>
                                <View>
                                    <Text style={{textAlign: 'center'}}>
                                        {item.ag}
                                    </Text>
                                </View>
                                <TouchableOpacity style={{
                                    margin: 5,
                                    backgroundColor: '#6a4dff',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    borderRadius: 5
                                }}>
                                    <Text style={{color: '#fff', padding: 5}}>Follow</Text>
                                </TouchableOpacity>
                            </View>
                        }/>
                    </View>

                    <View style={{
                        marginTop: 10,
                        padding: 10,
                        height: 250,
                        backgroundColor: '#f5f5f5'
                    }}>
                        <Text style={{fontSize: 20, paddingBottom: 5}}>
                            Scooter
                        </Text>
                        <FlatList horizontal
                                  data={this.state.data} renderItem={({item}) =>
                            <View tyle={{
                                marginLeft: 10
                            }}>
                                <View style={{
                                    marginRight: 10,
                                    padding: 10,
                                    borderRadius: 10,
                                    width: 160,
                                    height: 190,
                                    elevation: 7
                                }}>
                                    <Image style={{
                                        marginTop: 10,
                                        width: 130,
                                        margin: 5,
                                        height: 120,
                                        borderRadius: 5
                                    }}
                                           source={{uri: item.name}}/>
                                    <View>
                                        <Text style={{marginLeft: 10}}>
                                            {item.ag}
                                        </Text>
                                        <Text style={{marginLeft: 10, fontSize: 12, color: '#2979ff'}}>
                                            3167/Month
                                        </Text>
                                    </View>
                                </View>

                            </View>
                        }/>
                    </View>

                    <View style={{
                        marginTop: 10,
                        padding: 10,
                        elevation: 7,
                        backgroundColor: '#f5f5f5'
                    }}>
                        <Text style={{fontSize: 20, paddingBottom: 5}}>
                            Trending Products
                        </Text>
                        <FlatList
                            data={this.state.data} renderItem={({item}) => (
                            <View>
                                <View style={{
                                    padding: 10,
                                    borderRadius: 10,
                                    width: 170,
                                    height: 220,
                                    elevation: 7,
                                    alignItems:'center'
                                }}>
                                    <Image style={{
                                        width: 140,
                                        height: 120,
                                        borderRadius: 10, margin:10
                                    }}
                                           source={{uri: item.name}}/>
                                    <View>
                                        <Text style={{textAlign: 'center', fontSize:16}}>
                                            {item.ag}
                                        </Text>
                                        <Text style={{textAlign: 'center', color:'#636363'}}>
                                            {item.ag}
                                        </Text>
                                        <Text style={{textAlign: 'center',marginLeft: 10, fontSize: 12, color: '#2979ff'}}>
                                            3167/Month
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )}
                            numColumns={2}
                            keyExtractor={(item, index) => index.toString()}/>
                    </View>

                </View>
            </ScrollView>

        );
    }
}

export default Home;
