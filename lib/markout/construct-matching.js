"use strict";
module.exports = constructMatching;

function constructMatching($,markoutMap) {
    console.log("TEST");
    $("div.matching").each(function () {
        var style = $(this).markoutPropertyValue("style");
        console.log("TEST2");
        $(this).addClass(style);
    });

}