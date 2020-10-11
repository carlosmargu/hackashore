import React from 'react';
import { Link } from 'react-router-dom';
import './FooterComponent.css';

function Footer(props) {
    return(
    <div className="footer textwhite">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-sm-4 ">
                  <div id="social">
              			<a class="facebookBtn smGlobalBtn" href="#" ></a>
              			<a class="twitterBtn smGlobalBtn" href="#" ></a>
              			<a class="googleplusBtn smGlobalBtn" href="#" ></a>
              			<a class="linkedinBtn smGlobalBtn" href="#" ></a>
              			<a class="pinterestBtn smGlobalBtn" href="#" ></a>
              			<a class="tumblrBtn smGlobalBtn" href="#" ></a>
              			<a class="rssBtn smGlobalBtn" href="#" ></a>
              		</div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p className="parrafopa">© HackaShore </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
