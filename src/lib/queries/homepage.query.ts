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
            ... on IconShowcase {
              __typename
              name
              title
              iconsCollection(limit: 20) {
                items {
                  name
                  description {
                    json
                  }
                  icon {
                    url
                    title
                  }
                }
              }
            }
          }
        }
      }
      projects {
        name
        title
        projectsCollection(limit: 50) {
          items {
            name
            company
            role
            startDate
            endDate
            technologiesCollection(limit: 20) {
              items {
                name
                logo {
                  url
                  title
                }
                level
              }
            }
            description {
              json
            }
          }
        }
      }
      contactForm {
        name
        title
        contactsCollection(limit: 5) {
          items {
            name
            contact
            label
          }
        }
      }
    }
  }
`;

export default homepageQuery;
