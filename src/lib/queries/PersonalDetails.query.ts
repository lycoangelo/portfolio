import { RICHTEXT_FRAGMENT } from './fragments/richtext';

const personalDetailsQuery = `
  query personalDetailsQuery($id: String!) {
    personalDetails(id: $id) {
      scrambleTexts
      sectionsCollection(limit: 10) {
        items {
          ... on Essay {
            __typename
            name
            title
            essay {
              ${RICHTEXT_FRAGMENT}
            }
          }
          ... on TimelineJobs {
            __typename
            name
            title
            jobsCollection(limit: 2) {
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
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default personalDetailsQuery;
