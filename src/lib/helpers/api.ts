/* eslint-disable no-console */
export async function fetchGraphQL(
  query: string,
  preview = false,
  variables = {}
) {
  const { CF_SPACE_ID, CF_PREVIEW_ACCESS_TOKEN, CF_DELIVERY_ACCESS_TOKEN } =
    process.env;

  const url = `https://graphql.contentful.com/content/v1/spaces/${CF_SPACE_ID}`;

  const accessToken = preview
    ? CF_PREVIEW_ACCESS_TOKEN
    : CF_DELIVERY_ACCESS_TOKEN;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      query,
      variables: { ...variables, preview: preview }
    }),
    next: { revalidate: 10 }
  })
    .then((response) => response)
    .catch((error) => {
      console.error(error);

      return error;
    });
}
