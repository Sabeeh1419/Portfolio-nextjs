// import { getTranslations } from 'next-intl/server';
// import Header from "../../components/layout/Header"
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import  Experience  from '@/components/sections/Experience';
import  Education  from '@/components/sections/Educations';
import Contact from '@/components/sections/Contact';
import Project from '@/components/sections/Projects/Projects';
import Skills from '@/components/sections/Skills';
// import {Footer} from '@/components/layout/Footer'
// import {Header} from '@/components/layout//Header';


export default async function HomePage() {
  // const t = await getTranslations('hero');

  return (

    <>
      {/* <Header /> */}
      <Hero />
      <About />
       <Skills />
      <Experience />
      <Project />
      <Education />
      <Contact />
      {/* <Footer/> */}
    </>
  );
}

