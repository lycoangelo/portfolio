/* eslint-disable no-console */
import { Metadata } from 'next';

import ContactForm from '@app/components/organisms/ContactForm/ContactForm';
import DropMotion from '@app/components/organisms/DropMotion/DropMotion';
import FloatingNavs from '@app/components/organisms/FloatingNavs/FloatingNavs';
import Header from '@app/components/organisms/Header/Header';
import Hero from '@app/components/organisms/Hero/Hero';
import PersonalDetails from '@app/components/organisms/PersonalDetails/PersonalDetails.server';
import Projects from '@app/components/organisms/Projects/Projects.server';
import { fetchGraphQL } from '@app/lib/helpers/api';
import { logColors } from '@app/lib/helpers/log';
import homepageQuery from '@app/lib/queries/Homepage.query';

export const metadata: Metadata = {
  title: 'Lyco Angelo: Portfolio',
  description:
    'The website portfolio of Lyco Angelo Ty, a website developer with experience in a variety of web design and development technologies. Learn more about his skills and experience today!',
  applicationName: 'Lyco Angelo: Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Lyco Angelo Ty'],
  authors: [{ name: 'Lyco Angelo Ty' }],
  colorScheme: 'dark',
  openGraph: {
    images: '/cover.png'
  },
  icons: {
    apple: '/favicon.ico',
    icon: '/favicon.ico'
  }
};

export default async function Home() {
  const response = await fetchGraphQL(homepageQuery);
  const { data, errors = [] } = await response.json();

  if (errors.length > 0) {
    console.log(
      logColors.error + 'ERROR: ' + errors[0].message + logColors.reset
    );
  }

  const { homepage = {} } = data || {};

  const {
    background,
    cv,
    description,
    headline,
    personalDetails,
    projects,
    contactForm
  } = homepage;

  const heroData = { background, cv, description, headline };

  return (
    <>
      <Header isHomepage />
      <main className="overflow-hidden relative z-40">
        <Hero {...heroData} />
        {/* @ts-expect-error Server Component */}
        <PersonalDetails id={personalDetails.sys.id} />
        {/* @ts-expect-error Server Component */}
        <Projects {...projects} />
        <ContactForm {...contactForm} />
        <DropMotion />
        <FloatingNavs />
      </main>
    </>
  );
}
