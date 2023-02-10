import 'app/notes/page.module.css';
import CreateNote from './CreateNote';
import DeleteButton from './DeleteButton';
import styles from './page.module.css'

async function getNotes() {
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/notePad/records?page=1&perPage=30',
        { cache: 'no-store' }
    );
    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <div>
            <h1>Notes</h1>
            <div className={styles.NoteHolder}>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />
                })}
            </div>
            <CreateNote {...styles} />
        </div>
    )
}



function Note({note}:any) {
    const {id, title, content, created } = note || {};

    return (
        <div className={styles.noteLeaf}>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{id}</p>
            <p>{created}</p>
            <DeleteButton id={id} title={title} />
        </div>
    )
}