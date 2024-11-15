'use strict'
const path = require('path')
const statusboard = require('@pkgjs/statusboard')

module.exports = async (c) => {
  return statusboard(await config(c))
}

const config = module.exports.config = async (c = {}) => {
  const buildDir = path.join(__dirname, 'build')

  return Object.assign({
    // Status Board Config
    db: path.join(buildDir, 'data', 'data.db'),
    baseUrl: '/statusboard',
    outputDirectory: buildDir,
    github: {
      token: process.env.GITHUB_TOKEN
    },
    // Project configs
    title: 'Express',
    description: 'Fast, unopinionated, minimalist web framework for node. ',
    issueLabels: ['top priority', 'tc agenda', 'meeting', 'discuss', 'good first issue', 'require-triage', 'help wanted'],
    projects: [
      'expressjs/admin',
      'expressjs/basic-auth-connect',
      'expressjs/body-parser',
      'expressjs/compression',
      'expressjs/cookie-parser',
      'expressjs/codemod',
      'expressjs/cors',
      'expressjs/discussions',
      'expressjs/express',
      'expressjs/expressjs.com',
      'expressjs/morgan',
      'expressjs/response-time',
      'expressjs/session',
      'expressjs/multer',
      'expressjs/serve-static',
      'expressjs/errorhandler',
      'expressjs/serve-index',
      'expressjs/security-wg',
      'expressjs/timeout',
      'expressjs/flash',
      'expressjs/vhost',

      'pillarjs/router',
      'pillarjs/cookies',
      'pillarjs/send',
      'pillarjs/finalhandler',
      'pillarjs/path-to-regexp',

      'jshttp/cookie',
      'jshttp/fresh',
      'jshttp/content-disposition',
      'jshttp/mime-db',
      'jshttp/media-typer',
      'jshttp/range-parser',
      'jshttp/type-is',
      'jshttp/accepts',
      'jshttp/negotiator',
      'jshttp/mime-types',
      'jshttp/compressible',
      'jshttp/content-type',
      'jshttp/http-errors',
      'jshttp/proxy-addr',
      'jshttp/etag',
      'jshttp/forwarded',
      'jshttp/on-finished',
      'jshttp/on-headers',
      'jshttp/vary',
      'jshttp/basic-auth',
      'jshttp/methods',
      'jshttp/statuses'
    ],
    teams: {
      technicalCommitee: [{
        name: 'Blake Embrey',
        github: 'blakeembrey',
        npm: 'blakeembrey',
        twitter: 'blakeembrey',
        email: 'hello@blakeembrey.com'
      }, {
        name: 'Rand McKinney',
        github: 'crandmck',
        npm: 'crandmck',
        twitter: 'randmckinney',
        email: 'crandmck@yahoo.com'
      },
      {
        name: 'Chris de Almeida',
        github: 'ctcpip',
        npm: 'ctcpip',
        twitter: 'SoftwareChrisGo',
        email: 'chrisda@codenothing.com'
      },
      {
        name: 'Jon Church',
        github: 'jonchurch',
        npm: 'jonchurch',
        twitter: 'jonchurch',
        email: 'me@jonchurch.com'
      },
      {
        name: 'Linus Unnebäck',
        github: 'LinusU',
        npm: 'linusu',
        twitter: 'LinusU',
        email: 'linus@folkdatorn.se'
      },
      {
        name: 'Jean Burellier',
        github: 'sheplu',
        npm: 'sheplu',
        twitter: 'shepsheplu'
      },
      {
        name: 'Ulises Gascón',
        github: 'ulisesGascon',
        npm: 'ulisesgascon',
        twitter: 'kom_256',
        email: 'ulisesgascongonzalez@gmail.com'
      }, {
        name: 'Wes Todd',
        github: 'wesleytodd',
        npm: 'wesleytodd',
        twitter: 'wesleytodd',
        email: 'wes@wesleytodd.com'
      }]
    }
  }, c)
}
