echo "{\"plugins\": [ \"istanbul\" ]}" > .babelrc
yarn build
start-server-and-test start http://localhost:1234 cy:run
rm .babelrc
