const iconQuery = `
	query iconQuery($id: String!) {
		icon(id: $id) {
			name
			description {
				json
        links {
          assets {
            block {
              url
              title
            }
            hyperlink {
              url
              title
            }
          }
        }
			}
			icon {
				url
				title
			}
		}
	}
`;

export default iconQuery;
