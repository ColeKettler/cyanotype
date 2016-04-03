# Cyanotype

A blueprint-ish [Ghost](https://ghost.org/) theme that I made for my [personal site](https://colekettler.com/).

## Building

[Bower](http://bower.io/) is used for client-side dependencies. Run `bower install` after installing the theme.

## Configuration

The theme exposes the global property `cyanotype` to allow for configuration via JavaScript code injection (in the header or footer). All configuration is confined to this namespace.

### Social Nav Links

To add icon links to your social profiles in the site nav, add the service names and your profile URLs as object properties on `cyanotype.social`.

```javascript
<script>
cyanotype.social = {
  github: 'https://github.com/user',
  email: 'mailto:user@example.com'
};
</script>
```

The theme uses a subset of [Font Awesome's brand icons](https://fortawesome.github.io/Font-Awesome/icons/#brand). Supported services can be found in the [icons stylesheet](https://github.com/ColeKettler/cyanotype/blob/master/assets/css/icons.css).

## Contributing

A [Gulpfile](http://gulpjs.com/) is included. I build against Node 4.x (LTS) and modern browsers (IE 10+).

This theme is primarily designed with my needs in mind. However, if you think it's kinda cool, feel free to use it. If you run into any trouble or have a suggestion, I'm always willing to take a look at an issue or a PR.
