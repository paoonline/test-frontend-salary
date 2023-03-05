import {
  FlexRow,
  MarginTop,
  WrapFlexRowEnd,
  WrapProfile,
  Wrapper,
} from '../styled';
import {Layout} from '../../../modules/layout';
import {Text, View} from 'react-native';
import {Circle} from '../../../components/Circle';
import React from 'react';
import {Square, SquareList} from '../../../components/Square';
import {TextBold} from '../../../components/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const HomeScreen = () => {
  return (
    <Layout>
      <Wrapper>
        <WrapFlexRowEnd>
          <WrapProfile>
            <View style={{width: 40}}>
              <Text style={{textAlign: 'center'}}>John Doe</Text>
            </View>
            <Circle height={'40'} width={'40'} />
          </WrapProfile>
        </WrapFlexRowEnd>
        <View>
          <Text>Avalible Balance</Text>
          <Square height="150">
            <TextBold size={'60'}>$300</TextBold>
          </Square>
        </View>

        <MarginTop>
          <Text>Transaction History</Text>
          <SquareList height="80">
            <FlexRow>
              <View>
                <Icon name="comment" size={30} style={{padding: 5}} />
              </View>

              <View>
                <Text>16 FEB 2023</Text>
                <Text>COMPLETE</Text>
              </View>
            </FlexRow>

            <View>
              <Text>$100</Text>
            </View>
          </SquareList>
        </MarginTop>
      </Wrapper>
    </Layout>
  );
};
