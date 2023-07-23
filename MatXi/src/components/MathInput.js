import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

export default function MathField() {
  const mathFieldRef = useRef(null);
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/mathlive?module';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const mf = mathFieldRef.current;
      mf.addEventListener('input', handleInputChange);

      return () => {
        mf.removeEventListener('input', handleInputChange);
        document.body.removeChild(script);
      };
    };
  }, []);

  const handleInputChange = () => {
    const mf = mathFieldRef.current;
    setValue(mf.getValue());

    try {
      const evaluation = mf.expression.evaluate();
      setResult(evaluation.latex);
    } catch (error) {
      setResult('');
    }

    renderMathInElement(document.getElementById('result'));
  };

  return (
    <>
      <Head>
        <title>MathLive Basic Example</title>
      </Head>
      <main>
        <h2>MathLive Basic Example</h2>
        <math-field id="mf" virtual-keyboard-mode="manual" ref={mathFieldRef}>
          f(x)=
        </math-field>
        <div id="value">{value}</div>
        <div id="result" dangerouslySetInnerHTML={{ __html: result }} />
      </main>
    </>
  );
};
