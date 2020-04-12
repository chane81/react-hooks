import React, { Component } from 'react';

class UseStateExample extends Component {
	state = {
		counter: 0
	};

	onClickPlus = e => {
		this.setState({
			counter: this.state.counter + 1
		});
	};

	onClickMinus = e => {
		this.setState({
			counter: this.state.counter - 1
		});
	};

	componentDidMount() {
		console.log('컴포넌트 마운트');
	}

	componentDidUpdate() {
		console.log('컴포넌트 업데이트!');
	}

	render() {
		return (
			<div>
				<div>클래스형 컴포넌트 Lifecycle 예제</div>
				<div>
					<div>
						<p>
							현재 카운터 값은 <b>{this.state.counter}</b> 입니다
						</p>
					</div>
					<button onClick={this.onClickPlus}>+1</button>
					<button onClick={this.onClickMinus}>-1</button>
				</div>
			</div>
		);
	}
}

export default UseStateExample;
