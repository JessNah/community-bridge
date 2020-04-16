import React, { Component } from 'react';
import './Welcome.scss';
import {ReactComponent as ReactSvg} from '../assets/girlAndSenior.svg';
import {ReactComponent as ReactSvgFam} from '../assets/stayHomeFamily.svg';
import withAnimationEaseIn from "../Utilities/withAnimationEaseIn/withAnimationEaseIn.js";
import withAnimationEaseOut from "../Utilities/withAnimationEaseOut/withAnimationEaseOut.js";

class Welcome extends Component {
	state = {renderedImg1: true,  unmountProcedureActive: false} //renderedImg1 should default false if want animation
	Timer;

	componentDidMount() {
		// this.Timer = setTimeout(() => {
		// 	this.setState({unmountProcedureActive: true});
		// }, 5000);
		// this.Timer = setTimeout(() => {
		// 	this.setState({renderedImg1: true, unmountProcedureActive: false});
		// }, 6500);
	}

	componentWillUnmount() {
		clearTimeout(this.Timer);
	}

	render(){
		const Img1 = this.state.unmountProcedureActive ? withAnimationEaseOut(ReactSvgFam) : withAnimationEaseIn(ReactSvgFam);
		const Img2 = this.state.unmountProcedureActive ? withAnimationEaseOut(ReactSvg) : withAnimationEaseIn(ReactSvg);
		return (
			<React.Fragment>
				<div className={"HeaderGradient"}>
					<div className={"ApplicationName"}>
						Welcome to Community Bridge.
					</div>
					We may be apart, but we'll get through this together.
				</div>
				<div>
					{ !this.state.renderedImg1 ?
						<div className="Phone_Graphic_Handle"><Img1/></div>: 
						<div className="Phone_Graphic_Handle"><Img2/></div>
					}
					
				</div>
			</React.Fragment>
		);
	}

}

export default Welcome;
