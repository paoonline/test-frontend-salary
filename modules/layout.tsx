import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, ScrollView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PropsWithChildren} from 'react';

type LayoutProps = PropsWithChildren;

export const Layout = (_props: LayoutProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        style={{height: '100%'}}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'space-evenly',
        }}>
        {_props.children}
      </ScrollView>
    </SafeAreaView>
  );
};
