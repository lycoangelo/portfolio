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
        sys {
          id
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
            isPresent
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
