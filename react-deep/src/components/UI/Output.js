import React from 'react';
const Output = (props) => {
	console.log('component output is running');
	return <div>{props.show ? 'this is new' : ''}</div>;
};

export default React.memo(Output);
