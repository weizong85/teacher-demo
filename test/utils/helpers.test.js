const expect = require('chai').expect;

const helpers = require('../../server/utils/helpers');

describe('[Helpers] Unit Test - validateEmail', () => {
  it('returns error if it is longer than 40 chars', () => {
    const error = helpers.validateEmail('Asdfdfdsf4234234324324dsfjsdkflsdkfsdfskdfdsklfsd23434324234fdsfdsfsdf@cc.cc');
    expect(error).to.equal('* Email is too long, please use shorter email address');
  });

  it('returns no error if it is in correct foramt', () => {
    const error = helpers.validateEmail('fsdf.c.c');
    expect(error).to.equal('* Email must be in valid format');
  });
});