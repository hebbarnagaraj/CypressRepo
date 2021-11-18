import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given('open the browser and enter the URL', () => {

    cy.visit('https://impl.workday.com/wday/authgwy/pwc_dpt1/login.htmld?returnTo=%2fpwc_dpt1%2fd%2fhome.htmld')
    cy.wait(3000)

})
When('enter userName and Password', () => {
    cy.xpath('//input[@aria-label="Username"]', { timeout: 10000 }).should('be.visible');
    cy.xpath('//input[@aria-label="Username"]').type('mismail-impl')
    cy.xpath('//input[@aria-label="Password"]').type('07#Workday')
})
Then('click login and verify Homepage', () => {
    cy.xpath('//button[.="Sign In"]').click()
    cy.wait(10000)
    cy.xpath('//button[@data-automation-id="inbox_preview"]').should('be.visible')
})
