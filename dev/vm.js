const { Engine } = require('velocity');

const velocityDataPrivate = require('./velocity.private.data.json');
const VelocityDataProd = require('./velocity.data.prod.json');


const engine = new Engine({ template: './src/index.vm' });

module.exports = data => {
  return engine.render({
    ...velocityDataProd,
    ...velocityDataPrivate,
    ...data,
  });
};
