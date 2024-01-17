describe('Open Menu All Tab', () => {
  it('Check All Menu', () => {
    cy.visit('https://aqi.co.id/')
    cy.get('[src="https://www.asia-quest.jp/hs-fs/hubfs/raw_assets/public/AsiaQuest_August2021/images/logo-white.png?width=1000&name=logo-white.png"]').should('exist')
    cy.get('#hs-eu-confirmation-button').click()

    for (let i = 0; i < 6; i++){
      cy.get('[class="hs-menu-item hs-menu-depth-1 hs-item-has-children"]').eq(i).should('exist').click().wait(2000)
      cy.get('[class="hs-menu-item hs-menu-depth-1 hs-item-has-children is-open"]').should('exist').click().wait(2000)
    }
  })
})