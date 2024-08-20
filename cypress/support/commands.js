// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("CheckFormVisibility", () => {
    cy.get(".registerbox").each(($div) => {
        cy.wrap($div).find("input, select").each(($el) => {
            cy.wrap($el).should("be.visible")
            cy.wrap($el).should("be.enabled")
        })
    })
})

Cypress.Commands.add("verifyFormFields", (formPage, formData) => {
    const fields = [
        {selector: () => formPage.getFirstNameField(), value: formData.personalDeatils.firstName},
        {selector: () => formPage.getLastNameField(), value: formData.personalDeatils.lastName},
        {selector: () => formPage.getEmailField(), value: formData.personalDeatils.email},
        {selector: () => formPage.getTelephoneField(), value: formData.personalDeatils.telephone},
        {selector: () => formPage.getFaxNField(), value: formData.personalDeatils.fax},

        {selector: () => formPage.getCompanyField(), value: formData.address.company},
        {selector: () => formPage.getAddress1Field(), value: formData.address.address1},
        {selector: () => formPage.getAddress2Field(), value: formData.address.address2},
        {selector: () => formPage.getCityField(), value: formData.address.city},
        {selector: () => formPage.getRegionField(), value: formData.address.region},
        {selector: () => formPage.getZipCodeField(), value: formData.address.zipCode},
        {selector: () => formPage.getCountryField(), value: formData.address.country},

        {selector: () => formPage.getLoginField(), value: formData.loginDetails.login},
        {selector: () => formPage.getPasswordField(), value: formData.loginDetails.password},
        {selector: () => formPage.getPasswordConfirmField(), value: formData.loginDetails.password}
    ]

    fields.forEach(field => {
        if(field.value) {
            field.selector().should("have.value", field.value)
        } else {
            field.selector().should("have.value", "")
        }
    })
})