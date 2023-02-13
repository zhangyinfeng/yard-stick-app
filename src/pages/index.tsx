import Head from 'next/head'
import styles from '../styles/Evernote.module.scss'
import NoteOperations from '../components/NoteOperations';
import NoteDetails from '../components/NoteDetails';
import { useState } from 'react';

export default function Home() {
  const [ID, setID] = useState(null);
  const getSingleNote = (id: any) => {
    setID(id)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Yard Stick PWA Firebase Integration</title>
        <meta name="description" content="This is a test project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          <div className={styles.left}>
            <NoteOperations getSingleNote={getSingleNote} />
          </div>
          <div className={styles.right}>
            <NoteDetails ID={ID} />
          </div>
        </div>
      </main>
    </div>
  )
}