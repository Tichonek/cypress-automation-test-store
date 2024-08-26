class AccountSuccessPage {
    getConfirmText() {
        return cy.get(".maintext")
    }

    getContinueButton() {
        return cy.get("a[title='Continue']")
    }
}

export default new AccountSuccessPage()