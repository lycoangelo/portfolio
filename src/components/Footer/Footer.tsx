import globalsQuery from '@app/lib/queries/global-settings.query';
import { fetchGraphQL } from '@app/lib/helpers/api';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function Footer() {
  const response = await fetchGraphQL(globalsQuery('copyright { json }'), false);

  const {
    data: { globalSettings = {} }
  } = await response.json();

  const { copyright } = globalSettings;

  return copyright?.json && <footer>{documentToReactComponents(copyright.json)}</footer>;
}
