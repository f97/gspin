const {gspin} = require('../lib');

test('gspin spin success', (done) => {
  gspin('Chúng ta của sau này')
      .then((res) => {
        expect(res === 'Sau này của chúng tôi').toBe(true);
        done();
      });
});
