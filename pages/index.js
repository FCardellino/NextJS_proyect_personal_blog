import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Soy estudiante de programación, actualmente me encuentro cursando mi último año de la 
          Tecnicatura Universitaria en Programación de la UTN - FRC.
        </p>
        <p>
          Dado que estoy realizando algunos cursos sobre Python y Data Science, la idea de este página es ir compartiendo mis avances, 
          así como proyectos personales. Con ese fin, los invito a ver los <a href="https://gist.github.com/FCardellino">Gists</a> de algunos cursos que he realizado.
        </p>
        <p>
          (Disclaimer: Esta es una página piloto, por lo que con el correr del tiempo irá cambiando. Si deseas contactarme lo puedes hacer 
          en mi perfil de <a href="https://www.linkedin.com/in/fernando-cardellino/">LinkedIn</a>, o enviandome un mail a mi 
          correo personal <a href="mailto:fndcardellino@gmail.com">fndcardellino@gmail.com</a>)
        </p>
        
{/*         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
    </Layout>
  )
}
