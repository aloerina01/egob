import Vue from 'vue';

const eventEmitter = new Vue();

function getInstance() {
    return eventEmitter;
};

function create() {
    return new Vue();
};

export default { getInstance, create };