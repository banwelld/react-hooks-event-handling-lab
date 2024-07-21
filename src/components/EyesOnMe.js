import React from 'react';

const onButtonFocus = (e) => console.log('Good!');
const onButtonBlur = (e) => console.log('Hey! Eyes on me!');

const EyesOnMe = () => <button onFocus={onButtonFocus} onBlur={onButtonBlur}>Eyes on me</button>

export default EyesOnMe;