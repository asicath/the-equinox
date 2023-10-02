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
        <Index books={data.books} authors={data.authors} />,
        document.getElementById('root')
    );
}

const filterOptions = {
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

    'konx-om-pax': {folder:'konx-om-pax'},
    'goetia': {folder:'goetia'},
    'thoth': {folderRe:/^thoth/},
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



// I made this prime "auralization" by dynamically grouping primes based on what percent of the infinite natural set they are a prime factor for. I then assigned a note for each group, the silences represent new primes. What do you think?
// https://www.youtube.com/watch?v=vD20B-Vv0CA
class ContentItem extends React.Component {
    render() {
        const book = this.props.book;
        const item = this.props.item;
        const authorLU = this.props.authors;

        let pub = "";
        if (item.pub === 'aa') pub = 'A∴A∴';
        else if (item.pub === 'oto') pub = 'O.T.O.';
        if (item.hasOwnProperty('pubClass')) pub += " " + item.pubClass.toUpperCase();

        let sub = "";
        if (item.hasOwnProperty('subtitle')) sub = <div className="item-subtitle"><span>{item.subtitle}</span></div>;

        //let aTxt = (item.hasText) ? <a href=".">txt</a> : "";

        let aHigh = <a target="_blank" href={`${book.folder}/${item.pdfName}`}>high</a>;
        let aLow = <a target="_blank" href={`${book.folder}/${item.pdfLowName}`}>low</a>;

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

        let info = {
            number: <div className="number">{item.number}</div>,
            pub: <div className="pub">{pub}</div>
        };

        if (item.chapter) {
            info = {
                chapter: <div className="chapter">{item.chapter}</div>
            }
        }

        let className = 'content-item';
        if (item.newSection) className += ' new-section';

        return <div className={className}>
            {info.number}
            {info.pub}
            {info.chapter}
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
            person: person || '',
            textSearch: ''
        };

        //this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onPersonChange = this.onPersonChange.bind(this);

        // in the data
        this.authors = {};
        this.props.authors.forEach(author => {
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

    handleChange(e) {
        this.setState({textSearch: e.target.value});
    }

    onPersonChange(event) {
        this.setState({person: event.target.value});
    }

    isItemVisible({book, item, selectedOption, textSearch, bookTitleFoundInSearch}) {
        // simple title search
        if (textSearch.length !== 0 && !bookTitleFoundInSearch) {
            if (
                item.title.toLowerCase().indexOf(textSearch) === -1
                && (!item.subtitle || item.subtitle.toLowerCase().indexOf(textSearch) === -1)
            ) {
                return false;
            }
        }

        // filter
        if (selectedOption !== null) {

            if (selectedOption.hasOwnProperty('folderRe') && !book.folder.match(selectedOption.folderRe)) {
                return false;
            }
            else if (selectedOption.hasOwnProperty('folder') && book.folder !== selectedOption.folder) {
                return false;
            }

            if (selectedOption.hasOwnProperty('pub') && item.pub !== selectedOption.pub) return false;
            if (selectedOption.hasOwnProperty('pubClass') && (!item.hasOwnProperty('pubClass') || item.pubClass.indexOf(selectedOption.pubClass) === -1)) return false;

            if (selectedOption.isOther) {
                if (item.hasOwnProperty('pub') || item.hasOwnProperty('pubClass')) return false;
            }

            if (selectedOption.hasOwnProperty('grade')) {

                if (!item.hasOwnProperty('grade')) return null; // only graded items go through

                if (typeof item.grade === 'number' && item.grade !== selectedOption.grade) return false;
                else if (Array.isArray(item.grade)&& item.grade.indexOf(selectedOption.grade) === -1) return false;
            }
        }

        if (this.state.person !== '') {
            // don't show any without authors
            if (!item.hasOwnProperty('author')) return false;

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

            if (!has) return false;
        }

        return true;
    }

    render() {

        // determine the selected option
        let selectedOption = null;
        if (this.state.selected.length > 0 && filterOptions.hasOwnProperty(this.state.selected)) {
            selectedOption = filterOptions[this.state.selected];
        }

        let textSearch = this.state.textSearch.toLowerCase();

        let groups = [];
        let images = []; // collate the images from the selected items
        for (let i = 0; i < this.props.books.length; i++) {
            const book = this.props.books[i];
            const html = [];
            let isBookActive = false;
            let bookTitleFoundInSearch = false;

            // simple book title search
            if (textSearch.length !== 0) {
                if (book.title.toLowerCase().indexOf(textSearch) !== -1) {
                    bookTitleFoundInSearch = true;
                }
            }

            if (book.takedownNotice) {
                let alt = null;
                if (book.takedownAlt) {
                    alt = <span>The text is still available on <a target="_blank" href={book.takedownAlt}>{book.takedownAltText}</a>.</span>;
                }

                html.push(<div className={"takedown"}>{book.takedownNotice} {alt}<br/><a href={'copyright.html'}>Click here</a> to learn more about the status of Crowley's copyrights.</div>);
            }
            else {
                for (let j = 0; j < book.items.length; j++) {
                    const item = book.items[j];

                    const isVisible = this.isItemVisible({
                        book,
                        item,
                        selectedOption,
                        textSearch,
                        bookTitleFoundInSearch,
                        images
                    });

                    if (!isVisible) continue;

                    // INSERT **************
                    let key = "item-" + i + "-" + j;
                    const result = <ContentItem key={key} book={book} item={item} authors={this.authors}/>;
                    html.push(result);

                    // indicate that this book is active, ie at least some of its contents will be shown to the user
                    isBookActive = true;

                    // gather images of the content item
                    if (item.hasOwnProperty('images')) {
                        item.images.forEach(o => {

                            if (typeof o === 'string') {
                                images.push({
                                    thumb: `images/${book.folder}/thumb/${o}`,
                                    url: `images/${book.folder}/${o}`,
                                    order: Math.random()
                                });
                            }

                        });
                    }

                }
            }

            const publisher = <span>({book.pubLocation}: {book.pubName}, <span className="number">{book.pubYear}</span>)</span>;
            const subtitle = book.hasOwnProperty('subtitle') ? <div className="groupSubtitle">{book.subtitle}</div> : null;

            if (html.length > 0) {
                let key = "group-" + i;

                let links = '';
                if (book.hasOwnProperty('links') ) {
                    links = book.links.map((link, i) => {
                        let prefix = i === 0 ? '' : ' | ';
                        return <a href={link.url} target="_blank" style={{fontSize:'0.5em', marginLeft:'0.5em'}}>{link.text}</a>;
                    });
                }

                groups.push(<div className="content-group" key={key}>
                    <div className="groupTitle">{book.title} <span className="groupLinks">{links}</span></div>
                    {subtitle}
                    <div className="groupSubtitle">{publisher}</div>
                    <div className="content-items">{html}</div>
                </div>);
            }

            // gather the images of the book
            if (isBookActive && book.hasOwnProperty('images')) {
                book.images.forEach(o => {

                    if (typeof o === 'string') {
                        images.push({
                            thumb: `images/${book.folder}/thumb/${o}`,
                            url:`images/${book.folder}/${o}`,
                            order: Math.random()
                        });
                    }

                });
            }

        }

        const authorOptions = data.authors.map((author, i) => {
            return <option key={i} value={author.last.toLowerCase()}>{author.last}, {author.other}</option>;
        });

        // compile image html
        // first order
        images = images.sort((a, b) => {
            if (a.order < b.order) return -1;
            if (b.order > a.order) return 1;
            return 0;
        });

        // limit to just top 5
        images.splice(Math.min(5, images.length));

        let imagesHtml = images.map(img => {
            return <a href={img.url} target="_blank"><img src={img.thumb}/></a>;
        });

        // <a href="donate.html"><img src="img/donate.png"/></a>

        return <div className="div_main">

            <Header />
            <Description />

            <div className="left-margin">
                <div className="illustration-header">Covers & Illustrations</div>
                {imagesHtml}
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

                            <div className="filter-right">
                                <div className={"filter-button noselect " + (this.state.selected==='oto' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'oto')}><span className="filter-text">O.T.O.</span></div>
                                <div className={"filter-button noselect " + (this.state.selected==='aa' ? 'selected' : 'not-selected')} onClick={this.onClick.bind(this, 'aa')}><span className="filter-text">A∴A∴</span></div>


                                <FilterButton text="A" value="class-a" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                                <FilterButton text="B" value="class-b" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                                <FilterButton text="C" value="class-c" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                                <FilterButton text="D" value="class-d" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                                <FilterButton text="E" value="class-e" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            </div>
                        </div>
                        <div className="filter-row">
                            <FilterButton text="ΘΕΛΗΜΑ" value="thelema" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="777" value="777" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="333" value="333" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="BOOK 4" value="book4" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="GOETIA" value="goetia" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="WORKS" value="works" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="THOTH" value="thoth" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
                            <FilterButton text="KONX OM PAX" value="konx-om-pax" selectedValue={this.state.selected} onClick={this.onClick.bind(this)}/>
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

                        <div className="filter-row">
                            <div style={{display:'inline-block'}}><span style={{fontSize:'0.8em'}}>Title Search: </span><input style={{width:'20em'}} value={this.state.textSearch} onChange={this.handleChange.bind(this)} /></div>

                            <div className="filter-right" style={{marginTop:'-4px'}}>
                                <div className="filter-item"><span style={{fontSize:'0.8em'}}>Author: </span><select style={{textAlignLast: 'center', 'height': '1.5em'}} onChange={this.onPersonChange}>
                                    <option value=""></option>
                                    {authorOptions}
                                </select></div>
                            </div>
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
        let isClassSelect = this.props.value.indexOf('class') !== -1;

        // className={"classSelect"}
        return <div className={"filter-button noselect " + (isSelected ? 'selected' : 'not-selected') + (isClassSelect ? ' classSelect' : '')} onClick={this.onClick.bind(this)}><span className="filter-text">{this.props.text}</span></div>

    }

}

main();
