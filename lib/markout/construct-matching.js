"use strict";
module.exports = constructMatching;

function constructMatching($,markoutMap) {
    $("div.matching").each(function () {
        var style = $(this).markoutPropertyValue("style");
        $(this).addClass(style);
    });

}