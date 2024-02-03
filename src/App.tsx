import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/Login/Login';
import { LoginContextProvider } from './contexts/LoginContext';
import TodoList from './pages/Todo/TodoList';
import NotFound from './pages/NotFound/NotFound';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Marvel from './pages/Marvel/Marvel';
import Home from './pages/Home/Home';
import CharacterPage from './pages/Marvel/CharacterPage';

const colors = {
	customPurple: '#570FA0',
};

const theme = extendTheme({ colors });

function App() {
	return (
		<ChakraProvider theme={theme}>
			<LoginContextProvider>
				<BrowserRouter>
					<Box h='100vh' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
						<Header />
						<Routes>
							<Route path='/' element={<LoginPage />} />
							<Route path='/home' element={<Home />} />
							<Route path='/todo' element={<TodoList />} />
							<Route path='/marvel' element={<Marvel />} />
							<Route path='/marvel/:character' element={<CharacterPage />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</Box>
				</BrowserRouter>
			</LoginContextProvider>
		</ChakraProvider>
	);
}

export default App;
