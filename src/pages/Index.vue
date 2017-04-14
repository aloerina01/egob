<template src="./_index.html"></template>

<script>
import CurrentBCircle from '../components/CurrentBCircle';
import BRankList from '../components/BRankList';

import getBookmarksModel from '../models/bookmarks';

export default {
    name: 'index-page',
    PATH: '/',
    components: {
        'current-b-circle': CurrentBCircle,
        'b-rank-list': BRankList
    },
    created: function() {
        this.bookmarks = getBookmarksModel();
        this.bookmarks.onUpdateCurrentBookmarks((current) => {
            this.current = current;
        });
        this.bookmarks.onUpdateTotalBookmarks((total) => {
            this.total = total;
        });
        this.test(this);
    },
    data: function() {
        return {
            bookmarks: undefined,
            current: 0,
            total: 0
        }
    },
    methods: {
        test: function(that) {
            setTimeout(() => {
                that.bookmarks.totalBookmarks = 59;
            }, 1000);
        }
    }
}
</script>