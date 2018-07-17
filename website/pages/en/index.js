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
            <Button class="btn btn-blue" href="#try">Create an STO</Button>
            <Button href={docUrl('doc1.html', language)}> Polymath Core</Button>
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
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Core Ethereum Smart Contracts for Polymath',
        image: imgUrl('settings.svg'),
        imageAlign: 'top',
        title: 'Solidity Docs', 
        infoLink: 'https://github.com/PolymathNetwork/polymath-core',
      },
      {
        content: 'Take a walk through the process of an STO',
        image: imgUrl('pop.svg'),
        imageAlign: 'top',
        title: 'STO Tutorial',
      },
      {
        content: 'Polymath Core TORO v1 .1 .0 ',
        image: imgUrl('pop.svg'),
        imageAlign: 'top',
        title: 'News Releases',
      }
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className = "productShowcaseSection launchSection paddingBottom"
    style={{textAlign: 'center', background: '#404e87'}}>
    < h2 > Launch Securities Token in Minutes.<br/> <span className="launchSection-raise">Raise Funds</span> </h2>
  </div>
);

const FeatureWork = props => (
  <div
    className = "workSection"
    style={{textAlign: 'center'}}>
    < h1 className="workSection-heading"> How Polymath Works</h1>
    < div className = "workSection-details" > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
    <button className="button btn-blue">GET STARTED</button>
    <div className="workSection-tab">
      <div className="workSection-tab-row">
        < div className = "workSection-tab-col terminal">
          <img src="/img/Terminal_1.svg" className="wrokSection-img"/>
        </div>
        < div className = "workSection-tab-col terminal" >
          <img src="/img/Terminal_2.svg" className="wrokSection-img"/>
        </div>
      </div>
      <div className="workSection-tab-row">
        < div className = "workSection-tab-col">
          < div className = "workSection-tab-col-heading">function verifyTransfer</div>
          <div className="workSection-tab-col-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        < div className = "workSection-tab-col">
          < div className = "workSection-tab-col-heading">function burn</div>
          < div className = "workSection-tab-col-content" > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
        </div>
      </div>
      <div className="workSection-tab-row">
        < div className = "workSection-tab-col">
          < div className = "workSection-tab-col-heading">function mint</div>
          <div className="workSection-tab-col-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        < div className = "workSection-tab-col">
          < div className = "workSection-tab-col-heading">functionMinted / functionBurned</div>
          < div className = "workSection-tab-col-content" > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
        </div>
      </div>
    </ div>
  </div>
);

const FeatureWorth = props => (
  <div className = "worthSection">
    <div className="worthSection-number">Over $1,000,000,000,000</div>
    <div className="worthSection-content">worth of digital assets powered by Polymath smart contracts</div>
    <div className="worthSection-companies">
      <img src='/img/ipwe.png' className="worthSection-companies-img"/>
      <img src='/img/corl.png' className="worthSection-companies-img"/>
      <img src='/img/ipwe.png' className="worthSection-companies-img"/>
    </div>
    <div className="worthSection-seen">
      {/* <img src="/img/gitter.svg" className="worthSection-seen-logo gitter"/> */}
      <div className="worthSection-seen-icon">
      <a href="https://gitter.im/PolymathNetwork/Lobby/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" className="worthSection-seen-logo gitter" viewBox="0 0 384 512">
          <path d="M66.4 322.5H16V0h50.4v322.5zM166.9 76.1h-50.4V512h50.4V76.1zm100.6 0h-50.4V512h50.4V76.1zM368 76h-50.4v247H368V76z"/>
        </svg>
      </a>
      </div>
      {/* <img src="/img/github.svg" className="worthSection-seen-logo github"/> */}
      <div className="worthSection-seen-icon">
      <a href='https://github.com/PolymathNetwork/' target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" className="worthSection-seen-logo github" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
      </a>
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
          <FeatureWork/>
          < FeatureWorth/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
