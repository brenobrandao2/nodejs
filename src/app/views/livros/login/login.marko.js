// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casadocodigo$1.0.0/src/app/views/livros/login/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form action=\"/login\" method=\"post\"><h1>Login</h1><div class=\"container\"><label for=\"uname\"><b>Email: </b></label><input type=\"text\" placeholder=\"digite o email\" name=\"email\" required><br><label for=\"psw\"><b>Senha: </b></label><input type=\"password\" placeholder=\"digite a senha\" name=\"senha\" required><br><input type=\"submit\" value=\"Login\"></div></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casadocodigo$1.0.0/src/app/views/livros/login/login.marko"
  };
