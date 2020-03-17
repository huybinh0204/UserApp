import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";

class Menu extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:2, backgroundColor:'#2979ff',
                    flexDirection:'row'}}>
                    <View style={{flex:2}}>
                        <Image style={{margin:20, width:80, height:80}}
                               source={require('../../asset/man.png')} />
                    </View>
                    <View style={{flex:4,marginTop:40,}}>
                        <Text style={{color:'#fff',fontSize:20}}>Amitesh Kumar</Text>
                        <Text style={{color:'#fff'}}>amiteshkumar22@gmail.com</Text>
                    </View>

                </View>
                <View style={{flex:1,
                    flexDirection:'row',
                    marginTop:-30,
                    height:120,
                    width:'93%',
                    marginLeft:15,
                    marginRight:15,
                    backgroundColor:'#fff',
                    borderRadius:5,
                    elevation:7}}>
                    <TouchableOpacity style={{width:'32%', alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:30,height:30}} source={require("../../asset/list.png")}/>
                        <Text style={{color:'#2979ff',fontSize:12,marginTop:5}}>Bookings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'32%' ,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:30,height:30}} source={require("../../asset/love-and-romance.png")}/>
                        <Text style={{color:'#2979ff',fontSize:12,marginTop:5}}>Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'32%', alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:30,height:30}} source={require("../../asset/verified.png")}/>
                        <Text style={{color:'#2979ff', fontSize:12,marginTop:5}}>Verification</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex:4,
                    margin:15,
                    backgroundColor:'#f0f0f0',
                    borderRadius:5,
                    marginBottom:60,
                    elevation:7}}>
                    <View style={{
                        flexDirection:'row',
                        borderBottomWidth:1,
                        borderColor:'#c0c0c0'}}>
                        <Text style={{padding:15, flex:4, marginLeft:10}}>My Profile</Text>
                        <TouchableOpacity>
                            <Image source={require('../../asset/next.png')}
                                   style={{width:15, height:15, marginTop:15, marginRight:10}}/>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection:'row',
                        borderBottomWidth:1,
                        borderColor:'#c0c0c0'}}>
                        <Text style={{padding:15, flex:4 , marginLeft:10}}>Policies</Text>
                        <TouchableOpacity>
                            <Image source={require('../../asset/next.png')}
                                   style={{width:15, height:15, marginTop:15, marginRight:10}}/>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection:'row',
                        borderBottomWidth:1,
                        borderColor:'#c0c0c0'}}>
                        <Text style={{padding:15, flex:4, marginLeft:10}}>Support</Text>
                        <TouchableOpacity>
                            <Image source={require('../../asset/next.png')}
                                   style={{width:15, height:15, marginTop:15, marginRight:10}}/>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection:'row',
                        borderBottomWidth:1,
                        borderColor:'#c0c0c0'}}>
                        <Text style={{padding:15, flex:4, marginLeft:10}}>Become a Seller</Text>
                        <TouchableOpacity>
                            <Image source={require('../../asset/next.png')}
                                   style={{width:15, height:15, marginTop:15, marginRight:10}}/>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection:'row',
                        borderBottomWidth:1,
                        borderColor:'#c0c0c0'}}>
                        <Text style={{padding:15, flex:4, marginLeft:10}}>About Us</Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        borderBottomWidth:1,
                        borderColor:'#c0c0c0'}}>
                        <Text style={{padding:15, flex:4, marginLeft:10, color:'#f1737f'}}>Log  Out</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Menu;
