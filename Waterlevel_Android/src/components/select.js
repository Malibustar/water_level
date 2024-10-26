import React, {useState} from 'react';
import {TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {StyleSheet, Text, View, Picker} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ArrowDownIcon from '../assets/arrowDown';

const Select = (props) => {


  const [itemCont, setItemCont] = useState(false);
  const [item, setItem] = useState('Bed Room');
  const items = ['Bed Room', 'Kitchen', 'Parlour', 'Kitchen', 'Parlour'];


  return (
    <View>
      <View
        style={[
          styles.input_footer,
          {width: props.width ? props.width : null},
        ]}>
        <Text style={[styles.text_footer]}>Room Type</Text>
        <View style={styles.action}>
          <Ionicons
            name="md-bed-outline"
            color={'rgba(17, 17, 17, 0.25)'}
            size={20}
          />
          <TouchableOpacity
            onPress={() => {
              setItemCont(!itemCont);
            }}
            style={styles.selectCont}>
            <Text>{item}</Text>
            <ArrowDownIcon />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[styles.itemCon, {display: itemCont == true ? 'flex' : 'none'}]}>
        {/* <FlatList
          data={['Room', 'Kitchen', 'Parlour', 'Room', 'Kitchen', 'Parlour']}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.roomType}>
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          }}
        /> */}

        <ScrollView>
          {items.map((item, key) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setItem(item);
                  setItemCont(!itemCont);
                  props.setData(prevData=>({...prevData,roomType:item}))
                }}
                style={styles.roomType}
                key={key}>
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  input_footer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  text_footer: {
    color: 'rgba(17, 17, 17, 0.25)',
    fontSize: 12,
    fontFamily: 'Montserrat',
    paddingTop: 20,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectCont: {
    // borderWidth: 1,
    paddingLeft: 7,
    height: 50,
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemCon: {
    // borderWidth: 1,
    height: 150,
    backgroundColor: '#ffffff',
    elevation: 16,
    marginTop: -5,
    borderRadius: 10,
    // zIndex: 1000,
  },
  roomType: {
    borderBottomWidth: 0.2,
    height: 40,
    width: '100%',
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'center',
  },
});
