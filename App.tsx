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
      if (props.token && props.pinCode !== '' && props.pinCode !== undefined) {
        return <MainScreen />;
      }

      //not authorized
      return (
        <Layout>
          {props.token === '' && <SignInScreen />}
          {props.token &&
            (props.pinCode === undefined || props.pinCode === '') && (
              <PasscodeScreen />
            )}
        </Layout>
      );
    }}
  />
);

export default App;
