import React from 'react';
import { baseUrl } from './config';

class Test extends React.Component {
  constructor() {
    super();

    this.state = {
      totalNumberOfDonations: 0,
      totalDonationValue: 0
    }
  }

  async componentDidMount() {
    const [ totalNumberOfDonations, totalDonationValue ] = await Promise.all([
      fetch(`${baseUrl}/donations/count`).then(res => res.json()).catch(err => err),
      fetch(`${baseUrl}/donations`).then(res => res.json()).catch(err => err)
    ]);

    this.setState({ 
      totalNumberOfDonations: totalNumberOfDonations.count || 0,
      totalDonationValue: Array.isArray(totalDonationValue) ? 
      totalDonationValue.reduce((sum, curr) => sum + curr.amount, 0) : 0,
    });
  }


  render() {
    return (
    <div>
      <h3>Total Number Of donations</h3>
        { this.state.totalNumberOfDonations + ""}
      <h3>Total value of donations</h3>
        { this.state.totalDonationValue + ""}
    </div>
    );
  }
}
export default Test;