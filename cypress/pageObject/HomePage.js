class HomePage {
    getLoginRegisterButton() {
        return cy.get("#customer_menu_top a")
    }
}

export default new HomePage()