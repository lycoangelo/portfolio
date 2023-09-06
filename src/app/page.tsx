/* eslint-disable no-console */
import ContactForm from '@app/components/organisms/ContactForm/ContactForm';
import DropMotion from '@app/components/organisms/DropMotion/DropMotion';
import Header from '@app/components/organisms/Header/Header';
import Hero from '@app/components/organisms/Hero/Hero';
import PersonalDetails from '@app/components/organisms/PersonalDetails/PersonalDetails.server';
import Projects from '@app/components/organisms/Projects/Projects.server';
import ThemePicker from '@app/components/organisms/ThemePicker/ThemePicker';
import { fetchGraphQL } from '@app/lib/helpers/api';
import { logColors } from '@app/lib/helpers/log';
import homepageQuery from '@app/lib/queries/Homepage.query';

export const metadata = {
  title: 'Lyco Angelo: Portfolio'
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
      <main className="overflow-hidden">
        <Hero {...heroData} />
        {/* @ts-expect-error Server Component */}
        <PersonalDetails id={personalDetails.sys.id} />
        {/* @ts-expect-error Server Component */}
        <Projects {...projects} />
        <ContactForm {...contactForm} />
        <ThemePicker />
        <DropMotion />
      </main>
    </>
  );
}
