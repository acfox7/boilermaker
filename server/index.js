const app = require('./app');
//set up listening on port 3000
const port = process.env.PORT || 3000;
const { db } = require('./db');
//require in seed file = suggested path ../script/seed

const init = async () => {
  try {
    // if (process.env.SEED === 'true') {
    //   await seed();
    // } else {
    //   await db.sync();
    // }
    await db.sync();
    app.listen(port, function () {
      console.log('Server listening on port:', port);
    });
  } catch (error) {
    console.log(error);
  }
};

init();
