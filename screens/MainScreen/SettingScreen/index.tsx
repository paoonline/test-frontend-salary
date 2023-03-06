import React from 'react';
import {ButtonCustom} from '../../../components/Button';
import {Layout} from '../../../modules/layout';
import {grayColor} from '../../../utils/colors';
import {WrapperButton} from '../../SignInScreen/styled';
import {TitleText, Wrapper} from '../styled';
import {InitContainer} from '../../../container/InitContainer';

export const SettingScreen = () => {
  return (
    <InitContainer
      render={props => {
        return (
          <Layout>
            <Wrapper>
              <TitleText>SETTING</TitleText>
              <WrapperButton onPress={() => props.resetPin()}>
                <ButtonCustom
                  width="100%"
                  height="50px"
                  textLeft
                  title="RESET PIN"
                  color={grayColor}
                />
              </WrapperButton>

              <WrapperButton onPress={() => props.logout()}>
                <ButtonCustom
                  width="100%"
                  height="50px"
                  textLeft
                  title="LOGOUT"
                  color={grayColor}
                />
              </WrapperButton>
            </Wrapper>
          </Layout>
        );
      }}
    />
  );
};
