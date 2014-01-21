
var classes = require('classes');
var parent = require('parent');


/**
 * Expose `plugin`.
 */

module.exports = plugin;


/**
 * Apply the plugin to the `validator`.
 *
 * @param {Validator} validator
 */

function plugin (validator) {

  var adapter = validator.adapter;
  var el = adapter.el;
  var valid = adapter.valid;
  var invalid = adapter.invalid;
  var clear = adapter.clear;

  validator.valid(function (view) {
    valid.apply(adapter, arguments);
    var input = el(view);
    classes(field(input)).add('valid');
  });

  validator.invalid(function (view) {
    invalid.apply(adapter, arguments);
    var input = el(view);
    classes(field(input)).add('invalid');
  });

  validator.clear(function (view) {
    clear.apply(adapter, arguments);
    var input = el(view);
    classes(field(input)).remove('valid').remove('invalid');
  });

}


/**
 * Get the parent `.form-field` from an `input`.
 *
 * @param {Element} input
 * @return {Element}
 */

function field (input) {
  return parent(input, 'fieldset');
}