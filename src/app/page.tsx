import homepageQuery from '@app/lib/queries/homepage.query';
import Hero from '@app/components/Hero/Hero';
import PersonalDetails from '@app/components/PersonalDetails/PersonalDetails';
import { notFound } from 'next/navigation';
import { fetchGraphQL } from '@app/lib/helpers/api';

export default async function Home() {
  const response = await fetchGraphQL(homepageQuery);
  const { data, errors = [] } = await response.json();

  if (errors.length > 0) notFound();

  const { homepage = {} } = data || {};
  const { background, cv, description, headline, personalDetails } = homepage;
  const heroData = { background, cv, description, headline };

  return (
    <main>
      <Hero {...heroData} />
      <PersonalDetails {...personalDetails} />
    </main>
  );
}
