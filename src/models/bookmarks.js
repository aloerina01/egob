import EventEmitter from '../eventEmitter';

const EVENT_UPDATE_CURRENT_B = 'update-current-b';
const EVENT_UPDATE_TOTAL_B = 'update-total-b';

class Bookmarks {
    constructor() {
        this._currentBookmarks = 0;
        this._totalBookmarks = 0;
        this._eventEmitter = EventEmitter.create();
    }
    set currentBookmarks(val) {
        this._currentBookmarks = val;
        this._emit(EVENT_UPDATE_CURRENT_B, val);
    }
    set totalBookmarks(val) {
        this._totalBookmarks = val;
        this._emit(EVENT_UPDATE_TOTAL_B, val);
    }
    onUpdateCurrentBookmarks(callback) {
        this._eventEmitter.$on(EVENT_UPDATE_CURRENT_B, callback);
    }
    onUpdateTotalBookmarks(callback) {
        this._eventEmitter.$on(EVENT_UPDATE_TOTAL_B, callback);
    }
    _emit(event, opt) {
        this._eventEmitter.$emit(event,opt);
    }
}

const instance = new Bookmarks();
export default function getBookmarksModel() {
    return instance;
};