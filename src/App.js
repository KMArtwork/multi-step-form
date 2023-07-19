import '../src/style/sass/App.scss';

import { ChakraProvider } from '@chakra-ui/react';
import FormCard from './components/FormCard';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './redux';

let formStore = configureStore({
  reducer: formReducer,
});

function App() {
  return (
    <Provider store={formStore}>
      <ChakraProvider>
        <div className="App">
          <FormCard />
        </div>      
      </ChakraProvider>
    </Provider>
  );
}

export default App;
