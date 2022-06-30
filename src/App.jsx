import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas Prazeres"
            content="Teste 123"
          />

          <Post
            author="Lucas Prazeres"
            content="Teste 123"
          />
        </main>
      </div>
    </div>
  )
}

export default App
