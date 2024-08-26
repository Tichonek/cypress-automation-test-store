/// <reference types="cypress" />

import HomePage from "../pageObject/HomePage";
import AccountLoginPage from "../pageObject/AccountLoginPage";

describe("Login to account", () => {
    before(() => {
        cy.fixture("loginValidData").then((data) => {
            globalThis.data = data
        })
        cy.visit("/")
    })
    
    it("Login with valid data to existing account", () => {
        HomePage.getLoginRegisterButton().click()

        cy.url().should("include", "rt=account/login")

        AccountLoginPage.fillLoginForm({
            login: data.login,
            password: data.password
        })

        //  assertions for form fields
        AccountLoginPage.getLoginInput().should("have.value", data.login)
        AccountLoginPage.getPasswordInput().should("have.value", data.password)
    })
})