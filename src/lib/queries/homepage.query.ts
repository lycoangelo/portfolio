const homepageQuery = `
  query homepageQuery {
    homepage(id: "c1aDCGkzlEn07bZ4UqGER") {
      cv {
        contentType
        title
        url
      }
      description
      headline {
        json
      }
      background: heroBackground {
        title
        url
      }
    }
  }
`;

export default homepageQuery;
