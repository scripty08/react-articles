import { Server, IndexController } from '@scripty/server';

const init = async () => {
    let app = new Server();
    await app.addController(new IndexController({ title: '@scripty/articles' }));
    app.start(3013);
};

init().catch((err) => {
    console.error(err.message);
});
