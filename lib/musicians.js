'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Artist = function () {
  function Artist() {
    _classCallCheck(this, Artist);
  }

  _createClass(Artist, [{
    key: 'doArt',
    value: function doArt() {
      console.log('Making creative stuff');
    }
  }, {
    key: 'thinkArtisticly',
    value: function thinkArtisticly() {
      console.log('Thinking....');
    }
  }]);

  return Artist;
}();

var Musician = function (_Artist) {
  _inherits(Musician, _Artist);

  function Musician() {
    _classCallCheck(this, Musician);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Musician).apply(this, arguments));
  }

  _createClass(Musician, [{
    key: 'makeMusic',
    value: function makeMusic() {
      console.log('making good music');
    }
  }]);

  return Musician;
}(Artist);

var lionel = new Musician();
lionel.doArt();
lionel.makeMusic();