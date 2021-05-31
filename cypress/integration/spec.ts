// spec.ts
it('smoke test', () => {
  cy.visit('/');
  cy.contains('angular app is running!');
});
