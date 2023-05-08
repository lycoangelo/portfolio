export async function fetchGraphQL(
  query: string,
  preview = false,
  variables = {}
) {
  const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CF_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CF_ENVIRONMENT}`;

  const accessToken = preview
    ? process.env.NEXT_PUBLIC_CF_PREVIEW_ACCESS_TOKEN
    : process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      query,
      variables: { ...variables, preview: preview }
    })
  }).then((response) => {
    return response;
  });
}
