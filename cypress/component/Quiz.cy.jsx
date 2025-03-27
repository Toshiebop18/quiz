import App from '../../client/src/App'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
    cy.get('button').should('have.text', 'Start Quiz')
    cy.get('button').click()
    cy.get('span.visually-hidden', {timeout: 1000}).should('not.exist')
    cy.get('div.question-card', {timeout: 1000}).should('exist')
  })
})