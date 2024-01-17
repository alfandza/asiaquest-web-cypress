describe('AQI Website Test', () => {
  it('Open AQI Website', () => {
    cy.visit('https://aqi.co.id/')
    cy.get('[src="https://www.asia-quest.jp/hs-fs/hubfs/raw_assets/public/AsiaQuest_August2021/images/logo-white.png?width=1000&name=logo-white.png"]').should('exist')
    cy.get('#hs-eu-confirmation-button').click()
  })
})