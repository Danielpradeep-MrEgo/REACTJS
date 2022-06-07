import "./App.css";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { initialState } from "./reducer";
import MainComponent from "./MainComponent";
import Left from "./Left";
import Right from "./Right";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Middle from "./Middle";

function App() {
	const [{}, dispatch] = useStateValue();
	const user = auth.currentUser;

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch({
					type: actionTypes.SET_USER,
					user: auth.user,
				});
			} else {
				dispatch({ user: initialState });
			}
		});
	}, []);

	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<Router>
					<Switch>
						<Route path="/" exact>
							<div className="app">
								<Header />
								<div className="app__main">
									<Left />
									<MainComponent />
									<Right />
								</div>
							</div>
						</Route>
						<Route path="/upload" exact>
							<div className="app__upload">
								<Middle />
							</div>
						</Route>
					</Switch>
				</Router>
			)}
		</div>
	);
}

export default App;
