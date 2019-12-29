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

    'goetia': {folder:'goetia'},
    '333': {folder:'333'},
    '777': {folder:'777'},
    'thelema': {folder:'thelema'},
    'book4': {folderRe:/^book4/},
    'works': {folderRe:/^collectedworks/},
    '1.1': {folder:'1.1'},
    '1.2': {folder:'1.2'},
    '1.3': {folder:'1.3'},
    '1.4': {folder:'1.4'},
    '1.5': {folder:'1.5'},
    '1.6': {folder:'1.6'},
    '1.7': {folder:'1.7'},
    '1.8': {folder:'1.8'},
    '1.9': {folder:'1.9'},
    '1.10': {folder:'1.10'},
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

        let title = item.altTitle || item.title;
        title = title.replace(/—/g, "-");

        if (!item.hasOwnProperty('filename')) {
            item.filename = title.replace(/É/g, 'E').replace(/Ä/g, 'A').toLowerCase().replace(/,/g, '').replace(/∴/g, "").replace(/Æ/g, "AE").replace(/:/g, "");
        }
        let filename = item.filename.replace(/\s/g, '-').replace(/[.!?]/g, '');
        let pdfName = `${book.folder}/${filename}.pdf`;
        let pdfLowName = pdfName.replace(/\.pdf/, '_low.pdf');


        let aHigh = <a target="_blank" href={pdfName}>high</a>;
        let aLow = <a target="_blank" href={pdfLowName}>low</a>;
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

                if (name === 'others') {}
                else if (!authorLU.hasOwnProperty(name)) return 'INVALID AUTHOR';

                let author = authorLU[name];
                if (name === 'others') author = {last:'', other:'Others'};

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

        const urlParams = new URLSearchParams(window.location.search);
        const filter = urlParams.get('filter');
        const person = urlParams.get('person');

        this.state = {
            selected: filter || '',
            person: person || ''
        };

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

        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?filter=' + value;
            window.history.pushState({path:newurl},'',newurl);
        }

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

                    if (selectedOption.hasOwnProperty('folderRe') && !book.folder.match(selectedOption.folderRe)) {
                        continue;
                    }
                    else if (selectedOption.hasOwnProperty('folder') && book.folder !== selectedOption.folder) {
                        continue;
                    }

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

                            <FilterButton text="1.1" value="1.1" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="1.2" value="1.2" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="1.3" value="1.3" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="1.4" value="1.4" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="1.5" value="1.5" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="1.6" value="1.6" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="1.7" value="1.7" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="1.8" value="1.8" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="1.9" value="1.9" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="1.10" value="1.10" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="3.1" value="3.1" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                        </div>
                        <div className="filter-row">
                            <FilterButton text="ΘΕΛΗΜΑ" value="thelema" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="777" value="777" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="333" value="333" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="BOOK 4" value="book4" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="GOETIA" value="goetia" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="WORKS" value="works" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                        </div>



                        <div className="filter-row">

                            <div className={"filter-button noselect " + (this.state.selected==='oto' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'oto')}><span className="filter-text">O.T.O.</span></div>
                            <div className={"filter-button noselect " + (this.state.selected==='aa' ? 'selected' : 'not-selected')} style={{marginRight:'0.7em'}} onClick={this.onClick.bind(this, 'aa')}><span className="filter-text">A∴A∴</span></div>


                            <FilterButton text="Class A" value="class-a" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="Class B" value="class-b" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="Class C" value="class-c" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="Class D" value="class-d" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="Class E" value="class-e" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>

                            <div className="filter-right">
                                <div className="filter-item"><select style={{textAlignLast: 'center'}} onChange={this.onPersonChange}>
                                    <option value="">--- Author ---</option>
                                    {authorOptions}
                                </select></div>
                            </div>

                        </div>


                        <div className="filter-row">
                            <FilterButton text="Probationer" value="grade0" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="Neophyte" value="grade1" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="Zelator" value="grade2" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="Practicus" value="grade3" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="Philosophus" value="grade4" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="Dominus Liminis" value="grade5" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="Major Adept" value="grade6" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
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

class FilterButton extends React.Component {

    onClick() {
        this.props.onClick(this.props.value);
    }

    render() {

        let isSelected = this.props.selectedValue === this.props.value;

        return <div className={"filter-button noselect " + (isSelected ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this)}><span className="filter-text">{this.props.text}</span></div>

    }

}

main();
