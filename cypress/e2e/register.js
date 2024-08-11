/// <reference types="cypress" />

import HomePage from "../pageObject/HomePage";

describe("Register new account", () => {

    before(() => {
        cy.visit("/")
    })

    it("Register new account with valid data", () => {
        HomePage.getLoginRegisterButton().click()

        //  assertions
        cy.url().should("contains", "rt=account/login")

    })
})