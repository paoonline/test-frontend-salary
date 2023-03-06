import {Text, View} from 'react-native';
import {FlexRow} from '../screens/MainScreen/styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

type ListTransProps = {
  date: string;
  amount: number;
};
export const ListTrans = ({date, amount}: ListTransProps) => {
  return (
    <>
      <FlexRow>
        <View>
          <Icon name="comment" size={30} style={{paddingRight: 10}} />
        </View>

        <View>
          <Text>{date}</Text>
          <Text>COMPLETE</Text>
        </View>
      </FlexRow>

      <View>
        <Text>{amount}</Text>
      </View>
    </>
  );
};
