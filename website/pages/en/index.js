/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button className="btn btn-blue" href="https://blog.polymath.network/create-your-own-security-token-offering-sto-with-polymath-7d37f8cd9a6c" target="_blank">Create an STO</Button>
            <Button href={docUrl('doc1.html', language)}> Getting Started</Button>
            <Button href={docUrl('doc2.html', language)}>Bug Bounty Program</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}



const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <div class="gridBlock">

      <div class="blockElement alignCenter imageAlignTop fourByGridBlock">
        <a href="https://github.com/PolymathNetwork/polymath-core">
          <div class="blockImage">
            <img src="/img/settings.svg" />
          </div>
          <div class="blockContent">
            <h2>
              <div><span><p>Polymath Core</p></span></div>
            </h2>
            <div><span><p>Core Ethereum Smart Contracts for Polymath</p></span></div>
          </div>
        </a>
      </div>


      <div class="blockElement alignCenter imageAlignTop fourByGridBlock">
        <a href={`${siteConfig.baseUrl}docs/doc4.html`}>
          <div class="blockImage">
            <img src="/img/pop.svg" />
          </div>
          <div class="blockContent">
            <h2>
              <div><span><p>STO Tutorial</p></span></div>
            </h2>
            <div><span><p>Take a walkthrough the process of creating a STO</p></span></div>
          </div>
        </a>
      </div>


      <div class="blockElement alignCenter imageAlignTop fourByGridBlock">
        <a href="https://blog.polymath.network/polymath-core-mainnet-v1-3-0-release-8921e8046508" target="_blank">
          <div class="blockImage">
            <img src="/img/star.svg" />
          </div>
          <div class="blockContent">
            <h2>
              <div><span><p>News Releases</p></span></div>
            </h2>
            <div><span><p>Polymath Core v1.3.0</p></span></div>
          </div>
        </a>
      </div>

    </div>


  </Container >
);


const Features = props => (
  <Block layout="threeColumn">

  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection launchSection paddingBottom"
    style={{ textAlign: 'center', background: '#404e87' }}>
    <h2>
      Launch Securities Tokens in Minutes
    </h2>
    <div className="row" id="sto-section">
      <div className="col-1-of-2">
        <h3> What are Security Tokens? </h3>
        <div className="workSection-tab-content"><p class="section-text">A Security Token is a free, open standard that describes how to build transfer restricted securities tokens on the Ethereum blockchain. While most tokens have no limitations on who can receive, or participate in the token sale, the Security Token restricts token transfers to verified investors only.</p></div>
      </div>
      <div className="col-1-of-2">
        <h3> How do they differ from Utility Tokens? </h3>
        <div className="workSection-tab-content">
          <p class="section-text">Utility tokens represent access to a network, and your token purchase represents the ability to buy goods or services from that network, product or service.On the other hand, security tokens represent complete or fractional ownership in an asset (like shares in a company).</p>
        </div>
      </div>
    </div>

    <a href="https://thesecuritytokenstandard.org" target="_blank" class="button btn-white"> Learn more about Security Tokens</a>
  </div>



);

const EventsTimeline = props => (
  <div
    className="workSection"
    style={{ textAlign: 'center' }}>
    <h1 className="workSection-heading"> Upcoming Events</h1>
    <div className="workSection-details"> Meet the members of our developer team at any of the upcoming events </div>
    <div className="row" id="events-section">

      <div className="col-1-of-3 helper-box">
        <h3 class="events-title"> Berlin </h3>
        <div className="workSection-tab-content">
          <p class="section-text">
            ETH Berlin
            <br />
            September 7-9, 2018
          </p>
        </div>
      </div>
      <div className="col-1-of-3 helper-box">
        <h3 class="events-title"> Hong Kong </h3>
        <div className="workSection-tab-content">
          <p class="section-text">
            ETHIS
              <br />
            September 8-9, 2018
             </p>
        </div>
      </div>
      <div className="col-1-of-3 helper-box">
        <h3 class="events-title"> Toronto </h3>
        <div className="workSection-tab-content">
          <p class="section-text">
            Hack-The-North
            <br />
            September 14-16, 2018
          </p>
        </div>
      </div>
    </div>

    <a href="https://thesecuritytokenstandard.org" target="_blank" class="button btn-white"> Learn more about Security Tokens</a>
  </div>

);





