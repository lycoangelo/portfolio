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
      flexibleComponentsAreaCollection(limit: 10) {
        items {
          ... on PersonalDetails {
            __typename
            sectionsCollection(limit: 6) {
              items {
                ... on Essay {
                  __typename
                  name
                  title
                  essay {
                    json
                  }
                }
                ... on TimelineJobs {
                  __typename
                  name
                  title
                  timelinesCollection(limit: 2) {
                    items {
                      title
                      jobsCollection(limit: 10) {
                        items {
                          company
                          role
                          startDate
                          endDate
                          isPresent
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default homepageQuery;
