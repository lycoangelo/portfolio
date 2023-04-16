const homepageQuery = `
  query homepageQuery {
    homepage(id: "c1aDCGkzlEn07bZ4UqGER") {
      cv {
        contentType
        title
        fileName
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
      personalDetails {
        __typename
        sectionsCollection(limit: 4) {
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
                  jobsCollection(limit: 20) {
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
            ... on SkillSetList {
              __typename
              name
              title
              listCollection(limit: 10) {
                items {
                  name
                  skillsCollection(limit: 50) {
                    items {
                      name
                      level
                      logo {
                        url
                        title
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
