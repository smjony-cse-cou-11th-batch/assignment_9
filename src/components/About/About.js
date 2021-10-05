import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import "./About.css"
const About = () => {
    return (
        <div>
            <Banner></Banner>
            <h1>About Us</h1>
            <p className="dis">
                QS Quacquarelli Symonds is the world’s leading provider of services, analytics, and insight to the global higher education sector, whose mission is to enable motivated people anywhere in the world to fulfil their potential through educational achievement, international mobility, and career development.

                The QS World University Rankings portfolio, inaugurated in 2004, has grown to become the world’s most popular source of comparative data about university performance. Their flagship website, www.TopUniversities.com – the home of their rankings – was viewed 149 million times in 2019, and over 94,000 media clippings pertaining to, or mentioning, QS were published by media outlets across the world in 2019.

                Beyond QS’s publication of the world’s market-leading university rankings portfolio, QS also compile the QS international Student Survey – the world’s largest survey of the sentiments, motivations, and preferences of prospective international students. Their student-facing event series – The QS World Grad School Tour, QS World MBA Tour, and QS World University Tour – gave 225,000 prospective students the chance to meet admissions directors at some of the world’s top universities, across 348 events worldwide.

                Throughout the COVID-19 outbreak, QS has transitioned their event offerings online, ensuring that institutions across the world are still able to connect with talent across the globe. QS’s response to the pandemic has also included the development of a series of digital marketing resources for institutions - similarly designed to facilitate continued high-quality engagement with potential students – and the launch of a webinar series empowering university faculty and administrators to share best practices and collaborate as they move their educational offerings into the virtual classroom.

                The QS Intelligence Unit – QS’s research and professional services division – provides universities across the world with bespoke comparative performance analysis according to metrics central to each institution’s mission: teaching, research impact, reputational standing, student employability, and internationalization.

                They also oversee QS’s international conferences for higher education leaders: these include:

                Reimagine Education – the world’s leading award program and conference for teaching and learning innovation;
                EduData Summit - a space uniting the world’s leading practitioners at the intersection of data and education ;
                QS APPLE – Asia’s foremost convention for higher education leaders;
                A range of subject-focused summits held with QS’s partner universities.
                In 2019, as part of their commitment to sustainability, QS became a certified CarbonNeutral® Company, reflecting their efforts to reduce its impact on the environment through a range of efficiency initiatives and offsetting unavoidable emissions through a verified carbon offset forestry project in Brazil.
            </p>
            <Footer></Footer>
        </div>
    );
};

export default About;