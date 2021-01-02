import { Component } from 'react'

import FileSummary from '../components/summary/FileSummary'
import ResultFileDownload from '../components/summary/ResultFileDownload'
import SummaryIssues from '../components/summary/SummaryIssues'

class Summary extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div>
            <FileSummary />
          </div>
          <div>
            <SummaryIssues />
          </div>
        </div>
        <div className="col s12 m6">
          <ResultFileDownload />
        </div>
      </div>
    )
  }
}

export default Summary
