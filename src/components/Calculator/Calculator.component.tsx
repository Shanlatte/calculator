import React, { FC } from 'react'
import styles from '../../styles/Calculator.module.css'
import Result from '../Result/Result.component'
import { buttons } from '../../Data/buttons'
import { useState } from 'react'
import { evaluate } from 'mathjs'
import Button from '../Button/Button.component'

const Calculator: FC = () => {
    const operations = ['+', '-', '/', '%', '*', '^'];
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    const [isResult, setIsResult] = useState(false);

    const evaluateResult = (result: string) => {
        let lastChar = result.charAt(result.length - 1);

        if (operations.includes(lastChar)) {
            evaluateResult(result.slice(0, -1))
        } else {
            setText(result);
            setResult(evaluate(result));
            setIsResult(true);
        }
    }

    const handleNumbers = (newText: string) => {
        if (isResult) setText(newText)
        else setText(text + newText);
        setIsResult(false);
    }

    const handleOperations = (newText: string) => {
        let prevText = isResult ? result.toString() : text;
        let lastChar = prevText.charAt(prevText.length - 1);

        if (operations.includes(lastChar)) setText(prevText)
        else setText(prevText + newText);
        setIsResult(false);
    }

    const handleClick = (newText: string) => {

        switch (newText) {
            case 'C':
                setText('');
                setResult('');
                setIsResult(false);
                break;
            case '=':
                evaluateResult(text)
                break;
            case '←':
                setText(text.slice(0, -1));
                break;
            case '*':
            case '+':
            case '-':
            case '/':
            case '^2':
            case '%':
                handleOperations(newText)
                break;
            default:
                handleNumbers(newText)
                break;
        }
    }

    return (
        <>
            <Result text={text} result={result} />
            <section className={styles.keypad_btns}>
                {buttons.map(b => <Button key={b.text} button={b} handleClick={handleClick} />)}
            </section>
        </>
    );
}

export default Calculator;
