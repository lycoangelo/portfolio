import { RICHTEXT_FRAGMENT } from './fragments/richtext';

const projectDescriptionQuery = `
	query projectDescriptionQuery($id: String!) {
		project(id: $id) {
			description {
        ${RICHTEXT_FRAGMENT}
      }
		}
	}
`;

export default projectDescriptionQuery;
