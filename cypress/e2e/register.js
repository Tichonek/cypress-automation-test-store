/// <reference types="cypress" />

import HomePage from "../pageObject/HomePage";
import AccountLoginPage from "../pageObject/AccountLoginPage";
import CreateAccountForm from "../pageObject/CreateAccountForm";
import AccountSuccessPage from "../pageObject/AccountSuccessPage";

describe("Register new account", () => {

    before(() => {
        cy.fixture("registrationFormMandatoryData").then((data) => {
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
        //  fill personal details
        CreateAccountForm.fillPersonalDetailsForm({
            firstName: data.personalDeatils.firstName, 
            lastName: data.personalDeatils.lastName,
            email: data.personalDeatils.email,
            telephone: data.personalDeatils.telephone,
            fax: data.personalDeatils.fax
        })

        //  fill address
        CreateAccountForm.fillAddressForm({
            company: data.address.company,
            address1: data.address.address1,
            address2: data.address.address2,
            city: data.address.city,
            region: data.address.region,
            zipCode: data.address.zipCode,
            country: data.address.country
        })

        // fill login details
        CreateAccountForm.fillLoginDetailsForm({
            login: data.loginDetails.login,
            password: data.loginDetails.password,
            confirmPassword: data.loginDetails.password
        })

        //  check privacy policy
        CreateAccountForm.getPrivacyPolicyCheckbox().check()



        //CreateAccountForm.getFirstNameField().should("have.value", data.personalDeatils.firstName)
        
        //  assertions for form fields
        cy.verifyFormFields(CreateAccountForm, data)

        //  send form
        CreateAccountForm.getContinueButton().click()

        //  assertions for account creation
        cy.url().should("include", "rt=account/success")
        AccountSuccessPage.getConfirmText().should("contain", " Your Account Has Been Created!")

    })
})