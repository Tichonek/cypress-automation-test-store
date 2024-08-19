class CreateAccountForm {

    // Personal details
    getFirstNameField() {
        return cy.get("#AccountFrm_firstname")
    }

    getLastNameField() {
        return cy.get("#AccountFrm_lastname")
    }

    getEmailField() {
        return cy.get("#AccountFrm_email")
    }

    getTelephoneField() {
        return cy.get("#AccountFrm_telephone")
    }

    getFaxNField() {
        return cy.get("#AccountFrm_fax")
    }

    // Your address
    getCompanyField() {
        return cy.get("#AccountFrm_company")
    }

    getAddress1Field() {
        return cy.get("#AccountFrm_address_1")
    }

    getAddress2Field() {
        return cy.get("#AccountFrm_address_2")
    }

    getCityField() {
        return cy.get("#AccountFrm_city")
    }

    getRegionField() {
        return cy.get("#AccountFrm_zone_id")
    }

    getZipCodeField() {
        return cy.get("#AccountFrm_postcode")
    }

    getCountryField() {
        return cy.get("#AccountFrm_country_id")
    }

    // Login details
    getLoginField() {
        return cy.get("#AccountFrm_loginname")
    }

    getPasswordField() {
        return cy.get("#AccountFrm_password")
    }

    getPasswordConfirmField() {
        return cy.get("#AccountFrm_confirm")
    }

    // Newsletter
    getYesRadioButton() {
        return cy.get("#AccountFrm_newsletter1")
    }

    getNoRadioButton() {
        return cy.get("#AccountFrm_newsletter0")
    }

    // Privacy policy box
    getPrivacyPolicyCheckbox() {
        return cy.get("#AccountFrm_agree")
    }

    // Continue button
    getContinueButton() {
        return cy.get("button[title='Continue']")
    }

    fillPersonalDetailsForm({firstName, lastName, email, telephone, fax} = {}) {
        if(firstName) this.getFirstNameField().type(firstName)
        if(lastName) this.getLastNameField().type(lastName)
        if(email) this.getEmailField().type(email)
    }

    fillAddressForm({company, address1, address2, city, country, region, zipCode} = {}) {
        if(address1) this.getAddress1Field().type(address1)
        if(city) this.getCityField().type(city)
        if(country) this.getCountryField().select(country)
        if(region) this.getRegionField().select(region)
        if(zipCode) this.getZipCodeField().type(zipCode)
    }
}

export default new CreateAccountForm()