import globalsQuery from '@app/lib/queries/global-settings.query';
import styles from './Footer.styles';
import { fetchGraphQL } from '@app/lib/helpers/api';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function Footer() {
  const response = await fetchGraphQL(globalsQuery('footerText { json }'), false);

  const {
    data: { globalSettings = {} }
  } = await response.json();

  const { footerText } = globalSettings;

  return (
    footerText?.json && (
      <footer className={styles.footer}>{documentToReactComponents(footerText.json)}</footer>
    )
  );
}
