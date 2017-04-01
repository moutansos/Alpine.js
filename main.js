/* Alpine.js
 * 
 * A Template Engine for NodeJS.
 * 
 * See LICENSE for details on copyright and project licensing.
 */

const fs = require('fs');

var alpineExpress = function(templatePath, options, callback){
    return "<h1>Hello World!</h1>";
}

var render = function(templatePath, data, callback) {
    //TODO: Make sure this throws propper errors
    fs.readFile(templatePath, function(err, data){
        var template = data.toString();
        for(var key in data){
            var value = data[key];
            template = template.replace('{{' + key + '}}', value);
        }

        //TODO: implement array syntax
    });
}

//Public API
exports.__express = alpineExpress; //For use with the alpine web framework
exports.render = render;