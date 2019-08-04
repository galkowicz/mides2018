export function parseMenuContent(rawContent) {
		let parsedContent; // [{name: ['he name', 'en name'], description: ['he name', 'en name'], price: 12 }]

		parsedContent = rawContent.dishes.reduce((accumulator, currentValue) => {
				const { price, hebrew = {}, english = {}, cmsName = null, alternativePrice = '' } = currentValue;

				return Object.assign(accumulator, {
						[cmsName]: {
								name: [hebrew.name, english.name],
								description: [hebrew.description, english.description],
								alternative: [hebrew.alternative, english.alternative],
								price,
								alternativePrice
						}
				});

		}, {});

		return parsedContent;
}

export function parseAboutContent(rawContent) {
		const { firstAbout, secondAbout, thirdAbout } = rawContent;

		return {
				about:
					{
							firstAbout: {
									title: [firstAbout.hebrew.title, firstAbout.english.title],
									subtitle: [firstAbout.hebrew.subtitle, firstAbout.english.subtitle]
							},
							secondAbout: {
									title: [secondAbout.hebrew.title, secondAbout.english.title],
									subtitle: [secondAbout.hebrew.subtitle, secondAbout.english.subtitle]
							},
							thirdAbout: {
									title: [thirdAbout.hebrew.title, thirdAbout.english.title],
									subtitle: [thirdAbout.hebrew.subtitle, thirdAbout.english.subtitle]
							}
					}
		};
}