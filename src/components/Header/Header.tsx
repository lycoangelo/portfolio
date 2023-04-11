import globalsQuery from "@app/lib/queries/global-settings.query";
import { fetchGraphQL } from "@app/lib/helpers/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Header() {
  const response = await fetchGraphQL(globalsQuery("branding { json }"), false);
  const {
    data: { globalSettings = {} },
  } = await response.json();
  const { branding } = globalSettings;
  return (
    branding?.json && (
      <header>{documentToReactComponents(branding.json)}</header>
    )
  );
}
