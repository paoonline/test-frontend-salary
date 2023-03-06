import React from 'react';
import {SignInScreen} from './screens/SignInScreen';
import {PasscodeScreen} from './screens/Passcode';
import {MainScreen} from './screens/MainScreen/index';
import {Layout} from './modules/layout';
import {InitContainer} from './container/InitContainer';

export const App = () => (
  <InitContainer
    render={props => {
      //authen
      if (props.token !== '' && props.pinCode.length === 6) {
        return <MainScreen />;
      }

      //not authorized
      return (
        <Layout>
          {props.phoneNumber === '' && props.pinCode.length < 6 && (
            <SignInScreen />
          )}
          {props.phoneNumber && props.pinCode.length <= 6 && <PasscodeScreen />}
        </Layout>
      );
    }}
  />
);

export default App;
