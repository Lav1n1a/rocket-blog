import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post(){
    return (
       <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/106318260?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Lavinia de Campos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime='2026-03-05 10:20:20'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                    <p>EEEE</p>
                    <p>AAAA</p>

                    <p>FFFF</p>

                    <p>WWWWW</p>

                    <p>ASDASD</p>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um coment[ario'
                />

                <footer>
                     <button type='submit'>Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>

       </article>
    )
}