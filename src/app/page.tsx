import homepageQuery from '@app/lib/queries/homepage.query';
import Hero from '@app/components/Hero/Hero';
import PersonalDetails from '@app/components/PersonalDetails/PersonalDetails';
import { notFound } from 'next/navigation';
import { fetchGraphQL } from '@app/lib/helpers/api';
import TimelineProjects from '@app/components/TimelineProjects/TimelineProjects';

export default async function Home() {
  const response = await fetchGraphQL(homepageQuery);
  const { data, errors = [] } = await response.json();

  if (errors.length > 0) notFound();

  const { homepage = {} } = data || {};
  const { background, cv, description, headline, personalDetails, projects } = homepage;
  const heroData = { background, cv, description, headline };

  return (
    <main>
      <Hero {...heroData} />
      <PersonalDetails {...personalDetails} />
      <TimelineProjects {...projects} />
    </main>
  );
}
