import React from 'react';
import {render} from 'react-dom';
import {data} from './data.js';
import {Header, Description} from './header.jsx';

function main() {

    // otherwise show the menu
    return showIndexPage();
}

function showIndexPage() {
    render(
        <Index data={data} />,
        document.getElementById('root')
    );
}

var filterOptions = {
    'aa': {pub: 'aa'},
    'class-a': {pub: 'aa', pubClass: 'a'},
    'class-b': {pub: 'aa', pubClass: 'b'},
    'class-c': {pub: 'aa', pubClass: 'c'},
    'class-d': {pub: 'aa', pubClass: 'd'},
    'class-e': {pub: 'aa', pubClass: 'e'},

    'grade0': {grade:0},
    'grade1': {grade:1},
    'grade2': {grade:2},
    'grade3': {grade:3},
    'grade4': {grade:4},
    'grade5': {grade:5},
    'grade6': {grade:6},

    'oto': {pub: 'oto'},
    'other': {isOther:true},

    '777': {folder:'777'},
    '1.1': {folder:'1.1'},
    '1.2': {folder:'1.2'},
    '1.3': {folder:'1.3'},
    '1.4': {folder:'1.4'},
    '1.5': {folder:'1.5'},
    '3.1': {folder:'3.1'}
};


class ContentItem extends React.Component {
    render() {
        let book = this.props.book;
        let item = this.props.item;
        let authorLU = this.props.authors;

        let pub = "";
        if (item.pub === 'aa') pub = 'A∴A∴';
        else if (item.pub === 'oto') pub = 'O.T.O.';
        if (item.hasOwnProperty('pubClass')) pub += " " + item.pubClass.toUpperCase();

        let sub = "";
        if (item.hasOwnProperty('subtitle')) sub = <div className="item-subtitle"><span>{item.subtitle}</span></div>;

        let aTxt = "";

        if (!item.hasOwnProperty('filename')) {
            item.filename = item.title.toLowerCase().replace(/,/g, '').replace(/∴/g, "").replace(/Æ/g, "AE");;
        }
        let filename = item.filename.replace(/\s/g, '-');
        let pdfName = `${book.folder}/${filename}.pdf`;
        let pdfLowName = pdfName.replace(/\.pdf/, '_low.pdf');

        let aHigh = <a href={pdfName}>high</a>;
        let aLow = <a href={pdfLowName}>low</a>;
        if (item.hasText) aTxt = <a href=".">txt</a>;

        // turn into array
        let authors = "";
        if (item.hasOwnProperty('author')) {
            if (!Array.isArray(item.author)) item.author = [item.author];

            //if (item.author)
            let prevRole = '';

            authors = item.author.map((o, i) => {
                let name = (typeof o === 'string') ? o : o.name;
                let role = (typeof o === 'string') ? 'author' : o.role;
                if (!authorLU.hasOwnProperty(name)) return 'INVALID AUTHOR';
                let author = authorLU[name];

                let fullname = `${author.other} ${author.last}`;

                if (role === prevRole) return ` & ${fullname}`;

                prevRole = role;


                let value = null;

                if (role === 'author') value = `by ${fullname}`;
                else if (role === 'reviser') value = `revised by ${fullname}`;
                else if (role === 'editor') value = `edited by ${fullname}`;
                else if (role === 'illustrator') value = `illustrations by ${fullname}`;
                else if (role === 'translator') value = `translation by ${fullname}`;
                else if (role === 'preface') value = `preface by ${fullname}`;
                else if (role === 'documents') value = `documents provided by ${fullname}`;
                else if (role === 'commentator') value = `commentary by ${fullname}`;
                else value = `${role}: ${fullname}`;

                return (i > 0) ? ', ' + value : value;
            }).join('');

            authors = <div className="item-subtitle"><span>{authors}</span></div>;
        }

        return <div className="content-item">
            <div className="number">{item.number}</div>
            <div className="pub">{pub}</div>
            <div className="item-title">{item.titleWeb || item.title}</div>
            <div className="download-links">{aLow} | {aHigh}</div>
            {sub}
            {authors}
        </div>;
    }
}

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selected: '', person:''};
        //this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onPersonChange = this.onPersonChange.bind(this);

        // in the data
        this.authors = {};
        this.props.data.authors.forEach(author => {
            this.authors[author.last.toLowerCase()] = author;
        });
    }

    componentWillReceiveProps(nextProps) {
        //var selected = this.getSelectedFromProps(nextProps);
        this.setState({
            selected: ''
        });
    }

    onClick(value, e) {
        if (this.state.selected === value) value = '';
        this.setState({selected:value});
    }

    onPersonChange(event) {
        this.setState({person: event.target.value});
    }

    render() {

        // determine the selected option
        var selectedOption = null;
        if (this.state.selected.length > 0 && filterOptions.hasOwnProperty(this.state.selected)) {
            selectedOption = filterOptions[this.state.selected];
        }

        let groups = [];
        for (let i = 0; i < this.props.data.books.length; i++) {
            let book = this.props.data.books[i];
            let html = [];

            for (let j = 0; j < book.contents.length; j++) {
                let item = book.contents[j];

                // filter
                if (selectedOption !== null) {

                    if (selectedOption.hasOwnProperty('folder') && book.folder !== selectedOption.folder) continue;

                    if (selectedOption.hasOwnProperty('pub') && item.pub !== selectedOption.pub) continue;
                    if (selectedOption.hasOwnProperty('pubClass') && (!item.hasOwnProperty('pubClass') || item.pubClass.indexOf(selectedOption.pubClass) === -1)) continue;

                    if (selectedOption.isOther) {
                        if (item.hasOwnProperty('pub') || item.hasOwnProperty('pubClass')) continue;
                    }

                    if (selectedOption.hasOwnProperty('grade')) {

                        if (!item.hasOwnProperty('grade')) continue; // only graded items go through

                        if (typeof item.grade === 'number' && item.grade !== selectedOption.grade) continue;
                        else if (Array.isArray(item.grade)&& item.grade.indexOf(selectedOption.grade) === -1) continue;
                    }

                }

                if (this.state.person !== '') {
                    // don't show any without authors
                    if (!item.hasOwnProperty('author')) continue;

                    // turn into array
                    if (!Array.isArray(item.author)) item.author = [item.author];

                    let has = false;
                    item.author.forEach(o => {
                        if (typeof o === 'string') {
                            if (o === this.state.person) has = true;
                        }
                        else {
                            if (o.name === this.state.person) has = true;
                        }
                    });

                    if (!has) continue;

                }


                // INSERT **************
                let key = "item-" + i + "-" + j;
                html.push(<ContentItem key={key} book={book} item={item} authors={this.authors}/>);
            }

            let publisher = <span>({book.pubLocation}: {book.pubName}, <span className="number">{book.pubYear}</span>)</span>;
            let subtitle = book.hasOwnProperty('subtitle') ? <div className="groupSubtitle">{book.subtitle}</div> : null;

            if (html.length > 0) {
                let key = "group-" + i;

                groups.push(<div className="content-group" key={key}>
                    <div className="groupTitle">{book.title}</div>
                    {subtitle}
                    <div className="groupSubtitle">{publisher}</div>
                    <div className="content-items">{html}</div>
                </div>);
            }

        }

        let authorOptions = data.authors.map((author, i) => {
            return <option key={i} value={author.last.toLowerCase()}>{author.last}, {author.other}</option>;
        });

        return <div className="div_main">

            <Header />
            <Description />

            <div className="left-margin">
                <div className="illustration-header">Illustrations</div>
                <a href="https://imgur.com/Fi9qR1Y"><img src="img/_cover-3.1.jpg"/></a>
                <a href="donate.html"><img src="img/donate.png"/></a>
                <a href="https://imgur.com/mN4eUoF"><img src="img/_cover-1.jpg"/></a>
                <a href="https://imgur.com/OgigrBI"><img src="img/therion2.jpg"/></a>
                <a href="https://imgur.com/2GMQlla"><img src="img/baphomet2.jpg"/></a>
            </div>
            <div className="center">

                <div className="filter">
                    <div className="filter-section">
                        <div className="filter-row">
                            <div className={"filter-button noselect " + (this.state.selected==='aa' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'aa')}><span className="filter-text">A∴A∴</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='oto' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'oto')}><span className="filter-text">O.T.O.</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='other' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'other')}><span className="filter-text">Other</span></div>


                            <div className="filter-right">
                                <div className={"filter-button noselect " + (this.state.selected==='1.1' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, '1.1')}><span className="filter-text">1.1</span></div>
                                <div className={"filter-button noselect " + (this.state.selected==='1.2' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, '1.2')}><span className="filter-text">1.2</span></div>
                                <div className={"filter-button noselect " + (this.state.selected==='1.3' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, '1.3')}><span className="filter-text">1.3</span></div>
                                <div className={"filter-button noselect " + (this.state.selected==='1.4' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, '1.4')}><span className="filter-text">1.4</span></div>
                                <div className={"filter-button noselect " + (this.state.selected==='1.5' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, '1.5')}><span className="filter-text">1.5</span></div>
                                <div className={"filter-button noselect " + (this.state.selected==='3.1' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, '3.1')}><span className="filter-text">3.1</span></div>
                                <div className={"filter-button noselect " + (this.state.selected==='777' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, '777')}><span className="filter-text">777</span></div>
                            </div>
                            <div className="filter-item">Book:</div>

                        </div>
                        <div className="filter-row">
                            <div className={"filter-button noselect " + (this.state.selected==='class-a' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'class-a')}><span className="filter-text">Class A</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='class-b' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'class-b')}><span className="filter-text">Class B</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='class-c' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'class-c')}><span className="filter-text">Class C</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='class-d' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'class-d')}><span className="filter-text">Class D</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='class-e' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'class-e')}><span className="filter-text">Class E</span></div>
                            <div className="filter-item">Author: <select onChange={this.onPersonChange}>
                                <option value=""></option>
                                {authorOptions}
                            </select></div>
                        </div>
                        <div className="filter-row">
                            <div className={"filter-button noselect " + (this.state.selected==='grade0' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'grade0')}><span className="filter-text">Probationer</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='grade1' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'grade1')}><span className="filter-text">Neophyte</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='grade2' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'grade2')}><span className="filter-text">Zelator</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='grade3' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'grade3')}><span className="filter-text">Practicus</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='grade4' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'grade4')}><span className="filter-text">Philosophus</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='grade5' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'grade5')}><span className="filter-text">Dominus Liminis</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='grade6' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'grade6')}><span className="filter-text">Major Adept</span></div>
                        </div>
                    </div>

                </div>
                <div className="resolution-note">
                    <span className="fake-link">low</span> = 150 dpi, suitable for reading, <span className="fake-link">high</span> = 600 dpi, suitable for printing.
                </div>


                <div className="groups">{groups}</div>
            </div>
            <div className="right-margin">

            </div>
        </div>;
    }

/*
<select id='typeSelect'
className='form-control'
value={this.state.selected}
onChange={this.handleChange}>
<option key='all' value=''>- SHOW ALL -</option>
{options}
</select>

    handleChange(e) {
        if (e.target.value === '') this.setState({selected: ''});
        else this.setState({selected: e.target.value});
    }
    */
}

main();
