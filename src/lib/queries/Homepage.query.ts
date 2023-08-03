import { IMAGE_FRAGMENT } from './fragments/image';
import { RICHTEXT_FRAGMENT } from './fragments/richtext';
import { SYS_ID_FRAGMENT } from './fragments/sys-id';
import { TECHNOLOGY_FRAGMENT } from './fragments/technology';

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
        ${RICHTEXT_FRAGMENT}
      }
      background: heroBackground {
        ${IMAGE_FRAGMENT}
      }
      personalDetails {
        ${SYS_ID_FRAGMENT}
      }
      projects {
        name
        title
        projectsCollection(limit: 50) {
          items {
            ${SYS_ID_FRAGMENT}
            name
            company
            role
            startDate
            endDate
            isPresent
            frontendTechnologiesCollection(limit: 20) {
              items {
                ${TECHNOLOGY_FRAGMENT}
              }
            }
            backendTechnologiesCollection(limit: 20) {
              items {
                ${TECHNOLOGY_FRAGMENT}
              }
            }
            softwareToolsCollection(limit: 20) {
              items {
                ${TECHNOLOGY_FRAGMENT}
              }
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
