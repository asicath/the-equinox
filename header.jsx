import React from 'react';

export class Header extends React.Component {

    render() {
        return <div className="header">
                <div className="super-title">SCANS FROM ALEISTER CROWLEY'S</div>
                <div className="title">THE EQUINOX</div>
            </div>;
    }

}

/*
1.5
https://www.barnesandnoble.com/w/the-equinox-aleister-crowley/1129261507
https://www.amazon.com/Equinox-Keep-Silence-Vol-No/dp/164316158X
https://www.amazon.co.uk/dp/164316158X
https://www.amazon.de/dp/164316158X
https://www.bookdepository.com/Equinox-Aleister-Crowley/9781643161587
 */

export class Description extends React.Component {

    render() {

        let amazonIds = [
            '1642556858', // 1
            '1643167804', // 2
            '1643161563', // 3
            '1643161571', // 4
            '164316158X', // 5
            '1643161598', // 6
            '1644673568', // 7
            '1644673576', // 8
            '1644673584', // 9
            '1644673592', // 10
        ];

        let retailers = [
            {
                title: 'Barnes & Noble',
                url: 'https://www.barnesandnoble.com/w/the-equinox-aleister-crowley/###',
                ids: [
                    '1128251976', // 1
                    '1128594132', // 2
                    '1128848355', // 3
                    '1129057862', // 4
                    '1129261507', // 5
                    '1129551990', // 6
                    '1129958292', // 7
                    '1130791429', // 8
                    '1130791440', // 9
                    '1131970593', // 10
                ]
            },
            {
                title: 'Amazon US',
                url: 'https://www.amazon.com/dp/###',
                ids: amazonIds
            },
            {
                title: 'Amazon UK',
                url: 'https://www.amazon.co.uk/dp/###',
                ids: amazonIds
            },
            {
                title: 'Amazon DE',
                url: 'https://www.amazon.de/dp/###',
                ids: amazonIds
            }
        ];


        let buyLinks = retailers.map((retailer, i) => {
            let links = retailer.ids.map((id, index) => {
                if (id === '') return;
                let url = retailer.url.replace('###', id);
                let space = (index === 0) ? '' : ' | ';
                return <span key={`link-${i}-${index}`}>{space}<a target="_blank" href={url}>1.{index+1}</a></span>
            });

            return <div className="retailer" key={`retailer-${i}`}>
                <div className="buy-site">{retailer.title}:</div>
                {links}
            </div>
        });

        return <div className="description">
            <div className="description-item">
                All original scans from first editions of The Equinox and other related works, <a href="process.html">learn about the process here</a>.
            </div>
            <div className="description-item">
                <a href="https://groups.google.com/forum/#!forum/keepsilence/join">Join our announcement only email list</a> or <a href="https://groups.google.com/forum/feed/keepsilence/msgs/rss.xml?num=15">subscribe to the rss feed</a> to be notified when new content is available or when new print versions are released.
            </div>
            <div className="description-item">
                Please consider supporting this project by either <a href="donate.html">donating directly</a> or <a href="merch.html">buying merchandise created from the scans</a>.
            </div>
            <div className="description-item retail-section">

                <div className="retail-desc-top" style={{marginBottom:'0.5em'}}>
                    <div style={{display:'inline-block', marginRight:'0.5em'}}><img src="img/333icon.png" style={{height:'3em'}}/></div>
                    <div style={{display:'inline-block'}}>
                        <div style={{fontSize: '0.8em', fontWeight:'bold', marginBottom:'0.2em', marginTop:'-0.2em'}}>Print editions of The Book of Lies are now available!</div>
                        <div>
                            <div style={{display:'inline-block', width:'12.5em', textAlign:'right', marginRight:'0.5em'}}>Original Size <span style={{fontSize:'0.7em'}}>(Paperback, 4"x6")</span>:</div> <a target="_blank" href="https://www.barnesandnoble.com/w/1136418049">Barnes & Noble</a>
                            &nbsp;|&nbsp;Amazon <a target="_blank" href="https://www.amazon.com/dp/1646691830">US</a>
                            &nbsp;-&nbsp;<a target="_blank" href="https://www.amazon.co.uk/dp/1646691830">UK</a>
                            &nbsp;-&nbsp;<a target="_blank" href="https://www.amazon.de/dp/1646691830">DE</a>
                        </div>
                        <div>
                            <div style={{display:'inline-block', width:'12.5em', textAlign:'right', marginRight:'0.5em'}}>Oversized <span style={{fontSize:'0.7em'}}>(Hardcover, 7"x10")</span>:</div> <a target="_blank" href="https://www.barnesandnoble.com/w/1136418047">Barnes & Noble</a>
                            &nbsp;|&nbsp;Amazon <a target="_blank" href="https://www.amazon.com/dp/1646691849">US</a>
                            &nbsp;-&nbsp;<a target="_blank" href="https://www.amazon.co.uk/dp/1646691849">UK</a>
                            &nbsp;-&nbsp;<a target="_blank" href="https://www.amazon.de/dp/1646691849">DE</a>
                        </div>
                    </div>
                </div>

                <div className="inline retail-desc">
                    Print editions for all of Vol 1. are now available at most major online book retailers!
                    Note that due to the print on demand nature process, sometimes these retailers indicate out of stock, but if you order they generally process the order quickly.
                </div>
                <div className="buy-links">
                    {buyLinks}
                </div>

                <div style={{margin:'0.5em 0.5em 0 0.5em'}}>
                    <div style={{display:'inline-block', marginRight:'0.5em'}}>
                        <a href="https://www.etsy.com/listing/763207813/thelema-agape-enamel-pin-set-thelma-agap?ref=shop_home_feat_1">
                            <img src="img/thelema-book.jpg" style={{height:'3em'}}/>
                        </a>
                    </div>
                    <div style={{display:'inline-block'}}>
                        <a href="https://www.etsy.com/shop/HorizonLodge?ref=keepsilence&fbclid=IwAR3rar4Wh6j0ud7pNJaNmJyvJkY-eed48w-84NPKW-sUft-4od8M1t-geiM">
                            Limited print edition of ΘΕΛΗΜΑ now available!
                            <br/>Original print size or hardcover oversized edition.
                            <br/>100% of net proceeds go to Horizon Lodge O.T.O. in Seattle, WA.
                        </a>
                    </div>

                </div>
            </div>

        </div>;
    }

}



