/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('OrangeHRM', function () {

    before('initialize fixure', function () {
        cy.fixture('TestData/Login').then(function (data) {
            this.data = data
        })
    })
    it('Login to OrangeHRM and VerifyDashboard', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.wait(3000)
        cy.xpath('//input[@id="txtUsername"]', { timeout: 10000 }).should('be.visible');
        cy.xpath('//input[@id="txtUsername"]').type(this.data.userName)
        cy.xpath('//input[@id="txtPassword"]').type(this.data.passWord)
        cy.xpath('//input[@id="btnLogin"]').click()
        cy.wait(10000)
        cy.xpath('//a[@id="menu_dashboard_index"]').should('contain', 'Dashboard')
    })

})