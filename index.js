import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
	const element = (
	<div>
	<div>Hello, Tick World!!</div>
	<h1>It is { new Date().toLocaleTimeString() }</h1>
	</div>
	);
	ReactDOM.render(element, document.getElementById('root'));
}

{/* setInterval(tick, 1000); */}
setInterval(update, 1000);

function update () {
	const now = new Date();
	const hh = z2(now.getHours());
	const mm = z2(now.getMinutes());
	const ss = z2(now.getSeconds());
	const binStr = hh + mm + ss;
	const style0 = { color: 'brown' };
	const style1 = { color: 'red' };
	const lines = [];
	for (let i = 0; i < binStr.length; i++) {
		const v =parseInt(binStr.substr(i, 1));
		const bin = '0000' + v.toString(2);
		const bin8 = bin.substr(bin.length - 4,4);
		for (let j = 0; j < bin8.length; j++) {
			if (bin8.substr(j, 1) === '0') {
				lines.push(<span style={style0}>○</span>);
			} else {
				lines.push(<span style={style1}>●</span>);
			}
		}
		lines.push(<br />);
	}
	ReactDOM.render(<div>{ lines }</div>, document.getElementById('root'));
 }
function z2 (v) {
	v = String('00' + v);
	return v.substr(v.length - 2, 2);
}
