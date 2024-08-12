class AccountLoginPage {
    getContinueButton() {
        return cy.get("button[title='Continue']")
    }
}

export default new AccountLoginPage()