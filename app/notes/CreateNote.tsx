'use client';

import { useState } from "react";
import styles from './page.module.css'
import { useRouter } from "next/navigation";

export default function CreateNote() {

    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const doThis = async() => {
        await fetch('http://127.0.0.1:8090/api/collections/notePad/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });

        setContent('')
        setTitle('')
        router.refresh()
    }
    return(
        <div className={styles.inputHolder}>
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} className={styles.Input}/>
        <br />
        <input type="text" placeholder='Content' value={content}onChange={(e) => setContent(e.target.value)}className={styles.Input}/>
        <br />
        <button onClick={doThis}>Submit</button>
    </div>
    )
}