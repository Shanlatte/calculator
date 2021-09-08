import React, { FC } from 'react'
import styles from '../../styles/Result.module.css';

type ResultProps = {
    text: string,
    result: string
}

const Result: FC<ResultProps> = ({ text, result }) => {
    return (
        <section className={styles.display_area}>
            <div className={styles.currentInput}>
                {text}
            </div>
            <div className={styles.answerScreen}>
                {result}
            </div>
        </section>
    );
}

export default Result;
