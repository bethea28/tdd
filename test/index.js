/*
rentroll for all props
for all properties total

*/
const Mocha = require('mocha')
const assert = require('assert')
const mocha = new Mocha()
mocha.suite.emit('pre-require', this, 'solution', mocha)

class Account {
  constructor(config = {}) {
    this.config = config
    this.total = 0
    this.grossOrNet = 'net'
    this.annualOrMonthly = 'annual'
  }
  addProperty(rent, expenses) {
    if (this.grossOrNet === 'net') {
      let final
      final = rent - expenses // net
      this.total += final
    } else {
      let final = rent
      this.total += final
    }
    // return
  }
  rentRoll() {
    return this.total
  }
}

describe('Account', () => {
  describe('rent roll', () => {
    it('returns a rent roll', () => {
      const account = new Account()
      assert(account.rentRoll() === 0, 'rent roll should be 0')
    })

    it('returns the sum of the properties rent', () => {
      const account = new Account()
      account.addProperty(5000, 0)
      account.addProperty(500, 0)

      assert.equal(account.rentRoll(), 5500)
    })

    describe('when the account is configured for net rent roll', () => {
      it('returns the sum of the properties rent minus their expenses', () => {
        const account = new Account({ grossOrNet: 'net' })
        account.addProperty(5000, 500)
        account.addProperty(500, 100)

        assert.equal(account.rentRoll(), 4900)
      })
    })
    describe('when the account is configured for net rent roll', () => {
      it('returns the sum of the properties rent minus their expenses', () => {
        const account = new Account({ grossOrNet: 'net' })
        account.addProperty(5000, 500)
        account.addProperty(500, 100)

        assert.equal(account.rentRoll(), 6000)
      })
    })

    // describe('when the account is configured for yearly rent roll', () => {
    //   it('returns the sum of the rent roll multiplied by 12 months', () => {
    //     const account = new Account({ annualOrMonthly: 'annual' })
    //     account.addProperty(5000, 500)
    //     account.addProperty(500, 100)

    //     assert.equal(account.rentRoll(), 66000)
    //   })
    // })

    //     describe("when the account is configured for yearly and net rent roll", () => {
    //       it("returns the sum of the rent roll multiplied by 12 months", () => {
    //         const account = new Account({ annualOrMonthly: "annual", grossOrNet: "net" });
    //         account.addProperty(5000, 500)
    //         account.addProperty(500, 100)

    //         assert.equal(account.rentRoll(), 58800);
    //       });
    //     });
  })
})

mocha.run()
