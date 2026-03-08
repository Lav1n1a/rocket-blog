import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Post
              author="Lavinia"
              content="aaaas dasdasda asdasda dasdas"
            />
            <Post
              author="Lavinia222"
              content="aaaas dasdasda asdasda dasdas"
            />
        </main>
      </div>
    </div>
  )
}

