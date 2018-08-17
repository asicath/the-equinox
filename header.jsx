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
                1.1-7, 3.1, and 777 are complete, 1.8-10 are in the works and will be released as they are completed.
            </div>
            <div className="description-item">
                Please consider supporting this project by either <a href="donate.html">donating directly</a> or <a href="merch.html">buying merchandise created from the scans</a>.
            </div>
            <div className="description-item">

                <div className="inline">Print editions of Vol 1. No 1-4. now available at most major online book retailers!</div>
                <div className="buy-links">
                    <div>
                        <div className="buy-site">Barnes & Noble:</div>
                        <a href="https://www.barnesandnoble.com/w/the-equinox-aleister-crowley/1128251976?ean=9781642556858">No.1</a>&nbsp;|&nbsp;
                        <a href="https://www.barnesandnoble.com/w/the-equinox-aleister-crowley/1128594132">No.2</a>&nbsp;|&nbsp;
                        <a href="https://www.barnesandnoble.com/w/the-equinox-aleister-crowley/1128848355">No.3</a>&nbsp;|&nbsp;
                        <a href="https://www.barnesandnoble.com/w/the-equinox-aleister-crowley/1129057862">No.4</a>
                    </div>
                    <div>
                        <div className="buy-site">Amazon US:</div>
                        <a href="https://www.amazon.com/dp/1642556858">No.1</a>&nbsp;|&nbsp;
                        <a href="https://www.amazon.com/dp/1643167804">No.2</a>&nbsp;|&nbsp;
                        <a href="https://www.amazon.com/dp/1643161563">No.3</a>&nbsp;|&nbsp;
                        <a href="https://www.amazon.com/dp/1643161571">No.4</a>
                    </div>
                    <div>
                        <div className="buy-site">Amazon UK:</div>
                        <a href="https://www.amazon.co.uk/dp/1642556858">No.1</a>&nbsp;|&nbsp;
                        <a href="https://www.amazon.co.uk/dp/1643167804">No.2</a>&nbsp;|&nbsp;
                        <a href="https://www.amazon.co.uk/dp/1643161563">No.3</a>&nbsp;|&nbsp;
                        <a href="https://www.amazon.co.uk/dp/1643161571">No.4</a>
                    </div>
                    <div>
                        <div className="buy-site">Amazon DE:</div>
                        <a href="https://www.amazon.de/dp/1642556858">No.1</a>&nbsp;|&nbsp;
                        <a href="https://www.amazon.de/dp/1643167804">No.2</a>&nbsp;|&nbsp;
                        <a href="https://www.amazon.de/dp/1643161563">No.3</a>&nbsp;|&nbsp;
                        <a href="https://www.amazon.de/dp/1643161571">No.4</a>
                    </div>
                </div>
            </div>
            <div>
                <a href="https://groups.google.com/forum/#!forum/keepsilence/join">Join our announcement only email list</a> or <a href="https://groups.google.com/forum/feed/keepsilence/msgs/rss.xml?num=15">subscribe to the rss feed</a> to be notified when new content is available or when new print versions are released.
            </div>
        </div>;
    }

}



