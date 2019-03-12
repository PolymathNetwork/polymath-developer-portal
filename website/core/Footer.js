/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + "docs/" + (language ? language + "/" : "") + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + "/" : "") + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <script
          charset="utf-8"
          type="text/javascript"
          src="https://js.hsforms.net/forms/v2.js"
        />
        <script src={this.props.config.baseUrl + "js/hubspot.js"} />
        <div className="workSection">
          <h2>Subscribe to stay up to date on the security token revolution</h2>
          <p>
            <small>We won't send you spam. Unsubscribe at any time.</small>
          </p>
          <div id="hubspotForm" />
        </div>
        <div className="worthSection">
          <h2>Any Questions? Need Help?</h2>
          <p>support@polymath.zendesk.com</p>
        </div>
        <ul className="footer-list">
          <li className="footer-list-item" style={{ marginTop: "6px" }}>
            &copy; {currentYear} Polymath
          </li>
        </ul>
      </footer>
    );
  }
}

module.exports = Footer;
