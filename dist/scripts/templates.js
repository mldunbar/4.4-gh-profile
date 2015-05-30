this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Hello</h1>\n";
},"useData":true});
this["JST"]["repo-template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h2>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n<h4>"
    + alias3(((helper = (helper = helpers.updated_at || (depth0 != null ? depth0.updated_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"updated_at","hash":{},"data":data}) : helper)))
    + "</h4>\n<h3>"
    + alias3(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"language","hash":{},"data":data}) : helper)))
    + "</h3>\n<h5>"
    + alias3(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</h5>\n<h5>"
    + alias3(((helper = (helper = helpers.forks_count || (depth0 != null ? depth0.forks_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"forks_count","hash":{},"data":data}) : helper)))
    + "</h5>\n";
},"useData":true});
this["JST"]["user-template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<img src=\""
    + alias3(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar\" />\n<h2>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n<h3>"
    + alias3(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"login","hash":{},"data":data}) : helper)))
    + "</h3>\n\n<h6>"
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "</h6>\n<h6>"
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "</h6>\n\n<ul>\n  <li>"
    + alias3(((helper = (helper = helpers.followers_url || (depth0 != null ? depth0.followers_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followers_url","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias3(((helper = (helper = helpers.starred_url || (depth0 != null ? depth0.starred_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"starred_url","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>"
    + alias3(((helper = (helper = helpers.following_url || (depth0 != null ? depth0.following_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"following_url","hash":{},"data":data}) : helper)))
    + "</li>\n</ul>\n\n<h4>Organizations</h4>\n<p>"
    + alias3(((helper = (helper = helpers.organizations_url || (depth0 != null ? depth0.organizations_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"organizations_url","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"useData":true});