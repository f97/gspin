const {gspin} = require('../lib');

test('gspin spin success', (done) => {
  gspin('Chúng ta của sau này')
      .then((res) => {
        expect(res === 'Chúng ta của sau này').toBe(true);
        done();
      });
});
