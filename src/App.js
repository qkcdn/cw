import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Register1 from './component/Register1';
import FirstScreen from './component/FirstScreen';
import Agreement from './component/Agreement';
import FindId from './component/FindId';
import MyPage from './component/MyPage';


const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<FirstScreen />}></Route>
					<Route path="/component/Login" element={<Login />}></Route>
					<Route path="/component/Register" element={<Register />}></Route>
					<Route path="/component/Register1" element={<Register1 />}></Route>
					<Route path="/component/Agreement" element={<Agreement />}></Route>
					<Route path="/component/FindId" element={<FindId />}></Route>
					<Route path="/component/MyPage" element={<MyPage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default App;