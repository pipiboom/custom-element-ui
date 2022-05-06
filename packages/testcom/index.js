import ElTestcom from './src/tag';

/* istanbul ignore next */
ElTestcom.install = function(Vue) {
  Vue.component(ElTestcom.name, ElTestcom);
};

export default ElTestcom;
