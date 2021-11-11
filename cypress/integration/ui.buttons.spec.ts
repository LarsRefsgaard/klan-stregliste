/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/');
})

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
