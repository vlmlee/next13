import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function RootLayout({children}: any) {
    return (
        <html lang="en">
        <Head>
            <title>Next.js</title>
        </Head>
        <body>
        {children}
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>
          </span>
            </a>
        </footer>
        </body>
        </html>
    );
}