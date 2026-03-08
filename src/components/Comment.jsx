import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src="https://avatars.githubusercontent.com/u/106318260?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lavinia Keidann</strong>
                            <time title='11 de maio de 03:42' dateTime='2026-03-05 10:20:20'>Publicado há 1h</time>
                        </div> 

                        <button title='Deletar comentario'>
                            <Trash size={20}/>
                        </button> 
                    </header>

                    <p>Muito bom Ana, parabéns!! </p>
                </div>
                
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>28</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}