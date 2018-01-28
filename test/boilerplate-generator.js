const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const pkgVersion = require('../package.json').version;

describe('Generator POI boilerplate: bootstrap', () => {

  const promtArgs = {
    reactComponent: 'test-boilerplate',
    description: 'My description',
    team: 'My Team',
    author: 'John Doe',
    autoLoad: false,
    updateScripts: false,
  };

  before(() =>
    helpers.run(require.resolve('../app'))
            .withPrompts(promtArgs)
  );

  it('should create a `package.json` file with given data', () => {
    assert.jsonFileContent('package.json', {
      name: promtArgs.reactComponent,
      generatorVersion: pkgVersion,
      description: promtArgs.description,
      author: promtArgs.author,
      repository: {
        url: `git+ssh://git@github.com/willmendesneto/${promtArgs.reactComponent}.git`,
      },
      bugs: {
        url: `https://github.com/willmendesneto/${promtArgs.reactComponent}/issues`,
      },
      homepage: `https://github.com/willmendesneto/${promtArgs.reactComponent}#readme`,
    });
  });

  it('should create a `README.md` file with given data', () => {
    assert.fileContent('.nvmrc', 'v8.9.1');
  });

  it('should create a `README.md` file with given data', () => {
    assert.fileContent('README.md', promtArgs.description);
    assert.fileContent('README.md', promtArgs.reactComponent);
  });

  it('should create configuration files', () => {
    assert.file([
      '.gitattributes',
      '.gitignore',
      '.npmignore',
      '.yo-rc.json',
      'CHANGELOG.md',
      '.nvmrc',
      'package.json',
    ]);
  });

  it('should create main file', () => {
    assert.file([
      'index.js',
      'new-file.js',
    ]);
  });

});
