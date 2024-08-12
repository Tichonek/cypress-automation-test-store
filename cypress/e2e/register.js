/// <reference types="cypress" />

import HomePage from "../pageObject/HomePage";
import AccountLoginPage from "../pageObject/AccountLoginPage";

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

    })
})