import styles from './page.module.css'
import ExpandChild from './ExpandChild'
import 'app/reddit/page.module.css';
import { userAgent } from 'next/server';

async function getComments() {
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/reddit/records', 
        { cache:'no-cache'}
    );
    const data = await res.json();
    return data?.items as any[];
}

export default async function RedditTest() {
    const comments = await getComments();

    return (
        <div className={styles.CommentContainer}>
            {comments?.filter((com) => !com.isChild).map((com) => {
                return <Comments key={com.id} com={com} comments={comments} />
            })}
        </div>
    )
}

function Comments({com, comments}:any) {
    const { username, comment, children, created, isChild } = com;

    const pColor = isChild ? 'grey' : '#343536'


    return (
    <>
        <div className={styles.CommentBox} style={{width: '100%', background: pColor}}>
            <div className={styles.username}>
                <h1 style={{padding: '0 1rem'}}>{username}</h1>
                <p style={{ color: '#36393a'}}>{created}</p>
            </div>
            <br />
            <div className={styles.comment}>
                <h1>{comment}</h1>
            </div>
            <>
                {children?.map((child:any) => <ChildSearch key={child} child={child} comments={comments} />)}
            </>
        </div>
    </>
    )
}

function ChildSearch({child, comments}:any) {
    let childArr = [child]
    let childrenIn:any = []
    
    comments.map((com:any, ind:number) => {
        let comm = [com.id]
        let c = childArr.filter(e => e.includes(comm))
        if(c.length > 0) {
            childrenIn.push(comments[ind])
        }
    })
    
    return (
        <>
            {childrenIn?.map((e) => <Comments key={child} com={e} comments={comments}/>)}
        </>
    )
}
