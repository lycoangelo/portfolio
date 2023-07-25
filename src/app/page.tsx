import homepageQuery from '@app/lib/queries/Homepage.query';
import ContactForm from '@app/components/organisms/ContactForm/ContactForm';
import Hero from '@app/components/organisms/Hero/Hero';
import PersonalDetails from '@app/components/organisms/PersonalDetails/PersonalDetails.server';
import { notFound } from 'next/navigation';
import { fetchGraphQL } from '@app/lib/helpers/api';
import Projects from '@app/components/organisms/Projects/Projects.server';

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
    <main className="overflow-hidden">
      <Hero {...heroData} />
      {/* @ts-expect-error Server Component */}
      <PersonalDetails id={personalDetails.sys.id} />
      {/* @ts-expect-error Server Component */}
      <Projects {...projects} />
      <ContactForm {...contactForm} />
    </main>
  );
}
