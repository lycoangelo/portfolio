import { RICHTEXT_FRAGMENT } from './fragments/richtext';

const projectDescriptionQuery = `
	query projectDescriptionQuery($id: String!) {
		project(id: $id) {
			description {
        ${RICHTEXT_FRAGMENT}
      }
			technologies: technologiesCollection(limit: 5) {
				items {
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
`;

export default projectDescriptionQuery;
