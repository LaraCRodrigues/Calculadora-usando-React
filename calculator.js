
import React, { useState } from 'react';
import './index.css';
function Calculadora(){
const [valor1, setValor1] = useState('');
const [valor2, setValor2] = useState('');
const [valor3, setValor3] = useState('');
const [valor4, setValor4] = useState('');
const [valor5, setValor5] = useState('');
const [valor6, setVal6] = useState('');
const [resultado, setResultado] = useState('');

const [inputString, setInputString] = useState('');
const [charCount, setCharCount] = useState(0);
const [isEven, setisEven] = useState(false);

const handleInputChange = (e) => {
const input = e.target.value;
setInputString(input);
setCharCount(input.length);
setisEven(input.length % 2 === 0);
};
const handleValor1Change = (e) => {
setValor1(e.target.value);
};

const handleValor2Change = (e) => {
setValor2(e.target.value);
};
const handleValor3Change = (e) => {
setValor3(e.target.value);
};

const handleValor4Change = (e) => {
setValor4(e.target.value);
};

const handleValor5Change = (e) => {
setValor5(e.target.value);
};

const handleValor6Change = (e) => {
setVal6(e.target.value);
};

//Media

const handleMedia = () => {
setResultado((parseFloat(valor3) +
parseFloat(valor4)+parseFloat(valor5) + parseFloat(valor6))/4);
};
// calculadora
const handleAdd = () => {
setResultado(parseFloat(valor1) + parseFloat(valor2));
};

const handleSubtract = () => {
setResultado(parseFloat(valor1) - parseFloat(valor2));
};

const handleMultiply = () => {
setResultado(parseFloat(valor1) * parseFloat(valor2));
};

const handleDivide = () => {
setResultado(parseFloat(valor1) / parseFloat(valor2));
};

return(
<>
<div className='container'>
<div className='cal'>
<h1>Calculadora & Media</h1>
<input type="number" value={valor1}
onChange={handleValor1Change} />
<input type="number" value={valor2}
onChange={handleValor2Change} />
<button onClick={handleAdd}>+</button>

<button onClick={handleSubtract}>-</button>
<button onClick={handleMultiply}>*</button>
<button onClick={handleDivide}>/</button><br></br>
<br/>
<input type="number" value={valor3}
onChange={handleValor3Change} />
<input type="number" value={valor4}
onChange={handleValor4Change} />
<input type="number" value={valor5}
onChange={handleValor5Change} />
<input type="number" value={valor6}
onChange={handleValor6Change} />
<button onClick={handleMedia}>Media</button>
</div>
<span className='resul'>Result: {resultado}</span>

<div className='Media'>
<h1>Verificar String</h1>
<input placeholder='digite a palavra desejada' type="text"
value={inputString} onChange={handleInputChange} />
<span>Numero de Characters: {charCount}</span>
<span>Quantidade de Characters desejada possui é : {isEven ?
'par' : 'impar'}</span>
</div>
</div>
</>

);

}
export default Calculadora;
