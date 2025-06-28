import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Seo from '../components/seo/Seo';


export default function Home() {
  return (
    <>
      <Seo
        title="Vedantara Solutions | Premier IT Services"
        description="Transform your business with Vedantara Solutions' cutting-edge web development, app development, network security, and cloud solutions."
        keywords="IT services, web development, app development, network security, cloud solutions"
      />

      <Layout>
        <Hero />
        <Services />
        <Features />
        <Process />
        <Testimonials />
        <Contact />
      </Layout>
    </>
  );
}