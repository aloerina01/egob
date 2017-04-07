<template>
<section>
    <h4 id="current-count">{}</h4>
    <div id="circle"></div>
</section>
</template>

<script>
import ProgressBar from 'progressbar.js';

export default {
    name: 'current-b-circle',
    data: function() {
        return {
            
        }
    },
    created: function() {
        this.$nextTick(() => {
            this.initialize();
        });
    },
    methods: {
        initialize: (percentage) => {
            let chart = new ProgressBar.Circle('#circle', {
                color: '#008fde',
                strokeWidth: 2,
                easing: 'easeInOut',
                from: { color: '#008fde', width: 1 },
                to: { color: '#008fde', width: 1 },
                step: function(state, circle) {
                    
                }
            });
            chart.animate(1);
        }
    }
}

</script>