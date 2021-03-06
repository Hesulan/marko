"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = {},
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/child-tag-no-output-multiple-roots/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_no_output_tag = marko_loadTag(require("./components/test-no-output/renderer")),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  test_no_output_tag({}, out);

  out.w("<div" +
    marko_attr("id", __component.elId("_r0")) +
    ">" +
    marko_escapeXml(input.name) +
    "</div><div" +
    marko_attr("id", __component.elId("_r1")) +
    ">" +
    marko_escapeXml(input.address) +
    "</div>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType,
    roots: [
      "_r0",
      "_r1"
    ]
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "./components/test-no-output/renderer"
    ]
  };
