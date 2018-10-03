/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <script src={this.props.config.baseUrl + 'js/timeline.js'}></script>
        <div className="ck_form_container ck_inline" data-ck-version="7">
				<div className="ck_form ck_minimal">
					<div className="ck_form_fields">
						{/* <h3 className="ck_form_title">Get Developer Updates</h3> */}
						

						<div id="ck_success_msg" style={{display: 'none'}}>
							<p>Success! Now check your email to confirm your subscription.</p>
						</div>

					
						<form id="ck_subscribe_form" className="ck_subscribe_form" action="https://app.convertkit.com/landing_pages/351382/subscribe"
						 data-remote="true">
							<input type="hidden" value="{&quot;form_style&quot;:&quot;minimal&quot;,&quot;converted_behavior&quot;:&quot;show&quot;,&quot;days_no_show&quot;:&quot;15&quot;,&quot;delay_seconds&quot;:&quot;10&quot;,&quot;display_devices&quot;:&quot;all&quot;,&quot;display_position&quot;:&quot;br&quot;,&quot;embed_style&quot;:&quot;inline&quot;,&quot;embed_trigger&quot;:&quot;scroll_percentage&quot;,&quot;scroll_percentage&quot;:&quot;70&quot;}"
							 id="ck_form_options" />
							<input type="hidden" name="id" value="351382" id="landing_page_id" />
							<input type="hidden" name="ck_form_recaptcha" value="" id="ck_form_recaptcha" />
							<div className="ck_errorArea">
								<div id="ck_error_msg" style={{display: 'none'}}>
									<p>There was an error submitting your subscription. Please try again.</p>
								</div>
							</div>
              <div style={{float:'left',width:'30%',height:'50px',padding:'11px 0', fontSize:'24px', fontWeight:'bold'}}>
              <p>Get Developer Updates</p>
              </div>
							<div className="ck_control_group ck_email_field_group">
								<label className="ck_label" for="ck_emailField" style={{display: 'none'}}>Email Address</label>
								<input type="email" name="email" className="ck_email_address" id="ck_emailField" placeholder="Email Address"
								 required />
							</div>
							<div className="ck_control_group ck_captcha2_h_field_group ck-captcha2-h" style={{position: 'absolute !important',left:'-999em !important'}}>
								<input type="text" name="captcha2_h" className="ck-captcha2-h" id="ck_captcha2_h" placeholder="We use this field to detect spam bots. If you fill this in, you will be marked as a spammer." />
							</div>


							<button className="subscribe_button ck_subscribe_button btn fields" id="ck_subscribe_button">
								Join Mailing List
							</button>
							<span className="ck_guarantee">
								We won't send you spam. Unsubscribe at any time.
							</span>
						</form>
					</div>

				</div>

			</div>
        <ul className="footer-list">
          <li className="footer-list-item" style={{ marginTop: '6px' }}>&copy; 2018 Polymath</li>
          {/* <li className="footer-list-item">
                <a className="footer-list-item-link" href="#">Terms of use</a>
            </li>
            <li className="footer-list-item">
                <a className="footer-list-item-link" href="#">Privacy Policy</a>
            </li> */}
        </ul>
      </footer>
      // <footer className="nav-footer" id="footer">
      //   <section className="sitemap">
      //     <a href={this.props.config.baseUrl} className="nav-home">
      //       {this.props.config.footerIcon && (
      //         <img
      //           src={this.props.config.baseUrl + this.props.config.footerIcon}
      //           alt={this.props.config.title}
      //           width="66"
      //           height="58"
      //         />
      //       )}
      //     </a>
      //     <div>
      //       <h5>Docs</h5>
      //       <a href={this.docUrl('doc1.html', this.props.language)}>
      //         Getting Started (or other categories)
      //       </a>
      //       <a href={this.docUrl('doc2.html', this.props.language)}>
      //         Guides (or other categories)
      //       </a>
      //       <a href={this.docUrl('doc3.html', this.props.language)}>
      //         API Reference (or other categories)
      //       </a>
      //     </div>
      //     <div>
      //       <h5>Community</h5>
      //       <a href={this.pageUrl('users.html', this.props.language)}>
      //         User Showcase
      //       </a>
      //       <a
      //         href="https://blog.polymath.network/announcing-the-polymath-network-bug-bounty-3e4a78ac9809/"
      //         target="_blank"
      //         rel="noreferrer noopener">
      //         Bug Bounty Program
      //       </a>
      //       <a href="https://gitter.im/PolymathNetwork/Lobby/">Gitter Channel</a>
      //       <a
      //         href="https://twitter.com/PolymathNetwork/"
      //         target="_blank"
      //         rel="noreferrer noopener">
      //         Twitter
      //       </a>
      //     </div>
      //     <div>
      //       <h5>More</h5>
      //       <a href="https://blog.polymath.network/">Blog</a>
      //       <a href="https://github.com/PolymathNetwork/">GitHub</a>
      //       <a
      //         className="github-button"
      //         href={this.props.config.repoUrl}
      //         data-icon="octicon-star"
      //         data-count-href="/facebook/docusaurus/stargazers"
      //         data-show-count={true}
      //         data-count-aria-label="# stargazers on GitHub"
      //         aria-label="Star this project on GitHub">
      //         Star
      //       </a>
      //     </div>
      //   </section>

      //   <a
      //     href="https://github.com/PolymathNetwork/"
      //     target="_blank"
      //     rel="noreferrer noopener"
      //     className="fbOpenSource">
      //     <img
      //       src={this.props.config.baseUrl + 'img/bull.png'}
      //       alt="Polymath Open Source"
      //       width="170"
      //       height="45"
      //     />
      //   </a>
      //   <section className="copyright">{this.props.config.copyright}</section>
      // </footer>
    );
  }
}

module.exports = Footer;
