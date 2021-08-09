import React, { useReducer } from "react";

import "./App.css";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import * as OPERATION from "./actions/index.js";
const { changeOperation, applyNumber, clear } = OPERATION;
const handleInput = ({ dispatch }, input) => {
	switch (input) {
		case "M+": {
			dispatch(OPERATION.setMemory());
			break;
		}
		case "MR": {
			dispatch(OPERATION.memoryRecall());
			break;
		}
		case "MC": {
			dispatch(OPERATION.memoryClear());
			break;
		}
		case "+": {
			dispatch(changeOperation(input));
			break;
		}
		case "/": {
			dispatch(changeOperation(input));
			break;
		}
		case "-": {
			dispatch(changeOperation(input));
			break;
		}
		case "*": {
			dispatch(changeOperation(input));
			break;
		}
		case "CE": {
			dispatch(clear());
			break;
		}
		default:
			dispatch(applyNumber(input));
			break;
	}
};
function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="App">
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					<img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
					Challenge
				</a>
			</nav>

			<div className="container row mt-5">
				<div className="col-md-12 d-flex justify-content-center">
					<form name="Cal">
						<TotalDisplay value={state.total} />
						<div className="row details">
							<span id="operation">
								<b>Operation:</b> {state.operation}
							</span>
							<span id="memory">
								<b>Memory:</b> {state.memory}
							</span>
						</div>

						<div className="row">
							<CalcButton
								value={"M+"}
								onClick={() => handleInput({ dispatch }, "M+")}
							/>
							<CalcButton
								value={"MR"}
								onClick={() => handleInput({ dispatch }, "MR")}
							/>
							<CalcButton
								value={"MC"}
								onClick={() => handleInput({ dispatch }, "MC")}
							/>
						</div>

						<div className="row">
							<CalcButton
								value={1}
								onClick={() => handleInput({ dispatch }, 1)}
							/>
							<CalcButton
								value={2}
								onClick={() => handleInput({ dispatch }, 2)}
							/>
							<CalcButton
								value={3}
								onClick={() => handleInput({ dispatch }, 3)}
							/>
						</div>

						<div className="row">
							<CalcButton
								value={4}
								onClick={() => handleInput({ dispatch }, 4)}
							/>
							<CalcButton
								value={5}
								onClick={() => handleInput({ dispatch }, 5)}
							/>
							<CalcButton
								value={6}
								onClick={() => handleInput({ dispatch }, 6)}
							/>
						</div>

						<div className="row">
							<CalcButton
								value={7}
								onClick={() => handleInput({ dispatch }, 7)}
							/>
							<CalcButton
								value={8}
								onClick={() => handleInput({ dispatch }, 8)}
							/>
							<CalcButton
								value={9}
								onClick={() => handleInput({ dispatch }, 9)}
							/>
						</div>

						<div className="row">
							<CalcButton
								value={"+"}
								onClick={() => handleInput({ dispatch }, "+")}
							/>
							<CalcButton
								value={"*"}
								onClick={() => handleInput({ dispatch }, "*")}
							/>
							<CalcButton
								value={"-"}
								onClick={() => handleInput({ dispatch }, "-")}
							/>
						</div>

						<div className="row ce_button">
							<CalcButton
								value={"CE"}
								onClick={() => handleInput({ dispatch }, "CE")}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
