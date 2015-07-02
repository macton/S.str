var S = require('s');

var str = {
  isSub      : S.curry( function( a, b ) { return a.indexOf(b) >= 0; } ),
  indexOf    : S.curry( function( a, b ) { return a.indexOf(b); } ),
  length     : function( a ) { return a?a.length:0 },
  isEmpty    : function( a ) { return a?(a.length === 0):true; },
  trim       : function( a ) { return a?a.trim():''; },
  join       : S.curry( function( delim, list ) { return list.join(delim); } ),
  concat     : function( list ) { return list.join(''); },
  prefix     : S.curry( function( p, a ) { return p+a; }),
  postfix    : S.curry( function( p, a ) { return a+p; }),
};

exports = module.exports = str;
