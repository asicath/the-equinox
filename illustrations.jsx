import React from 'react';
import {render} from 'react-dom';
import {Header, Description} from './header.jsx';

function main() {
    return render(
        <Index />,
        document.getElementById('root')
    );
}

class Index extends React.Component {

    render() {

        return <div className="div_main">

            <Header />
            <Description />

            <div className="illustration-header"><a href="illustrations.html">Illustrations</a></div>
            <a href="https://imgur.com/Fi9qR1Y"><img src="img/_cover-3.1.jpg"/></a>
            <a href="donate.html"><img src="img/donate.png"/></a>
            <a href="https://imgur.com/mN4eUoF"><img src="img/_cover-1.jpg"/></a>
            <a href="https://imgur.com/OgigrBI"><img src="img/therion2.jpg"/></a>
            <a href="https://imgur.com/2GMQlla"><img src="img/baphomet2.jpg"/></a>
        </div>;
    }

}

main();
