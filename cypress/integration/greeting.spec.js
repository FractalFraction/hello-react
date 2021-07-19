describe("Here is a test to check the user interface",()=>{
  it("checking a greeting is displayed on the page",()=>{
    //cy.visit('http://localhost:3000');
    cy.visit('/')
    cy.get('#greeting').should('contain','Hello, Colin!')
  })
})