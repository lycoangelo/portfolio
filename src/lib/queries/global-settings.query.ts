const globalsQuery = (props: string) => `
  query globalsQuery {
    globalSettings(id: "1tUUX1R1aMCciRYJg9Yde1") {
			${props}
		}
  }
`;

export default globalsQuery;
