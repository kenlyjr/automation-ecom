export interface FixtureData {
	domains: {
		baseURL: string;
	};
	endpoints: {
		login: string;
		signup: string;
	};
	user: {
		name: string;
		email: string;
	};
	text: {
		accountLabel: string
	}
}