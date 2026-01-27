import { selectByTestId } from "cypress/helpers/selectByTestid"

describe('routing', () => {
  // describe('User unauthorized', () => {
  //   it('navigate to MainPage', () => {
  //     cy.visit('/')
  //     cy.get(selectByTestId('Main-page')).should('exist')
  //   })
  //   it('should redirect to MainPage', () => {
  //     cy.visit('/profile/1')
  //     cy.get(selectByTestId('Main-page')).should('exist')
  //   })
  //   it('should redirect to NotFoundPage', () => {
  //     cy.visit('/asasdas')
  //     cy.get(selectByTestId('NotFoundPage')).should('exist')
  //   })

  // })

  describe('User authorized', () => {
    beforeEach('login', () => {
      cy.login('testUser', '123')
    })
    it('navigate to profilePage', () => {

      cy.visit('/profile/3')
      cy.get(selectByTestId('profile-page')).should('exist')

    })

    it('navigate to ArticlesPage', () => {

      cy.visit('/articles')
      cy.get(selectByTestId('Articles-page')).should('exist')

    })
  })

})