import React from 'react';
import {Alert, Text, View} from 'react-native';
import {
  Square,
  SquareListWithdraw,
  SquareListWithdrawSingle,
} from '../../../components/Square';
import {InputCustomBackGround} from '../../../components/TextInput';
import {Layout} from '../../../modules/layout';
import {FlexSpaceBetween, MarginTop, TitleText, Wrapper} from '../styled';
import {WrapperButton} from '../../SignInScreen/styled';
import {ButtonCustom} from '../../../components/Button';
import {grayColor} from '../../../utils/colors';

export const WithdrawScreen = () => {
  return (
    <Layout>
      <Wrapper>
        <TitleText>WITHDRAWAL</TitleText>
        <View>
          <Text>AMOUNT FROM</Text>
          <Square height="100">
            <InputCustomBackGround autoFocus={true} />
          </Square>
        </View>

        <MarginTop>
          <Text>TRANSFER TO</Text>
          <SquareListWithdraw height="160">
            <FlexSpaceBetween>
              <View>
                <Text>Name</Text>
              </View>

              <View>
                <Text>Test</Text>
              </View>
            </FlexSpaceBetween>

            <FlexSpaceBetween>
              <View>
                <Text>COMPANY</Text>
              </View>

              <View>
                <Text>Test</Text>
              </View>
            </FlexSpaceBetween>

            <FlexSpaceBetween>
              <View>
                <Text>NAME</Text>
              </View>

              <View>
                <Text>Test</Text>
              </View>
            </FlexSpaceBetween>

            <FlexSpaceBetween>
              <View>
                <Text>NAME ACCOUNT</Text>
              </View>

              <View>
                <Text>Test</Text>
              </View>
            </FlexSpaceBetween>
          </SquareListWithdraw>
        </MarginTop>

        <SquareListWithdrawSingle height="30">
          <FlexSpaceBetween>
            <View>
              <Text>FEE</Text>
            </View>

            <View>
              <Text>Test</Text>
            </View>
          </FlexSpaceBetween>
        </SquareListWithdrawSingle>
        <WrapperButton>
          <ButtonCustom
            width="200px"
            height="70px"
            title="WITHDRAW"
            color={grayColor}
            onPress={() => Alert.alert('1')}
          />
        </WrapperButton>
      </Wrapper>
    </Layout>
  );
};
