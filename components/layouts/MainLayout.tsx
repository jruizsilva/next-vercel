import Head from 'next/head'
import { Header } from '../Header'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}
