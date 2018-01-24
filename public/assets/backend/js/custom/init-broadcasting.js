/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 182);
/******/ })
/************************************************************************/
/******/ ({

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(183);


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _laravelEcho = __webpack_require__(184);

var _laravelEcho2 = _interopRequireDefault(_laravelEcho);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Pusher = __webpack_require__(185);

window.Echo = new _laravelEcho2.default({
    broadcaster: 'pusher',
    key: 'c3189996e679f97c2505',
    cluster: 'ap2',
    encrypted: true
});

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Connector = function () {
    function Connector(options) {
        classCallCheck(this, Connector);

        this._defaultOptions = {
            auth: {
                headers: {}
            },
            authEndpoint: '/broadcasting/auth',
            broadcaster: 'pusher',
            csrfToken: null,
            host: null,
            key: null,
            namespace: 'App.Events'
        };
        this.setOptions(options);
        this.connect();
    }

    createClass(Connector, [{
        key: 'setOptions',
        value: function setOptions(options) {
            this.options = _extends(this._defaultOptions, options);
            if (this.csrfToken()) {
                this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
            }
            return options;
        }
    }, {
        key: 'csrfToken',
        value: function csrfToken() {
            var selector = void 0;
            if (window && window['Laravel'] && window['Laravel'].csrfToken) {
                return window['Laravel'].csrfToken;
            } else if (this.options.csrfToken) {
                return this.options.csrfToken;
            } else if (typeof document !== 'undefined' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
                return selector.getAttribute('content');
            }
            return null;
        }
    }]);
    return Connector;
}();

var Channel = function () {
    function Channel() {
        classCallCheck(this, Channel);
    }

    createClass(Channel, [{
        key: 'notification',
        value: function notification(callback) {
            return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
        }
    }, {
        key: 'listenForWhisper',
        value: function listenForWhisper(event, callback) {
            return this.listen('.client-' + event, callback);
        }
    }]);
    return Channel;
}();

var EventFormatter = function () {
    function EventFormatter(namespace) {
        classCallCheck(this, EventFormatter);

        this.setNamespace(namespace);
    }

    createClass(EventFormatter, [{
        key: 'format',
        value: function format(event) {
            if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
                return event.substr(1);
            } else if (this.namespace) {
                event = this.namespace + '.' + event;
            }
            return event.replace(/\./g, '\\');
        }
    }, {
        key: 'setNamespace',
        value: function setNamespace(value) {
            this.namespace = value;
        }
    }]);
    return EventFormatter;
}();

var PusherChannel = function (_Channel) {
    inherits(PusherChannel, _Channel);

    function PusherChannel(pusher, name, options) {
        classCallCheck(this, PusherChannel);

        var _this = possibleConstructorReturn(this, (PusherChannel.__proto__ || Object.getPrototypeOf(PusherChannel)).call(this));

        _this.name = name;
        _this.pusher = pusher;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        return _this;
    }

    createClass(PusherChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.subscription = this.pusher.subscribe(this.name);
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.pusher.unsubscribe(this.name);
        }
    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            this.subscription.unbind(this.eventFormatter.format(event));
            return this;
        }
    }, {
        key: 'on',
        value: function on(event, callback) {
            this.subscription.bind(event, callback);
            return this;
        }
    }]);
    return PusherChannel;
}(Channel);

var PusherPrivateChannel = function (_PusherChannel) {
    inherits(PusherPrivateChannel, _PusherChannel);

    function PusherPrivateChannel() {
        classCallCheck(this, PusherPrivateChannel);
        return possibleConstructorReturn(this, (PusherPrivateChannel.__proto__ || Object.getPrototypeOf(PusherPrivateChannel)).apply(this, arguments));
    }

    createClass(PusherPrivateChannel, [{
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPrivateChannel;
}(PusherChannel);

var PusherPresenceChannel = function (_PusherChannel) {
    inherits(PusherPresenceChannel, _PusherChannel);

    function PusherPresenceChannel() {
        classCallCheck(this, PusherPresenceChannel);
        return possibleConstructorReturn(this, (PusherPresenceChannel.__proto__ || Object.getPrototypeOf(PusherPresenceChannel)).apply(this, arguments));
    }

    createClass(PusherPresenceChannel, [{
        key: 'here',
        value: function here(callback) {
            this.on('pusher:subscription_succeeded', function (data) {
                callback(Object.keys(data.members).map(function (k) {
                    return data.members[k];
                }));
            });
            return this;
        }
    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('pusher:member_added', function (member) {
                callback(member.info);
            });
            return this;
        }
    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('pusher:member_removed', function (member) {
                callback(member.info);
            });
            return this;
        }
    }, {
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPresenceChannel;
}(PusherChannel);

var SocketIoChannel = function (_Channel) {
    inherits(SocketIoChannel, _Channel);

    function SocketIoChannel(socket, name, options) {
        classCallCheck(this, SocketIoChannel);

        var _this = possibleConstructorReturn(this, (SocketIoChannel.__proto__ || Object.getPrototypeOf(SocketIoChannel)).call(this));

        _this.events = {};
        _this.name = name;
        _this.socket = socket;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        _this.configureReconnector();
        return _this;
    }

    createClass(SocketIoChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.socket.emit('subscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.unbind();
            this.socket.emit('unsubscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
    }, {
        key: 'on',
        value: function on(event, callback) {
            var _this2 = this;

            var listener = function listener(channel, data) {
                if (_this2.name == channel) {
                    callback(data);
                }
            };
            this.socket.on(event, listener);
            this.bind(event, listener);
        }
    }, {
        key: 'configureReconnector',
        value: function configureReconnector() {
            var _this3 = this;

            var listener = function listener() {
                _this3.subscribe();
            };
            this.socket.on('reconnect', listener);
            this.bind('reconnect', listener);
        }
    }, {
        key: 'bind',
        value: function bind(event, callback) {
            this.events[event] = this.events[event] || [];
            this.events[event].push(callback);
        }
    }, {
        key: 'unbind',
        value: function unbind() {
            var _this4 = this;

            Object.keys(this.events).forEach(function (event) {
                _this4.events[event].forEach(function (callback) {
                    _this4.socket.removeListener(event, callback);
                });
                delete _this4.events[event];
            });
        }
    }]);
    return SocketIoChannel;
}(Channel);

var SocketIoPrivateChannel = function (_SocketIoChannel) {
    inherits(SocketIoPrivateChannel, _SocketIoChannel);

    function SocketIoPrivateChannel() {
        classCallCheck(this, SocketIoPrivateChannel);
        return possibleConstructorReturn(this, (SocketIoPrivateChannel.__proto__ || Object.getPrototypeOf(SocketIoPrivateChannel)).apply(this, arguments));
    }

    createClass(SocketIoPrivateChannel, [{
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.socket.emit('client event', {
                channel: this.name,
                event: 'client-' + eventName,
                data: data
            });
            return this;
        }
    }]);
    return SocketIoPrivateChannel;
}(SocketIoChannel);

var SocketIoPresenceChannel = function (_SocketIoPrivateChann) {
    inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

    function SocketIoPresenceChannel() {
        classCallCheck(this, SocketIoPresenceChannel);
        return possibleConstructorReturn(this, (SocketIoPresenceChannel.__proto__ || Object.getPrototypeOf(SocketIoPresenceChannel)).apply(this, arguments));
    }

    createClass(SocketIoPresenceChannel, [{
        key: 'here',
        value: function here(callback) {
            this.on('presence:subscribed', function (members) {
                callback(members.map(function (m) {
                    return m.user_info;
                }));
            });
            return this;
        }
    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('presence:joining', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('presence:leaving', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
    }]);
    return SocketIoPresenceChannel;
}(SocketIoPrivateChannel);

var PusherConnector = function (_Connector) {
    inherits(PusherConnector, _Connector);

    function PusherConnector() {
        var _ref;

        classCallCheck(this, PusherConnector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = possibleConstructorReturn(this, (_ref = PusherConnector.__proto__ || Object.getPrototypeOf(PusherConnector)).call.apply(_ref, [this].concat(args)));

        _this.channels = {};
        return _this;
    }

    createClass(PusherConnector, [{
        key: 'connect',
        value: function connect() {
            this.pusher = new Pusher(this.options.key, this.options);
        }
    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new PusherChannel(this.pusher, name, this.options);
            }
            return this.channels[name];
        }
    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name, index) {
                if (_this2.channels[name]) {
                    _this2.channels[name].unsubscribe();
                    delete _this2.channels[name];
                }
            });
        }
    }, {
        key: 'socketId',
        value: function socketId() {
            return this.pusher.connection.socket_id;
        }
    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.pusher.disconnect();
        }
    }]);
    return PusherConnector;
}(Connector);

var SocketIoConnector = function (_Connector) {
    inherits(SocketIoConnector, _Connector);

    function SocketIoConnector() {
        var _ref;

        classCallCheck(this, SocketIoConnector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = possibleConstructorReturn(this, (_ref = SocketIoConnector.__proto__ || Object.getPrototypeOf(SocketIoConnector)).call.apply(_ref, [this].concat(args)));

        _this.channels = {};
        return _this;
    }

    createClass(SocketIoConnector, [{
        key: 'connect',
        value: function connect() {
            this.socket = io(this.options.host, this.options);
            return this.socket;
        }
    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
            }
            return this.channels[name];
        }
    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name) {
                if (_this2.channels[name]) {
                    _this2.channels[name].unsubscribe();
                    delete _this2.channels[name];
                }
            });
        }
    }, {
        key: 'socketId',
        value: function socketId() {
            return this.socket.id;
        }
    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.socket.disconnect();
        }
    }]);
    return SocketIoConnector;
}(Connector);

var Echo = function () {
    function Echo(options) {
        classCallCheck(this, Echo);

        this.options = options;
        if (typeof Vue === 'function' && Vue.http) {
            this.registerVueRequestInterceptor();
        }
        if (typeof axios === 'function') {
            this.registerAxiosRequestInterceptor();
        }
        if (typeof jQuery === 'function') {
            this.registerjQueryAjaxSetup();
        }
        if (this.options.broadcaster == 'pusher') {
            this.connector = new PusherConnector(this.options);
        } else if (this.options.broadcaster == 'socket.io') {
            this.connector = new SocketIoConnector(this.options);
        }
    }

    createClass(Echo, [{
        key: 'registerVueRequestInterceptor',
        value: function registerVueRequestInterceptor() {
            var _this = this;

            Vue.http.interceptors.push(function (request, next) {
                if (_this.socketId()) {
                    request.headers.set('X-Socket-ID', _this.socketId());
                }
                next();
            });
        }
    }, {
        key: 'registerAxiosRequestInterceptor',
        value: function registerAxiosRequestInterceptor() {
            var _this2 = this;

            axios.interceptors.request.use(function (config) {
                if (_this2.socketId()) {
                    config.headers['X-Socket-Id'] = _this2.socketId();
                }
                return config;
            });
        }
    }, {
        key: 'registerjQueryAjaxSetup',
        value: function registerjQueryAjaxSetup() {
            var _this3 = this;

            if (typeof jQuery.ajax != 'undefined') {
                jQuery.ajaxSetup({
                    beforeSend: function beforeSend(xhr) {
                        if (_this3.socketId()) {
                            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
                        }
                    }
                });
            }
        }
    }, {
        key: 'listen',
        value: function listen(channel, event, callback) {
            return this.connector.listen(channel, event, callback);
        }
    }, {
        key: 'channel',
        value: function channel(_channel) {
            return this.connector.channel(_channel);
        }
    }, {
        key: 'private',
        value: function _private(channel) {
            return this.connector.privateChannel(channel);
        }
    }, {
        key: 'join',
        value: function join(channel) {
            return this.connector.presenceChannel(channel);
        }
    }, {
        key: 'leave',
        value: function leave(channel) {
            this.connector.leave(channel);
        }
    }, {
        key: 'socketId',
        value: function socketId() {
            return this.connector.socketId();
        }
    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.connector.disconnect();
        }
    }]);
    return Echo;
}();

module.exports = Echo;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Pusher JavaScript Library v4.2.1
 * https://pusher.com/
 *
 * Copyright 2017, Pusher
 * Released under the MIT licence.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Pusher"] = factory();
	else
		root["Pusher"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var pusher_1 = __webpack_require__(1);
	module.exports = pusher_1["default"];


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var runtime_1 = __webpack_require__(2);
	var Collections = __webpack_require__(9);
	var dispatcher_1 = __webpack_require__(24);
	var timeline_1 = __webpack_require__(39);
	var level_1 = __webpack_require__(40);
	var StrategyBuilder = __webpack_require__(41);
	var timers_1 = __webpack_require__(12);
	var defaults_1 = __webpack_require__(5);
	var DefaultConfig = __webpack_require__(63);
	var logger_1 = __webpack_require__(8);
	var factory_1 = __webpack_require__(43);
	var url_store_1 = __webpack_require__(14);
	var Pusher = (function () {
	    function Pusher(app_key, options) {
	        var _this = this;
	        checkAppKey(app_key);
	        options = options || {};
	        if (!options.cluster) {
	            var suffix = url_store_1["default"].buildLogSuffix("javascriptQuickStart");
	            logger_1["default"].warn("You should always specify a cluster when connecting. " + suffix);
	        }
	        this.key = app_key;
	        this.config = Collections.extend(DefaultConfig.getGlobalConfig(), options.cluster ? DefaultConfig.getClusterConfig(options.cluster) : {}, options);
	        this.channels = factory_1["default"].createChannels();
	        this.global_emitter = new dispatcher_1["default"]();
	        this.sessionID = Math.floor(Math.random() * 1000000000);
	        this.timeline = new timeline_1["default"](this.key, this.sessionID, {
	            cluster: this.config.cluster,
	            features: Pusher.getClientFeatures(),
	            params: this.config.timelineParams || {},
	            limit: 50,
	            level: level_1["default"].INFO,
	            version: defaults_1["default"].VERSION
	        });
	        if (!this.config.disableStats) {
	            this.timelineSender = factory_1["default"].createTimelineSender(this.timeline, {
	                host: this.config.statsHost,
	                path: "/timeline/v2/" + runtime_1["default"].TimelineTransport.name
	            });
	        }
	        var getStrategy = function (options) {
	            var config = Collections.extend({}, _this.config, options);
	            return StrategyBuilder.build(runtime_1["default"].getDefaultStrategy(config), config);
	        };
	        this.connection = factory_1["default"].createConnectionManager(this.key, Collections.extend({ getStrategy: getStrategy,
	            timeline: this.timeline,
	            activityTimeout: this.config.activity_timeout,
	            pongTimeout: this.config.pong_timeout,
	            unavailableTimeout: this.config.unavailable_timeout
	        }, this.config, { encrypted: this.isEncrypted() }));
	        this.connection.bind('connected', function () {
	            _this.subscribeAll();
	            if (_this.timelineSender) {
	                _this.timelineSender.send(_this.connection.isEncrypted());
	            }
	        });
	        this.connection.bind('message', function (params) {
	            var internal = (params.event.indexOf('pusher_internal:') === 0);
	            if (params.channel) {
	                var channel = _this.channel(params.channel);
	                if (channel) {
	                    channel.handleEvent(params.event, params.data);
	                }
	            }
	            if (!internal) {
	                _this.global_emitter.emit(params.event, params.data);
	            }
	        });
	        this.connection.bind('connecting', function () {
	            _this.channels.disconnect();
	        });
	        this.connection.bind('disconnected', function () {
	            _this.channels.disconnect();
	        });
	        this.connection.bind('error', function (err) {
	            logger_1["default"].warn('Error', err);
	        });
	        Pusher.instances.push(this);
	        this.timeline.info({ instances: Pusher.instances.length });
	        if (Pusher.isReady) {
	            this.connect();
	        }
	    }
	    Pusher.ready = function () {
	        Pusher.isReady = true;
	        for (var i = 0, l = Pusher.instances.length; i < l; i++) {
	            Pusher.instances[i].connect();
	        }
	    };
	    Pusher.log = function (message) {
	        if (Pusher.logToConsole && (window).console && (window).console.log) {
	            (window).console.log(message);
	        }
	    };
	    Pusher.getClientFeatures = function () {
	        return Collections.keys(Collections.filterObject({ "ws": runtime_1["default"].Transports.ws }, function (t) { return t.isSupported({}); }));
	    };
	    Pusher.prototype.channel = function (name) {
	        return this.channels.find(name);
	    };
	    Pusher.prototype.allChannels = function () {
	        return this.channels.all();
	    };
	    Pusher.prototype.connect = function () {
	        this.connection.connect();
	        if (this.timelineSender) {
	            if (!this.timelineSenderTimer) {
	                var encrypted = this.connection.isEncrypted();
	                var timelineSender = this.timelineSender;
	                this.timelineSenderTimer = new timers_1.PeriodicTimer(60000, function () {
	                    timelineSender.send(encrypted);
	                });
	            }
	        }
	    };
	    Pusher.prototype.disconnect = function () {
	        this.connection.disconnect();
	        if (this.timelineSenderTimer) {
	            this.timelineSenderTimer.ensureAborted();
	            this.timelineSenderTimer = null;
	        }
	    };
	    Pusher.prototype.bind = function (event_name, callback, context) {
	        this.global_emitter.bind(event_name, callback, context);
	        return this;
	    };
	    Pusher.prototype.unbind = function (event_name, callback, context) {
	        this.global_emitter.unbind(event_name, callback, context);
	        return this;
	    };
	    Pusher.prototype.bind_global = function (callback) {
	        this.global_emitter.bind_global(callback);
	        return this;
	    };
	    Pusher.prototype.unbind_global = function (callback) {
	        this.global_emitter.unbind_global(callback);
	        return this;
	    };
	    Pusher.prototype.unbind_all = function (callback) {
	        this.global_emitter.unbind_all();
	        return this;
	    };
	    Pusher.prototype.subscribeAll = function () {
	        var channelName;
	        for (channelName in this.channels.channels) {
	            if (this.channels.channels.hasOwnProperty(channelName)) {
	                this.subscribe(channelName);
	            }
	        }
	    };
	    Pusher.prototype.subscribe = function (channel_name) {
	        var channel = this.channels.add(channel_name, this);
	        if (channel.subscriptionPending && channel.subscriptionCancelled) {
	            channel.reinstateSubscription();
	        }
	        else if (!channel.subscriptionPending && this.connection.state === "connected") {
	            channel.subscribe();
	        }
	        return channel;
	    };
	    Pusher.prototype.unsubscribe = function (channel_name) {
	        var channel = this.channels.find(channel_name);
	        if (channel && channel.subscriptionPending) {
	            channel.cancelSubscription();
	        }
	        else {
	            channel = this.channels.remove(channel_name);
	            if (channel && this.connection.state === "connected") {
	                channel.unsubscribe();
	            }
	        }
	    };
	    Pusher.prototype.send_event = function (event_name, data, channel) {
	        return this.connection.send_event(event_name, data, channel);
	    };
	    Pusher.prototype.isEncrypted = function () {
	        if (runtime_1["default"].getProtocol() === "https:") {
	            return true;
	        }
	        else {
	            return Boolean(this.config.encrypted);
	        }
	    };
	    Pusher.instances = [];
	    Pusher.isReady = false;
	    Pusher.logToConsole = false;
	    Pusher.Runtime = runtime_1["default"];
	    Pusher.ScriptReceivers = runtime_1["default"].ScriptReceivers;
	    Pusher.DependenciesReceivers = runtime_1["default"].DependenciesReceivers;
	    Pusher.auth_callbacks = runtime_1["default"].auth_callbacks;
	    return Pusher;
	}());
	exports.__esModule = true;
	exports["default"] = Pusher;
	function checkAppKey(key) {
	    if (key === null || key === undefined) {
	        throw "You must pass your app key when you instantiate Pusher.";
	    }
	}
	runtime_1["default"].setup(Pusher);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var dependencies_1 = __webpack_require__(3);
	var xhr_auth_1 = __webpack_require__(7);
	var jsonp_auth_1 = __webpack_require__(15);
	var script_request_1 = __webpack_require__(16);
	var jsonp_request_1 = __webpack_require__(17);
	var script_receiver_factory_1 = __webpack_require__(4);
	var jsonp_timeline_1 = __webpack_require__(18);
	var transports_1 = __webpack_require__(19);
	var net_info_1 = __webpack_require__(26);
	var default_strategy_1 = __webpack_require__(27);
	var transport_connection_initializer_1 = __webpack_require__(28);
	var http_1 = __webpack_require__(29);
	var Runtime = {
	    nextAuthCallbackID: 1,
	    auth_callbacks: {},
	    ScriptReceivers: script_receiver_factory_1.ScriptReceivers,
	    DependenciesReceivers: dependencies_1.DependenciesReceivers,
	    getDefaultStrategy: default_strategy_1["default"],
	    Transports: transports_1["default"],
	    transportConnectionInitializer: transport_connection_initializer_1["default"],
	    HTTPFactory: http_1["default"],
	    TimelineTransport: jsonp_timeline_1["default"],
	    getXHRAPI: function () {
	        return window.XMLHttpRequest;
	    },
	    getWebSocketAPI: function () {
	        return window.WebSocket || window.MozWebSocket;
	    },
	    setup: function (PusherClass) {
	        var _this = this;
	        window.Pusher = PusherClass;
	        var initializeOnDocumentBody = function () {
	            _this.onDocumentBody(PusherClass.ready);
	        };
	        if (!window.JSON) {
	            dependencies_1.Dependencies.load("json2", {}, initializeOnDocumentBody);
	        }
	        else {
	            initializeOnDocumentBody();
	        }
	    },
	    getDocument: function () {
	        return document;
	    },
	    getProtocol: function () {
	        return this.getDocument().location.protocol;
	    },
	    getAuthorizers: function () {
	        return { ajax: xhr_auth_1["default"], jsonp: jsonp_auth_1["default"] };
	    },
	    onDocumentBody: function (callback) {
	        var _this = this;
	        if (document.body) {
	            callback();
	        }
	        else {
	            setTimeout(function () {
	                _this.onDocumentBody(callback);
	            }, 0);
	        }
	    },
	    createJSONPRequest: function (url, data) {
	        return new jsonp_request_1["default"](url, data);
	    },
	    createScriptRequest: function (src) {
	        return new script_request_1["default"](src);
	    },
	    getLocalStorage: function () {
	        try {
	            return window.localStorage;
	        }
	        catch (e) {
	            return undefined;
	        }
	    },
	    createXHR: function () {
	        if (this.getXHRAPI()) {
	            return this.createXMLHttpRequest();
	        }
	        else {
	            return this.createMicrosoftXHR();
	        }
	    },
	    createXMLHttpRequest: function () {
	        var Constructor = this.getXHRAPI();
	        return new Constructor();
	    },
	    createMicrosoftXHR: function () {
	        return new ActiveXObject("Microsoft.XMLHTTP");
	    },
	    getNetwork: function () {
	        return net_info_1.Network;
	    },
	    createWebSocket: function (url) {
	        var Constructor = this.getWebSocketAPI();
	        return new Constructor(url);
	    },
	    createSocketRequest: function (method, url) {
	        if (this.isXHRSupported()) {
	            return this.HTTPFactory.createXHR(method, url);
	        }
	        else if (this.isXDRSupported(url.indexOf("https:") === 0)) {
	            return this.HTTPFactory.createXDR(method, url);
	        }
	        else {
	            throw "Cross-origin HTTP requests are not supported";
	        }
	    },
	    isXHRSupported: function () {
	        var Constructor = this.getXHRAPI();
	        return Boolean(Constructor) && (new Constructor()).withCredentials !== undefined;
	    },
	    isXDRSupported: function (encrypted) {
	        var protocol = encrypted ? "https:" : "http:";
	        var documentProtocol = this.getProtocol();
	        return Boolean((window['XDomainRequest'])) && documentProtocol === protocol;
	    },
	    addUnloadListener: function (listener) {
	        if (window.addEventListener !== undefined) {
	            window.addEventListener("unload", listener, false);
	        }
	        else if (window.attachEvent !== undefined) {
	            window.attachEvent("onunload", listener);
	        }
	    },
	    removeUnloadListener: function (listener) {
	        if (window.addEventListener !== undefined) {
	            window.removeEventListener("unload", listener, false);
	        }
	        else if (window.detachEvent !== undefined) {
	            window.detachEvent("onunload", listener);
	        }
	    }
	};
	exports.__esModule = true;
	exports["default"] = Runtime;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var script_receiver_factory_1 = __webpack_require__(4);
	var defaults_1 = __webpack_require__(5);
	var dependency_loader_1 = __webpack_require__(6);
	exports.DependenciesReceivers = new script_receiver_factory_1.ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers");
	exports.Dependencies = new dependency_loader_1["default"]({
	    cdn_http: defaults_1["default"].cdn_http,
	    cdn_https: defaults_1["default"].cdn_https,
	    version: defaults_1["default"].VERSION,
	    suffix: defaults_1["default"].dependency_suffix,
	    receivers: exports.DependenciesReceivers
	});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	var ScriptReceiverFactory = (function () {
	    function ScriptReceiverFactory(prefix, name) {
	        this.lastId = 0;
	        this.prefix = prefix;
	        this.name = name;
	    }
	    ScriptReceiverFactory.prototype.create = function (callback) {
	        this.lastId++;
	        var number = this.lastId;
	        var id = this.prefix + number;
	        var name = this.name + "[" + number + "]";
	        var called = false;
	        var callbackWrapper = function () {
	            if (!called) {
	                callback.apply(null, arguments);
	                called = true;
	            }
	        };
	        this[number] = callbackWrapper;
	        return { number: number, id: id, name: name, callback: callbackWrapper };
	    };
	    ScriptReceiverFactory.prototype.remove = function (receiver) {
	        delete this[receiver.number];
	    };
	    return ScriptReceiverFactory;
	}());
	exports.ScriptReceiverFactory = ScriptReceiverFactory;
	exports.ScriptReceivers = new ScriptReceiverFactory("_pusher_script_", "Pusher.ScriptReceivers");


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	var Defaults = {
	    VERSION: "4.2.1",
	    PROTOCOL: 7,
	    host: 'ws.pusherapp.com',
	    ws_port: 80,
	    wss_port: 443,
	    sockjs_host: 'sockjs.pusher.com',
	    sockjs_http_port: 80,
	    sockjs_https_port: 443,
	    sockjs_path: "/pusher",
	    stats_host: 'stats.pusher.com',
	    channel_auth_endpoint: '/pusher/auth',
	    channel_auth_transport: 'ajax',
	    activity_timeout: 120000,
	    pong_timeout: 30000,
	    unavailable_timeout: 10000,
	    cdn_http: 'http://js.pusher.com',
	    cdn_https: 'https://js.pusher.com',
	    dependency_suffix: ''
	};
	exports.__esModule = true;
	exports["default"] = Defaults;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var script_receiver_factory_1 = __webpack_require__(4);
	var runtime_1 = __webpack_require__(2);
	var DependencyLoader = (function () {
	    function DependencyLoader(options) {
	        this.options = options;
	        this.receivers = options.receivers || script_receiver_factory_1.ScriptReceivers;
	        this.loading = {};
	    }
	    DependencyLoader.prototype.load = function (name, options, callback) {
	        var self = this;
	        if (self.loading[name] && self.loading[name].length > 0) {
	            self.loading[name].push(callback);
	        }
	        else {
	            self.loading[name] = [callback];
	            var request = runtime_1["default"].createScriptRequest(self.getPath(name, options));
	            var receiver = self.receivers.create(function (error) {
	                self.receivers.remove(receiver);
	                if (self.loading[name]) {
	                    var callbacks = self.loading[name];
	                    delete self.loading[name];
	                    var successCallback = function (wasSuccessful) {
	                        if (!wasSuccessful) {
	                            request.cleanup();
	                        }
	                    };
	                    for (var i = 0; i < callbacks.length; i++) {
	                        callbacks[i](error, successCallback);
	                    }
	                }
	            });
	            request.send(receiver);
	        }
	    };
	    DependencyLoader.prototype.getRoot = function (options) {
	        var cdn;
	        var protocol = runtime_1["default"].getDocument().location.protocol;
	        if ((options && options.encrypted) || protocol === "https:") {
	            cdn = this.options.cdn_https;
	        }
	        else {
	            cdn = this.options.cdn_http;
	        }
	        return cdn.replace(/\/*$/, "") + "/" + this.options.version;
	    };
	    DependencyLoader.prototype.getPath = function (name, options) {
	        return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
	    };
	    ;
	    return DependencyLoader;
	}());
	exports.__esModule = true;
	exports["default"] = DependencyLoader;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var logger_1 = __webpack_require__(8);
	var runtime_1 = __webpack_require__(2);
	var url_store_1 = __webpack_require__(14);
	var ajax = function (context, socketId, callback) {
	    var self = this, xhr;
	    xhr = runtime_1["default"].createXHR();
	    xhr.open("POST", self.options.authEndpoint, true);
	    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	    for (var headerName in this.authOptions.headers) {
	        xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
	    }
	    xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4) {
	            if (xhr.status === 200) {
	                var data, parsed = false;
	                try {
	                    data = JSON.parse(xhr.responseText);
	                    parsed = true;
	                }
	                catch (e) {
	                    callback(true, 'JSON returned from webapp was invalid, yet status code was 200. Data was: ' + xhr.responseText);
	                }
	                if (parsed) {
	                    callback(false, data);
	                }
	            }
	            else {
	                var suffix = url_store_1["default"].buildLogSuffix("authenticationEndpoint");
	                logger_1["default"].warn(("Couldn't retrieve authentication info. " + xhr.status) +
	                    ("Clients must be authenticated to join private or presence channels. " + suffix));
	                callback(true, xhr.status);
	            }
	        }
	    };
	    xhr.send(this.composeQuery(socketId));
	    return xhr;
	};
	exports.__esModule = true;
	exports["default"] = ajax;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var collections_1 = __webpack_require__(9);
	var pusher_1 = __webpack_require__(1);
	var Logger = {
	    debug: function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        if (!pusher_1["default"].log) {
	            return;
	        }
	        pusher_1["default"].log(collections_1.stringify.apply(this, arguments));
	    },
	    warn: function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        var message = collections_1.stringify.apply(this, arguments);
	        if ((window).console) {
	            if ((window).console.warn) {
	                (window).console.warn(message);
	            }
	            else if ((window).console.log) {
	                (window).console.log(message);
	            }
	        }
	        if (pusher_1["default"].log) {
	            pusher_1["default"].log(message);
	        }
	    }
	};
	exports.__esModule = true;
	exports["default"] = Logger;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var base64_1 = __webpack_require__(10);
	var util_1 = __webpack_require__(11);
	function extend(target) {
	    var sources = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        sources[_i - 1] = arguments[_i];
	    }
	    for (var i = 0; i < sources.length; i++) {
	        var extensions = sources[i];
	        for (var property in extensions) {
	            if (extensions[property] && extensions[property].constructor &&
	                extensions[property].constructor === Object) {
	                target[property] = extend(target[property] || {}, extensions[property]);
	            }
	            else {
	                target[property] = extensions[property];
	            }
	        }
	    }
	    return target;
	}
	exports.extend = extend;
	function stringify() {
	    var m = ["Pusher"];
	    for (var i = 0; i < arguments.length; i++) {
	        if (typeof arguments[i] === "string") {
	            m.push(arguments[i]);
	        }
	        else {
	            m.push(safeJSONStringify(arguments[i]));
	        }
	    }
	    return m.join(" : ");
	}
	exports.stringify = stringify;
	function arrayIndexOf(array, item) {
	    var nativeIndexOf = Array.prototype.indexOf;
	    if (array === null) {
	        return -1;
	    }
	    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
	        return array.indexOf(item);
	    }
	    for (var i = 0, l = array.length; i < l; i++) {
	        if (array[i] === item) {
	            return i;
	        }
	    }
	    return -1;
	}
	exports.arrayIndexOf = arrayIndexOf;
	function objectApply(object, f) {
	    for (var key in object) {
	        if (Object.prototype.hasOwnProperty.call(object, key)) {
	            f(object[key], key, object);
	        }
	    }
	}
	exports.objectApply = objectApply;
	function keys(object) {
	    var keys = [];
	    objectApply(object, function (_, key) {
	        keys.push(key);
	    });
	    return keys;
	}
	exports.keys = keys;
	function values(object) {
	    var values = [];
	    objectApply(object, function (value) {
	        values.push(value);
	    });
	    return values;
	}
	exports.values = values;
	function apply(array, f, context) {
	    for (var i = 0; i < array.length; i++) {
	        f.call(context || (window), array[i], i, array);
	    }
	}
	exports.apply = apply;
	function map(array, f) {
	    var result = [];
	    for (var i = 0; i < array.length; i++) {
	        result.push(f(array[i], i, array, result));
	    }
	    return result;
	}
	exports.map = map;
	function mapObject(object, f) {
	    var result = {};
	    objectApply(object, function (value, key) {
	        result[key] = f(value);
	    });
	    return result;
	}
	exports.mapObject = mapObject;
	function filter(array, test) {
	    test = test || function (value) { return !!value; };
	    var result = [];
	    for (var i = 0; i < array.length; i++) {
	        if (test(array[i], i, array, result)) {
	            result.push(array[i]);
	        }
	    }
	    return result;
	}
	exports.filter = filter;
	function filterObject(object, test) {
	    var result = {};
	    objectApply(object, function (value, key) {
	        if ((test && test(value, key, object, result)) || Boolean(value)) {
	            result[key] = value;
	        }
	    });
	    return result;
	}
	exports.filterObject = filterObject;
	function flatten(object) {
	    var result = [];
	    objectApply(object, function (value, key) {
	        result.push([key, value]);
	    });
	    return result;
	}
	exports.flatten = flatten;
	function any(array, test) {
	    for (var i = 0; i < array.length; i++) {
	        if (test(array[i], i, array)) {
	            return true;
	        }
	    }
	    return false;
	}
	exports.any = any;
	function all(array, test) {
	    for (var i = 0; i < array.length; i++) {
	        if (!test(array[i], i, array)) {
	            return false;
	        }
	    }
	    return true;
	}
	exports.all = all;
	function encodeParamsObject(data) {
	    return mapObject(data, function (value) {
	        if (typeof value === "object") {
	            value = safeJSONStringify(value);
	        }
	        return encodeURIComponent(base64_1["default"](value.toString()));
	    });
	}
	exports.encodeParamsObject = encodeParamsObject;
	function buildQueryString(data) {
	    var params = filterObject(data, function (value) {
	        return value !== undefined;
	    });
	    var query = map(flatten(encodeParamsObject(params)), util_1["default"].method("join", "=")).join("&");
	    return query;
	}
	exports.buildQueryString = buildQueryString;
	function decycleObject(object) {
	    var objects = [], paths = [];
	    return (function derez(value, path) {
	        var i, name, nu;
	        switch (typeof value) {
	            case 'object':
	                if (!value) {
	                    return null;
	                }
	                for (i = 0; i < objects.length; i += 1) {
	                    if (objects[i] === value) {
	                        return { $ref: paths[i] };
	                    }
	                }
	                objects.push(value);
	                paths.push(path);
	                if (Object.prototype.toString.apply(value) === '[object Array]') {
	                    nu = [];
	                    for (i = 0; i < value.length; i += 1) {
	                        nu[i] = derez(value[i], path + '[' + i + ']');
	                    }
	                }
	                else {
	                    nu = {};
	                    for (name in value) {
	                        if (Object.prototype.hasOwnProperty.call(value, name)) {
	                            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
	                        }
	                    }
	                }
	                return nu;
	            case 'number':
	            case 'string':
	            case 'boolean':
	                return value;
	        }
	    }(object, '$'));
	}
	exports.decycleObject = decycleObject;
	function safeJSONStringify(source) {
	    try {
	        return JSON.stringify(source);
	    }
	    catch (e) {
	        return JSON.stringify(decycleObject(source));
	    }
	}
	exports.safeJSONStringify = safeJSONStringify;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function encode(s) {
	    return btoa(utob(s));
	}
	exports.__esModule = true;
	exports["default"] = encode;
	var fromCharCode = String.fromCharCode;
	var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	var b64tab = {};
	for (var i = 0, l = b64chars.length; i < l; i++) {
	    b64tab[b64chars.charAt(i)] = i;
	}
	var cb_utob = function (c) {
	    var cc = c.charCodeAt(0);
	    return cc < 0x80 ? c
	        : cc < 0x800 ? fromCharCode(0xc0 | (cc >>> 6)) +
	            fromCharCode(0x80 | (cc & 0x3f))
	            : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
	                fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
	                fromCharCode(0x80 | (cc & 0x3f));
	};
	var utob = function (u) {
	    return u.replace(/[^\x00-\x7F]/g, cb_utob);
	};
	var cb_encode = function (ccc) {
	    var padlen = [0, 2, 1][ccc.length % 3];
	    var ord = ccc.charCodeAt(0) << 16
	        | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
	        | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0));
	    var chars = [
	        b64chars.charAt(ord >>> 18),
	        b64chars.charAt((ord >>> 12) & 63),
	        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
	        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
	    ];
	    return chars.join('');
	};
	var btoa = (window).btoa || function (b) {
	    return b.replace(/[\s\S]{1,3}/g, cb_encode);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var timers_1 = __webpack_require__(12);
	var Util = {
	    now: function () {
	        if (Date.now) {
	            return Date.now();
	        }
	        else {
	            return new Date().valueOf();
	        }
	    },
	    defer: function (callback) {
	        return new timers_1.OneOffTimer(0, callback);
	    },
	    method: function (name) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var boundArguments = Array.prototype.slice.call(arguments, 1);
	        return function (object) {
	            return object[name].apply(object, boundArguments.concat(arguments));
	        };
	    }
	};
	exports.__esModule = true;
	exports["default"] = Util;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_timer_1 = __webpack_require__(13);
	function clearTimeout(timer) {
	    (window).clearTimeout(timer);
	}
	function clearInterval(timer) {
	    (window).clearInterval(timer);
	}
	var OneOffTimer = (function (_super) {
	    __extends(OneOffTimer, _super);
	    function OneOffTimer(delay, callback) {
	        _super.call(this, setTimeout, clearTimeout, delay, function (timer) {
	            callback();
	            return null;
	        });
	    }
	    return OneOffTimer;
	}(abstract_timer_1["default"]));
	exports.OneOffTimer = OneOffTimer;
	var PeriodicTimer = (function (_super) {
	    __extends(PeriodicTimer, _super);
	    function PeriodicTimer(delay, callback) {
	        _super.call(this, setInterval, clearInterval, delay, function (timer) {
	            callback();
	            return timer;
	        });
	    }
	    return PeriodicTimer;
	}(abstract_timer_1["default"]));
	exports.PeriodicTimer = PeriodicTimer;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	var Timer = (function () {
	    function Timer(set, clear, delay, callback) {
	        var _this = this;
	        this.clear = clear;
	        this.timer = set(function () {
	            if (_this.timer) {
	                _this.timer = callback(_this.timer);
	            }
	        }, delay);
	    }
	    Timer.prototype.isRunning = function () {
	        return this.timer !== null;
	    };
	    Timer.prototype.ensureAborted = function () {
	        if (this.timer) {
	            this.clear(this.timer);
	            this.timer = null;
	        }
	    };
	    return Timer;
	}());
	exports.__esModule = true;
	exports["default"] = Timer;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	var urlStore = {
	    baseUrl: "https://pusher.com",
	    urls: {
	        authenticationEndpoint: {
	            path: "/docs/authenticating_users"
	        },
	        javascriptQuickStart: {
	            path: "/docs/javascript_quick_start"
	        }
	    }
	};
	var buildLogSuffix = function (key) {
	    var urlPrefix = "See:";
	    var urlObj = urlStore.urls[key];
	    if (!urlObj)
	        return "";
	    var url;
	    if (urlObj.fullUrl) {
	        url = urlObj.fullUrl;
	    }
	    else if (urlObj.path) {
	        url = urlStore.baseUrl + urlObj.path;
	    }
	    if (!url)
	        return "";
	    return urlPrefix + " " + url;
	};
	exports.__esModule = true;
	exports["default"] = { buildLogSuffix: buildLogSuffix };


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var logger_1 = __webpack_require__(8);
	var jsonp = function (context, socketId, callback) {
	    if (this.authOptions.headers !== undefined) {
	        logger_1["default"].warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
	    }
	    var callbackName = context.nextAuthCallbackID.toString();
	    context.nextAuthCallbackID++;
	    var document = context.getDocument();
	    var script = document.createElement("script");
	    context.auth_callbacks[callbackName] = function (data) {
	        callback(false, data);
	    };
	    var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
	    script.src = this.options.authEndpoint +
	        '?callback=' +
	        encodeURIComponent(callback_name) +
	        '&' +
	        this.composeQuery(socketId);
	    var head = document.getElementsByTagName("head")[0] || document.documentElement;
	    head.insertBefore(script, head.firstChild);
	};
	exports.__esModule = true;
	exports["default"] = jsonp;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	var ScriptRequest = (function () {
	    function ScriptRequest(src) {
	        this.src = src;
	    }
	    ScriptRequest.prototype.send = function (receiver) {
	        var self = this;
	        var errorString = "Error loading " + self.src;
	        self.script = document.createElement("script");
	        self.script.id = receiver.id;
	        self.script.src = self.src;
	        self.script.type = "text/javascript";
	        self.script.charset = "UTF-8";
	        if (self.script.addEventListener) {
	            self.script.onerror = function () {
	                receiver.callback(errorString);
	            };
	            self.script.onload = function () {
	                receiver.callback(null);
	            };
	        }
	        else {
	            self.script.onreadystatechange = function () {
	                if (self.script.readyState === 'loaded' ||
	                    self.script.readyState === 'complete') {
	                    receiver.callback(null);
	                }
	            };
	        }
	        if (self.script.async === undefined && document.attachEvent &&
	            /opera/i.test(navigator.userAgent)) {
	            self.errorScript = document.createElement("script");
	            self.errorScript.id = receiver.id + "_error";
	            self.errorScript.text = receiver.name + "('" + errorString + "');";
	            self.script.async = self.errorScript.async = false;
	        }
	        else {
	            self.script.async = true;
	        }
	        var head = document.getElementsByTagName('head')[0];
	        head.insertBefore(self.script, head.firstChild);
	        if (self.errorScript) {
	            head.insertBefore(self.errorScript, self.script.nextSibling);
	        }
	    };
	    ScriptRequest.prototype.cleanup = function () {
	        if (this.script) {
	            this.script.onload = this.script.onerror = null;
	            this.script.onreadystatechange = null;
	        }
	        if (this.script && this.script.parentNode) {
	            this.script.parentNode.removeChild(this.script);
	        }
	        if (this.errorScript && this.errorScript.parentNode) {
	            this.errorScript.parentNode.removeChild(this.errorScript);
	        }
	        this.script = null;
	        this.errorScript = null;
	    };
	    return ScriptRequest;
	}());
	exports.__esModule = true;
	exports["default"] = ScriptRequest;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var runtime_1 = __webpack_require__(2);
	var JSONPRequest = (function () {
	    function JSONPRequest(url, data) {
	        this.url = url;
	        this.data = data;
	    }
	    JSONPRequest.prototype.send = function (receiver) {
	        if (this.request) {
	            return;
	        }
	        var query = Collections.buildQueryString(this.data);
	        var url = this.url + "/" + receiver.number + "?" + query;
	        this.request = runtime_1["default"].createScriptRequest(url);
	        this.request.send(receiver);
	    };
	    JSONPRequest.prototype.cleanup = function () {
	        if (this.request) {
	            this.request.cleanup();
	        }
	    };
	    return JSONPRequest;
	}());
	exports.__esModule = true;
	exports["default"] = JSONPRequest;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var runtime_1 = __webpack_require__(2);
	var script_receiver_factory_1 = __webpack_require__(4);
	var getAgent = function (sender, encrypted) {
	    return function (data, callback) {
	        var scheme = "http" + (encrypted ? "s" : "") + "://";
	        var url = scheme + (sender.host || sender.options.host) + sender.options.path;
	        var request = runtime_1["default"].createJSONPRequest(url, data);
	        var receiver = runtime_1["default"].ScriptReceivers.create(function (error, result) {
	            script_receiver_factory_1.ScriptReceivers.remove(receiver);
	            request.cleanup();
	            if (result && result.host) {
	                sender.host = result.host;
	            }
	            if (callback) {
	                callback(error, result);
	            }
	        });
	        request.send(receiver);
	    };
	};
	var jsonp = {
	    name: 'jsonp',
	    getAgent: getAgent
	};
	exports.__esModule = true;
	exports["default"] = jsonp;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var transports_1 = __webpack_require__(20);
	var transport_1 = __webpack_require__(22);
	var URLSchemes = __webpack_require__(21);
	var runtime_1 = __webpack_require__(2);
	var dependencies_1 = __webpack_require__(3);
	var Collections = __webpack_require__(9);
	var SockJSTransport = new transport_1["default"]({
	    file: "sockjs",
	    urls: URLSchemes.sockjs,
	    handlesActivityChecks: true,
	    supportsPing: false,
	    isSupported: function () {
	        return true;
	    },
	    isInitialized: function () {
	        return window.SockJS !== undefined;
	    },
	    getSocket: function (url, options) {
	        return new window.SockJS(url, null, {
	            js_path: dependencies_1.Dependencies.getPath("sockjs", {
	                encrypted: options.encrypted
	            }),
	            ignore_null_origin: options.ignoreNullOrigin
	        });
	    },
	    beforeOpen: function (socket, path) {
	        socket.send(JSON.stringify({
	            path: path
	        }));
	    }
	});
	var xdrConfiguration = {
	    isSupported: function (environment) {
	        var yes = runtime_1["default"].isXDRSupported(environment.encrypted);
	        return yes;
	    }
	};
	var XDRStreamingTransport = new transport_1["default"](Collections.extend({}, transports_1.streamingConfiguration, xdrConfiguration));
	var XDRPollingTransport = new transport_1["default"](Collections.extend({}, transports_1.pollingConfiguration, xdrConfiguration));
	transports_1["default"].xdr_streaming = XDRStreamingTransport;
	transports_1["default"].xdr_polling = XDRPollingTransport;
	transports_1["default"].sockjs = SockJSTransport;
	exports.__esModule = true;
	exports["default"] = transports_1["default"];


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var URLSchemes = __webpack_require__(21);
	var transport_1 = __webpack_require__(22);
	var Collections = __webpack_require__(9);
	var runtime_1 = __webpack_require__(2);
	var WSTransport = new transport_1["default"]({
	    urls: URLSchemes.ws,
	    handlesActivityChecks: false,
	    supportsPing: false,
	    isInitialized: function () {
	        return Boolean(runtime_1["default"].getWebSocketAPI());
	    },
	    isSupported: function () {
	        return Boolean(runtime_1["default"].getWebSocketAPI());
	    },
	    getSocket: function (url) {
	        return runtime_1["default"].createWebSocket(url);
	    }
	});
	var httpConfiguration = {
	    urls: URLSchemes.http,
	    handlesActivityChecks: false,
	    supportsPing: true,
	    isInitialized: function () {
	        return true;
	    }
	};
	exports.streamingConfiguration = Collections.extend({ getSocket: function (url) {
	        return runtime_1["default"].HTTPFactory.createStreamingSocket(url);
	    }
	}, httpConfiguration);
	exports.pollingConfiguration = Collections.extend({ getSocket: function (url) {
	        return runtime_1["default"].HTTPFactory.createPollingSocket(url);
	    }
	}, httpConfiguration);
	var xhrConfiguration = {
	    isSupported: function () {
	        return runtime_1["default"].isXHRSupported();
	    }
	};
	var XHRStreamingTransport = new transport_1["default"](Collections.extend({}, exports.streamingConfiguration, xhrConfiguration));
	var XHRPollingTransport = new transport_1["default"](Collections.extend({}, exports.pollingConfiguration, xhrConfiguration));
	var Transports = {
	    ws: WSTransport,
	    xhr_streaming: XHRStreamingTransport,
	    xhr_polling: XHRPollingTransport
	};
	exports.__esModule = true;
	exports["default"] = Transports;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var defaults_1 = __webpack_require__(5);
	function getGenericURL(baseScheme, params, path) {
	    var scheme = baseScheme + (params.encrypted ? "s" : "");
	    var host = params.encrypted ? params.hostEncrypted : params.hostUnencrypted;
	    return scheme + "://" + host + path;
	}
	function getGenericPath(key, queryString) {
	    var path = "/app/" + key;
	    var query = "?protocol=" + defaults_1["default"].PROTOCOL +
	        "&client=js" +
	        "&version=" + defaults_1["default"].VERSION +
	        (queryString ? ("&" + queryString) : "");
	    return path + query;
	}
	exports.ws = {
	    getInitial: function (key, params) {
	        return getGenericURL("ws", params, getGenericPath(key, "flash=false"));
	    }
	};
	exports.http = {
	    getInitial: function (key, params) {
	        var path = (params.httpPath || "/pusher") + getGenericPath(key);
	        return getGenericURL("http", params, path);
	    }
	};
	exports.sockjs = {
	    getInitial: function (key, params) {
	        return getGenericURL("http", params, params.httpPath || "/pusher");
	    },
	    getPath: function (key, params) {
	        return getGenericPath(key);
	    }
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var transport_connection_1 = __webpack_require__(23);
	var Transport = (function () {
	    function Transport(hooks) {
	        this.hooks = hooks;
	    }
	    Transport.prototype.isSupported = function (environment) {
	        return this.hooks.isSupported(environment);
	    };
	    Transport.prototype.createConnection = function (name, priority, key, options) {
	        return new transport_connection_1["default"](this.hooks, name, priority, key, options);
	    };
	    return Transport;
	}());
	exports.__esModule = true;
	exports["default"] = Transport;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var util_1 = __webpack_require__(11);
	var Collections = __webpack_require__(9);
	var dispatcher_1 = __webpack_require__(24);
	var logger_1 = __webpack_require__(8);
	var runtime_1 = __webpack_require__(2);
	var TransportConnection = (function (_super) {
	    __extends(TransportConnection, _super);
	    function TransportConnection(hooks, name, priority, key, options) {
	        _super.call(this);
	        this.initialize = runtime_1["default"].transportConnectionInitializer;
	        this.hooks = hooks;
	        this.name = name;
	        this.priority = priority;
	        this.key = key;
	        this.options = options;
	        this.state = "new";
	        this.timeline = options.timeline;
	        this.activityTimeout = options.activityTimeout;
	        this.id = this.timeline.generateUniqueID();
	    }
	    TransportConnection.prototype.handlesActivityChecks = function () {
	        return Boolean(this.hooks.handlesActivityChecks);
	    };
	    TransportConnection.prototype.supportsPing = function () {
	        return Boolean(this.hooks.supportsPing);
	    };
	    TransportConnection.prototype.connect = function () {
	        var _this = this;
	        if (this.socket || this.state !== "initialized") {
	            return false;
	        }
	        var url = this.hooks.urls.getInitial(this.key, this.options);
	        try {
	            this.socket = this.hooks.getSocket(url, this.options);
	        }
	        catch (e) {
	            util_1["default"].defer(function () {
	                _this.onError(e);
	                _this.changeState("closed");
	            });
	            return false;
	        }
	        this.bindListeners();
	        logger_1["default"].debug("Connecting", { transport: this.name, url: url });
	        this.changeState("connecting");
	        return true;
	    };
	    TransportConnection.prototype.close = function () {
	        if (this.socket) {
	            this.socket.close();
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    TransportConnection.prototype.send = function (data) {
	        var _this = this;
	        if (this.state === "open") {
	            util_1["default"].defer(function () {
	                if (_this.socket) {
	                    _this.socket.send(data);
	                }
	            });
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    TransportConnection.prototype.ping = function () {
	        if (this.state === "open" && this.supportsPing()) {
	            this.socket.ping();
	        }
	    };
	    TransportConnection.prototype.onOpen = function () {
	        if (this.hooks.beforeOpen) {
	            this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
	        }
	        this.changeState("open");
	        this.socket.onopen = undefined;
	    };
	    TransportConnection.prototype.onError = function (error) {
	        this.emit("error", { type: 'WebSocketError', error: error });
	        this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
	    };
	    TransportConnection.prototype.onClose = function (closeEvent) {
	        if (closeEvent) {
	            this.changeState("closed", {
	                code: closeEvent.code,
	                reason: closeEvent.reason,
	                wasClean: closeEvent.wasClean
	            });
	        }
	        else {
	            this.changeState("closed");
	        }
	        this.unbindListeners();
	        this.socket = undefined;
	    };
	    TransportConnection.prototype.onMessage = function (message) {
	        this.emit("message", message);
	    };
	    TransportConnection.prototype.onActivity = function () {
	        this.emit("activity");
	    };
	    TransportConnection.prototype.bindListeners = function () {
	        var _this = this;
	        this.socket.onopen = function () {
	            _this.onOpen();
	        };
	        this.socket.onerror = function (error) {
	            _this.onError(error);
	        };
	        this.socket.onclose = function (closeEvent) {
	            _this.onClose(closeEvent);
	        };
	        this.socket.onmessage = function (message) {
	            _this.onMessage(message);
	        };
	        if (this.supportsPing()) {
	            this.socket.onactivity = function () { _this.onActivity(); };
	        }
	    };
	    TransportConnection.prototype.unbindListeners = function () {
	        if (this.socket) {
	            this.socket.onopen = undefined;
	            this.socket.onerror = undefined;
	            this.socket.onclose = undefined;
	            this.socket.onmessage = undefined;
	            if (this.supportsPing()) {
	                this.socket.onactivity = undefined;
	            }
	        }
	    };
	    TransportConnection.prototype.changeState = function (state, params) {
	        this.state = state;
	        this.timeline.info(this.buildTimelineMessage({
	            state: state,
	            params: params
	        }));
	        this.emit(state, params);
	    };
	    TransportConnection.prototype.buildTimelineMessage = function (message) {
	        return Collections.extend({ cid: this.id }, message);
	    };
	    return TransportConnection;
	}(dispatcher_1["default"]));
	exports.__esModule = true;
	exports["default"] = TransportConnection;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var callback_registry_1 = __webpack_require__(25);
	var Dispatcher = (function () {
	    function Dispatcher(failThrough) {
	        this.callbacks = new callback_registry_1["default"]();
	        this.global_callbacks = [];
	        this.failThrough = failThrough;
	    }
	    Dispatcher.prototype.bind = function (eventName, callback, context) {
	        this.callbacks.add(eventName, callback, context);
	        return this;
	    };
	    Dispatcher.prototype.bind_global = function (callback) {
	        this.global_callbacks.push(callback);
	        return this;
	    };
	    Dispatcher.prototype.unbind = function (eventName, callback, context) {
	        this.callbacks.remove(eventName, callback, context);
	        return this;
	    };
	    Dispatcher.prototype.unbind_global = function (callback) {
	        if (!callback) {
	            this.global_callbacks = [];
	            return this;
	        }
	        this.global_callbacks = Collections.filter(this.global_callbacks || [], function (c) { return c !== callback; });
	        return this;
	    };
	    Dispatcher.prototype.unbind_all = function () {
	        this.unbind();
	        this.unbind_global();
	        return this;
	    };
	    Dispatcher.prototype.emit = function (eventName, data) {
	        var i;
	        for (i = 0; i < this.global_callbacks.length; i++) {
	            this.global_callbacks[i](eventName, data);
	        }
	        var callbacks = this.callbacks.get(eventName);
	        if (callbacks && callbacks.length > 0) {
	            for (i = 0; i < callbacks.length; i++) {
	                callbacks[i].fn.call(callbacks[i].context || (window), data);
	            }
	        }
	        else if (this.failThrough) {
	            this.failThrough(eventName, data);
	        }
	        return this;
	    };
	    return Dispatcher;
	}());
	exports.__esModule = true;
	exports["default"] = Dispatcher;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var CallbackRegistry = (function () {
	    function CallbackRegistry() {
	        this._callbacks = {};
	    }
	    CallbackRegistry.prototype.get = function (name) {
	        return this._callbacks[prefix(name)];
	    };
	    CallbackRegistry.prototype.add = function (name, callback, context) {
	        var prefixedEventName = prefix(name);
	        this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
	        this._callbacks[prefixedEventName].push({
	            fn: callback,
	            context: context
	        });
	    };
	    CallbackRegistry.prototype.remove = function (name, callback, context) {
	        if (!name && !callback && !context) {
	            this._callbacks = {};
	            return;
	        }
	        var names = name ? [prefix(name)] : Collections.keys(this._callbacks);
	        if (callback || context) {
	            this.removeCallback(names, callback, context);
	        }
	        else {
	            this.removeAllCallbacks(names);
	        }
	    };
	    CallbackRegistry.prototype.removeCallback = function (names, callback, context) {
	        Collections.apply(names, function (name) {
	            this._callbacks[name] = Collections.filter(this._callbacks[name] || [], function (binding) {
	                return (callback && callback !== binding.fn) ||
	                    (context && context !== binding.context);
	            });
	            if (this._callbacks[name].length === 0) {
	                delete this._callbacks[name];
	            }
	        }, this);
	    };
	    CallbackRegistry.prototype.removeAllCallbacks = function (names) {
	        Collections.apply(names, function (name) {
	            delete this._callbacks[name];
	        }, this);
	    };
	    return CallbackRegistry;
	}());
	exports.__esModule = true;
	exports["default"] = CallbackRegistry;
	function prefix(name) {
	    return "_" + name;
	}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dispatcher_1 = __webpack_require__(24);
	var NetInfo = (function (_super) {
	    __extends(NetInfo, _super);
	    function NetInfo() {
	        _super.call(this);
	        var self = this;
	        if (window.addEventListener !== undefined) {
	            window.addEventListener("online", function () {
	                self.emit('online');
	            }, false);
	            window.addEventListener("offline", function () {
	                self.emit('offline');
	            }, false);
	        }
	    }
	    NetInfo.prototype.isOnline = function () {
	        if (window.navigator.onLine === undefined) {
	            return true;
	        }
	        else {
	            return window.navigator.onLine;
	        }
	    };
	    return NetInfo;
	}(dispatcher_1["default"]));
	exports.NetInfo = NetInfo;
	exports.Network = new NetInfo();


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";
	var getDefaultStrategy = function (config) {
	    var wsStrategy;
	    if (config.encrypted) {
	        wsStrategy = [
	            ":best_connected_ever",
	            ":ws_loop",
	            [":delayed", 2000, [":http_fallback_loop"]]
	        ];
	    }
	    else {
	        wsStrategy = [
	            ":best_connected_ever",
	            ":ws_loop",
	            [":delayed", 2000, [":wss_loop"]],
	            [":delayed", 5000, [":http_fallback_loop"]]
	        ];
	    }
	    return [
	        [":def", "ws_options", {
	                hostUnencrypted: config.wsHost + ":" + config.wsPort,
	                hostEncrypted: config.wsHost + ":" + config.wssPort
	            }],
	        [":def", "wss_options", [":extend", ":ws_options", {
	                    encrypted: true
	                }]],
	        [":def", "sockjs_options", {
	                hostUnencrypted: config.httpHost + ":" + config.httpPort,
	                hostEncrypted: config.httpHost + ":" + config.httpsPort,
	                httpPath: config.httpPath
	            }],
	        [":def", "timeouts", {
	                loop: true,
	                timeout: 15000,
	                timeoutLimit: 60000
	            }],
	        [":def", "ws_manager", [":transport_manager", {
	                    lives: 2,
	                    minPingDelay: 10000,
	                    maxPingDelay: config.activity_timeout
	                }]],
	        [":def", "streaming_manager", [":transport_manager", {
	                    lives: 2,
	                    minPingDelay: 10000,
	                    maxPingDelay: config.activity_timeout
	                }]],
	        [":def_transport", "ws", "ws", 3, ":ws_options", ":ws_manager"],
	        [":def_transport", "wss", "ws", 3, ":wss_options", ":ws_manager"],
	        [":def_transport", "sockjs", "sockjs", 1, ":sockjs_options"],
	        [":def_transport", "xhr_streaming", "xhr_streaming", 1, ":sockjs_options", ":streaming_manager"],
	        [":def_transport", "xdr_streaming", "xdr_streaming", 1, ":sockjs_options", ":streaming_manager"],
	        [":def_transport", "xhr_polling", "xhr_polling", 1, ":sockjs_options"],
	        [":def_transport", "xdr_polling", "xdr_polling", 1, ":sockjs_options"],
	        [":def", "ws_loop", [":sequential", ":timeouts", ":ws"]],
	        [":def", "wss_loop", [":sequential", ":timeouts", ":wss"]],
	        [":def", "sockjs_loop", [":sequential", ":timeouts", ":sockjs"]],
	        [":def", "streaming_loop", [":sequential", ":timeouts",
	                [":if", [":is_supported", ":xhr_streaming"],
	                    ":xhr_streaming",
	                    ":xdr_streaming"
	                ]
	            ]],
	        [":def", "polling_loop", [":sequential", ":timeouts",
	                [":if", [":is_supported", ":xhr_polling"],
	                    ":xhr_polling",
	                    ":xdr_polling"
	                ]
	            ]],
	        [":def", "http_loop", [":if", [":is_supported", ":streaming_loop"], [
	                    ":best_connected_ever",
	                    ":streaming_loop",
	                    [":delayed", 4000, [":polling_loop"]]
	                ], [
	                    ":polling_loop"
	                ]]],
	        [":def", "http_fallback_loop",
	            [":if", [":is_supported", ":http_loop"], [
	                    ":http_loop"
	                ], [
	                    ":sockjs_loop"
	                ]]
	        ],
	        [":def", "strategy",
	            [":cached", 1800000,
	                [":first_connected",
	                    [":if", [":is_supported", ":ws"],
	                        wsStrategy,
	                        ":http_fallback_loop"
	                    ]
	                ]
	            ]
	        ]
	    ];
	};
	exports.__esModule = true;
	exports["default"] = getDefaultStrategy;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var dependencies_1 = __webpack_require__(3);
	function default_1() {
	    var self = this;
	    self.timeline.info(self.buildTimelineMessage({
	        transport: self.name + (self.options.encrypted ? "s" : "")
	    }));
	    if (self.hooks.isInitialized()) {
	        self.changeState("initialized");
	    }
	    else if (self.hooks.file) {
	        self.changeState("initializing");
	        dependencies_1.Dependencies.load(self.hooks.file, { encrypted: self.options.encrypted }, function (error, callback) {
	            if (self.hooks.isInitialized()) {
	                self.changeState("initialized");
	                callback(true);
	            }
	            else {
	                if (error) {
	                    self.onError(error);
	                }
	                self.onClose();
	                callback(false);
	            }
	        });
	    }
	    else {
	        self.onClose();
	    }
	}
	exports.__esModule = true;
	exports["default"] = default_1;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var http_xdomain_request_1 = __webpack_require__(30);
	var http_1 = __webpack_require__(32);
	http_1["default"].createXDR = function (method, url) {
	    return this.createRequest(http_xdomain_request_1["default"], method, url);
	};
	exports.__esModule = true;
	exports["default"] = http_1["default"];


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Errors = __webpack_require__(31);
	var hooks = {
	    getRequest: function (socket) {
	        var xdr = new window.XDomainRequest();
	        xdr.ontimeout = function () {
	            socket.emit("error", new Errors.RequestTimedOut());
	            socket.close();
	        };
	        xdr.onerror = function (e) {
	            socket.emit("error", e);
	            socket.close();
	        };
	        xdr.onprogress = function () {
	            if (xdr.responseText && xdr.responseText.length > 0) {
	                socket.onChunk(200, xdr.responseText);
	            }
	        };
	        xdr.onload = function () {
	            if (xdr.responseText && xdr.responseText.length > 0) {
	                socket.onChunk(200, xdr.responseText);
	            }
	            socket.emit("finished", 200);
	            socket.close();
	        };
	        return xdr;
	    },
	    abortRequest: function (xdr) {
	        xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
	        xdr.abort();
	    }
	};
	exports.__esModule = true;
	exports["default"] = hooks;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BadEventName = (function (_super) {
	    __extends(BadEventName, _super);
	    function BadEventName() {
	        _super.apply(this, arguments);
	    }
	    return BadEventName;
	}(Error));
	exports.BadEventName = BadEventName;
	var RequestTimedOut = (function (_super) {
	    __extends(RequestTimedOut, _super);
	    function RequestTimedOut() {
	        _super.apply(this, arguments);
	    }
	    return RequestTimedOut;
	}(Error));
	exports.RequestTimedOut = RequestTimedOut;
	var TransportPriorityTooLow = (function (_super) {
	    __extends(TransportPriorityTooLow, _super);
	    function TransportPriorityTooLow() {
	        _super.apply(this, arguments);
	    }
	    return TransportPriorityTooLow;
	}(Error));
	exports.TransportPriorityTooLow = TransportPriorityTooLow;
	var TransportClosed = (function (_super) {
	    __extends(TransportClosed, _super);
	    function TransportClosed() {
	        _super.apply(this, arguments);
	    }
	    return TransportClosed;
	}(Error));
	exports.TransportClosed = TransportClosed;
	var UnsupportedTransport = (function (_super) {
	    __extends(UnsupportedTransport, _super);
	    function UnsupportedTransport() {
	        _super.apply(this, arguments);
	    }
	    return UnsupportedTransport;
	}(Error));
	exports.UnsupportedTransport = UnsupportedTransport;
	var UnsupportedStrategy = (function (_super) {
	    __extends(UnsupportedStrategy, _super);
	    function UnsupportedStrategy() {
	        _super.apply(this, arguments);
	    }
	    return UnsupportedStrategy;
	}(Error));
	exports.UnsupportedStrategy = UnsupportedStrategy;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var http_request_1 = __webpack_require__(33);
	var http_socket_1 = __webpack_require__(34);
	var http_streaming_socket_1 = __webpack_require__(36);
	var http_polling_socket_1 = __webpack_require__(37);
	var http_xhr_request_1 = __webpack_require__(38);
	var HTTP = {
	    createStreamingSocket: function (url) {
	        return this.createSocket(http_streaming_socket_1["default"], url);
	    },
	    createPollingSocket: function (url) {
	        return this.createSocket(http_polling_socket_1["default"], url);
	    },
	    createSocket: function (hooks, url) {
	        return new http_socket_1["default"](hooks, url);
	    },
	    createXHR: function (method, url) {
	        return this.createRequest(http_xhr_request_1["default"], method, url);
	    },
	    createRequest: function (hooks, method, url) {
	        return new http_request_1["default"](hooks, method, url);
	    }
	};
	exports.__esModule = true;
	exports["default"] = HTTP;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var runtime_1 = __webpack_require__(2);
	var dispatcher_1 = __webpack_require__(24);
	var MAX_BUFFER_LENGTH = 256 * 1024;
	var HTTPRequest = (function (_super) {
	    __extends(HTTPRequest, _super);
	    function HTTPRequest(hooks, method, url) {
	        _super.call(this);
	        this.hooks = hooks;
	        this.method = method;
	        this.url = url;
	    }
	    HTTPRequest.prototype.start = function (payload) {
	        var _this = this;
	        this.position = 0;
	        this.xhr = this.hooks.getRequest(this);
	        this.unloader = function () {
	            _this.close();
	        };
	        runtime_1["default"].addUnloadListener(this.unloader);
	        this.xhr.open(this.method, this.url, true);
	        if (this.xhr.setRequestHeader) {
	            this.xhr.setRequestHeader("Content-Type", "application/json");
	        }
	        this.xhr.send(payload);
	    };
	    HTTPRequest.prototype.close = function () {
	        if (this.unloader) {
	            runtime_1["default"].removeUnloadListener(this.unloader);
	            this.unloader = null;
	        }
	        if (this.xhr) {
	            this.hooks.abortRequest(this.xhr);
	            this.xhr = null;
	        }
	    };
	    HTTPRequest.prototype.onChunk = function (status, data) {
	        while (true) {
	            var chunk = this.advanceBuffer(data);
	            if (chunk) {
	                this.emit("chunk", { status: status, data: chunk });
	            }
	            else {
	                break;
	            }
	        }
	        if (this.isBufferTooLong(data)) {
	            this.emit("buffer_too_long");
	        }
	    };
	    HTTPRequest.prototype.advanceBuffer = function (buffer) {
	        var unreadData = buffer.slice(this.position);
	        var endOfLinePosition = unreadData.indexOf("\n");
	        if (endOfLinePosition !== -1) {
	            this.position += endOfLinePosition + 1;
	            return unreadData.slice(0, endOfLinePosition);
	        }
	        else {
	            return null;
	        }
	    };
	    HTTPRequest.prototype.isBufferTooLong = function (buffer) {
	        return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
	    };
	    return HTTPRequest;
	}(dispatcher_1["default"]));
	exports.__esModule = true;
	exports["default"] = HTTPRequest;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var state_1 = __webpack_require__(35);
	var util_1 = __webpack_require__(11);
	var runtime_1 = __webpack_require__(2);
	var autoIncrement = 1;
	var HTTPSocket = (function () {
	    function HTTPSocket(hooks, url) {
	        this.hooks = hooks;
	        this.session = randomNumber(1000) + "/" + randomString(8);
	        this.location = getLocation(url);
	        this.readyState = state_1["default"].CONNECTING;
	        this.openStream();
	    }
	    HTTPSocket.prototype.send = function (payload) {
	        return this.sendRaw(JSON.stringify([payload]));
	    };
	    HTTPSocket.prototype.ping = function () {
	        this.hooks.sendHeartbeat(this);
	    };
	    HTTPSocket.prototype.close = function (code, reason) {
	        this.onClose(code, reason, true);
	    };
	    HTTPSocket.prototype.sendRaw = function (payload) {
	        if (this.readyState === state_1["default"].OPEN) {
	            try {
	                runtime_1["default"].createSocketRequest("POST", getUniqueURL(getSendURL(this.location, this.session))).start(payload);
	                return true;
	            }
	            catch (e) {
	                return false;
	            }
	        }
	        else {
	            return false;
	        }
	    };
	    HTTPSocket.prototype.reconnect = function () {
	        this.closeStream();
	        this.openStream();
	    };
	    ;
	    HTTPSocket.prototype.onClose = function (code, reason, wasClean) {
	        this.closeStream();
	        this.readyState = state_1["default"].CLOSED;
	        if (this.onclose) {
	            this.onclose({
	                code: code,
	                reason: reason,
	                wasClean: wasClean
	            });
	        }
	    };
	    HTTPSocket.prototype.onChunk = function (chunk) {
	        if (chunk.status !== 200) {
	            return;
	        }
	        if (this.readyState === state_1["default"].OPEN) {
	            this.onActivity();
	        }
	        var payload;
	        var type = chunk.data.slice(0, 1);
	        switch (type) {
	            case 'o':
	                payload = JSON.parse(chunk.data.slice(1) || '{}');
	                this.onOpen(payload);
	                break;
	            case 'a':
	                payload = JSON.parse(chunk.data.slice(1) || '[]');
	                for (var i = 0; i < payload.length; i++) {
	                    this.onEvent(payload[i]);
	                }
	                break;
	            case 'm':
	                payload = JSON.parse(chunk.data.slice(1) || 'null');
	                this.onEvent(payload);
	                break;
	            case 'h':
	                this.hooks.onHeartbeat(this);
	                break;
	            case 'c':
	                payload = JSON.parse(chunk.data.slice(1) || '[]');
	                this.onClose(payload[0], payload[1], true);
	                break;
	        }
	    };
	    HTTPSocket.prototype.onOpen = function (options) {
	        if (this.readyState === state_1["default"].CONNECTING) {
	            if (options && options.hostname) {
	                this.location.base = replaceHost(this.location.base, options.hostname);
	            }
	            this.readyState = state_1["default"].OPEN;
	            if (this.onopen) {
	                this.onopen();
	            }
	        }
	        else {
	            this.onClose(1006, "Server lost session", true);
	        }
	    };
	    HTTPSocket.prototype.onEvent = function (event) {
	        if (this.readyState === state_1["default"].OPEN && this.onmessage) {
	            this.onmessage({ data: event });
	        }
	    };
	    HTTPSocket.prototype.onActivity = function () {
	        if (this.onactivity) {
	            this.onactivity();
	        }
	    };
	    HTTPSocket.prototype.onError = function (error) {
	        if (this.onerror) {
	            this.onerror(error);
	        }
	    };
	    HTTPSocket.prototype.openStream = function () {
	        var _this = this;
	        this.stream = runtime_1["default"].createSocketRequest("POST", getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
	        this.stream.bind("chunk", function (chunk) {
	            _this.onChunk(chunk);
	        });
	        this.stream.bind("finished", function (status) {
	            _this.hooks.onFinished(_this, status);
	        });
	        this.stream.bind("buffer_too_long", function () {
	            _this.reconnect();
	        });
	        try {
	            this.stream.start();
	        }
	        catch (error) {
	            util_1["default"].defer(function () {
	                _this.onError(error);
	                _this.onClose(1006, "Could not start streaming", false);
	            });
	        }
	    };
	    HTTPSocket.prototype.closeStream = function () {
	        if (this.stream) {
	            this.stream.unbind_all();
	            this.stream.close();
	            this.stream = null;
	        }
	    };
	    return HTTPSocket;
	}());
	function getLocation(url) {
	    var parts = /([^\?]*)\/*(\??.*)/.exec(url);
	    return {
	        base: parts[1],
	        queryString: parts[2]
	    };
	}
	function getSendURL(url, session) {
	    return url.base + "/" + session + "/xhr_send";
	}
	function getUniqueURL(url) {
	    var separator = (url.indexOf('?') === -1) ? "?" : "&";
	    return url + separator + "t=" + (+new Date()) + "&n=" + autoIncrement++;
	}
	function replaceHost(url, hostname) {
	    var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
	    return urlParts[1] + hostname + urlParts[3];
	}
	function randomNumber(max) {
	    return Math.floor(Math.random() * max);
	}
	function randomString(length) {
	    var result = [];
	    for (var i = 0; i < length; i++) {
	        result.push(randomNumber(32).toString(32));
	    }
	    return result.join('');
	}
	exports.__esModule = true;
	exports["default"] = HTTPSocket;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";
	var State;
	(function (State) {
	    State[State["CONNECTING"] = 0] = "CONNECTING";
	    State[State["OPEN"] = 1] = "OPEN";
	    State[State["CLOSED"] = 3] = "CLOSED";
	})(State || (State = {}));
	exports.__esModule = true;
	exports["default"] = State;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";
	var hooks = {
	    getReceiveURL: function (url, session) {
	        return url.base + "/" + session + "/xhr_streaming" + url.queryString;
	    },
	    onHeartbeat: function (socket) {
	        socket.sendRaw("[]");
	    },
	    sendHeartbeat: function (socket) {
	        socket.sendRaw("[]");
	    },
	    onFinished: function (socket, status) {
	        socket.onClose(1006, "Connection interrupted (" + status + ")", false);
	    }
	};
	exports.__esModule = true;
	exports["default"] = hooks;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";
	var hooks = {
	    getReceiveURL: function (url, session) {
	        return url.base + "/" + session + "/xhr" + url.queryString;
	    },
	    onHeartbeat: function () {
	    },
	    sendHeartbeat: function (socket) {
	        socket.sendRaw("[]");
	    },
	    onFinished: function (socket, status) {
	        if (status === 200) {
	            socket.reconnect();
	        }
	        else {
	            socket.onClose(1006, "Connection interrupted (" + status + ")", false);
	        }
	    }
	};
	exports.__esModule = true;
	exports["default"] = hooks;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var runtime_1 = __webpack_require__(2);
	var hooks = {
	    getRequest: function (socket) {
	        var Constructor = runtime_1["default"].getXHRAPI();
	        var xhr = new Constructor();
	        xhr.onreadystatechange = xhr.onprogress = function () {
	            switch (xhr.readyState) {
	                case 3:
	                    if (xhr.responseText && xhr.responseText.length > 0) {
	                        socket.onChunk(xhr.status, xhr.responseText);
	                    }
	                    break;
	                case 4:
	                    if (xhr.responseText && xhr.responseText.length > 0) {
	                        socket.onChunk(xhr.status, xhr.responseText);
	                    }
	                    socket.emit("finished", xhr.status);
	                    socket.close();
	                    break;
	            }
	        };
	        return xhr;
	    },
	    abortRequest: function (xhr) {
	        xhr.onreadystatechange = null;
	        xhr.abort();
	    }
	};
	exports.__esModule = true;
	exports["default"] = hooks;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var util_1 = __webpack_require__(11);
	var level_1 = __webpack_require__(40);
	var Timeline = (function () {
	    function Timeline(key, session, options) {
	        this.key = key;
	        this.session = session;
	        this.events = [];
	        this.options = options || {};
	        this.sent = 0;
	        this.uniqueID = 0;
	    }
	    Timeline.prototype.log = function (level, event) {
	        if (level <= this.options.level) {
	            this.events.push(Collections.extend({}, event, { timestamp: util_1["default"].now() }));
	            if (this.options.limit && this.events.length > this.options.limit) {
	                this.events.shift();
	            }
	        }
	    };
	    Timeline.prototype.error = function (event) {
	        this.log(level_1["default"].ERROR, event);
	    };
	    Timeline.prototype.info = function (event) {
	        this.log(level_1["default"].INFO, event);
	    };
	    Timeline.prototype.debug = function (event) {
	        this.log(level_1["default"].DEBUG, event);
	    };
	    Timeline.prototype.isEmpty = function () {
	        return this.events.length === 0;
	    };
	    Timeline.prototype.send = function (sendfn, callback) {
	        var _this = this;
	        var data = Collections.extend({
	            session: this.session,
	            bundle: this.sent + 1,
	            key: this.key,
	            lib: "js",
	            version: this.options.version,
	            cluster: this.options.cluster,
	            features: this.options.features,
	            timeline: this.events
	        }, this.options.params);
	        this.events = [];
	        sendfn(data, function (error, result) {
	            if (!error) {
	                _this.sent++;
	            }
	            if (callback) {
	                callback(error, result);
	            }
	        });
	        return true;
	    };
	    Timeline.prototype.generateUniqueID = function () {
	        this.uniqueID++;
	        return this.uniqueID;
	    };
	    return Timeline;
	}());
	exports.__esModule = true;
	exports["default"] = Timeline;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	"use strict";
	var TimelineLevel;
	(function (TimelineLevel) {
	    TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
	    TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
	    TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
	})(TimelineLevel || (TimelineLevel = {}));
	exports.__esModule = true;
	exports["default"] = TimelineLevel;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var util_1 = __webpack_require__(11);
	var transport_manager_1 = __webpack_require__(42);
	var Errors = __webpack_require__(31);
	var transport_strategy_1 = __webpack_require__(56);
	var sequential_strategy_1 = __webpack_require__(57);
	var best_connected_ever_strategy_1 = __webpack_require__(58);
	var cached_strategy_1 = __webpack_require__(59);
	var delayed_strategy_1 = __webpack_require__(60);
	var if_strategy_1 = __webpack_require__(61);
	var first_connected_strategy_1 = __webpack_require__(62);
	var runtime_1 = __webpack_require__(2);
	var Transports = runtime_1["default"].Transports;
	exports.build = function (scheme, options) {
	    var context = Collections.extend({}, globalContext, options);
	    return evaluate(scheme, context)[1].strategy;
	};
	var UnsupportedStrategy = {
	    isSupported: function () {
	        return false;
	    },
	    connect: function (_, callback) {
	        var deferred = util_1["default"].defer(function () {
	            callback(new Errors.UnsupportedStrategy());
	        });
	        return {
	            abort: function () {
	                deferred.ensureAborted();
	            },
	            forceMinPriority: function () { }
	        };
	    }
	};
	function returnWithOriginalContext(f) {
	    return function (context) {
	        return [f.apply(this, arguments), context];
	    };
	}
	var globalContext = {
	    extend: function (context, first, second) {
	        return [Collections.extend({}, first, second), context];
	    },
	    def: function (context, name, value) {
	        if (context[name] !== undefined) {
	            throw "Redefining symbol " + name;
	        }
	        context[name] = value;
	        return [undefined, context];
	    },
	    def_transport: function (context, name, type, priority, options, manager) {
	        var transportClass = Transports[type];
	        if (!transportClass) {
	            throw new Errors.UnsupportedTransport(type);
	        }
	        var enabled = (!context.enabledTransports ||
	            Collections.arrayIndexOf(context.enabledTransports, name) !== -1) &&
	            (!context.disabledTransports ||
	                Collections.arrayIndexOf(context.disabledTransports, name) === -1);
	        var transport;
	        if (enabled) {
	            transport = new transport_strategy_1["default"](name, priority, manager ? manager.getAssistant(transportClass) : transportClass, Collections.extend({
	                key: context.key,
	                encrypted: context.encrypted,
	                timeline: context.timeline,
	                ignoreNullOrigin: context.ignoreNullOrigin
	            }, options));
	        }
	        else {
	            transport = UnsupportedStrategy;
	        }
	        var newContext = context.def(context, name, transport)[1];
	        newContext.Transports = context.Transports || {};
	        newContext.Transports[name] = transport;
	        return [undefined, newContext];
	    },
	    transport_manager: returnWithOriginalContext(function (_, options) {
	        return new transport_manager_1["default"](options);
	    }),
	    sequential: returnWithOriginalContext(function (_, options) {
	        var strategies = Array.prototype.slice.call(arguments, 2);
	        return new sequential_strategy_1["default"](strategies, options);
	    }),
	    cached: returnWithOriginalContext(function (context, ttl, strategy) {
	        return new cached_strategy_1["default"](strategy, context.Transports, {
	            ttl: ttl,
	            timeline: context.timeline,
	            encrypted: context.encrypted
	        });
	    }),
	    first_connected: returnWithOriginalContext(function (_, strategy) {
	        return new first_connected_strategy_1["default"](strategy);
	    }),
	    best_connected_ever: returnWithOriginalContext(function () {
	        var strategies = Array.prototype.slice.call(arguments, 1);
	        return new best_connected_ever_strategy_1["default"](strategies);
	    }),
	    delayed: returnWithOriginalContext(function (_, delay, strategy) {
	        return new delayed_strategy_1["default"](strategy, { delay: delay });
	    }),
	    "if": returnWithOriginalContext(function (_, test, trueBranch, falseBranch) {
	        return new if_strategy_1["default"](test, trueBranch, falseBranch);
	    }),
	    is_supported: returnWithOriginalContext(function (_, strategy) {
	        return function () {
	            return strategy.isSupported();
	        };
	    })
	};
	function isSymbol(expression) {
	    return (typeof expression === "string") && expression.charAt(0) === ":";
	}
	function getSymbolValue(expression, context) {
	    return context[expression.slice(1)];
	}
	function evaluateListOfExpressions(expressions, context) {
	    if (expressions.length === 0) {
	        return [[], context];
	    }
	    var head = evaluate(expressions[0], context);
	    var tail = evaluateListOfExpressions(expressions.slice(1), head[1]);
	    return [[head[0]].concat(tail[0]), tail[1]];
	}
	function evaluateString(expression, context) {
	    if (!isSymbol(expression)) {
	        return [expression, context];
	    }
	    var value = getSymbolValue(expression, context);
	    if (value === undefined) {
	        throw "Undefined symbol " + expression;
	    }
	    return [value, context];
	}
	function evaluateArray(expression, context) {
	    if (isSymbol(expression[0])) {
	        var f = getSymbolValue(expression[0], context);
	        if (expression.length > 1) {
	            if (typeof f !== "function") {
	                throw "Calling non-function " + expression[0];
	            }
	            var args = [Collections.extend({}, context)].concat(Collections.map(expression.slice(1), function (arg) {
	                return evaluate(arg, Collections.extend({}, context))[0];
	            }));
	            return f.apply(this, args);
	        }
	        else {
	            return [f, context];
	        }
	    }
	    else {
	        return evaluateListOfExpressions(expression, context);
	    }
	}
	function evaluate(expression, context) {
	    if (typeof expression === "string") {
	        return evaluateString(expression, context);
	    }
	    else if (typeof expression === "object") {
	        if (expression instanceof Array && expression.length > 0) {
	            return evaluateArray(expression, context);
	        }
	    }
	    return [expression, context];
	}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var factory_1 = __webpack_require__(43);
	var TransportManager = (function () {
	    function TransportManager(options) {
	        this.options = options || {};
	        this.livesLeft = this.options.lives || Infinity;
	    }
	    TransportManager.prototype.getAssistant = function (transport) {
	        return factory_1["default"].createAssistantToTheTransportManager(this, transport, {
	            minPingDelay: this.options.minPingDelay,
	            maxPingDelay: this.options.maxPingDelay
	        });
	    };
	    TransportManager.prototype.isAlive = function () {
	        return this.livesLeft > 0;
	    };
	    TransportManager.prototype.reportDeath = function () {
	        this.livesLeft -= 1;
	    };
	    return TransportManager;
	}());
	exports.__esModule = true;
	exports["default"] = TransportManager;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var assistant_to_the_transport_manager_1 = __webpack_require__(44);
	var handshake_1 = __webpack_require__(45);
	var pusher_authorizer_1 = __webpack_require__(48);
	var timeline_sender_1 = __webpack_require__(49);
	var presence_channel_1 = __webpack_require__(50);
	var private_channel_1 = __webpack_require__(51);
	var channel_1 = __webpack_require__(52);
	var connection_manager_1 = __webpack_require__(54);
	var channels_1 = __webpack_require__(55);
	var Factory = {
	    createChannels: function () {
	        return new channels_1["default"]();
	    },
	    createConnectionManager: function (key, options) {
	        return new connection_manager_1["default"](key, options);
	    },
	    createChannel: function (name, pusher) {
	        return new channel_1["default"](name, pusher);
	    },
	    createPrivateChannel: function (name, pusher) {
	        return new private_channel_1["default"](name, pusher);
	    },
	    createPresenceChannel: function (name, pusher) {
	        return new presence_channel_1["default"](name, pusher);
	    },
	    createTimelineSender: function (timeline, options) {
	        return new timeline_sender_1["default"](timeline, options);
	    },
	    createAuthorizer: function (channel, options) {
	        if (options.authorizer) {
	            return options.authorizer(channel, options);
	        }
	        return new pusher_authorizer_1["default"](channel, options);
	    },
	    createHandshake: function (transport, callback) {
	        return new handshake_1["default"](transport, callback);
	    },
	    createAssistantToTheTransportManager: function (manager, transport, options) {
	        return new assistant_to_the_transport_manager_1["default"](manager, transport, options);
	    }
	};
	exports.__esModule = true;
	exports["default"] = Factory;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(11);
	var Collections = __webpack_require__(9);
	var AssistantToTheTransportManager = (function () {
	    function AssistantToTheTransportManager(manager, transport, options) {
	        this.manager = manager;
	        this.transport = transport;
	        this.minPingDelay = options.minPingDelay;
	        this.maxPingDelay = options.maxPingDelay;
	        this.pingDelay = undefined;
	    }
	    AssistantToTheTransportManager.prototype.createConnection = function (name, priority, key, options) {
	        var _this = this;
	        options = Collections.extend({}, options, {
	            activityTimeout: this.pingDelay
	        });
	        var connection = this.transport.createConnection(name, priority, key, options);
	        var openTimestamp = null;
	        var onOpen = function () {
	            connection.unbind("open", onOpen);
	            connection.bind("closed", onClosed);
	            openTimestamp = util_1["default"].now();
	        };
	        var onClosed = function (closeEvent) {
	            connection.unbind("closed", onClosed);
	            if (closeEvent.code === 1002 || closeEvent.code === 1003) {
	                _this.manager.reportDeath();
	            }
	            else if (!closeEvent.wasClean && openTimestamp) {
	                var lifespan = util_1["default"].now() - openTimestamp;
	                if (lifespan < 2 * _this.maxPingDelay) {
	                    _this.manager.reportDeath();
	                    _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
	                }
	            }
	        };
	        connection.bind("open", onOpen);
	        return connection;
	    };
	    AssistantToTheTransportManager.prototype.isSupported = function (environment) {
	        return this.manager.isAlive() && this.transport.isSupported(environment);
	    };
	    return AssistantToTheTransportManager;
	}());
	exports.__esModule = true;
	exports["default"] = AssistantToTheTransportManager;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var Protocol = __webpack_require__(46);
	var connection_1 = __webpack_require__(47);
	var Handshake = (function () {
	    function Handshake(transport, callback) {
	        this.transport = transport;
	        this.callback = callback;
	        this.bindListeners();
	    }
	    Handshake.prototype.close = function () {
	        this.unbindListeners();
	        this.transport.close();
	    };
	    Handshake.prototype.bindListeners = function () {
	        var _this = this;
	        this.onMessage = function (m) {
	            _this.unbindListeners();
	            var result;
	            try {
	                result = Protocol.processHandshake(m);
	            }
	            catch (e) {
	                _this.finish("error", { error: e });
	                _this.transport.close();
	                return;
	            }
	            if (result.action === "connected") {
	                _this.finish("connected", {
	                    connection: new connection_1["default"](result.id, _this.transport),
	                    activityTimeout: result.activityTimeout
	                });
	            }
	            else {
	                _this.finish(result.action, { error: result.error });
	                _this.transport.close();
	            }
	        };
	        this.onClosed = function (closeEvent) {
	            _this.unbindListeners();
	            var action = Protocol.getCloseAction(closeEvent) || "backoff";
	            var error = Protocol.getCloseError(closeEvent);
	            _this.finish(action, { error: error });
	        };
	        this.transport.bind("message", this.onMessage);
	        this.transport.bind("closed", this.onClosed);
	    };
	    Handshake.prototype.unbindListeners = function () {
	        this.transport.unbind("message", this.onMessage);
	        this.transport.unbind("closed", this.onClosed);
	    };
	    Handshake.prototype.finish = function (action, params) {
	        this.callback(Collections.extend({ transport: this.transport, action: action }, params));
	    };
	    return Handshake;
	}());
	exports.__esModule = true;
	exports["default"] = Handshake;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	"use strict";
	exports.decodeMessage = function (message) {
	    try {
	        var params = JSON.parse(message.data);
	        if (typeof params.data === 'string') {
	            try {
	                params.data = JSON.parse(params.data);
	            }
	            catch (e) {
	                if (!(e instanceof SyntaxError)) {
	                    throw e;
	                }
	            }
	        }
	        return params;
	    }
	    catch (e) {
	        throw { type: 'MessageParseError', error: e, data: message.data };
	    }
	};
	exports.encodeMessage = function (message) {
	    return JSON.stringify(message);
	};
	exports.processHandshake = function (message) {
	    message = exports.decodeMessage(message);
	    if (message.event === "pusher:connection_established") {
	        if (!message.data.activity_timeout) {
	            throw "No activity timeout specified in handshake";
	        }
	        return {
	            action: "connected",
	            id: message.data.socket_id,
	            activityTimeout: message.data.activity_timeout * 1000
	        };
	    }
	    else if (message.event === "pusher:error") {
	        return {
	            action: this.getCloseAction(message.data),
	            error: this.getCloseError(message.data)
	        };
	    }
	    else {
	        throw "Invalid handshake";
	    }
	};
	exports.getCloseAction = function (closeEvent) {
	    if (closeEvent.code < 4000) {
	        if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
	            return "backoff";
	        }
	        else {
	            return null;
	        }
	    }
	    else if (closeEvent.code === 4000) {
	        return "ssl_only";
	    }
	    else if (closeEvent.code < 4100) {
	        return "refused";
	    }
	    else if (closeEvent.code < 4200) {
	        return "backoff";
	    }
	    else if (closeEvent.code < 4300) {
	        return "retry";
	    }
	    else {
	        return "refused";
	    }
	};
	exports.getCloseError = function (closeEvent) {
	    if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
	        return {
	            type: 'PusherError',
	            data: {
	                code: closeEvent.code,
	                message: closeEvent.reason || closeEvent.message
	            }
	        };
	    }
	    else {
	        return null;
	    }
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Collections = __webpack_require__(9);
	var dispatcher_1 = __webpack_require__(24);
	var Protocol = __webpack_require__(46);
	var logger_1 = __webpack_require__(8);
	var Connection = (function (_super) {
	    __extends(Connection, _super);
	    function Connection(id, transport) {
	        _super.call(this);
	        this.id = id;
	        this.transport = transport;
	        this.activityTimeout = transport.activityTimeout;
	        this.bindListeners();
	    }
	    Connection.prototype.handlesActivityChecks = function () {
	        return this.transport.handlesActivityChecks();
	    };
	    Connection.prototype.send = function (data) {
	        return this.transport.send(data);
	    };
	    Connection.prototype.send_event = function (name, data, channel) {
	        var message = { event: name, data: data };
	        if (channel) {
	            message.channel = channel;
	        }
	        logger_1["default"].debug('Event sent', message);
	        return this.send(Protocol.encodeMessage(message));
	    };
	    Connection.prototype.ping = function () {
	        if (this.transport.supportsPing()) {
	            this.transport.ping();
	        }
	        else {
	            this.send_event('pusher:ping', {});
	        }
	    };
	    Connection.prototype.close = function () {
	        this.transport.close();
	    };
	    Connection.prototype.bindListeners = function () {
	        var _this = this;
	        var listeners = {
	            message: function (m) {
	                var message;
	                try {
	                    message = Protocol.decodeMessage(m);
	                }
	                catch (e) {
	                    _this.emit('error', {
	                        type: 'MessageParseError',
	                        error: e,
	                        data: m.data
	                    });
	                }
	                if (message !== undefined) {
	                    logger_1["default"].debug('Event recd', message);
	                    switch (message.event) {
	                        case 'pusher:error':
	                            _this.emit('error', { type: 'PusherError', data: message.data });
	                            break;
	                        case 'pusher:ping':
	                            _this.emit("ping");
	                            break;
	                        case 'pusher:pong':
	                            _this.emit("pong");
	                            break;
	                    }
	                    _this.emit('message', message);
	                }
	            },
	            activity: function () {
	                _this.emit("activity");
	            },
	            error: function (error) {
	                _this.emit("error", { type: "WebSocketError", error: error });
	            },
	            closed: function (closeEvent) {
	                unbindListeners();
	                if (closeEvent && closeEvent.code) {
	                    _this.handleCloseEvent(closeEvent);
	                }
	                _this.transport = null;
	                _this.emit("closed");
	            }
	        };
	        var unbindListeners = function () {
	            Collections.objectApply(listeners, function (listener, event) {
	                _this.transport.unbind(event, listener);
	            });
	        };
	        Collections.objectApply(listeners, function (listener, event) {
	            _this.transport.bind(event, listener);
	        });
	    };
	    Connection.prototype.handleCloseEvent = function (closeEvent) {
	        var action = Protocol.getCloseAction(closeEvent);
	        var error = Protocol.getCloseError(closeEvent);
	        if (error) {
	            this.emit('error', error);
	        }
	        if (action) {
	            this.emit(action);
	        }
	    };
	    return Connection;
	}(dispatcher_1["default"]));
	exports.__esModule = true;
	exports["default"] = Connection;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var runtime_1 = __webpack_require__(2);
	var PusherAuthorizer = (function () {
	    function PusherAuthorizer(channel, options) {
	        this.channel = channel;
	        var authTransport = options.authTransport;
	        if (typeof runtime_1["default"].getAuthorizers()[authTransport] === "undefined") {
	            throw "'" + authTransport + "' is not a recognized auth transport";
	        }
	        this.type = authTransport;
	        this.options = options;
	        this.authOptions = (options || {}).auth || {};
	    }
	    PusherAuthorizer.prototype.composeQuery = function (socketId) {
	        var query = 'socket_id=' + encodeURIComponent(socketId) +
	            '&channel_name=' + encodeURIComponent(this.channel.name);
	        for (var i in this.authOptions.params) {
	            query += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(this.authOptions.params[i]);
	        }
	        return query;
	    };
	    PusherAuthorizer.prototype.authorize = function (socketId, callback) {
	        PusherAuthorizer.authorizers = PusherAuthorizer.authorizers || runtime_1["default"].getAuthorizers();
	        return PusherAuthorizer.authorizers[this.type].call(this, runtime_1["default"], socketId, callback);
	    };
	    return PusherAuthorizer;
	}());
	exports.__esModule = true;
	exports["default"] = PusherAuthorizer;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var runtime_1 = __webpack_require__(2);
	var TimelineSender = (function () {
	    function TimelineSender(timeline, options) {
	        this.timeline = timeline;
	        this.options = options || {};
	    }
	    TimelineSender.prototype.send = function (encrypted, callback) {
	        if (this.timeline.isEmpty()) {
	            return;
	        }
	        this.timeline.send(runtime_1["default"].TimelineTransport.getAgent(this, encrypted), callback);
	    };
	    return TimelineSender;
	}());
	exports.__esModule = true;
	exports["default"] = TimelineSender;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var private_channel_1 = __webpack_require__(51);
	var logger_1 = __webpack_require__(8);
	var members_1 = __webpack_require__(53);
	var url_store_1 = __webpack_require__(14);
	var PresenceChannel = (function (_super) {
	    __extends(PresenceChannel, _super);
	    function PresenceChannel(name, pusher) {
	        _super.call(this, name, pusher);
	        this.members = new members_1["default"]();
	    }
	    PresenceChannel.prototype.authorize = function (socketId, callback) {
	        var _this = this;
	        _super.prototype.authorize.call(this, socketId, function (error, authData) {
	            if (!error) {
	                if (authData.channel_data === undefined) {
	                    var suffix = url_store_1["default"].buildLogSuffix("authenticationEndpoint");
	                    logger_1["default"].warn(("Invalid auth response for channel '" + _this.name + "',") +
	                        ("expected 'channel_data' field. " + suffix));
	                    callback("Invalid auth response");
	                    return;
	                }
	                var channelData = JSON.parse(authData.channel_data);
	                _this.members.setMyID(channelData.user_id);
	            }
	            callback(error, authData);
	        });
	    };
	    PresenceChannel.prototype.handleEvent = function (event, data) {
	        switch (event) {
	            case "pusher_internal:subscription_succeeded":
	                this.subscriptionPending = false;
	                this.subscribed = true;
	                if (this.subscriptionCancelled) {
	                    this.pusher.unsubscribe(this.name);
	                }
	                else {
	                    this.members.onSubscription(data);
	                    this.emit("pusher:subscription_succeeded", this.members);
	                }
	                break;
	            case "pusher_internal:member_added":
	                var addedMember = this.members.addMember(data);
	                this.emit('pusher:member_added', addedMember);
	                break;
	            case "pusher_internal:member_removed":
	                var removedMember = this.members.removeMember(data);
	                if (removedMember) {
	                    this.emit('pusher:member_removed', removedMember);
	                }
	                break;
	            default:
	                private_channel_1["default"].prototype.handleEvent.call(this, event, data);
	        }
	    };
	    PresenceChannel.prototype.disconnect = function () {
	        this.members.reset();
	        _super.prototype.disconnect.call(this);
	    };
	    return PresenceChannel;
	}(private_channel_1["default"]));
	exports.__esModule = true;
	exports["default"] = PresenceChannel;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var factory_1 = __webpack_require__(43);
	var channel_1 = __webpack_require__(52);
	var PrivateChannel = (function (_super) {
	    __extends(PrivateChannel, _super);
	    function PrivateChannel() {
	        _super.apply(this, arguments);
	    }
	    PrivateChannel.prototype.authorize = function (socketId, callback) {
	        var authorizer = factory_1["default"].createAuthorizer(this, this.pusher.config);
	        return authorizer.authorize(socketId, callback);
	    };
	    return PrivateChannel;
	}(channel_1["default"]));
	exports.__esModule = true;
	exports["default"] = PrivateChannel;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dispatcher_1 = __webpack_require__(24);
	var Errors = __webpack_require__(31);
	var logger_1 = __webpack_require__(8);
	var Channel = (function (_super) {
	    __extends(Channel, _super);
	    function Channel(name, pusher) {
	        _super.call(this, function (event, data) {
	            logger_1["default"].debug('No callbacks on ' + name + ' for ' + event);
	        });
	        this.name = name;
	        this.pusher = pusher;
	        this.subscribed = false;
	        this.subscriptionPending = false;
	        this.subscriptionCancelled = false;
	    }
	    Channel.prototype.authorize = function (socketId, callback) {
	        return callback(false, {});
	    };
	    Channel.prototype.trigger = function (event, data) {
	        if (event.indexOf("client-") !== 0) {
	            throw new Errors.BadEventName("Event '" + event + "' does not start with 'client-'");
	        }
	        return this.pusher.send_event(event, data, this.name);
	    };
	    Channel.prototype.disconnect = function () {
	        this.subscribed = false;
	        this.subscriptionPending = false;
	    };
	    Channel.prototype.handleEvent = function (event, data) {
	        if (event.indexOf("pusher_internal:") === 0) {
	            if (event === "pusher_internal:subscription_succeeded") {
	                this.subscriptionPending = false;
	                this.subscribed = true;
	                if (this.subscriptionCancelled) {
	                    this.pusher.unsubscribe(this.name);
	                }
	                else {
	                    this.emit("pusher:subscription_succeeded", data);
	                }
	            }
	        }
	        else {
	            this.emit(event, data);
	        }
	    };
	    Channel.prototype.subscribe = function () {
	        var _this = this;
	        if (this.subscribed) {
	            return;
	        }
	        this.subscriptionPending = true;
	        this.subscriptionCancelled = false;
	        this.authorize(this.pusher.connection.socket_id, function (error, data) {
	            if (error) {
	                _this.handleEvent('pusher:subscription_error', data);
	            }
	            else {
	                _this.pusher.send_event('pusher:subscribe', {
	                    auth: data.auth,
	                    channel_data: data.channel_data,
	                    channel: _this.name
	                });
	            }
	        });
	    };
	    Channel.prototype.unsubscribe = function () {
	        this.subscribed = false;
	        this.pusher.send_event('pusher:unsubscribe', {
	            channel: this.name
	        });
	    };
	    Channel.prototype.cancelSubscription = function () {
	        this.subscriptionCancelled = true;
	    };
	    Channel.prototype.reinstateSubscription = function () {
	        this.subscriptionCancelled = false;
	    };
	    return Channel;
	}(dispatcher_1["default"]));
	exports.__esModule = true;
	exports["default"] = Channel;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var Members = (function () {
	    function Members() {
	        this.reset();
	    }
	    Members.prototype.get = function (id) {
	        if (Object.prototype.hasOwnProperty.call(this.members, id)) {
	            return {
	                id: id,
	                info: this.members[id]
	            };
	        }
	        else {
	            return null;
	        }
	    };
	    Members.prototype.each = function (callback) {
	        var _this = this;
	        Collections.objectApply(this.members, function (member, id) {
	            callback(_this.get(id));
	        });
	    };
	    Members.prototype.setMyID = function (id) {
	        this.myID = id;
	    };
	    Members.prototype.onSubscription = function (subscriptionData) {
	        this.members = subscriptionData.presence.hash;
	        this.count = subscriptionData.presence.count;
	        this.me = this.get(this.myID);
	    };
	    Members.prototype.addMember = function (memberData) {
	        if (this.get(memberData.user_id) === null) {
	            this.count++;
	        }
	        this.members[memberData.user_id] = memberData.user_info;
	        return this.get(memberData.user_id);
	    };
	    Members.prototype.removeMember = function (memberData) {
	        var member = this.get(memberData.user_id);
	        if (member) {
	            delete this.members[memberData.user_id];
	            this.count--;
	        }
	        return member;
	    };
	    Members.prototype.reset = function () {
	        this.members = {};
	        this.count = 0;
	        this.myID = null;
	        this.me = null;
	    };
	    return Members;
	}());
	exports.__esModule = true;
	exports["default"] = Members;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dispatcher_1 = __webpack_require__(24);
	var timers_1 = __webpack_require__(12);
	var logger_1 = __webpack_require__(8);
	var Collections = __webpack_require__(9);
	var runtime_1 = __webpack_require__(2);
	var ConnectionManager = (function (_super) {
	    __extends(ConnectionManager, _super);
	    function ConnectionManager(key, options) {
	        var _this = this;
	        _super.call(this);
	        this.key = key;
	        this.options = options || {};
	        this.state = "initialized";
	        this.connection = null;
	        this.encrypted = !!options.encrypted;
	        this.timeline = this.options.timeline;
	        this.connectionCallbacks = this.buildConnectionCallbacks();
	        this.errorCallbacks = this.buildErrorCallbacks();
	        this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
	        var Network = runtime_1["default"].getNetwork();
	        Network.bind("online", function () {
	            _this.timeline.info({ netinfo: "online" });
	            if (_this.state === "connecting" || _this.state === "unavailable") {
	                _this.retryIn(0);
	            }
	        });
	        Network.bind("offline", function () {
	            _this.timeline.info({ netinfo: "offline" });
	            if (_this.connection) {
	                _this.sendActivityCheck();
	            }
	        });
	        this.updateStrategy();
	    }
	    ConnectionManager.prototype.connect = function () {
	        if (this.connection || this.runner) {
	            return;
	        }
	        if (!this.strategy.isSupported()) {
	            this.updateState("failed");
	            return;
	        }
	        this.updateState("connecting");
	        this.startConnecting();
	        this.setUnavailableTimer();
	    };
	    ;
	    ConnectionManager.prototype.send = function (data) {
	        if (this.connection) {
	            return this.connection.send(data);
	        }
	        else {
	            return false;
	        }
	    };
	    ;
	    ConnectionManager.prototype.send_event = function (name, data, channel) {
	        if (this.connection) {
	            return this.connection.send_event(name, data, channel);
	        }
	        else {
	            return false;
	        }
	    };
	    ;
	    ConnectionManager.prototype.disconnect = function () {
	        this.disconnectInternally();
	        this.updateState("disconnected");
	    };
	    ;
	    ConnectionManager.prototype.isEncrypted = function () {
	        return this.encrypted;
	    };
	    ;
	    ConnectionManager.prototype.startConnecting = function () {
	        var _this = this;
	        var callback = function (error, handshake) {
	            if (error) {
	                _this.runner = _this.strategy.connect(0, callback);
	            }
	            else {
	                if (handshake.action === "error") {
	                    _this.emit("error", { type: "HandshakeError", error: handshake.error });
	                    _this.timeline.error({ handshakeError: handshake.error });
	                }
	                else {
	                    _this.abortConnecting();
	                    _this.handshakeCallbacks[handshake.action](handshake);
	                }
	            }
	        };
	        this.runner = this.strategy.connect(0, callback);
	    };
	    ;
	    ConnectionManager.prototype.abortConnecting = function () {
	        if (this.runner) {
	            this.runner.abort();
	            this.runner = null;
	        }
	    };
	    ;
	    ConnectionManager.prototype.disconnectInternally = function () {
	        this.abortConnecting();
	        this.clearRetryTimer();
	        this.clearUnavailableTimer();
	        if (this.connection) {
	            var connection = this.abandonConnection();
	            connection.close();
	        }
	    };
	    ;
	    ConnectionManager.prototype.updateStrategy = function () {
	        this.strategy = this.options.getStrategy({
	            key: this.key,
	            timeline: this.timeline,
	            encrypted: this.encrypted
	        });
	    };
	    ;
	    ConnectionManager.prototype.retryIn = function (delay) {
	        var _this = this;
	        this.timeline.info({ action: "retry", delay: delay });
	        if (delay > 0) {
	            this.emit("connecting_in", Math.round(delay / 1000));
	        }
	        this.retryTimer = new timers_1.OneOffTimer(delay || 0, function () {
	            _this.disconnectInternally();
	            _this.connect();
	        });
	    };
	    ;
	    ConnectionManager.prototype.clearRetryTimer = function () {
	        if (this.retryTimer) {
	            this.retryTimer.ensureAborted();
	            this.retryTimer = null;
	        }
	    };
	    ;
	    ConnectionManager.prototype.setUnavailableTimer = function () {
	        var _this = this;
	        this.unavailableTimer = new timers_1.OneOffTimer(this.options.unavailableTimeout, function () {
	            _this.updateState("unavailable");
	        });
	    };
	    ;
	    ConnectionManager.prototype.clearUnavailableTimer = function () {
	        if (this.unavailableTimer) {
	            this.unavailableTimer.ensureAborted();
	        }
	    };
	    ;
	    ConnectionManager.prototype.sendActivityCheck = function () {
	        var _this = this;
	        this.stopActivityCheck();
	        this.connection.ping();
	        this.activityTimer = new timers_1.OneOffTimer(this.options.pongTimeout, function () {
	            _this.timeline.error({ pong_timed_out: _this.options.pongTimeout });
	            _this.retryIn(0);
	        });
	    };
	    ;
	    ConnectionManager.prototype.resetActivityCheck = function () {
	        var _this = this;
	        this.stopActivityCheck();
	        if (this.connection && !this.connection.handlesActivityChecks()) {
	            this.activityTimer = new timers_1.OneOffTimer(this.activityTimeout, function () {
	                _this.sendActivityCheck();
	            });
	        }
	    };
	    ;
	    ConnectionManager.prototype.stopActivityCheck = function () {
	        if (this.activityTimer) {
	            this.activityTimer.ensureAborted();
	        }
	    };
	    ;
	    ConnectionManager.prototype.buildConnectionCallbacks = function () {
	        var _this = this;
	        return {
	            message: function (message) {
	                _this.resetActivityCheck();
	                _this.emit('message', message);
	            },
	            ping: function () {
	                _this.send_event('pusher:pong', {});
	            },
	            activity: function () {
	                _this.resetActivityCheck();
	            },
	            error: function (error) {
	                _this.emit("error", { type: "WebSocketError", error: error });
	            },
	            closed: function () {
	                _this.abandonConnection();
	                if (_this.shouldRetry()) {
	                    _this.retryIn(1000);
	                }
	            }
	        };
	    };
	    ;
	    ConnectionManager.prototype.buildHandshakeCallbacks = function (errorCallbacks) {
	        var _this = this;
	        return Collections.extend({}, errorCallbacks, {
	            connected: function (handshake) {
	                _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
	                _this.clearUnavailableTimer();
	                _this.setConnection(handshake.connection);
	                _this.socket_id = _this.connection.id;
	                _this.updateState("connected", { socket_id: _this.socket_id });
	            }
	        });
	    };
	    ;
	    ConnectionManager.prototype.buildErrorCallbacks = function () {
	        var _this = this;
	        var withErrorEmitted = function (callback) {
	            return function (result) {
	                if (result.error) {
	                    _this.emit("error", { type: "WebSocketError", error: result.error });
	                }
	                callback(result);
	            };
	        };
	        return {
	            ssl_only: withErrorEmitted(function () {
	                _this.encrypted = true;
	                _this.updateStrategy();
	                _this.retryIn(0);
	            }),
	            refused: withErrorEmitted(function () {
	                _this.disconnect();
	            }),
	            backoff: withErrorEmitted(function () {
	                _this.retryIn(1000);
	            }),
	            retry: withErrorEmitted(function () {
	                _this.retryIn(0);
	            })
	        };
	    };
	    ;
	    ConnectionManager.prototype.setConnection = function (connection) {
	        this.connection = connection;
	        for (var event in this.connectionCallbacks) {
	            this.connection.bind(event, this.connectionCallbacks[event]);
	        }
	        this.resetActivityCheck();
	    };
	    ;
	    ConnectionManager.prototype.abandonConnection = function () {
	        if (!this.connection) {
	            return;
	        }
	        this.stopActivityCheck();
	        for (var event in this.connectionCallbacks) {
	            this.connection.unbind(event, this.connectionCallbacks[event]);
	        }
	        var connection = this.connection;
	        this.connection = null;
	        return connection;
	    };
	    ConnectionManager.prototype.updateState = function (newState, data) {
	        var previousState = this.state;
	        this.state = newState;
	        if (previousState !== newState) {
	            var newStateDescription = newState;
	            if (newStateDescription === "connected") {
	                newStateDescription += " with new socket ID " + data.socket_id;
	            }
	            logger_1["default"].debug('State changed', previousState + ' -> ' + newStateDescription);
	            this.timeline.info({ state: newState, params: data });
	            this.emit('state_change', { previous: previousState, current: newState });
	            this.emit(newState, data);
	        }
	    };
	    ConnectionManager.prototype.shouldRetry = function () {
	        return this.state === "connecting" || this.state === "connected";
	    };
	    return ConnectionManager;
	}(dispatcher_1["default"]));
	exports.__esModule = true;
	exports["default"] = ConnectionManager;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var factory_1 = __webpack_require__(43);
	var Channels = (function () {
	    function Channels() {
	        this.channels = {};
	    }
	    Channels.prototype.add = function (name, pusher) {
	        if (!this.channels[name]) {
	            this.channels[name] = createChannel(name, pusher);
	        }
	        return this.channels[name];
	    };
	    Channels.prototype.all = function () {
	        return Collections.values(this.channels);
	    };
	    Channels.prototype.find = function (name) {
	        return this.channels[name];
	    };
	    Channels.prototype.remove = function (name) {
	        var channel = this.channels[name];
	        delete this.channels[name];
	        return channel;
	    };
	    Channels.prototype.disconnect = function () {
	        Collections.objectApply(this.channels, function (channel) {
	            channel.disconnect();
	        });
	    };
	    return Channels;
	}());
	exports.__esModule = true;
	exports["default"] = Channels;
	function createChannel(name, pusher) {
	    if (name.indexOf('private-') === 0) {
	        return factory_1["default"].createPrivateChannel(name, pusher);
	    }
	    else if (name.indexOf('presence-') === 0) {
	        return factory_1["default"].createPresenceChannel(name, pusher);
	    }
	    else {
	        return factory_1["default"].createChannel(name, pusher);
	    }
	}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var factory_1 = __webpack_require__(43);
	var util_1 = __webpack_require__(11);
	var Errors = __webpack_require__(31);
	var Collections = __webpack_require__(9);
	var TransportStrategy = (function () {
	    function TransportStrategy(name, priority, transport, options) {
	        this.name = name;
	        this.priority = priority;
	        this.transport = transport;
	        this.options = options || {};
	    }
	    TransportStrategy.prototype.isSupported = function () {
	        return this.transport.isSupported({
	            encrypted: this.options.encrypted
	        });
	    };
	    TransportStrategy.prototype.connect = function (minPriority, callback) {
	        var _this = this;
	        if (!this.isSupported()) {
	            return failAttempt(new Errors.UnsupportedStrategy(), callback);
	        }
	        else if (this.priority < minPriority) {
	            return failAttempt(new Errors.TransportPriorityTooLow(), callback);
	        }
	        var connected = false;
	        var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
	        var handshake = null;
	        var onInitialized = function () {
	            transport.unbind("initialized", onInitialized);
	            transport.connect();
	        };
	        var onOpen = function () {
	            handshake = factory_1["default"].createHandshake(transport, function (result) {
	                connected = true;
	                unbindListeners();
	                callback(null, result);
	            });
	        };
	        var onError = function (error) {
	            unbindListeners();
	            callback(error);
	        };
	        var onClosed = function () {
	            unbindListeners();
	            var serializedTransport;
	            serializedTransport = Collections.safeJSONStringify(transport);
	            callback(new Errors.TransportClosed(serializedTransport));
	        };
	        var unbindListeners = function () {
	            transport.unbind("initialized", onInitialized);
	            transport.unbind("open", onOpen);
	            transport.unbind("error", onError);
	            transport.unbind("closed", onClosed);
	        };
	        transport.bind("initialized", onInitialized);
	        transport.bind("open", onOpen);
	        transport.bind("error", onError);
	        transport.bind("closed", onClosed);
	        transport.initialize();
	        return {
	            abort: function () {
	                if (connected) {
	                    return;
	                }
	                unbindListeners();
	                if (handshake) {
	                    handshake.close();
	                }
	                else {
	                    transport.close();
	                }
	            },
	            forceMinPriority: function (p) {
	                if (connected) {
	                    return;
	                }
	                if (_this.priority < p) {
	                    if (handshake) {
	                        handshake.close();
	                    }
	                    else {
	                        transport.close();
	                    }
	                }
	            }
	        };
	    };
	    return TransportStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = TransportStrategy;
	function failAttempt(error, callback) {
	    util_1["default"].defer(function () {
	        callback(error);
	    });
	    return {
	        abort: function () { },
	        forceMinPriority: function () { }
	    };
	}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var util_1 = __webpack_require__(11);
	var timers_1 = __webpack_require__(12);
	var SequentialStrategy = (function () {
	    function SequentialStrategy(strategies, options) {
	        this.strategies = strategies;
	        this.loop = Boolean(options.loop);
	        this.failFast = Boolean(options.failFast);
	        this.timeout = options.timeout;
	        this.timeoutLimit = options.timeoutLimit;
	    }
	    SequentialStrategy.prototype.isSupported = function () {
	        return Collections.any(this.strategies, util_1["default"].method("isSupported"));
	    };
	    SequentialStrategy.prototype.connect = function (minPriority, callback) {
	        var _this = this;
	        var strategies = this.strategies;
	        var current = 0;
	        var timeout = this.timeout;
	        var runner = null;
	        var tryNextStrategy = function (error, handshake) {
	            if (handshake) {
	                callback(null, handshake);
	            }
	            else {
	                current = current + 1;
	                if (_this.loop) {
	                    current = current % strategies.length;
	                }
	                if (current < strategies.length) {
	                    if (timeout) {
	                        timeout = timeout * 2;
	                        if (_this.timeoutLimit) {
	                            timeout = Math.min(timeout, _this.timeoutLimit);
	                        }
	                    }
	                    runner = _this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: _this.failFast }, tryNextStrategy);
	                }
	                else {
	                    callback(true);
	                }
	            }
	        };
	        runner = this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: this.failFast }, tryNextStrategy);
	        return {
	            abort: function () {
	                runner.abort();
	            },
	            forceMinPriority: function (p) {
	                minPriority = p;
	                if (runner) {
	                    runner.forceMinPriority(p);
	                }
	            }
	        };
	    };
	    SequentialStrategy.prototype.tryStrategy = function (strategy, minPriority, options, callback) {
	        var timer = null;
	        var runner = null;
	        if (options.timeout > 0) {
	            timer = new timers_1.OneOffTimer(options.timeout, function () {
	                runner.abort();
	                callback(true);
	            });
	        }
	        runner = strategy.connect(minPriority, function (error, handshake) {
	            if (error && timer && timer.isRunning() && !options.failFast) {
	                return;
	            }
	            if (timer) {
	                timer.ensureAborted();
	            }
	            callback(error, handshake);
	        });
	        return {
	            abort: function () {
	                if (timer) {
	                    timer.ensureAborted();
	                }
	                runner.abort();
	            },
	            forceMinPriority: function (p) {
	                runner.forceMinPriority(p);
	            }
	        };
	    };
	    return SequentialStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = SequentialStrategy;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var util_1 = __webpack_require__(11);
	var BestConnectedEverStrategy = (function () {
	    function BestConnectedEverStrategy(strategies) {
	        this.strategies = strategies;
	    }
	    BestConnectedEverStrategy.prototype.isSupported = function () {
	        return Collections.any(this.strategies, util_1["default"].method("isSupported"));
	    };
	    BestConnectedEverStrategy.prototype.connect = function (minPriority, callback) {
	        return connect(this.strategies, minPriority, function (i, runners) {
	            return function (error, handshake) {
	                runners[i].error = error;
	                if (error) {
	                    if (allRunnersFailed(runners)) {
	                        callback(true);
	                    }
	                    return;
	                }
	                Collections.apply(runners, function (runner) {
	                    runner.forceMinPriority(handshake.transport.priority);
	                });
	                callback(null, handshake);
	            };
	        });
	    };
	    return BestConnectedEverStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = BestConnectedEverStrategy;
	function connect(strategies, minPriority, callbackBuilder) {
	    var runners = Collections.map(strategies, function (strategy, i, _, rs) {
	        return strategy.connect(minPriority, callbackBuilder(i, rs));
	    });
	    return {
	        abort: function () {
	            Collections.apply(runners, abortRunner);
	        },
	        forceMinPriority: function (p) {
	            Collections.apply(runners, function (runner) {
	                runner.forceMinPriority(p);
	            });
	        }
	    };
	}
	function allRunnersFailed(runners) {
	    return Collections.all(runners, function (runner) {
	        return Boolean(runner.error);
	    });
	}
	function abortRunner(runner) {
	    if (!runner.error && !runner.aborted) {
	        runner.abort();
	        runner.aborted = true;
	    }
	}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(11);
	var runtime_1 = __webpack_require__(2);
	var sequential_strategy_1 = __webpack_require__(57);
	var Collections = __webpack_require__(9);
	var CachedStrategy = (function () {
	    function CachedStrategy(strategy, transports, options) {
	        this.strategy = strategy;
	        this.transports = transports;
	        this.ttl = options.ttl || 1800 * 1000;
	        this.encrypted = options.encrypted;
	        this.timeline = options.timeline;
	    }
	    CachedStrategy.prototype.isSupported = function () {
	        return this.strategy.isSupported();
	    };
	    CachedStrategy.prototype.connect = function (minPriority, callback) {
	        var encrypted = this.encrypted;
	        var info = fetchTransportCache(encrypted);
	        var strategies = [this.strategy];
	        if (info && info.timestamp + this.ttl >= util_1["default"].now()) {
	            var transport = this.transports[info.transport];
	            if (transport) {
	                this.timeline.info({
	                    cached: true,
	                    transport: info.transport,
	                    latency: info.latency
	                });
	                strategies.push(new sequential_strategy_1["default"]([transport], {
	                    timeout: info.latency * 2 + 1000,
	                    failFast: true
	                }));
	            }
	        }
	        var startTimestamp = util_1["default"].now();
	        var runner = strategies.pop().connect(minPriority, function cb(error, handshake) {
	            if (error) {
	                flushTransportCache(encrypted);
	                if (strategies.length > 0) {
	                    startTimestamp = util_1["default"].now();
	                    runner = strategies.pop().connect(minPriority, cb);
	                }
	                else {
	                    callback(error);
	                }
	            }
	            else {
	                storeTransportCache(encrypted, handshake.transport.name, util_1["default"].now() - startTimestamp);
	                callback(null, handshake);
	            }
	        });
	        return {
	            abort: function () {
	                runner.abort();
	            },
	            forceMinPriority: function (p) {
	                minPriority = p;
	                if (runner) {
	                    runner.forceMinPriority(p);
	                }
	            }
	        };
	    };
	    return CachedStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = CachedStrategy;
	function getTransportCacheKey(encrypted) {
	    return "pusherTransport" + (encrypted ? "Encrypted" : "Unencrypted");
	}
	function fetchTransportCache(encrypted) {
	    var storage = runtime_1["default"].getLocalStorage();
	    if (storage) {
	        try {
	            var serializedCache = storage[getTransportCacheKey(encrypted)];
	            if (serializedCache) {
	                return JSON.parse(serializedCache);
	            }
	        }
	        catch (e) {
	            flushTransportCache(encrypted);
	        }
	    }
	    return null;
	}
	function storeTransportCache(encrypted, transport, latency) {
	    var storage = runtime_1["default"].getLocalStorage();
	    if (storage) {
	        try {
	            storage[getTransportCacheKey(encrypted)] = Collections.safeJSONStringify({
	                timestamp: util_1["default"].now(),
	                transport: transport,
	                latency: latency
	            });
	        }
	        catch (e) {
	        }
	    }
	}
	function flushTransportCache(encrypted) {
	    var storage = runtime_1["default"].getLocalStorage();
	    if (storage) {
	        try {
	            delete storage[getTransportCacheKey(encrypted)];
	        }
	        catch (e) {
	        }
	    }
	}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var timers_1 = __webpack_require__(12);
	var DelayedStrategy = (function () {
	    function DelayedStrategy(strategy, _a) {
	        var number = _a.delay;
	        this.strategy = strategy;
	        this.options = { delay: number };
	    }
	    DelayedStrategy.prototype.isSupported = function () {
	        return this.strategy.isSupported();
	    };
	    DelayedStrategy.prototype.connect = function (minPriority, callback) {
	        var strategy = this.strategy;
	        var runner;
	        var timer = new timers_1.OneOffTimer(this.options.delay, function () {
	            runner = strategy.connect(minPriority, callback);
	        });
	        return {
	            abort: function () {
	                timer.ensureAborted();
	                if (runner) {
	                    runner.abort();
	                }
	            },
	            forceMinPriority: function (p) {
	                minPriority = p;
	                if (runner) {
	                    runner.forceMinPriority(p);
	                }
	            }
	        };
	    };
	    return DelayedStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = DelayedStrategy;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";
	var IfStrategy = (function () {
	    function IfStrategy(test, trueBranch, falseBranch) {
	        this.test = test;
	        this.trueBranch = trueBranch;
	        this.falseBranch = falseBranch;
	    }
	    IfStrategy.prototype.isSupported = function () {
	        var branch = this.test() ? this.trueBranch : this.falseBranch;
	        return branch.isSupported();
	    };
	    IfStrategy.prototype.connect = function (minPriority, callback) {
	        var branch = this.test() ? this.trueBranch : this.falseBranch;
	        return branch.connect(minPriority, callback);
	    };
	    return IfStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = IfStrategy;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	"use strict";
	var FirstConnectedStrategy = (function () {
	    function FirstConnectedStrategy(strategy) {
	        this.strategy = strategy;
	    }
	    FirstConnectedStrategy.prototype.isSupported = function () {
	        return this.strategy.isSupported();
	    };
	    FirstConnectedStrategy.prototype.connect = function (minPriority, callback) {
	        var runner = this.strategy.connect(minPriority, function (error, handshake) {
	            if (handshake) {
	                runner.abort();
	            }
	            callback(error, handshake);
	        });
	        return runner;
	    };
	    return FirstConnectedStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = FirstConnectedStrategy;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var defaults_1 = __webpack_require__(5);
	exports.getGlobalConfig = function () {
	    return {
	        wsHost: defaults_1["default"].host,
	        wsPort: defaults_1["default"].ws_port,
	        wssPort: defaults_1["default"].wss_port,
	        httpHost: defaults_1["default"].sockjs_host,
	        httpPort: defaults_1["default"].sockjs_http_port,
	        httpsPort: defaults_1["default"].sockjs_https_port,
	        httpPath: defaults_1["default"].sockjs_path,
	        statsHost: defaults_1["default"].stats_host,
	        authEndpoint: defaults_1["default"].channel_auth_endpoint,
	        authTransport: defaults_1["default"].channel_auth_transport,
	        activity_timeout: defaults_1["default"].activity_timeout,
	        pong_timeout: defaults_1["default"].pong_timeout,
	        unavailable_timeout: defaults_1["default"].unavailable_timeout
	    };
	};
	exports.getClusterConfig = function (clusterName) {
	    return {
	        wsHost: "ws-" + clusterName + ".pusher.com",
	        httpHost: "sockjs-" + clusterName + ".pusher.com"
	    };
	};


/***/ })
/******/ ])
});
;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGM5OTFkYmU2MWJjMGRhMjljOTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9iYWNrZW5kL2pzL2Jyb2FkY2FzdC9pbml0LWJyb2FkY2FzdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1lY2hvL2Rpc3QvZWNoby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHVzaGVyLWpzL2Rpc3Qvd2ViL3B1c2hlci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJQdXNoZXIiLCJyZXF1aXJlIiwiRWNobyIsImJyb2FkY2FzdGVyIiwia2V5IiwiY2x1c3RlciIsImVuY3J5cHRlZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7QUFFQUEsT0FBT0MsTUFBUCxHQUFnQixtQkFBQUMsQ0FBUSxHQUFSLENBQWhCOztBQUVBRixPQUFPRyxJQUFQLEdBQWMsMEJBQVM7QUFDbkJDLGlCQUFhLFFBRE07QUFFbkJDLFNBQUssc0JBRmM7QUFHbkJDLGFBQVMsS0FIVTtBQUluQkMsZUFBVztBQUpRLENBQVQsQ0FBZCxDOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVELHNCOzs7Ozs7O0FDNXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpSkFBaUo7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSxzR0FBc0c7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixnQ0FBZ0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsNkJBQTZCLHFDQUFxQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsT0FBTztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsMkNBQTJDLGdCQUFnQix3QkFBd0IsRUFBRSxFQUFFO0FBQ2xKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsaUJBQWlCO0FBQ2pCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0JBQXNCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0JBQWdCO0FBQ3REO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtCQUFrQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLElBQUk7QUFDbEM7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOzs7QUFHdkIsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxVQUFVO0FBQ1YsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0UsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0EsRUFBRTtBQUNGLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0UsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlDQUFpQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1Q0FBdUM7QUFDcEUsd0RBQXdELDBCQUEwQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxvQkFBb0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxlQUFlO0FBQ25EO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtGQUErRix1QkFBdUIsRUFBRTtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxvQ0FBb0M7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsOEJBQThCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0JBQXNCO0FBQ3hCO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFVBQVUscUNBQXFDO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzQ0FBc0M7QUFDeEM7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNkRBQTZELGVBQWU7QUFDNUUsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QywyREFBMkQ7QUFDM0QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSw4Q0FBOEMsc0JBQXNCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDRDQUE0QztBQUN2RjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsMENBQTBDO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxzQ0FBc0MsdUNBQXVDO0FBQzdFLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQkFBb0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0Esa0NBQWtDLHFCQUFxQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxpREFBaUQ7QUFDM0YsMkNBQTJDLGtDQUFrQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdDQUFnQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNENBQTRDO0FBQy9FO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsbURBQW1EO0FBQ25ELGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0Esc0NBQXNDLHVDQUF1QztBQUM3RSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDZCQUE2QjtBQUM5RTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw4Q0FBOEM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0NBQWdDO0FBQ2pFLHdDQUF3Qyw2Q0FBNkM7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDZCQUE2QixFQUFFO0FBQy9CLHdDQUF3QztBQUN4QztBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRiw2Q0FBNkM7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLDRDQUE0QztBQUNsSDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxDQUFDO0FBQ0QsQyIsImZpbGUiOiJcXGFzc2V0c1xcYmFja2VuZFxcanNcXGN1c3RvbVxcaW5pdC1icm9hZGNhc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxODIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRjOTkxZGJlNjFiYzBkYTI5YzkwIiwiaW1wb3J0IEVjaG8gZnJvbSBcImxhcmF2ZWwtZWNob1wiO1xyXG5cclxud2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xyXG5cclxud2luZG93LkVjaG8gPSBuZXcgRWNobyh7XHJcbiAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXHJcbiAgICBrZXk6ICdjMzE4OTk5NmU2NzlmOTdjMjUwNScsXHJcbiAgICBjbHVzdGVyOiAnYXAyJyxcclxuICAgIGVuY3J5cHRlZDogdHJ1ZVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9iYWNrZW5kL2pzL2Jyb2FkY2FzdC9pbml0LWJyb2FkY2FzdGluZy5qcyIsInZhciBhc3luY0dlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICAgIHZhciBmcm9udCwgYmFjaztcblxuICAgIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGFyZzogYXJnLFxuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS52YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgYXJnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgICAgaWYgKGZyb250KSB7XG4gICAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gICAgaWYgKHR5cGVvZiBnZW4ucmV0dXJuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmV0dXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgd3JhcDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGF3YWl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufSgpO1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciBDb25uZWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29ubmVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdG9yKTtcblxuICAgICAgICB0aGlzLl9kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dGhFbmRwb2ludDogJy9icm9hZGNhc3RpbmcvYXV0aCcsXG4gICAgICAgICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4gICAgICAgICAgICBjc3JmVG9rZW46IG51bGwsXG4gICAgICAgICAgICBob3N0OiBudWxsLFxuICAgICAgICAgICAga2V5OiBudWxsLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiAnQXBwLkV2ZW50cydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhDb25uZWN0b3IsIFt7XG4gICAgICAgIGtleTogJ3NldE9wdGlvbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh0aGlzLl9kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hdXRoLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjc3JmVG9rZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3NyZlRva2VuKCkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3dbJ0xhcmF2ZWwnXSAmJiB3aW5kb3dbJ0xhcmF2ZWwnXS5jc3JmVG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93WydMYXJhdmVsJ10uY3NyZlRva2VuO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY3NyZlRva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jc3JmVG9rZW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgKHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDb25uZWN0b3I7XG59KCk7XG5cbnZhciBDaGFubmVsID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5uZWwpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKENoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ25vdGlmaWNhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBub3RpZmljYXRpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RlbignLklsbHVtaW5hdGVcXFxcTm90aWZpY2F0aW9uc1xcXFxFdmVudHNcXFxcQnJvYWRjYXN0Tm90aWZpY2F0aW9uQ3JlYXRlZCcsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuRm9yV2hpc3BlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5Gb3JXaGlzcGVyKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdGVuKCcuY2xpZW50LScgKyBldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDaGFubmVsO1xufSgpO1xuXG52YXIgRXZlbnRGb3JtYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRGb3JtYXR0ZXIobmFtZXNwYWNlKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50Rm9ybWF0dGVyKTtcblxuICAgICAgICB0aGlzLnNldE5hbWVzcGFjZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKEV2ZW50Rm9ybWF0dGVyLCBbe1xuICAgICAgICBrZXk6ICdmb3JtYXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0KGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY2hhckF0KDApID09PSAnLicgfHwgZXZlbnQuY2hhckF0KDApID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQuc3Vic3RyKDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50ID0gdGhpcy5uYW1lc3BhY2UgKyAnLicgKyBldmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudC5yZXBsYWNlKC9cXC4vZywgJ1xcXFwnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0TmFtZXNwYWNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldE5hbWVzcGFjZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gRXZlbnRGb3JtYXR0ZXI7XG59KCk7XG5cbnZhciBQdXNoZXJDaGFubmVsID0gZnVuY3Rpb24gKF9DaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoUHVzaGVyQ2hhbm5lbCwgX0NoYW5uZWwpO1xuXG4gICAgZnVuY3Rpb24gUHVzaGVyQ2hhbm5lbChwdXNoZXIsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHVzaGVyQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlckNoYW5uZWwpKS5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFB1c2hlckNoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucHVzaGVyLnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3BMaXN0ZW5pbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZyhldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5iaW5kKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5iaW5kKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHVzaGVyQ2hhbm5lbDtcbn0oQ2hhbm5lbCk7XG5cbnZhciBQdXNoZXJQcml2YXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfUHVzaGVyQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFB1c2hlclByaXZhdGVDaGFubmVsLCBfUHVzaGVyQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBQdXNoZXJQcml2YXRlQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyUHJpdmF0ZUNoYW5uZWwpO1xuICAgICAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHVzaGVyUHJpdmF0ZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJQcml2YXRlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFB1c2hlclByaXZhdGVDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICd3aGlzcGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5jaGFubmVsc1t0aGlzLm5hbWVdLnRyaWdnZXIoJ2NsaWVudC0nICsgZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQdXNoZXJQcml2YXRlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbnZhciBQdXNoZXJQcmVzZW5jZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1B1c2hlckNoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJQcmVzZW5jZUNoYW5uZWwsIF9QdXNoZXJDaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlclByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyUHJlc2VuY2VDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFB1c2hlclByZXNlbmNlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlclByZXNlbmNlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFB1c2hlclByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnaGVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoZXJlKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soT2JqZWN0LmtleXMoZGF0YS5tZW1iZXJzKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEubWVtYmVyc1trXTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdqb2luaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfYWRkZWQnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVyLmluZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwdXNoZXI6bWVtYmVyX3JlbW92ZWQnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVyLmluZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnd2hpc3BlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuY2hhbm5lbHNbdGhpcy5uYW1lXS50cmlnZ2VyKCdjbGllbnQtJyArIGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHVzaGVyUHJlc2VuY2VDaGFubmVsO1xufShQdXNoZXJDaGFubmVsKTtcblxudmFyIFNvY2tldElvQ2hhbm5lbCA9IGZ1bmN0aW9uIChfQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFNvY2tldElvQ2hhbm5lbCwgX0NoYW5uZWwpO1xuXG4gICAgZnVuY3Rpb24gU29ja2V0SW9DaGFubmVsKHNvY2tldCwgbmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb0NoYW5uZWwpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvY2tldElvQ2hhbm5lbCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLmV2ZW50cyA9IHt9O1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMuc29ja2V0ID0gc29ja2V0O1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgICAgX3RoaXMuY29uZmlndXJlUmVjb25uZWN0b3IoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFNvY2tldElvQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3N1YnNjcmliZScsIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgYXV0aDogdGhpcy5vcHRpb25zLmF1dGggfHwge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHRoaXMudW5iaW5kKCk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCd1bnN1YnNjcmliZScsIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgYXV0aDogdGhpcy5vcHRpb25zLmF1dGggfHwge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbih0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5uYW1lID09IGNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29uZmlndXJlUmVjb25uZWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29uZmlndXJlUmVjb25uZWN0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMzLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3QnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmJpbmQoJ3JlY29ubmVjdCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmluZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bmJpbmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzNC5ldmVudHNbZXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNC5zb2NrZXQucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXM0LmV2ZW50c1tldmVudF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9DaGFubmVsO1xufShDaGFubmVsKTtcblxudmFyIFNvY2tldElvUHJpdmF0ZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1NvY2tldElvQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwsIF9Tb2NrZXRJb0NoYW5uZWwpO1xuXG4gICAgZnVuY3Rpb24gU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTb2NrZXRJb1ByaXZhdGVDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ3doaXNwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2NsaWVudCBldmVudCcsIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdjbGllbnQtJyArIGV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBTb2NrZXRJb1ByaXZhdGVDaGFubmVsO1xufShTb2NrZXRJb0NoYW5uZWwpO1xuXG52YXIgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1NvY2tldElvUHJpdmF0ZUNoYW5uKSB7XG4gICAgaW5oZXJpdHMoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwsIF9Tb2NrZXRJb1ByaXZhdGVDaGFubik7XG5cbiAgICBmdW5jdGlvbiBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwpO1xuICAgICAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdoZXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhlcmUoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3ByZXNlbmNlOnN1YnNjcmliZWQnLCBmdW5jdGlvbiAobWVtYmVycykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1lbWJlcnMubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnVzZXJfaW5mbztcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdqb2luaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3ByZXNlbmNlOmpvaW5pbmcnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG1lbWJlci51c2VyX2luZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpsZWF2aW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvUHJlc2VuY2VDaGFubmVsO1xufShTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcblxudmFyIFB1c2hlckNvbm5lY3RvciA9IGZ1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gICAgaW5oZXJpdHMoUHVzaGVyQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlckNvbm5lY3RvcigpIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ29ubmVjdG9yKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBQdXNoZXJDb25uZWN0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJDb25uZWN0b3IpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5jaGFubmVscyA9IHt9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoUHVzaGVyQ29ubmVjdG9yLCBbe1xuICAgICAgICBrZXk6ICdjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIodGhpcy5vcHRpb25zLmtleSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihuYW1lLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWwobmFtZSkubGlzdGVuKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gbmV3IFB1c2hlckNoYW5uZWwodGhpcy5wdXNoZXIsIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJpdmF0ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdID0gbmV3IFB1c2hlclByaXZhdGVDaGFubmVsKHRoaXMucHVzaGVyLCAncHJpdmF0ZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlc2VuY2VDaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSA9IG5ldyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczIuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmNoYW5uZWxzW25hbWVdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczIuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvY2tldElkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uc29ja2V0X2lkO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlckNvbm5lY3Rvcjtcbn0oQ29ubmVjdG9yKTtcblxudmFyIFNvY2tldElvQ29ubmVjdG9yID0gZnVuY3Rpb24gKF9Db25uZWN0b3IpIHtcbiAgICBpbmhlcml0cyhTb2NrZXRJb0Nvbm5lY3RvciwgX0Nvbm5lY3Rvcik7XG5cbiAgICBmdW5jdGlvbiBTb2NrZXRJb0Nvbm5lY3RvcigpIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SW9Db25uZWN0b3IpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IFNvY2tldElvQ29ubmVjdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU29ja2V0SW9Db25uZWN0b3IpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5jaGFubmVscyA9IHt9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9Db25uZWN0b3IsIFt7XG4gICAgICAgIGtleTogJ2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gaW8odGhpcy5vcHRpb25zLmhvc3QsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb2NrZXQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBTb2NrZXRJb0NoYW5uZWwodGhpcy5zb2NrZXQsIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJpdmF0ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdID0gbmV3IFNvY2tldElvUHJpdmF0ZUNoYW5uZWwodGhpcy5zb2NrZXQsICdwcml2YXRlLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmVzZW5jZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlc2VuY2VDaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdID0gbmV3IFNvY2tldElvUHJlc2VuY2VDaGFubmVsKHRoaXMuc29ja2V0LCAncHJlc2VuY2UtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShuYW1lKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gW25hbWUsICdwcml2YXRlLScgKyBuYW1lLCAncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgICAgICAgICAgY2hhbm5lbHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczIuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmNoYW5uZWxzW25hbWVdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczIuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvY2tldElkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LmlkO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG52YXIgRWNobyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFY2hvKG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRWNobyk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKHR5cGVvZiBWdWUgPT09ICdmdW5jdGlvbicgJiYgVnVlLmh0dHApIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGF4aW9zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGpRdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIgPT0gJ3B1c2hlcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFB1c2hlckNvbm5lY3Rvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAnc29ja2V0LmlvJykge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgU29ja2V0SW9Db25uZWN0b3IodGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKEVjaG8sIFt7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyVnVlUmVxdWVzdEludGVyY2VwdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyVnVlUmVxdWVzdEludGVyY2VwdG9yKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgVnVlLmh0dHAuaW50ZXJjZXB0b3JzLnB1c2goZnVuY3Rpb24gKHJlcXVlc3QsIG5leHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc29ja2V0SWQoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnMuc2V0KCdYLVNvY2tldC1JRCcsIF90aGlzLnNvY2tldElkKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzWydYLVNvY2tldC1JZCddID0gX3RoaXMyLnNvY2tldElkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJqUXVlcnlBamF4U2V0dXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJqUXVlcnlBamF4U2V0dXAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBqUXVlcnkuYWpheCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5hamF4U2V0dXAoe1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiBiZWZvcmVTZW5kKHhocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzMy5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtU29ja2V0LUlkJywgX3RoaXMzLnNvY2tldElkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oY2hhbm5lbCwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IubGlzdGVuKGNoYW5uZWwsIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChfY2hhbm5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmNoYW5uZWwoX2NoYW5uZWwpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcml2YXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wcml2YXRlKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5wcml2YXRlQ2hhbm5lbChjaGFubmVsKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnam9pbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5wcmVzZW5jZUNoYW5uZWwoY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yLmxlYXZlKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5zb2NrZXRJZCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rvci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIEVjaG87XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWNobztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sYXJhdmVsLWVjaG8vZGlzdC9lY2hvLmpzXG4vLyBtb2R1bGUgaWQgPSAxODRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLyohXG4gKiBQdXNoZXIgSmF2YVNjcmlwdCBMaWJyYXJ5IHY0LjIuMVxuICogaHR0cHM6Ly9wdXNoZXIuY29tL1xuICpcbiAqIENvcHlyaWdodCAyMDE3LCBQdXNoZXJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5jZS5cbiAqL1xuXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQdXNoZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUHVzaGVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIHB1c2hlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwdXNoZXJfMVtcImRlZmF1bHRcIl07XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgZGlzcGF0Y2hlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNCk7XG5cdHZhciB0aW1lbGluZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cdHZhciBsZXZlbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MCk7XG5cdHZhciBTdHJhdGVneUJ1aWxkZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKTtcblx0dmFyIHRpbWVyc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdHZhciBkZWZhdWx0c18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0dmFyIERlZmF1bHRDb25maWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYzKTtcblx0dmFyIGxvZ2dlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0dmFyIGZhY3RvcnlfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xuXHR2YXIgdXJsX3N0b3JlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblx0dmFyIFB1c2hlciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBQdXNoZXIoYXBwX2tleSwgb3B0aW9ucykge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgY2hlY2tBcHBLZXkoYXBwX2tleSk7XG5cdCAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdCAgICAgICAgaWYgKCFvcHRpb25zLmNsdXN0ZXIpIHtcblx0ICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IHVybF9zdG9yZV8xW1wiZGVmYXVsdFwiXS5idWlsZExvZ1N1ZmZpeChcImphdmFzY3JpcHRRdWlja1N0YXJ0XCIpO1xuXHQgICAgICAgICAgICBsb2dnZXJfMVtcImRlZmF1bHRcIl0ud2FybihcIllvdSBzaG91bGQgYWx3YXlzIHNwZWNpZnkgYSBjbHVzdGVyIHdoZW4gY29ubmVjdGluZy4gXCIgKyBzdWZmaXgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLmtleSA9IGFwcF9rZXk7XG5cdCAgICAgICAgdGhpcy5jb25maWcgPSBDb2xsZWN0aW9ucy5leHRlbmQoRGVmYXVsdENvbmZpZy5nZXRHbG9iYWxDb25maWcoKSwgb3B0aW9ucy5jbHVzdGVyID8gRGVmYXVsdENvbmZpZy5nZXRDbHVzdGVyQ29uZmlnKG9wdGlvbnMuY2x1c3RlcikgOiB7fSwgb3B0aW9ucyk7XG5cdCAgICAgICAgdGhpcy5jaGFubmVscyA9IGZhY3RvcnlfMVtcImRlZmF1bHRcIl0uY3JlYXRlQ2hhbm5lbHMoKTtcblx0ICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyID0gbmV3IGRpc3BhdGNoZXJfMVtcImRlZmF1bHRcIl0oKTtcblx0ICAgICAgICB0aGlzLnNlc3Npb25JRCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApO1xuXHQgICAgICAgIHRoaXMudGltZWxpbmUgPSBuZXcgdGltZWxpbmVfMVtcImRlZmF1bHRcIl0odGhpcy5rZXksIHRoaXMuc2Vzc2lvbklELCB7XG5cdCAgICAgICAgICAgIGNsdXN0ZXI6IHRoaXMuY29uZmlnLmNsdXN0ZXIsXG5cdCAgICAgICAgICAgIGZlYXR1cmVzOiBQdXNoZXIuZ2V0Q2xpZW50RmVhdHVyZXMoKSxcblx0ICAgICAgICAgICAgcGFyYW1zOiB0aGlzLmNvbmZpZy50aW1lbGluZVBhcmFtcyB8fCB7fSxcblx0ICAgICAgICAgICAgbGltaXQ6IDUwLFxuXHQgICAgICAgICAgICBsZXZlbDogbGV2ZWxfMVtcImRlZmF1bHRcIl0uSU5GTyxcblx0ICAgICAgICAgICAgdmVyc2lvbjogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uVkVSU0lPTlxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZVN0YXRzKSB7XG5cdCAgICAgICAgICAgIHRoaXMudGltZWxpbmVTZW5kZXIgPSBmYWN0b3J5XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZVRpbWVsaW5lU2VuZGVyKHRoaXMudGltZWxpbmUsIHtcblx0ICAgICAgICAgICAgICAgIGhvc3Q6IHRoaXMuY29uZmlnLnN0YXRzSG9zdCxcblx0ICAgICAgICAgICAgICAgIHBhdGg6IFwiL3RpbWVsaW5lL3YyL1wiICsgcnVudGltZV8xW1wiZGVmYXVsdFwiXS5UaW1lbGluZVRyYW5zcG9ydC5uYW1lXG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgZ2V0U3RyYXRlZ3kgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHQgICAgICAgICAgICB2YXIgY29uZmlnID0gQ29sbGVjdGlvbnMuZXh0ZW5kKHt9LCBfdGhpcy5jb25maWcsIG9wdGlvbnMpO1xuXHQgICAgICAgICAgICByZXR1cm4gU3RyYXRlZ3lCdWlsZGVyLmJ1aWxkKHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uZ2V0RGVmYXVsdFN0cmF0ZWd5KGNvbmZpZyksIGNvbmZpZyk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBmYWN0b3J5XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUNvbm5lY3Rpb25NYW5hZ2VyKHRoaXMua2V5LCBDb2xsZWN0aW9ucy5leHRlbmQoeyBnZXRTdHJhdGVneTogZ2V0U3RyYXRlZ3ksXG5cdCAgICAgICAgICAgIHRpbWVsaW5lOiB0aGlzLnRpbWVsaW5lLFxuXHQgICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IHRoaXMuY29uZmlnLmFjdGl2aXR5X3RpbWVvdXQsXG5cdCAgICAgICAgICAgIHBvbmdUaW1lb3V0OiB0aGlzLmNvbmZpZy5wb25nX3RpbWVvdXQsXG5cdCAgICAgICAgICAgIHVuYXZhaWxhYmxlVGltZW91dDogdGhpcy5jb25maWcudW5hdmFpbGFibGVfdGltZW91dFxuXHQgICAgICAgIH0sIHRoaXMuY29uZmlnLCB7IGVuY3J5cHRlZDogdGhpcy5pc0VuY3J5cHRlZCgpIH0pKTtcblx0ICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnY29ubmVjdGVkJywgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmVBbGwoKTtcblx0ICAgICAgICAgICAgaWYgKF90aGlzLnRpbWVsaW5lU2VuZGVyKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy50aW1lbGluZVNlbmRlci5zZW5kKF90aGlzLmNvbm5lY3Rpb24uaXNFbmNyeXB0ZWQoKSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnbWVzc2FnZScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcblx0ICAgICAgICAgICAgdmFyIGludGVybmFsID0gKHBhcmFtcy5ldmVudC5pbmRleE9mKCdwdXNoZXJfaW50ZXJuYWw6JykgPT09IDApO1xuXHQgICAgICAgICAgICBpZiAocGFyYW1zLmNoYW5uZWwpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBjaGFubmVsID0gX3RoaXMuY2hhbm5lbChwYXJhbXMuY2hhbm5lbCk7XG5cdCAgICAgICAgICAgICAgICBpZiAoY2hhbm5lbCkge1xuXHQgICAgICAgICAgICAgICAgICAgIGNoYW5uZWwuaGFuZGxlRXZlbnQocGFyYW1zLmV2ZW50LCBwYXJhbXMuZGF0YSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuZ2xvYmFsX2VtaXR0ZXIuZW1pdChwYXJhbXMuZXZlbnQsIHBhcmFtcy5kYXRhKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdjb25uZWN0aW5nJywgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBfdGhpcy5jaGFubmVscy5kaXNjb25uZWN0KCk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Rpc2Nvbm5lY3RlZCcsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgX3RoaXMuY2hhbm5lbHMuZGlzY29ubmVjdCgpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0ICAgICAgICAgICAgbG9nZ2VyXzFbXCJkZWZhdWx0XCJdLndhcm4oJ0Vycm9yJywgZXJyKTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgICBQdXNoZXIuaW5zdGFuY2VzLnB1c2godGhpcyk7XG5cdCAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHsgaW5zdGFuY2VzOiBQdXNoZXIuaW5zdGFuY2VzLmxlbmd0aCB9KTtcblx0ICAgICAgICBpZiAoUHVzaGVyLmlzUmVhZHkpIHtcblx0ICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgUHVzaGVyLnJlYWR5ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIFB1c2hlci5pc1JlYWR5ID0gdHJ1ZTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IFB1c2hlci5pbnN0YW5jZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgICAgICAgIFB1c2hlci5pbnN0YW5jZXNbaV0uY29ubmVjdCgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBQdXNoZXIubG9nID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0ICAgICAgICBpZiAoUHVzaGVyLmxvZ1RvQ29uc29sZSAmJiAod2luZG93KS5jb25zb2xlICYmICh3aW5kb3cpLmNvbnNvbGUubG9nKSB7XG5cdCAgICAgICAgICAgICh3aW5kb3cpLmNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBQdXNoZXIuZ2V0Q2xpZW50RmVhdHVyZXMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIENvbGxlY3Rpb25zLmtleXMoQ29sbGVjdGlvbnMuZmlsdGVyT2JqZWN0KHsgXCJ3c1wiOiBydW50aW1lXzFbXCJkZWZhdWx0XCJdLlRyYW5zcG9ydHMud3MgfSwgZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQuaXNTdXBwb3J0ZWQoe30pOyB9KSk7XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLnByb3RvdHlwZS5jaGFubmVsID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVscy5maW5kKG5hbWUpO1xuXHQgICAgfTtcblx0ICAgIFB1c2hlci5wcm90b3R5cGUuYWxsQ2hhbm5lbHMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuYWxsKCk7XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRoaXMuY29ubmVjdGlvbi5jb25uZWN0KCk7XG5cdCAgICAgICAgaWYgKHRoaXMudGltZWxpbmVTZW5kZXIpIHtcblx0ICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVsaW5lU2VuZGVyVGltZXIpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBlbmNyeXB0ZWQgPSB0aGlzLmNvbm5lY3Rpb24uaXNFbmNyeXB0ZWQoKTtcblx0ICAgICAgICAgICAgICAgIHZhciB0aW1lbGluZVNlbmRlciA9IHRoaXMudGltZWxpbmVTZW5kZXI7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnRpbWVsaW5lU2VuZGVyVGltZXIgPSBuZXcgdGltZXJzXzEuUGVyaW9kaWNUaW1lcig2MDAwMCwgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lU2VuZGVyLnNlbmQoZW5jcnlwdGVkKTtcblx0ICAgICAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIFB1c2hlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0aGlzLmNvbm5lY3Rpb24uZGlzY29ubmVjdCgpO1xuXHQgICAgICAgIGlmICh0aGlzLnRpbWVsaW5lU2VuZGVyVGltZXIpIHtcblx0ICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlclRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcblx0ICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlclRpbWVyID0gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlci5iaW5kKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH07XG5cdCAgICBQdXNoZXIucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIChldmVudF9uYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIudW5iaW5kKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH07XG5cdCAgICBQdXNoZXIucHJvdG90eXBlLmJpbmRfZ2xvYmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlci5iaW5kX2dsb2JhbChjYWxsYmFjayk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLnByb3RvdHlwZS51bmJpbmRfZ2xvYmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlci51bmJpbmRfZ2xvYmFsKGNhbGxiYWNrKTtcblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH07XG5cdCAgICBQdXNoZXIucHJvdG90eXBlLnVuYmluZF9hbGwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0ICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLnVuYmluZF9hbGwoKTtcblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH07XG5cdCAgICBQdXNoZXIucHJvdG90eXBlLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgY2hhbm5lbE5hbWU7XG5cdCAgICAgICAgZm9yIChjaGFubmVsTmFtZSBpbiB0aGlzLmNoYW5uZWxzLmNoYW5uZWxzKSB7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLmNoYW5uZWxzLmNoYW5uZWxzLmhhc093blByb3BlcnR5KGNoYW5uZWxOYW1lKSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoY2hhbm5lbE5hbWUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIFB1c2hlci5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGNoYW5uZWxfbmFtZSkge1xuXHQgICAgICAgIHZhciBjaGFubmVsID0gdGhpcy5jaGFubmVscy5hZGQoY2hhbm5lbF9uYW1lLCB0aGlzKTtcblx0ICAgICAgICBpZiAoY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nICYmIGNoYW5uZWwuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG5cdCAgICAgICAgICAgIGNoYW5uZWwucmVpbnN0YXRlU3Vic2NyaXB0aW9uKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2UgaWYgKCFjaGFubmVsLnN1YnNjcmlwdGlvblBlbmRpbmcgJiYgdGhpcy5jb25uZWN0aW9uLnN0YXRlID09PSBcImNvbm5lY3RlZFwiKSB7XG5cdCAgICAgICAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBjaGFubmVsO1xuXHQgICAgfTtcblx0ICAgIFB1c2hlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoY2hhbm5lbF9uYW1lKSB7XG5cdCAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzLmZpbmQoY2hhbm5lbF9uYW1lKTtcblx0ICAgICAgICBpZiAoY2hhbm5lbCAmJiBjaGFubmVsLnN1YnNjcmlwdGlvblBlbmRpbmcpIHtcblx0ICAgICAgICAgICAgY2hhbm5lbC5jYW5jZWxTdWJzY3JpcHRpb24oKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzLnJlbW92ZShjaGFubmVsX25hbWUpO1xuXHQgICAgICAgICAgICBpZiAoY2hhbm5lbCAmJiB0aGlzLmNvbm5lY3Rpb24uc3RhdGUgPT09IFwiY29ubmVjdGVkXCIpIHtcblx0ICAgICAgICAgICAgICAgIGNoYW5uZWwudW5zdWJzY3JpYmUoKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBQdXNoZXIucHJvdG90eXBlLnNlbmRfZXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRfbmFtZSwgZGF0YSwgY2hhbm5lbCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc2VuZF9ldmVudChldmVudF9uYW1lLCBkYXRhLCBjaGFubmVsKTtcblx0ICAgIH07XG5cdCAgICBQdXNoZXIucHJvdG90eXBlLmlzRW5jcnlwdGVkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmIChydW50aW1lXzFbXCJkZWZhdWx0XCJdLmdldFByb3RvY29sKCkgPT09IFwiaHR0cHM6XCIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmNvbmZpZy5lbmNyeXB0ZWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBQdXNoZXIuaW5zdGFuY2VzID0gW107XG5cdCAgICBQdXNoZXIuaXNSZWFkeSA9IGZhbHNlO1xuXHQgICAgUHVzaGVyLmxvZ1RvQ29uc29sZSA9IGZhbHNlO1xuXHQgICAgUHVzaGVyLlJ1bnRpbWUgPSBydW50aW1lXzFbXCJkZWZhdWx0XCJdO1xuXHQgICAgUHVzaGVyLlNjcmlwdFJlY2VpdmVycyA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uU2NyaXB0UmVjZWl2ZXJzO1xuXHQgICAgUHVzaGVyLkRlcGVuZGVuY2llc1JlY2VpdmVycyA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uRGVwZW5kZW5jaWVzUmVjZWl2ZXJzO1xuXHQgICAgUHVzaGVyLmF1dGhfY2FsbGJhY2tzID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5hdXRoX2NhbGxiYWNrcztcblx0ICAgIHJldHVybiBQdXNoZXI7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUHVzaGVyO1xuXHRmdW5jdGlvbiBjaGVja0FwcEtleShrZXkpIHtcblx0ICAgIGlmIChrZXkgPT09IG51bGwgfHwga2V5ID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICB0aHJvdyBcIllvdSBtdXN0IHBhc3MgeW91ciBhcHAga2V5IHdoZW4geW91IGluc3RhbnRpYXRlIFB1c2hlci5cIjtcblx0ICAgIH1cblx0fVxuXHRydW50aW1lXzFbXCJkZWZhdWx0XCJdLnNldHVwKFB1c2hlcik7XG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBkZXBlbmRlbmNpZXNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciB4aHJfYXV0aF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0dmFyIGpzb25wX2F1dGhfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXHR2YXIgc2NyaXB0X3JlcXVlc3RfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXHR2YXIganNvbnBfcmVxdWVzdF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cdHZhciBzY3JpcHRfcmVjZWl2ZXJfZmFjdG9yeV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0dmFyIGpzb25wX3RpbWVsaW5lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcblx0dmFyIHRyYW5zcG9ydHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXHR2YXIgbmV0X2luZm9fMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpO1xuXHR2YXIgZGVmYXVsdF9zdHJhdGVneV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNyk7XG5cdHZhciB0cmFuc3BvcnRfY29ubmVjdGlvbl9pbml0aWFsaXplcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOCk7XG5cdHZhciBodHRwXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcblx0dmFyIFJ1bnRpbWUgPSB7XG5cdCAgICBuZXh0QXV0aENhbGxiYWNrSUQ6IDEsXG5cdCAgICBhdXRoX2NhbGxiYWNrczoge30sXG5cdCAgICBTY3JpcHRSZWNlaXZlcnM6IHNjcmlwdF9yZWNlaXZlcl9mYWN0b3J5XzEuU2NyaXB0UmVjZWl2ZXJzLFxuXHQgICAgRGVwZW5kZW5jaWVzUmVjZWl2ZXJzOiBkZXBlbmRlbmNpZXNfMS5EZXBlbmRlbmNpZXNSZWNlaXZlcnMsXG5cdCAgICBnZXREZWZhdWx0U3RyYXRlZ3k6IGRlZmF1bHRfc3RyYXRlZ3lfMVtcImRlZmF1bHRcIl0sXG5cdCAgICBUcmFuc3BvcnRzOiB0cmFuc3BvcnRzXzFbXCJkZWZhdWx0XCJdLFxuXHQgICAgdHJhbnNwb3J0Q29ubmVjdGlvbkluaXRpYWxpemVyOiB0cmFuc3BvcnRfY29ubmVjdGlvbl9pbml0aWFsaXplcl8xW1wiZGVmYXVsdFwiXSxcblx0ICAgIEhUVFBGYWN0b3J5OiBodHRwXzFbXCJkZWZhdWx0XCJdLFxuXHQgICAgVGltZWxpbmVUcmFuc3BvcnQ6IGpzb25wX3RpbWVsaW5lXzFbXCJkZWZhdWx0XCJdLFxuXHQgICAgZ2V0WEhSQVBJOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcblx0ICAgIH0sXG5cdCAgICBnZXRXZWJTb2NrZXRBUEk6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gd2luZG93LldlYlNvY2tldCB8fCB3aW5kb3cuTW96V2ViU29ja2V0O1xuXHQgICAgfSxcblx0ICAgIHNldHVwOiBmdW5jdGlvbiAoUHVzaGVyQ2xhc3MpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHdpbmRvdy5QdXNoZXIgPSBQdXNoZXJDbGFzcztcblx0ICAgICAgICB2YXIgaW5pdGlhbGl6ZU9uRG9jdW1lbnRCb2R5ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBfdGhpcy5vbkRvY3VtZW50Qm9keShQdXNoZXJDbGFzcy5yZWFkeSk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBpZiAoIXdpbmRvdy5KU09OKSB7XG5cdCAgICAgICAgICAgIGRlcGVuZGVuY2llc18xLkRlcGVuZGVuY2llcy5sb2FkKFwianNvbjJcIiwge30sIGluaXRpYWxpemVPbkRvY3VtZW50Qm9keSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICBpbml0aWFsaXplT25Eb2N1bWVudEJvZHkoKTtcblx0ICAgICAgICB9XG5cdCAgICB9LFxuXHQgICAgZ2V0RG9jdW1lbnQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG5cdCAgICB9LFxuXHQgICAgZ2V0UHJvdG9jb2w6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5nZXREb2N1bWVudCgpLmxvY2F0aW9uLnByb3RvY29sO1xuXHQgICAgfSxcblx0ICAgIGdldEF1dGhvcml6ZXJzOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHsgYWpheDogeGhyX2F1dGhfMVtcImRlZmF1bHRcIl0sIGpzb25wOiBqc29ucF9hdXRoXzFbXCJkZWZhdWx0XCJdIH07XG5cdCAgICB9LFxuXHQgICAgb25Eb2N1bWVudEJvZHk6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcblx0ICAgICAgICAgICAgY2FsbGJhY2soKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMub25Eb2N1bWVudEJvZHkoY2FsbGJhY2spO1xuXHQgICAgICAgICAgICB9LCAwKTtcblx0ICAgICAgICB9XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlSlNPTlBSZXF1ZXN0OiBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBqc29ucF9yZXF1ZXN0XzFbXCJkZWZhdWx0XCJdKHVybCwgZGF0YSk7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlU2NyaXB0UmVxdWVzdDogZnVuY3Rpb24gKHNyYykge1xuXHQgICAgICAgIHJldHVybiBuZXcgc2NyaXB0X3JlcXVlc3RfMVtcImRlZmF1bHRcIl0oc3JjKTtcblx0ICAgIH0sXG5cdCAgICBnZXRMb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblx0ICAgICAgICB9XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlWEhSOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMuZ2V0WEhSQVBJKCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1pY3Jvc29mdFhIUigpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBjcmVhdGVYTUxIdHRwUmVxdWVzdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXMuZ2V0WEhSQVBJKCk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcigpO1xuXHQgICAgfSxcblx0ICAgIGNyZWF0ZU1pY3Jvc29mdFhIUjogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xuXHQgICAgfSxcblx0ICAgIGdldE5ldHdvcms6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gbmV0X2luZm9fMS5OZXR3b3JrO1xuXHQgICAgfSxcblx0ICAgIGNyZWF0ZVdlYlNvY2tldDogZnVuY3Rpb24gKHVybCkge1xuXHQgICAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXMuZ2V0V2ViU29ja2V0QVBJKCk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih1cmwpO1xuXHQgICAgfSxcblx0ICAgIGNyZWF0ZVNvY2tldFJlcXVlc3Q6IGZ1bmN0aW9uIChtZXRob2QsIHVybCkge1xuXHQgICAgICAgIGlmICh0aGlzLmlzWEhSU3VwcG9ydGVkKCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuSFRUUEZhY3RvcnkuY3JlYXRlWEhSKG1ldGhvZCwgdXJsKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSBpZiAodGhpcy5pc1hEUlN1cHBvcnRlZCh1cmwuaW5kZXhPZihcImh0dHBzOlwiKSA9PT0gMCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuSFRUUEZhY3RvcnkuY3JlYXRlWERSKG1ldGhvZCwgdXJsKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHRocm93IFwiQ3Jvc3Mtb3JpZ2luIEhUVFAgcmVxdWVzdHMgYXJlIG5vdCBzdXBwb3J0ZWRcIjtcblx0ICAgICAgICB9XG5cdCAgICB9LFxuXHQgICAgaXNYSFJTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFhIUkFQSSgpO1xuXHQgICAgICAgIHJldHVybiBCb29sZWFuKENvbnN0cnVjdG9yKSAmJiAobmV3IENvbnN0cnVjdG9yKCkpLndpdGhDcmVkZW50aWFscyAhPT0gdW5kZWZpbmVkO1xuXHQgICAgfSxcblx0ICAgIGlzWERSU3VwcG9ydGVkOiBmdW5jdGlvbiAoZW5jcnlwdGVkKSB7XG5cdCAgICAgICAgdmFyIHByb3RvY29sID0gZW5jcnlwdGVkID8gXCJodHRwczpcIiA6IFwiaHR0cDpcIjtcblx0ICAgICAgICB2YXIgZG9jdW1lbnRQcm90b2NvbCA9IHRoaXMuZ2V0UHJvdG9jb2woKTtcblx0ICAgICAgICByZXR1cm4gQm9vbGVhbigod2luZG93WydYRG9tYWluUmVxdWVzdCddKSkgJiYgZG9jdW1lbnRQcm90b2NvbCA9PT0gcHJvdG9jb2w7XG5cdCAgICB9LFxuXHQgICAgYWRkVW5sb2FkTGlzdGVuZXI6IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuXHQgICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsIGxpc3RlbmVyLCBmYWxzZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2UgaWYgKHdpbmRvdy5hdHRhY2hFdmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsIGxpc3RlbmVyKTtcblx0ICAgICAgICB9XG5cdCAgICB9LFxuXHQgICAgcmVtb3ZlVW5sb2FkTGlzdGVuZXI6IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuXHQgICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsIGxpc3RlbmVyLCBmYWxzZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2UgaWYgKHdpbmRvdy5kZXRhY2hFdmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgIHdpbmRvdy5kZXRhY2hFdmVudChcIm9udW5sb2FkXCIsIGxpc3RlbmVyKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUnVudGltZTtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIHNjcmlwdF9yZWNlaXZlcl9mYWN0b3J5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHR2YXIgZGVmYXVsdHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdHZhciBkZXBlbmRlbmN5X2xvYWRlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0ZXhwb3J0cy5EZXBlbmRlbmNpZXNSZWNlaXZlcnMgPSBuZXcgc2NyaXB0X3JlY2VpdmVyX2ZhY3RvcnlfMS5TY3JpcHRSZWNlaXZlckZhY3RvcnkoXCJfcHVzaGVyX2RlcGVuZGVuY2llc1wiLCBcIlB1c2hlci5EZXBlbmRlbmNpZXNSZWNlaXZlcnNcIik7XG5cdGV4cG9ydHMuRGVwZW5kZW5jaWVzID0gbmV3IGRlcGVuZGVuY3lfbG9hZGVyXzFbXCJkZWZhdWx0XCJdKHtcblx0ICAgIGNkbl9odHRwOiBkZWZhdWx0c18xW1wiZGVmYXVsdFwiXS5jZG5faHR0cCxcblx0ICAgIGNkbl9odHRwczogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uY2RuX2h0dHBzLFxuXHQgICAgdmVyc2lvbjogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uVkVSU0lPTixcblx0ICAgIHN1ZmZpeDogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uZGVwZW5kZW5jeV9zdWZmaXgsXG5cdCAgICByZWNlaXZlcnM6IGV4cG9ydHMuRGVwZW5kZW5jaWVzUmVjZWl2ZXJzXG5cdH0pO1xuXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFNjcmlwdFJlY2VpdmVyRmFjdG9yeShwcmVmaXgsIG5hbWUpIHtcblx0ICAgICAgICB0aGlzLmxhc3RJZCA9IDA7XG5cdCAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG5cdCAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcblx0ICAgIH1cblx0ICAgIFNjcmlwdFJlY2VpdmVyRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdGhpcy5sYXN0SWQrKztcblx0ICAgICAgICB2YXIgbnVtYmVyID0gdGhpcy5sYXN0SWQ7XG5cdCAgICAgICAgdmFyIGlkID0gdGhpcy5wcmVmaXggKyBudW1iZXI7XG5cdCAgICAgICAgdmFyIG5hbWUgPSB0aGlzLm5hbWUgKyBcIltcIiArIG51bWJlciArIFwiXVwiO1xuXHQgICAgICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcblx0ICAgICAgICB2YXIgY2FsbGJhY2tXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuXHQgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXNbbnVtYmVyXSA9IGNhbGxiYWNrV3JhcHBlcjtcblx0ICAgICAgICByZXR1cm4geyBudW1iZXI6IG51bWJlciwgaWQ6IGlkLCBuYW1lOiBuYW1lLCBjYWxsYmFjazogY2FsbGJhY2tXcmFwcGVyIH07XG5cdCAgICB9O1xuXHQgICAgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAocmVjZWl2ZXIpIHtcblx0ICAgICAgICBkZWxldGUgdGhpc1tyZWNlaXZlci5udW1iZXJdO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBTY3JpcHRSZWNlaXZlckZhY3Rvcnk7XG5cdH0oKSk7XG5cdGV4cG9ydHMuU2NyaXB0UmVjZWl2ZXJGYWN0b3J5ID0gU2NyaXB0UmVjZWl2ZXJGYWN0b3J5O1xuXHRleHBvcnRzLlNjcmlwdFJlY2VpdmVycyA9IG5ldyBTY3JpcHRSZWNlaXZlckZhY3RvcnkoXCJfcHVzaGVyX3NjcmlwdF9cIiwgXCJQdXNoZXIuU2NyaXB0UmVjZWl2ZXJzXCIpO1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgRGVmYXVsdHMgPSB7XG5cdCAgICBWRVJTSU9OOiBcIjQuMi4xXCIsXG5cdCAgICBQUk9UT0NPTDogNyxcblx0ICAgIGhvc3Q6ICd3cy5wdXNoZXJhcHAuY29tJyxcblx0ICAgIHdzX3BvcnQ6IDgwLFxuXHQgICAgd3NzX3BvcnQ6IDQ0Myxcblx0ICAgIHNvY2tqc19ob3N0OiAnc29ja2pzLnB1c2hlci5jb20nLFxuXHQgICAgc29ja2pzX2h0dHBfcG9ydDogODAsXG5cdCAgICBzb2NranNfaHR0cHNfcG9ydDogNDQzLFxuXHQgICAgc29ja2pzX3BhdGg6IFwiL3B1c2hlclwiLFxuXHQgICAgc3RhdHNfaG9zdDogJ3N0YXRzLnB1c2hlci5jb20nLFxuXHQgICAgY2hhbm5lbF9hdXRoX2VuZHBvaW50OiAnL3B1c2hlci9hdXRoJyxcblx0ICAgIGNoYW5uZWxfYXV0aF90cmFuc3BvcnQ6ICdhamF4Jyxcblx0ICAgIGFjdGl2aXR5X3RpbWVvdXQ6IDEyMDAwMCxcblx0ICAgIHBvbmdfdGltZW91dDogMzAwMDAsXG5cdCAgICB1bmF2YWlsYWJsZV90aW1lb3V0OiAxMDAwMCxcblx0ICAgIGNkbl9odHRwOiAnaHR0cDovL2pzLnB1c2hlci5jb20nLFxuXHQgICAgY2RuX2h0dHBzOiAnaHR0cHM6Ly9qcy5wdXNoZXIuY29tJyxcblx0ICAgIGRlcGVuZGVuY3lfc3VmZml4OiAnJ1xuXHR9O1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IERlZmF1bHRzO1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgc2NyaXB0X3JlY2VpdmVyX2ZhY3RvcnlfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgRGVwZW5kZW5jeUxvYWRlciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBEZXBlbmRlbmN5TG9hZGVyKG9wdGlvbnMpIHtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHQgICAgICAgIHRoaXMucmVjZWl2ZXJzID0gb3B0aW9ucy5yZWNlaXZlcnMgfHwgc2NyaXB0X3JlY2VpdmVyX2ZhY3RvcnlfMS5TY3JpcHRSZWNlaXZlcnM7XG5cdCAgICAgICAgdGhpcy5sb2FkaW5nID0ge307XG5cdCAgICB9XG5cdCAgICBEZXBlbmRlbmN5TG9hZGVyLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgICAgICAgIGlmIChzZWxmLmxvYWRpbmdbbmFtZV0gJiYgc2VsZi5sb2FkaW5nW25hbWVdLmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgc2VsZi5sb2FkaW5nW25hbWVdLnB1c2goY2FsbGJhY2spO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgc2VsZi5sb2FkaW5nW25hbWVdID0gW2NhbGxiYWNrXTtcblx0ICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBydW50aW1lXzFbXCJkZWZhdWx0XCJdLmNyZWF0ZVNjcmlwdFJlcXVlc3Qoc2VsZi5nZXRQYXRoKG5hbWUsIG9wdGlvbnMpKTtcblx0ICAgICAgICAgICAgdmFyIHJlY2VpdmVyID0gc2VsZi5yZWNlaXZlcnMuY3JlYXRlKGZ1bmN0aW9uIChlcnJvcikge1xuXHQgICAgICAgICAgICAgICAgc2VsZi5yZWNlaXZlcnMucmVtb3ZlKHJlY2VpdmVyKTtcblx0ICAgICAgICAgICAgICAgIGlmIChzZWxmLmxvYWRpbmdbbmFtZV0pIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gc2VsZi5sb2FkaW5nW25hbWVdO1xuXHQgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLmxvYWRpbmdbbmFtZV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uICh3YXNTdWNjZXNzZnVsKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2FzU3VjY2Vzc2Z1bCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5jbGVhbnVwKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXShlcnJvciwgc3VjY2Vzc0NhbGxiYWNrKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICByZXF1ZXN0LnNlbmQocmVjZWl2ZXIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBEZXBlbmRlbmN5TG9hZGVyLnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0ICAgICAgICB2YXIgY2RuO1xuXHQgICAgICAgIHZhciBwcm90b2NvbCA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uZ2V0RG9jdW1lbnQoKS5sb2NhdGlvbi5wcm90b2NvbDtcblx0ICAgICAgICBpZiAoKG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNyeXB0ZWQpIHx8IHByb3RvY29sID09PSBcImh0dHBzOlwiKSB7XG5cdCAgICAgICAgICAgIGNkbiA9IHRoaXMub3B0aW9ucy5jZG5faHR0cHM7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICBjZG4gPSB0aGlzLm9wdGlvbnMuY2RuX2h0dHA7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBjZG4ucmVwbGFjZSgvXFwvKiQvLCBcIlwiKSArIFwiL1wiICsgdGhpcy5vcHRpb25zLnZlcnNpb247XG5cdCAgICB9O1xuXHQgICAgRGVwZW5kZW5jeUxvYWRlci5wcm90b3R5cGUuZ2V0UGF0aCA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Um9vdChvcHRpb25zKSArICcvJyArIG5hbWUgKyB0aGlzLm9wdGlvbnMuc3VmZml4ICsgJy5qcyc7XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgcmV0dXJuIERlcGVuZGVuY3lMb2FkZXI7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRGVwZW5kZW5jeUxvYWRlcjtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGxvZ2dlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0dmFyIHJ1bnRpbWVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciB1cmxfc3RvcmVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXHR2YXIgYWpheCA9IGZ1bmN0aW9uIChjb250ZXh0LCBzb2NrZXRJZCwgY2FsbGJhY2spIHtcblx0ICAgIHZhciBzZWxmID0gdGhpcywgeGhyO1xuXHQgICAgeGhyID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5jcmVhdGVYSFIoKTtcblx0ICAgIHhoci5vcGVuKFwiUE9TVFwiLCBzZWxmLm9wdGlvbnMuYXV0aEVuZHBvaW50LCB0cnVlKTtcblx0ICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuXHQgICAgZm9yICh2YXIgaGVhZGVyTmFtZSBpbiB0aGlzLmF1dGhPcHRpb25zLmhlYWRlcnMpIHtcblx0ICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJOYW1lLCB0aGlzLmF1dGhPcHRpb25zLmhlYWRlcnNbaGVhZGVyTmFtZV0pO1xuXHQgICAgfVxuXHQgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcblx0ICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGRhdGEsIHBhcnNlZCA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcblx0ICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCAnSlNPTiByZXR1cm5lZCBmcm9tIHdlYmFwcCB3YXMgaW52YWxpZCwgeWV0IHN0YXR1cyBjb2RlIHdhcyAyMDAuIERhdGEgd2FzOiAnICsgeGhyLnJlc3BvbnNlVGV4dCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAocGFyc2VkKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIGRhdGEpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IHVybF9zdG9yZV8xW1wiZGVmYXVsdFwiXS5idWlsZExvZ1N1ZmZpeChcImF1dGhlbnRpY2F0aW9uRW5kcG9pbnRcIik7XG5cdCAgICAgICAgICAgICAgICBsb2dnZXJfMVtcImRlZmF1bHRcIl0ud2FybigoXCJDb3VsZG4ndCByZXRyaWV2ZSBhdXRoZW50aWNhdGlvbiBpbmZvLiBcIiArIHhoci5zdGF0dXMpICtcblx0ICAgICAgICAgICAgICAgICAgICAoXCJDbGllbnRzIG11c3QgYmUgYXV0aGVudGljYXRlZCB0byBqb2luIHByaXZhdGUgb3IgcHJlc2VuY2UgY2hhbm5lbHMuIFwiICsgc3VmZml4KSk7XG5cdCAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCB4aHIuc3RhdHVzKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICB4aHIuc2VuZCh0aGlzLmNvbXBvc2VRdWVyeShzb2NrZXRJZCkpO1xuXHQgICAgcmV0dXJuIHhocjtcblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBhamF4O1xuXG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgY29sbGVjdGlvbnNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBwdXNoZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdHZhciBMb2dnZXIgPSB7XG5cdCAgICBkZWJ1ZzogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBhcmdzID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcblx0ICAgICAgICAgICAgYXJnc1tfaSAtIDBdID0gYXJndW1lbnRzW19pXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKCFwdXNoZXJfMVtcImRlZmF1bHRcIl0ubG9nKSB7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcHVzaGVyXzFbXCJkZWZhdWx0XCJdLmxvZyhjb2xsZWN0aW9uc18xLnN0cmluZ2lmeS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblx0ICAgIH0sXG5cdCAgICB3YXJuOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIGFyZ3MgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuXHQgICAgICAgICAgICBhcmdzW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgbWVzc2FnZSA9IGNvbGxlY3Rpb25zXzEuc3RyaW5naWZ5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgaWYgKCh3aW5kb3cpLmNvbnNvbGUpIHtcblx0ICAgICAgICAgICAgaWYgKCh3aW5kb3cpLmNvbnNvbGUud2Fybikge1xuXHQgICAgICAgICAgICAgICAgKHdpbmRvdykuY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2UgaWYgKCh3aW5kb3cpLmNvbnNvbGUubG9nKSB7XG5cdCAgICAgICAgICAgICAgICAod2luZG93KS5jb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAocHVzaGVyXzFbXCJkZWZhdWx0XCJdLmxvZykge1xuXHQgICAgICAgICAgICBwdXNoZXJfMVtcImRlZmF1bHRcIl0ubG9nKG1lc3NhZ2UpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBMb2dnZXI7XG5cblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBiYXNlNjRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHR2YXIgdXRpbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdGZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcblx0ICAgIHZhciBzb3VyY2VzID0gW107XG5cdCAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuXHQgICAgICAgIHNvdXJjZXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG5cdCAgICB9XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICB2YXIgZXh0ZW5zaW9ucyA9IHNvdXJjZXNbaV07XG5cdCAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gZXh0ZW5zaW9ucykge1xuXHQgICAgICAgICAgICBpZiAoZXh0ZW5zaW9uc1twcm9wZXJ0eV0gJiYgZXh0ZW5zaW9uc1twcm9wZXJ0eV0uY29uc3RydWN0b3IgJiZcblx0ICAgICAgICAgICAgICAgIGV4dGVuc2lvbnNbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcblx0ICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBleHRlbmQodGFyZ2V0W3Byb3BlcnR5XSB8fCB7fSwgZXh0ZW5zaW9uc1twcm9wZXJ0eV0pO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IGV4dGVuc2lvbnNbcHJvcGVydHldO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIHRhcmdldDtcblx0fVxuXHRleHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcblx0ZnVuY3Rpb24gc3RyaW5naWZ5KCkge1xuXHQgICAgdmFyIG0gPSBbXCJQdXNoZXJcIl07XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2ldID09PSBcInN0cmluZ1wiKSB7XG5cdCAgICAgICAgICAgIG0ucHVzaChhcmd1bWVudHNbaV0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgbS5wdXNoKHNhZmVKU09OU3RyaW5naWZ5KGFyZ3VtZW50c1tpXSkpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBtLmpvaW4oXCIgOiBcIik7XG5cdH1cblx0ZXhwb3J0cy5zdHJpbmdpZnkgPSBzdHJpbmdpZnk7XG5cdGZ1bmN0aW9uIGFycmF5SW5kZXhPZihhcnJheSwgaXRlbSkge1xuXHQgICAgdmFyIG5hdGl2ZUluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcblx0ICAgIGlmIChhcnJheSA9PT0gbnVsbCkge1xuXHQgICAgICAgIHJldHVybiAtMTtcblx0ICAgIH1cblx0ICAgIGlmIChuYXRpdmVJbmRleE9mICYmIGFycmF5LmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHtcblx0ICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtKTtcblx0ICAgIH1cblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKGFycmF5W2ldID09PSBpdGVtKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiAtMTtcblx0fVxuXHRleHBvcnRzLmFycmF5SW5kZXhPZiA9IGFycmF5SW5kZXhPZjtcblx0ZnVuY3Rpb24gb2JqZWN0QXBwbHkob2JqZWN0LCBmKSB7XG5cdCAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG5cdCAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcblx0ICAgICAgICAgICAgZihvYmplY3Rba2V5XSwga2V5LCBvYmplY3QpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0fVxuXHRleHBvcnRzLm9iamVjdEFwcGx5ID0gb2JqZWN0QXBwbHk7XG5cdGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdCAgICB2YXIga2V5cyA9IFtdO1xuXHQgICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAoXywga2V5KSB7XG5cdCAgICAgICAga2V5cy5wdXNoKGtleSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBrZXlzO1xuXHR9XG5cdGV4cG9ydHMua2V5cyA9IGtleXM7XG5cdGZ1bmN0aW9uIHZhbHVlcyhvYmplY3QpIHtcblx0ICAgIHZhciB2YWx1ZXMgPSBbXTtcblx0ICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gdmFsdWVzO1xuXHR9XG5cdGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXHRmdW5jdGlvbiBhcHBseShhcnJheSwgZiwgY29udGV4dCkge1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIGYuY2FsbChjb250ZXh0IHx8ICh3aW5kb3cpLCBhcnJheVtpXSwgaSwgYXJyYXkpO1xuXHQgICAgfVxuXHR9XG5cdGV4cG9ydHMuYXBwbHkgPSBhcHBseTtcblx0ZnVuY3Rpb24gbWFwKGFycmF5LCBmKSB7XG5cdCAgICB2YXIgcmVzdWx0ID0gW107XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgcmVzdWx0LnB1c2goZihhcnJheVtpXSwgaSwgYXJyYXksIHJlc3VsdCkpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0fVxuXHRleHBvcnRzLm1hcCA9IG1hcDtcblx0ZnVuY3Rpb24gbWFwT2JqZWN0KG9iamVjdCwgZikge1xuXHQgICAgdmFyIHJlc3VsdCA9IHt9O1xuXHQgICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICAgIHJlc3VsdFtrZXldID0gZih2YWx1ZSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdH1cblx0ZXhwb3J0cy5tYXBPYmplY3QgPSBtYXBPYmplY3Q7XG5cdGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuXHQgICAgdGVzdCA9IHRlc3QgfHwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAhIXZhbHVlOyB9O1xuXHQgICAgdmFyIHJlc3VsdCA9IFtdO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIGlmICh0ZXN0KGFycmF5W2ldLCBpLCBhcnJheSwgcmVzdWx0KSkge1xuXHQgICAgICAgICAgICByZXN1bHQucHVzaChhcnJheVtpXSk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0fVxuXHRleHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcblx0ZnVuY3Rpb24gZmlsdGVyT2JqZWN0KG9iamVjdCwgdGVzdCkge1xuXHQgICAgdmFyIHJlc3VsdCA9IHt9O1xuXHQgICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICAgIGlmICgodGVzdCAmJiB0ZXN0KHZhbHVlLCBrZXksIG9iamVjdCwgcmVzdWx0KSkgfHwgQm9vbGVhbih2YWx1ZSkpIHtcblx0ICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdH1cblx0ZXhwb3J0cy5maWx0ZXJPYmplY3QgPSBmaWx0ZXJPYmplY3Q7XG5cdGZ1bmN0aW9uIGZsYXR0ZW4ob2JqZWN0KSB7XG5cdCAgICB2YXIgcmVzdWx0ID0gW107XG5cdCAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdCAgICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVdKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0fVxuXHRleHBvcnRzLmZsYXR0ZW4gPSBmbGF0dGVuO1xuXHRmdW5jdGlvbiBhbnkoYXJyYXksIHRlc3QpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBpZiAodGVzdChhcnJheVtpXSwgaSwgYXJyYXkpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBmYWxzZTtcblx0fVxuXHRleHBvcnRzLmFueSA9IGFueTtcblx0ZnVuY3Rpb24gYWxsKGFycmF5LCB0ZXN0KSB7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKCF0ZXN0KGFycmF5W2ldLCBpLCBhcnJheSkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiB0cnVlO1xuXHR9XG5cdGV4cG9ydHMuYWxsID0gYWxsO1xuXHRmdW5jdGlvbiBlbmNvZGVQYXJhbXNPYmplY3QoZGF0YSkge1xuXHQgICAgcmV0dXJuIG1hcE9iamVjdChkYXRhLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG5cdCAgICAgICAgICAgIHZhbHVlID0gc2FmZUpTT05TdHJpbmdpZnkodmFsdWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGJhc2U2NF8xW1wiZGVmYXVsdFwiXSh2YWx1ZS50b1N0cmluZygpKSk7XG5cdCAgICB9KTtcblx0fVxuXHRleHBvcnRzLmVuY29kZVBhcmFtc09iamVjdCA9IGVuY29kZVBhcmFtc09iamVjdDtcblx0ZnVuY3Rpb24gYnVpbGRRdWVyeVN0cmluZyhkYXRhKSB7XG5cdCAgICB2YXIgcGFyYW1zID0gZmlsdGVyT2JqZWN0KGRhdGEsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xuXHQgICAgfSk7XG5cdCAgICB2YXIgcXVlcnkgPSBtYXAoZmxhdHRlbihlbmNvZGVQYXJhbXNPYmplY3QocGFyYW1zKSksIHV0aWxfMVtcImRlZmF1bHRcIl0ubWV0aG9kKFwiam9pblwiLCBcIj1cIikpLmpvaW4oXCImXCIpO1xuXHQgICAgcmV0dXJuIHF1ZXJ5O1xuXHR9XG5cdGV4cG9ydHMuYnVpbGRRdWVyeVN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmc7XG5cdGZ1bmN0aW9uIGRlY3ljbGVPYmplY3Qob2JqZWN0KSB7XG5cdCAgICB2YXIgb2JqZWN0cyA9IFtdLCBwYXRocyA9IFtdO1xuXHQgICAgcmV0dXJuIChmdW5jdGlvbiBkZXJleih2YWx1ZSwgcGF0aCkge1xuXHQgICAgICAgIHZhciBpLCBuYW1lLCBudTtcblx0ICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuXHQgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuXHQgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpICs9IDEpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0c1tpXSA9PT0gdmFsdWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgJHJlZjogcGF0aHNbaV0gfTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBvYmplY3RzLnB1c2godmFsdWUpO1xuXHQgICAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcblx0ICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHQgICAgICAgICAgICAgICAgICAgIG51ID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSArPSAxKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG51W2ldID0gZGVyZXoodmFsdWVbaV0sIHBhdGggKyAnWycgKyBpICsgJ10nKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICBudSA9IHt9O1xuXHQgICAgICAgICAgICAgICAgICAgIGZvciAobmFtZSBpbiB2YWx1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBuYW1lKSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVbbmFtZV0gPSBkZXJleih2YWx1ZVtuYW1lXSwgcGF0aCArICdbJyArIEpTT04uc3RyaW5naWZ5KG5hbWUpICsgJ10nKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJldHVybiBudTtcblx0ICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcblx0ICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcblx0ICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cdCAgICAgICAgfVxuXHQgICAgfShvYmplY3QsICckJykpO1xuXHR9XG5cdGV4cG9ydHMuZGVjeWNsZU9iamVjdCA9IGRlY3ljbGVPYmplY3Q7XG5cdGZ1bmN0aW9uIHNhZmVKU09OU3RyaW5naWZ5KHNvdXJjZSkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc291cmNlKTtcblx0ICAgIH1cblx0ICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRlY3ljbGVPYmplY3Qoc291cmNlKSk7XG5cdCAgICB9XG5cdH1cblx0ZXhwb3J0cy5zYWZlSlNPTlN0cmluZ2lmeSA9IHNhZmVKU09OU3RyaW5naWZ5O1xuXG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0ZnVuY3Rpb24gZW5jb2RlKHMpIHtcblx0ICAgIHJldHVybiBidG9hKHV0b2IocykpO1xuXHR9XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZW5jb2RlO1xuXHR2YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblx0dmFyIGI2NGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXHR2YXIgYjY0dGFiID0ge307XG5cdGZvciAodmFyIGkgPSAwLCBsID0gYjY0Y2hhcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICBiNjR0YWJbYjY0Y2hhcnMuY2hhckF0KGkpXSA9IGk7XG5cdH1cblx0dmFyIGNiX3V0b2IgPSBmdW5jdGlvbiAoYykge1xuXHQgICAgdmFyIGNjID0gYy5jaGFyQ29kZUF0KDApO1xuXHQgICAgcmV0dXJuIGNjIDwgMHg4MCA/IGNcblx0ICAgICAgICA6IGNjIDwgMHg4MDAgPyBmcm9tQ2hhckNvZGUoMHhjMCB8IChjYyA+Pj4gNikpICtcblx0ICAgICAgICAgICAgZnJvbUNoYXJDb2RlKDB4ODAgfCAoY2MgJiAweDNmKSlcblx0ICAgICAgICAgICAgOiBmcm9tQ2hhckNvZGUoMHhlMCB8ICgoY2MgPj4+IDEyKSAmIDB4MGYpKSArXG5cdCAgICAgICAgICAgICAgICBmcm9tQ2hhckNvZGUoMHg4MCB8ICgoY2MgPj4+IDYpICYgMHgzZikpICtcblx0ICAgICAgICAgICAgICAgIGZyb21DaGFyQ29kZSgweDgwIHwgKGNjICYgMHgzZikpO1xuXHR9O1xuXHR2YXIgdXRvYiA9IGZ1bmN0aW9uICh1KSB7XG5cdCAgICByZXR1cm4gdS5yZXBsYWNlKC9bXlxceDAwLVxceDdGXS9nLCBjYl91dG9iKTtcblx0fTtcblx0dmFyIGNiX2VuY29kZSA9IGZ1bmN0aW9uIChjY2MpIHtcblx0ICAgIHZhciBwYWRsZW4gPSBbMCwgMiwgMV1bY2NjLmxlbmd0aCAlIDNdO1xuXHQgICAgdmFyIG9yZCA9IGNjYy5jaGFyQ29kZUF0KDApIDw8IDE2XG5cdCAgICAgICAgfCAoKGNjYy5sZW5ndGggPiAxID8gY2NjLmNoYXJDb2RlQXQoMSkgOiAwKSA8PCA4KVxuXHQgICAgICAgIHwgKChjY2MubGVuZ3RoID4gMiA/IGNjYy5jaGFyQ29kZUF0KDIpIDogMCkpO1xuXHQgICAgdmFyIGNoYXJzID0gW1xuXHQgICAgICAgIGI2NGNoYXJzLmNoYXJBdChvcmQgPj4+IDE4KSxcblx0ICAgICAgICBiNjRjaGFycy5jaGFyQXQoKG9yZCA+Pj4gMTIpICYgNjMpLFxuXHQgICAgICAgIHBhZGxlbiA+PSAyID8gJz0nIDogYjY0Y2hhcnMuY2hhckF0KChvcmQgPj4+IDYpICYgNjMpLFxuXHQgICAgICAgIHBhZGxlbiA+PSAxID8gJz0nIDogYjY0Y2hhcnMuY2hhckF0KG9yZCAmIDYzKVxuXHQgICAgXTtcblx0ICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcblx0fTtcblx0dmFyIGJ0b2EgPSAod2luZG93KS5idG9hIHx8IGZ1bmN0aW9uIChiKSB7XG5cdCAgICByZXR1cm4gYi5yZXBsYWNlKC9bXFxzXFxTXXsxLDN9L2csIGNiX2VuY29kZSk7XG5cdH07XG5cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgdGltZXJzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblx0dmFyIFV0aWwgPSB7XG5cdCAgICBub3c6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAoRGF0ZS5ub3cpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSxcblx0ICAgIGRlZmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0ICAgICAgICByZXR1cm4gbmV3IHRpbWVyc18xLk9uZU9mZlRpbWVyKDAsIGNhbGxiYWNrKTtcblx0ICAgIH0sXG5cdCAgICBtZXRob2Q6IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICAgICAgdmFyIGFyZ3MgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuXHQgICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgYm91bmRBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqZWN0KSB7XG5cdCAgICAgICAgICAgIHJldHVybiBvYmplY3RbbmFtZV0uYXBwbHkob2JqZWN0LCBib3VuZEFyZ3VtZW50cy5jb25jYXQoYXJndW1lbnRzKSk7XG5cdCAgICAgICAgfTtcblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBVdGlsO1xuXG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuXHQgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG5cdCAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cblx0ICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcblx0fTtcblx0dmFyIGFic3RyYWN0X3RpbWVyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblx0ZnVuY3Rpb24gY2xlYXJUaW1lb3V0KHRpbWVyKSB7XG5cdCAgICAod2luZG93KS5jbGVhclRpbWVvdXQodGltZXIpO1xuXHR9XG5cdGZ1bmN0aW9uIGNsZWFySW50ZXJ2YWwodGltZXIpIHtcblx0ICAgICh3aW5kb3cpLmNsZWFySW50ZXJ2YWwodGltZXIpO1xuXHR9XG5cdHZhciBPbmVPZmZUaW1lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoT25lT2ZmVGltZXIsIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBPbmVPZmZUaW1lcihkZWxheSwgY2FsbGJhY2spIHtcblx0ICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBzZXRUaW1lb3V0LCBjbGVhclRpbWVvdXQsIGRlbGF5LCBmdW5jdGlvbiAodGltZXIpIHtcblx0ICAgICAgICAgICAgY2FsbGJhY2soKTtcblx0ICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgICAgfSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gT25lT2ZmVGltZXI7XG5cdH0oYWJzdHJhY3RfdGltZXJfMVtcImRlZmF1bHRcIl0pKTtcblx0ZXhwb3J0cy5PbmVPZmZUaW1lciA9IE9uZU9mZlRpbWVyO1xuXHR2YXIgUGVyaW9kaWNUaW1lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoUGVyaW9kaWNUaW1lciwgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIFBlcmlvZGljVGltZXIoZGVsYXksIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwsIGRlbGF5LCBmdW5jdGlvbiAodGltZXIpIHtcblx0ICAgICAgICAgICAgY2FsbGJhY2soKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHRpbWVyO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIFBlcmlvZGljVGltZXI7XG5cdH0oYWJzdHJhY3RfdGltZXJfMVtcImRlZmF1bHRcIl0pKTtcblx0ZXhwb3J0cy5QZXJpb2RpY1RpbWVyID0gUGVyaW9kaWNUaW1lcjtcblxuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBUaW1lciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBUaW1lcihzZXQsIGNsZWFyLCBkZWxheSwgY2FsbGJhY2spIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHRoaXMuY2xlYXIgPSBjbGVhcjtcblx0ICAgICAgICB0aGlzLnRpbWVyID0gc2V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgaWYgKF90aGlzLnRpbWVyKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy50aW1lciA9IGNhbGxiYWNrKF90aGlzLnRpbWVyKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sIGRlbGF5KTtcblx0ICAgIH1cblx0ICAgIFRpbWVyLnByb3RvdHlwZS5pc1J1bm5pbmcgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMudGltZXIgIT09IG51bGw7XG5cdCAgICB9O1xuXHQgICAgVGltZXIucHJvdG90eXBlLmVuc3VyZUFib3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcblx0ICAgICAgICAgICAgdGhpcy5jbGVhcih0aGlzLnRpbWVyKTtcblx0ICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIHJldHVybiBUaW1lcjtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUaW1lcjtcblxuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciB1cmxTdG9yZSA9IHtcblx0ICAgIGJhc2VVcmw6IFwiaHR0cHM6Ly9wdXNoZXIuY29tXCIsXG5cdCAgICB1cmxzOiB7XG5cdCAgICAgICAgYXV0aGVudGljYXRpb25FbmRwb2ludDoge1xuXHQgICAgICAgICAgICBwYXRoOiBcIi9kb2NzL2F1dGhlbnRpY2F0aW5nX3VzZXJzXCJcblx0ICAgICAgICB9LFxuXHQgICAgICAgIGphdmFzY3JpcHRRdWlja1N0YXJ0OiB7XG5cdCAgICAgICAgICAgIHBhdGg6IFwiL2RvY3MvamF2YXNjcmlwdF9xdWlja19zdGFydFwiXG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHR9O1xuXHR2YXIgYnVpbGRMb2dTdWZmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICB2YXIgdXJsUHJlZml4ID0gXCJTZWU6XCI7XG5cdCAgICB2YXIgdXJsT2JqID0gdXJsU3RvcmUudXJsc1trZXldO1xuXHQgICAgaWYgKCF1cmxPYmopXG5cdCAgICAgICAgcmV0dXJuIFwiXCI7XG5cdCAgICB2YXIgdXJsO1xuXHQgICAgaWYgKHVybE9iai5mdWxsVXJsKSB7XG5cdCAgICAgICAgdXJsID0gdXJsT2JqLmZ1bGxVcmw7XG5cdCAgICB9XG5cdCAgICBlbHNlIGlmICh1cmxPYmoucGF0aCkge1xuXHQgICAgICAgIHVybCA9IHVybFN0b3JlLmJhc2VVcmwgKyB1cmxPYmoucGF0aDtcblx0ICAgIH1cblx0ICAgIGlmICghdXJsKVxuXHQgICAgICAgIHJldHVybiBcIlwiO1xuXHQgICAgcmV0dXJuIHVybFByZWZpeCArIFwiIFwiICsgdXJsO1xuXHR9O1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHsgYnVpbGRMb2dTdWZmaXg6IGJ1aWxkTG9nU3VmZml4IH07XG5cblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgbG9nZ2VyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHR2YXIganNvbnAgPSBmdW5jdGlvbiAoY29udGV4dCwgc29ja2V0SWQsIGNhbGxiYWNrKSB7XG5cdCAgICBpZiAodGhpcy5hdXRoT3B0aW9ucy5oZWFkZXJzICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICBsb2dnZXJfMVtcImRlZmF1bHRcIl0ud2FybihcIldhcm5cIiwgXCJUbyBzZW5kIGhlYWRlcnMgd2l0aCB0aGUgYXV0aCByZXF1ZXN0LCB5b3UgbXVzdCB1c2UgQUpBWCwgcmF0aGVyIHRoYW4gSlNPTlAuXCIpO1xuXHQgICAgfVxuXHQgICAgdmFyIGNhbGxiYWNrTmFtZSA9IGNvbnRleHQubmV4dEF1dGhDYWxsYmFja0lELnRvU3RyaW5nKCk7XG5cdCAgICBjb250ZXh0Lm5leHRBdXRoQ2FsbGJhY2tJRCsrO1xuXHQgICAgdmFyIGRvY3VtZW50ID0gY29udGV4dC5nZXREb2N1bWVudCgpO1xuXHQgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdCAgICBjb250ZXh0LmF1dGhfY2FsbGJhY2tzW2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgIGNhbGxiYWNrKGZhbHNlLCBkYXRhKTtcblx0ICAgIH07XG5cdCAgICB2YXIgY2FsbGJhY2tfbmFtZSA9IFwiUHVzaGVyLmF1dGhfY2FsbGJhY2tzWydcIiArIGNhbGxiYWNrTmFtZSArIFwiJ11cIjtcblx0ICAgIHNjcmlwdC5zcmMgPSB0aGlzLm9wdGlvbnMuYXV0aEVuZHBvaW50ICtcblx0ICAgICAgICAnP2NhbGxiYWNrPScgK1xuXHQgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChjYWxsYmFja19uYW1lKSArXG5cdCAgICAgICAgJyYnICtcblx0ICAgICAgICB0aGlzLmNvbXBvc2VRdWVyeShzb2NrZXRJZCk7XG5cdCAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdCAgICBoZWFkLmluc2VydEJlZm9yZShzY3JpcHQsIGhlYWQuZmlyc3RDaGlsZCk7XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0ganNvbnA7XG5cblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgU2NyaXB0UmVxdWVzdCA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBTY3JpcHRSZXF1ZXN0KHNyYykge1xuXHQgICAgICAgIHRoaXMuc3JjID0gc3JjO1xuXHQgICAgfVxuXHQgICAgU2NyaXB0UmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChyZWNlaXZlcikge1xuXHQgICAgICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgICAgICB2YXIgZXJyb3JTdHJpbmcgPSBcIkVycm9yIGxvYWRpbmcgXCIgKyBzZWxmLnNyYztcblx0ICAgICAgICBzZWxmLnNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdCAgICAgICAgc2VsZi5zY3JpcHQuaWQgPSByZWNlaXZlci5pZDtcblx0ICAgICAgICBzZWxmLnNjcmlwdC5zcmMgPSBzZWxmLnNyYztcblx0ICAgICAgICBzZWxmLnNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcblx0ICAgICAgICBzZWxmLnNjcmlwdC5jaGFyc2V0ID0gXCJVVEYtOFwiO1xuXHQgICAgICAgIGlmIChzZWxmLnNjcmlwdC5hZGRFdmVudExpc3RlbmVyKSB7XG5cdCAgICAgICAgICAgIHNlbGYuc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICByZWNlaXZlci5jYWxsYmFjayhlcnJvclN0cmluZyk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgIHNlbGYuc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJlY2VpdmVyLmNhbGxiYWNrKG51bGwpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgc2VsZi5zY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHNlbGYuc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8XG5cdCAgICAgICAgICAgICAgICAgICAgc2VsZi5zY3JpcHQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuXHQgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVyLmNhbGxiYWNrKG51bGwpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoc2VsZi5zY3JpcHQuYXN5bmMgPT09IHVuZGVmaW5lZCAmJiBkb2N1bWVudC5hdHRhY2hFdmVudCAmJlxuXHQgICAgICAgICAgICAvb3BlcmEvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdCAgICAgICAgICAgIHNlbGYuZXJyb3JTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHQgICAgICAgICAgICBzZWxmLmVycm9yU2NyaXB0LmlkID0gcmVjZWl2ZXIuaWQgKyBcIl9lcnJvclwiO1xuXHQgICAgICAgICAgICBzZWxmLmVycm9yU2NyaXB0LnRleHQgPSByZWNlaXZlci5uYW1lICsgXCIoJ1wiICsgZXJyb3JTdHJpbmcgKyBcIicpO1wiO1xuXHQgICAgICAgICAgICBzZWxmLnNjcmlwdC5hc3luYyA9IHNlbGYuZXJyb3JTY3JpcHQuYXN5bmMgPSBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHNlbGYuc2NyaXB0LmFzeW5jID0gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuXHQgICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHNlbGYuc2NyaXB0LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHQgICAgICAgIGlmIChzZWxmLmVycm9yU2NyaXB0KSB7XG5cdCAgICAgICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHNlbGYuZXJyb3JTY3JpcHQsIHNlbGYuc2NyaXB0Lm5leHRTaWJsaW5nKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgU2NyaXB0UmVxdWVzdC5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy5zY3JpcHQpIHtcblx0ICAgICAgICAgICAgdGhpcy5zY3JpcHQub25sb2FkID0gdGhpcy5zY3JpcHQub25lcnJvciA9IG51bGw7XG5cdCAgICAgICAgICAgIHRoaXMuc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICh0aGlzLnNjcmlwdCAmJiB0aGlzLnNjcmlwdC5wYXJlbnROb2RlKSB7XG5cdCAgICAgICAgICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAodGhpcy5lcnJvclNjcmlwdCAmJiB0aGlzLmVycm9yU2NyaXB0LnBhcmVudE5vZGUpIHtcblx0ICAgICAgICAgICAgdGhpcy5lcnJvclNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZXJyb3JTY3JpcHQpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG5cdCAgICAgICAgdGhpcy5lcnJvclNjcmlwdCA9IG51bGw7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIFNjcmlwdFJlcXVlc3Q7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2NyaXB0UmVxdWVzdDtcblxuXG4vKioqLyB9KSxcbi8qIDE3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBDb2xsZWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgSlNPTlBSZXF1ZXN0ID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIEpTT05QUmVxdWVzdCh1cmwsIGRhdGEpIHtcblx0ICAgICAgICB0aGlzLnVybCA9IHVybDtcblx0ICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXHQgICAgfVxuXHQgICAgSlNPTlBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHJlY2VpdmVyKSB7XG5cdCAgICAgICAgaWYgKHRoaXMucmVxdWVzdCkge1xuXHQgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBxdWVyeSA9IENvbGxlY3Rpb25zLmJ1aWxkUXVlcnlTdHJpbmcodGhpcy5kYXRhKTtcblx0ICAgICAgICB2YXIgdXJsID0gdGhpcy51cmwgKyBcIi9cIiArIHJlY2VpdmVyLm51bWJlciArIFwiP1wiICsgcXVlcnk7XG5cdCAgICAgICAgdGhpcy5yZXF1ZXN0ID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5jcmVhdGVTY3JpcHRSZXF1ZXN0KHVybCk7XG5cdCAgICAgICAgdGhpcy5yZXF1ZXN0LnNlbmQocmVjZWl2ZXIpO1xuXHQgICAgfTtcblx0ICAgIEpTT05QUmVxdWVzdC5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy5yZXF1ZXN0KSB7XG5cdCAgICAgICAgICAgIHRoaXMucmVxdWVzdC5jbGVhbnVwKCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIHJldHVybiBKU09OUFJlcXVlc3Q7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSlNPTlBSZXF1ZXN0O1xuXG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIHJ1bnRpbWVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBzY3JpcHRfcmVjZWl2ZXJfZmFjdG9yeV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0dmFyIGdldEFnZW50ID0gZnVuY3Rpb24gKHNlbmRlciwgZW5jcnlwdGVkKSB7XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIHNjaGVtZSA9IFwiaHR0cFwiICsgKGVuY3J5cHRlZCA/IFwic1wiIDogXCJcIikgKyBcIjovL1wiO1xuXHQgICAgICAgIHZhciB1cmwgPSBzY2hlbWUgKyAoc2VuZGVyLmhvc3QgfHwgc2VuZGVyLm9wdGlvbnMuaG9zdCkgKyBzZW5kZXIub3B0aW9ucy5wYXRoO1xuXHQgICAgICAgIHZhciByZXF1ZXN0ID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5jcmVhdGVKU09OUFJlcXVlc3QodXJsLCBkYXRhKTtcblx0ICAgICAgICB2YXIgcmVjZWl2ZXIgPSBydW50aW1lXzFbXCJkZWZhdWx0XCJdLlNjcmlwdFJlY2VpdmVycy5jcmVhdGUoZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcblx0ICAgICAgICAgICAgc2NyaXB0X3JlY2VpdmVyX2ZhY3RvcnlfMS5TY3JpcHRSZWNlaXZlcnMucmVtb3ZlKHJlY2VpdmVyKTtcblx0ICAgICAgICAgICAgcmVxdWVzdC5jbGVhbnVwKCk7XG5cdCAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmhvc3QpIHtcblx0ICAgICAgICAgICAgICAgIHNlbmRlci5ob3N0ID0gcmVzdWx0Lmhvc3Q7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJlcXVlc3Quc2VuZChyZWNlaXZlcik7XG5cdCAgICB9O1xuXHR9O1xuXHR2YXIganNvbnAgPSB7XG5cdCAgICBuYW1lOiAnanNvbnAnLFxuXHQgICAgZ2V0QWdlbnQ6IGdldEFnZW50XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0ganNvbnA7XG5cblxuLyoqKi8gfSksXG4vKiAxOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgdHJhbnNwb3J0c18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cdHZhciB0cmFuc3BvcnRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xuXHR2YXIgVVJMU2NoZW1lcyA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xuXHR2YXIgcnVudGltZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIGRlcGVuZGVuY2llc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIFNvY2tKU1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfMVtcImRlZmF1bHRcIl0oe1xuXHQgICAgZmlsZTogXCJzb2NranNcIixcblx0ICAgIHVybHM6IFVSTFNjaGVtZXMuc29ja2pzLFxuXHQgICAgaGFuZGxlc0FjdGl2aXR5Q2hlY2tzOiB0cnVlLFxuXHQgICAgc3VwcG9ydHNQaW5nOiBmYWxzZSxcblx0ICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9LFxuXHQgICAgaXNJbml0aWFsaXplZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB3aW5kb3cuU29ja0pTICE9PSB1bmRlZmluZWQ7XG5cdCAgICB9LFxuXHQgICAgZ2V0U29ja2V0OiBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuU29ja0pTKHVybCwgbnVsbCwge1xuXHQgICAgICAgICAgICBqc19wYXRoOiBkZXBlbmRlbmNpZXNfMS5EZXBlbmRlbmNpZXMuZ2V0UGF0aChcInNvY2tqc1wiLCB7XG5cdCAgICAgICAgICAgICAgICBlbmNyeXB0ZWQ6IG9wdGlvbnMuZW5jcnlwdGVkXG5cdCAgICAgICAgICAgIH0pLFxuXHQgICAgICAgICAgICBpZ25vcmVfbnVsbF9vcmlnaW46IG9wdGlvbnMuaWdub3JlTnVsbE9yaWdpblxuXHQgICAgICAgIH0pO1xuXHQgICAgfSxcblx0ICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uIChzb2NrZXQsIHBhdGgpIHtcblx0ICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7XG5cdCAgICAgICAgICAgIHBhdGg6IHBhdGhcblx0ICAgICAgICB9KSk7XG5cdCAgICB9XG5cdH0pO1xuXHR2YXIgeGRyQ29uZmlndXJhdGlvbiA9IHtcblx0ICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoZW52aXJvbm1lbnQpIHtcblx0ICAgICAgICB2YXIgeWVzID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5pc1hEUlN1cHBvcnRlZChlbnZpcm9ubWVudC5lbmNyeXB0ZWQpO1xuXHQgICAgICAgIHJldHVybiB5ZXM7XG5cdCAgICB9XG5cdH07XG5cdHZhciBYRFJTdHJlYW1pbmdUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0XzFbXCJkZWZhdWx0XCJdKENvbGxlY3Rpb25zLmV4dGVuZCh7fSwgdHJhbnNwb3J0c18xLnN0cmVhbWluZ0NvbmZpZ3VyYXRpb24sIHhkckNvbmZpZ3VyYXRpb24pKTtcblx0dmFyIFhEUlBvbGxpbmdUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0XzFbXCJkZWZhdWx0XCJdKENvbGxlY3Rpb25zLmV4dGVuZCh7fSwgdHJhbnNwb3J0c18xLnBvbGxpbmdDb25maWd1cmF0aW9uLCB4ZHJDb25maWd1cmF0aW9uKSk7XG5cdHRyYW5zcG9ydHNfMVtcImRlZmF1bHRcIl0ueGRyX3N0cmVhbWluZyA9IFhEUlN0cmVhbWluZ1RyYW5zcG9ydDtcblx0dHJhbnNwb3J0c18xW1wiZGVmYXVsdFwiXS54ZHJfcG9sbGluZyA9IFhEUlBvbGxpbmdUcmFuc3BvcnQ7XG5cdHRyYW5zcG9ydHNfMVtcImRlZmF1bHRcIl0uc29ja2pzID0gU29ja0pTVHJhbnNwb3J0O1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHRyYW5zcG9ydHNfMVtcImRlZmF1bHRcIl07XG5cblxuLyoqKi8gfSksXG4vKiAyMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgVVJMU2NoZW1lcyA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xuXHR2YXIgdHJhbnNwb3J0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIHJ1bnRpbWVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBXU1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfMVtcImRlZmF1bHRcIl0oe1xuXHQgICAgdXJsczogVVJMU2NoZW1lcy53cyxcblx0ICAgIGhhbmRsZXNBY3Rpdml0eUNoZWNrczogZmFsc2UsXG5cdCAgICBzdXBwb3J0c1Bpbmc6IGZhbHNlLFxuXHQgICAgaXNJbml0aWFsaXplZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBCb29sZWFuKHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uZ2V0V2ViU29ja2V0QVBJKCkpO1xuXHQgICAgfSxcblx0ICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVudGltZV8xW1wiZGVmYXVsdFwiXS5nZXRXZWJTb2NrZXRBUEkoKSk7XG5cdCAgICB9LFxuXHQgICAgZ2V0U29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG5cdCAgICAgICAgcmV0dXJuIHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uY3JlYXRlV2ViU29ja2V0KHVybCk7XG5cdCAgICB9XG5cdH0pO1xuXHR2YXIgaHR0cENvbmZpZ3VyYXRpb24gPSB7XG5cdCAgICB1cmxzOiBVUkxTY2hlbWVzLmh0dHAsXG5cdCAgICBoYW5kbGVzQWN0aXZpdHlDaGVja3M6IGZhbHNlLFxuXHQgICAgc3VwcG9ydHNQaW5nOiB0cnVlLFxuXHQgICAgaXNJbml0aWFsaXplZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfVxuXHR9O1xuXHRleHBvcnRzLnN0cmVhbWluZ0NvbmZpZ3VyYXRpb24gPSBDb2xsZWN0aW9ucy5leHRlbmQoeyBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcblx0ICAgICAgICByZXR1cm4gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5IVFRQRmFjdG9yeS5jcmVhdGVTdHJlYW1pbmdTb2NrZXQodXJsKTtcblx0ICAgIH1cblx0fSwgaHR0cENvbmZpZ3VyYXRpb24pO1xuXHRleHBvcnRzLnBvbGxpbmdDb25maWd1cmF0aW9uID0gQ29sbGVjdGlvbnMuZXh0ZW5kKHsgZ2V0U29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG5cdCAgICAgICAgcmV0dXJuIHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uSFRUUEZhY3RvcnkuY3JlYXRlUG9sbGluZ1NvY2tldCh1cmwpO1xuXHQgICAgfVxuXHR9LCBodHRwQ29uZmlndXJhdGlvbik7XG5cdHZhciB4aHJDb25maWd1cmF0aW9uID0ge1xuXHQgICAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5pc1hIUlN1cHBvcnRlZCgpO1xuXHQgICAgfVxuXHR9O1xuXHR2YXIgWEhSU3RyZWFtaW5nVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydF8xW1wiZGVmYXVsdFwiXShDb2xsZWN0aW9ucy5leHRlbmQoe30sIGV4cG9ydHMuc3RyZWFtaW5nQ29uZmlndXJhdGlvbiwgeGhyQ29uZmlndXJhdGlvbikpO1xuXHR2YXIgWEhSUG9sbGluZ1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfMVtcImRlZmF1bHRcIl0oQ29sbGVjdGlvbnMuZXh0ZW5kKHt9LCBleHBvcnRzLnBvbGxpbmdDb25maWd1cmF0aW9uLCB4aHJDb25maWd1cmF0aW9uKSk7XG5cdHZhciBUcmFuc3BvcnRzID0ge1xuXHQgICAgd3M6IFdTVHJhbnNwb3J0LFxuXHQgICAgeGhyX3N0cmVhbWluZzogWEhSU3RyZWFtaW5nVHJhbnNwb3J0LFxuXHQgICAgeGhyX3BvbGxpbmc6IFhIUlBvbGxpbmdUcmFuc3BvcnRcblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUcmFuc3BvcnRzO1xuXG5cbi8qKiovIH0pLFxuLyogMjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGRlZmF1bHRzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRmdW5jdGlvbiBnZXRHZW5lcmljVVJMKGJhc2VTY2hlbWUsIHBhcmFtcywgcGF0aCkge1xuXHQgICAgdmFyIHNjaGVtZSA9IGJhc2VTY2hlbWUgKyAocGFyYW1zLmVuY3J5cHRlZCA/IFwic1wiIDogXCJcIik7XG5cdCAgICB2YXIgaG9zdCA9IHBhcmFtcy5lbmNyeXB0ZWQgPyBwYXJhbXMuaG9zdEVuY3J5cHRlZCA6IHBhcmFtcy5ob3N0VW5lbmNyeXB0ZWQ7XG5cdCAgICByZXR1cm4gc2NoZW1lICsgXCI6Ly9cIiArIGhvc3QgKyBwYXRoO1xuXHR9XG5cdGZ1bmN0aW9uIGdldEdlbmVyaWNQYXRoKGtleSwgcXVlcnlTdHJpbmcpIHtcblx0ICAgIHZhciBwYXRoID0gXCIvYXBwL1wiICsga2V5O1xuXHQgICAgdmFyIHF1ZXJ5ID0gXCI/cHJvdG9jb2w9XCIgKyBkZWZhdWx0c18xW1wiZGVmYXVsdFwiXS5QUk9UT0NPTCArXG5cdCAgICAgICAgXCImY2xpZW50PWpzXCIgK1xuXHQgICAgICAgIFwiJnZlcnNpb249XCIgKyBkZWZhdWx0c18xW1wiZGVmYXVsdFwiXS5WRVJTSU9OICtcblx0ICAgICAgICAocXVlcnlTdHJpbmcgPyAoXCImXCIgKyBxdWVyeVN0cmluZykgOiBcIlwiKTtcblx0ICAgIHJldHVybiBwYXRoICsgcXVlcnk7XG5cdH1cblx0ZXhwb3J0cy53cyA9IHtcblx0ICAgIGdldEluaXRpYWw6IGZ1bmN0aW9uIChrZXksIHBhcmFtcykge1xuXHQgICAgICAgIHJldHVybiBnZXRHZW5lcmljVVJMKFwid3NcIiwgcGFyYW1zLCBnZXRHZW5lcmljUGF0aChrZXksIFwiZmxhc2g9ZmFsc2VcIikpO1xuXHQgICAgfVxuXHR9O1xuXHRleHBvcnRzLmh0dHAgPSB7XG5cdCAgICBnZXRJbml0aWFsOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcblx0ICAgICAgICB2YXIgcGF0aCA9IChwYXJhbXMuaHR0cFBhdGggfHwgXCIvcHVzaGVyXCIpICsgZ2V0R2VuZXJpY1BhdGgoa2V5KTtcblx0ICAgICAgICByZXR1cm4gZ2V0R2VuZXJpY1VSTChcImh0dHBcIiwgcGFyYW1zLCBwYXRoKTtcblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5zb2NranMgPSB7XG5cdCAgICBnZXRJbml0aWFsOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcblx0ICAgICAgICByZXR1cm4gZ2V0R2VuZXJpY1VSTChcImh0dHBcIiwgcGFyYW1zLCBwYXJhbXMuaHR0cFBhdGggfHwgXCIvcHVzaGVyXCIpO1xuXHQgICAgfSxcblx0ICAgIGdldFBhdGg6IGZ1bmN0aW9uIChrZXksIHBhcmFtcykge1xuXHQgICAgICAgIHJldHVybiBnZXRHZW5lcmljUGF0aChrZXkpO1xuXHQgICAgfVxuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMjIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIHRyYW5zcG9ydF9jb25uZWN0aW9uXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcblx0dmFyIFRyYW5zcG9ydCA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBUcmFuc3BvcnQoaG9va3MpIHtcblx0ICAgICAgICB0aGlzLmhvb2tzID0gaG9va3M7XG5cdCAgICB9XG5cdCAgICBUcmFuc3BvcnQucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKGVudmlyb25tZW50KSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuaG9va3MuaXNTdXBwb3J0ZWQoZW52aXJvbm1lbnQpO1xuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydC5wcm90b3R5cGUuY3JlYXRlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyB0cmFuc3BvcnRfY29ubmVjdGlvbl8xW1wiZGVmYXVsdFwiXSh0aGlzLmhvb2tzLCBuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gVHJhbnNwb3J0O1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFRyYW5zcG9ydDtcblxuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcblx0ICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuXHQgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG5cdCAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG5cdH07XG5cdHZhciB1dGlsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIGRpc3BhdGNoZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXHR2YXIgbG9nZ2VyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHR2YXIgcnVudGltZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIFRyYW5zcG9ydENvbm5lY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuXHQgICAgX19leHRlbmRzKFRyYW5zcG9ydENvbm5lY3Rpb24sIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBUcmFuc3BvcnRDb25uZWN0aW9uKGhvb2tzLCBuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKSB7XG5cdCAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG5cdCAgICAgICAgdGhpcy5pbml0aWFsaXplID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS50cmFuc3BvcnRDb25uZWN0aW9uSW5pdGlhbGl6ZXI7XG5cdCAgICAgICAgdGhpcy5ob29rcyA9IGhvb2tzO1xuXHQgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG5cdCAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHQgICAgICAgIHRoaXMua2V5ID0ga2V5O1xuXHQgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdCAgICAgICAgdGhpcy5zdGF0ZSA9IFwibmV3XCI7XG5cdCAgICAgICAgdGhpcy50aW1lbGluZSA9IG9wdGlvbnMudGltZWxpbmU7XG5cdCAgICAgICAgdGhpcy5hY3Rpdml0eVRpbWVvdXQgPSBvcHRpb25zLmFjdGl2aXR5VGltZW91dDtcblx0ICAgICAgICB0aGlzLmlkID0gdGhpcy50aW1lbGluZS5nZW5lcmF0ZVVuaXF1ZUlEKCk7XG5cdCAgICB9XG5cdCAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5oYW5kbGVzQWN0aXZpdHlDaGVja3MgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5ob29rcy5oYW5kbGVzQWN0aXZpdHlDaGVja3MpO1xuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnN1cHBvcnRzUGluZyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmhvb2tzLnN1cHBvcnRzUGluZyk7XG5cdCAgICB9O1xuXHQgICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIGlmICh0aGlzLnNvY2tldCB8fCB0aGlzLnN0YXRlICE9PSBcImluaXRpYWxpemVkXCIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgdXJsID0gdGhpcy5ob29rcy51cmxzLmdldEluaXRpYWwodGhpcy5rZXksIHRoaXMub3B0aW9ucyk7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSB0aGlzLmhvb2tzLmdldFNvY2tldCh1cmwsIHRoaXMub3B0aW9ucyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgIHV0aWxfMVtcImRlZmF1bHRcIl0uZGVmZXIoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMub25FcnJvcihlKTtcblx0ICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZVN0YXRlKFwiY2xvc2VkXCIpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLmJpbmRMaXN0ZW5lcnMoKTtcblx0ICAgICAgICBsb2dnZXJfMVtcImRlZmF1bHRcIl0uZGVidWcoXCJDb25uZWN0aW5nXCIsIHsgdHJhbnNwb3J0OiB0aGlzLm5hbWUsIHVybDogdXJsIH0pO1xuXHQgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXCJjb25uZWN0aW5nXCIpO1xuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLnNvY2tldCkge1xuXHQgICAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJvcGVuXCIpIHtcblx0ICAgICAgICAgICAgdXRpbF8xW1wiZGVmYXVsdFwiXS5kZWZlcihmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc29ja2V0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgX3RoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUucGluZyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJvcGVuXCIgJiYgdGhpcy5zdXBwb3J0c1BpbmcoKSkge1xuXHQgICAgICAgICAgICB0aGlzLnNvY2tldC5waW5nKCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy5ob29rcy5iZWZvcmVPcGVuKSB7XG5cdCAgICAgICAgICAgIHRoaXMuaG9va3MuYmVmb3JlT3Blbih0aGlzLnNvY2tldCwgdGhpcy5ob29rcy51cmxzLmdldFBhdGgodGhpcy5rZXksIHRoaXMub3B0aW9ucykpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFwib3BlblwiKTtcblx0ICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSB1bmRlZmluZWQ7XG5cdCAgICB9O1xuXHQgICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHQgICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIHsgdHlwZTogJ1dlYlNvY2tldEVycm9yJywgZXJyb3I6IGVycm9yIH0pO1xuXHQgICAgICAgIHRoaXMudGltZWxpbmUuZXJyb3IodGhpcy5idWlsZFRpbWVsaW5lTWVzc2FnZSh7IGVycm9yOiBlcnJvci50b1N0cmluZygpIH0pKTtcblx0ICAgIH07XG5cdCAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcblx0ICAgICAgICBpZiAoY2xvc2VFdmVudCkge1xuXHQgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFwiY2xvc2VkXCIsIHtcblx0ICAgICAgICAgICAgICAgIGNvZGU6IGNsb3NlRXZlbnQuY29kZSxcblx0ICAgICAgICAgICAgICAgIHJlYXNvbjogY2xvc2VFdmVudC5yZWFzb24sXG5cdCAgICAgICAgICAgICAgICB3YXNDbGVhbjogY2xvc2VFdmVudC53YXNDbGVhblxuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXCJjbG9zZWRcIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG5cdCAgICAgICAgdGhpcy5zb2NrZXQgPSB1bmRlZmluZWQ7XG5cdCAgICB9O1xuXHQgICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0ICAgICAgICB0aGlzLmVtaXQoXCJtZXNzYWdlXCIsIG1lc3NhZ2UpO1xuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLm9uQWN0aXZpdHkgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5lbWl0KFwiYWN0aXZpdHlcIik7XG5cdCAgICB9O1xuXHQgICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgX3RoaXMub25PcGVuKCk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG5cdCAgICAgICAgICAgIF90aGlzLm9uRXJyb3IoZXJyb3IpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG5cdCAgICAgICAgICAgIF90aGlzLm9uQ2xvc2UoY2xvc2VFdmVudCk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHQgICAgICAgICAgICBfdGhpcy5vbk1lc3NhZ2UobWVzc2FnZSk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1BpbmcoKSkge1xuXHQgICAgICAgICAgICB0aGlzLnNvY2tldC5vbmFjdGl2aXR5ID0gZnVuY3Rpb24gKCkgeyBfdGhpcy5vbkFjdGl2aXR5KCk7IH07XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnVuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUGluZygpKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5vbmFjdGl2aXR5ID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMpIHtcblx0ICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cdCAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHRoaXMuYnVpbGRUaW1lbGluZU1lc3NhZ2Uoe1xuXHQgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG5cdCAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG5cdCAgICAgICAgfSkpO1xuXHQgICAgICAgIHRoaXMuZW1pdChzdGF0ZSwgcGFyYW1zKTtcblx0ICAgIH07XG5cdCAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5idWlsZFRpbWVsaW5lTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG5cdCAgICAgICAgcmV0dXJuIENvbGxlY3Rpb25zLmV4dGVuZCh7IGNpZDogdGhpcy5pZCB9LCBtZXNzYWdlKTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gVHJhbnNwb3J0Q29ubmVjdGlvbjtcblx0fShkaXNwYXRjaGVyXzFbXCJkZWZhdWx0XCJdKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVHJhbnNwb3J0Q29ubmVjdGlvbjtcblxuXG4vKioqLyB9KSxcbi8qIDI0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBDb2xsZWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBjYWxsYmFja19yZWdpc3RyeV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5cdHZhciBEaXNwYXRjaGVyID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIERpc3BhdGNoZXIoZmFpbFRocm91Z2gpIHtcblx0ICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBjYWxsYmFja19yZWdpc3RyeV8xW1wiZGVmYXVsdFwiXSgpO1xuXHQgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xuXHQgICAgICAgIHRoaXMuZmFpbFRocm91Z2ggPSBmYWlsVGhyb3VnaDtcblx0ICAgIH1cblx0ICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIHRoaXMuY2FsbGJhY2tzLmFkZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH07XG5cdCAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5iaW5kX2dsb2JhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH07XG5cdCAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIHRoaXMuY2FsbGJhY2tzLnJlbW92ZShldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH07XG5cdCAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bmJpbmRfZ2xvYmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuXHQgICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IENvbGxlY3Rpb25zLmZpbHRlcih0aGlzLmdsb2JhbF9jYWxsYmFja3MgfHwgW10sIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSBjYWxsYmFjazsgfSk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHQgICAgRGlzcGF0Y2hlci5wcm90b3R5cGUudW5iaW5kX2FsbCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0aGlzLnVuYmluZCgpO1xuXHQgICAgICAgIHRoaXMudW5iaW5kX2dsb2JhbCgpO1xuXHQgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfTtcblx0ICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG5cdCAgICAgICAgdmFyIGk7XG5cdCAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0oZXZlbnROYW1lLCBkYXRhKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzLmdldChldmVudE5hbWUpO1xuXHQgICAgICAgIGlmIChjYWxsYmFja3MgJiYgY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmZuLmNhbGwoY2FsbGJhY2tzW2ldLmNvbnRleHQgfHwgKHdpbmRvdyksIGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2UgaWYgKHRoaXMuZmFpbFRocm91Z2gpIHtcblx0ICAgICAgICAgICAgdGhpcy5mYWlsVGhyb3VnaChldmVudE5hbWUsIGRhdGEpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH07XG5cdCAgICByZXR1cm4gRGlzcGF0Y2hlcjtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEaXNwYXRjaGVyO1xuXG5cbi8qKiovIH0pLFxuLyogMjUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIENhbGxiYWNrUmVnaXN0cnkgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gQ2FsbGJhY2tSZWdpc3RyeSgpIHtcblx0ICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0ICAgIH1cblx0ICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1twcmVmaXgobmFtZSldO1xuXHQgICAgfTtcblx0ICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIHZhciBwcmVmaXhlZEV2ZW50TmFtZSA9IHByZWZpeChuYW1lKTtcblx0ICAgICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdID0gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSB8fCBbXTtcblx0ICAgICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdLnB1c2goe1xuXHQgICAgICAgICAgICBmbjogY2FsbGJhY2ssXG5cdCAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICBDYWxsYmFja1JlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICBpZiAoIW5hbWUgJiYgIWNhbGxiYWNrICYmICFjb250ZXh0KSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHQgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBuYW1lcyA9IG5hbWUgPyBbcHJlZml4KG5hbWUpXSA6IENvbGxlY3Rpb25zLmtleXModGhpcy5fY2FsbGJhY2tzKTtcblx0ICAgICAgICBpZiAoY2FsbGJhY2sgfHwgY29udGV4dCkge1xuXHQgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcyk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZUNhbGxiYWNrID0gZnVuY3Rpb24gKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIENvbGxlY3Rpb25zLmFwcGx5KG5hbWVzLCBmdW5jdGlvbiAobmFtZSkge1xuXHQgICAgICAgICAgICB0aGlzLl9jYWxsYmFja3NbbmFtZV0gPSBDb2xsZWN0aW9ucy5maWx0ZXIodGhpcy5fY2FsbGJhY2tzW25hbWVdIHx8IFtdLCBmdW5jdGlvbiAoYmluZGluZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIChjYWxsYmFjayAmJiBjYWxsYmFjayAhPT0gYmluZGluZy5mbikgfHxcblx0ICAgICAgICAgICAgICAgICAgICAoY29udGV4dCAmJiBjb250ZXh0ICE9PSBiaW5kaW5nLmNvbnRleHQpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXS5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LCB0aGlzKTtcblx0ICAgIH07XG5cdCAgICBDYWxsYmFja1JlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmVBbGxDYWxsYmFja3MgPSBmdW5jdGlvbiAobmFtZXMpIHtcblx0ICAgICAgICBDb2xsZWN0aW9ucy5hcHBseShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcblx0ICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcblx0ICAgICAgICB9LCB0aGlzKTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gQ2FsbGJhY2tSZWdpc3RyeTtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDYWxsYmFja1JlZ2lzdHJ5O1xuXHRmdW5jdGlvbiBwcmVmaXgobmFtZSkge1xuXHQgICAgcmV0dXJuIFwiX1wiICsgbmFtZTtcblx0fVxuXG5cbi8qKiovIH0pLFxuLyogMjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuXHQgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG5cdCAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cblx0ICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcblx0fTtcblx0dmFyIGRpc3BhdGNoZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXHR2YXIgTmV0SW5mbyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoTmV0SW5mbywgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIE5ldEluZm8oKSB7XG5cdCAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG5cdCAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHNlbGYuZW1pdCgnb25saW5lJyk7XG5cdCAgICAgICAgICAgIH0sIGZhbHNlKTtcblx0ICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHNlbGYuZW1pdCgnb2ZmbGluZScpO1xuXHQgICAgICAgICAgICB9LCBmYWxzZSk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgTmV0SW5mby5wcm90b3R5cGUuaXNPbmxpbmUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5vbkxpbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIHJldHVybiBOZXRJbmZvO1xuXHR9KGRpc3BhdGNoZXJfMVtcImRlZmF1bHRcIl0pKTtcblx0ZXhwb3J0cy5OZXRJbmZvID0gTmV0SW5mbztcblx0ZXhwb3J0cy5OZXR3b3JrID0gbmV3IE5ldEluZm8oKTtcblxuXG4vKioqLyB9KSxcbi8qIDI3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBnZXREZWZhdWx0U3RyYXRlZ3kgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG5cdCAgICB2YXIgd3NTdHJhdGVneTtcblx0ICAgIGlmIChjb25maWcuZW5jcnlwdGVkKSB7XG5cdCAgICAgICAgd3NTdHJhdGVneSA9IFtcblx0ICAgICAgICAgICAgXCI6YmVzdF9jb25uZWN0ZWRfZXZlclwiLFxuXHQgICAgICAgICAgICBcIjp3c19sb29wXCIsXG5cdCAgICAgICAgICAgIFtcIjpkZWxheWVkXCIsIDIwMDAsIFtcIjpodHRwX2ZhbGxiYWNrX2xvb3BcIl1dXG5cdCAgICAgICAgXTtcblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHQgICAgICAgIHdzU3RyYXRlZ3kgPSBbXG5cdCAgICAgICAgICAgIFwiOmJlc3RfY29ubmVjdGVkX2V2ZXJcIixcblx0ICAgICAgICAgICAgXCI6d3NfbG9vcFwiLFxuXHQgICAgICAgICAgICBbXCI6ZGVsYXllZFwiLCAyMDAwLCBbXCI6d3NzX2xvb3BcIl1dLFxuXHQgICAgICAgICAgICBbXCI6ZGVsYXllZFwiLCA1MDAwLCBbXCI6aHR0cF9mYWxsYmFja19sb29wXCJdXVxuXHQgICAgICAgIF07XG5cdCAgICB9XG5cdCAgICByZXR1cm4gW1xuXHQgICAgICAgIFtcIjpkZWZcIiwgXCJ3c19vcHRpb25zXCIsIHtcblx0ICAgICAgICAgICAgICAgIGhvc3RVbmVuY3J5cHRlZDogY29uZmlnLndzSG9zdCArIFwiOlwiICsgY29uZmlnLndzUG9ydCxcblx0ICAgICAgICAgICAgICAgIGhvc3RFbmNyeXB0ZWQ6IGNvbmZpZy53c0hvc3QgKyBcIjpcIiArIGNvbmZpZy53c3NQb3J0XG5cdCAgICAgICAgICAgIH1dLFxuXHQgICAgICAgIFtcIjpkZWZcIiwgXCJ3c3Nfb3B0aW9uc1wiLCBbXCI6ZXh0ZW5kXCIsIFwiOndzX29wdGlvbnNcIiwge1xuXHQgICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZDogdHJ1ZVxuXHQgICAgICAgICAgICAgICAgfV1dLFxuXHQgICAgICAgIFtcIjpkZWZcIiwgXCJzb2NranNfb3B0aW9uc1wiLCB7XG5cdCAgICAgICAgICAgICAgICBob3N0VW5lbmNyeXB0ZWQ6IGNvbmZpZy5odHRwSG9zdCArIFwiOlwiICsgY29uZmlnLmh0dHBQb3J0LFxuXHQgICAgICAgICAgICAgICAgaG9zdEVuY3J5cHRlZDogY29uZmlnLmh0dHBIb3N0ICsgXCI6XCIgKyBjb25maWcuaHR0cHNQb3J0LFxuXHQgICAgICAgICAgICAgICAgaHR0cFBhdGg6IGNvbmZpZy5odHRwUGF0aFxuXHQgICAgICAgICAgICB9XSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwidGltZW91dHNcIiwge1xuXHQgICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcblx0ICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDE1MDAwLFxuXHQgICAgICAgICAgICAgICAgdGltZW91dExpbWl0OiA2MDAwMFxuXHQgICAgICAgICAgICB9XSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwid3NfbWFuYWdlclwiLCBbXCI6dHJhbnNwb3J0X21hbmFnZXJcIiwge1xuXHQgICAgICAgICAgICAgICAgICAgIGxpdmVzOiAyLFxuXHQgICAgICAgICAgICAgICAgICAgIG1pblBpbmdEZWxheTogMTAwMDAsXG5cdCAgICAgICAgICAgICAgICAgICAgbWF4UGluZ0RlbGF5OiBjb25maWcuYWN0aXZpdHlfdGltZW91dFxuXHQgICAgICAgICAgICAgICAgfV1dLFxuXHQgICAgICAgIFtcIjpkZWZcIiwgXCJzdHJlYW1pbmdfbWFuYWdlclwiLCBbXCI6dHJhbnNwb3J0X21hbmFnZXJcIiwge1xuXHQgICAgICAgICAgICAgICAgICAgIGxpdmVzOiAyLFxuXHQgICAgICAgICAgICAgICAgICAgIG1pblBpbmdEZWxheTogMTAwMDAsXG5cdCAgICAgICAgICAgICAgICAgICAgbWF4UGluZ0RlbGF5OiBjb25maWcuYWN0aXZpdHlfdGltZW91dFxuXHQgICAgICAgICAgICAgICAgfV1dLFxuXHQgICAgICAgIFtcIjpkZWZfdHJhbnNwb3J0XCIsIFwid3NcIiwgXCJ3c1wiLCAzLCBcIjp3c19vcHRpb25zXCIsIFwiOndzX21hbmFnZXJcIl0sXG5cdCAgICAgICAgW1wiOmRlZl90cmFuc3BvcnRcIiwgXCJ3c3NcIiwgXCJ3c1wiLCAzLCBcIjp3c3Nfb3B0aW9uc1wiLCBcIjp3c19tYW5hZ2VyXCJdLFxuXHQgICAgICAgIFtcIjpkZWZfdHJhbnNwb3J0XCIsIFwic29ja2pzXCIsIFwic29ja2pzXCIsIDEsIFwiOnNvY2tqc19vcHRpb25zXCJdLFxuXHQgICAgICAgIFtcIjpkZWZfdHJhbnNwb3J0XCIsIFwieGhyX3N0cmVhbWluZ1wiLCBcInhocl9zdHJlYW1pbmdcIiwgMSwgXCI6c29ja2pzX29wdGlvbnNcIiwgXCI6c3RyZWFtaW5nX21hbmFnZXJcIl0sXG5cdCAgICAgICAgW1wiOmRlZl90cmFuc3BvcnRcIiwgXCJ4ZHJfc3RyZWFtaW5nXCIsIFwieGRyX3N0cmVhbWluZ1wiLCAxLCBcIjpzb2NranNfb3B0aW9uc1wiLCBcIjpzdHJlYW1pbmdfbWFuYWdlclwiXSxcblx0ICAgICAgICBbXCI6ZGVmX3RyYW5zcG9ydFwiLCBcInhocl9wb2xsaW5nXCIsIFwieGhyX3BvbGxpbmdcIiwgMSwgXCI6c29ja2pzX29wdGlvbnNcIl0sXG5cdCAgICAgICAgW1wiOmRlZl90cmFuc3BvcnRcIiwgXCJ4ZHJfcG9sbGluZ1wiLCBcInhkcl9wb2xsaW5nXCIsIDEsIFwiOnNvY2tqc19vcHRpb25zXCJdLFxuXHQgICAgICAgIFtcIjpkZWZcIiwgXCJ3c19sb29wXCIsIFtcIjpzZXF1ZW50aWFsXCIsIFwiOnRpbWVvdXRzXCIsIFwiOndzXCJdXSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwid3NzX2xvb3BcIiwgW1wiOnNlcXVlbnRpYWxcIiwgXCI6dGltZW91dHNcIiwgXCI6d3NzXCJdXSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwic29ja2pzX2xvb3BcIiwgW1wiOnNlcXVlbnRpYWxcIiwgXCI6dGltZW91dHNcIiwgXCI6c29ja2pzXCJdXSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwic3RyZWFtaW5nX2xvb3BcIiwgW1wiOnNlcXVlbnRpYWxcIiwgXCI6dGltZW91dHNcIixcblx0ICAgICAgICAgICAgICAgIFtcIjppZlwiLCBbXCI6aXNfc3VwcG9ydGVkXCIsIFwiOnhocl9zdHJlYW1pbmdcIl0sXG5cdCAgICAgICAgICAgICAgICAgICAgXCI6eGhyX3N0cmVhbWluZ1wiLFxuXHQgICAgICAgICAgICAgICAgICAgIFwiOnhkcl9zdHJlYW1pbmdcIlxuXHQgICAgICAgICAgICAgICAgXVxuXHQgICAgICAgICAgICBdXSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwicG9sbGluZ19sb29wXCIsIFtcIjpzZXF1ZW50aWFsXCIsIFwiOnRpbWVvdXRzXCIsXG5cdCAgICAgICAgICAgICAgICBbXCI6aWZcIiwgW1wiOmlzX3N1cHBvcnRlZFwiLCBcIjp4aHJfcG9sbGluZ1wiXSxcblx0ICAgICAgICAgICAgICAgICAgICBcIjp4aHJfcG9sbGluZ1wiLFxuXHQgICAgICAgICAgICAgICAgICAgIFwiOnhkcl9wb2xsaW5nXCJcblx0ICAgICAgICAgICAgICAgIF1cblx0ICAgICAgICAgICAgXV0sXG5cdCAgICAgICAgW1wiOmRlZlwiLCBcImh0dHBfbG9vcFwiLCBbXCI6aWZcIiwgW1wiOmlzX3N1cHBvcnRlZFwiLCBcIjpzdHJlYW1pbmdfbG9vcFwiXSwgW1xuXHQgICAgICAgICAgICAgICAgICAgIFwiOmJlc3RfY29ubmVjdGVkX2V2ZXJcIixcblx0ICAgICAgICAgICAgICAgICAgICBcIjpzdHJlYW1pbmdfbG9vcFwiLFxuXHQgICAgICAgICAgICAgICAgICAgIFtcIjpkZWxheWVkXCIsIDQwMDAsIFtcIjpwb2xsaW5nX2xvb3BcIl1dXG5cdCAgICAgICAgICAgICAgICBdLCBbXG5cdCAgICAgICAgICAgICAgICAgICAgXCI6cG9sbGluZ19sb29wXCJcblx0ICAgICAgICAgICAgICAgIF1dXSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwiaHR0cF9mYWxsYmFja19sb29wXCIsXG5cdCAgICAgICAgICAgIFtcIjppZlwiLCBbXCI6aXNfc3VwcG9ydGVkXCIsIFwiOmh0dHBfbG9vcFwiXSwgW1xuXHQgICAgICAgICAgICAgICAgICAgIFwiOmh0dHBfbG9vcFwiXG5cdCAgICAgICAgICAgICAgICBdLCBbXG5cdCAgICAgICAgICAgICAgICAgICAgXCI6c29ja2pzX2xvb3BcIlxuXHQgICAgICAgICAgICAgICAgXV1cblx0ICAgICAgICBdLFxuXHQgICAgICAgIFtcIjpkZWZcIiwgXCJzdHJhdGVneVwiLFxuXHQgICAgICAgICAgICBbXCI6Y2FjaGVkXCIsIDE4MDAwMDAsXG5cdCAgICAgICAgICAgICAgICBbXCI6Zmlyc3RfY29ubmVjdGVkXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgW1wiOmlmXCIsIFtcIjppc19zdXBwb3J0ZWRcIiwgXCI6d3NcIl0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHdzU3RyYXRlZ3ksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIFwiOmh0dHBfZmFsbGJhY2tfbG9vcFwiXG5cdCAgICAgICAgICAgICAgICAgICAgXVxuXHQgICAgICAgICAgICAgICAgXVxuXHQgICAgICAgICAgICBdXG5cdCAgICAgICAgXVxuXHQgICAgXTtcblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXREZWZhdWx0U3RyYXRlZ3k7XG5cblxuLyoqKi8gfSksXG4vKiAyOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgZGVwZW5kZW5jaWVzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRmdW5jdGlvbiBkZWZhdWx0XzEoKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cdCAgICBzZWxmLnRpbWVsaW5lLmluZm8oc2VsZi5idWlsZFRpbWVsaW5lTWVzc2FnZSh7XG5cdCAgICAgICAgdHJhbnNwb3J0OiBzZWxmLm5hbWUgKyAoc2VsZi5vcHRpb25zLmVuY3J5cHRlZCA/IFwic1wiIDogXCJcIilcblx0ICAgIH0pKTtcblx0ICAgIGlmIChzZWxmLmhvb2tzLmlzSW5pdGlhbGl6ZWQoKSkge1xuXHQgICAgICAgIHNlbGYuY2hhbmdlU3RhdGUoXCJpbml0aWFsaXplZFwiKTtcblx0ICAgIH1cblx0ICAgIGVsc2UgaWYgKHNlbGYuaG9va3MuZmlsZSkge1xuXHQgICAgICAgIHNlbGYuY2hhbmdlU3RhdGUoXCJpbml0aWFsaXppbmdcIik7XG5cdCAgICAgICAgZGVwZW5kZW5jaWVzXzEuRGVwZW5kZW5jaWVzLmxvYWQoc2VsZi5ob29rcy5maWxlLCB7IGVuY3J5cHRlZDogc2VsZi5vcHRpb25zLmVuY3J5cHRlZCB9LCBmdW5jdGlvbiAoZXJyb3IsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgICAgIGlmIChzZWxmLmhvb2tzLmlzSW5pdGlhbGl6ZWQoKSkge1xuXHQgICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VTdGF0ZShcImluaXRpYWxpemVkXCIpO1xuXHQgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzZWxmLm9uRXJyb3IoZXJyb3IpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgc2VsZi5vbkNsb3NlKCk7XG5cdCAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHQgICAgICAgIHNlbGYub25DbG9zZSgpO1xuXHQgICAgfVxuXHR9XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZGVmYXVsdF8xO1xuXG5cbi8qKiovIH0pLFxuLyogMjkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGh0dHBfeGRvbWFpbl9yZXF1ZXN0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKTtcblx0dmFyIGh0dHBfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xuXHRodHRwXzFbXCJkZWZhdWx0XCJdLmNyZWF0ZVhEUiA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCkge1xuXHQgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChodHRwX3hkb21haW5fcmVxdWVzdF8xW1wiZGVmYXVsdFwiXSwgbWV0aG9kLCB1cmwpO1xuXHR9O1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGh0dHBfMVtcImRlZmF1bHRcIl07XG5cblxuLyoqKi8gfSksXG4vKiAzMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgRXJyb3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSk7XG5cdHZhciBob29rcyA9IHtcblx0ICAgIGdldFJlcXVlc3Q6IGZ1bmN0aW9uIChzb2NrZXQpIHtcblx0ICAgICAgICB2YXIgeGRyID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuXHQgICAgICAgIHhkci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9ycy5SZXF1ZXN0VGltZWRPdXQoKSk7XG5cdCAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgeGRyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAgICAgICBzb2NrZXQuZW1pdChcImVycm9yXCIsIGUpO1xuXHQgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHhkci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBpZiAoeGRyLnJlc3BvbnNlVGV4dCAmJiB4ZHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgICAgIHNvY2tldC5vbkNodW5rKDIwMCwgeGRyLnJlc3BvbnNlVGV4dCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIHhkci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIGlmICh4ZHIucmVzcG9uc2VUZXh0ICYmIHhkci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuXHQgICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoMjAwLCB4ZHIucmVzcG9uc2VUZXh0KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBzb2NrZXQuZW1pdChcImZpbmlzaGVkXCIsIDIwMCk7XG5cdCAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgcmV0dXJuIHhkcjtcblx0ICAgIH0sXG5cdCAgICBhYm9ydFJlcXVlc3Q6IGZ1bmN0aW9uICh4ZHIpIHtcblx0ICAgICAgICB4ZHIub250aW1lb3V0ID0geGRyLm9uZXJyb3IgPSB4ZHIub25wcm9ncmVzcyA9IHhkci5vbmxvYWQgPSBudWxsO1xuXHQgICAgICAgIHhkci5hYm9ydCgpO1xuXHQgICAgfVxuXHR9O1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGhvb2tzO1xuXG5cbi8qKiovIH0pLFxuLyogMzEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuXHQgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG5cdCAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cblx0ICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcblx0fTtcblx0dmFyIEJhZEV2ZW50TmFtZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoQmFkRXZlbnROYW1lLCBfc3VwZXIpO1xuXHQgICAgZnVuY3Rpb24gQmFkRXZlbnROYW1lKCkge1xuXHQgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIEJhZEV2ZW50TmFtZTtcblx0fShFcnJvcikpO1xuXHRleHBvcnRzLkJhZEV2ZW50TmFtZSA9IEJhZEV2ZW50TmFtZTtcblx0dmFyIFJlcXVlc3RUaW1lZE91dCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoUmVxdWVzdFRpbWVkT3V0LCBfc3VwZXIpO1xuXHQgICAgZnVuY3Rpb24gUmVxdWVzdFRpbWVkT3V0KCkge1xuXHQgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIFJlcXVlc3RUaW1lZE91dDtcblx0fShFcnJvcikpO1xuXHRleHBvcnRzLlJlcXVlc3RUaW1lZE91dCA9IFJlcXVlc3RUaW1lZE91dDtcblx0dmFyIFRyYW5zcG9ydFByaW9yaXR5VG9vTG93ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcblx0ICAgIF9fZXh0ZW5kcyhUcmFuc3BvcnRQcmlvcml0eVRvb0xvdywgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIFRyYW5zcG9ydFByaW9yaXR5VG9vTG93KCkge1xuXHQgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIFRyYW5zcG9ydFByaW9yaXR5VG9vTG93O1xuXHR9KEVycm9yKSk7XG5cdGV4cG9ydHMuVHJhbnNwb3J0UHJpb3JpdHlUb29Mb3cgPSBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdztcblx0dmFyIFRyYW5zcG9ydENsb3NlZCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoVHJhbnNwb3J0Q2xvc2VkLCBfc3VwZXIpO1xuXHQgICAgZnVuY3Rpb24gVHJhbnNwb3J0Q2xvc2VkKCkge1xuXHQgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIFRyYW5zcG9ydENsb3NlZDtcblx0fShFcnJvcikpO1xuXHRleHBvcnRzLlRyYW5zcG9ydENsb3NlZCA9IFRyYW5zcG9ydENsb3NlZDtcblx0dmFyIFVuc3VwcG9ydGVkVHJhbnNwb3J0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcblx0ICAgIF9fZXh0ZW5kcyhVbnN1cHBvcnRlZFRyYW5zcG9ydCwgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIFVuc3VwcG9ydGVkVHJhbnNwb3J0KCkge1xuXHQgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIFVuc3VwcG9ydGVkVHJhbnNwb3J0O1xuXHR9KEVycm9yKSk7XG5cdGV4cG9ydHMuVW5zdXBwb3J0ZWRUcmFuc3BvcnQgPSBVbnN1cHBvcnRlZFRyYW5zcG9ydDtcblx0dmFyIFVuc3VwcG9ydGVkU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuXHQgICAgX19leHRlbmRzKFVuc3VwcG9ydGVkU3RyYXRlZ3ksIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBVbnN1cHBvcnRlZFN0cmF0ZWd5KCkge1xuXHQgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIFVuc3VwcG9ydGVkU3RyYXRlZ3k7XG5cdH0oRXJyb3IpKTtcblx0ZXhwb3J0cy5VbnN1cHBvcnRlZFN0cmF0ZWd5ID0gVW5zdXBwb3J0ZWRTdHJhdGVneTtcblxuXG4vKioqLyB9KSxcbi8qIDMyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBodHRwX3JlcXVlc3RfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xuXHR2YXIgaHR0cF9zb2NrZXRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpO1xuXHR2YXIgaHR0cF9zdHJlYW1pbmdfc29ja2V0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KTtcblx0dmFyIGh0dHBfcG9sbGluZ19zb2NrZXRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpO1xuXHR2YXIgaHR0cF94aHJfcmVxdWVzdF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOCk7XG5cdHZhciBIVFRQID0ge1xuXHQgICAgY3JlYXRlU3RyZWFtaW5nU29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU29ja2V0KGh0dHBfc3RyZWFtaW5nX3NvY2tldF8xW1wiZGVmYXVsdFwiXSwgdXJsKTtcblx0ICAgIH0sXG5cdCAgICBjcmVhdGVQb2xsaW5nU29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU29ja2V0KGh0dHBfcG9sbGluZ19zb2NrZXRfMVtcImRlZmF1bHRcIl0sIHVybCk7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlU29ja2V0OiBmdW5jdGlvbiAoaG9va3MsIHVybCkge1xuXHQgICAgICAgIHJldHVybiBuZXcgaHR0cF9zb2NrZXRfMVtcImRlZmF1bHRcIl0oaG9va3MsIHVybCk7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlWEhSOiBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXF1ZXN0KGh0dHBfeGhyX3JlcXVlc3RfMVtcImRlZmF1bHRcIl0sIG1ldGhvZCwgdXJsKTtcblx0ICAgIH0sXG5cdCAgICBjcmVhdGVSZXF1ZXN0OiBmdW5jdGlvbiAoaG9va3MsIG1ldGhvZCwgdXJsKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBodHRwX3JlcXVlc3RfMVtcImRlZmF1bHRcIl0oaG9va3MsIG1ldGhvZCwgdXJsKTtcblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIVFRQO1xuXG5cbi8qKiovIH0pLFxuLyogMzMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuXHQgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG5cdCAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cblx0ICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcblx0fTtcblx0dmFyIHJ1bnRpbWVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBkaXNwYXRjaGVyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcblx0dmFyIE1BWF9CVUZGRVJfTEVOR1RIID0gMjU2ICogMTAyNDtcblx0dmFyIEhUVFBSZXF1ZXN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcblx0ICAgIF9fZXh0ZW5kcyhIVFRQUmVxdWVzdCwgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIEhUVFBSZXF1ZXN0KGhvb2tzLCBtZXRob2QsIHVybCkge1xuXHQgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuXHQgICAgICAgIHRoaXMuaG9va3MgPSBob29rcztcblx0ICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcblx0ICAgICAgICB0aGlzLnVybCA9IHVybDtcblx0ICAgIH1cblx0ICAgIEhUVFBSZXF1ZXN0LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcblx0ICAgICAgICB0aGlzLnhociA9IHRoaXMuaG9va3MuZ2V0UmVxdWVzdCh0aGlzKTtcblx0ICAgICAgICB0aGlzLnVubG9hZGVyID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgcnVudGltZV8xW1wiZGVmYXVsdFwiXS5hZGRVbmxvYWRMaXN0ZW5lcih0aGlzLnVubG9hZGVyKTtcblx0ICAgICAgICB0aGlzLnhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG5cdCAgICAgICAgaWYgKHRoaXMueGhyLnNldFJlcXVlc3RIZWFkZXIpIHtcblx0ICAgICAgICAgICAgdGhpcy54aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMueGhyLnNlbmQocGF5bG9hZCk7XG5cdCAgICB9O1xuXHQgICAgSFRUUFJlcXVlc3QucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLnVubG9hZGVyKSB7XG5cdCAgICAgICAgICAgIHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0ucmVtb3ZlVW5sb2FkTGlzdGVuZXIodGhpcy51bmxvYWRlcik7XG5cdCAgICAgICAgICAgIHRoaXMudW5sb2FkZXIgPSBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAodGhpcy54aHIpIHtcblx0ICAgICAgICAgICAgdGhpcy5ob29rcy5hYm9ydFJlcXVlc3QodGhpcy54aHIpO1xuXHQgICAgICAgICAgICB0aGlzLnhociA9IG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIEhUVFBSZXF1ZXN0LnByb3RvdHlwZS5vbkNodW5rID0gZnVuY3Rpb24gKHN0YXR1cywgZGF0YSkge1xuXHQgICAgICAgIHdoaWxlICh0cnVlKSB7XG5cdCAgICAgICAgICAgIHZhciBjaHVuayA9IHRoaXMuYWR2YW5jZUJ1ZmZlcihkYXRhKTtcblx0ICAgICAgICAgICAgaWYgKGNodW5rKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJjaHVua1wiLCB7IHN0YXR1czogc3RhdHVzLCBkYXRhOiBjaHVuayB9KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICh0aGlzLmlzQnVmZmVyVG9vTG9uZyhkYXRhKSkge1xuXHQgICAgICAgICAgICB0aGlzLmVtaXQoXCJidWZmZXJfdG9vX2xvbmdcIik7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIEhUVFBSZXF1ZXN0LnByb3RvdHlwZS5hZHZhbmNlQnVmZmVyID0gZnVuY3Rpb24gKGJ1ZmZlcikge1xuXHQgICAgICAgIHZhciB1bnJlYWREYXRhID0gYnVmZmVyLnNsaWNlKHRoaXMucG9zaXRpb24pO1xuXHQgICAgICAgIHZhciBlbmRPZkxpbmVQb3NpdGlvbiA9IHVucmVhZERhdGEuaW5kZXhPZihcIlxcblwiKTtcblx0ICAgICAgICBpZiAoZW5kT2ZMaW5lUG9zaXRpb24gIT09IC0xKSB7XG5cdCAgICAgICAgICAgIHRoaXMucG9zaXRpb24gKz0gZW5kT2ZMaW5lUG9zaXRpb24gKyAxO1xuXHQgICAgICAgICAgICByZXR1cm4gdW5yZWFkRGF0YS5zbGljZSgwLCBlbmRPZkxpbmVQb3NpdGlvbik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgSFRUUFJlcXVlc3QucHJvdG90eXBlLmlzQnVmZmVyVG9vTG9uZyA9IGZ1bmN0aW9uIChidWZmZXIpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gYnVmZmVyLmxlbmd0aCAmJiBidWZmZXIubGVuZ3RoID4gTUFYX0JVRkZFUl9MRU5HVEg7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIEhUVFBSZXF1ZXN0O1xuXHR9KGRpc3BhdGNoZXJfMVtcImRlZmF1bHRcIl0pKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIVFRQUmVxdWVzdDtcblxuXG4vKioqLyB9KSxcbi8qIDM0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBzdGF0ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cdHZhciB1dGlsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIHJ1bnRpbWVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBhdXRvSW5jcmVtZW50ID0gMTtcblx0dmFyIEhUVFBTb2NrZXQgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gSFRUUFNvY2tldChob29rcywgdXJsKSB7XG5cdCAgICAgICAgdGhpcy5ob29rcyA9IGhvb2tzO1xuXHQgICAgICAgIHRoaXMuc2Vzc2lvbiA9IHJhbmRvbU51bWJlcigxMDAwKSArIFwiL1wiICsgcmFuZG9tU3RyaW5nKDgpO1xuXHQgICAgICAgIHRoaXMubG9jYXRpb24gPSBnZXRMb2NhdGlvbih1cmwpO1xuXHQgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHN0YXRlXzFbXCJkZWZhdWx0XCJdLkNPTk5FQ1RJTkc7XG5cdCAgICAgICAgdGhpcy5vcGVuU3RyZWFtKCk7XG5cdCAgICB9XG5cdCAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5zZW5kUmF3KEpTT04uc3RyaW5naWZ5KFtwYXlsb2FkXSkpO1xuXHQgICAgfTtcblx0ICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5ob29rcy5zZW5kSGVhcnRiZWF0KHRoaXMpO1xuXHQgICAgfTtcblx0ICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbikge1xuXHQgICAgICAgIHRoaXMub25DbG9zZShjb2RlLCByZWFzb24sIHRydWUpO1xuXHQgICAgfTtcblx0ICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLnNlbmRSYXcgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuXHQgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHN0YXRlXzFbXCJkZWZhdWx0XCJdLk9QRU4pIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uY3JlYXRlU29ja2V0UmVxdWVzdChcIlBPU1RcIiwgZ2V0VW5pcXVlVVJMKGdldFNlbmRVUkwodGhpcy5sb2NhdGlvbiwgdGhpcy5zZXNzaW9uKSkpLnN0YXJ0KHBheWxvYWQpO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5yZWNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5jbG9zZVN0cmVhbSgpO1xuXHQgICAgICAgIHRoaXMub3BlblN0cmVhbSgpO1xuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoY29kZSwgcmVhc29uLCB3YXNDbGVhbikge1xuXHQgICAgICAgIHRoaXMuY2xvc2VTdHJlYW0oKTtcblx0ICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZV8xW1wiZGVmYXVsdFwiXS5DTE9TRUQ7XG5cdCAgICAgICAgaWYgKHRoaXMub25jbG9zZSkge1xuXHQgICAgICAgICAgICB0aGlzLm9uY2xvc2Uoe1xuXHQgICAgICAgICAgICAgICAgY29kZTogY29kZSxcblx0ICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uLFxuXHQgICAgICAgICAgICAgICAgd2FzQ2xlYW46IHdhc0NsZWFuXG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkNodW5rID0gZnVuY3Rpb24gKGNodW5rKSB7XG5cdCAgICAgICAgaWYgKGNodW5rLnN0YXR1cyAhPT0gMjAwKSB7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gc3RhdGVfMVtcImRlZmF1bHRcIl0uT1BFTikge1xuXHQgICAgICAgICAgICB0aGlzLm9uQWN0aXZpdHkoKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHBheWxvYWQ7XG5cdCAgICAgICAgdmFyIHR5cGUgPSBjaHVuay5kYXRhLnNsaWNlKDAsIDEpO1xuXHQgICAgICAgIHN3aXRjaCAodHlwZSkge1xuXHQgICAgICAgICAgICBjYXNlICdvJzpcblx0ICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ3t9Jyk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9uT3BlbihwYXlsb2FkKTtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICBjYXNlICdhJzpcblx0ICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ1tdJyk7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBheWxvYWQubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnQocGF5bG9hZFtpXSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgY2FzZSAnbSc6XG5cdCAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICdudWxsJyk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnQocGF5bG9hZCk7XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgY2FzZSAnaCc6XG5cdCAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLm9uSGVhcnRiZWF0KHRoaXMpO1xuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIGNhc2UgJ2MnOlxuXHQgICAgICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UoY2h1bmsuZGF0YS5zbGljZSgxKSB8fCAnW10nKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZShwYXlsb2FkWzBdLCBwYXlsb2FkWzFdLCB0cnVlKTtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHQgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHN0YXRlXzFbXCJkZWZhdWx0XCJdLkNPTk5FQ1RJTkcpIHtcblx0ICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5ob3N0bmFtZSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5iYXNlID0gcmVwbGFjZUhvc3QodGhpcy5sb2NhdGlvbi5iYXNlLCBvcHRpb25zLmhvc3RuYW1lKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZV8xW1wiZGVmYXVsdFwiXS5PUEVOO1xuXHQgICAgICAgICAgICBpZiAodGhpcy5vbm9wZW4pIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMub25vcGVuKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHRoaXMub25DbG9zZSgxMDA2LCBcIlNlcnZlciBsb3N0IHNlc3Npb25cIiwgdHJ1ZSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9uRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZV8xW1wiZGVmYXVsdFwiXS5PUEVOICYmIHRoaXMub25tZXNzYWdlKSB7XG5cdCAgICAgICAgICAgIHRoaXMub25tZXNzYWdlKHsgZGF0YTogZXZlbnQgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9uQWN0aXZpdHkgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMub25hY3Rpdml0eSkge1xuXHQgICAgICAgICAgICB0aGlzLm9uYWN0aXZpdHkoKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgSFRUUFNvY2tldC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHQgICAgICAgIGlmICh0aGlzLm9uZXJyb3IpIHtcblx0ICAgICAgICAgICAgdGhpcy5vbmVycm9yKGVycm9yKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgSFRUUFNvY2tldC5wcm90b3R5cGUub3BlblN0cmVhbSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHRoaXMuc3RyZWFtID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5jcmVhdGVTb2NrZXRSZXF1ZXN0KFwiUE9TVFwiLCBnZXRVbmlxdWVVUkwodGhpcy5ob29rcy5nZXRSZWNlaXZlVVJMKHRoaXMubG9jYXRpb24sIHRoaXMuc2Vzc2lvbikpKTtcblx0ICAgICAgICB0aGlzLnN0cmVhbS5iaW5kKFwiY2h1bmtcIiwgZnVuY3Rpb24gKGNodW5rKSB7XG5cdCAgICAgICAgICAgIF90aGlzLm9uQ2h1bmsoY2h1bmspO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHRoaXMuc3RyZWFtLmJpbmQoXCJmaW5pc2hlZFwiLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG5cdCAgICAgICAgICAgIF90aGlzLmhvb2tzLm9uRmluaXNoZWQoX3RoaXMsIHN0YXR1cyk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgdGhpcy5zdHJlYW0uYmluZChcImJ1ZmZlcl90b29fbG9uZ1wiLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIF90aGlzLnJlY29ubmVjdCgpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIHRoaXMuc3RyZWFtLnN0YXJ0KCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGNhdGNoIChlcnJvcikge1xuXHQgICAgICAgICAgICB1dGlsXzFbXCJkZWZhdWx0XCJdLmRlZmVyKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLm9uRXJyb3IoZXJyb3IpO1xuXHQgICAgICAgICAgICAgICAgX3RoaXMub25DbG9zZSgxMDA2LCBcIkNvdWxkIG5vdCBzdGFydCBzdHJlYW1pbmdcIiwgZmFsc2UpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgSFRUUFNvY2tldC5wcm90b3R5cGUuY2xvc2VTdHJlYW0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMuc3RyZWFtKSB7XG5cdCAgICAgICAgICAgIHRoaXMuc3RyZWFtLnVuYmluZF9hbGwoKTtcblx0ICAgICAgICAgICAgdGhpcy5zdHJlYW0uY2xvc2UoKTtcblx0ICAgICAgICAgICAgdGhpcy5zdHJlYW0gPSBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICByZXR1cm4gSFRUUFNvY2tldDtcblx0fSgpKTtcblx0ZnVuY3Rpb24gZ2V0TG9jYXRpb24odXJsKSB7XG5cdCAgICB2YXIgcGFydHMgPSAvKFteXFw/XSopXFwvKihcXD8/LiopLy5leGVjKHVybCk7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAgIGJhc2U6IHBhcnRzWzFdLFxuXHQgICAgICAgIHF1ZXJ5U3RyaW5nOiBwYXJ0c1syXVxuXHQgICAgfTtcblx0fVxuXHRmdW5jdGlvbiBnZXRTZW5kVVJMKHVybCwgc2Vzc2lvbikge1xuXHQgICAgcmV0dXJuIHVybC5iYXNlICsgXCIvXCIgKyBzZXNzaW9uICsgXCIveGhyX3NlbmRcIjtcblx0fVxuXHRmdW5jdGlvbiBnZXRVbmlxdWVVUkwodXJsKSB7XG5cdCAgICB2YXIgc2VwYXJhdG9yID0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xKSA/IFwiP1wiIDogXCImXCI7XG5cdCAgICByZXR1cm4gdXJsICsgc2VwYXJhdG9yICsgXCJ0PVwiICsgKCtuZXcgRGF0ZSgpKSArIFwiJm49XCIgKyBhdXRvSW5jcmVtZW50Kys7XG5cdH1cblx0ZnVuY3Rpb24gcmVwbGFjZUhvc3QodXJsLCBob3N0bmFtZSkge1xuXHQgICAgdmFyIHVybFBhcnRzID0gLyhodHRwcz86XFwvXFwvKShbXlxcLzpdKykoKFxcL3w6KT8uKikvLmV4ZWModXJsKTtcblx0ICAgIHJldHVybiB1cmxQYXJ0c1sxXSArIGhvc3RuYW1lICsgdXJsUGFydHNbM107XG5cdH1cblx0ZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1heCkge1xuXHQgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG5cdH1cblx0ZnVuY3Rpb24gcmFuZG9tU3RyaW5nKGxlbmd0aCkge1xuXHQgICAgdmFyIHJlc3VsdCA9IFtdO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHQgICAgICAgIHJlc3VsdC5wdXNoKHJhbmRvbU51bWJlcigzMikudG9TdHJpbmcoMzIpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiByZXN1bHQuam9pbignJyk7XG5cdH1cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIVFRQU29ja2V0O1xuXG5cbi8qKiovIH0pLFxuLyogMzUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIFN0YXRlO1xuXHQoZnVuY3Rpb24gKFN0YXRlKSB7XG5cdCAgICBTdGF0ZVtTdGF0ZVtcIkNPTk5FQ1RJTkdcIl0gPSAwXSA9IFwiQ09OTkVDVElOR1wiO1xuXHQgICAgU3RhdGVbU3RhdGVbXCJPUEVOXCJdID0gMV0gPSBcIk9QRU5cIjtcblx0ICAgIFN0YXRlW1N0YXRlW1wiQ0xPU0VEXCJdID0gM10gPSBcIkNMT1NFRFwiO1xuXHR9KShTdGF0ZSB8fCAoU3RhdGUgPSB7fSkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0YXRlO1xuXG5cbi8qKiovIH0pLFxuLyogMzYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGhvb2tzID0ge1xuXHQgICAgZ2V0UmVjZWl2ZVVSTDogZnVuY3Rpb24gKHVybCwgc2Vzc2lvbikge1xuXHQgICAgICAgIHJldHVybiB1cmwuYmFzZSArIFwiL1wiICsgc2Vzc2lvbiArIFwiL3hocl9zdHJlYW1pbmdcIiArIHVybC5xdWVyeVN0cmluZztcblx0ICAgIH0sXG5cdCAgICBvbkhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuXHQgICAgICAgIHNvY2tldC5zZW5kUmF3KFwiW11cIik7XG5cdCAgICB9LFxuXHQgICAgc2VuZEhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuXHQgICAgICAgIHNvY2tldC5zZW5kUmF3KFwiW11cIik7XG5cdCAgICB9LFxuXHQgICAgb25GaW5pc2hlZDogZnVuY3Rpb24gKHNvY2tldCwgc3RhdHVzKSB7XG5cdCAgICAgICAgc29ja2V0Lm9uQ2xvc2UoMTAwNiwgXCJDb25uZWN0aW9uIGludGVycnVwdGVkIChcIiArIHN0YXR1cyArIFwiKVwiLCBmYWxzZSk7XG5cdCAgICB9XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gaG9va3M7XG5cblxuLyoqKi8gfSksXG4vKiAzNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgaG9va3MgPSB7XG5cdCAgICBnZXRSZWNlaXZlVVJMOiBmdW5jdGlvbiAodXJsLCBzZXNzaW9uKSB7XG5cdCAgICAgICAgcmV0dXJuIHVybC5iYXNlICsgXCIvXCIgKyBzZXNzaW9uICsgXCIveGhyXCIgKyB1cmwucXVlcnlTdHJpbmc7XG5cdCAgICB9LFxuXHQgICAgb25IZWFydGJlYXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgIH0sXG5cdCAgICBzZW5kSGVhcnRiZWF0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG5cdCAgICAgICAgc29ja2V0LnNlbmRSYXcoXCJbXVwiKTtcblx0ICAgIH0sXG5cdCAgICBvbkZpbmlzaGVkOiBmdW5jdGlvbiAoc29ja2V0LCBzdGF0dXMpIHtcblx0ICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcblx0ICAgICAgICAgICAgc29ja2V0LnJlY29ubmVjdCgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgc29ja2V0Lm9uQ2xvc2UoMTAwNiwgXCJDb25uZWN0aW9uIGludGVycnVwdGVkIChcIiArIHN0YXR1cyArIFwiKVwiLCBmYWxzZSk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHR9O1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGhvb2tzO1xuXG5cbi8qKiovIH0pLFxuLyogMzggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIHJ1bnRpbWVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBob29rcyA9IHtcblx0ICAgIGdldFJlcXVlc3Q6IGZ1bmN0aW9uIChzb2NrZXQpIHtcblx0ICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSBydW50aW1lXzFbXCJkZWZhdWx0XCJdLmdldFhIUkFQSSgpO1xuXHQgICAgICAgIHZhciB4aHIgPSBuZXcgQ29uc3RydWN0b3IoKTtcblx0ICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0geGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoeGhyLnJlYWR5U3RhdGUpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlc3BvbnNlVGV4dCAmJiB4aHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0OlxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VUZXh0ICYmIHhoci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQub25DaHVuayh4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0KTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJmaW5pc2hlZFwiLCB4aHIuc3RhdHVzKTtcblx0ICAgICAgICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgcmV0dXJuIHhocjtcblx0ICAgIH0sXG5cdCAgICBhYm9ydFJlcXVlc3Q6IGZ1bmN0aW9uICh4aHIpIHtcblx0ICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcblx0ICAgICAgICB4aHIuYWJvcnQoKTtcblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBob29rcztcblxuXG4vKioqLyB9KSxcbi8qIDM5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBDb2xsZWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciB1dGlsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIGxldmVsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQwKTtcblx0dmFyIFRpbWVsaW5lID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFRpbWVsaW5lKGtleSwgc2Vzc2lvbiwgb3B0aW9ucykge1xuXHQgICAgICAgIHRoaXMua2V5ID0ga2V5O1xuXHQgICAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG5cdCAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQgICAgICAgIHRoaXMuc2VudCA9IDA7XG5cdCAgICAgICAgdGhpcy51bmlxdWVJRCA9IDA7XG5cdCAgICB9XG5cdCAgICBUaW1lbGluZS5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKGxldmVsLCBldmVudCkge1xuXHQgICAgICAgIGlmIChsZXZlbCA8PSB0aGlzLm9wdGlvbnMubGV2ZWwpIHtcblx0ICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaChDb2xsZWN0aW9ucy5leHRlbmQoe30sIGV2ZW50LCB7IHRpbWVzdGFtcDogdXRpbF8xW1wiZGVmYXVsdFwiXS5ub3coKSB9KSk7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXQgJiYgdGhpcy5ldmVudHMubGVuZ3RoID4gdGhpcy5vcHRpb25zLmxpbWl0KSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5zaGlmdCgpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIFRpbWVsaW5lLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuXHQgICAgICAgIHRoaXMubG9nKGxldmVsXzFbXCJkZWZhdWx0XCJdLkVSUk9SLCBldmVudCk7XG5cdCAgICB9O1xuXHQgICAgVGltZWxpbmUucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ICAgICAgICB0aGlzLmxvZyhsZXZlbF8xW1wiZGVmYXVsdFwiXS5JTkZPLCBldmVudCk7XG5cdCAgICB9O1xuXHQgICAgVGltZWxpbmUucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdCAgICAgICAgdGhpcy5sb2cobGV2ZWxfMVtcImRlZmF1bHRcIl0uREVCVUcsIGV2ZW50KTtcblx0ICAgIH07XG5cdCAgICBUaW1lbGluZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5ldmVudHMubGVuZ3RoID09PSAwO1xuXHQgICAgfTtcblx0ICAgIFRpbWVsaW5lLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHNlbmRmbiwgY2FsbGJhY2spIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHZhciBkYXRhID0gQ29sbGVjdGlvbnMuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgc2Vzc2lvbjogdGhpcy5zZXNzaW9uLFxuXHQgICAgICAgICAgICBidW5kbGU6IHRoaXMuc2VudCArIDEsXG5cdCAgICAgICAgICAgIGtleTogdGhpcy5rZXksXG5cdCAgICAgICAgICAgIGxpYjogXCJqc1wiLFxuXHQgICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLm9wdGlvbnMudmVyc2lvbixcblx0ICAgICAgICAgICAgY2x1c3RlcjogdGhpcy5vcHRpb25zLmNsdXN0ZXIsXG5cdCAgICAgICAgICAgIGZlYXR1cmVzOiB0aGlzLm9wdGlvbnMuZmVhdHVyZXMsXG5cdCAgICAgICAgICAgIHRpbWVsaW5lOiB0aGlzLmV2ZW50c1xuXHQgICAgICAgIH0sIHRoaXMub3B0aW9ucy5wYXJhbXMpO1xuXHQgICAgICAgIHRoaXMuZXZlbnRzID0gW107XG5cdCAgICAgICAgc2VuZGZuKGRhdGEsIGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0KSB7XG5cdCAgICAgICAgICAgIGlmICghZXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnNlbnQrKztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcblx0ICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXN1bHQpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9O1xuXHQgICAgVGltZWxpbmUucHJvdG90eXBlLmdlbmVyYXRlVW5pcXVlSUQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy51bmlxdWVJRCsrO1xuXHQgICAgICAgIHJldHVybiB0aGlzLnVuaXF1ZUlEO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBUaW1lbGluZTtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUaW1lbGluZTtcblxuXG4vKioqLyB9KSxcbi8qIDQwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBUaW1lbGluZUxldmVsO1xuXHQoZnVuY3Rpb24gKFRpbWVsaW5lTGV2ZWwpIHtcblx0ICAgIFRpbWVsaW5lTGV2ZWxbVGltZWxpbmVMZXZlbFtcIkVSUk9SXCJdID0gM10gPSBcIkVSUk9SXCI7XG5cdCAgICBUaW1lbGluZUxldmVsW1RpbWVsaW5lTGV2ZWxbXCJJTkZPXCJdID0gNl0gPSBcIklORk9cIjtcblx0ICAgIFRpbWVsaW5lTGV2ZWxbVGltZWxpbmVMZXZlbFtcIkRFQlVHXCJdID0gN10gPSBcIkRFQlVHXCI7XG5cdH0pKFRpbWVsaW5lTGV2ZWwgfHwgKFRpbWVsaW5lTGV2ZWwgPSB7fSkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFRpbWVsaW5lTGV2ZWw7XG5cblxuLyoqKi8gfSksXG4vKiA0MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgdXRpbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdHZhciB0cmFuc3BvcnRfbWFuYWdlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG5cdHZhciBFcnJvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKTtcblx0dmFyIHRyYW5zcG9ydF9zdHJhdGVneV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nik7XG5cdHZhciBzZXF1ZW50aWFsX3N0cmF0ZWd5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KTtcblx0dmFyIGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3lfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNTgpO1xuXHR2YXIgY2FjaGVkX3N0cmF0ZWd5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU5KTtcblx0dmFyIGRlbGF5ZWRfc3RyYXRlZ3lfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNjApO1xuXHR2YXIgaWZfc3RyYXRlZ3lfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNjEpO1xuXHR2YXIgZmlyc3RfY29ubmVjdGVkX3N0cmF0ZWd5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYyKTtcblx0dmFyIHJ1bnRpbWVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBUcmFuc3BvcnRzID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5UcmFuc3BvcnRzO1xuXHRleHBvcnRzLmJ1aWxkID0gZnVuY3Rpb24gKHNjaGVtZSwgb3B0aW9ucykge1xuXHQgICAgdmFyIGNvbnRleHQgPSBDb2xsZWN0aW9ucy5leHRlbmQoe30sIGdsb2JhbENvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgcmV0dXJuIGV2YWx1YXRlKHNjaGVtZSwgY29udGV4dClbMV0uc3RyYXRlZ3k7XG5cdH07XG5cdHZhciBVbnN1cHBvcnRlZFN0cmF0ZWd5ID0ge1xuXHQgICAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9LFxuXHQgICAgY29ubmVjdDogZnVuY3Rpb24gKF8sIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIGRlZmVycmVkID0gdXRpbF8xW1wiZGVmYXVsdFwiXS5kZWZlcihmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcnMuVW5zdXBwb3J0ZWRTdHJhdGVneSgpKTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgZGVmZXJyZWQuZW5zdXJlQWJvcnRlZCgpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAoKSB7IH1cblx0ICAgICAgICB9O1xuXHQgICAgfVxuXHR9O1xuXHRmdW5jdGlvbiByZXR1cm5XaXRoT3JpZ2luYWxDb250ZXh0KGYpIHtcblx0ICAgIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkge1xuXHQgICAgICAgIHJldHVybiBbZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBjb250ZXh0XTtcblx0ICAgIH07XG5cdH1cblx0dmFyIGdsb2JhbENvbnRleHQgPSB7XG5cdCAgICBleHRlbmQ6IGZ1bmN0aW9uIChjb250ZXh0LCBmaXJzdCwgc2Vjb25kKSB7XG5cdCAgICAgICAgcmV0dXJuIFtDb2xsZWN0aW9ucy5leHRlbmQoe30sIGZpcnN0LCBzZWNvbmQpLCBjb250ZXh0XTtcblx0ICAgIH0sXG5cdCAgICBkZWY6IGZ1bmN0aW9uIChjb250ZXh0LCBuYW1lLCB2YWx1ZSkge1xuXHQgICAgICAgIGlmIChjb250ZXh0W25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgdGhyb3cgXCJSZWRlZmluaW5nIHN5bWJvbCBcIiArIG5hbWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGNvbnRleHRbbmFtZV0gPSB2YWx1ZTtcblx0ICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgY29udGV4dF07XG5cdCAgICB9LFxuXHQgICAgZGVmX3RyYW5zcG9ydDogZnVuY3Rpb24gKGNvbnRleHQsIG5hbWUsIHR5cGUsIHByaW9yaXR5LCBvcHRpb25zLCBtYW5hZ2VyKSB7XG5cdCAgICAgICAgdmFyIHRyYW5zcG9ydENsYXNzID0gVHJhbnNwb3J0c1t0eXBlXTtcblx0ICAgICAgICBpZiAoIXRyYW5zcG9ydENsYXNzKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcnMuVW5zdXBwb3J0ZWRUcmFuc3BvcnQodHlwZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBlbmFibGVkID0gKCFjb250ZXh0LmVuYWJsZWRUcmFuc3BvcnRzIHx8XG5cdCAgICAgICAgICAgIENvbGxlY3Rpb25zLmFycmF5SW5kZXhPZihjb250ZXh0LmVuYWJsZWRUcmFuc3BvcnRzLCBuYW1lKSAhPT0gLTEpICYmXG5cdCAgICAgICAgICAgICghY29udGV4dC5kaXNhYmxlZFRyYW5zcG9ydHMgfHxcblx0ICAgICAgICAgICAgICAgIENvbGxlY3Rpb25zLmFycmF5SW5kZXhPZihjb250ZXh0LmRpc2FibGVkVHJhbnNwb3J0cywgbmFtZSkgPT09IC0xKTtcblx0ICAgICAgICB2YXIgdHJhbnNwb3J0O1xuXHQgICAgICAgIGlmIChlbmFibGVkKSB7XG5cdCAgICAgICAgICAgIHRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfc3RyYXRlZ3lfMVtcImRlZmF1bHRcIl0obmFtZSwgcHJpb3JpdHksIG1hbmFnZXIgPyBtYW5hZ2VyLmdldEFzc2lzdGFudCh0cmFuc3BvcnRDbGFzcykgOiB0cmFuc3BvcnRDbGFzcywgQ29sbGVjdGlvbnMuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICAgIGtleTogY29udGV4dC5rZXksXG5cdCAgICAgICAgICAgICAgICBlbmNyeXB0ZWQ6IGNvbnRleHQuZW5jcnlwdGVkLFxuXHQgICAgICAgICAgICAgICAgdGltZWxpbmU6IGNvbnRleHQudGltZWxpbmUsXG5cdCAgICAgICAgICAgICAgICBpZ25vcmVOdWxsT3JpZ2luOiBjb250ZXh0Lmlnbm9yZU51bGxPcmlnaW5cblx0ICAgICAgICAgICAgfSwgb3B0aW9ucykpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgdHJhbnNwb3J0ID0gVW5zdXBwb3J0ZWRTdHJhdGVneTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIG5ld0NvbnRleHQgPSBjb250ZXh0LmRlZihjb250ZXh0LCBuYW1lLCB0cmFuc3BvcnQpWzFdO1xuXHQgICAgICAgIG5ld0NvbnRleHQuVHJhbnNwb3J0cyA9IGNvbnRleHQuVHJhbnNwb3J0cyB8fCB7fTtcblx0ICAgICAgICBuZXdDb250ZXh0LlRyYW5zcG9ydHNbbmFtZV0gPSB0cmFuc3BvcnQ7XG5cdCAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIG5ld0NvbnRleHRdO1xuXHQgICAgfSxcblx0ICAgIHRyYW5zcG9ydF9tYW5hZ2VyOiByZXR1cm5XaXRoT3JpZ2luYWxDb250ZXh0KGZ1bmN0aW9uIChfLCBvcHRpb25zKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyB0cmFuc3BvcnRfbWFuYWdlcl8xW1wiZGVmYXVsdFwiXShvcHRpb25zKTtcblx0ICAgIH0pLFxuXHQgICAgc2VxdWVudGlhbDogcmV0dXJuV2l0aE9yaWdpbmFsQ29udGV4dChmdW5jdGlvbiAoXywgb3B0aW9ucykge1xuXHQgICAgICAgIHZhciBzdHJhdGVnaWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcblx0ICAgICAgICByZXR1cm4gbmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3lfMVtcImRlZmF1bHRcIl0oc3RyYXRlZ2llcywgb3B0aW9ucyk7XG5cdCAgICB9KSxcblx0ICAgIGNhY2hlZDogcmV0dXJuV2l0aE9yaWdpbmFsQ29udGV4dChmdW5jdGlvbiAoY29udGV4dCwgdHRsLCBzdHJhdGVneSkge1xuXHQgICAgICAgIHJldHVybiBuZXcgY2FjaGVkX3N0cmF0ZWd5XzFbXCJkZWZhdWx0XCJdKHN0cmF0ZWd5LCBjb250ZXh0LlRyYW5zcG9ydHMsIHtcblx0ICAgICAgICAgICAgdHRsOiB0dGwsXG5cdCAgICAgICAgICAgIHRpbWVsaW5lOiBjb250ZXh0LnRpbWVsaW5lLFxuXHQgICAgICAgICAgICBlbmNyeXB0ZWQ6IGNvbnRleHQuZW5jcnlwdGVkXG5cdCAgICAgICAgfSk7XG5cdCAgICB9KSxcblx0ICAgIGZpcnN0X2Nvbm5lY3RlZDogcmV0dXJuV2l0aE9yaWdpbmFsQ29udGV4dChmdW5jdGlvbiAoXywgc3RyYXRlZ3kpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IGZpcnN0X2Nvbm5lY3RlZF9zdHJhdGVneV8xW1wiZGVmYXVsdFwiXShzdHJhdGVneSk7XG5cdCAgICB9KSxcblx0ICAgIGJlc3RfY29ubmVjdGVkX2V2ZXI6IHJldHVybldpdGhPcmlnaW5hbENvbnRleHQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBzdHJhdGVnaWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0ICAgICAgICByZXR1cm4gbmV3IGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3lfMVtcImRlZmF1bHRcIl0oc3RyYXRlZ2llcyk7XG5cdCAgICB9KSxcblx0ICAgIGRlbGF5ZWQ6IHJldHVybldpdGhPcmlnaW5hbENvbnRleHQoZnVuY3Rpb24gKF8sIGRlbGF5LCBzdHJhdGVneSkge1xuXHQgICAgICAgIHJldHVybiBuZXcgZGVsYXllZF9zdHJhdGVneV8xW1wiZGVmYXVsdFwiXShzdHJhdGVneSwgeyBkZWxheTogZGVsYXkgfSk7XG5cdCAgICB9KSxcblx0ICAgIFwiaWZcIjogcmV0dXJuV2l0aE9yaWdpbmFsQ29udGV4dChmdW5jdGlvbiAoXywgdGVzdCwgdHJ1ZUJyYW5jaCwgZmFsc2VCcmFuY2gpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IGlmX3N0cmF0ZWd5XzFbXCJkZWZhdWx0XCJdKHRlc3QsIHRydWVCcmFuY2gsIGZhbHNlQnJhbmNoKTtcblx0ICAgIH0pLFxuXHQgICAgaXNfc3VwcG9ydGVkOiByZXR1cm5XaXRoT3JpZ2luYWxDb250ZXh0KGZ1bmN0aW9uIChfLCBzdHJhdGVneSkge1xuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBzdHJhdGVneS5pc1N1cHBvcnRlZCgpO1xuXHQgICAgICAgIH07XG5cdCAgICB9KVxuXHR9O1xuXHRmdW5jdGlvbiBpc1N5bWJvbChleHByZXNzaW9uKSB7XG5cdCAgICByZXR1cm4gKHR5cGVvZiBleHByZXNzaW9uID09PSBcInN0cmluZ1wiKSAmJiBleHByZXNzaW9uLmNoYXJBdCgwKSA9PT0gXCI6XCI7XG5cdH1cblx0ZnVuY3Rpb24gZ2V0U3ltYm9sVmFsdWUoZXhwcmVzc2lvbiwgY29udGV4dCkge1xuXHQgICAgcmV0dXJuIGNvbnRleHRbZXhwcmVzc2lvbi5zbGljZSgxKV07XG5cdH1cblx0ZnVuY3Rpb24gZXZhbHVhdGVMaXN0T2ZFeHByZXNzaW9ucyhleHByZXNzaW9ucywgY29udGV4dCkge1xuXHQgICAgaWYgKGV4cHJlc3Npb25zLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgIHJldHVybiBbW10sIGNvbnRleHRdO1xuXHQgICAgfVxuXHQgICAgdmFyIGhlYWQgPSBldmFsdWF0ZShleHByZXNzaW9uc1swXSwgY29udGV4dCk7XG5cdCAgICB2YXIgdGFpbCA9IGV2YWx1YXRlTGlzdE9mRXhwcmVzc2lvbnMoZXhwcmVzc2lvbnMuc2xpY2UoMSksIGhlYWRbMV0pO1xuXHQgICAgcmV0dXJuIFtbaGVhZFswXV0uY29uY2F0KHRhaWxbMF0pLCB0YWlsWzFdXTtcblx0fVxuXHRmdW5jdGlvbiBldmFsdWF0ZVN0cmluZyhleHByZXNzaW9uLCBjb250ZXh0KSB7XG5cdCAgICBpZiAoIWlzU3ltYm9sKGV4cHJlc3Npb24pKSB7XG5cdCAgICAgICAgcmV0dXJuIFtleHByZXNzaW9uLCBjb250ZXh0XTtcblx0ICAgIH1cblx0ICAgIHZhciB2YWx1ZSA9IGdldFN5bWJvbFZhbHVlKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXHQgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICB0aHJvdyBcIlVuZGVmaW5lZCBzeW1ib2wgXCIgKyBleHByZXNzaW9uO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIFt2YWx1ZSwgY29udGV4dF07XG5cdH1cblx0ZnVuY3Rpb24gZXZhbHVhdGVBcnJheShleHByZXNzaW9uLCBjb250ZXh0KSB7XG5cdCAgICBpZiAoaXNTeW1ib2woZXhwcmVzc2lvblswXSkpIHtcblx0ICAgICAgICB2YXIgZiA9IGdldFN5bWJvbFZhbHVlKGV4cHJlc3Npb25bMF0sIGNvbnRleHQpO1xuXHQgICAgICAgIGlmIChleHByZXNzaW9uLmxlbmd0aCA+IDEpIHtcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IFwiQ2FsbGluZyBub24tZnVuY3Rpb24gXCIgKyBleHByZXNzaW9uWzBdO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHZhciBhcmdzID0gW0NvbGxlY3Rpb25zLmV4dGVuZCh7fSwgY29udGV4dCldLmNvbmNhdChDb2xsZWN0aW9ucy5tYXAoZXhwcmVzc2lvbi5zbGljZSgxKSwgZnVuY3Rpb24gKGFyZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGV2YWx1YXRlKGFyZywgQ29sbGVjdGlvbnMuZXh0ZW5kKHt9LCBjb250ZXh0KSlbMF07XG5cdCAgICAgICAgICAgIH0pKTtcblx0ICAgICAgICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJncyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gW2YsIGNvbnRleHRdO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHQgICAgICAgIHJldHVybiBldmFsdWF0ZUxpc3RPZkV4cHJlc3Npb25zKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXHQgICAgfVxuXHR9XG5cdGZ1bmN0aW9uIGV2YWx1YXRlKGV4cHJlc3Npb24sIGNvbnRleHQpIHtcblx0ICAgIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIikge1xuXHQgICAgICAgIHJldHVybiBldmFsdWF0ZVN0cmluZyhleHByZXNzaW9uLCBjb250ZXh0KTtcblx0ICAgIH1cblx0ICAgIGVsc2UgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcIm9iamVjdFwiKSB7XG5cdCAgICAgICAgaWYgKGV4cHJlc3Npb24gaW5zdGFuY2VvZiBBcnJheSAmJiBleHByZXNzaW9uLmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGV2YWx1YXRlQXJyYXkoZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIFtleHByZXNzaW9uLCBjb250ZXh0XTtcblx0fVxuXG5cbi8qKiovIH0pLFxuLyogNDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGZhY3RvcnlfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xuXHR2YXIgVHJhbnNwb3J0TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBUcmFuc3BvcnRNYW5hZ2VyKG9wdGlvbnMpIHtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQgICAgICAgIHRoaXMubGl2ZXNMZWZ0ID0gdGhpcy5vcHRpb25zLmxpdmVzIHx8IEluZmluaXR5O1xuXHQgICAgfVxuXHQgICAgVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUuZ2V0QXNzaXN0YW50ID0gZnVuY3Rpb24gKHRyYW5zcG9ydCkge1xuXHQgICAgICAgIHJldHVybiBmYWN0b3J5XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlcih0aGlzLCB0cmFuc3BvcnQsIHtcblx0ICAgICAgICAgICAgbWluUGluZ0RlbGF5OiB0aGlzLm9wdGlvbnMubWluUGluZ0RlbGF5LFxuXHQgICAgICAgICAgICBtYXhQaW5nRGVsYXk6IHRoaXMub3B0aW9ucy5tYXhQaW5nRGVsYXlcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICBUcmFuc3BvcnRNYW5hZ2VyLnByb3RvdHlwZS5pc0FsaXZlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmxpdmVzTGVmdCA+IDA7XG5cdCAgICB9O1xuXHQgICAgVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUucmVwb3J0RGVhdGggPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5saXZlc0xlZnQgLT0gMTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gVHJhbnNwb3J0TWFuYWdlcjtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUcmFuc3BvcnRNYW5hZ2VyO1xuXG5cbi8qKiovIH0pLFxuLyogNDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGFzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNDQpO1xuXHR2YXIgaGFuZHNoYWtlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KTtcblx0dmFyIHB1c2hlcl9hdXRob3JpemVyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KTtcblx0dmFyIHRpbWVsaW5lX3NlbmRlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSk7XG5cdHZhciBwcmVzZW5jZV9jaGFubmVsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUwKTtcblx0dmFyIHByaXZhdGVfY2hhbm5lbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MSk7XG5cdHZhciBjaGFubmVsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUyKTtcblx0dmFyIGNvbm5lY3Rpb25fbWFuYWdlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1NCk7XG5cdHZhciBjaGFubmVsc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1NSk7XG5cdHZhciBGYWN0b3J5ID0ge1xuXHQgICAgY3JlYXRlQ2hhbm5lbHM6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IGNoYW5uZWxzXzFbXCJkZWZhdWx0XCJdKCk7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlQ29ubmVjdGlvbk1hbmFnZXI6IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IGNvbm5lY3Rpb25fbWFuYWdlcl8xW1wiZGVmYXVsdFwiXShrZXksIG9wdGlvbnMpO1xuXHQgICAgfSxcblx0ICAgIGNyZWF0ZUNoYW5uZWw6IGZ1bmN0aW9uIChuYW1lLCBwdXNoZXIpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IGNoYW5uZWxfMVtcImRlZmF1bHRcIl0obmFtZSwgcHVzaGVyKTtcblx0ICAgIH0sXG5cdCAgICBjcmVhdGVQcml2YXRlQ2hhbm5lbDogZnVuY3Rpb24gKG5hbWUsIHB1c2hlcikge1xuXHQgICAgICAgIHJldHVybiBuZXcgcHJpdmF0ZV9jaGFubmVsXzFbXCJkZWZhdWx0XCJdKG5hbWUsIHB1c2hlcik7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlUHJlc2VuY2VDaGFubmVsOiBmdW5jdGlvbiAobmFtZSwgcHVzaGVyKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBwcmVzZW5jZV9jaGFubmVsXzFbXCJkZWZhdWx0XCJdKG5hbWUsIHB1c2hlcik7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlVGltZWxpbmVTZW5kZXI6IGZ1bmN0aW9uICh0aW1lbGluZSwgb3B0aW9ucykge1xuXHQgICAgICAgIHJldHVybiBuZXcgdGltZWxpbmVfc2VuZGVyXzFbXCJkZWZhdWx0XCJdKHRpbWVsaW5lLCBvcHRpb25zKTtcblx0ICAgIH0sXG5cdCAgICBjcmVhdGVBdXRob3JpemVyOiBmdW5jdGlvbiAoY2hhbm5lbCwgb3B0aW9ucykge1xuXHQgICAgICAgIGlmIChvcHRpb25zLmF1dGhvcml6ZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuYXV0aG9yaXplcihjaGFubmVsLCBvcHRpb25zKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIG5ldyBwdXNoZXJfYXV0aG9yaXplcl8xW1wiZGVmYXVsdFwiXShjaGFubmVsLCBvcHRpb25zKTtcblx0ICAgIH0sXG5cdCAgICBjcmVhdGVIYW5kc2hha2U6IGZ1bmN0aW9uICh0cmFuc3BvcnQsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBoYW5kc2hha2VfMVtcImRlZmF1bHRcIl0odHJhbnNwb3J0LCBjYWxsYmFjayk7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyOiBmdW5jdGlvbiAobWFuYWdlciwgdHJhbnNwb3J0LCBvcHRpb25zKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBhc3Npc3RhbnRfdG9fdGhlX3RyYW5zcG9ydF9tYW5hZ2VyXzFbXCJkZWZhdWx0XCJdKG1hbmFnZXIsIHRyYW5zcG9ydCwgb3B0aW9ucyk7XG5cdCAgICB9XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRmFjdG9yeTtcblxuXG4vKioqLyB9KSxcbi8qIDQ0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciB1dGlsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIEFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIobWFuYWdlciwgdHJhbnNwb3J0LCBvcHRpb25zKSB7XG5cdCAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcblx0ICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblx0ICAgICAgICB0aGlzLm1pblBpbmdEZWxheSA9IG9wdGlvbnMubWluUGluZ0RlbGF5O1xuXHQgICAgICAgIHRoaXMubWF4UGluZ0RlbGF5ID0gb3B0aW9ucy5tYXhQaW5nRGVsYXk7XG5cdCAgICAgICAgdGhpcy5waW5nRGVsYXkgPSB1bmRlZmluZWQ7XG5cdCAgICB9XG5cdCAgICBBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZUNvbm5lY3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucykge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgb3B0aW9ucyA9IENvbGxlY3Rpb25zLmV4dGVuZCh7fSwgb3B0aW9ucywge1xuXHQgICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IHRoaXMucGluZ0RlbGF5XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB0aGlzLnRyYW5zcG9ydC5jcmVhdGVDb25uZWN0aW9uKG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpO1xuXHQgICAgICAgIHZhciBvcGVuVGltZXN0YW1wID0gbnVsbDtcblx0ICAgICAgICB2YXIgb25PcGVuID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBjb25uZWN0aW9uLnVuYmluZChcIm9wZW5cIiwgb25PcGVuKTtcblx0ICAgICAgICAgICAgY29ubmVjdGlvbi5iaW5kKFwiY2xvc2VkXCIsIG9uQ2xvc2VkKTtcblx0ICAgICAgICAgICAgb3BlblRpbWVzdGFtcCA9IHV0aWxfMVtcImRlZmF1bHRcIl0ubm93KCk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB2YXIgb25DbG9zZWQgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuXHQgICAgICAgICAgICBjb25uZWN0aW9uLnVuYmluZChcImNsb3NlZFwiLCBvbkNsb3NlZCk7XG5cdCAgICAgICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgPT09IDEwMDIgfHwgY2xvc2VFdmVudC5jb2RlID09PSAxMDAzKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5tYW5hZ2VyLnJlcG9ydERlYXRoKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSBpZiAoIWNsb3NlRXZlbnQud2FzQ2xlYW4gJiYgb3BlblRpbWVzdGFtcCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGxpZmVzcGFuID0gdXRpbF8xW1wiZGVmYXVsdFwiXS5ub3coKSAtIG9wZW5UaW1lc3RhbXA7XG5cdCAgICAgICAgICAgICAgICBpZiAobGlmZXNwYW4gPCAyICogX3RoaXMubWF4UGluZ0RlbGF5KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFuYWdlci5yZXBvcnREZWF0aCgpO1xuXHQgICAgICAgICAgICAgICAgICAgIF90aGlzLnBpbmdEZWxheSA9IE1hdGgubWF4KGxpZmVzcGFuIC8gMiwgX3RoaXMubWluUGluZ0RlbGF5KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgY29ubmVjdGlvbi5iaW5kKFwib3BlblwiLCBvbk9wZW4pO1xuXHQgICAgICAgIHJldHVybiBjb25uZWN0aW9uO1xuXHQgICAgfTtcblx0ICAgIEFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLmlzQWxpdmUoKSAmJiB0aGlzLnRyYW5zcG9ydC5pc1N1cHBvcnRlZChlbnZpcm9ubWVudCk7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIEFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlcjtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXI7XG5cblxuLyoqKi8gfSksXG4vKiA0NSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgUHJvdG9jb2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2KTtcblx0dmFyIGNvbm5lY3Rpb25fMSA9IF9fd2VicGFja19yZXF1aXJlX18oNDcpO1xuXHR2YXIgSGFuZHNoYWtlID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIEhhbmRzaGFrZSh0cmFuc3BvcnQsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cdCAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHQgICAgICAgIHRoaXMuYmluZExpc3RlbmVycygpO1xuXHQgICAgfVxuXHQgICAgSGFuZHNoYWtlLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0aGlzLnVuYmluZExpc3RlbmVycygpO1xuXHQgICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cdCAgICB9O1xuXHQgICAgSGFuZHNoYWtlLnByb3RvdHlwZS5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgdGhpcy5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAobSkge1xuXHQgICAgICAgICAgICBfdGhpcy51bmJpbmRMaXN0ZW5lcnMoKTtcblx0ICAgICAgICAgICAgdmFyIHJlc3VsdDtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHJlc3VsdCA9IFByb3RvY29sLnByb2Nlc3NIYW5kc2hha2UobSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLmZpbmlzaChcImVycm9yXCIsIHsgZXJyb3I6IGUgfSk7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcblx0ICAgICAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBpZiAocmVzdWx0LmFjdGlvbiA9PT0gXCJjb25uZWN0ZWRcIikge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuZmluaXNoKFwiY29ubmVjdGVkXCIsIHtcblx0ICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uOiBuZXcgY29ubmVjdGlvbl8xW1wiZGVmYXVsdFwiXShyZXN1bHQuaWQsIF90aGlzLnRyYW5zcG9ydCksXG5cdCAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiByZXN1bHQuYWN0aXZpdHlUaW1lb3V0XG5cdCAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLmZpbmlzaChyZXN1bHQuYWN0aW9uLCB7IGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5vbkNsb3NlZCA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG5cdCAgICAgICAgICAgIF90aGlzLnVuYmluZExpc3RlbmVycygpO1xuXHQgICAgICAgICAgICB2YXIgYWN0aW9uID0gUHJvdG9jb2wuZ2V0Q2xvc2VBY3Rpb24oY2xvc2VFdmVudCkgfHwgXCJiYWNrb2ZmXCI7XG5cdCAgICAgICAgICAgIHZhciBlcnJvciA9IFByb3RvY29sLmdldENsb3NlRXJyb3IoY2xvc2VFdmVudCk7XG5cdCAgICAgICAgICAgIF90aGlzLmZpbmlzaChhY3Rpb24sIHsgZXJyb3I6IGVycm9yIH0pO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy50cmFuc3BvcnQuYmluZChcIm1lc3NhZ2VcIiwgdGhpcy5vbk1lc3NhZ2UpO1xuXHQgICAgICAgIHRoaXMudHJhbnNwb3J0LmJpbmQoXCJjbG9zZWRcIiwgdGhpcy5vbkNsb3NlZCk7XG5cdCAgICB9O1xuXHQgICAgSGFuZHNoYWtlLnByb3RvdHlwZS51bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy50cmFuc3BvcnQudW5iaW5kKFwibWVzc2FnZVwiLCB0aGlzLm9uTWVzc2FnZSk7XG5cdCAgICAgICAgdGhpcy50cmFuc3BvcnQudW5iaW5kKFwiY2xvc2VkXCIsIHRoaXMub25DbG9zZWQpO1xuXHQgICAgfTtcblx0ICAgIEhhbmRzaGFrZS5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKGFjdGlvbiwgcGFyYW1zKSB7XG5cdCAgICAgICAgdGhpcy5jYWxsYmFjayhDb2xsZWN0aW9ucy5leHRlbmQoeyB0cmFuc3BvcnQ6IHRoaXMudHJhbnNwb3J0LCBhY3Rpb246IGFjdGlvbiB9LCBwYXJhbXMpKTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gSGFuZHNoYWtlO1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEhhbmRzaGFrZTtcblxuXG4vKioqLyB9KSxcbi8qIDQ2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdGV4cG9ydHMuZGVjb2RlTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG5cdCAgICB0cnkge1xuXHQgICAgICAgIHZhciBwYXJhbXMgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuZGF0YSA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHBhcmFtcy5kYXRhID0gSlNPTi5wYXJzZShwYXJhbXMuZGF0YSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBwYXJhbXM7XG5cdCAgICB9XG5cdCAgICBjYXRjaCAoZSkge1xuXHQgICAgICAgIHRocm93IHsgdHlwZTogJ01lc3NhZ2VQYXJzZUVycm9yJywgZXJyb3I6IGUsIGRhdGE6IG1lc3NhZ2UuZGF0YSB9O1xuXHQgICAgfVxuXHR9O1xuXHRleHBvcnRzLmVuY29kZU1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHQgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXHR9O1xuXHRleHBvcnRzLnByb2Nlc3NIYW5kc2hha2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHQgICAgbWVzc2FnZSA9IGV4cG9ydHMuZGVjb2RlTWVzc2FnZShtZXNzYWdlKTtcblx0ICAgIGlmIChtZXNzYWdlLmV2ZW50ID09PSBcInB1c2hlcjpjb25uZWN0aW9uX2VzdGFibGlzaGVkXCIpIHtcblx0ICAgICAgICBpZiAoIW1lc3NhZ2UuZGF0YS5hY3Rpdml0eV90aW1lb3V0KSB7XG5cdCAgICAgICAgICAgIHRocm93IFwiTm8gYWN0aXZpdHkgdGltZW91dCBzcGVjaWZpZWQgaW4gaGFuZHNoYWtlXCI7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIGFjdGlvbjogXCJjb25uZWN0ZWRcIixcblx0ICAgICAgICAgICAgaWQ6IG1lc3NhZ2UuZGF0YS5zb2NrZXRfaWQsXG5cdCAgICAgICAgICAgIGFjdGl2aXR5VGltZW91dDogbWVzc2FnZS5kYXRhLmFjdGl2aXR5X3RpbWVvdXQgKiAxMDAwXG5cdCAgICAgICAgfTtcblx0ICAgIH1cblx0ICAgIGVsc2UgaWYgKG1lc3NhZ2UuZXZlbnQgPT09IFwicHVzaGVyOmVycm9yXCIpIHtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBhY3Rpb246IHRoaXMuZ2V0Q2xvc2VBY3Rpb24obWVzc2FnZS5kYXRhKSxcblx0ICAgICAgICAgICAgZXJyb3I6IHRoaXMuZ2V0Q2xvc2VFcnJvcihtZXNzYWdlLmRhdGEpXG5cdCAgICAgICAgfTtcblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHQgICAgICAgIHRocm93IFwiSW52YWxpZCBoYW5kc2hha2VcIjtcblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5nZXRDbG9zZUFjdGlvbiA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG5cdCAgICBpZiAoY2xvc2VFdmVudC5jb2RlIDwgNDAwMCkge1xuXHQgICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgPj0gMTAwMiAmJiBjbG9zZUV2ZW50LmNvZGUgPD0gMTAwNCkge1xuXHQgICAgICAgICAgICByZXR1cm4gXCJiYWNrb2ZmXCI7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPT09IDQwMDApIHtcblx0ICAgICAgICByZXR1cm4gXCJzc2xfb25seVwiO1xuXHQgICAgfVxuXHQgICAgZWxzZSBpZiAoY2xvc2VFdmVudC5jb2RlIDwgNDEwMCkge1xuXHQgICAgICAgIHJldHVybiBcInJlZnVzZWRcIjtcblx0ICAgIH1cblx0ICAgIGVsc2UgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQyMDApIHtcblx0ICAgICAgICByZXR1cm4gXCJiYWNrb2ZmXCI7XG5cdCAgICB9XG5cdCAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPCA0MzAwKSB7XG5cdCAgICAgICAgcmV0dXJuIFwicmV0cnlcIjtcblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHQgICAgICAgIHJldHVybiBcInJlZnVzZWRcIjtcblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5nZXRDbG9zZUVycm9yID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcblx0ICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgIT09IDEwMDAgJiYgY2xvc2VFdmVudC5jb2RlICE9PSAxMDAxKSB7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgdHlwZTogJ1B1c2hlckVycm9yJyxcblx0ICAgICAgICAgICAgZGF0YToge1xuXHQgICAgICAgICAgICAgICAgY29kZTogY2xvc2VFdmVudC5jb2RlLFxuXHQgICAgICAgICAgICAgICAgbWVzc2FnZTogY2xvc2VFdmVudC5yZWFzb24gfHwgY2xvc2VFdmVudC5tZXNzYWdlXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfVxuXHQgICAgZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICB9XG5cdH07XG5cblxuLyoqKi8gfSksXG4vKiA0NyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG5cdCAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcblx0ICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuXHQgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuXHR9O1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgZGlzcGF0Y2hlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNCk7XG5cdHZhciBQcm90b2NvbCA9IF9fd2VicGFja19yZXF1aXJlX18oNDYpO1xuXHR2YXIgbG9nZ2VyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHR2YXIgQ29ubmVjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoQ29ubmVjdGlvbiwgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIENvbm5lY3Rpb24oaWQsIHRyYW5zcG9ydCkge1xuXHQgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuXHQgICAgICAgIHRoaXMuaWQgPSBpZDtcblx0ICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblx0ICAgICAgICB0aGlzLmFjdGl2aXR5VGltZW91dCA9IHRyYW5zcG9ydC5hY3Rpdml0eVRpbWVvdXQ7XG5cdCAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG5cdCAgICB9XG5cdCAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5oYW5kbGVzQWN0aXZpdHlDaGVja3MgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LmhhbmRsZXNBY3Rpdml0eUNoZWNrcygpO1xuXHQgICAgfTtcblx0ICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKGRhdGEpO1xuXHQgICAgfTtcblx0ICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmRfZXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSwgY2hhbm5lbCkge1xuXHQgICAgICAgIHZhciBtZXNzYWdlID0geyBldmVudDogbmFtZSwgZGF0YTogZGF0YSB9O1xuXHQgICAgICAgIGlmIChjaGFubmVsKSB7XG5cdCAgICAgICAgICAgIG1lc3NhZ2UuY2hhbm5lbCA9IGNoYW5uZWw7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGxvZ2dlcl8xW1wiZGVmYXVsdFwiXS5kZWJ1ZygnRXZlbnQgc2VudCcsIG1lc3NhZ2UpO1xuXHQgICAgICAgIHJldHVybiB0aGlzLnNlbmQoUHJvdG9jb2wuZW5jb2RlTWVzc2FnZShtZXNzYWdlKSk7XG5cdCAgICB9O1xuXHQgICAgQ29ubmVjdGlvbi5wcm90b3R5cGUucGluZyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQuc3VwcG9ydHNQaW5nKCkpIHtcblx0ICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucGluZygpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgdGhpcy5zZW5kX2V2ZW50KCdwdXNoZXI6cGluZycsIHt9KTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcblx0ICAgIH07XG5cdCAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgdmFyIGxpc3RlbmVycyA9IHtcblx0ICAgICAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24gKG0pIHtcblx0ICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlO1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gUHJvdG9jb2wuZGVjb2RlTWVzc2FnZShtKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdNZXNzYWdlUGFyc2VFcnJvcicsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBtLmRhdGFcblx0ICAgICAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBsb2dnZXJfMVtcImRlZmF1bHRcIl0uZGVidWcoJ0V2ZW50IHJlY2QnLCBtZXNzYWdlKTtcblx0ICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UuZXZlbnQpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHVzaGVyOmVycm9yJzpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywgeyB0eXBlOiAnUHVzaGVyRXJyb3InLCBkYXRhOiBtZXNzYWdlLmRhdGEgfSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHVzaGVyOnBpbmcnOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdChcInBpbmdcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHVzaGVyOnBvbmcnOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdChcInBvbmdcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBhY3Rpdml0eTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuZW1pdChcImFjdGl2aXR5XCIpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KFwiZXJyb3JcIiwgeyB0eXBlOiBcIldlYlNvY2tldEVycm9yXCIsIGVycm9yOiBlcnJvciB9KTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgY2xvc2VkOiBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuXHQgICAgICAgICAgICAgICAgdW5iaW5kTGlzdGVuZXJzKCk7XG5cdCAgICAgICAgICAgICAgICBpZiAoY2xvc2VFdmVudCAmJiBjbG9zZUV2ZW50LmNvZGUpIHtcblx0ICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVDbG9zZUV2ZW50KGNsb3NlRXZlbnQpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0ID0gbnVsbDtcblx0ICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoXCJjbG9zZWRcIik7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIHZhciB1bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIENvbGxlY3Rpb25zLm9iamVjdEFwcGx5KGxpc3RlbmVycywgZnVuY3Rpb24gKGxpc3RlbmVyLCBldmVudCkge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LnVuYmluZChldmVudCwgbGlzdGVuZXIpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIENvbGxlY3Rpb25zLm9iamVjdEFwcGx5KGxpc3RlbmVycywgZnVuY3Rpb24gKGxpc3RlbmVyLCBldmVudCkge1xuXHQgICAgICAgICAgICBfdGhpcy50cmFuc3BvcnQuYmluZChldmVudCwgbGlzdGVuZXIpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLmhhbmRsZUNsb3NlRXZlbnQgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuXHQgICAgICAgIHZhciBhY3Rpb24gPSBQcm90b2NvbC5nZXRDbG9zZUFjdGlvbihjbG9zZUV2ZW50KTtcblx0ICAgICAgICB2YXIgZXJyb3IgPSBQcm90b2NvbC5nZXRDbG9zZUVycm9yKGNsb3NlRXZlbnQpO1xuXHQgICAgICAgIGlmIChlcnJvcikge1xuXHQgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoYWN0aW9uKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZW1pdChhY3Rpb24pO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICByZXR1cm4gQ29ubmVjdGlvbjtcblx0fShkaXNwYXRjaGVyXzFbXCJkZWZhdWx0XCJdKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29ubmVjdGlvbjtcblxuXG4vKioqLyB9KSxcbi8qIDQ4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgUHVzaGVyQXV0aG9yaXplciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBQdXNoZXJBdXRob3JpemVyKGNoYW5uZWwsIG9wdGlvbnMpIHtcblx0ICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuXHQgICAgICAgIHZhciBhdXRoVHJhbnNwb3J0ID0gb3B0aW9ucy5hdXRoVHJhbnNwb3J0O1xuXHQgICAgICAgIGlmICh0eXBlb2YgcnVudGltZV8xW1wiZGVmYXVsdFwiXS5nZXRBdXRob3JpemVycygpW2F1dGhUcmFuc3BvcnRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgICAgICAgIHRocm93IFwiJ1wiICsgYXV0aFRyYW5zcG9ydCArIFwiJyBpcyBub3QgYSByZWNvZ25pemVkIGF1dGggdHJhbnNwb3J0XCI7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMudHlwZSA9IGF1dGhUcmFuc3BvcnQ7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0ICAgICAgICB0aGlzLmF1dGhPcHRpb25zID0gKG9wdGlvbnMgfHwge30pLmF1dGggfHwge307XG5cdCAgICB9XG5cdCAgICBQdXNoZXJBdXRob3JpemVyLnByb3RvdHlwZS5jb21wb3NlUXVlcnkgPSBmdW5jdGlvbiAoc29ja2V0SWQpIHtcblx0ICAgICAgICB2YXIgcXVlcnkgPSAnc29ja2V0X2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQoc29ja2V0SWQpICtcblx0ICAgICAgICAgICAgJyZjaGFubmVsX25hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNoYW5uZWwubmFtZSk7XG5cdCAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmF1dGhPcHRpb25zLnBhcmFtcykge1xuXHQgICAgICAgICAgICBxdWVyeSArPSBcIiZcIiArIGVuY29kZVVSSUNvbXBvbmVudChpKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuYXV0aE9wdGlvbnMucGFyYW1zW2ldKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuXHQgICAgfTtcblx0ICAgIFB1c2hlckF1dGhvcml6ZXIucHJvdG90eXBlLmF1dGhvcml6ZSA9IGZ1bmN0aW9uIChzb2NrZXRJZCwgY2FsbGJhY2spIHtcblx0ICAgICAgICBQdXNoZXJBdXRob3JpemVyLmF1dGhvcml6ZXJzID0gUHVzaGVyQXV0aG9yaXplci5hdXRob3JpemVycyB8fCBydW50aW1lXzFbXCJkZWZhdWx0XCJdLmdldEF1dGhvcml6ZXJzKCk7XG5cdCAgICAgICAgcmV0dXJuIFB1c2hlckF1dGhvcml6ZXIuYXV0aG9yaXplcnNbdGhpcy50eXBlXS5jYWxsKHRoaXMsIHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0sIHNvY2tldElkLCBjYWxsYmFjayk7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIFB1c2hlckF1dGhvcml6ZXI7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUHVzaGVyQXV0aG9yaXplcjtcblxuXG4vKioqLyB9KSxcbi8qIDQ5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgVGltZWxpbmVTZW5kZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gVGltZWxpbmVTZW5kZXIodGltZWxpbmUsIG9wdGlvbnMpIHtcblx0ICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGltZWxpbmU7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0ICAgIH1cblx0ICAgIFRpbWVsaW5lU2VuZGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGVuY3J5cHRlZCwgY2FsbGJhY2spIHtcblx0ICAgICAgICBpZiAodGhpcy50aW1lbGluZS5pc0VtcHR5KCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLnRpbWVsaW5lLnNlbmQocnVudGltZV8xW1wiZGVmYXVsdFwiXS5UaW1lbGluZVRyYW5zcG9ydC5nZXRBZ2VudCh0aGlzLCBlbmNyeXB0ZWQpLCBjYWxsYmFjayk7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIFRpbWVsaW5lU2VuZGVyO1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFRpbWVsaW5lU2VuZGVyO1xuXG5cbi8qKiovIH0pLFxuLyogNTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuXHQgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG5cdCAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cblx0ICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcblx0fTtcblx0dmFyIHByaXZhdGVfY2hhbm5lbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MSk7XG5cdHZhciBsb2dnZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdHZhciBtZW1iZXJzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKTtcblx0dmFyIHVybF9zdG9yZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cdHZhciBQcmVzZW5jZUNoYW5uZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuXHQgICAgX19leHRlbmRzKFByZXNlbmNlQ2hhbm5lbCwgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIFByZXNlbmNlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcblx0ICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBuYW1lLCBwdXNoZXIpO1xuXHQgICAgICAgIHRoaXMubWVtYmVycyA9IG5ldyBtZW1iZXJzXzFbXCJkZWZhdWx0XCJdKCk7XG5cdCAgICB9XG5cdCAgICBQcmVzZW5jZUNoYW5uZWwucHJvdG90eXBlLmF1dGhvcml6ZSA9IGZ1bmN0aW9uIChzb2NrZXRJZCwgY2FsbGJhY2spIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIF9zdXBlci5wcm90b3R5cGUuYXV0aG9yaXplLmNhbGwodGhpcywgc29ja2V0SWQsIGZ1bmN0aW9uIChlcnJvciwgYXV0aERhdGEpIHtcblx0ICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuXHQgICAgICAgICAgICAgICAgaWYgKGF1dGhEYXRhLmNoYW5uZWxfZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IHVybF9zdG9yZV8xW1wiZGVmYXVsdFwiXS5idWlsZExvZ1N1ZmZpeChcImF1dGhlbnRpY2F0aW9uRW5kcG9pbnRcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgbG9nZ2VyXzFbXCJkZWZhdWx0XCJdLndhcm4oKFwiSW52YWxpZCBhdXRoIHJlc3BvbnNlIGZvciBjaGFubmVsICdcIiArIF90aGlzLm5hbWUgKyBcIicsXCIpICtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgKFwiZXhwZWN0ZWQgJ2NoYW5uZWxfZGF0YScgZmllbGQuIFwiICsgc3VmZml4KSk7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soXCJJbnZhbGlkIGF1dGggcmVzcG9uc2VcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgdmFyIGNoYW5uZWxEYXRhID0gSlNPTi5wYXJzZShhdXRoRGF0YS5jaGFubmVsX2RhdGEpO1xuXHQgICAgICAgICAgICAgICAgX3RoaXMubWVtYmVycy5zZXRNeUlEKGNoYW5uZWxEYXRhLnVzZXJfaWQpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhdXRoRGF0YSk7XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHQgICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuXHQgICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcblx0ICAgICAgICAgICAgY2FzZSBcInB1c2hlcl9pbnRlcm5hbDpzdWJzY3JpcHRpb25fc3VjY2VlZGVkXCI6XG5cdCAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlZCA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2hlci51bnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW1iZXJzLm9uU3Vic2NyaXB0aW9uKGRhdGEpO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInB1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkXCIsIHRoaXMubWVtYmVycyk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgY2FzZSBcInB1c2hlcl9pbnRlcm5hbDptZW1iZXJfYWRkZWRcIjpcblx0ICAgICAgICAgICAgICAgIHZhciBhZGRlZE1lbWJlciA9IHRoaXMubWVtYmVycy5hZGRNZW1iZXIoZGF0YSk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjptZW1iZXJfYWRkZWQnLCBhZGRlZE1lbWJlcik7XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgY2FzZSBcInB1c2hlcl9pbnRlcm5hbDptZW1iZXJfcmVtb3ZlZFwiOlxuXHQgICAgICAgICAgICAgICAgdmFyIHJlbW92ZWRNZW1iZXIgPSB0aGlzLm1lbWJlcnMucmVtb3ZlTWVtYmVyKGRhdGEpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHJlbW92ZWRNZW1iZXIpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjptZW1iZXJfcmVtb3ZlZCcsIHJlbW92ZWRNZW1iZXIpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgICAgICAgICBwcml2YXRlX2NoYW5uZWxfMVtcImRlZmF1bHRcIl0ucHJvdG90eXBlLmhhbmRsZUV2ZW50LmNhbGwodGhpcywgZXZlbnQsIGRhdGEpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBQcmVzZW5jZUNoYW5uZWwucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5tZW1iZXJzLnJlc2V0KCk7XG5cdCAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kaXNjb25uZWN0LmNhbGwodGhpcyk7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIFByZXNlbmNlQ2hhbm5lbDtcblx0fShwcml2YXRlX2NoYW5uZWxfMVtcImRlZmF1bHRcIl0pKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQcmVzZW5jZUNoYW5uZWw7XG5cblxuLyoqKi8gfSksXG4vKiA1MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG5cdCAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcblx0ICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuXHQgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuXHR9O1xuXHR2YXIgZmFjdG9yeV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG5cdHZhciBjaGFubmVsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUyKTtcblx0dmFyIFByaXZhdGVDaGFubmVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcblx0ICAgIF9fZXh0ZW5kcyhQcml2YXRlQ2hhbm5lbCwgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIFByaXZhdGVDaGFubmVsKCkge1xuXHQgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgfVxuXHQgICAgUHJpdmF0ZUNoYW5uZWwucHJvdG90eXBlLmF1dGhvcml6ZSA9IGZ1bmN0aW9uIChzb2NrZXRJZCwgY2FsbGJhY2spIHtcblx0ICAgICAgICB2YXIgYXV0aG9yaXplciA9IGZhY3RvcnlfMVtcImRlZmF1bHRcIl0uY3JlYXRlQXV0aG9yaXplcih0aGlzLCB0aGlzLnB1c2hlci5jb25maWcpO1xuXHQgICAgICAgIHJldHVybiBhdXRob3JpemVyLmF1dGhvcml6ZShzb2NrZXRJZCwgY2FsbGJhY2spO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBQcml2YXRlQ2hhbm5lbDtcblx0fShjaGFubmVsXzFbXCJkZWZhdWx0XCJdKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUHJpdmF0ZUNoYW5uZWw7XG5cblxuLyoqKi8gfSksXG4vKiA1MiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG5cdCAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcblx0ICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuXHQgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuXHR9O1xuXHR2YXIgZGlzcGF0Y2hlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNCk7XG5cdHZhciBFcnJvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKTtcblx0dmFyIGxvZ2dlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0dmFyIENoYW5uZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuXHQgICAgX19leHRlbmRzKENoYW5uZWwsIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuXHQgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuXHQgICAgICAgICAgICBsb2dnZXJfMVtcImRlZmF1bHRcIl0uZGVidWcoJ05vIGNhbGxiYWNrcyBvbiAnICsgbmFtZSArICcgZm9yICcgKyBldmVudCk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcblx0ICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcblx0ICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSBmYWxzZTtcblx0ICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcblx0ICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCA9IGZhbHNlO1xuXHQgICAgfVxuXHQgICAgQ2hhbm5lbC5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24gKHNvY2tldElkLCBjYWxsYmFjaykge1xuXHQgICAgICAgIHJldHVybiBjYWxsYmFjayhmYWxzZSwge30pO1xuXHQgICAgfTtcblx0ICAgIENoYW5uZWwucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblx0ICAgICAgICBpZiAoZXZlbnQuaW5kZXhPZihcImNsaWVudC1cIikgIT09IDApIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9ycy5CYWRFdmVudE5hbWUoXCJFdmVudCAnXCIgKyBldmVudCArIFwiJyBkb2VzIG5vdCBzdGFydCB3aXRoICdjbGllbnQtJ1wiKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucHVzaGVyLnNlbmRfZXZlbnQoZXZlbnQsIGRhdGEsIHRoaXMubmFtZSk7XG5cdCAgICB9O1xuXHQgICAgQ2hhbm5lbC5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSBmYWxzZTtcblx0ICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcblx0ICAgIH07XG5cdCAgICBDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuXHQgICAgICAgIGlmIChldmVudC5pbmRleE9mKFwicHVzaGVyX2ludGVybmFsOlwiKSA9PT0gMCkge1xuXHQgICAgICAgICAgICBpZiAoZXZlbnQgPT09IFwicHVzaGVyX2ludGVybmFsOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWRcIikge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInB1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkXCIsIGRhdGEpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIGRhdGEpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBDaGFubmVsLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICBpZiAodGhpcy5zdWJzY3JpYmVkKSB7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gdHJ1ZTtcblx0ICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCA9IGZhbHNlO1xuXHQgICAgICAgIHRoaXMuYXV0aG9yaXplKHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uc29ja2V0X2lkLCBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcblx0ICAgICAgICAgICAgaWYgKGVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVFdmVudCgncHVzaGVyOnN1YnNjcmlwdGlvbl9lcnJvcicsIGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMucHVzaGVyLnNlbmRfZXZlbnQoJ3B1c2hlcjpzdWJzY3JpYmUnLCB7XG5cdCAgICAgICAgICAgICAgICAgICAgYXV0aDogZGF0YS5hdXRoLFxuXHQgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxfZGF0YTogZGF0YS5jaGFubmVsX2RhdGEsXG5cdCAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMubmFtZVxuXHQgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICBDaGFubmVsLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSBmYWxzZTtcblx0ICAgICAgICB0aGlzLnB1c2hlci5zZW5kX2V2ZW50KCdwdXNoZXI6dW5zdWJzY3JpYmUnLCB7XG5cdCAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIENoYW5uZWwucHJvdG90eXBlLmNhbmNlbFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCA9IHRydWU7XG5cdCAgICB9O1xuXHQgICAgQ2hhbm5lbC5wcm90b3R5cGUucmVpbnN0YXRlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkID0gZmFsc2U7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIENoYW5uZWw7XG5cdH0oZGlzcGF0Y2hlcl8xW1wiZGVmYXVsdFwiXSkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IENoYW5uZWw7XG5cblxuLyoqKi8gfSksXG4vKiA1MyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgTWVtYmVycyA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBNZW1iZXJzKCkge1xuXHQgICAgICAgIHRoaXMucmVzZXQoKTtcblx0ICAgIH1cblx0ICAgIE1lbWJlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChpZCkge1xuXHQgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5tZW1iZXJzLCBpZCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgICAgIGlkOiBpZCxcblx0ICAgICAgICAgICAgICAgIGluZm86IHRoaXMubWVtYmVyc1tpZF1cblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBNZW1iZXJzLnByb3RvdHlwZS5lYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICBDb2xsZWN0aW9ucy5vYmplY3RBcHBseSh0aGlzLm1lbWJlcnMsIGZ1bmN0aW9uIChtZW1iZXIsIGlkKSB7XG5cdCAgICAgICAgICAgIGNhbGxiYWNrKF90aGlzLmdldChpZCkpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIE1lbWJlcnMucHJvdG90eXBlLnNldE15SUQgPSBmdW5jdGlvbiAoaWQpIHtcblx0ICAgICAgICB0aGlzLm15SUQgPSBpZDtcblx0ICAgIH07XG5cdCAgICBNZW1iZXJzLnByb3RvdHlwZS5vblN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb25EYXRhKSB7XG5cdCAgICAgICAgdGhpcy5tZW1iZXJzID0gc3Vic2NyaXB0aW9uRGF0YS5wcmVzZW5jZS5oYXNoO1xuXHQgICAgICAgIHRoaXMuY291bnQgPSBzdWJzY3JpcHRpb25EYXRhLnByZXNlbmNlLmNvdW50O1xuXHQgICAgICAgIHRoaXMubWUgPSB0aGlzLmdldCh0aGlzLm15SUQpO1xuXHQgICAgfTtcblx0ICAgIE1lbWJlcnMucHJvdG90eXBlLmFkZE1lbWJlciA9IGZ1bmN0aW9uIChtZW1iZXJEYXRhKSB7XG5cdCAgICAgICAgaWYgKHRoaXMuZ2V0KG1lbWJlckRhdGEudXNlcl9pZCkgPT09IG51bGwpIHtcblx0ICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLm1lbWJlcnNbbWVtYmVyRGF0YS51c2VyX2lkXSA9IG1lbWJlckRhdGEudXNlcl9pbmZvO1xuXHQgICAgICAgIHJldHVybiB0aGlzLmdldChtZW1iZXJEYXRhLnVzZXJfaWQpO1xuXHQgICAgfTtcblx0ICAgIE1lbWJlcnMucHJvdG90eXBlLnJlbW92ZU1lbWJlciA9IGZ1bmN0aW9uIChtZW1iZXJEYXRhKSB7XG5cdCAgICAgICAgdmFyIG1lbWJlciA9IHRoaXMuZ2V0KG1lbWJlckRhdGEudXNlcl9pZCk7XG5cdCAgICAgICAgaWYgKG1lbWJlcikge1xuXHQgICAgICAgICAgICBkZWxldGUgdGhpcy5tZW1iZXJzW21lbWJlckRhdGEudXNlcl9pZF07XG5cdCAgICAgICAgICAgIHRoaXMuY291bnQtLTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIG1lbWJlcjtcblx0ICAgIH07XG5cdCAgICBNZW1iZXJzLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0aGlzLm1lbWJlcnMgPSB7fTtcblx0ICAgICAgICB0aGlzLmNvdW50ID0gMDtcblx0ICAgICAgICB0aGlzLm15SUQgPSBudWxsO1xuXHQgICAgICAgIHRoaXMubWUgPSBudWxsO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBNZW1iZXJzO1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1lbWJlcnM7XG5cblxuLyoqKi8gfSksXG4vKiA1NCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG5cdCAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcblx0ICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuXHQgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuXHR9O1xuXHR2YXIgZGlzcGF0Y2hlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNCk7XG5cdHZhciB0aW1lcnNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXHR2YXIgbG9nZ2VyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgcnVudGltZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIENvbm5lY3Rpb25NYW5hZ2VyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcblx0ICAgIF9fZXh0ZW5kcyhDb25uZWN0aW9uTWFuYWdlciwgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIENvbm5lY3Rpb25NYW5hZ2VyKGtleSwgb3B0aW9ucykge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG5cdCAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0ICAgICAgICB0aGlzLnN0YXRlID0gXCJpbml0aWFsaXplZFwiO1xuXHQgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG5cdCAgICAgICAgdGhpcy5lbmNyeXB0ZWQgPSAhIW9wdGlvbnMuZW5jcnlwdGVkO1xuXHQgICAgICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLm9wdGlvbnMudGltZWxpbmU7XG5cdCAgICAgICAgdGhpcy5jb25uZWN0aW9uQ2FsbGJhY2tzID0gdGhpcy5idWlsZENvbm5lY3Rpb25DYWxsYmFja3MoKTtcblx0ICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2tzID0gdGhpcy5idWlsZEVycm9yQ2FsbGJhY2tzKCk7XG5cdCAgICAgICAgdGhpcy5oYW5kc2hha2VDYWxsYmFja3MgPSB0aGlzLmJ1aWxkSGFuZHNoYWtlQ2FsbGJhY2tzKHRoaXMuZXJyb3JDYWxsYmFja3MpO1xuXHQgICAgICAgIHZhciBOZXR3b3JrID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5nZXROZXR3b3JrKCk7XG5cdCAgICAgICAgTmV0d29yay5iaW5kKFwib25saW5lXCIsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgX3RoaXMudGltZWxpbmUuaW5mbyh7IG5ldGluZm86IFwib25saW5lXCIgfSk7XG5cdCAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0ZSA9PT0gXCJjb25uZWN0aW5nXCIgfHwgX3RoaXMuc3RhdGUgPT09IFwidW5hdmFpbGFibGVcIikge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMucmV0cnlJbigwKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIE5ldHdvcmsuYmluZChcIm9mZmxpbmVcIiwgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBfdGhpcy50aW1lbGluZS5pbmZvKHsgbmV0aW5mbzogXCJvZmZsaW5lXCIgfSk7XG5cdCAgICAgICAgICAgIGlmIChfdGhpcy5jb25uZWN0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5zZW5kQWN0aXZpdHlDaGVjaygpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgdGhpcy51cGRhdGVTdHJhdGVneSgpO1xuXHQgICAgfVxuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbiB8fCB0aGlzLnJ1bm5lcikge1xuXHQgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICghdGhpcy5zdHJhdGVneS5pc1N1cHBvcnRlZCgpKSB7XG5cdCAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoXCJmYWlsZWRcIik7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShcImNvbm5lY3RpbmdcIik7XG5cdCAgICAgICAgdGhpcy5zdGFydENvbm5lY3RpbmcoKTtcblx0ICAgICAgICB0aGlzLnNldFVuYXZhaWxhYmxlVGltZXIoKTtcblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnNlbmQoZGF0YSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5zZW5kX2V2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEsIGNoYW5uZWwpIHtcblx0ICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc2VuZF9ldmVudChuYW1lLCBkYXRhLCBjaGFubmVsKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5kaXNjb25uZWN0SW50ZXJuYWxseSgpO1xuXHQgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoXCJkaXNjb25uZWN0ZWRcIik7XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmlzRW5jcnlwdGVkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmVuY3J5cHRlZDtcblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc3RhcnRDb25uZWN0aW5nID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKGVycm9yLCBoYW5kc2hha2UpIHtcblx0ICAgICAgICAgICAgaWYgKGVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5ydW5uZXIgPSBfdGhpcy5zdHJhdGVneS5jb25uZWN0KDAsIGNhbGxiYWNrKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIGlmIChoYW5kc2hha2UuYWN0aW9uID09PSBcImVycm9yXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KFwiZXJyb3JcIiwgeyB0eXBlOiBcIkhhbmRzaGFrZUVycm9yXCIsIGVycm9yOiBoYW5kc2hha2UuZXJyb3IgfSk7XG5cdCAgICAgICAgICAgICAgICAgICAgX3RoaXMudGltZWxpbmUuZXJyb3IoeyBoYW5kc2hha2VFcnJvcjogaGFuZHNoYWtlLmVycm9yIH0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWJvcnRDb25uZWN0aW5nKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZHNoYWtlQ2FsbGJhY2tzW2hhbmRzaGFrZS5hY3Rpb25dKGhhbmRzaGFrZSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMucnVubmVyID0gdGhpcy5zdHJhdGVneS5jb25uZWN0KDAsIGNhbGxiYWNrKTtcblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYWJvcnRDb25uZWN0aW5nID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLnJ1bm5lcikge1xuXHQgICAgICAgICAgICB0aGlzLnJ1bm5lci5hYm9ydCgpO1xuXHQgICAgICAgICAgICB0aGlzLnJ1bm5lciA9IG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5kaXNjb25uZWN0SW50ZXJuYWxseSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0aGlzLmFib3J0Q29ubmVjdGluZygpO1xuXHQgICAgICAgIHRoaXMuY2xlYXJSZXRyeVRpbWVyKCk7XG5cdCAgICAgICAgdGhpcy5jbGVhclVuYXZhaWxhYmxlVGltZXIoKTtcblx0ICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG5cdCAgICAgICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5hYmFuZG9uQ29ubmVjdGlvbigpO1xuXHQgICAgICAgICAgICBjb25uZWN0aW9uLmNsb3NlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTdHJhdGVneSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gdGhpcy5vcHRpb25zLmdldFN0cmF0ZWd5KHtcblx0ICAgICAgICAgICAga2V5OiB0aGlzLmtleSxcblx0ICAgICAgICAgICAgdGltZWxpbmU6IHRoaXMudGltZWxpbmUsXG5cdCAgICAgICAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWRcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUucmV0cnlJbiA9IGZ1bmN0aW9uIChkZWxheSkge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHsgYWN0aW9uOiBcInJldHJ5XCIsIGRlbGF5OiBkZWxheSB9KTtcblx0ICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZW1pdChcImNvbm5lY3RpbmdfaW5cIiwgTWF0aC5yb3VuZChkZWxheSAvIDEwMDApKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy5yZXRyeVRpbWVyID0gbmV3IHRpbWVyc18xLk9uZU9mZlRpbWVyKGRlbGF5IHx8IDAsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgX3RoaXMuZGlzY29ubmVjdEludGVybmFsbHkoKTtcblx0ICAgICAgICAgICAgX3RoaXMuY29ubmVjdCgpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5jbGVhclJldHJ5VGltZXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMucmV0cnlUaW1lcikge1xuXHQgICAgICAgICAgICB0aGlzLnJldHJ5VGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuXHQgICAgICAgICAgICB0aGlzLnJldHJ5VGltZXIgPSBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2V0VW5hdmFpbGFibGVUaW1lciA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHRoaXMudW5hdmFpbGFibGVUaW1lciA9IG5ldyB0aW1lcnNfMS5PbmVPZmZUaW1lcih0aGlzLm9wdGlvbnMudW5hdmFpbGFibGVUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXRlKFwidW5hdmFpbGFibGVcIik7XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmNsZWFyVW5hdmFpbGFibGVUaW1lciA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy51bmF2YWlsYWJsZVRpbWVyKSB7XG5cdCAgICAgICAgICAgIHRoaXMudW5hdmFpbGFibGVUaW1lci5lbnN1cmVBYm9ydGVkKCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5zZW5kQWN0aXZpdHlDaGVjayA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHRoaXMuc3RvcEFjdGl2aXR5Q2hlY2soKTtcblx0ICAgICAgICB0aGlzLmNvbm5lY3Rpb24ucGluZygpO1xuXHQgICAgICAgIHRoaXMuYWN0aXZpdHlUaW1lciA9IG5ldyB0aW1lcnNfMS5PbmVPZmZUaW1lcih0aGlzLm9wdGlvbnMucG9uZ1RpbWVvdXQsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgX3RoaXMudGltZWxpbmUuZXJyb3IoeyBwb25nX3RpbWVkX291dDogX3RoaXMub3B0aW9ucy5wb25nVGltZW91dCB9KTtcblx0ICAgICAgICAgICAgX3RoaXMucmV0cnlJbigwKTtcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUucmVzZXRBY3Rpdml0eUNoZWNrID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgdGhpcy5zdG9wQWN0aXZpdHlDaGVjaygpO1xuXHQgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24gJiYgIXRoaXMuY29ubmVjdGlvbi5oYW5kbGVzQWN0aXZpdHlDaGVja3MoKSkge1xuXHQgICAgICAgICAgICB0aGlzLmFjdGl2aXR5VGltZXIgPSBuZXcgdGltZXJzXzEuT25lT2ZmVGltZXIodGhpcy5hY3Rpdml0eVRpbWVvdXQsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnNlbmRBY3Rpdml0eUNoZWNrKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc3RvcEFjdGl2aXR5Q2hlY2sgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMuYWN0aXZpdHlUaW1lcikge1xuXHQgICAgICAgICAgICB0aGlzLmFjdGl2aXR5VGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYnVpbGRDb25uZWN0aW9uQ2FsbGJhY2tzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBwaW5nOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5zZW5kX2V2ZW50KCdwdXNoZXI6cG9uZycsIHt9KTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgYWN0aXZpdHk6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KFwiZXJyb3JcIiwgeyB0eXBlOiBcIldlYlNvY2tldEVycm9yXCIsIGVycm9yOiBlcnJvciB9KTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgY2xvc2VkOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5hYmFuZG9uQ29ubmVjdGlvbigpO1xuXHQgICAgICAgICAgICAgICAgaWYgKF90aGlzLnNob3VsZFJldHJ5KCkpIHtcblx0ICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXRyeUluKDEwMDApO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYnVpbGRIYW5kc2hha2VDYWxsYmFja3MgPSBmdW5jdGlvbiAoZXJyb3JDYWxsYmFja3MpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHJldHVybiBDb2xsZWN0aW9ucy5leHRlbmQoe30sIGVycm9yQ2FsbGJhY2tzLCB7XG5cdCAgICAgICAgICAgIGNvbm5lY3RlZDogZnVuY3Rpb24gKGhhbmRzaGFrZSkge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZpdHlUaW1lb3V0ID0gTWF0aC5taW4oX3RoaXMub3B0aW9ucy5hY3Rpdml0eVRpbWVvdXQsIGhhbmRzaGFrZS5hY3Rpdml0eVRpbWVvdXQsIGhhbmRzaGFrZS5jb25uZWN0aW9uLmFjdGl2aXR5VGltZW91dCB8fCBJbmZpbml0eSk7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5jbGVhclVuYXZhaWxhYmxlVGltZXIoKTtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnNldENvbm5lY3Rpb24oaGFuZHNoYWtlLmNvbm5lY3Rpb24pO1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuc29ja2V0X2lkID0gX3RoaXMuY29ubmVjdGlvbi5pZDtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXRlKFwiY29ubmVjdGVkXCIsIHsgc29ja2V0X2lkOiBfdGhpcy5zb2NrZXRfaWQgfSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYnVpbGRFcnJvckNhbGxiYWNrcyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHZhciB3aXRoRXJyb3JFbWl0dGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocmVzdWx0KSB7XG5cdCAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdChcImVycm9yXCIsIHsgdHlwZTogXCJXZWJTb2NrZXRFcnJvclwiLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIHNzbF9vbmx5OiB3aXRoRXJyb3JFbWl0dGVkKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLmVuY3J5cHRlZCA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVTdHJhdGVneSgpO1xuXHQgICAgICAgICAgICAgICAgX3RoaXMucmV0cnlJbigwKTtcblx0ICAgICAgICAgICAgfSksXG5cdCAgICAgICAgICAgIHJlZnVzZWQ6IHdpdGhFcnJvckVtaXR0ZWQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuZGlzY29ubmVjdCgpO1xuXHQgICAgICAgICAgICB9KSxcblx0ICAgICAgICAgICAgYmFja29mZjogd2l0aEVycm9yRW1pdHRlZChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5yZXRyeUluKDEwMDApO1xuXHQgICAgICAgICAgICB9KSxcblx0ICAgICAgICAgICAgcmV0cnk6IHdpdGhFcnJvckVtaXR0ZWQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMucmV0cnlJbigwKTtcblx0ICAgICAgICAgICAgfSlcblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5zZXRDb25uZWN0aW9uID0gZnVuY3Rpb24gKGNvbm5lY3Rpb24pIHtcblx0ICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuXHQgICAgICAgIGZvciAodmFyIGV2ZW50IGluIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrcykge1xuXHQgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZChldmVudCwgdGhpcy5jb25uZWN0aW9uQ2FsbGJhY2tzW2V2ZW50XSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMucmVzZXRBY3Rpdml0eUNoZWNrKCk7XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmFiYW5kb25Db25uZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICghdGhpcy5jb25uZWN0aW9uKSB7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy5zdG9wQWN0aXZpdHlDaGVjaygpO1xuXHQgICAgICAgIGZvciAodmFyIGV2ZW50IGluIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrcykge1xuXHQgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24udW5iaW5kKGV2ZW50LCB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3NbZXZlbnRdKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB0aGlzLmNvbm5lY3Rpb247XG5cdCAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcblx0ICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcblx0ICAgIH07XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUudXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAobmV3U3RhdGUsIGRhdGEpIHtcblx0ICAgICAgICB2YXIgcHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdCAgICAgICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuXHQgICAgICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBuZXdTdGF0ZSkge1xuXHQgICAgICAgICAgICB2YXIgbmV3U3RhdGVEZXNjcmlwdGlvbiA9IG5ld1N0YXRlO1xuXHQgICAgICAgICAgICBpZiAobmV3U3RhdGVEZXNjcmlwdGlvbiA9PT0gXCJjb25uZWN0ZWRcIikge1xuXHQgICAgICAgICAgICAgICAgbmV3U3RhdGVEZXNjcmlwdGlvbiArPSBcIiB3aXRoIG5ldyBzb2NrZXQgSUQgXCIgKyBkYXRhLnNvY2tldF9pZDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBsb2dnZXJfMVtcImRlZmF1bHRcIl0uZGVidWcoJ1N0YXRlIGNoYW5nZWQnLCBwcmV2aW91c1N0YXRlICsgJyAtPiAnICsgbmV3U3RhdGVEZXNjcmlwdGlvbik7XG5cdCAgICAgICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh7IHN0YXRlOiBuZXdTdGF0ZSwgcGFyYW1zOiBkYXRhIH0pO1xuXHQgICAgICAgICAgICB0aGlzLmVtaXQoJ3N0YXRlX2NoYW5nZScsIHsgcHJldmlvdXM6IHByZXZpb3VzU3RhdGUsIGN1cnJlbnQ6IG5ld1N0YXRlIH0pO1xuXHQgICAgICAgICAgICB0aGlzLmVtaXQobmV3U3RhdGUsIGRhdGEpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2hvdWxkUmV0cnkgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFwiY29ubmVjdGluZ1wiIHx8IHRoaXMuc3RhdGUgPT09IFwiY29ubmVjdGVkXCI7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIENvbm5lY3Rpb25NYW5hZ2VyO1xuXHR9KGRpc3BhdGNoZXJfMVtcImRlZmF1bHRcIl0pKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb25uZWN0aW9uTWFuYWdlcjtcblxuXG4vKioqLyB9KSxcbi8qIDU1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBDb2xsZWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBmYWN0b3J5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKTtcblx0dmFyIENoYW5uZWxzID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIENoYW5uZWxzKCkge1xuXHQgICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcblx0ICAgIH1cblx0ICAgIENoYW5uZWxzLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcHVzaGVyKSB7XG5cdCAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG5cdCAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuXHQgICAgfTtcblx0ICAgIENoYW5uZWxzLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIENvbGxlY3Rpb25zLnZhbHVlcyh0aGlzLmNoYW5uZWxzKTtcblx0ICAgIH07XG5cdCAgICBDaGFubmVscy5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG5cdCAgICB9O1xuXHQgICAgQ2hhbm5lbHMucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuXHQgICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuXHQgICAgICAgIHJldHVybiBjaGFubmVsO1xuXHQgICAgfTtcblx0ICAgIENoYW5uZWxzLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIENvbGxlY3Rpb25zLm9iamVjdEFwcGx5KHRoaXMuY2hhbm5lbHMsIGZ1bmN0aW9uIChjaGFubmVsKSB7XG5cdCAgICAgICAgICAgIGNoYW5uZWwuZGlzY29ubmVjdCgpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBDaGFubmVscztcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDaGFubmVscztcblx0ZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcblx0ICAgIGlmIChuYW1lLmluZGV4T2YoJ3ByaXZhdGUtJykgPT09IDApIHtcblx0ICAgICAgICByZXR1cm4gZmFjdG9yeV8xW1wiZGVmYXVsdFwiXS5jcmVhdGVQcml2YXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuXHQgICAgfVxuXHQgICAgZWxzZSBpZiAobmFtZS5pbmRleE9mKCdwcmVzZW5jZS0nKSA9PT0gMCkge1xuXHQgICAgICAgIHJldHVybiBmYWN0b3J5XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZVByZXNlbmNlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuXHQgICAgfVxuXHQgICAgZWxzZSB7XG5cdCAgICAgICAgcmV0dXJuIGZhY3RvcnlfMVtcImRlZmF1bHRcIl0uY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuXHQgICAgfVxuXHR9XG5cblxuLyoqKi8gfSksXG4vKiA1NiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgZmFjdG9yeV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG5cdHZhciB1dGlsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIEVycm9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgVHJhbnNwb3J0U3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gVHJhbnNwb3J0U3RyYXRlZ3kobmFtZSwgcHJpb3JpdHksIHRyYW5zcG9ydCwgb3B0aW9ucykge1xuXHQgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG5cdCAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHQgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuXHQgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdCAgICB9XG5cdCAgICBUcmFuc3BvcnRTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LmlzU3VwcG9ydGVkKHtcblx0ICAgICAgICAgICAgZW5jcnlwdGVkOiB0aGlzLm9wdGlvbnMuZW5jcnlwdGVkXG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHQgICAgVHJhbnNwb3J0U3RyYXRlZ3kucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQoKSkge1xuXHQgICAgICAgICAgICByZXR1cm4gZmFpbEF0dGVtcHQobmV3IEVycm9ycy5VbnN1cHBvcnRlZFN0cmF0ZWd5KCksIGNhbGxiYWNrKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSBpZiAodGhpcy5wcmlvcml0eSA8IG1pblByaW9yaXR5KSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmYWlsQXR0ZW1wdChuZXcgRXJyb3JzLlRyYW5zcG9ydFByaW9yaXR5VG9vTG93KCksIGNhbGxiYWNrKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGNvbm5lY3RlZCA9IGZhbHNlO1xuXHQgICAgICAgIHZhciB0cmFuc3BvcnQgPSB0aGlzLnRyYW5zcG9ydC5jcmVhdGVDb25uZWN0aW9uKHRoaXMubmFtZSwgdGhpcy5wcmlvcml0eSwgdGhpcy5vcHRpb25zLmtleSwgdGhpcy5vcHRpb25zKTtcblx0ICAgICAgICB2YXIgaGFuZHNoYWtlID0gbnVsbDtcblx0ICAgICAgICB2YXIgb25Jbml0aWFsaXplZCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZChcImluaXRpYWxpemVkXCIsIG9uSW5pdGlhbGl6ZWQpO1xuXHQgICAgICAgICAgICB0cmFuc3BvcnQuY29ubmVjdCgpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgdmFyIG9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgaGFuZHNoYWtlID0gZmFjdG9yeV8xW1wiZGVmYXVsdFwiXS5jcmVhdGVIYW5kc2hha2UodHJhbnNwb3J0LCBmdW5jdGlvbiAocmVzdWx0KSB7XG5cdCAgICAgICAgICAgICAgICBjb25uZWN0ZWQgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgdW5iaW5kTGlzdGVuZXJzKCk7XG5cdCAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG5cdCAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuXHQgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB2YXIgb25DbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuXHQgICAgICAgICAgICB2YXIgc2VyaWFsaXplZFRyYW5zcG9ydDtcblx0ICAgICAgICAgICAgc2VyaWFsaXplZFRyYW5zcG9ydCA9IENvbGxlY3Rpb25zLnNhZmVKU09OU3RyaW5naWZ5KHRyYW5zcG9ydCk7XG5cdCAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcnMuVHJhbnNwb3J0Q2xvc2VkKHNlcmlhbGl6ZWRUcmFuc3BvcnQpKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHZhciB1bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoXCJpbml0aWFsaXplZFwiLCBvbkluaXRpYWxpemVkKTtcblx0ICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZChcIm9wZW5cIiwgb25PcGVuKTtcblx0ICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZChcImVycm9yXCIsIG9uRXJyb3IpO1xuXHQgICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKFwiY2xvc2VkXCIsIG9uQ2xvc2VkKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRyYW5zcG9ydC5iaW5kKFwiaW5pdGlhbGl6ZWRcIiwgb25Jbml0aWFsaXplZCk7XG5cdCAgICAgICAgdHJhbnNwb3J0LmJpbmQoXCJvcGVuXCIsIG9uT3Blbik7XG5cdCAgICAgICAgdHJhbnNwb3J0LmJpbmQoXCJlcnJvclwiLCBvbkVycm9yKTtcblx0ICAgICAgICB0cmFuc3BvcnQuYmluZChcImNsb3NlZFwiLCBvbkNsb3NlZCk7XG5cdCAgICAgICAgdHJhbnNwb3J0LmluaXRpYWxpemUoKTtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuXHQgICAgICAgICAgICAgICAgaWYgKGhhbmRzaGFrZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGhhbmRzaGFrZS5jbG9zZSgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0LmNsb3NlKCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGVkKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKF90aGlzLnByaW9yaXR5IDwgcCkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaGFuZHNoYWtlLmNsb3NlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBUcmFuc3BvcnRTdHJhdGVneTtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUcmFuc3BvcnRTdHJhdGVneTtcblx0ZnVuY3Rpb24gZmFpbEF0dGVtcHQoZXJyb3IsIGNhbGxiYWNrKSB7XG5cdCAgICB1dGlsXzFbXCJkZWZhdWx0XCJdLmRlZmVyKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHsgfSxcblx0ICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAoKSB7IH1cblx0ICAgIH07XG5cdH1cblxuXG4vKioqLyB9KSxcbi8qIDU3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBDb2xsZWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciB1dGlsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIHRpbWVyc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdHZhciBTZXF1ZW50aWFsU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gU2VxdWVudGlhbFN0cmF0ZWd5KHN0cmF0ZWdpZXMsIG9wdGlvbnMpIHtcblx0ICAgICAgICB0aGlzLnN0cmF0ZWdpZXMgPSBzdHJhdGVnaWVzO1xuXHQgICAgICAgIHRoaXMubG9vcCA9IEJvb2xlYW4ob3B0aW9ucy5sb29wKTtcblx0ICAgICAgICB0aGlzLmZhaWxGYXN0ID0gQm9vbGVhbihvcHRpb25zLmZhaWxGYXN0KTtcblx0ICAgICAgICB0aGlzLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG5cdCAgICAgICAgdGhpcy50aW1lb3V0TGltaXQgPSBvcHRpb25zLnRpbWVvdXRMaW1pdDtcblx0ICAgIH1cblx0ICAgIFNlcXVlbnRpYWxTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIENvbGxlY3Rpb25zLmFueSh0aGlzLnN0cmF0ZWdpZXMsIHV0aWxfMVtcImRlZmF1bHRcIl0ubWV0aG9kKFwiaXNTdXBwb3J0ZWRcIikpO1xuXHQgICAgfTtcblx0ICAgIFNlcXVlbnRpYWxTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHZhciBzdHJhdGVnaWVzID0gdGhpcy5zdHJhdGVnaWVzO1xuXHQgICAgICAgIHZhciBjdXJyZW50ID0gMDtcblx0ICAgICAgICB2YXIgdGltZW91dCA9IHRoaXMudGltZW91dDtcblx0ICAgICAgICB2YXIgcnVubmVyID0gbnVsbDtcblx0ICAgICAgICB2YXIgdHJ5TmV4dFN0cmF0ZWd5ID0gZnVuY3Rpb24gKGVycm9yLCBoYW5kc2hha2UpIHtcblx0ICAgICAgICAgICAgaWYgKGhhbmRzaGFrZSkge1xuXHQgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgaGFuZHNoYWtlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICsgMTtcblx0ICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sb29wKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgJSBzdHJhdGVnaWVzLmxlbmd0aDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmIChjdXJyZW50IDwgc3RyYXRlZ2llcy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gdGltZW91dCAqIDI7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy50aW1lb3V0TGltaXQpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBNYXRoLm1pbih0aW1lb3V0LCBfdGhpcy50aW1lb3V0TGltaXQpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIHJ1bm5lciA9IF90aGlzLnRyeVN0cmF0ZWd5KHN0cmF0ZWdpZXNbY3VycmVudF0sIG1pblByaW9yaXR5LCB7IHRpbWVvdXQ6IHRpbWVvdXQsIGZhaWxGYXN0OiBfdGhpcy5mYWlsRmFzdCB9LCB0cnlOZXh0U3RyYXRlZ3kpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIHJ1bm5lciA9IHRoaXMudHJ5U3RyYXRlZ3koc3RyYXRlZ2llc1tjdXJyZW50XSwgbWluUHJpb3JpdHksIHsgdGltZW91dDogdGltZW91dCwgZmFpbEZhc3Q6IHRoaXMuZmFpbEZhc3QgfSwgdHJ5TmV4dFN0cmF0ZWd5KTtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG5cdCAgICAgICAgICAgICAgICBtaW5Qcmlvcml0eSA9IHA7XG5cdCAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIFNlcXVlbnRpYWxTdHJhdGVneS5wcm90b3R5cGUudHJ5U3RyYXRlZ3kgPSBmdW5jdGlvbiAoc3RyYXRlZ3ksIG1pblByaW9yaXR5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuXHQgICAgICAgIHZhciB0aW1lciA9IG51bGw7XG5cdCAgICAgICAgdmFyIHJ1bm5lciA9IG51bGw7XG5cdCAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIHtcblx0ICAgICAgICAgICAgdGltZXIgPSBuZXcgdGltZXJzXzEuT25lT2ZmVGltZXIob3B0aW9ucy50aW1lb3V0LCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcblx0ICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcnVubmVyID0gc3RyYXRlZ3kuY29ubmVjdChtaW5Qcmlvcml0eSwgZnVuY3Rpb24gKGVycm9yLCBoYW5kc2hha2UpIHtcblx0ICAgICAgICAgICAgaWYgKGVycm9yICYmIHRpbWVyICYmIHRpbWVyLmlzUnVubmluZygpICYmICFvcHRpb25zLmZhaWxGYXN0KSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKHRpbWVyKSB7XG5cdCAgICAgICAgICAgICAgICB0aW1lci5lbnN1cmVBYm9ydGVkKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIGhhbmRzaGFrZSk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIGlmICh0aW1lcikge1xuXHQgICAgICAgICAgICAgICAgICAgIHRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuXHQgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBTZXF1ZW50aWFsU3RyYXRlZ3k7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2VxdWVudGlhbFN0cmF0ZWd5O1xuXG5cbi8qKiovIH0pLFxuLyogNTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIHV0aWxfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHR2YXIgQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBCZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5KHN0cmF0ZWdpZXMpIHtcblx0ICAgICAgICB0aGlzLnN0cmF0ZWdpZXMgPSBzdHJhdGVnaWVzO1xuXHQgICAgfVxuXHQgICAgQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIENvbGxlY3Rpb25zLmFueSh0aGlzLnN0cmF0ZWdpZXMsIHV0aWxfMVtcImRlZmF1bHRcIl0ubWV0aG9kKFwiaXNTdXBwb3J0ZWRcIikpO1xuXHQgICAgfTtcblx0ICAgIEJlc3RDb25uZWN0ZWRFdmVyU3RyYXRlZ3kucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgcmV0dXJuIGNvbm5lY3QodGhpcy5zdHJhdGVnaWVzLCBtaW5Qcmlvcml0eSwgZnVuY3Rpb24gKGksIHJ1bm5lcnMpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG5cdCAgICAgICAgICAgICAgICBydW5uZXJzW2ldLmVycm9yID0gZXJyb3I7XG5cdCAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoYWxsUnVubmVyc0ZhaWxlZChydW5uZXJzKSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgQ29sbGVjdGlvbnMuYXBwbHkocnVubmVycywgZnVuY3Rpb24gKHJ1bm5lcikge1xuXHQgICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KGhhbmRzaGFrZS50cmFuc3BvcnQucHJpb3JpdHkpO1xuXHQgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBoYW5kc2hha2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBCZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5O1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEJlc3RDb25uZWN0ZWRFdmVyU3RyYXRlZ3k7XG5cdGZ1bmN0aW9uIGNvbm5lY3Qoc3RyYXRlZ2llcywgbWluUHJpb3JpdHksIGNhbGxiYWNrQnVpbGRlcikge1xuXHQgICAgdmFyIHJ1bm5lcnMgPSBDb2xsZWN0aW9ucy5tYXAoc3RyYXRlZ2llcywgZnVuY3Rpb24gKHN0cmF0ZWd5LCBpLCBfLCBycykge1xuXHQgICAgICAgIHJldHVybiBzdHJhdGVneS5jb25uZWN0KG1pblByaW9yaXR5LCBjYWxsYmFja0J1aWxkZXIoaSwgcnMpKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBDb2xsZWN0aW9ucy5hcHBseShydW5uZXJzLCBhYm9ydFJ1bm5lcik7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuXHQgICAgICAgICAgICBDb2xsZWN0aW9ucy5hcHBseShydW5uZXJzLCBmdW5jdGlvbiAocnVubmVyKSB7XG5cdCAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShwKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0fVxuXHRmdW5jdGlvbiBhbGxSdW5uZXJzRmFpbGVkKHJ1bm5lcnMpIHtcblx0ICAgIHJldHVybiBDb2xsZWN0aW9ucy5hbGwocnVubmVycywgZnVuY3Rpb24gKHJ1bm5lcikge1xuXHQgICAgICAgIHJldHVybiBCb29sZWFuKHJ1bm5lci5lcnJvcik7XG5cdCAgICB9KTtcblx0fVxuXHRmdW5jdGlvbiBhYm9ydFJ1bm5lcihydW5uZXIpIHtcblx0ICAgIGlmICghcnVubmVyLmVycm9yICYmICFydW5uZXIuYWJvcnRlZCkge1xuXHQgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuXHQgICAgICAgIHJ1bm5lci5hYm9ydGVkID0gdHJ1ZTtcblx0ICAgIH1cblx0fVxuXG5cbi8qKiovIH0pLFxuLyogNTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIHV0aWxfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHR2YXIgcnVudGltZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIHNlcXVlbnRpYWxfc3RyYXRlZ3lfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgQ2FjaGVkU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gQ2FjaGVkU3RyYXRlZ3koc3RyYXRlZ3ksIHRyYW5zcG9ydHMsIG9wdGlvbnMpIHtcblx0ICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG5cdCAgICAgICAgdGhpcy50cmFuc3BvcnRzID0gdHJhbnNwb3J0cztcblx0ICAgICAgICB0aGlzLnR0bCA9IG9wdGlvbnMudHRsIHx8IDE4MDAgKiAxMDAwO1xuXHQgICAgICAgIHRoaXMuZW5jcnlwdGVkID0gb3B0aW9ucy5lbmNyeXB0ZWQ7XG5cdCAgICAgICAgdGhpcy50aW1lbGluZSA9IG9wdGlvbnMudGltZWxpbmU7XG5cdCAgICB9XG5cdCAgICBDYWNoZWRTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcblx0ICAgIH07XG5cdCAgICBDYWNoZWRTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcblx0ICAgICAgICB2YXIgZW5jcnlwdGVkID0gdGhpcy5lbmNyeXB0ZWQ7XG5cdCAgICAgICAgdmFyIGluZm8gPSBmZXRjaFRyYW5zcG9ydENhY2hlKGVuY3J5cHRlZCk7XG5cdCAgICAgICAgdmFyIHN0cmF0ZWdpZXMgPSBbdGhpcy5zdHJhdGVneV07XG5cdCAgICAgICAgaWYgKGluZm8gJiYgaW5mby50aW1lc3RhbXAgKyB0aGlzLnR0bCA+PSB1dGlsXzFbXCJkZWZhdWx0XCJdLm5vdygpKSB7XG5cdCAgICAgICAgICAgIHZhciB0cmFuc3BvcnQgPSB0aGlzLnRyYW5zcG9ydHNbaW5mby50cmFuc3BvcnRdO1xuXHQgICAgICAgICAgICBpZiAodHJhbnNwb3J0KSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oe1xuXHQgICAgICAgICAgICAgICAgICAgIGNhY2hlZDogdHJ1ZSxcblx0ICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQ6IGluZm8udHJhbnNwb3J0LFxuXHQgICAgICAgICAgICAgICAgICAgIGxhdGVuY3k6IGluZm8ubGF0ZW5jeVxuXHQgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgICAgICBzdHJhdGVnaWVzLnB1c2gobmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3lfMVtcImRlZmF1bHRcIl0oW3RyYW5zcG9ydF0sIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBpbmZvLmxhdGVuY3kgKiAyICsgMTAwMCxcblx0ICAgICAgICAgICAgICAgICAgICBmYWlsRmFzdDogdHJ1ZVxuXHQgICAgICAgICAgICAgICAgfSkpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBzdGFydFRpbWVzdGFtcCA9IHV0aWxfMVtcImRlZmF1bHRcIl0ubm93KCk7XG5cdCAgICAgICAgdmFyIHJ1bm5lciA9IHN0cmF0ZWdpZXMucG9wKCkuY29ubmVjdChtaW5Qcmlvcml0eSwgZnVuY3Rpb24gY2IoZXJyb3IsIGhhbmRzaGFrZSkge1xuXHQgICAgICAgICAgICBpZiAoZXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgIGZsdXNoVHJhbnNwb3J0Q2FjaGUoZW5jcnlwdGVkKTtcblx0ICAgICAgICAgICAgICAgIGlmIChzdHJhdGVnaWVzLmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWVzdGFtcCA9IHV0aWxfMVtcImRlZmF1bHRcIl0ubm93KCk7XG5cdCAgICAgICAgICAgICAgICAgICAgcnVubmVyID0gc3RyYXRlZ2llcy5wb3AoKS5jb25uZWN0KG1pblByaW9yaXR5LCBjYik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBzdG9yZVRyYW5zcG9ydENhY2hlKGVuY3J5cHRlZCwgaGFuZHNoYWtlLnRyYW5zcG9ydC5uYW1lLCB1dGlsXzFbXCJkZWZhdWx0XCJdLm5vdygpIC0gc3RhcnRUaW1lc3RhbXApO1xuXHQgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgaGFuZHNoYWtlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKHApIHtcblx0ICAgICAgICAgICAgICAgIG1pblByaW9yaXR5ID0gcDtcblx0ICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcblx0ICAgICAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShwKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIENhY2hlZFN0cmF0ZWd5O1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IENhY2hlZFN0cmF0ZWd5O1xuXHRmdW5jdGlvbiBnZXRUcmFuc3BvcnRDYWNoZUtleShlbmNyeXB0ZWQpIHtcblx0ICAgIHJldHVybiBcInB1c2hlclRyYW5zcG9ydFwiICsgKGVuY3J5cHRlZCA/IFwiRW5jcnlwdGVkXCIgOiBcIlVuZW5jcnlwdGVkXCIpO1xuXHR9XG5cdGZ1bmN0aW9uIGZldGNoVHJhbnNwb3J0Q2FjaGUoZW5jcnlwdGVkKSB7XG5cdCAgICB2YXIgc3RvcmFnZSA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uZ2V0TG9jYWxTdG9yYWdlKCk7XG5cdCAgICBpZiAoc3RvcmFnZSkge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIHZhciBzZXJpYWxpemVkQ2FjaGUgPSBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KGVuY3J5cHRlZCldO1xuXHQgICAgICAgICAgICBpZiAoc2VyaWFsaXplZENhY2hlKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXJpYWxpemVkQ2FjaGUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgIGZsdXNoVHJhbnNwb3J0Q2FjaGUoZW5jcnlwdGVkKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gbnVsbDtcblx0fVxuXHRmdW5jdGlvbiBzdG9yZVRyYW5zcG9ydENhY2hlKGVuY3J5cHRlZCwgdHJhbnNwb3J0LCBsYXRlbmN5KSB7XG5cdCAgICB2YXIgc3RvcmFnZSA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uZ2V0TG9jYWxTdG9yYWdlKCk7XG5cdCAgICBpZiAoc3RvcmFnZSkge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIHN0b3JhZ2VbZ2V0VHJhbnNwb3J0Q2FjaGVLZXkoZW5jcnlwdGVkKV0gPSBDb2xsZWN0aW9ucy5zYWZlSlNPTlN0cmluZ2lmeSh7XG5cdCAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHV0aWxfMVtcImRlZmF1bHRcIl0ubm93KCksXG5cdCAgICAgICAgICAgICAgICB0cmFuc3BvcnQ6IHRyYW5zcG9ydCxcblx0ICAgICAgICAgICAgICAgIGxhdGVuY3k6IGxhdGVuY3lcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHR9XG5cdGZ1bmN0aW9uIGZsdXNoVHJhbnNwb3J0Q2FjaGUoZW5jcnlwdGVkKSB7XG5cdCAgICB2YXIgc3RvcmFnZSA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uZ2V0TG9jYWxTdG9yYWdlKCk7XG5cdCAgICBpZiAoc3RvcmFnZSkge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIGRlbGV0ZSBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KGVuY3J5cHRlZCldO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBjYXRjaCAoZSkge1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0fVxuXG5cbi8qKiovIH0pLFxuLyogNjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIHRpbWVyc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdHZhciBEZWxheWVkU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gRGVsYXllZFN0cmF0ZWd5KHN0cmF0ZWd5LCBfYSkge1xuXHQgICAgICAgIHZhciBudW1iZXIgPSBfYS5kZWxheTtcblx0ICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zID0geyBkZWxheTogbnVtYmVyIH07XG5cdCAgICB9XG5cdCAgICBEZWxheWVkU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG5cdCAgICB9O1xuXHQgICAgRGVsYXllZFN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuXHQgICAgICAgIHZhciBzdHJhdGVneSA9IHRoaXMuc3RyYXRlZ3k7XG5cdCAgICAgICAgdmFyIHJ1bm5lcjtcblx0ICAgICAgICB2YXIgdGltZXIgPSBuZXcgdGltZXJzXzEuT25lT2ZmVGltZXIodGhpcy5vcHRpb25zLmRlbGF5LCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHJ1bm5lciA9IHN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHJ1bm5lcikge1xuXHQgICAgICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuXHQgICAgICAgICAgICAgICAgbWluUHJpb3JpdHkgPSBwO1xuXHQgICAgICAgICAgICAgICAgaWYgKHJ1bm5lcikge1xuXHQgICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gRGVsYXllZFN0cmF0ZWd5O1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IERlbGF5ZWRTdHJhdGVneTtcblxuXG4vKioqLyB9KSxcbi8qIDYxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBJZlN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIElmU3RyYXRlZ3kodGVzdCwgdHJ1ZUJyYW5jaCwgZmFsc2VCcmFuY2gpIHtcblx0ICAgICAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuXHQgICAgICAgIHRoaXMudHJ1ZUJyYW5jaCA9IHRydWVCcmFuY2g7XG5cdCAgICAgICAgdGhpcy5mYWxzZUJyYW5jaCA9IGZhbHNlQnJhbmNoO1xuXHQgICAgfVxuXHQgICAgSWZTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIGJyYW5jaCA9IHRoaXMudGVzdCgpID8gdGhpcy50cnVlQnJhbmNoIDogdGhpcy5mYWxzZUJyYW5jaDtcblx0ICAgICAgICByZXR1cm4gYnJhbmNoLmlzU3VwcG9ydGVkKCk7XG5cdCAgICB9O1xuXHQgICAgSWZTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcblx0ICAgICAgICB2YXIgYnJhbmNoID0gdGhpcy50ZXN0KCkgPyB0aGlzLnRydWVCcmFuY2ggOiB0aGlzLmZhbHNlQnJhbmNoO1xuXHQgICAgICAgIHJldHVybiBicmFuY2guY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2spO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBJZlN0cmF0ZWd5O1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IElmU3RyYXRlZ3k7XG5cblxuLyoqKi8gfSksXG4vKiA2MiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgRmlyc3RDb25uZWN0ZWRTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBGaXJzdENvbm5lY3RlZFN0cmF0ZWd5KHN0cmF0ZWd5KSB7XG5cdCAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuXHQgICAgfVxuXHQgICAgRmlyc3RDb25uZWN0ZWRTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcblx0ICAgIH07XG5cdCAgICBGaXJzdENvbm5lY3RlZFN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuXHQgICAgICAgIHZhciBydW5uZXIgPSB0aGlzLnN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG5cdCAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcblx0ICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBoYW5kc2hha2UpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJldHVybiBydW5uZXI7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3k7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRmlyc3RDb25uZWN0ZWRTdHJhdGVneTtcblxuXG4vKioqLyB9KSxcbi8qIDYzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBkZWZhdWx0c18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0ZXhwb3J0cy5nZXRHbG9iYWxDb25maWcgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAgIHdzSG9zdDogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uaG9zdCxcblx0ICAgICAgICB3c1BvcnQ6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLndzX3BvcnQsXG5cdCAgICAgICAgd3NzUG9ydDogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0ud3NzX3BvcnQsXG5cdCAgICAgICAgaHR0cEhvc3Q6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLnNvY2tqc19ob3N0LFxuXHQgICAgICAgIGh0dHBQb3J0OiBkZWZhdWx0c18xW1wiZGVmYXVsdFwiXS5zb2NranNfaHR0cF9wb3J0LFxuXHQgICAgICAgIGh0dHBzUG9ydDogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uc29ja2pzX2h0dHBzX3BvcnQsXG5cdCAgICAgICAgaHR0cFBhdGg6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLnNvY2tqc19wYXRoLFxuXHQgICAgICAgIHN0YXRzSG9zdDogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uc3RhdHNfaG9zdCxcblx0ICAgICAgICBhdXRoRW5kcG9pbnQ6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLmNoYW5uZWxfYXV0aF9lbmRwb2ludCxcblx0ICAgICAgICBhdXRoVHJhbnNwb3J0OiBkZWZhdWx0c18xW1wiZGVmYXVsdFwiXS5jaGFubmVsX2F1dGhfdHJhbnNwb3J0LFxuXHQgICAgICAgIGFjdGl2aXR5X3RpbWVvdXQ6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLmFjdGl2aXR5X3RpbWVvdXQsXG5cdCAgICAgICAgcG9uZ190aW1lb3V0OiBkZWZhdWx0c18xW1wiZGVmYXVsdFwiXS5wb25nX3RpbWVvdXQsXG5cdCAgICAgICAgdW5hdmFpbGFibGVfdGltZW91dDogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0udW5hdmFpbGFibGVfdGltZW91dFxuXHQgICAgfTtcblx0fTtcblx0ZXhwb3J0cy5nZXRDbHVzdGVyQ29uZmlnID0gZnVuY3Rpb24gKGNsdXN0ZXJOYW1lKSB7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAgIHdzSG9zdDogXCJ3cy1cIiArIGNsdXN0ZXJOYW1lICsgXCIucHVzaGVyLmNvbVwiLFxuXHQgICAgICAgIGh0dHBIb3N0OiBcInNvY2tqcy1cIiArIGNsdXN0ZXJOYW1lICsgXCIucHVzaGVyLmNvbVwiXG5cdCAgICB9O1xuXHR9O1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHVzaGVyLWpzL2Rpc3Qvd2ViL3B1c2hlci5qc1xuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=