const FeatureWork = props => (
  <div
    className="workSection"
    style={{ textAlign: 'center' }}>
    <h1 className="workSection-heading"> How Polymath Works</h1>
    <div className="workSection-details" > An interface between financial securities and the blockchain, simplifying the process for issuers to overcome the complex technical and legal challenges token creation. </div>
    <a className="button btn-blue" href={docUrl('doc1.html')}>GET STARTED</a>
    <div className="workSection-tab">
      <div className="row">
        <div className="col-1-of-2 terminal">
          <img src="/img/Terminal_1.svg" className="wrokSection-img" />
        </div>
        <div className="col-1-of-2 terminal">
          <img src="/img/Terminal_2.svg" className="wrokSection-img" />
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="workSection-tab-heading"> modules / STO / ISTO.sol </div>
          <div className="workSection-tab-content">This is an interface to be implemented by all STO modules. This contract is used to verify the investment, whether the investor provide the allowance to the STO or not.</div>
        </div>
        <div className="col-1-of-2">
          <div className="workSection-tab-heading">contracts / interfaces / IST20.sol</div>
          <div className="workSection-tab-content" > This is an interface for the ST20 Security Token standard. It mints new tokens and assigns them to the target investor. It also enables a Burn function used to burn the securityToken.</div>
        </div>
      </div>
      <div className="row">
        < div className="col-1-of-2">
          < div className="workSection-tab-heading"> contracts / SecurityTokenRegistry.sol </div>
          <div className="workSection-tab-content">Registry contract for issuers to register their security tokens. Creates a new Security Token and saves it to the registry. You can add a new custom Security Token (Token should follow the ISecurityToken interface) and save it to the registry.</div>
        </div>
        < div className="col-1-of-2">
          < div className="workSection-tab-heading">contracts / GeneralPermissionManager.sol</div>
          < div className="workSection-tab-content" > This module allows issuers to define permissions for any actions or functions in any modules which are attached to their token, and then delegate those permissions to 3rd parties. Permissions are named and then defer to PermissionManager modules to check whether an address trying to perform an action has appropriate permission. </div>
        </div>
      </div>
    </ div>
  </div>
);

const FeatureWorth = props => (
  <div className="worthSection">
    <h2>Social Developer Channels</h2>
    <div className="worthSection-seen">

      {/* <img src="/img/gitter.svg" className="worthSection-seen-logo gitter"/> */}
      <div className="worthSection-seen-icon">

        <a href="https://gitter.im/PolymathNetwork/Lobby/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" className="worthSection-seen-logo gitter" viewBox="0 0 384 512">
            <path d="M66.4 322.5H16V0h50.4v322.5zM166.9 76.1h-50.4V512h50.4V76.1zm100.6 0h-50.4V512h50.4V76.1zM368 76h-50.4v247H368V76z" />
          </svg>
        </a>
        <p>Gitter</p>
      </div>
      {/* <img src="/img/github.svg" className="worthSection-seen-logo github"/> */}
      <div className="worthSection-seen-icon">

        <a href='https://github.com/PolymathNetwork/' target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" className="worthSection-seen-logo github" viewBox="0 0 496 512">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>
        <p>Github</p>
      </div>
    </div>
  </div>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />

          <FeatureWork />
          <div className="workSection" style={{ textAlign: 'center' }}>


            <section class="cd-horizontal-timeline">

              <div class="events-content">
                <ol>
                  <li class="selected" data-date="16/01/2018">
                    <h1 className="workSection-heading">v1 Core Smart Contracts Launch</h1>
                    <em>Jan 30, 2018</em>
                    <p>
                      Polymath-core was deployed to Ethereum main net. Delegates all over the globe have signed up and are ready to be a part of building this new protocol for financial securities. The Polymath-core repositories were available for free and fully open source. We also released Polymath.js, a javascript library for building applications (e.g. security token creators, template creators, etc) on top of Polymath.
                    </p>
                  </li>

                  <li data-date="28/02/2018">
                    <h1 className="workSection-heading">Token Distribution & Airdrop</h1>
                    <em>Jan 31, 2018</em>
                    <p>
                      The Polymath team was blown away with the massive level of interest and engagement. To kick start the project and reward the amazing community we airdropped a total of 10,000,000 POLY token to 40, 000 members.
                    </p>
                  </li>

                  <li data-date="20/04/2018">
                    <h1 className="workSection-heading">dApp on Testnet</h1>
                    <em>May 16, 2018</em>
                    <p>
                      The Polymath dApp was officially released on Tesnet. Both developers and interested issuers could walk through the process of creating and launching a security token offering.
                    </p>
                  </li>

                  <li data-date="20/05/2018">
                    <h1 className="workSection-heading">dApp on MainNet</h1>
                    <em>August 2, 2018</em>
                    <p>
                      The Bulls of Polymath worked tirelessly on our contracts and upgrading our mechanisms for the big mainnet release. From now on, we will continue to add features that make the platform even more versatile in order to meet the various needs of all security token issuers.
                    </p>
                  </li>

                  <li data-date="09/07/2018">
                    <h1 className="workSection-heading">First STO Launch</h1>
                    <em>Q4 2018</em>
                    <p>
                      CORL, the first STO to be launched using the Polymath dApp will occur within the coming months .
                    </p>
                  </li>


                </ol>
              </div>
              <div class="timeline">
                <div class="events-wrapper">
                  <div class="events">
                    <ol>
                      <li><a href="#0" data-date="16/01/2018" class="selected">v1 Smart <br />Contracts</a></li>
                      <li><a href="#0" data-date="28/02/2018">Token <br />Airdrop</a></li>
                      <li><a href="#0" data-date="20/04/2018">TestNet</a></li>
                      <li><a href="#0" data-date="20/05/2018">MainNet</a></li>
                      <li><a href="#0" data-date="09/07/2018">First STO Launch</a></li>
                    </ol>

                    <span class="filling-line" aria-hidden="true"></span>
                  </div>
                </div>

                <ul class="cd-timeline-navigation">
                  <li><a href="#0" class="prev inactive">Prev</a></li>
                  <li><a href="#0" class="next">Next</a></li>
                </ul>
              </div>

            </section>

          </div>
          <EventsTimeline />

          <FeatureWorth />
          <div className="worthSection">
            <h2>Any Questions? Need Help?</h2>
            <p>support@polymath.zendesk.com</p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
