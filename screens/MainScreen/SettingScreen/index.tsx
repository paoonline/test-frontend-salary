import React from 'react';
import {Alert} from 'react-native';
import {ButtonCustom} from '../../../components/Button';
import {Layout} from '../../../modules/layout';
import {grayColor} from '../../../utils/colors';
import {WrapperButton} from '../../SignInScreen/styled';
import {TitleText, Wrapper} from '../styled';

export const SettingScreen = () => {
  return (
    <Layout>
      <Wrapper>
        <TitleText>SETTING</TitleText>
        <WrapperButton>
          <ButtonCustom
            width="100%"
            height="50px"
            textLeft
            title="RESET PIN"
            color={grayColor}
            onPress={() => Alert.alert('1')}
          />
        </WrapperButton>

        <WrapperButton>
          <ButtonCustom
            width="100%"
            height="50px"
            textLeft
            title="LOGOUT"
            color={grayColor}
            onPress={() => Alert.alert('1')}
          />
        </WrapperButton>
      </Wrapper>
    </Layout>
  );
};
