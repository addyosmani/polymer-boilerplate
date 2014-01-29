// Show docs if we're not loaded directly as a component.

if (!!!window.Polymer) { //if (this === window) {
  // var CONFIG = {
  //   name: "wc-documentation",
  //   version: "0.0.1",
  //   github: "github.com/Polymer/polymer",
  //   home: "polymer-project.org"
  // }

  document.write(
    '<script src="../bower_components/platform/platform.js"></script>' +
    '<link rel="import" href="wc-documentation.html">');
}
