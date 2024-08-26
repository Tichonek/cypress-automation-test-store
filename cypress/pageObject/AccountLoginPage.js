class AccountLoginPage {
    getContinueButton() {
        return cy.get("button[title='Continue']")
    }

    getLoginInput() {
        return cy.get("#loginFrm_loginname")
    }

    getPasswordInput() {
        return cy.get("#loginFrm_password")
    }

    getLoginButton() {
        return cy.get("button[title='Login']")
    }

    fillLoginForm({login, password} = {}) {
        if(login) this.getLoginInput().type(login)
        if(password) this.getPasswordInput().type(password)

    }
}

export default new AccountLoginPage()