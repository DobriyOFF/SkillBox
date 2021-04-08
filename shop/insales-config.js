'use strict';

/**
 * Настройки поумолчанию
 */
module.exports = {
  account: {
     id: 'b2dc0f645ffc77acd9769d04f7ec2a48',
     token: '757286fba12683eca8eaca6bfa26bb55',
     url: 'myshop-bag295.myinsales.ru',
    http: true
  },
  theme: {
    id: '1360685',
    root: '.',
    backup: true,
    assetsSync: true,
    excludeFiles: [],
    onUpdate: function onUpdate() {
      // обновление темы
    },
    assetsDomain: 'https://assets.insales.ru'
  },
  util: {
    openBrowser: true
  },
  plugins: {
    exclude: ['*.min.js', '*.min.css', '*.liquid']
  },
  chokidarOptions: {
    ignored: /[\/\\]\./,
    ignoreInitial: true,
    followSymlinks: true,
    usePolling: false,
    interval: 200,
    delay: 0,
    binaryInterval: 300,
    alwaysStat: true,
    depth: 99,
    awaitWriteFinish: {
      stabilityThreshold: 100,
      pollInterval: 100
    },
    ignorePermissionErrors: true
  }
};