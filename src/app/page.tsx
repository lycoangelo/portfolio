import componentMap from '@app/lib/constants/componentMap';
import homepageQuery from '@app/lib/queries/homepage.query';
import Hero from '@app/components/Hero/Hero';
import { notFound } from 'next/navigation';
import { fetchGraphQL } from '@app/lib/helpers/api';

interface FlexibleContentComponentProps {
  __typename: string;
  props: Record<string, any>;
}

export default async function Home() {
  const response = await fetchGraphQL(homepageQuery);
  const { data, errors = [] } = await response.json();

  if (errors.length > 0) notFound();

  const { homepage = {} } = data || {};
  const { background, cv, description, headline, flexibleComponentsAreaCollection } = homepage;
  const heroData = { background, cv, description, headline };

  return (
    <main>
      <Hero {...heroData} />
      {flexibleComponentsAreaCollection.items.map(
        (item: FlexibleContentComponentProps, index: number) => {
          const Component = componentMap[item.__typename];
          return <Component key={index} {...item} />;
        }
      )}
    </main>
  );
}
