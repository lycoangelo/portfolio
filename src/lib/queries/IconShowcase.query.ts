const iconShowcaseQuery = `
	query iconShowcaseQuery($id: String!) {
		iconShowcase(id: $id) {
			__typename
			name
			title
			iconsCollection(limit: 10) {
				items {
					__typename
					sys {
						id
					}
				}
			}
		}
	}
`;

export default iconShowcaseQuery;
