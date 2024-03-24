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
        this.filter = urlParams.get('filter') || '';
        this.search = urlParams.get('search') || '';
        this.person = urlParams.get('person') || '';

        this.state = {
            selected: this.filter,
            textSearch: this.search,
            person: this.person
        };

        this.onClickFilterButton = this.onClickFilterButton.bind(this);
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

    onClickFilterButton(value, e) {
        if (this.state.selected === value) value = '';
        this.setState({selected:value});
        this.filter = value;

        this.updateUrl();
    }

    updateUrl() {
        if (!history.pushState) return;

        const qs = [];

        if (this.filter.length > 0) {
            qs.push(`filter=${this.filter}`);
        }
        if (this.search.length > 0) {
            qs.push(`search=${this.search}`);
        }
        if (this.person.length > 0) {
            qs.push(`person=${this.person}`);
        }

        const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${qs.length > 0 ? '?' : ''}${qs.join('&')}`;
        window.history.pushState({path:newurl},'',newurl);
    }

    handleSearchTextChange(e) {
        this.search = e.target.value;
        this.setState({textSearch: this.search});
        this.updateUrl();
    }

    onPersonChange(event) {
        this.person = event.target.value;
        this.setState({person: this.person});
        this.updateUrl();
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

    findVisibleItems({textSearch, selectedOption}) {

        const value = {
            books: [],
            images: []
        };

        for (let i = 0; i < this.props.books.length; i++) {
            const book = this.props.books[i];

            let bookTitleFoundInSearch = false;

            // simple book title search
            if (textSearch.length !== 0) {
                if (book.title.toLowerCase().indexOf(textSearch) !== -1) {
                    bookTitleFoundInSearch = true;
                }
            }

            // now look at each item
            const visibleItems = [];
            const visibleImages = []; // collate the images from the selected items
            for (let j = 0; j < book.items.length; j++) {
                const item = book.items[j];

                const isItemVisible = this.isItemVisible({
                    book,
                    item,
                    selectedOption,
                    textSearch,
                    bookTitleFoundInSearch
                });

                if (!isItemVisible) continue;

                visibleItems.push(item);

                // gather images of the content item
                if (item.hasOwnProperty('images')) {
                    item.images.forEach(o => {

                        if (typeof o === 'string') {
                            visibleImages.push({
                                thumb: `images/${book.folder}/thumb/${o}`,
                                url: `images/${book.folder}/${o}`,
                                order: Math.random()
                            });
                        }

                    });
                }

            }

            // now resolve the book

            if (visibleItems.length === 0) {
                // book is not visible
            }
            else if (book.takedownNotice) {
                // add book as took down
                value.books.push({
                    bookInfo: book,
                    showTakedown: true,
                    visibleItems: []
                });
            }
            else {
                // add item to return list for this book
                value.books.push({
                    bookInfo: book,
                    visibleItems
                });

                value.images.push(...visibleImages);
            }

        }

        return value;
    }

    renderFilters(authorOptions) {
        return <div className="filter-section">

            <div className="filter-row">

                <FilterButton text="1.1" value="1.1" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="1.2" value="1.2" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="1.3" value="1.3" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="1.4" value="1.4" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="1.5" value="1.5" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="1.6" value="1.6" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="1.7" value="1.7" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="1.8" value="1.8" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="1.9" value="1.9" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="1.10" value="1.10" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="3.1" value="3.1" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>

                <div className="filter-right">
                    <div className={"filter-button noselect " + (this.state.selected==='oto' ? 'selected' : 'not-selected')} onClick={this.onClickFilterButton.bind(this, 'oto')}><span className="filter-text">O.T.O.</span></div>
                    <div className={"filter-button noselect " + (this.state.selected==='aa' ? 'selected' : 'not-selected')} onClick={this.onClickFilterButton.bind(this, 'aa')}><span className="filter-text">A∴A∴</span></div>


                    <FilterButton text="A" value="class-a" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                    <FilterButton text="B" value="class-b" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                    <FilterButton text="C" value="class-c" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                    <FilterButton text="D" value="class-d" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                    <FilterButton text="E" value="class-e" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                </div>
            </div>
            <div className="filter-row">
                <FilterButton text="ΘΕΛΗΜΑ" value="thelema" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="777" value="777" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="333" value="333" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="BOOK 4" value="book4" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="GOETIA" value="goetia" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="WORKS" value="works" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="THOTH" value="thoth" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="KONX OM PAX" value="konx-om-pax" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
            </div>

            <div className="filter-row">
                <FilterButton text="Probationer" value="grade0" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="Neophyte" value="grade1" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="Zelator" value="grade2" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="Practicus" value="grade3" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="Philosophus" value="grade4" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="Dominus Liminis" value="grade5" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
                <FilterButton text="Major Adept" value="grade6" selectedValue={this.state.selected} onClick={this.onClickFilterButton.bind(this)}/>
            </div>

            <div className="filter-row">
                <div style={{display:'inline-block'}}><span style={{fontSize:'0.8em'}}>Title Search: </span><input style={{width:'20em'}} value={this.state.textSearch} onChange={this.handleSearchTextChange.bind(this)} /></div>

                <div className="filter-right" style={{marginTop:'-4px'}}>
                    <div className="filter-item"><span style={{fontSize:'0.8em'}}>Author: </span><select style={{textAlignLast: 'center', 'height': '1.5em'}} onChange={this.onPersonChange}>
                        <option value=""></option>
                        {authorOptions}
                    </select></div>
                </div>
            </div>

        </div>
    }

    render() {

        // determine the selected option
        let selectedOption = null;
        if (this.state.selected.length > 0 && filterOptions.hasOwnProperty(this.state.selected)) {
            selectedOption = filterOptions[this.state.selected];
        }

        // load the text search
        const textSearch = this.state.textSearch.toLowerCase();

        // execute the search
        const result = this.findVisibleItems({textSearch, selectedOption});

        // render the html for the result
        const contentGroupHtml = [];
        for (let i = 0; i < result.books.length; i++) {
            const entry = result.books[i];
            const book = entry.bookInfo;
            const visibleItems = entry.visibleItems;

            const publisher = <span>({book.pubLocation}: {book.pubName}, <span className="number">{book.pubYear}</span>)</span>;
            const subtitle = book.hasOwnProperty('subtitle') ? <div className="groupSubtitle">{book.subtitle}</div> : null;

            let links = '';
            if (book.hasOwnProperty('links') ) {
                links = book.links.map((link, i) => {
                    let prefix = i === 0 ? '' : ' | ';
                    return <a href={link.url} target="_blank" style={{fontSize:'0.5em', marginLeft:'0.5em'}}>{link.text}</a>;
                });
            }

            // compile the item html
            const itemHtml = [];

            // this book is a takedown, exit early
            if (entry.showTakedown) {
                let alt = null;
                if (book.takedownAlt) {
                    alt = <span>The text is still available on <a target="_blank" href={book.takedownAlt}>{book.takedownAltText}</a>.</span>;
                }

                // Take down notice
                itemHtml.push(<div className={"takedown"}>{book.takedownNotice} {alt}<br/><a href={'copyright.html'}>Click here</a> to learn more about the status of Crowley's copyrights.</div>);
            }
            else {
                for (let j = 0; j < visibleItems.length; j++) {
                    const item = visibleItems[j];
                    const itemKey = "item-" + i + "-" + j;
                    itemHtml.push(<ContentItem key={itemKey} book={book} item={item} authors={this.authors}/>);
                }
            }

            // finally, compile the content item
            const groupKey = "group-" + i;
            contentGroupHtml.push(<div className="content-group" key={groupKey}>
                <div className="groupTitle">{book.title} <span className="groupLinks">{links}</span></div>
                {subtitle}
                <div className="groupSubtitle">{publisher}</div>
                <div className="content-items">{itemHtml}</div>
            </div>);
        }

        // compile image html
        // first order
        const images = result.images.sort((a, b) => {
            if (a.order < b.order) return -1;
            if (b.order > a.order) return 1;
            return 0;
        });

        // limit to just top 5 images
        images.splice(Math.min(5, images.length));
        const imagesHtml = images.map(img => {
            return <a href={img.url} target="_blank"><img src={img.thumb}/></a>;
        });

        // compile the author select dropdown
        const authorOptions = data.authors.map((author, i) => {
            const value = author.last.toLowerCase();
            const selected = value === this.person;
            return <option key={i} value={value} selected={selected}>{author.last}, {author.other}</option>;
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

                <div className="filter">{this.renderFilters(authorOptions)}</div>

                <div className="resolution-note">
                    <span className="fake-link">low</span> = 150 dpi, suitable for reading, <span className="fake-link">high</span> = 600 dpi, suitable for printing.
                </div>

                <div className="groups">{contentGroupHtml}</div>
            </div>
            <div className="right-margin">

            </div>
        </div>;
    }
    
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
