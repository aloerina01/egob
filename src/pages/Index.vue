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
        // this.bookmarks = BookMarks;
        this.bookmarks = getBookmarksModel();
    },
    computed: function() {
        return {
            total: this.bookmarks.total
        }
    },
    methods: {
        test: function() {
            this.bookmarks.total = 35;
        }
    }
}
</script>