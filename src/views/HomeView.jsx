import React from 'react';
import Header from '../components/Layout/Header';
import Introduction from '../components/Introduction/Introduction';
import AboutMe from '../components/AboutMe/AboutMe';
import Activity from '../components/Activity/Activity';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import ScrollToTopButton from '../components/Layout/ScrollToTopButton';
import Footer from '../components/Layout/Footer';

const HomeView = () => {
  return (
    <div className="home-view">
      <Header />
      <Introduction />
      <AboutMe />
      <Activity />
      <Skills />
      <Projects />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default HomeView;
