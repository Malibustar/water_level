import React, {createContext} from 'react';
import {View, Text} from 'react-native';

export const LoginContext = createContext();

// export default loginContext

class AppStateContextProvider extends React.Component {
  state = {
    isLoading: true,
    userName: null,
    userToken: null,
    firstTimeLogin: true,
  };

  render() {
    return (
      <LoginContext.Provider value={{...this.state}}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default AppStateContextProvider;
