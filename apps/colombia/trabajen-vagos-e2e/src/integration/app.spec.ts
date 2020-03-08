import { getGreeting } from '../support/app.po';

describe('colombia-trabajen-vagos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to colombia-trabajen-vagos!');
  });
});
