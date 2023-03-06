import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Square, SquareList} from '../../../components/Square';
import {TextBold} from '../../../components/Text';
import {MainContainer} from '../../../container/MainContainer';
import {ListTrans} from '../../../modules/ListTrans';
import {Layout} from '../../../modules/layout';
import {
  FlexCol,
  MarginTop,
  WrapFlexRowEnd,
  WrapProfile,
  Wrapper,
} from '../styled';

export const HomeScreen = () => {
  return (
    <MainContainer
      render={props => {
        return (
          <Layout>
            <Wrapper>
              <WrapFlexRowEnd>
                <WrapProfile>
                  <FlexCol>
                    <Text>{props.profile.firstname}</Text>
                    <Text>{props.profile.lastname}</Text>
                  </FlexCol>

                  <Icon name="account" size={50} />
                </WrapProfile>
              </WrapFlexRowEnd>
              <View>
                <Text>Avalible Balance</Text>
                <Square height="150">
                  <TextBold size={'60'}>
                    ${props.transaction.available}
                  </TextBold>
                </Square>
              </View>

              <MarginTop>
                <Text>Transaction History</Text>
                {props.transaction.transactions?.map((res, key) => {
                  return (
                    <SquareList height="80" key={res.uid + key}>
                      <ListTrans date={res.date} amount={res.amount} />
                    </SquareList>
                  );
                })}
              </MarginTop>
            </Wrapper>
          </Layout>
        );
      }}
    />
  );
};
