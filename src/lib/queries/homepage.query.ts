const homepageQuery = `
  query homepageQuery {
    homepage(id: "c1aDCGkzlEn07bZ4UqGER") {
      headline {
        json
      }
      description
      cv {
        url
        contentType
        title
      }
    }
  }
`;

export default homepageQuery;
