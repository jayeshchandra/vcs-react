import React from 'react';
import Header from '../header';
import Footer from '../footer';
import GoogleForm1 from './formComponent1';
import '../../styles/formPage.css';

const FormPage = () => {
  return (
    <div className="form-page-container">
      <Header />
      <main className="form-content">
        <section className="form-intro">
          <h1>VCS Test Form</h1>
        </section>
        <section className="form-embed">
          <GoogleForm1 />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FormPage;