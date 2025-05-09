import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import CalendarComponent from './calendarComponent';
import '../../styles/calendarPage.css';

const CalendarPageContent = () => (
  <div className="calendar-page-container">
    <Header />
    <main className="calendar-content">
      <section className="calendar-intro">
        <h1>VCS Events Calendar</h1>
        <p><i>View all our scheduled events</i></p>
      </section>
      <section className="calendar-embed">
        <CalendarComponent />
      </section>
    </main>
    <Footer />
  </div>
);

export default CalendarPageContent;