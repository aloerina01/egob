<template>
<section>
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
                easing: 'easeInOut',
                from: { color: '#008fde', width: 0.5 },
                to: { color: '#008fde', width: 0.5 },
                step: function(state, circle) {
                    circle.setText(circle.value());
                }
            });
            chart.animate(0.8);
        }
    }
}

</script>