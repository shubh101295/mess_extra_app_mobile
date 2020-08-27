import React from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default function MyDropDownMenu({onPress,title,optionsData,val}) {
  return (
    <ScrollView style={{height:"100%"}}>          
      <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
        <Menu onSelect={value => onPress(value)}>

          <MenuTrigger  >
          <Text style={styles.headerText}>{title} , {val}</Text>
          </MenuTrigger  >
          <MenuOptions>
            <FlatList
                data={optionsData}
                keyExtactor={(item , index) => item.pk.toString()}
                renderItem={({item}) => 
                  <MenuOption value={item.pk}>
                        <Text style={styles.menuContent}>{item.value}</Text>
                  </MenuOption>
                }
            />
          </MenuOptions>
        </Menu>
      </MenuProvider> 
</ScrollView>
          
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold"
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20
  }
});
