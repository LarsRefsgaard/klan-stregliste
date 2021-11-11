/// <reference types="cypress" />

beforeEach(() => {
	cy.visit('/');
});

it('can add and subtract', () => {
	cy.get('[data-cy="name"]')
		.first()
		.find('.user-text')
		.then(($p) => {
			['beer', 'cider'].forEach((drink) => {
				cy.get(`[data-cy="${$p.text()}"] > [data-cy="${drink}"]`)
					.as('item')
					.find('.user-text')
					.then(($p) => {
						const initialValue = parseInt($p.text());
						cy.get('@item')
							.find('[data-cy="add"]')
							.click()
							.then(() => {
								expect(parseInt($p.text())).to.equal(initialValue + 1);
							});

						cy.get('@item')
							.find('[data-cy="remove"]')
							.click()
							.then(() => {
								expect(parseInt($p.text())).to.equal(initialValue);
							});
					});
			});
		});
});

it('cannot go below 0', () => {
	const checkAndReload = () => {
		// get the element's text, convert into a number
		cy.get('[data-cy="beer"]')
			.first()
			.as('item')
			.find('.user-text')
			.then((number) => {
				// if the expected number is found
				// stop adding any more commands
				const value = parseInt(number.text());
				cy.get('@item')
					.find('[data-cy="remove"]')
					.click()
					.then(() => {
						expect(parseInt(number.text())).to.not.lessThan(0);
					});

				if (value === 0) {
					expect(value).to.eq(0);
					return;
				}
				// eslint-disable-next-line cypress/no-unnecessary-waiting
				cy.wait(250, { log: false });
				checkAndReload();
			});
	};

	cy.visit('');
	checkAndReload();
});
