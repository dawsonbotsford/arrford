(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.arrford=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj};module.exports=function(input,oxford,join){var argLength=arguments.length;if(typeof oxford==="undefined"){oxford=true}join=join||"and";if(!Array.isArray(input)){throw new TypeError("Expected input to be an array, got "+(typeof input==="undefined"?"undefined":_typeof(input)))}if(typeof oxford!=="boolean"){throw new TypeError("Expected oxford to be a boolean, got "+(typeof oxford==="undefined"?"undefined":_typeof(oxford)))}if(typeof join!=="string"){throw new TypeError("Expected join to be a string, got "+(typeof join==="undefined"?"undefined":_typeof(join)))}var allStrings=input.every(function(curr){return typeof curr==="string"});if(allStrings===false){throw new Error("Expected all elements of input array to be strings. Consider a map call to cast all elements to strings")}if(argLength!==1&&argLength!==2&&argLength!==3){throw new Error("Expected 1, 2 or 3 arguments, got "+argLength)}var len=input.length;switch(len){case 0:return input;break;case 1:return""+input[0];break;default:var myString=""+input[0];for(var i=1;i<input.length;i++){if(i<input.length-1){myString+=", "+input[i]}else{myString+=oxford===true?", "+join+" "+input[i]:" "+join+" "+input[i]}}return myString;break}}},{}]},{},[1])(1)});