import React from 'react';

export class Header extends React.Component {

    render() {
        return <div className="header">
                <div className="super-title">SCANS FROM ALEISTER CROWLEY'S</div>
                <div className="title">THE EQUINOX</div>
            </div>;
    }

}

export class Description extends React.Component {

    render() {
        return <div className="description">
            <div className="description-item">
                All original scans from first editions of The Equinox and other related works, <a href="process.html">learn about the process here</a>.
            </div>
            <div className="description-item">
                Please consider supporting this project by either <a href="donate.html">donating directly</a> or <a href="merch.html">buying merchandise created from the scans</a>.
            </div>
            <div className="description-item">
                Print edition now available at most major online book retailers! <a href="https://www.barnesandnoble.com/w/the-equinox-aleister-crowley/1128251976?ean=9781642556858">Barnes & Noble</a> | <a href="https://www.amazon.com/dp/1642556858/">Amazon</a>
            </div>
            <div className="description-item">
                1.1-5, 3.1, and 777 are complete, 1.6-10 are in the works and will be released as they are completed.
            </div>
            <div>
                <a href="https://groups.google.com/forum/#!forum/keepsilence/join">Join our announcement only email list</a> or <a href="https://groups.google.com/forum/feed/keepsilence/msgs/rss.xml?num=15">subscribe to the rss feed</a> to be notified when new content is available or when new print versions are released.
            </div>
        </div>;
    }

}



