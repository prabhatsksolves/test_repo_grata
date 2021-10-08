describe("Grata Test Suite ", function () {

        const baseurl = "https://search-staging.gratadata.com/search"

        it("Login with valid creds", function () {

                cy.visit(baseurl)
                cy.get(":nth-child(2) > input").type('prabhat.saxena@ksolves.com')
                cy.get(":nth-child(3) > input").type('Automation@123')
                cy.get(".gsd-icon-button").click()
                cy.get(".es > .gsd-button").click()
                cy.get("#empty_search > :nth-child(1) > .text").should('have.text', 'What are you looking to do?')

        })


        it("Login with invalid creds", function () {

                cy.visit(baseurl)
                cy.get(":nth-child(2) > input").type('prabhat.saxena@ksolves.co')
                cy.get(":nth-child(3) > input").type('Automation@12')
                cy.get(".gsd-icon-button").click()
                cy.get(".message").should('have.text', 'Unable to log in with provided credentials.')

        })

        it("Login with valid user and invalid password", function () {

                cy.visit(baseurl)
                cy.get(":nth-child(2) > input").type('prabhat.saxena@ksolves.com')
                cy.get(":nth-child(3) > input").type('Automation@12')
                cy.get(".gsd-icon-button").click()
                cy.get(".message").should('have.text', 'Unable to log in with provided credentials.')

        })

        it("Login with invalid user and valid password", function () {

                cy.visit(baseurl)
                cy.get(":nth-child(2) > input").type('prabhat.saxena@ksolves.co')
                cy.get(":nth-child(3) > input").type('Automation@123')
                cy.get(".gsd-icon-button").click()
                cy.get(".message").should('have.text', 'Unable to log in with provided credentials.')

        })

})