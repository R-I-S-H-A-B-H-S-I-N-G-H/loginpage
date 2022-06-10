import React, { useState } from "react";
import "./Login.css";

function Loginpage(props) {
	const [email, setemail] = useState("");
	const [pass, setpass] = useState("");

	return (
		<div className="container">
			<div className="left">
				<h1>Welcome Back</h1>
				<h5>Sub-title text goes here</h5>
				<form>
					<input
						value={email}
						onChange={(e) => setemail(e.target.value)}
						id="email"
						required
						placeholder="Emai Address*"
					/>
					<input
						value={pass}
						onChange={(e) => setpass(e.target.value)}
						id="pass"
						required
						placeholder="Password*"
					/>
					<button id="submit" onClick={() => console.log("click")}>
						Login
					</button>
				</form>
				<div className="options">
					<div className="options-left">
						<input type="checkbox" className="ckbox" />
						<div>Remember me</div>
					</div>
					<a href="/">Forgot Password</a>
				</div>
			</div>
			<div className="right"></div>
		</div>
	);
}

export default Loginpage;
