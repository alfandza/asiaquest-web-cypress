describe('AQI Website Test', () => {
    it('Open AQI Website', () => {
      cy.visit('https://aqi.co.id/')
      cy.get('[src="https://www.asia-quest.jp/hs-fs/hubfs/raw_assets/public/AsiaQuest_August2021/images/logo-white.png?width=1000&name=logo-white.png"]').should('exist')
      cy.get('#hs-eu-confirmation-button').click()
    })
    it('Check All Menu', () => {
        cy.visit('https://aqi.co.id/')
        cy.get('[src="https://www.asia-quest.jp/hs-fs/hubfs/raw_assets/public/AsiaQuest_August2021/images/logo-white.png?width=1000&name=logo-white.png"]').should('exist')
        cy.get('#hs-eu-confirmation-button').click()
    
        for (let i = 0; i < 7; i++){
          cy.get('[class="hs-menu-item hs-menu-depth-1 hs-item-has-children"]').eq(i).should('exist').click().wait(2000)
          cy.get('[class="hs-menu-item hs-menu-depth-1 hs-item-has-children is-open"]').should('exist').click().wait(2000)
        }
      })
      it('Change Language', () => {
        cy.visit('https://aqi.co.id/')
        cy.get('[src="https://www.asia-quest.jp/hs-fs/hubfs/raw_assets/public/AsiaQuest_August2021/images/logo-white.png?width=1000&name=logo-white.png"]').should('exist')
        cy.get('#hs-eu-confirmation-button').click()
    
        //Change to Japanese
        cy.get('[class="dropdown-toggle"]').click().invoke('attr','class').should('eq', 'dropdown-toggle active').wait(2000)
        cy.get('.dropdown-menu a').eq(0).click().url().should('eq','https://www.asia-quest.jp/').wait(2000)
    
        //Change to English
        cy.get('[class="dropdown-toggle"]').click().invoke('attr','class').should('eq', 'dropdown-toggle active').wait(2000)
        cy.get('.dropdown-menu a').eq(1).click().url().should('eq','https://www.asia-quest.jp/en/').wait(2000)
      })
  })