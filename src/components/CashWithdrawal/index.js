import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {money: 2000}

  updateBalance = value => {
    this.setState(prevState => ({money: prevState.money - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {money} = this.state
    return (
      <div className="main-container">
        <div className="name-container">
          <h1 className="logo">S</h1>
          <h1 className="name">Sarah Williams</h1>
        </div>
        <div className="balance-container">
          <p>Your Balance</p>
          <div className="amount-container">
            <p className="amount">{money}</p>
            <p>In Rupees</p>
          </div>
        </div>
        <p className="withdraw">Withdraw</p>
        <p className="sum">CHOOSE SUM (IN RUPEES)</p>
        <ul className="denominations-list">
          {denominationsList.map(each => (
            <DenominationItem
              key={each.id}
              denominationDetails={each}
              updateBalance={this.updateBalance}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
