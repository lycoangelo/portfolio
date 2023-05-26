export async function fetchGraphQL(
  query: string,
  preview = false,
  variables = {}
) {
  const {
    CF_SPACE_ID: spaceId,
    CF_ENVIRONMENT: environment,
    CF_PREVIEW_ACCESS_TOKEN: previewToken,
    CF_DELIVERY_ACCESS_TOKEN: deliveryToken
  } = process.env;

  const url = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;

  const accessToken = preview ? previewToken : deliveryToken;

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
