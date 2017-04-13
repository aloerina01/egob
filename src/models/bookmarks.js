class Bookmarks {
    constructor() {
        this._total;
    }
    get total() {
        return this._total;
    }
    set total(total) {
        this._total = total;
    }
}

const instance = new Bookmarks();
export default function getBookmarksModel() {
    return instance;
};