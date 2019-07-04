export function parseMenuContent(rawContent) {
		let parsedContent; // [{name: ['he name', 'en name'], description: ['he name', 'en name'], price: 12 }]

		parsedContent = rawContent.dishes.reduce((accumulator, currentValue) => {
				const { price, hebrew = {}, english = {}, cmsName = null } = currentValue;

				return Object.assign(accumulator, {
						[cmsName]: {
								name: [hebrew.name, english.name],
								description: [hebrew.description, english.description],
								price
						}
				});

		}, {});

		return parsedContent;
}