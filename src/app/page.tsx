import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const inter = Inter({ subsets: ["latin"] });

const GET_PAGE = `
  query homepageQuery {
    homepage(id: "c1aDCGkzlEn07bZ4UqGER") {
      headline {
        json
      }
      description
      cv {
        url
        contentType
      }
    }
  }
`;

async function fetchGraphQL(query: any, preview = false, variables = {}) {
  const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}/environments/${process.env.CF_ENVIRONMENT}`;

  const accessToken = preview
    ? process.env.CF_PREVIEW_ACCESS_TOKEN
    : process.env.CF_DELIVERY_ACCESS_TOKEN;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      query,
      variables: { ...variables, preview: preview },
    }),
  }).then((response) => response);
}

export default async function Home() {
  const a = await fetchGraphQL(GET_PAGE);
  const { data, errors = [] } = await a.json();

  if (errors.length > 0) {
    return null;
  }

  const { homepage } = data || {};
  const { headline } = homepage || {};
  return (
    <main>
      <h1>{documentToReactComponents(headline.json)}</h1>
    </main>
  );
}
