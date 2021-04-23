const Directories ='{"SERVER_DIRECTORY":"server","TEST_DIRECTORY":"test","CLIENT_DIRECTORY":"client","SCRIPTS_DIRECTORY":"scripts","COMPONENTS_DIRECTORY":"components","DIRECTIVES_DIRECTORY":"directives","MODULES_DIRECTORY":"modules","HTML_DIRECTORY":"html","LAYOUTS_DIRECTORY":"layouts","MARKUPS_DIRECTORY":"markups","ELEMENTS_DIRECTORY":"elements","STYLES_DIRECTORY":"styles","CSS_DIRECTORY":"css","SCSS_DIRECTORY":"scss","LESS_DIRECTORY":"less","STYLUS_DIRECTORY":"stylus","POSTCSS_DIRECTORY":"postcss","BUNDLES_DIRECTORY":"bundles","PRODUCTION_DIRECTORY":"production","THEME_NAME_DIRECTORY":"AppName","BOWER_COMPONENTS_DIRECTORY":"bower_components","NODE_MODULES_DIRECTORY":"node_modules"}';
const Dirs = JSON.parse(Directories);

const App_Server ='{"SERVER_NAME":"Dev_Server","SERVER__PORT":"1335"}'
const ServerSet = JSON.parse(App_Server);

const Networking ='{"PORT":"1335","IP_ADDRESS":"127.0.0.1","SUBNET_MASK":"255.255.240.0"}'
const Net = JSON.parse(Networking);

const Browser ='{"PORT":"3000","UI_PORT":"3001"}'
const BrowserSync = JSON.parse(Browser);

const Directory = {
  clientDir: Dirs.CLIENT_DIRECTORY,
  serverDir: Dirs.SERVER_DIRECTORY,
  testDir: Dirs.TEST_DIRECTORY,
}

const  WebServer= {
  name: ServerSet.SERVER_NAME,
  port: ServerSet.SERVER__PORT,
}

const  Network= {
  port: Net.PORT,
  ipAddress: Net.IP_ADDRESS,
  subnet: Net.SUBNET_MASK,
}

const OpenBrowser = {
  browserSyncPort: BrowserSync.PORT,
  browserSyncUiPort: BrowserSync.UI_PORT,
}

// console.log(`${Directory.clientDir}, ${Network.port},${OpenBrowser.browserSyncPort} `)
export const Setting={
  clientDir: Directory.clientDir,
  serverDir: Directory.serverDir,
  testDir: Directory.testDir,
  webServerName:WebServer.webServerName,
  webServerPort:WebServer.webServerPort,
  hostPort: Network.port,
  hostIpAddress: Network.ipAddress,
  hostSubnet: Network.subnet,
  browserSyncPort: OpenBrowser.browserSyncPort,
  browserSyncUiPort: OpenBrowser.browserSyncUiPort,
};
