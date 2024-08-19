/// <reference types="cypress" />

import HomePage from "../pageObject/HomePage";
import AccountLoginPage from "../pageObject/AccountLoginPage";
import CreateAccountForm from "../pageObject/CreateAccountForm";

describe("Register new account", () => {

    before(() => {
        cy.fixture("registrationFormData").then((data) => {
            globalThis.data = data
        })
        cy.visit("/")
    })

    it("Register new account with valid data", () => {
        HomePage.getLoginRegisterButton().click()

        //  assertions
        cy.url().should("include", "rt=account/login")
        AccountLoginPage.getContinueButton().should("be.visible")
        AccountLoginPage.getContinueButton().should("be.enabled")

        AccountLoginPage.getContinueButton().click()

        // assertions
        cy.url().should("include", "rt=account/create")
        cy.CheckFormVisibility()

        //CreateAccountForm.getFirstNameField().type(data.firstName)
        CreateAccountForm.fillPersonalDetailsForm({
            firstName: data.personalDeatils.firstName, 
            lastName: data.personalDeatils.lastName
        })

        CreateAccountForm.getFirstNameField().should("have.value", data.personalDeatils.firstName)

    })
})