import React from 'react';
import {SignInScreen} from './screens/SignInScreen';
import {PasscodeScreen} from './screens/Passcode';
import {MainScreen} from './screens/MainScreen/index';
import {Layout} from './modules/layout';

function App(): JSX.Element {
  //Main screen
  return <MainScreen />;

  //Authen screen
  return (
    <Layout>
      <PasscodeScreen />
    </Layout>
  );
}

export default App;
