import homepageQuery from '@app/lib/queries/Homepage.query';
import ContactForm from '@app/components/ContactForm/ContactForm';
import Hero from '@app/components/Hero/Hero';
import PersonalDetails from '@app/components/PersonalDetails/PersonalDetails';
import TimelineProjects from '@app/components/TimelineProjects/TimelineProjects';
import { notFound } from 'next/navigation';
import { fetchGraphQL } from '@app/lib/helpers/api';

export const metadata = {
  title: 'Lyco Angelo: Portfolio'
};

export default async function Home() {
  const response = await fetchGraphQL(homepageQuery);
  const { data, errors = [] } = await response.json();

  if (errors.length > 0) notFound();

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
    <main>
      <Hero {...heroData} />
      {/* @ts-expect-error Server Component */}
      <PersonalDetails id={personalDetails.sys.id} />
      <TimelineProjects {...projects} />
      <ContactForm {...contactForm} />
    </main>
  );
}
