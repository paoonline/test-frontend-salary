import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Square, SquareList} from '../../../components/Square';
import {TextBold} from '../../../components/Text';
import {MainContainer} from '../../../container/MainContainer';
import {Layout} from '../../../modules/layout';
import {
  FlexCol,
  FlexRow,
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
                  <TextBold size={'60'}>$300</TextBold>
                </Square>
              </View>

              <MarginTop>
                <Text>Transaction History</Text>
                <SquareList height="80">
                  <FlexRow>
                    <View>
                      <Icon
                        name="comment"
                        size={30}
                        style={{paddingRight: 10}}
                      />
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
      }}
    />
  );
};
