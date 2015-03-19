# laravel-elixir-clean

Clean built files or folders.

## Install

```sh
$ npm install laravel-elixir-clean --save-dev
```

## Usage

Clean folders: `public/css`, `public/js`, `public/build`.

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-clean');

elixir(function(mix) {
  mix.clean()
     .less('*.less')
     .coffee('*.coffee');
});
```

Then run tasks:

```bash
gulp
```

Or just clean folders only:

```bash
gulp clean
```

## License

MIT
