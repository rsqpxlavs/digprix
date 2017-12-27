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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ({

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _laravelEcho = __webpack_require__(64);

var _laravelEcho2 = _interopRequireDefault(_laravelEcho);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Pusher = __webpack_require__(65);

window.Echo = new _laravelEcho2.default({
    broadcaster: 'pusher',
    key: 'c3189996e679f97c2505',
    cluster: 'ap2',
    encrypted: true
});

/***/ }),

/***/ 64:
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

/***/ 65:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2VhOTA3M2I0NTJmYjJiOTE3YjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9iYWNrZW5kL2pzL2Jyb2FkY2FzdC9pbml0LWJyb2FkY2FzdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1lY2hvL2Rpc3QvZWNoby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHVzaGVyLWpzL2Rpc3Qvd2ViL3B1c2hlci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJQdXNoZXIiLCJyZXF1aXJlIiwiRWNobyIsImJyb2FkY2FzdGVyIiwia2V5IiwiY2x1c3RlciIsImVuY3J5cHRlZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7QUFFQUEsT0FBT0MsTUFBUCxHQUFnQixtQkFBQUMsQ0FBUSxFQUFSLENBQWhCOztBQUVBRixPQUFPRyxJQUFQLEdBQWMsMEJBQVM7QUFDbkJDLGlCQUFhLFFBRE07QUFFbkJDLFNBQUssc0JBRmM7QUFHbkJDLGFBQVMsS0FIVTtBQUluQkMsZUFBVztBQUpRLENBQVQsQ0FBZCxDOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVELHNCOzs7Ozs7O0FDNXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpSkFBaUo7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSxzR0FBc0c7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixnQ0FBZ0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsNkJBQTZCLHFDQUFxQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsT0FBTztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsMkNBQTJDLGdCQUFnQix3QkFBd0IsRUFBRSxFQUFFO0FBQ2xKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsaUJBQWlCO0FBQ2pCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0JBQXNCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0JBQWdCO0FBQ3REO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtCQUFrQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLElBQUk7QUFDbEM7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOzs7QUFHdkIsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxVQUFVO0FBQ1YsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0UsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0EsRUFBRTtBQUNGLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0UsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlDQUFpQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1Q0FBdUM7QUFDcEUsd0RBQXdELDBCQUEwQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxvQkFBb0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxlQUFlO0FBQ25EO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtGQUErRix1QkFBdUIsRUFBRTtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxvQ0FBb0M7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsOEJBQThCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0JBQXNCO0FBQ3hCO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFVBQVUscUNBQXFDO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzQ0FBc0M7QUFDeEM7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNkRBQTZELGVBQWU7QUFDNUUsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QywyREFBMkQ7QUFDM0QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSw4Q0FBOEMsc0JBQXNCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDRDQUE0QztBQUN2RjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsMENBQTBDO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxzQ0FBc0MsdUNBQXVDO0FBQzdFLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQkFBb0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0Esa0NBQWtDLHFCQUFxQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxpREFBaUQ7QUFDM0YsMkNBQTJDLGtDQUFrQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdDQUFnQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNENBQTRDO0FBQy9FO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsbURBQW1EO0FBQ25ELGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0Esc0NBQXNDLHVDQUF1QztBQUM3RSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDZCQUE2QjtBQUM5RTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw4Q0FBOEM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0NBQWdDO0FBQ2pFLHdDQUF3Qyw2Q0FBNkM7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDZCQUE2QixFQUFFO0FBQy9CLHdDQUF3QztBQUN4QztBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRiw2Q0FBNkM7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLDRDQUE0QztBQUNsSDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxDQUFDO0FBQ0QsQyIsImZpbGUiOiJcXGFzc2V0c1xcYmFja2VuZFxcanNcXGN1c3RvbVxcaW5pdC1icm9hZGNhc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2VhOTA3M2I0NTJmYjJiOTE3YjIiLCJpbXBvcnQgRWNobyBmcm9tIFwibGFyYXZlbC1lY2hvXCI7XHJcblxyXG53aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XHJcblxyXG53aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcclxuICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcclxuICAgIGtleTogJ2MzMTg5OTk2ZTY3OWY5N2MyNTA1JyxcclxuICAgIGNsdXN0ZXI6ICdhcDInLFxyXG4gICAgZW5jcnlwdGVkOiB0cnVlXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2JhY2tlbmQvanMvYnJvYWRjYXN0L2luaXQtYnJvYWRjYXN0aW5nLmpzIiwidmFyIGFzeW5jR2VuZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBd2FpdFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gICAgdmFyIGZyb250LCBiYWNrO1xuXG4gICAgZnVuY3Rpb24gc2VuZChrZXksIGFyZykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgICBuZXh0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcm9udCA9IGJhY2sgPSByZXF1ZXN0O1xuICAgICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlLnZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIHJlc3VtZShcIm5leHRcIiwgYXJnKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBhcmcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCByZXN1bHQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwicmV0dXJuXCI6XG4gICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInRocm93XCI6XG4gICAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgICBpZiAoZnJvbnQpIHtcbiAgICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgICBpZiAodHlwZW9mIGdlbi5yZXR1cm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5yZXR1cm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICB9XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbiAgfTtcblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwicmV0dXJuXCIsIGFyZyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgYXdhaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH07XG59KCk7XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIENvbm5lY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25uZWN0b3Iob3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0aEVuZHBvaW50OiAnL2Jyb2FkY2FzdGluZy9hdXRoJyxcbiAgICAgICAgICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbiAgICAgICAgICAgIGNzcmZUb2tlbjogbnVsbCxcbiAgICAgICAgICAgIGhvc3Q6IG51bGwsXG4gICAgICAgICAgICBrZXk6IG51bGwsXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdBcHAuRXZlbnRzJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKENvbm5lY3RvciwgW3tcbiAgICAgICAga2V5OiAnc2V0T3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHRoaXMuX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNzcmZUb2tlbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmF1dGguaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0aGlzLmNzcmZUb2tlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NzcmZUb2tlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjc3JmVG9rZW4oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAod2luZG93ICYmIHdpbmRvd1snTGFyYXZlbCddICYmIHdpbmRvd1snTGFyYXZlbCddLmNzcmZUb2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbJ0xhcmF2ZWwnXS5jc3JmVG9rZW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jc3JmVG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAoc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIENvbm5lY3Rvcjtcbn0oKTtcblxudmFyIENoYW5uZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhbm5lbCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnbm90aWZpY2F0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdGVuKCcuSWxsdW1pbmF0ZVxcXFxOb3RpZmljYXRpb25zXFxcXEV2ZW50c1xcXFxCcm9hZGNhc3ROb3RpZmljYXRpb25DcmVhdGVkJywgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW5Gb3JXaGlzcGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbkZvcldoaXNwZXIoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW4oJy5jbGllbnQtJyArIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIENoYW5uZWw7XG59KCk7XG5cbnZhciBFdmVudEZvcm1hdHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudEZvcm1hdHRlcihuYW1lc3BhY2UpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRGb3JtYXR0ZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0TmFtZXNwYWNlKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoRXZlbnRGb3JtYXR0ZXIsIFt7XG4gICAgICAgIGtleTogJ2Zvcm1hdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5jaGFyQXQoMCkgPT09ICcuJyB8fCBldmVudC5jaGFyQXQoMCkgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQgPSB0aGlzLm5hbWVzcGFjZSArICcuJyArIGV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnJlcGxhY2UoL1xcLi9nLCAnXFxcXCcpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXROYW1lc3BhY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TmFtZXNwYWNlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBFdmVudEZvcm1hdHRlcjtcbn0oKTtcblxudmFyIFB1c2hlckNoYW5uZWwgPSBmdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJDaGFubmVsLCBfQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBQdXNoZXJDaGFubmVsKHB1c2hlciwgbmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJDaGFubmVsKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNoZXJDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaGVyQ2hhbm5lbCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBfdGhpcy5ldmVudEZvcm1hdHRlciA9IG5ldyBFdmVudEZvcm1hdHRlcihfdGhpcy5vcHRpb25zLm5hbWVzcGFjZSk7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoUHVzaGVyQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24odGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcExpc3RlbmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bmJpbmQodGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmJpbmQoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQdXNoZXJDaGFubmVsO1xufShDaGFubmVsKTtcblxudmFyIFB1c2hlclByaXZhdGVDaGFubmVsID0gZnVuY3Rpb24gKF9QdXNoZXJDaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoUHVzaGVyUHJpdmF0ZUNoYW5uZWwsIF9QdXNoZXJDaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlclByaXZhdGVDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJQcml2YXRlQ2hhbm5lbCk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNoZXJQcml2YXRlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlclByaXZhdGVDaGFubmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoUHVzaGVyUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ3doaXNwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcignY2xpZW50LScgKyBldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlclByaXZhdGVDaGFubmVsO1xufShQdXNoZXJDaGFubmVsKTtcblxudmFyIFB1c2hlclByZXNlbmNlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfUHVzaGVyQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFB1c2hlclByZXNlbmNlQ2hhbm5lbCwgX1B1c2hlckNoYW5uZWwpO1xuXG4gICAgZnVuY3Rpb24gUHVzaGVyUHJlc2VuY2VDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJQcmVzZW5jZUNoYW5uZWwpO1xuICAgICAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHVzaGVyUHJlc2VuY2VDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaGVyUHJlc2VuY2VDaGFubmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoUHVzaGVyUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdoZXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhlcmUoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhPYmplY3Qua2V5cyhkYXRhLm1lbWJlcnMpLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5tZW1iZXJzW2tdO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2pvaW5pbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gam9pbmluZyhjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHVzaGVyOm1lbWJlcl9hZGRlZCcsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhtZW1iZXIuaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2aW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfcmVtb3ZlZCcsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhtZW1iZXIuaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd3aGlzcGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5jaGFubmVsc1t0aGlzLm5hbWVdLnRyaWdnZXIoJ2NsaWVudC0nICsgZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQdXNoZXJQcmVzZW5jZUNoYW5uZWw7XG59KFB1c2hlckNoYW5uZWwpO1xuXG52YXIgU29ja2V0SW9DaGFubmVsID0gZnVuY3Rpb24gKF9DaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoU29ja2V0SW9DaGFubmVsLCBfQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBTb2NrZXRJb0NoYW5uZWwoc29ja2V0LCBuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvQ2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU29ja2V0SW9DaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU29ja2V0SW9DaGFubmVsKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMuZXZlbnRzID0ge307XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBfdGhpcy5ldmVudEZvcm1hdHRlciA9IG5ldyBFdmVudEZvcm1hdHRlcihfdGhpcy5vcHRpb25zLm5hbWVzcGFjZSk7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgICAgICBfdGhpcy5jb25maWd1cmVSZWNvbm5lY3RvcigpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9DaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLm9wdGlvbnMuYXV0aCB8fCB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy51bmJpbmQoKTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3Vuc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLm9wdGlvbnMuYXV0aCB8fCB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKGNoYW5uZWwsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLm5hbWUgPT0gY2hhbm5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuYmluZChldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25maWd1cmVSZWNvbm5lY3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25maWd1cmVSZWNvbm5lY3RvcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgICAgICAgICBfdGhpczMuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdCcsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuYmluZCgncmVjb25uZWN0JywgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdiaW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmQoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0gfHwgW107XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuYmluZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmV2ZW50c1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnNvY2tldC5yZW1vdmVMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczQuZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBTb2NrZXRJb0NoYW5uZWw7XG59KENoYW5uZWwpO1xuXG52YXIgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfU29ja2V0SW9DaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgX1NvY2tldElvQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb1ByaXZhdGVDaGFubmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnd2hpc3BlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnY2xpZW50IGV2ZW50Jywge1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBldmVudDogJ2NsaWVudC0nICsgZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvUHJpdmF0ZUNoYW5uZWw7XG59KFNvY2tldElvQ2hhbm5lbCk7XG5cbnZhciBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfU29ja2V0SW9Qcml2YXRlQ2hhbm4pIHtcbiAgICBpbmhlcml0cyhTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCwgX1NvY2tldElvUHJpdmF0ZUNoYW5uKTtcblxuICAgIGZ1bmN0aW9uIFNvY2tldElvUHJlc2VuY2VDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvY2tldElvUHJlc2VuY2VDaGFubmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ2hlcmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHJlc2VuY2U6c3Vic2NyaWJlZCcsIGZ1bmN0aW9uIChtZW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVycy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0udXNlcl9pbmZvO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2pvaW5pbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gam9pbmluZyhjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHJlc2VuY2U6am9pbmluZycsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobWVtYmVyLnVzZXJfaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2aW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3ByZXNlbmNlOmxlYXZpbmcnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG1lbWJlci51c2VyX2luZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9QcmVzZW5jZUNoYW5uZWw7XG59KFNvY2tldElvUHJpdmF0ZUNoYW5uZWwpO1xuXG52YXIgUHVzaGVyQ29ubmVjdG9yID0gZnVuY3Rpb24gKF9Db25uZWN0b3IpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJDb25uZWN0b3IsIF9Db25uZWN0b3IpO1xuXG4gICAgZnVuY3Rpb24gUHVzaGVyQ29ubmVjdG9yKCkge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJDb25uZWN0b3IpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IFB1c2hlckNvbm5lY3Rvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlckNvbm5lY3RvcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLmNoYW5uZWxzID0ge307XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJDb25uZWN0b3IsIFt7XG4gICAgICAgIGtleTogJ2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcih0aGlzLm9wdGlvbnMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKG5hbWUsIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbChuYW1lKS5saXN0ZW4oZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBuZXcgUHVzaGVyQ2hhbm5lbCh0aGlzLnB1c2hlciwgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcml2YXRlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0gPSBuZXcgUHVzaGVyUHJpdmF0ZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcml2YXRlLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmVzZW5jZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlc2VuY2VDaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdID0gbmV3IFB1c2hlclByZXNlbmNlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByZXNlbmNlLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmUobmFtZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBjaGFubmVscyA9IFtuYW1lLCAncHJpdmF0ZS0nICsgbmFtZSwgJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICAgICAgICAgIGNoYW5uZWxzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIuY2hhbm5lbHNbbmFtZV0udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMi5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc29ja2V0SWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5zb2NrZXRfaWQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHVzaGVyQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG52YXIgU29ja2V0SW9Db25uZWN0b3IgPSBmdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICAgIGluaGVyaXRzKFNvY2tldElvQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICAgIGZ1bmN0aW9uIFNvY2tldElvQ29ubmVjdG9yKCkge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb0Nvbm5lY3Rvcik7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gU29ja2V0SW9Db25uZWN0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb0Nvbm5lY3RvcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLmNoYW5uZWxzID0ge307XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhTb2NrZXRJb0Nvbm5lY3RvciwgW3tcbiAgICAgICAga2V5OiAnY29ubmVjdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBpbyh0aGlzLm9wdGlvbnMuaG9zdCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvY2tldDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihuYW1lLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWwobmFtZSkubGlzdGVuKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gbmV3IFNvY2tldElvQ2hhbm5lbCh0aGlzLnNvY2tldCwgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcml2YXRlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCh0aGlzLnNvY2tldCwgJ3ByaXZhdGUtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXNlbmNlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwodGhpcy5zb2NrZXQsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIuY2hhbm5lbHNbbmFtZV0udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMi5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc29ja2V0SWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb2NrZXQuaWQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9Db25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbnZhciBFY2hvID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVjaG8ob3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFY2hvKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAodHlwZW9mIFZ1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBWdWUuaHR0cCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYXhpb3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyalF1ZXJ5QWpheFNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAncHVzaGVyJykge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgUHVzaGVyQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdzb2NrZXQuaW8nKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBTb2NrZXRJb0Nvbm5lY3Rvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoRWNobywgW3tcbiAgICAgICAga2V5OiAncmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBWdWUuaHR0cC5pbnRlcmNlcHRvcnMucHVzaChmdW5jdGlvbiAocmVxdWVzdCwgbmV4dCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5zZXQoJ1gtU29ja2V0LUlEJywgX3RoaXMuc29ja2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLnNvY2tldElkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnNbJ1gtU29ja2V0LUlkJ10gPSBfdGhpczIuc29ja2V0SWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGpRdWVyeS5hamF4ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmFqYXhTZXR1cCh7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIGJlZm9yZVNlbmQoeGhyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMzLnNvY2tldElkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1Tb2NrZXQtSWQnLCBfdGhpczMuc29ja2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihjaGFubmVsLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5saXN0ZW4oY2hhbm5lbCwgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFubmVsKF9jaGFubmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IuY2hhbm5lbChfY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByaXZhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3ByaXZhdGUoY2hhbm5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdqb2luJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW4oY2hhbm5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByZXNlbmNlQ2hhbm5lbChjaGFubmVsKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmUoY2hhbm5lbCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IubGVhdmUoY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvY2tldElkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnNvY2tldElkKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gRWNobztcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFY2hvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtZWNoby9kaXN0L2VjaG8uanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIi8qIVxuICogUHVzaGVyIEphdmFTY3JpcHQgTGlicmFyeSB2NC4yLjFcbiAqIGh0dHBzOi8vcHVzaGVyLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNywgUHVzaGVyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2VuY2UuXG4gKi9cblxuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUHVzaGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlB1c2hlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBwdXNoZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHVzaGVyXzFbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgcnVudGltZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIGRpc3BhdGNoZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXHR2YXIgdGltZWxpbmVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMzkpO1xuXHR2YXIgbGV2ZWxfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNDApO1xuXHR2YXIgU3RyYXRlZ3lCdWlsZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MSk7XG5cdHZhciB0aW1lcnNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXHR2YXIgZGVmYXVsdHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdHZhciBEZWZhdWx0Q29uZmlnID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2Myk7XG5cdHZhciBsb2dnZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdHZhciBmYWN0b3J5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKTtcblx0dmFyIHVybF9zdG9yZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cdHZhciBQdXNoZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gUHVzaGVyKGFwcF9rZXksIG9wdGlvbnMpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIGNoZWNrQXBwS2V5KGFwcF9rZXkpO1xuXHQgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQgICAgICAgIGlmICghb3B0aW9ucy5jbHVzdGVyKSB7XG5cdCAgICAgICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmVfMVtcImRlZmF1bHRcIl0uYnVpbGRMb2dTdWZmaXgoXCJqYXZhc2NyaXB0UXVpY2tTdGFydFwiKTtcblx0ICAgICAgICAgICAgbG9nZ2VyXzFbXCJkZWZhdWx0XCJdLndhcm4oXCJZb3Ugc2hvdWxkIGFsd2F5cyBzcGVjaWZ5IGEgY2x1c3RlciB3aGVuIGNvbm5lY3RpbmcuIFwiICsgc3VmZml4KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy5rZXkgPSBhcHBfa2V5O1xuXHQgICAgICAgIHRoaXMuY29uZmlnID0gQ29sbGVjdGlvbnMuZXh0ZW5kKERlZmF1bHRDb25maWcuZ2V0R2xvYmFsQ29uZmlnKCksIG9wdGlvbnMuY2x1c3RlciA/IERlZmF1bHRDb25maWcuZ2V0Q2x1c3RlckNvbmZpZyhvcHRpb25zLmNsdXN0ZXIpIDoge30sIG9wdGlvbnMpO1xuXHQgICAgICAgIHRoaXMuY2hhbm5lbHMgPSBmYWN0b3J5XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUNoYW5uZWxzKCk7XG5cdCAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlciA9IG5ldyBkaXNwYXRjaGVyXzFbXCJkZWZhdWx0XCJdKCk7XG5cdCAgICAgICAgdGhpcy5zZXNzaW9uSUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcblx0ICAgICAgICB0aGlzLnRpbWVsaW5lID0gbmV3IHRpbWVsaW5lXzFbXCJkZWZhdWx0XCJdKHRoaXMua2V5LCB0aGlzLnNlc3Npb25JRCwge1xuXHQgICAgICAgICAgICBjbHVzdGVyOiB0aGlzLmNvbmZpZy5jbHVzdGVyLFxuXHQgICAgICAgICAgICBmZWF0dXJlczogUHVzaGVyLmdldENsaWVudEZlYXR1cmVzKCksXG5cdCAgICAgICAgICAgIHBhcmFtczogdGhpcy5jb25maWcudGltZWxpbmVQYXJhbXMgfHwge30sXG5cdCAgICAgICAgICAgIGxpbWl0OiA1MCxcblx0ICAgICAgICAgICAgbGV2ZWw6IGxldmVsXzFbXCJkZWZhdWx0XCJdLklORk8sXG5cdCAgICAgICAgICAgIHZlcnNpb246IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLlZFUlNJT05cblx0ICAgICAgICB9KTtcblx0ICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVTdGF0cykge1xuXHQgICAgICAgICAgICB0aGlzLnRpbWVsaW5lU2VuZGVyID0gZmFjdG9yeV8xW1wiZGVmYXVsdFwiXS5jcmVhdGVUaW1lbGluZVNlbmRlcih0aGlzLnRpbWVsaW5lLCB7XG5cdCAgICAgICAgICAgICAgICBob3N0OiB0aGlzLmNvbmZpZy5zdGF0c0hvc3QsXG5cdCAgICAgICAgICAgICAgICBwYXRoOiBcIi90aW1lbGluZS92Mi9cIiArIHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uVGltZWxpbmVUcmFuc3BvcnQubmFtZVxuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGdldFN0cmF0ZWd5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0ICAgICAgICAgICAgdmFyIGNvbmZpZyA9IENvbGxlY3Rpb25zLmV4dGVuZCh7fSwgX3RoaXMuY29uZmlnLCBvcHRpb25zKTtcblx0ICAgICAgICAgICAgcmV0dXJuIFN0cmF0ZWd5QnVpbGRlci5idWlsZChydW50aW1lXzFbXCJkZWZhdWx0XCJdLmdldERlZmF1bHRTdHJhdGVneShjb25maWcpLCBjb25maWcpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gZmFjdG9yeV8xW1wiZGVmYXVsdFwiXS5jcmVhdGVDb25uZWN0aW9uTWFuYWdlcih0aGlzLmtleSwgQ29sbGVjdGlvbnMuZXh0ZW5kKHsgZ2V0U3RyYXRlZ3k6IGdldFN0cmF0ZWd5LFxuXHQgICAgICAgICAgICB0aW1lbGluZTogdGhpcy50aW1lbGluZSxcblx0ICAgICAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiB0aGlzLmNvbmZpZy5hY3Rpdml0eV90aW1lb3V0LFxuXHQgICAgICAgICAgICBwb25nVGltZW91dDogdGhpcy5jb25maWcucG9uZ190aW1lb3V0LFxuXHQgICAgICAgICAgICB1bmF2YWlsYWJsZVRpbWVvdXQ6IHRoaXMuY29uZmlnLnVuYXZhaWxhYmxlX3RpbWVvdXRcblx0ICAgICAgICB9LCB0aGlzLmNvbmZpZywgeyBlbmNyeXB0ZWQ6IHRoaXMuaXNFbmNyeXB0ZWQoKSB9KSk7XG5cdCAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RlZCcsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlQWxsKCk7XG5cdCAgICAgICAgICAgIGlmIChfdGhpcy50aW1lbGluZVNlbmRlcikge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMudGltZWxpbmVTZW5kZXIuc2VuZChfdGhpcy5jb25uZWN0aW9uLmlzRW5jcnlwdGVkKCkpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ21lc3NhZ2UnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG5cdCAgICAgICAgICAgIHZhciBpbnRlcm5hbCA9IChwYXJhbXMuZXZlbnQuaW5kZXhPZigncHVzaGVyX2ludGVybmFsOicpID09PSAwKTtcblx0ICAgICAgICAgICAgaWYgKHBhcmFtcy5jaGFubmVsKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgY2hhbm5lbCA9IF90aGlzLmNoYW5uZWwocGFyYW1zLmNoYW5uZWwpO1xuXHQgICAgICAgICAgICAgICAgaWYgKGNoYW5uZWwpIHtcblx0ICAgICAgICAgICAgICAgICAgICBjaGFubmVsLmhhbmRsZUV2ZW50KHBhcmFtcy5ldmVudCwgcGFyYW1zLmRhdGEpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmICghaW50ZXJuYWwpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLmdsb2JhbF9lbWl0dGVyLmVtaXQocGFyYW1zLmV2ZW50LCBwYXJhbXMuZGF0YSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnY29ubmVjdGluZycsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgX3RoaXMuY2hhbm5lbHMuZGlzY29ubmVjdCgpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdkaXNjb25uZWN0ZWQnLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIF90aGlzLmNoYW5uZWxzLmRpc2Nvbm5lY3QoKTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG5cdCAgICAgICAgICAgIGxvZ2dlcl8xW1wiZGVmYXVsdFwiXS53YXJuKCdFcnJvcicsIGVycik7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgUHVzaGVyLmluc3RhbmNlcy5wdXNoKHRoaXMpO1xuXHQgICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh7IGluc3RhbmNlczogUHVzaGVyLmluc3RhbmNlcy5sZW5ndGggfSk7XG5cdCAgICAgICAgaWYgKFB1c2hlci5pc1JlYWR5KSB7XG5cdCAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIFB1c2hlci5yZWFkeSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBQdXNoZXIuaXNSZWFkeSA9IHRydWU7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBQdXNoZXIuaW5zdGFuY2VzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICAgICAgICBQdXNoZXIuaW5zdGFuY2VzW2ldLmNvbm5lY3QoKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLmxvZyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG5cdCAgICAgICAgaWYgKFB1c2hlci5sb2dUb0NvbnNvbGUgJiYgKHdpbmRvdykuY29uc29sZSAmJiAod2luZG93KS5jb25zb2xlLmxvZykge1xuXHQgICAgICAgICAgICAod2luZG93KS5jb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLmdldENsaWVudEZlYXR1cmVzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBDb2xsZWN0aW9ucy5rZXlzKENvbGxlY3Rpb25zLmZpbHRlck9iamVjdCh7IFwid3NcIjogcnVudGltZV8xW1wiZGVmYXVsdFwiXS5UcmFuc3BvcnRzLndzIH0sIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0LmlzU3VwcG9ydGVkKHt9KTsgfSkpO1xuXHQgICAgfTtcblx0ICAgIFB1c2hlci5wcm90b3R5cGUuY2hhbm5lbCA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuZmluZChuYW1lKTtcblx0ICAgIH07XG5cdCAgICBQdXNoZXIucHJvdG90eXBlLmFsbENoYW5uZWxzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzLmFsbCgpO1xuXHQgICAgfTtcblx0ICAgIFB1c2hlci5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0aGlzLmNvbm5lY3Rpb24uY29ubmVjdCgpO1xuXHQgICAgICAgIGlmICh0aGlzLnRpbWVsaW5lU2VuZGVyKSB7XG5cdCAgICAgICAgICAgIGlmICghdGhpcy50aW1lbGluZVNlbmRlclRpbWVyKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgZW5jcnlwdGVkID0gdGhpcy5jb25uZWN0aW9uLmlzRW5jcnlwdGVkKCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgdGltZWxpbmVTZW5kZXIgPSB0aGlzLnRpbWVsaW5lU2VuZGVyO1xuXHQgICAgICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlclRpbWVyID0gbmV3IHRpbWVyc18xLlBlcmlvZGljVGltZXIoNjAwMDAsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aW1lbGluZVNlbmRlci5zZW5kKGVuY3J5cHRlZCk7XG5cdCAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBQdXNoZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5jb25uZWN0aW9uLmRpc2Nvbm5lY3QoKTtcblx0ICAgICAgICBpZiAodGhpcy50aW1lbGluZVNlbmRlclRpbWVyKSB7XG5cdCAgICAgICAgICAgIHRoaXMudGltZWxpbmVTZW5kZXJUaW1lci5lbnN1cmVBYm9ydGVkKCk7XG5cdCAgICAgICAgICAgIHRoaXMudGltZWxpbmVTZW5kZXJUaW1lciA9IG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIFB1c2hlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChldmVudF9uYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuXHQgICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIuYmluZChldmVudF9uYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiAoZXZlbnRfbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLnVuYmluZChldmVudF9uYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLnByb3RvdHlwZS5iaW5kX2dsb2JhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIuYmluZF9nbG9iYWwoY2FsbGJhY2spO1xuXHQgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfTtcblx0ICAgIFB1c2hlci5wcm90b3R5cGUudW5iaW5kX2dsb2JhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIudW5iaW5kX2dsb2JhbChjYWxsYmFjayk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLnByb3RvdHlwZS51bmJpbmRfYWxsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlci51bmJpbmRfYWxsKCk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLnByb3RvdHlwZS5zdWJzY3JpYmVBbGwgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIGNoYW5uZWxOYW1lO1xuXHQgICAgICAgIGZvciAoY2hhbm5lbE5hbWUgaW4gdGhpcy5jaGFubmVscy5jaGFubmVscykge1xuXHQgICAgICAgICAgICBpZiAodGhpcy5jaGFubmVscy5jaGFubmVscy5oYXNPd25Qcm9wZXJ0eShjaGFubmVsTmFtZSkpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKGNoYW5uZWxOYW1lKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBQdXNoZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChjaGFubmVsX25hbWUpIHtcblx0ICAgICAgICB2YXIgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMuYWRkKGNoYW5uZWxfbmFtZSwgdGhpcyk7XG5cdCAgICAgICAgaWYgKGNoYW5uZWwuc3Vic2NyaXB0aW9uUGVuZGluZyAmJiBjaGFubmVsLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCkge1xuXHQgICAgICAgICAgICBjaGFubmVsLnJlaW5zdGF0ZVN1YnNjcmlwdGlvbigpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIGlmICghY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nICYmIHRoaXMuY29ubmVjdGlvbi5zdGF0ZSA9PT0gXCJjb25uZWN0ZWRcIikge1xuXHQgICAgICAgICAgICBjaGFubmVsLnN1YnNjcmliZSgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gY2hhbm5lbDtcblx0ICAgIH07XG5cdCAgICBQdXNoZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGNoYW5uZWxfbmFtZSkge1xuXHQgICAgICAgIHZhciBjaGFubmVsID0gdGhpcy5jaGFubmVscy5maW5kKGNoYW5uZWxfbmFtZSk7XG5cdCAgICAgICAgaWYgKGNoYW5uZWwgJiYgY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nKSB7XG5cdCAgICAgICAgICAgIGNoYW5uZWwuY2FuY2VsU3Vic2NyaXB0aW9uKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICBjaGFubmVsID0gdGhpcy5jaGFubmVscy5yZW1vdmUoY2hhbm5lbF9uYW1lKTtcblx0ICAgICAgICAgICAgaWYgKGNoYW5uZWwgJiYgdGhpcy5jb25uZWN0aW9uLnN0YXRlID09PSBcImNvbm5lY3RlZFwiKSB7XG5cdCAgICAgICAgICAgICAgICBjaGFubmVsLnVuc3Vic2NyaWJlKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLnByb3RvdHlwZS5zZW5kX2V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50X25hbWUsIGRhdGEsIGNoYW5uZWwpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnNlbmRfZXZlbnQoZXZlbnRfbmFtZSwgZGF0YSwgY2hhbm5lbCk7XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLnByb3RvdHlwZS5pc0VuY3J5cHRlZCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAocnVudGltZV8xW1wiZGVmYXVsdFwiXS5nZXRQcm90b2NvbCgpID09PSBcImh0dHBzOlwiKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5jb25maWcuZW5jcnlwdGVkKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgUHVzaGVyLmluc3RhbmNlcyA9IFtdO1xuXHQgICAgUHVzaGVyLmlzUmVhZHkgPSBmYWxzZTtcblx0ICAgIFB1c2hlci5sb2dUb0NvbnNvbGUgPSBmYWxzZTtcblx0ICAgIFB1c2hlci5SdW50aW1lID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXTtcblx0ICAgIFB1c2hlci5TY3JpcHRSZWNlaXZlcnMgPSBydW50aW1lXzFbXCJkZWZhdWx0XCJdLlNjcmlwdFJlY2VpdmVycztcblx0ICAgIFB1c2hlci5EZXBlbmRlbmNpZXNSZWNlaXZlcnMgPSBydW50aW1lXzFbXCJkZWZhdWx0XCJdLkRlcGVuZGVuY2llc1JlY2VpdmVycztcblx0ICAgIFB1c2hlci5hdXRoX2NhbGxiYWNrcyA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uYXV0aF9jYWxsYmFja3M7XG5cdCAgICByZXR1cm4gUHVzaGVyO1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFB1c2hlcjtcblx0ZnVuY3Rpb24gY2hlY2tBcHBLZXkoa2V5KSB7XG5cdCAgICBpZiAoa2V5ID09PSBudWxsIHx8IGtleSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgdGhyb3cgXCJZb3UgbXVzdCBwYXNzIHlvdXIgYXBwIGtleSB3aGVuIHlvdSBpbnN0YW50aWF0ZSBQdXNoZXIuXCI7XG5cdCAgICB9XG5cdH1cblx0cnVudGltZV8xW1wiZGVmYXVsdFwiXS5zZXR1cChQdXNoZXIpO1xuXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgZGVwZW5kZW5jaWVzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHR2YXIgeGhyX2F1dGhfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdHZhciBqc29ucF9hdXRoXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblx0dmFyIHNjcmlwdF9yZXF1ZXN0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblx0dmFyIGpzb25wX3JlcXVlc3RfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXHR2YXIgc2NyaXB0X3JlY2VpdmVyX2ZhY3RvcnlfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdHZhciBqc29ucF90aW1lbGluZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cdHZhciB0cmFuc3BvcnRzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblx0dmFyIG5ldF9pbmZvXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KTtcblx0dmFyIGRlZmF1bHRfc3RyYXRlZ3lfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjcpO1xuXHR2YXIgdHJhbnNwb3J0X2Nvbm5lY3Rpb25faW5pdGlhbGl6ZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xuXHR2YXIgaHR0cF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSk7XG5cdHZhciBSdW50aW1lID0ge1xuXHQgICAgbmV4dEF1dGhDYWxsYmFja0lEOiAxLFxuXHQgICAgYXV0aF9jYWxsYmFja3M6IHt9LFxuXHQgICAgU2NyaXB0UmVjZWl2ZXJzOiBzY3JpcHRfcmVjZWl2ZXJfZmFjdG9yeV8xLlNjcmlwdFJlY2VpdmVycyxcblx0ICAgIERlcGVuZGVuY2llc1JlY2VpdmVyczogZGVwZW5kZW5jaWVzXzEuRGVwZW5kZW5jaWVzUmVjZWl2ZXJzLFxuXHQgICAgZ2V0RGVmYXVsdFN0cmF0ZWd5OiBkZWZhdWx0X3N0cmF0ZWd5XzFbXCJkZWZhdWx0XCJdLFxuXHQgICAgVHJhbnNwb3J0czogdHJhbnNwb3J0c18xW1wiZGVmYXVsdFwiXSxcblx0ICAgIHRyYW5zcG9ydENvbm5lY3Rpb25Jbml0aWFsaXplcjogdHJhbnNwb3J0X2Nvbm5lY3Rpb25faW5pdGlhbGl6ZXJfMVtcImRlZmF1bHRcIl0sXG5cdCAgICBIVFRQRmFjdG9yeTogaHR0cF8xW1wiZGVmYXVsdFwiXSxcblx0ICAgIFRpbWVsaW5lVHJhbnNwb3J0OiBqc29ucF90aW1lbGluZV8xW1wiZGVmYXVsdFwiXSxcblx0ICAgIGdldFhIUkFQSTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XG5cdCAgICB9LFxuXHQgICAgZ2V0V2ViU29ja2V0QVBJOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHdpbmRvdy5XZWJTb2NrZXQgfHwgd2luZG93Lk1veldlYlNvY2tldDtcblx0ICAgIH0sXG5cdCAgICBzZXR1cDogZnVuY3Rpb24gKFB1c2hlckNsYXNzKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICB3aW5kb3cuUHVzaGVyID0gUHVzaGVyQ2xhc3M7XG5cdCAgICAgICAgdmFyIGluaXRpYWxpemVPbkRvY3VtZW50Qm9keSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgX3RoaXMub25Eb2N1bWVudEJvZHkoUHVzaGVyQ2xhc3MucmVhZHkpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgaWYgKCF3aW5kb3cuSlNPTikge1xuXHQgICAgICAgICAgICBkZXBlbmRlbmNpZXNfMS5EZXBlbmRlbmNpZXMubG9hZChcImpzb24yXCIsIHt9LCBpbml0aWFsaXplT25Eb2N1bWVudEJvZHkpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgaW5pdGlhbGl6ZU9uRG9jdW1lbnRCb2R5KCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSxcblx0ICAgIGdldERvY3VtZW50OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuXHQgICAgfSxcblx0ICAgIGdldFByb3RvY29sOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RG9jdW1lbnQoKS5sb2NhdGlvbi5wcm90b2NvbDtcblx0ICAgIH0sXG5cdCAgICBnZXRBdXRob3JpemVyczogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB7IGFqYXg6IHhocl9hdXRoXzFbXCJkZWZhdWx0XCJdLCBqc29ucDoganNvbnBfYXV0aF8xW1wiZGVmYXVsdFwiXSB9O1xuXHQgICAgfSxcblx0ICAgIG9uRG9jdW1lbnRCb2R5OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG5cdCAgICAgICAgICAgIGNhbGxiYWNrKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLm9uRG9jdW1lbnRCb2R5KGNhbGxiYWNrKTtcblx0ICAgICAgICAgICAgfSwgMCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSxcblx0ICAgIGNyZWF0ZUpTT05QUmVxdWVzdDogZnVuY3Rpb24gKHVybCwgZGF0YSkge1xuXHQgICAgICAgIHJldHVybiBuZXcganNvbnBfcmVxdWVzdF8xW1wiZGVmYXVsdFwiXSh1cmwsIGRhdGEpO1xuXHQgICAgfSxcblx0ICAgIGNyZWF0ZVNjcmlwdFJlcXVlc3Q6IGZ1bmN0aW9uIChzcmMpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IHNjcmlwdF9yZXF1ZXN0XzFbXCJkZWZhdWx0XCJdKHNyYyk7XG5cdCAgICB9LFxuXHQgICAgZ2V0TG9jYWxTdG9yYWdlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgICAgICAgfVxuXHQgICAgfSxcblx0ICAgIGNyZWF0ZVhIUjogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLmdldFhIUkFQSSgpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVNaWNyb3NvZnRYSFIoKTtcblx0ICAgICAgICB9XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlWE1MSHR0cFJlcXVlc3Q6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFhIUkFQSSgpO1xuXHQgICAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoKTtcblx0ICAgIH0sXG5cdCAgICBjcmVhdGVNaWNyb3NvZnRYSFI6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtcblx0ICAgIH0sXG5cdCAgICBnZXROZXR3b3JrOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldF9pbmZvXzEuTmV0d29yaztcblx0ICAgIH0sXG5cdCAgICBjcmVhdGVXZWJTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcblx0ICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFdlYlNvY2tldEFQSSgpO1xuXHQgICAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IodXJsKTtcblx0ICAgIH0sXG5cdCAgICBjcmVhdGVTb2NrZXRSZXF1ZXN0OiBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcblx0ICAgICAgICBpZiAodGhpcy5pc1hIUlN1cHBvcnRlZCgpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLkhUVFBGYWN0b3J5LmNyZWF0ZVhIUihtZXRob2QsIHVybCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNYRFJTdXBwb3J0ZWQodXJsLmluZGV4T2YoXCJodHRwczpcIikgPT09IDApKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLkhUVFBGYWN0b3J5LmNyZWF0ZVhEUihtZXRob2QsIHVybCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICB0aHJvdyBcIkNyb3NzLW9yaWdpbiBIVFRQIHJlcXVlc3RzIGFyZSBub3Qgc3VwcG9ydGVkXCI7XG5cdCAgICAgICAgfVxuXHQgICAgfSxcblx0ICAgIGlzWEhSU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcy5nZXRYSFJBUEkoKTtcblx0ICAgICAgICByZXR1cm4gQm9vbGVhbihDb25zdHJ1Y3RvcikgJiYgKG5ldyBDb25zdHJ1Y3RvcigpKS53aXRoQ3JlZGVudGlhbHMgIT09IHVuZGVmaW5lZDtcblx0ICAgIH0sXG5cdCAgICBpc1hEUlN1cHBvcnRlZDogZnVuY3Rpb24gKGVuY3J5cHRlZCkge1xuXHQgICAgICAgIHZhciBwcm90b2NvbCA9IGVuY3J5cHRlZCA/IFwiaHR0cHM6XCIgOiBcImh0dHA6XCI7XG5cdCAgICAgICAgdmFyIGRvY3VtZW50UHJvdG9jb2wgPSB0aGlzLmdldFByb3RvY29sKCk7XG5cdCAgICAgICAgcmV0dXJuIEJvb2xlYW4oKHdpbmRvd1snWERvbWFpblJlcXVlc3QnXSkpICYmIGRvY3VtZW50UHJvdG9jb2wgPT09IHByb3RvY29sO1xuXHQgICAgfSxcblx0ICAgIGFkZFVubG9hZExpc3RlbmVyOiBmdW5jdGlvbiAobGlzdGVuZXIpIHtcblx0ICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCBsaXN0ZW5lciwgZmFsc2UpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLCBsaXN0ZW5lcik7XG5cdCAgICAgICAgfVxuXHQgICAgfSxcblx0ICAgIHJlbW92ZVVubG9hZExpc3RlbmVyOiBmdW5jdGlvbiAobGlzdGVuZXIpIHtcblx0ICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCBsaXN0ZW5lciwgZmFsc2UpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIGlmICh3aW5kb3cuZGV0YWNoRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICB3aW5kb3cuZGV0YWNoRXZlbnQoXCJvbnVubG9hZFwiLCBsaXN0ZW5lcik7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHR9O1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFJ1bnRpbWU7XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBzY3JpcHRfcmVjZWl2ZXJfZmFjdG9yeV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0dmFyIGRlZmF1bHRzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHR2YXIgZGVwZW5kZW5jeV9sb2FkZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdGV4cG9ydHMuRGVwZW5kZW5jaWVzUmVjZWl2ZXJzID0gbmV3IHNjcmlwdF9yZWNlaXZlcl9mYWN0b3J5XzEuU2NyaXB0UmVjZWl2ZXJGYWN0b3J5KFwiX3B1c2hlcl9kZXBlbmRlbmNpZXNcIiwgXCJQdXNoZXIuRGVwZW5kZW5jaWVzUmVjZWl2ZXJzXCIpO1xuXHRleHBvcnRzLkRlcGVuZGVuY2llcyA9IG5ldyBkZXBlbmRlbmN5X2xvYWRlcl8xW1wiZGVmYXVsdFwiXSh7XG5cdCAgICBjZG5faHR0cDogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uY2RuX2h0dHAsXG5cdCAgICBjZG5faHR0cHM6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLmNkbl9odHRwcyxcblx0ICAgIHZlcnNpb246IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLlZFUlNJT04sXG5cdCAgICBzdWZmaXg6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLmRlcGVuZGVuY3lfc3VmZml4LFxuXHQgICAgcmVjZWl2ZXJzOiBleHBvcnRzLkRlcGVuZGVuY2llc1JlY2VpdmVyc1xuXHR9KTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIFNjcmlwdFJlY2VpdmVyRmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBTY3JpcHRSZWNlaXZlckZhY3RvcnkocHJlZml4LCBuYW1lKSB7XG5cdCAgICAgICAgdGhpcy5sYXN0SWQgPSAwO1xuXHQgICAgICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuXHQgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG5cdCAgICB9XG5cdCAgICBTY3JpcHRSZWNlaXZlckZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgIHRoaXMubGFzdElkKys7XG5cdCAgICAgICAgdmFyIG51bWJlciA9IHRoaXMubGFzdElkO1xuXHQgICAgICAgIHZhciBpZCA9IHRoaXMucHJlZml4ICsgbnVtYmVyO1xuXHQgICAgICAgIHZhciBuYW1lID0gdGhpcy5uYW1lICsgXCJbXCIgKyBudW1iZXIgKyBcIl1cIjtcblx0ICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG5cdCAgICAgICAgdmFyIGNhbGxiYWNrV3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcblx0ICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzW251bWJlcl0gPSBjYWxsYmFja1dyYXBwZXI7XG5cdCAgICAgICAgcmV0dXJuIHsgbnVtYmVyOiBudW1iZXIsIGlkOiBpZCwgbmFtZTogbmFtZSwgY2FsbGJhY2s6IGNhbGxiYWNrV3JhcHBlciB9O1xuXHQgICAgfTtcblx0ICAgIFNjcmlwdFJlY2VpdmVyRmFjdG9yeS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHJlY2VpdmVyKSB7XG5cdCAgICAgICAgZGVsZXRlIHRoaXNbcmVjZWl2ZXIubnVtYmVyXTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gU2NyaXB0UmVjZWl2ZXJGYWN0b3J5O1xuXHR9KCkpO1xuXHRleHBvcnRzLlNjcmlwdFJlY2VpdmVyRmFjdG9yeSA9IFNjcmlwdFJlY2VpdmVyRmFjdG9yeTtcblx0ZXhwb3J0cy5TY3JpcHRSZWNlaXZlcnMgPSBuZXcgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5KFwiX3B1c2hlcl9zY3JpcHRfXCIsIFwiUHVzaGVyLlNjcmlwdFJlY2VpdmVyc1wiKTtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIERlZmF1bHRzID0ge1xuXHQgICAgVkVSU0lPTjogXCI0LjIuMVwiLFxuXHQgICAgUFJPVE9DT0w6IDcsXG5cdCAgICBob3N0OiAnd3MucHVzaGVyYXBwLmNvbScsXG5cdCAgICB3c19wb3J0OiA4MCxcblx0ICAgIHdzc19wb3J0OiA0NDMsXG5cdCAgICBzb2NranNfaG9zdDogJ3NvY2tqcy5wdXNoZXIuY29tJyxcblx0ICAgIHNvY2tqc19odHRwX3BvcnQ6IDgwLFxuXHQgICAgc29ja2pzX2h0dHBzX3BvcnQ6IDQ0Myxcblx0ICAgIHNvY2tqc19wYXRoOiBcIi9wdXNoZXJcIixcblx0ICAgIHN0YXRzX2hvc3Q6ICdzdGF0cy5wdXNoZXIuY29tJyxcblx0ICAgIGNoYW5uZWxfYXV0aF9lbmRwb2ludDogJy9wdXNoZXIvYXV0aCcsXG5cdCAgICBjaGFubmVsX2F1dGhfdHJhbnNwb3J0OiAnYWpheCcsXG5cdCAgICBhY3Rpdml0eV90aW1lb3V0OiAxMjAwMDAsXG5cdCAgICBwb25nX3RpbWVvdXQ6IDMwMDAwLFxuXHQgICAgdW5hdmFpbGFibGVfdGltZW91dDogMTAwMDAsXG5cdCAgICBjZG5faHR0cDogJ2h0dHA6Ly9qcy5wdXNoZXIuY29tJyxcblx0ICAgIGNkbl9odHRwczogJ2h0dHBzOi8vanMucHVzaGVyLmNvbScsXG5cdCAgICBkZXBlbmRlbmN5X3N1ZmZpeDogJydcblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEZWZhdWx0cztcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIHNjcmlwdF9yZWNlaXZlcl9mYWN0b3J5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHR2YXIgcnVudGltZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIERlcGVuZGVuY3lMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gRGVwZW5kZW5jeUxvYWRlcihvcHRpb25zKSB7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0ICAgICAgICB0aGlzLnJlY2VpdmVycyA9IG9wdGlvbnMucmVjZWl2ZXJzIHx8IHNjcmlwdF9yZWNlaXZlcl9mYWN0b3J5XzEuU2NyaXB0UmVjZWl2ZXJzO1xuXHQgICAgICAgIHRoaXMubG9hZGluZyA9IHt9O1xuXHQgICAgfVxuXHQgICAgRGVwZW5kZW5jeUxvYWRlci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zLCBjYWxsYmFjaykge1xuXHQgICAgICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgICAgICBpZiAoc2VsZi5sb2FkaW5nW25hbWVdICYmIHNlbGYubG9hZGluZ1tuYW1lXS5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgICAgIHNlbGYubG9hZGluZ1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHNlbGYubG9hZGluZ1tuYW1lXSA9IFtjYWxsYmFja107XG5cdCAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5jcmVhdGVTY3JpcHRSZXF1ZXN0KHNlbGYuZ2V0UGF0aChuYW1lLCBvcHRpb25zKSk7XG5cdCAgICAgICAgICAgIHZhciByZWNlaXZlciA9IHNlbGYucmVjZWl2ZXJzLmNyZWF0ZShmdW5jdGlvbiAoZXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgIHNlbGYucmVjZWl2ZXJzLnJlbW92ZShyZWNlaXZlcik7XG5cdCAgICAgICAgICAgICAgICBpZiAoc2VsZi5sb2FkaW5nW25hbWVdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHNlbGYubG9hZGluZ1tuYW1lXTtcblx0ICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi5sb2FkaW5nW25hbWVdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzQ2FsbGJhY2sgPSBmdW5jdGlvbiAod2FzU3VjY2Vzc2Z1bCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdhc1N1Y2Nlc3NmdWwpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuY2xlYW51cCgpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0oZXJyb3IsIHN1Y2Nlc3NDYWxsYmFjayk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgcmVxdWVzdC5zZW5kKHJlY2VpdmVyKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgRGVwZW5kZW5jeUxvYWRlci5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdCAgICAgICAgdmFyIGNkbjtcblx0ICAgICAgICB2YXIgcHJvdG9jb2wgPSBydW50aW1lXzFbXCJkZWZhdWx0XCJdLmdldERvY3VtZW50KCkubG9jYXRpb24ucHJvdG9jb2w7XG5cdCAgICAgICAgaWYgKChvcHRpb25zICYmIG9wdGlvbnMuZW5jcnlwdGVkKSB8fCBwcm90b2NvbCA9PT0gXCJodHRwczpcIikge1xuXHQgICAgICAgICAgICBjZG4gPSB0aGlzLm9wdGlvbnMuY2RuX2h0dHBzO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgY2RuID0gdGhpcy5vcHRpb25zLmNkbl9odHRwO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gY2RuLnJlcGxhY2UoL1xcLyokLywgXCJcIikgKyBcIi9cIiArIHRoaXMub3B0aW9ucy52ZXJzaW9uO1xuXHQgICAgfTtcblx0ICAgIERlcGVuZGVuY3lMb2FkZXIucHJvdG90eXBlLmdldFBhdGggPSBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucykge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmdldFJvb3Qob3B0aW9ucykgKyAnLycgKyBuYW1lICsgdGhpcy5vcHRpb25zLnN1ZmZpeCArICcuanMnO1xuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIHJldHVybiBEZXBlbmRlbmN5TG9hZGVyO1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IERlcGVuZGVuY3lMb2FkZXI7XG5cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBsb2dnZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgdXJsX3N0b3JlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblx0dmFyIGFqYXggPSBmdW5jdGlvbiAoY29udGV4dCwgc29ja2V0SWQsIGNhbGxiYWNrKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXMsIHhocjtcblx0ICAgIHhociA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uY3JlYXRlWEhSKCk7XG5cdCAgICB4aHIub3BlbihcIlBPU1RcIiwgc2VsZi5vcHRpb25zLmF1dGhFbmRwb2ludCwgdHJ1ZSk7XG5cdCAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcblx0ICAgIGZvciAodmFyIGhlYWRlck5hbWUgaW4gdGhpcy5hdXRoT3B0aW9ucy5oZWFkZXJzKSB7XG5cdCAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyTmFtZSwgdGhpcy5hdXRoT3B0aW9ucy5oZWFkZXJzW2hlYWRlck5hbWVdKTtcblx0ICAgIH1cblx0ICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG5cdCAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcblx0ICAgICAgICAgICAgICAgIHZhciBkYXRhLCBwYXJzZWQgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSwgJ0pTT04gcmV0dXJuZWQgZnJvbSB3ZWJhcHAgd2FzIGludmFsaWQsIHlldCBzdGF0dXMgY29kZSB3YXMgMjAwLiBEYXRhIHdhczogJyArIHhoci5yZXNwb25zZVRleHQpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHBhcnNlZCkge1xuXHQgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCBkYXRhKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmVfMVtcImRlZmF1bHRcIl0uYnVpbGRMb2dTdWZmaXgoXCJhdXRoZW50aWNhdGlvbkVuZHBvaW50XCIpO1xuXHQgICAgICAgICAgICAgICAgbG9nZ2VyXzFbXCJkZWZhdWx0XCJdLndhcm4oKFwiQ291bGRuJ3QgcmV0cmlldmUgYXV0aGVudGljYXRpb24gaW5mby4gXCIgKyB4aHIuc3RhdHVzKSArXG5cdCAgICAgICAgICAgICAgICAgICAgKFwiQ2xpZW50cyBtdXN0IGJlIGF1dGhlbnRpY2F0ZWQgdG8gam9pbiBwcml2YXRlIG9yIHByZXNlbmNlIGNoYW5uZWxzLiBcIiArIHN1ZmZpeCkpO1xuXHQgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSwgeGhyLnN0YXR1cyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgeGhyLnNlbmQodGhpcy5jb21wb3NlUXVlcnkoc29ja2V0SWQpKTtcblx0ICAgIHJldHVybiB4aHI7XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYWpheDtcblxuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGNvbGxlY3Rpb25zXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgcHVzaGVyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHR2YXIgTG9nZ2VyID0ge1xuXHQgICAgZGVidWc6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgYXJncyA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG5cdCAgICAgICAgICAgIGFyZ3NbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICghcHVzaGVyXzFbXCJkZWZhdWx0XCJdLmxvZykge1xuXHQgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHB1c2hlcl8xW1wiZGVmYXVsdFwiXS5sb2coY29sbGVjdGlvbnNfMS5zdHJpbmdpZnkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdCAgICB9LFxuXHQgICAgd2FybjogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBhcmdzID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcblx0ICAgICAgICAgICAgYXJnc1tfaSAtIDBdID0gYXJndW1lbnRzW19pXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIG1lc3NhZ2UgPSBjb2xsZWN0aW9uc18xLnN0cmluZ2lmeS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgIGlmICgod2luZG93KS5jb25zb2xlKSB7XG5cdCAgICAgICAgICAgIGlmICgod2luZG93KS5jb25zb2xlLndhcm4pIHtcblx0ICAgICAgICAgICAgICAgICh3aW5kb3cpLmNvbnNvbGUud2FybihtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIGlmICgod2luZG93KS5jb25zb2xlLmxvZykge1xuXHQgICAgICAgICAgICAgICAgKHdpbmRvdykuY29uc29sZS5sb2cobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHB1c2hlcl8xW1wiZGVmYXVsdFwiXS5sb2cpIHtcblx0ICAgICAgICAgICAgcHVzaGVyXzFbXCJkZWZhdWx0XCJdLmxvZyhtZXNzYWdlKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9nZ2VyO1xuXG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgYmFzZTY0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0dmFyIHV0aWxfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHRmdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG5cdCAgICB2YXIgc291cmNlcyA9IFtdO1xuXHQgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcblx0ICAgICAgICBzb3VyY2VzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuXHQgICAgfVxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgdmFyIGV4dGVuc2lvbnMgPSBzb3VyY2VzW2ldO1xuXHQgICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGV4dGVuc2lvbnMpIHtcblx0ICAgICAgICAgICAgaWYgKGV4dGVuc2lvbnNbcHJvcGVydHldICYmIGV4dGVuc2lvbnNbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmXG5cdCAgICAgICAgICAgICAgICBleHRlbnNpb25zW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG5cdCAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gZXh0ZW5kKHRhcmdldFtwcm9wZXJ0eV0gfHwge30sIGV4dGVuc2lvbnNbcHJvcGVydHldKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBleHRlbnNpb25zW3Byb3BlcnR5XTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiB0YXJnZXQ7XG5cdH1cblx0ZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG5cdGZ1bmN0aW9uIHN0cmluZ2lmeSgpIHtcblx0ICAgIHZhciBtID0gW1wiUHVzaGVyXCJdO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gXCJzdHJpbmdcIikge1xuXHQgICAgICAgICAgICBtLnB1c2goYXJndW1lbnRzW2ldKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIG0ucHVzaChzYWZlSlNPTlN0cmluZ2lmeShhcmd1bWVudHNbaV0pKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gbS5qb2luKFwiIDogXCIpO1xuXHR9XG5cdGV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5O1xuXHRmdW5jdGlvbiBhcnJheUluZGV4T2YoYXJyYXksIGl0ZW0pIHtcblx0ICAgIHZhciBuYXRpdmVJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5cdCAgICBpZiAoYXJyYXkgPT09IG51bGwpIHtcblx0ICAgICAgICByZXR1cm4gLTE7XG5cdCAgICB9XG5cdCAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBhcnJheS5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSB7XG5cdCAgICAgICAgcmV0dXJuIGFycmF5LmluZGV4T2YoaXRlbSk7XG5cdCAgICB9XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICAgIGlmIChhcnJheVtpXSA9PT0gaXRlbSkge1xuXHQgICAgICAgICAgICByZXR1cm4gaTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gLTE7XG5cdH1cblx0ZXhwb3J0cy5hcnJheUluZGV4T2YgPSBhcnJheUluZGV4T2Y7XG5cdGZ1bmN0aW9uIG9iamVjdEFwcGx5KG9iamVjdCwgZikge1xuXHQgICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuXHQgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG5cdCAgICAgICAgICAgIGYob2JqZWN0W2tleV0sIGtleSwgb2JqZWN0KTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH1cblx0ZXhwb3J0cy5vYmplY3RBcHBseSA9IG9iamVjdEFwcGx5O1xuXHRmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHQgICAgdmFyIGtleXMgPSBbXTtcblx0ICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKF8sIGtleSkge1xuXHQgICAgICAgIGtleXMucHVzaChrZXkpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4ga2V5cztcblx0fVxuXHRleHBvcnRzLmtleXMgPSBrZXlzO1xuXHRmdW5jdGlvbiB2YWx1ZXMob2JqZWN0KSB7XG5cdCAgICB2YXIgdmFsdWVzID0gW107XG5cdCAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIHZhbHVlcztcblx0fVxuXHRleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblx0ZnVuY3Rpb24gYXBwbHkoYXJyYXksIGYsIGNvbnRleHQpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBmLmNhbGwoY29udGV4dCB8fCAod2luZG93KSwgYXJyYXlbaV0sIGksIGFycmF5KTtcblx0ICAgIH1cblx0fVxuXHRleHBvcnRzLmFwcGx5ID0gYXBwbHk7XG5cdGZ1bmN0aW9uIG1hcChhcnJheSwgZikge1xuXHQgICAgdmFyIHJlc3VsdCA9IFtdO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIHJlc3VsdC5wdXNoKGYoYXJyYXlbaV0sIGksIGFycmF5LCByZXN1bHQpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdH1cblx0ZXhwb3J0cy5tYXAgPSBtYXA7XG5cdGZ1bmN0aW9uIG1hcE9iamVjdChvYmplY3QsIGYpIHtcblx0ICAgIHZhciByZXN1bHQgPSB7fTtcblx0ICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgICByZXN1bHRba2V5XSA9IGYodmFsdWUpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGV4cG9ydHMubWFwT2JqZWN0ID0gbWFwT2JqZWN0O1xuXHRmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcblx0ICAgIHRlc3QgPSB0ZXN0IHx8IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gISF2YWx1ZTsgfTtcblx0ICAgIHZhciByZXN1bHQgPSBbXTtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBpZiAodGVzdChhcnJheVtpXSwgaSwgYXJyYXksIHJlc3VsdCkpIHtcblx0ICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyYXlbaV0pO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdH1cblx0ZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG5cdGZ1bmN0aW9uIGZpbHRlck9iamVjdChvYmplY3QsIHRlc3QpIHtcblx0ICAgIHZhciByZXN1bHQgPSB7fTtcblx0ICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgICBpZiAoKHRlc3QgJiYgdGVzdCh2YWx1ZSwga2V5LCBvYmplY3QsIHJlc3VsdCkpIHx8IEJvb2xlYW4odmFsdWUpKSB7XG5cdCAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGV4cG9ydHMuZmlsdGVyT2JqZWN0ID0gZmlsdGVyT2JqZWN0O1xuXHRmdW5jdGlvbiBmbGF0dGVuKG9iamVjdCkge1xuXHQgICAgdmFyIHJlc3VsdCA9IFtdO1xuXHQgICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlXSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdH1cblx0ZXhwb3J0cy5mbGF0dGVuID0gZmxhdHRlbjtcblx0ZnVuY3Rpb24gYW55KGFycmF5LCB0ZXN0KSB7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKHRlc3QoYXJyYXlbaV0sIGksIGFycmF5KSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdH1cblx0ZXhwb3J0cy5hbnkgPSBhbnk7XG5cdGZ1bmN0aW9uIGFsbChhcnJheSwgdGVzdCkge1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIGlmICghdGVzdChhcnJheVtpXSwgaSwgYXJyYXkpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0fVxuXHRleHBvcnRzLmFsbCA9IGFsbDtcblx0ZnVuY3Rpb24gZW5jb2RlUGFyYW1zT2JqZWN0KGRhdGEpIHtcblx0ICAgIHJldHVybiBtYXBPYmplY3QoZGF0YSwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuXHQgICAgICAgICAgICB2YWx1ZSA9IHNhZmVKU09OU3RyaW5naWZ5KHZhbHVlKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChiYXNlNjRfMVtcImRlZmF1bHRcIl0odmFsdWUudG9TdHJpbmcoKSkpO1xuXHQgICAgfSk7XG5cdH1cblx0ZXhwb3J0cy5lbmNvZGVQYXJhbXNPYmplY3QgPSBlbmNvZGVQYXJhbXNPYmplY3Q7XG5cdGZ1bmN0aW9uIGJ1aWxkUXVlcnlTdHJpbmcoZGF0YSkge1xuXHQgICAgdmFyIHBhcmFtcyA9IGZpbHRlck9iamVjdChkYXRhLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcblx0ICAgIH0pO1xuXHQgICAgdmFyIHF1ZXJ5ID0gbWFwKGZsYXR0ZW4oZW5jb2RlUGFyYW1zT2JqZWN0KHBhcmFtcykpLCB1dGlsXzFbXCJkZWZhdWx0XCJdLm1ldGhvZChcImpvaW5cIiwgXCI9XCIpKS5qb2luKFwiJlwiKTtcblx0ICAgIHJldHVybiBxdWVyeTtcblx0fVxuXHRleHBvcnRzLmJ1aWxkUXVlcnlTdHJpbmcgPSBidWlsZFF1ZXJ5U3RyaW5nO1xuXHRmdW5jdGlvbiBkZWN5Y2xlT2JqZWN0KG9iamVjdCkge1xuXHQgICAgdmFyIG9iamVjdHMgPSBbXSwgcGF0aHMgPSBbXTtcblx0ICAgIHJldHVybiAoZnVuY3Rpb24gZGVyZXoodmFsdWUsIHBhdGgpIHtcblx0ICAgICAgICB2YXIgaSwgbmFtZSwgbnU7XG5cdCAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcblx0ICAgICAgICAgICAgY2FzZSAnb2JqZWN0Jzpcblx0ICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSArPSAxKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdHNbaV0gPT09IHZhbHVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICRyZWY6IHBhdGhzW2ldIH07XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgb2JqZWN0cy5wdXNoKHZhbHVlKTtcblx0ICAgICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG5cdCAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcblx0ICAgICAgICAgICAgICAgICAgICBudSA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkgKz0gMSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBudVtpXSA9IGRlcmV6KHZhbHVlW2ldLCBwYXRoICsgJ1snICsgaSArICddJyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbnUgPSB7fTtcblx0ICAgICAgICAgICAgICAgICAgICBmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgbmFtZSkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51W25hbWVdID0gZGVyZXoodmFsdWVbbmFtZV0sIHBhdGggKyAnWycgKyBKU09OLnN0cmluZ2lmeShuYW1lKSArICddJyk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbnU7XG5cdCAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG5cdCAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG5cdCAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXHQgICAgICAgIH1cblx0ICAgIH0ob2JqZWN0LCAnJCcpKTtcblx0fVxuXHRleHBvcnRzLmRlY3ljbGVPYmplY3QgPSBkZWN5Y2xlT2JqZWN0O1xuXHRmdW5jdGlvbiBzYWZlSlNPTlN0cmluZ2lmeShzb3VyY2UpIHtcblx0ICAgIHRyeSB7XG5cdCAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNvdXJjZSk7XG5cdCAgICB9XG5cdCAgICBjYXRjaCAoZSkge1xuXHQgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkZWN5Y2xlT2JqZWN0KHNvdXJjZSkpO1xuXHQgICAgfVxuXHR9XG5cdGV4cG9ydHMuc2FmZUpTT05TdHJpbmdpZnkgPSBzYWZlSlNPTlN0cmluZ2lmeTtcblxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdGZ1bmN0aW9uIGVuY29kZShzKSB7XG5cdCAgICByZXR1cm4gYnRvYSh1dG9iKHMpKTtcblx0fVxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGVuY29kZTtcblx0dmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cdHZhciBiNjRjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblx0dmFyIGI2NHRhYiA9IHt9O1xuXHRmb3IgKHZhciBpID0gMCwgbCA9IGI2NGNoYXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgYjY0dGFiW2I2NGNoYXJzLmNoYXJBdChpKV0gPSBpO1xuXHR9XG5cdHZhciBjYl91dG9iID0gZnVuY3Rpb24gKGMpIHtcblx0ICAgIHZhciBjYyA9IGMuY2hhckNvZGVBdCgwKTtcblx0ICAgIHJldHVybiBjYyA8IDB4ODAgPyBjXG5cdCAgICAgICAgOiBjYyA8IDB4ODAwID8gZnJvbUNoYXJDb2RlKDB4YzAgfCAoY2MgPj4+IDYpKSArXG5cdCAgICAgICAgICAgIGZyb21DaGFyQ29kZSgweDgwIHwgKGNjICYgMHgzZikpXG5cdCAgICAgICAgICAgIDogZnJvbUNoYXJDb2RlKDB4ZTAgfCAoKGNjID4+PiAxMikgJiAweDBmKSkgK1xuXHQgICAgICAgICAgICAgICAgZnJvbUNoYXJDb2RlKDB4ODAgfCAoKGNjID4+PiA2KSAmIDB4M2YpKSArXG5cdCAgICAgICAgICAgICAgICBmcm9tQ2hhckNvZGUoMHg4MCB8IChjYyAmIDB4M2YpKTtcblx0fTtcblx0dmFyIHV0b2IgPSBmdW5jdGlvbiAodSkge1xuXHQgICAgcmV0dXJuIHUucmVwbGFjZSgvW15cXHgwMC1cXHg3Rl0vZywgY2JfdXRvYik7XG5cdH07XG5cdHZhciBjYl9lbmNvZGUgPSBmdW5jdGlvbiAoY2NjKSB7XG5cdCAgICB2YXIgcGFkbGVuID0gWzAsIDIsIDFdW2NjYy5sZW5ndGggJSAzXTtcblx0ICAgIHZhciBvcmQgPSBjY2MuY2hhckNvZGVBdCgwKSA8PCAxNlxuXHQgICAgICAgIHwgKChjY2MubGVuZ3RoID4gMSA/IGNjYy5jaGFyQ29kZUF0KDEpIDogMCkgPDwgOClcblx0ICAgICAgICB8ICgoY2NjLmxlbmd0aCA+IDIgPyBjY2MuY2hhckNvZGVBdCgyKSA6IDApKTtcblx0ICAgIHZhciBjaGFycyA9IFtcblx0ICAgICAgICBiNjRjaGFycy5jaGFyQXQob3JkID4+PiAxOCksXG5cdCAgICAgICAgYjY0Y2hhcnMuY2hhckF0KChvcmQgPj4+IDEyKSAmIDYzKSxcblx0ICAgICAgICBwYWRsZW4gPj0gMiA/ICc9JyA6IGI2NGNoYXJzLmNoYXJBdCgob3JkID4+PiA2KSAmIDYzKSxcblx0ICAgICAgICBwYWRsZW4gPj0gMSA/ICc9JyA6IGI2NGNoYXJzLmNoYXJBdChvcmQgJiA2Mylcblx0ICAgIF07XG5cdCAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG5cdH07XG5cdHZhciBidG9hID0gKHdpbmRvdykuYnRvYSB8fCBmdW5jdGlvbiAoYikge1xuXHQgICAgcmV0dXJuIGIucmVwbGFjZSgvW1xcc1xcU117MSwzfS9nLCBjYl9lbmNvZGUpO1xuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIHRpbWVyc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdHZhciBVdGlsID0ge1xuXHQgICAgbm93OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKERhdGUubm93KSB7XG5cdCAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkudmFsdWVPZigpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBkZWZlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyB0aW1lcnNfMS5PbmVPZmZUaW1lcigwLCBjYWxsYmFjayk7XG5cdCAgICB9LFxuXHQgICAgbWV0aG9kOiBmdW5jdGlvbiAobmFtZSkge1xuXHQgICAgICAgIHZhciBhcmdzID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcblx0ICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGJvdW5kQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCkge1xuXHQgICAgICAgICAgICByZXR1cm4gb2JqZWN0W25hbWVdLmFwcGx5KG9iamVjdCwgYm91bmRBcmd1bWVudHMuY29uY2F0KGFyZ3VtZW50cykpO1xuXHQgICAgICAgIH07XG5cdCAgICB9XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVXRpbDtcblxuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcblx0ICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuXHQgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG5cdCAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG5cdH07XG5cdHZhciBhYnN0cmFjdF90aW1lcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cdGZ1bmN0aW9uIGNsZWFyVGltZW91dCh0aW1lcikge1xuXHQgICAgKHdpbmRvdykuY2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0fVxuXHRmdW5jdGlvbiBjbGVhckludGVydmFsKHRpbWVyKSB7XG5cdCAgICAod2luZG93KS5jbGVhckludGVydmFsKHRpbWVyKTtcblx0fVxuXHR2YXIgT25lT2ZmVGltZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuXHQgICAgX19leHRlbmRzKE9uZU9mZlRpbWVyLCBfc3VwZXIpO1xuXHQgICAgZnVuY3Rpb24gT25lT2ZmVGltZXIoZGVsYXksIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgc2V0VGltZW91dCwgY2xlYXJUaW1lb3V0LCBkZWxheSwgZnVuY3Rpb24gKHRpbWVyKSB7XG5cdCAgICAgICAgICAgIGNhbGxiYWNrKCk7XG5cdCAgICAgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIE9uZU9mZlRpbWVyO1xuXHR9KGFic3RyYWN0X3RpbWVyXzFbXCJkZWZhdWx0XCJdKSk7XG5cdGV4cG9ydHMuT25lT2ZmVGltZXIgPSBPbmVPZmZUaW1lcjtcblx0dmFyIFBlcmlvZGljVGltZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuXHQgICAgX19leHRlbmRzKFBlcmlvZGljVGltZXIsIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBQZXJpb2RpY1RpbWVyKGRlbGF5LCBjYWxsYmFjaykge1xuXHQgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIHNldEludGVydmFsLCBjbGVhckludGVydmFsLCBkZWxheSwgZnVuY3Rpb24gKHRpbWVyKSB7XG5cdCAgICAgICAgICAgIGNhbGxiYWNrKCk7XG5cdCAgICAgICAgICAgIHJldHVybiB0aW1lcjtcblx0ICAgICAgICB9KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBQZXJpb2RpY1RpbWVyO1xuXHR9KGFic3RyYWN0X3RpbWVyXzFbXCJkZWZhdWx0XCJdKSk7XG5cdGV4cG9ydHMuUGVyaW9kaWNUaW1lciA9IFBlcmlvZGljVGltZXI7XG5cblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgVGltZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gVGltZXIoc2V0LCBjbGVhciwgZGVsYXksIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICB0aGlzLmNsZWFyID0gY2xlYXI7XG5cdCAgICAgICAgdGhpcy50aW1lciA9IHNldChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIGlmIChfdGhpcy50aW1lcikge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMudGltZXIgPSBjYWxsYmFjayhfdGhpcy50aW1lcik7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LCBkZWxheSk7XG5cdCAgICB9XG5cdCAgICBUaW1lci5wcm90b3R5cGUuaXNSdW5uaW5nID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnRpbWVyICE9PSBudWxsO1xuXHQgICAgfTtcblx0ICAgIFRpbWVyLnByb3RvdHlwZS5lbnN1cmVBYm9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG5cdCAgICAgICAgICAgIHRoaXMuY2xlYXIodGhpcy50aW1lcik7XG5cdCAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICByZXR1cm4gVGltZXI7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVGltZXI7XG5cblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgdXJsU3RvcmUgPSB7XG5cdCAgICBiYXNlVXJsOiBcImh0dHBzOi8vcHVzaGVyLmNvbVwiLFxuXHQgICAgdXJsczoge1xuXHQgICAgICAgIGF1dGhlbnRpY2F0aW9uRW5kcG9pbnQ6IHtcblx0ICAgICAgICAgICAgcGF0aDogXCIvZG9jcy9hdXRoZW50aWNhdGluZ191c2Vyc1wiXG5cdCAgICAgICAgfSxcblx0ICAgICAgICBqYXZhc2NyaXB0UXVpY2tTdGFydDoge1xuXHQgICAgICAgICAgICBwYXRoOiBcIi9kb2NzL2phdmFzY3JpcHRfcXVpY2tfc3RhcnRcIlxuXHQgICAgICAgIH1cblx0ICAgIH1cblx0fTtcblx0dmFyIGJ1aWxkTG9nU3VmZml4ID0gZnVuY3Rpb24gKGtleSkge1xuXHQgICAgdmFyIHVybFByZWZpeCA9IFwiU2VlOlwiO1xuXHQgICAgdmFyIHVybE9iaiA9IHVybFN0b3JlLnVybHNba2V5XTtcblx0ICAgIGlmICghdXJsT2JqKVxuXHQgICAgICAgIHJldHVybiBcIlwiO1xuXHQgICAgdmFyIHVybDtcblx0ICAgIGlmICh1cmxPYmouZnVsbFVybCkge1xuXHQgICAgICAgIHVybCA9IHVybE9iai5mdWxsVXJsO1xuXHQgICAgfVxuXHQgICAgZWxzZSBpZiAodXJsT2JqLnBhdGgpIHtcblx0ICAgICAgICB1cmwgPSB1cmxTdG9yZS5iYXNlVXJsICsgdXJsT2JqLnBhdGg7XG5cdCAgICB9XG5cdCAgICBpZiAoIXVybClcblx0ICAgICAgICByZXR1cm4gXCJcIjtcblx0ICAgIHJldHVybiB1cmxQcmVmaXggKyBcIiBcIiArIHVybDtcblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7IGJ1aWxkTG9nU3VmZml4OiBidWlsZExvZ1N1ZmZpeCB9O1xuXG5cbi8qKiovIH0pLFxuLyogMTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGxvZ2dlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0dmFyIGpzb25wID0gZnVuY3Rpb24gKGNvbnRleHQsIHNvY2tldElkLCBjYWxsYmFjaykge1xuXHQgICAgaWYgKHRoaXMuYXV0aE9wdGlvbnMuaGVhZGVycyAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgbG9nZ2VyXzFbXCJkZWZhdWx0XCJdLndhcm4oXCJXYXJuXCIsIFwiVG8gc2VuZCBoZWFkZXJzIHdpdGggdGhlIGF1dGggcmVxdWVzdCwgeW91IG11c3QgdXNlIEFKQVgsIHJhdGhlciB0aGFuIEpTT05QLlwiKTtcblx0ICAgIH1cblx0ICAgIHZhciBjYWxsYmFja05hbWUgPSBjb250ZXh0Lm5leHRBdXRoQ2FsbGJhY2tJRC50b1N0cmluZygpO1xuXHQgICAgY29udGV4dC5uZXh0QXV0aENhbGxiYWNrSUQrKztcblx0ICAgIHZhciBkb2N1bWVudCA9IGNvbnRleHQuZ2V0RG9jdW1lbnQoKTtcblx0ICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHQgICAgY29udGV4dC5hdXRoX2NhbGxiYWNrc1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICBjYWxsYmFjayhmYWxzZSwgZGF0YSk7XG5cdCAgICB9O1xuXHQgICAgdmFyIGNhbGxiYWNrX25hbWUgPSBcIlB1c2hlci5hdXRoX2NhbGxiYWNrc1snXCIgKyBjYWxsYmFja05hbWUgKyBcIiddXCI7XG5cdCAgICBzY3JpcHQuc3JjID0gdGhpcy5vcHRpb25zLmF1dGhFbmRwb2ludCArXG5cdCAgICAgICAgJz9jYWxsYmFjaz0nICtcblx0ICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoY2FsbGJhY2tfbmFtZSkgK1xuXHQgICAgICAgICcmJyArXG5cdCAgICAgICAgdGhpcy5jb21wb3NlUXVlcnkoc29ja2V0SWQpO1xuXHQgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0gfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHQgICAgaGVhZC5pbnNlcnRCZWZvcmUoc2NyaXB0LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHR9O1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGpzb25wO1xuXG5cbi8qKiovIH0pLFxuLyogMTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIFNjcmlwdFJlcXVlc3QgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gU2NyaXB0UmVxdWVzdChzcmMpIHtcblx0ICAgICAgICB0aGlzLnNyYyA9IHNyYztcblx0ICAgIH1cblx0ICAgIFNjcmlwdFJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAocmVjZWl2ZXIpIHtcblx0ICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cdCAgICAgICAgdmFyIGVycm9yU3RyaW5nID0gXCJFcnJvciBsb2FkaW5nIFwiICsgc2VsZi5zcmM7XG5cdCAgICAgICAgc2VsZi5zY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHQgICAgICAgIHNlbGYuc2NyaXB0LmlkID0gcmVjZWl2ZXIuaWQ7XG5cdCAgICAgICAgc2VsZi5zY3JpcHQuc3JjID0gc2VsZi5zcmM7XG5cdCAgICAgICAgc2VsZi5zY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG5cdCAgICAgICAgc2VsZi5zY3JpcHQuY2hhcnNldCA9IFwiVVRGLThcIjtcblx0ICAgICAgICBpZiAoc2VsZi5zY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHQgICAgICAgICAgICBzZWxmLnNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbGJhY2soZXJyb3JTdHJpbmcpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICBzZWxmLnNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICByZWNlaXZlci5jYWxsYmFjayhudWxsKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHNlbGYuc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChzZWxmLnNjcmlwdC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fFxuXHQgICAgICAgICAgICAgICAgICAgIHNlbGYuc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZWNlaXZlci5jYWxsYmFjayhudWxsKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHNlbGYuc2NyaXB0LmFzeW5jID09PSB1bmRlZmluZWQgJiYgZG9jdW1lbnQuYXR0YWNoRXZlbnQgJiZcblx0ICAgICAgICAgICAgL29wZXJhL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHQgICAgICAgICAgICBzZWxmLmVycm9yU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblx0ICAgICAgICAgICAgc2VsZi5lcnJvclNjcmlwdC5pZCA9IHJlY2VpdmVyLmlkICsgXCJfZXJyb3JcIjtcblx0ICAgICAgICAgICAgc2VsZi5lcnJvclNjcmlwdC50ZXh0ID0gcmVjZWl2ZXIubmFtZSArIFwiKCdcIiArIGVycm9yU3RyaW5nICsgXCInKTtcIjtcblx0ICAgICAgICAgICAgc2VsZi5zY3JpcHQuYXN5bmMgPSBzZWxmLmVycm9yU2NyaXB0LmFzeW5jID0gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICBzZWxmLnNjcmlwdC5hc3luYyA9IHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcblx0ICAgICAgICBoZWFkLmluc2VydEJlZm9yZShzZWxmLnNjcmlwdCwgaGVhZC5maXJzdENoaWxkKTtcblx0ICAgICAgICBpZiAoc2VsZi5lcnJvclNjcmlwdCkge1xuXHQgICAgICAgICAgICBoZWFkLmluc2VydEJlZm9yZShzZWxmLmVycm9yU2NyaXB0LCBzZWxmLnNjcmlwdC5uZXh0U2libGluZyk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIFNjcmlwdFJlcXVlc3QucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMuc2NyaXB0KSB7XG5cdCAgICAgICAgICAgIHRoaXMuc2NyaXB0Lm9ubG9hZCA9IHRoaXMuc2NyaXB0Lm9uZXJyb3IgPSBudWxsO1xuXHQgICAgICAgICAgICB0aGlzLnNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAodGhpcy5zY3JpcHQgJiYgdGhpcy5zY3JpcHQucGFyZW50Tm9kZSkge1xuXHQgICAgICAgICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHRoaXMuZXJyb3JTY3JpcHQgJiYgdGhpcy5lcnJvclNjcmlwdC5wYXJlbnROb2RlKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZXJyb3JTY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVycm9yU2NyaXB0KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuXHQgICAgICAgIHRoaXMuZXJyb3JTY3JpcHQgPSBudWxsO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBTY3JpcHRSZXF1ZXN0O1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNjcmlwdFJlcXVlc3Q7XG5cblxuLyoqKi8gfSksXG4vKiAxNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgcnVudGltZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIEpTT05QUmVxdWVzdCA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBKU09OUFJlcXVlc3QodXJsLCBkYXRhKSB7XG5cdCAgICAgICAgdGhpcy51cmwgPSB1cmw7XG5cdCAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcblx0ICAgIH1cblx0ICAgIEpTT05QUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChyZWNlaXZlcikge1xuXHQgICAgICAgIGlmICh0aGlzLnJlcXVlc3QpIHtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgcXVlcnkgPSBDb2xsZWN0aW9ucy5idWlsZFF1ZXJ5U3RyaW5nKHRoaXMuZGF0YSk7XG5cdCAgICAgICAgdmFyIHVybCA9IHRoaXMudXJsICsgXCIvXCIgKyByZWNlaXZlci5udW1iZXIgKyBcIj9cIiArIHF1ZXJ5O1xuXHQgICAgICAgIHRoaXMucmVxdWVzdCA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uY3JlYXRlU2NyaXB0UmVxdWVzdCh1cmwpO1xuXHQgICAgICAgIHRoaXMucmVxdWVzdC5zZW5kKHJlY2VpdmVyKTtcblx0ICAgIH07XG5cdCAgICBKU09OUFJlcXVlc3QucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMucmVxdWVzdCkge1xuXHQgICAgICAgICAgICB0aGlzLnJlcXVlc3QuY2xlYW51cCgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICByZXR1cm4gSlNPTlBSZXF1ZXN0O1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEpTT05QUmVxdWVzdDtcblxuXG4vKioqLyB9KSxcbi8qIDE4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgc2NyaXB0X3JlY2VpdmVyX2ZhY3RvcnlfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdHZhciBnZXRBZ2VudCA9IGZ1bmN0aW9uIChzZW5kZXIsIGVuY3J5cHRlZCkge1xuXHQgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuXHQgICAgICAgIHZhciBzY2hlbWUgPSBcImh0dHBcIiArIChlbmNyeXB0ZWQgPyBcInNcIiA6IFwiXCIpICsgXCI6Ly9cIjtcblx0ICAgICAgICB2YXIgdXJsID0gc2NoZW1lICsgKHNlbmRlci5ob3N0IHx8IHNlbmRlci5vcHRpb25zLmhvc3QpICsgc2VuZGVyLm9wdGlvbnMucGF0aDtcblx0ICAgICAgICB2YXIgcmVxdWVzdCA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uY3JlYXRlSlNPTlBSZXF1ZXN0KHVybCwgZGF0YSk7XG5cdCAgICAgICAgdmFyIHJlY2VpdmVyID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5TY3JpcHRSZWNlaXZlcnMuY3JlYXRlKGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0KSB7XG5cdCAgICAgICAgICAgIHNjcmlwdF9yZWNlaXZlcl9mYWN0b3J5XzEuU2NyaXB0UmVjZWl2ZXJzLnJlbW92ZShyZWNlaXZlcik7XG5cdCAgICAgICAgICAgIHJlcXVlc3QuY2xlYW51cCgpO1xuXHQgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5ob3N0KSB7XG5cdCAgICAgICAgICAgICAgICBzZW5kZXIuaG9zdCA9IHJlc3VsdC5ob3N0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuXHQgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgICByZXF1ZXN0LnNlbmQocmVjZWl2ZXIpO1xuXHQgICAgfTtcblx0fTtcblx0dmFyIGpzb25wID0ge1xuXHQgICAgbmFtZTogJ2pzb25wJyxcblx0ICAgIGdldEFnZW50OiBnZXRBZ2VudFxuXHR9O1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGpzb25wO1xuXG5cbi8qKiovIH0pLFxuLyogMTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIHRyYW5zcG9ydHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuXHR2YXIgdHJhbnNwb3J0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblx0dmFyIFVSTFNjaGVtZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcblx0dmFyIHJ1bnRpbWVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBkZXBlbmRlbmNpZXNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBDb2xsZWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBTb2NrSlNUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0XzFbXCJkZWZhdWx0XCJdKHtcblx0ICAgIGZpbGU6IFwic29ja2pzXCIsXG5cdCAgICB1cmxzOiBVUkxTY2hlbWVzLnNvY2tqcyxcblx0ICAgIGhhbmRsZXNBY3Rpdml0eUNoZWNrczogdHJ1ZSxcblx0ICAgIHN1cHBvcnRzUGluZzogZmFsc2UsXG5cdCAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfSxcblx0ICAgIGlzSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gd2luZG93LlNvY2tKUyAhPT0gdW5kZWZpbmVkO1xuXHQgICAgfSxcblx0ICAgIGdldFNvY2tldDogZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuXHQgICAgICAgIHJldHVybiBuZXcgd2luZG93LlNvY2tKUyh1cmwsIG51bGwsIHtcblx0ICAgICAgICAgICAganNfcGF0aDogZGVwZW5kZW5jaWVzXzEuRGVwZW5kZW5jaWVzLmdldFBhdGgoXCJzb2NranNcIiwge1xuXHQgICAgICAgICAgICAgICAgZW5jcnlwdGVkOiBvcHRpb25zLmVuY3J5cHRlZFxuXHQgICAgICAgICAgICB9KSxcblx0ICAgICAgICAgICAgaWdub3JlX251bGxfb3JpZ2luOiBvcHRpb25zLmlnbm9yZU51bGxPcmlnaW5cblx0ICAgICAgICB9KTtcblx0ICAgIH0sXG5cdCAgICBiZWZvcmVPcGVuOiBmdW5jdGlvbiAoc29ja2V0LCBwYXRoKSB7XG5cdCAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuXHQgICAgICAgICAgICBwYXRoOiBwYXRoXG5cdCAgICAgICAgfSkpO1xuXHQgICAgfVxuXHR9KTtcblx0dmFyIHhkckNvbmZpZ3VyYXRpb24gPSB7XG5cdCAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKGVudmlyb25tZW50KSB7XG5cdCAgICAgICAgdmFyIHllcyA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uaXNYRFJTdXBwb3J0ZWQoZW52aXJvbm1lbnQuZW5jcnlwdGVkKTtcblx0ICAgICAgICByZXR1cm4geWVzO1xuXHQgICAgfVxuXHR9O1xuXHR2YXIgWERSU3RyZWFtaW5nVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydF8xW1wiZGVmYXVsdFwiXShDb2xsZWN0aW9ucy5leHRlbmQoe30sIHRyYW5zcG9ydHNfMS5zdHJlYW1pbmdDb25maWd1cmF0aW9uLCB4ZHJDb25maWd1cmF0aW9uKSk7XG5cdHZhciBYRFJQb2xsaW5nVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydF8xW1wiZGVmYXVsdFwiXShDb2xsZWN0aW9ucy5leHRlbmQoe30sIHRyYW5zcG9ydHNfMS5wb2xsaW5nQ29uZmlndXJhdGlvbiwgeGRyQ29uZmlndXJhdGlvbikpO1xuXHR0cmFuc3BvcnRzXzFbXCJkZWZhdWx0XCJdLnhkcl9zdHJlYW1pbmcgPSBYRFJTdHJlYW1pbmdUcmFuc3BvcnQ7XG5cdHRyYW5zcG9ydHNfMVtcImRlZmF1bHRcIl0ueGRyX3BvbGxpbmcgPSBYRFJQb2xsaW5nVHJhbnNwb3J0O1xuXHR0cmFuc3BvcnRzXzFbXCJkZWZhdWx0XCJdLnNvY2tqcyA9IFNvY2tKU1RyYW5zcG9ydDtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB0cmFuc3BvcnRzXzFbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIFVSTFNjaGVtZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcblx0dmFyIHRyYW5zcG9ydF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XG5cdHZhciBDb2xsZWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgV1NUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0XzFbXCJkZWZhdWx0XCJdKHtcblx0ICAgIHVybHM6IFVSTFNjaGVtZXMud3MsXG5cdCAgICBoYW5kbGVzQWN0aXZpdHlDaGVja3M6IGZhbHNlLFxuXHQgICAgc3VwcG9ydHNQaW5nOiBmYWxzZSxcblx0ICAgIGlzSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gQm9vbGVhbihydW50aW1lXzFbXCJkZWZhdWx0XCJdLmdldFdlYlNvY2tldEFQSSgpKTtcblx0ICAgIH0sXG5cdCAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBCb29sZWFuKHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uZ2V0V2ViU29ja2V0QVBJKCkpO1xuXHQgICAgfSxcblx0ICAgIGdldFNvY2tldDogZnVuY3Rpb24gKHVybCkge1xuXHQgICAgICAgIHJldHVybiBydW50aW1lXzFbXCJkZWZhdWx0XCJdLmNyZWF0ZVdlYlNvY2tldCh1cmwpO1xuXHQgICAgfVxuXHR9KTtcblx0dmFyIGh0dHBDb25maWd1cmF0aW9uID0ge1xuXHQgICAgdXJsczogVVJMU2NoZW1lcy5odHRwLFxuXHQgICAgaGFuZGxlc0FjdGl2aXR5Q2hlY2tzOiBmYWxzZSxcblx0ICAgIHN1cHBvcnRzUGluZzogdHJ1ZSxcblx0ICAgIGlzSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5zdHJlYW1pbmdDb25maWd1cmF0aW9uID0gQ29sbGVjdGlvbnMuZXh0ZW5kKHsgZ2V0U29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG5cdCAgICAgICAgcmV0dXJuIHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uSFRUUEZhY3RvcnkuY3JlYXRlU3RyZWFtaW5nU29ja2V0KHVybCk7XG5cdCAgICB9XG5cdH0sIGh0dHBDb25maWd1cmF0aW9uKTtcblx0ZXhwb3J0cy5wb2xsaW5nQ29uZmlndXJhdGlvbiA9IENvbGxlY3Rpb25zLmV4dGVuZCh7IGdldFNvY2tldDogZnVuY3Rpb24gKHVybCkge1xuXHQgICAgICAgIHJldHVybiBydW50aW1lXzFbXCJkZWZhdWx0XCJdLkhUVFBGYWN0b3J5LmNyZWF0ZVBvbGxpbmdTb2NrZXQodXJsKTtcblx0ICAgIH1cblx0fSwgaHR0cENvbmZpZ3VyYXRpb24pO1xuXHR2YXIgeGhyQ29uZmlndXJhdGlvbiA9IHtcblx0ICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uaXNYSFJTdXBwb3J0ZWQoKTtcblx0ICAgIH1cblx0fTtcblx0dmFyIFhIUlN0cmVhbWluZ1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfMVtcImRlZmF1bHRcIl0oQ29sbGVjdGlvbnMuZXh0ZW5kKHt9LCBleHBvcnRzLnN0cmVhbWluZ0NvbmZpZ3VyYXRpb24sIHhockNvbmZpZ3VyYXRpb24pKTtcblx0dmFyIFhIUlBvbGxpbmdUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0XzFbXCJkZWZhdWx0XCJdKENvbGxlY3Rpb25zLmV4dGVuZCh7fSwgZXhwb3J0cy5wb2xsaW5nQ29uZmlndXJhdGlvbiwgeGhyQ29uZmlndXJhdGlvbikpO1xuXHR2YXIgVHJhbnNwb3J0cyA9IHtcblx0ICAgIHdzOiBXU1RyYW5zcG9ydCxcblx0ICAgIHhocl9zdHJlYW1pbmc6IFhIUlN0cmVhbWluZ1RyYW5zcG9ydCxcblx0ICAgIHhocl9wb2xsaW5nOiBYSFJQb2xsaW5nVHJhbnNwb3J0XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVHJhbnNwb3J0cztcblxuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBkZWZhdWx0c18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0ZnVuY3Rpb24gZ2V0R2VuZXJpY1VSTChiYXNlU2NoZW1lLCBwYXJhbXMsIHBhdGgpIHtcblx0ICAgIHZhciBzY2hlbWUgPSBiYXNlU2NoZW1lICsgKHBhcmFtcy5lbmNyeXB0ZWQgPyBcInNcIiA6IFwiXCIpO1xuXHQgICAgdmFyIGhvc3QgPSBwYXJhbXMuZW5jcnlwdGVkID8gcGFyYW1zLmhvc3RFbmNyeXB0ZWQgOiBwYXJhbXMuaG9zdFVuZW5jcnlwdGVkO1xuXHQgICAgcmV0dXJuIHNjaGVtZSArIFwiOi8vXCIgKyBob3N0ICsgcGF0aDtcblx0fVxuXHRmdW5jdGlvbiBnZXRHZW5lcmljUGF0aChrZXksIHF1ZXJ5U3RyaW5nKSB7XG5cdCAgICB2YXIgcGF0aCA9IFwiL2FwcC9cIiArIGtleTtcblx0ICAgIHZhciBxdWVyeSA9IFwiP3Byb3RvY29sPVwiICsgZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uUFJPVE9DT0wgK1xuXHQgICAgICAgIFwiJmNsaWVudD1qc1wiICtcblx0ICAgICAgICBcIiZ2ZXJzaW9uPVwiICsgZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uVkVSU0lPTiArXG5cdCAgICAgICAgKHF1ZXJ5U3RyaW5nID8gKFwiJlwiICsgcXVlcnlTdHJpbmcpIDogXCJcIik7XG5cdCAgICByZXR1cm4gcGF0aCArIHF1ZXJ5O1xuXHR9XG5cdGV4cG9ydHMud3MgPSB7XG5cdCAgICBnZXRJbml0aWFsOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcblx0ICAgICAgICByZXR1cm4gZ2V0R2VuZXJpY1VSTChcIndzXCIsIHBhcmFtcywgZ2V0R2VuZXJpY1BhdGgoa2V5LCBcImZsYXNoPWZhbHNlXCIpKTtcblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5odHRwID0ge1xuXHQgICAgZ2V0SW5pdGlhbDogZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG5cdCAgICAgICAgdmFyIHBhdGggPSAocGFyYW1zLmh0dHBQYXRoIHx8IFwiL3B1c2hlclwiKSArIGdldEdlbmVyaWNQYXRoKGtleSk7XG5cdCAgICAgICAgcmV0dXJuIGdldEdlbmVyaWNVUkwoXCJodHRwXCIsIHBhcmFtcywgcGF0aCk7XG5cdCAgICB9XG5cdH07XG5cdGV4cG9ydHMuc29ja2pzID0ge1xuXHQgICAgZ2V0SW5pdGlhbDogZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG5cdCAgICAgICAgcmV0dXJuIGdldEdlbmVyaWNVUkwoXCJodHRwXCIsIHBhcmFtcywgcGFyYW1zLmh0dHBQYXRoIHx8IFwiL3B1c2hlclwiKTtcblx0ICAgIH0sXG5cdCAgICBnZXRQYXRoOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcblx0ICAgICAgICByZXR1cm4gZ2V0R2VuZXJpY1BhdGgoa2V5KTtcblx0ICAgIH1cblx0fTtcblxuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciB0cmFuc3BvcnRfY29ubmVjdGlvbl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyk7XG5cdHZhciBUcmFuc3BvcnQgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gVHJhbnNwb3J0KGhvb2tzKSB7XG5cdCAgICAgICAgdGhpcy5ob29rcyA9IGhvb2tzO1xuXHQgICAgfVxuXHQgICAgVHJhbnNwb3J0LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uIChlbnZpcm9ubWVudCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmhvb2tzLmlzU3VwcG9ydGVkKGVudmlyb25tZW50KTtcblx0ICAgIH07XG5cdCAgICBUcmFuc3BvcnQucHJvdG90eXBlLmNyZWF0ZUNvbm5lY3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucykge1xuXHQgICAgICAgIHJldHVybiBuZXcgdHJhbnNwb3J0X2Nvbm5lY3Rpb25fMVtcImRlZmF1bHRcIl0odGhpcy5ob29rcywgbmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucyk7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIFRyYW5zcG9ydDtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUcmFuc3BvcnQ7XG5cblxuLyoqKi8gfSksXG4vKiAyMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG5cdCAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcblx0ICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuXHQgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuXHR9O1xuXHR2YXIgdXRpbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdHZhciBDb2xsZWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBkaXNwYXRjaGVyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcblx0dmFyIGxvZ2dlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0dmFyIHJ1bnRpbWVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBUcmFuc3BvcnRDb25uZWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcblx0ICAgIF9fZXh0ZW5kcyhUcmFuc3BvcnRDb25uZWN0aW9uLCBfc3VwZXIpO1xuXHQgICAgZnVuY3Rpb24gVHJhbnNwb3J0Q29ubmVjdGlvbihob29rcywgbmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucykge1xuXHQgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuXHQgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0udHJhbnNwb3J0Q29ubmVjdGlvbkluaXRpYWxpemVyO1xuXHQgICAgICAgIHRoaXMuaG9va3MgPSBob29rcztcblx0ICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXHQgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0ICAgICAgICB0aGlzLmtleSA9IGtleTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHQgICAgICAgIHRoaXMuc3RhdGUgPSBcIm5ld1wiO1xuXHQgICAgICAgIHRoaXMudGltZWxpbmUgPSBvcHRpb25zLnRpbWVsaW5lO1xuXHQgICAgICAgIHRoaXMuYWN0aXZpdHlUaW1lb3V0ID0gb3B0aW9ucy5hY3Rpdml0eVRpbWVvdXQ7XG5cdCAgICAgICAgdGhpcy5pZCA9IHRoaXMudGltZWxpbmUuZ2VuZXJhdGVVbmlxdWVJRCgpO1xuXHQgICAgfVxuXHQgICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuaG9va3MuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzKTtcblx0ICAgIH07XG5cdCAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5zdXBwb3J0c1BpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5ob29rcy5zdXBwb3J0c1BpbmcpO1xuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICBpZiAodGhpcy5zb2NrZXQgfHwgdGhpcy5zdGF0ZSAhPT0gXCJpbml0aWFsaXplZFwiKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHVybCA9IHRoaXMuaG9va3MudXJscy5nZXRJbml0aWFsKHRoaXMua2V5LCB0aGlzLm9wdGlvbnMpO1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gdGhpcy5ob29rcy5nZXRTb2NrZXQodXJsLCB0aGlzLm9wdGlvbnMpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICB1dGlsXzFbXCJkZWZhdWx0XCJdLmRlZmVyKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLm9uRXJyb3IoZSk7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZShcImNsb3NlZFwiKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG5cdCAgICAgICAgbG9nZ2VyXzFbXCJkZWZhdWx0XCJdLmRlYnVnKFwiQ29ubmVjdGluZ1wiLCB7IHRyYW5zcG9ydDogdGhpcy5uYW1lLCB1cmw6IHVybCB9KTtcblx0ICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFwiY29ubmVjdGluZ1wiKTtcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH07XG5cdCAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwib3BlblwiKSB7XG5cdCAgICAgICAgICAgIHV0aWxfMVtcImRlZmF1bHRcIl0uZGVmZXIoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKF90aGlzLnNvY2tldCkge1xuXHQgICAgICAgICAgICAgICAgICAgIF90aGlzLnNvY2tldC5zZW5kKGRhdGEpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwib3BlblwiICYmIHRoaXMuc3VwcG9ydHNQaW5nKCkpIHtcblx0ICAgICAgICAgICAgdGhpcy5zb2NrZXQucGluZygpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMuaG9va3MuYmVmb3JlT3Blbikge1xuXHQgICAgICAgICAgICB0aGlzLmhvb2tzLmJlZm9yZU9wZW4odGhpcy5zb2NrZXQsIHRoaXMuaG9va3MudXJscy5nZXRQYXRoKHRoaXMua2V5LCB0aGlzLm9wdGlvbnMpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcIm9wZW5cIik7XG5cdCAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gdW5kZWZpbmVkO1xuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0ICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCB7IHR5cGU6ICdXZWJTb2NrZXRFcnJvcicsIGVycm9yOiBlcnJvciB9KTtcblx0ICAgICAgICB0aGlzLnRpbWVsaW5lLmVycm9yKHRoaXMuYnVpbGRUaW1lbGluZU1lc3NhZ2UoeyBlcnJvcjogZXJyb3IudG9TdHJpbmcoKSB9KSk7XG5cdCAgICB9O1xuXHQgICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG5cdCAgICAgICAgaWYgKGNsb3NlRXZlbnQpIHtcblx0ICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcImNsb3NlZFwiLCB7XG5cdCAgICAgICAgICAgICAgICBjb2RlOiBjbG9zZUV2ZW50LmNvZGUsXG5cdCAgICAgICAgICAgICAgICByZWFzb246IGNsb3NlRXZlbnQucmVhc29uLFxuXHQgICAgICAgICAgICAgICAgd2FzQ2xlYW46IGNsb3NlRXZlbnQud2FzQ2xlYW5cblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFwiY2xvc2VkXCIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLnVuYmluZExpc3RlbmVycygpO1xuXHQgICAgICAgIHRoaXMuc29ja2V0ID0gdW5kZWZpbmVkO1xuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG5cdCAgICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcblx0ICAgIH07XG5cdCAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5vbkFjdGl2aXR5ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRoaXMuZW1pdChcImFjdGl2aXR5XCIpO1xuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIF90aGlzLm9uT3BlbigpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHQgICAgICAgICAgICBfdGhpcy5vbkVycm9yKGVycm9yKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuXHQgICAgICAgICAgICBfdGhpcy5vbkNsb3NlKGNsb3NlRXZlbnQpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0ICAgICAgICAgICAgX3RoaXMub25NZXNzYWdlKG1lc3NhZ2UpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQaW5nKCkpIHtcblx0ICAgICAgICAgICAgdGhpcy5zb2NrZXQub25hY3Rpdml0eSA9IGZ1bmN0aW9uICgpIHsgX3RoaXMub25BY3Rpdml0eSgpOyB9O1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS51bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG5cdCAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1BpbmcoKSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQub25hY3Rpdml0eSA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zKSB7XG5cdCAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXHQgICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh0aGlzLmJ1aWxkVGltZWxpbmVNZXNzYWdlKHtcblx0ICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuXHQgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuXHQgICAgICAgIH0pKTtcblx0ICAgICAgICB0aGlzLmVtaXQoc3RhdGUsIHBhcmFtcyk7XG5cdCAgICB9O1xuXHQgICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuYnVpbGRUaW1lbGluZU1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHQgICAgICAgIHJldHVybiBDb2xsZWN0aW9ucy5leHRlbmQoeyBjaWQ6IHRoaXMuaWQgfSwgbWVzc2FnZSk7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIFRyYW5zcG9ydENvbm5lY3Rpb247XG5cdH0oZGlzcGF0Y2hlcl8xW1wiZGVmYXVsdFwiXSkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFRyYW5zcG9ydENvbm5lY3Rpb247XG5cblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgY2FsbGJhY2tfcmVnaXN0cnlfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xuXHR2YXIgRGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBEaXNwYXRjaGVyKGZhaWxUaHJvdWdoKSB7XG5cdCAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgY2FsbGJhY2tfcmVnaXN0cnlfMVtcImRlZmF1bHRcIl0oKTtcblx0ICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcblx0ICAgICAgICB0aGlzLmZhaWxUaHJvdWdoID0gZmFpbFRocm91Z2g7XG5cdCAgICB9XG5cdCAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICB0aGlzLmNhbGxiYWNrcy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHQgICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuYmluZF9nbG9iYWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0ICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHQgICAgRGlzcGF0Y2hlci5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICB0aGlzLmNhbGxiYWNrcy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHQgICAgRGlzcGF0Y2hlci5wcm90b3R5cGUudW5iaW5kX2dsb2JhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgIGlmICghY2FsbGJhY2spIHtcblx0ICAgICAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBDb2xsZWN0aW9ucy5maWx0ZXIodGhpcy5nbG9iYWxfY2FsbGJhY2tzIHx8IFtdLCBmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gY2FsbGJhY2s7IH0pO1xuXHQgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfTtcblx0ICAgIERpc3BhdGNoZXIucHJvdG90eXBlLnVuYmluZF9hbGwgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy51bmJpbmQoKTtcblx0ICAgICAgICB0aGlzLnVuYmluZF9nbG9iYWwoKTtcblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH07XG5cdCAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuXHQgICAgICAgIHZhciBpO1xuXHQgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmdsb2JhbF9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKGV2ZW50TmFtZSwgZGF0YSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcy5nZXQoZXZlbnROYW1lKTtcblx0ICAgICAgICBpZiAoY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5mbi5jYWxsKGNhbGxiYWNrc1tpXS5jb250ZXh0IHx8ICh3aW5kb3cpLCBkYXRhKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIGlmICh0aGlzLmZhaWxUaHJvdWdoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZmFpbFRocm91Z2goZXZlbnROYW1lLCBkYXRhKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIERpc3BhdGNoZXI7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRGlzcGF0Y2hlcjtcblxuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBDb2xsZWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBDYWxsYmFja1JlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIENhbGxiYWNrUmVnaXN0cnkoKSB7XG5cdCAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG5cdCAgICB9XG5cdCAgICBDYWxsYmFja1JlZ2lzdHJ5LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbcHJlZml4KG5hbWUpXTtcblx0ICAgIH07XG5cdCAgICBDYWxsYmFja1JlZ2lzdHJ5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICB2YXIgcHJlZml4ZWRFdmVudE5hbWUgPSBwcmVmaXgobmFtZSk7XG5cdCAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSA9IHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gfHwgW107XG5cdCAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXS5wdXNoKHtcblx0ICAgICAgICAgICAgZm46IGNhbGxiYWNrLFxuXHQgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHQgICAgQ2FsbGJhY2tSZWdpc3RyeS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdCAgICAgICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xuXHQgICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgbmFtZXMgPSBuYW1lID8gW3ByZWZpeChuYW1lKV0gOiBDb2xsZWN0aW9ucy5rZXlzKHRoaXMuX2NhbGxiYWNrcyk7XG5cdCAgICAgICAgaWYgKGNhbGxiYWNrIHx8IGNvbnRleHQpIHtcblx0ICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBDYWxsYmFja1JlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmVDYWxsYmFjayA9IGZ1bmN0aW9uIChuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0ICAgICAgICBDb2xsZWN0aW9ucy5hcHBseShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcblx0ICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzW25hbWVdID0gQ29sbGVjdGlvbnMuZmlsdGVyKHRoaXMuX2NhbGxiYWNrc1tuYW1lXSB8fCBbXSwgZnVuY3Rpb24gKGJpbmRpbmcpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiAoY2FsbGJhY2sgJiYgY2FsbGJhY2sgIT09IGJpbmRpbmcuZm4pIHx8XG5cdCAgICAgICAgICAgICAgICAgICAgKGNvbnRleHQgJiYgY29udGV4dCAhPT0gYmluZGluZy5jb250ZXh0KTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLl9jYWxsYmFja3NbbmFtZV0ubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSwgdGhpcyk7XG5cdCAgICB9O1xuXHQgICAgQ2FsbGJhY2tSZWdpc3RyeS5wcm90b3R5cGUucmVtb3ZlQWxsQ2FsbGJhY2tzID0gZnVuY3Rpb24gKG5hbWVzKSB7XG5cdCAgICAgICAgQ29sbGVjdGlvbnMuYXBwbHkobmFtZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG5cdCAgICAgICAgfSwgdGhpcyk7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIENhbGxiYWNrUmVnaXN0cnk7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ2FsbGJhY2tSZWdpc3RyeTtcblx0ZnVuY3Rpb24gcHJlZml4KG5hbWUpIHtcblx0ICAgIHJldHVybiBcIl9cIiArIG5hbWU7XG5cdH1cblxuXG4vKioqLyB9KSxcbi8qIDI2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcblx0ICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuXHQgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG5cdCAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG5cdH07XG5cdHZhciBkaXNwYXRjaGVyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcblx0dmFyIE5ldEluZm8gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuXHQgICAgX19leHRlbmRzKE5ldEluZm8sIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBOZXRJbmZvKCkge1xuXHQgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuXHQgICAgICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ29ubGluZScpO1xuXHQgICAgICAgICAgICB9LCBmYWxzZSk7XG5cdCAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ29mZmxpbmUnKTtcblx0ICAgICAgICAgICAgfSwgZmFsc2UpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIE5ldEluZm8ucHJvdG90eXBlLmlzT25saW5lID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm9uTGluZSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICByZXR1cm4gTmV0SW5mbztcblx0fShkaXNwYXRjaGVyXzFbXCJkZWZhdWx0XCJdKSk7XG5cdGV4cG9ydHMuTmV0SW5mbyA9IE5ldEluZm87XG5cdGV4cG9ydHMuTmV0d29yayA9IG5ldyBOZXRJbmZvKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgZ2V0RGVmYXVsdFN0cmF0ZWd5ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuXHQgICAgdmFyIHdzU3RyYXRlZ3k7XG5cdCAgICBpZiAoY29uZmlnLmVuY3J5cHRlZCkge1xuXHQgICAgICAgIHdzU3RyYXRlZ3kgPSBbXG5cdCAgICAgICAgICAgIFwiOmJlc3RfY29ubmVjdGVkX2V2ZXJcIixcblx0ICAgICAgICAgICAgXCI6d3NfbG9vcFwiLFxuXHQgICAgICAgICAgICBbXCI6ZGVsYXllZFwiLCAyMDAwLCBbXCI6aHR0cF9mYWxsYmFja19sb29wXCJdXVxuXHQgICAgICAgIF07XG5cdCAgICB9XG5cdCAgICBlbHNlIHtcblx0ICAgICAgICB3c1N0cmF0ZWd5ID0gW1xuXHQgICAgICAgICAgICBcIjpiZXN0X2Nvbm5lY3RlZF9ldmVyXCIsXG5cdCAgICAgICAgICAgIFwiOndzX2xvb3BcIixcblx0ICAgICAgICAgICAgW1wiOmRlbGF5ZWRcIiwgMjAwMCwgW1wiOndzc19sb29wXCJdXSxcblx0ICAgICAgICAgICAgW1wiOmRlbGF5ZWRcIiwgNTAwMCwgW1wiOmh0dHBfZmFsbGJhY2tfbG9vcFwiXV1cblx0ICAgICAgICBdO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIFtcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwid3Nfb3B0aW9uc1wiLCB7XG5cdCAgICAgICAgICAgICAgICBob3N0VW5lbmNyeXB0ZWQ6IGNvbmZpZy53c0hvc3QgKyBcIjpcIiArIGNvbmZpZy53c1BvcnQsXG5cdCAgICAgICAgICAgICAgICBob3N0RW5jcnlwdGVkOiBjb25maWcud3NIb3N0ICsgXCI6XCIgKyBjb25maWcud3NzUG9ydFxuXHQgICAgICAgICAgICB9XSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwid3NzX29wdGlvbnNcIiwgW1wiOmV4dGVuZFwiLCBcIjp3c19vcHRpb25zXCIsIHtcblx0ICAgICAgICAgICAgICAgICAgICBlbmNyeXB0ZWQ6IHRydWVcblx0ICAgICAgICAgICAgICAgIH1dXSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwic29ja2pzX29wdGlvbnNcIiwge1xuXHQgICAgICAgICAgICAgICAgaG9zdFVuZW5jcnlwdGVkOiBjb25maWcuaHR0cEhvc3QgKyBcIjpcIiArIGNvbmZpZy5odHRwUG9ydCxcblx0ICAgICAgICAgICAgICAgIGhvc3RFbmNyeXB0ZWQ6IGNvbmZpZy5odHRwSG9zdCArIFwiOlwiICsgY29uZmlnLmh0dHBzUG9ydCxcblx0ICAgICAgICAgICAgICAgIGh0dHBQYXRoOiBjb25maWcuaHR0cFBhdGhcblx0ICAgICAgICAgICAgfV0sXG5cdCAgICAgICAgW1wiOmRlZlwiLCBcInRpbWVvdXRzXCIsIHtcblx0ICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG5cdCAgICAgICAgICAgICAgICB0aW1lb3V0OiAxNTAwMCxcblx0ICAgICAgICAgICAgICAgIHRpbWVvdXRMaW1pdDogNjAwMDBcblx0ICAgICAgICAgICAgfV0sXG5cdCAgICAgICAgW1wiOmRlZlwiLCBcIndzX21hbmFnZXJcIiwgW1wiOnRyYW5zcG9ydF9tYW5hZ2VyXCIsIHtcblx0ICAgICAgICAgICAgICAgICAgICBsaXZlczogMixcblx0ICAgICAgICAgICAgICAgICAgICBtaW5QaW5nRGVsYXk6IDEwMDAwLFxuXHQgICAgICAgICAgICAgICAgICAgIG1heFBpbmdEZWxheTogY29uZmlnLmFjdGl2aXR5X3RpbWVvdXRcblx0ICAgICAgICAgICAgICAgIH1dXSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwic3RyZWFtaW5nX21hbmFnZXJcIiwgW1wiOnRyYW5zcG9ydF9tYW5hZ2VyXCIsIHtcblx0ICAgICAgICAgICAgICAgICAgICBsaXZlczogMixcblx0ICAgICAgICAgICAgICAgICAgICBtaW5QaW5nRGVsYXk6IDEwMDAwLFxuXHQgICAgICAgICAgICAgICAgICAgIG1heFBpbmdEZWxheTogY29uZmlnLmFjdGl2aXR5X3RpbWVvdXRcblx0ICAgICAgICAgICAgICAgIH1dXSxcblx0ICAgICAgICBbXCI6ZGVmX3RyYW5zcG9ydFwiLCBcIndzXCIsIFwid3NcIiwgMywgXCI6d3Nfb3B0aW9uc1wiLCBcIjp3c19tYW5hZ2VyXCJdLFxuXHQgICAgICAgIFtcIjpkZWZfdHJhbnNwb3J0XCIsIFwid3NzXCIsIFwid3NcIiwgMywgXCI6d3NzX29wdGlvbnNcIiwgXCI6d3NfbWFuYWdlclwiXSxcblx0ICAgICAgICBbXCI6ZGVmX3RyYW5zcG9ydFwiLCBcInNvY2tqc1wiLCBcInNvY2tqc1wiLCAxLCBcIjpzb2NranNfb3B0aW9uc1wiXSxcblx0ICAgICAgICBbXCI6ZGVmX3RyYW5zcG9ydFwiLCBcInhocl9zdHJlYW1pbmdcIiwgXCJ4aHJfc3RyZWFtaW5nXCIsIDEsIFwiOnNvY2tqc19vcHRpb25zXCIsIFwiOnN0cmVhbWluZ19tYW5hZ2VyXCJdLFxuXHQgICAgICAgIFtcIjpkZWZfdHJhbnNwb3J0XCIsIFwieGRyX3N0cmVhbWluZ1wiLCBcInhkcl9zdHJlYW1pbmdcIiwgMSwgXCI6c29ja2pzX29wdGlvbnNcIiwgXCI6c3RyZWFtaW5nX21hbmFnZXJcIl0sXG5cdCAgICAgICAgW1wiOmRlZl90cmFuc3BvcnRcIiwgXCJ4aHJfcG9sbGluZ1wiLCBcInhocl9wb2xsaW5nXCIsIDEsIFwiOnNvY2tqc19vcHRpb25zXCJdLFxuXHQgICAgICAgIFtcIjpkZWZfdHJhbnNwb3J0XCIsIFwieGRyX3BvbGxpbmdcIiwgXCJ4ZHJfcG9sbGluZ1wiLCAxLCBcIjpzb2NranNfb3B0aW9uc1wiXSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwid3NfbG9vcFwiLCBbXCI6c2VxdWVudGlhbFwiLCBcIjp0aW1lb3V0c1wiLCBcIjp3c1wiXV0sXG5cdCAgICAgICAgW1wiOmRlZlwiLCBcIndzc19sb29wXCIsIFtcIjpzZXF1ZW50aWFsXCIsIFwiOnRpbWVvdXRzXCIsIFwiOndzc1wiXV0sXG5cdCAgICAgICAgW1wiOmRlZlwiLCBcInNvY2tqc19sb29wXCIsIFtcIjpzZXF1ZW50aWFsXCIsIFwiOnRpbWVvdXRzXCIsIFwiOnNvY2tqc1wiXV0sXG5cdCAgICAgICAgW1wiOmRlZlwiLCBcInN0cmVhbWluZ19sb29wXCIsIFtcIjpzZXF1ZW50aWFsXCIsIFwiOnRpbWVvdXRzXCIsXG5cdCAgICAgICAgICAgICAgICBbXCI6aWZcIiwgW1wiOmlzX3N1cHBvcnRlZFwiLCBcIjp4aHJfc3RyZWFtaW5nXCJdLFxuXHQgICAgICAgICAgICAgICAgICAgIFwiOnhocl9zdHJlYW1pbmdcIixcblx0ICAgICAgICAgICAgICAgICAgICBcIjp4ZHJfc3RyZWFtaW5nXCJcblx0ICAgICAgICAgICAgICAgIF1cblx0ICAgICAgICAgICAgXV0sXG5cdCAgICAgICAgW1wiOmRlZlwiLCBcInBvbGxpbmdfbG9vcFwiLCBbXCI6c2VxdWVudGlhbFwiLCBcIjp0aW1lb3V0c1wiLFxuXHQgICAgICAgICAgICAgICAgW1wiOmlmXCIsIFtcIjppc19zdXBwb3J0ZWRcIiwgXCI6eGhyX3BvbGxpbmdcIl0sXG5cdCAgICAgICAgICAgICAgICAgICAgXCI6eGhyX3BvbGxpbmdcIixcblx0ICAgICAgICAgICAgICAgICAgICBcIjp4ZHJfcG9sbGluZ1wiXG5cdCAgICAgICAgICAgICAgICBdXG5cdCAgICAgICAgICAgIF1dLFxuXHQgICAgICAgIFtcIjpkZWZcIiwgXCJodHRwX2xvb3BcIiwgW1wiOmlmXCIsIFtcIjppc19zdXBwb3J0ZWRcIiwgXCI6c3RyZWFtaW5nX2xvb3BcIl0sIFtcblx0ICAgICAgICAgICAgICAgICAgICBcIjpiZXN0X2Nvbm5lY3RlZF9ldmVyXCIsXG5cdCAgICAgICAgICAgICAgICAgICAgXCI6c3RyZWFtaW5nX2xvb3BcIixcblx0ICAgICAgICAgICAgICAgICAgICBbXCI6ZGVsYXllZFwiLCA0MDAwLCBbXCI6cG9sbGluZ19sb29wXCJdXVxuXHQgICAgICAgICAgICAgICAgXSwgW1xuXHQgICAgICAgICAgICAgICAgICAgIFwiOnBvbGxpbmdfbG9vcFwiXG5cdCAgICAgICAgICAgICAgICBdXV0sXG5cdCAgICAgICAgW1wiOmRlZlwiLCBcImh0dHBfZmFsbGJhY2tfbG9vcFwiLFxuXHQgICAgICAgICAgICBbXCI6aWZcIiwgW1wiOmlzX3N1cHBvcnRlZFwiLCBcIjpodHRwX2xvb3BcIl0sIFtcblx0ICAgICAgICAgICAgICAgICAgICBcIjpodHRwX2xvb3BcIlxuXHQgICAgICAgICAgICAgICAgXSwgW1xuXHQgICAgICAgICAgICAgICAgICAgIFwiOnNvY2tqc19sb29wXCJcblx0ICAgICAgICAgICAgICAgIF1dXG5cdCAgICAgICAgXSxcblx0ICAgICAgICBbXCI6ZGVmXCIsIFwic3RyYXRlZ3lcIixcblx0ICAgICAgICAgICAgW1wiOmNhY2hlZFwiLCAxODAwMDAwLFxuXHQgICAgICAgICAgICAgICAgW1wiOmZpcnN0X2Nvbm5lY3RlZFwiLFxuXHQgICAgICAgICAgICAgICAgICAgIFtcIjppZlwiLCBbXCI6aXNfc3VwcG9ydGVkXCIsIFwiOndzXCJdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB3c1N0cmF0ZWd5LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBcIjpodHRwX2ZhbGxiYWNrX2xvb3BcIlxuXHQgICAgICAgICAgICAgICAgICAgIF1cblx0ICAgICAgICAgICAgICAgIF1cblx0ICAgICAgICAgICAgXVxuXHQgICAgICAgIF1cblx0ICAgIF07XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0RGVmYXVsdFN0cmF0ZWd5O1xuXG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGRlcGVuZGVuY2llc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0ZnVuY3Rpb24gZGVmYXVsdF8xKCkge1xuXHQgICAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgICAgc2VsZi50aW1lbGluZS5pbmZvKHNlbGYuYnVpbGRUaW1lbGluZU1lc3NhZ2Uoe1xuXHQgICAgICAgIHRyYW5zcG9ydDogc2VsZi5uYW1lICsgKHNlbGYub3B0aW9ucy5lbmNyeXB0ZWQgPyBcInNcIiA6IFwiXCIpXG5cdCAgICB9KSk7XG5cdCAgICBpZiAoc2VsZi5ob29rcy5pc0luaXRpYWxpemVkKCkpIHtcblx0ICAgICAgICBzZWxmLmNoYW5nZVN0YXRlKFwiaW5pdGlhbGl6ZWRcIik7XG5cdCAgICB9XG5cdCAgICBlbHNlIGlmIChzZWxmLmhvb2tzLmZpbGUpIHtcblx0ICAgICAgICBzZWxmLmNoYW5nZVN0YXRlKFwiaW5pdGlhbGl6aW5nXCIpO1xuXHQgICAgICAgIGRlcGVuZGVuY2llc18xLkRlcGVuZGVuY2llcy5sb2FkKHNlbGYuaG9va3MuZmlsZSwgeyBlbmNyeXB0ZWQ6IHNlbGYub3B0aW9ucy5lbmNyeXB0ZWQgfSwgZnVuY3Rpb24gKGVycm9yLCBjYWxsYmFjaykge1xuXHQgICAgICAgICAgICBpZiAoc2VsZi5ob29rcy5pc0luaXRpYWxpemVkKCkpIHtcblx0ICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlU3RhdGUoXCJpbml0aWFsaXplZFwiKTtcblx0ICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKGVycm9yKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHNlbGYub25DbG9zZSgpO1xuXHQgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICB9XG5cdCAgICBlbHNlIHtcblx0ICAgICAgICBzZWxmLm9uQ2xvc2UoKTtcblx0ICAgIH1cblx0fVxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGRlZmF1bHRfMTtcblxuXG4vKioqLyB9KSxcbi8qIDI5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBodHRwX3hkb21haW5fcmVxdWVzdF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCk7XG5cdHZhciBodHRwXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKTtcblx0aHR0cF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVYRFIgPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcblx0ICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QoaHR0cF94ZG9tYWluX3JlcXVlc3RfMVtcImRlZmF1bHRcIl0sIG1ldGhvZCwgdXJsKTtcblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBodHRwXzFbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKiovIH0pLFxuLyogMzAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIEVycm9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpO1xuXHR2YXIgaG9va3MgPSB7XG5cdCAgICBnZXRSZXF1ZXN0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG5cdCAgICAgICAgdmFyIHhkciA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcblx0ICAgICAgICB4ZHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBzb2NrZXQuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcnMuUmVxdWVzdFRpbWVkT3V0KCkpO1xuXHQgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHhkci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJlcnJvclwiLCBlKTtcblx0ICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB4ZHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgaWYgKHhkci5yZXNwb25zZVRleHQgJiYgeGRyLnJlc3BvbnNlVGV4dC5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgICAgICAgICBzb2NrZXQub25DaHVuaygyMDAsIHhkci5yZXNwb25zZVRleHQpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB4ZHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBpZiAoeGRyLnJlc3BvbnNlVGV4dCAmJiB4ZHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgICAgIHNvY2tldC5vbkNodW5rKDIwMCwgeGRyLnJlc3BvbnNlVGV4dCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJmaW5pc2hlZFwiLCAyMDApO1xuXHQgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHJldHVybiB4ZHI7XG5cdCAgICB9LFxuXHQgICAgYWJvcnRSZXF1ZXN0OiBmdW5jdGlvbiAoeGRyKSB7XG5cdCAgICAgICAgeGRyLm9udGltZW91dCA9IHhkci5vbmVycm9yID0geGRyLm9ucHJvZ3Jlc3MgPSB4ZHIub25sb2FkID0gbnVsbDtcblx0ICAgICAgICB4ZHIuYWJvcnQoKTtcblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBob29rcztcblxuXG4vKioqLyB9KSxcbi8qIDMxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcblx0ICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuXHQgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG5cdCAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG5cdH07XG5cdHZhciBCYWRFdmVudE5hbWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuXHQgICAgX19leHRlbmRzKEJhZEV2ZW50TmFtZSwgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIEJhZEV2ZW50TmFtZSgpIHtcblx0ICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBCYWRFdmVudE5hbWU7XG5cdH0oRXJyb3IpKTtcblx0ZXhwb3J0cy5CYWRFdmVudE5hbWUgPSBCYWRFdmVudE5hbWU7XG5cdHZhciBSZXF1ZXN0VGltZWRPdXQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuXHQgICAgX19leHRlbmRzKFJlcXVlc3RUaW1lZE91dCwgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIFJlcXVlc3RUaW1lZE91dCgpIHtcblx0ICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBSZXF1ZXN0VGltZWRPdXQ7XG5cdH0oRXJyb3IpKTtcblx0ZXhwb3J0cy5SZXF1ZXN0VGltZWRPdXQgPSBSZXF1ZXN0VGltZWRPdXQ7XG5cdHZhciBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoVHJhbnNwb3J0UHJpb3JpdHlUb29Mb3csIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdygpIHtcblx0ICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdztcblx0fShFcnJvcikpO1xuXHRleHBvcnRzLlRyYW5zcG9ydFByaW9yaXR5VG9vTG93ID0gVHJhbnNwb3J0UHJpb3JpdHlUb29Mb3c7XG5cdHZhciBUcmFuc3BvcnRDbG9zZWQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuXHQgICAgX19leHRlbmRzKFRyYW5zcG9ydENsb3NlZCwgX3N1cGVyKTtcblx0ICAgIGZ1bmN0aW9uIFRyYW5zcG9ydENsb3NlZCgpIHtcblx0ICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBUcmFuc3BvcnRDbG9zZWQ7XG5cdH0oRXJyb3IpKTtcblx0ZXhwb3J0cy5UcmFuc3BvcnRDbG9zZWQgPSBUcmFuc3BvcnRDbG9zZWQ7XG5cdHZhciBVbnN1cHBvcnRlZFRyYW5zcG9ydCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoVW5zdXBwb3J0ZWRUcmFuc3BvcnQsIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBVbnN1cHBvcnRlZFRyYW5zcG9ydCgpIHtcblx0ICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBVbnN1cHBvcnRlZFRyYW5zcG9ydDtcblx0fShFcnJvcikpO1xuXHRleHBvcnRzLlVuc3VwcG9ydGVkVHJhbnNwb3J0ID0gVW5zdXBwb3J0ZWRUcmFuc3BvcnQ7XG5cdHZhciBVbnN1cHBvcnRlZFN0cmF0ZWd5ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcblx0ICAgIF9fZXh0ZW5kcyhVbnN1cHBvcnRlZFN0cmF0ZWd5LCBfc3VwZXIpO1xuXHQgICAgZnVuY3Rpb24gVW5zdXBwb3J0ZWRTdHJhdGVneSgpIHtcblx0ICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBVbnN1cHBvcnRlZFN0cmF0ZWd5O1xuXHR9KEVycm9yKSk7XG5cdGV4cG9ydHMuVW5zdXBwb3J0ZWRTdHJhdGVneSA9IFVuc3VwcG9ydGVkU3RyYXRlZ3k7XG5cblxuLyoqKi8gfSksXG4vKiAzMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgaHR0cF9yZXF1ZXN0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblx0dmFyIGh0dHBfc29ja2V0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcblx0dmFyIGh0dHBfc3RyZWFtaW5nX3NvY2tldF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNik7XG5cdHZhciBodHRwX3BvbGxpbmdfc29ja2V0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KTtcblx0dmFyIGh0dHBfeGhyX3JlcXVlc3RfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpO1xuXHR2YXIgSFRUUCA9IHtcblx0ICAgIGNyZWF0ZVN0cmVhbWluZ1NvY2tldDogZnVuY3Rpb24gKHVybCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNvY2tldChodHRwX3N0cmVhbWluZ19zb2NrZXRfMVtcImRlZmF1bHRcIl0sIHVybCk7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlUG9sbGluZ1NvY2tldDogZnVuY3Rpb24gKHVybCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNvY2tldChodHRwX3BvbGxpbmdfc29ja2V0XzFbXCJkZWZhdWx0XCJdLCB1cmwpO1xuXHQgICAgfSxcblx0ICAgIGNyZWF0ZVNvY2tldDogZnVuY3Rpb24gKGhvb2tzLCB1cmwpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IGh0dHBfc29ja2V0XzFbXCJkZWZhdWx0XCJdKGhvb2tzLCB1cmwpO1xuXHQgICAgfSxcblx0ICAgIGNyZWF0ZVhIUjogZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChodHRwX3hocl9yZXF1ZXN0XzFbXCJkZWZhdWx0XCJdLCBtZXRob2QsIHVybCk7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlUmVxdWVzdDogZnVuY3Rpb24gKGhvb2tzLCBtZXRob2QsIHVybCkge1xuXHQgICAgICAgIHJldHVybiBuZXcgaHR0cF9yZXF1ZXN0XzFbXCJkZWZhdWx0XCJdKGhvb2tzLCBtZXRob2QsIHVybCk7XG5cdCAgICB9XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRUUDtcblxuXG4vKioqLyB9KSxcbi8qIDMzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcblx0ICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuXHQgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG5cdCAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG5cdH07XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgZGlzcGF0Y2hlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNCk7XG5cdHZhciBNQVhfQlVGRkVSX0xFTkdUSCA9IDI1NiAqIDEwMjQ7XG5cdHZhciBIVFRQUmVxdWVzdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoSFRUUFJlcXVlc3QsIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBIVFRQUmVxdWVzdChob29rcywgbWV0aG9kLCB1cmwpIHtcblx0ICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcblx0ICAgICAgICB0aGlzLmhvb2tzID0gaG9va3M7XG5cdCAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG5cdCAgICAgICAgdGhpcy51cmwgPSB1cmw7XG5cdCAgICB9XG5cdCAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG5cdCAgICAgICAgdGhpcy54aHIgPSB0aGlzLmhvb2tzLmdldFJlcXVlc3QodGhpcyk7XG5cdCAgICAgICAgdGhpcy51bmxvYWRlciA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uYWRkVW5sb2FkTGlzdGVuZXIodGhpcy51bmxvYWRlcik7XG5cdCAgICAgICAgdGhpcy54aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRydWUpO1xuXHQgICAgICAgIGlmICh0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG5cdCAgICAgICAgICAgIHRoaXMueGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLnhoci5zZW5kKHBheWxvYWQpO1xuXHQgICAgfTtcblx0ICAgIEhUVFBSZXF1ZXN0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy51bmxvYWRlcikge1xuXHQgICAgICAgICAgICBydW50aW1lXzFbXCJkZWZhdWx0XCJdLnJlbW92ZVVubG9hZExpc3RlbmVyKHRoaXMudW5sb2FkZXIpO1xuXHQgICAgICAgICAgICB0aGlzLnVubG9hZGVyID0gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHRoaXMueGhyKSB7XG5cdCAgICAgICAgICAgIHRoaXMuaG9va3MuYWJvcnRSZXF1ZXN0KHRoaXMueGhyKTtcblx0ICAgICAgICAgICAgdGhpcy54aHIgPSBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUub25DaHVuayA9IGZ1bmN0aW9uIChzdGF0dXMsIGRhdGEpIHtcblx0ICAgICAgICB3aGlsZSAodHJ1ZSkge1xuXHQgICAgICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmFkdmFuY2VCdWZmZXIoZGF0YSk7XG5cdCAgICAgICAgICAgIGlmIChjaHVuaykge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiY2h1bmtcIiwgeyBzdGF0dXM6IHN0YXR1cywgZGF0YTogY2h1bmsgfSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAodGhpcy5pc0J1ZmZlclRvb0xvbmcoZGF0YSkpIHtcblx0ICAgICAgICAgICAgdGhpcy5lbWl0KFwiYnVmZmVyX3Rvb19sb25nXCIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUuYWR2YW5jZUJ1ZmZlciA9IGZ1bmN0aW9uIChidWZmZXIpIHtcblx0ICAgICAgICB2YXIgdW5yZWFkRGF0YSA9IGJ1ZmZlci5zbGljZSh0aGlzLnBvc2l0aW9uKTtcblx0ICAgICAgICB2YXIgZW5kT2ZMaW5lUG9zaXRpb24gPSB1bnJlYWREYXRhLmluZGV4T2YoXCJcXG5cIik7XG5cdCAgICAgICAgaWYgKGVuZE9mTGluZVBvc2l0aW9uICE9PSAtMSkge1xuXHQgICAgICAgICAgICB0aGlzLnBvc2l0aW9uICs9IGVuZE9mTGluZVBvc2l0aW9uICsgMTtcblx0ICAgICAgICAgICAgcmV0dXJuIHVucmVhZERhdGEuc2xpY2UoMCwgZW5kT2ZMaW5lUG9zaXRpb24pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIEhUVFBSZXF1ZXN0LnByb3RvdHlwZS5pc0J1ZmZlclRvb0xvbmcgPSBmdW5jdGlvbiAoYnVmZmVyKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPT09IGJ1ZmZlci5sZW5ndGggJiYgYnVmZmVyLmxlbmd0aCA+IE1BWF9CVUZGRVJfTEVOR1RIO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBIVFRQUmVxdWVzdDtcblx0fShkaXNwYXRjaGVyXzFbXCJkZWZhdWx0XCJdKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRUUFJlcXVlc3Q7XG5cblxuLyoqKi8gfSksXG4vKiAzNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgc3RhdGVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXHR2YXIgdXRpbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgYXV0b0luY3JlbWVudCA9IDE7XG5cdHZhciBIVFRQU29ja2V0ID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIEhUVFBTb2NrZXQoaG9va3MsIHVybCkge1xuXHQgICAgICAgIHRoaXMuaG9va3MgPSBob29rcztcblx0ICAgICAgICB0aGlzLnNlc3Npb24gPSByYW5kb21OdW1iZXIoMTAwMCkgKyBcIi9cIiArIHJhbmRvbVN0cmluZyg4KTtcblx0ICAgICAgICB0aGlzLmxvY2F0aW9uID0gZ2V0TG9jYXRpb24odXJsKTtcblx0ICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZV8xW1wiZGVmYXVsdFwiXS5DT05ORUNUSU5HO1xuXHQgICAgICAgIHRoaXMub3BlblN0cmVhbSgpO1xuXHQgICAgfVxuXHQgICAgSFRUUFNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuc2VuZFJhdyhKU09OLnN0cmluZ2lmeShbcGF5bG9hZF0pKTtcblx0ICAgIH07XG5cdCAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5waW5nID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRoaXMuaG9va3Muc2VuZEhlYXJ0YmVhdCh0aGlzKTtcblx0ICAgIH07XG5cdCAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24pIHtcblx0ICAgICAgICB0aGlzLm9uQ2xvc2UoY29kZSwgcmVhc29uLCB0cnVlKTtcblx0ICAgIH07XG5cdCAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5zZW5kUmF3ID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcblx0ICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZV8xW1wiZGVmYXVsdFwiXS5PUEVOKSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBydW50aW1lXzFbXCJkZWZhdWx0XCJdLmNyZWF0ZVNvY2tldFJlcXVlc3QoXCJQT1NUXCIsIGdldFVuaXF1ZVVSTChnZXRTZW5kVVJMKHRoaXMubG9jYXRpb24sIHRoaXMuc2Vzc2lvbikpKS5zdGFydChwYXlsb2FkKTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgSFRUUFNvY2tldC5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRoaXMuY2xvc2VTdHJlYW0oKTtcblx0ICAgICAgICB0aGlzLm9wZW5TdHJlYW0oKTtcblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbiwgd2FzQ2xlYW4pIHtcblx0ICAgICAgICB0aGlzLmNsb3NlU3RyZWFtKCk7XG5cdCAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gc3RhdGVfMVtcImRlZmF1bHRcIl0uQ0xPU0VEO1xuXHQgICAgICAgIGlmICh0aGlzLm9uY2xvc2UpIHtcblx0ICAgICAgICAgICAgdGhpcy5vbmNsb3NlKHtcblx0ICAgICAgICAgICAgICAgIGNvZGU6IGNvZGUsXG5cdCAgICAgICAgICAgICAgICByZWFzb246IHJlYXNvbixcblx0ICAgICAgICAgICAgICAgIHdhc0NsZWFuOiB3YXNDbGVhblxuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgSFRUUFNvY2tldC5wcm90b3R5cGUub25DaHVuayA9IGZ1bmN0aW9uIChjaHVuaykge1xuXHQgICAgICAgIGlmIChjaHVuay5zdGF0dXMgIT09IDIwMCkge1xuXHQgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHN0YXRlXzFbXCJkZWZhdWx0XCJdLk9QRU4pIHtcblx0ICAgICAgICAgICAgdGhpcy5vbkFjdGl2aXR5KCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBwYXlsb2FkO1xuXHQgICAgICAgIHZhciB0eXBlID0gY2h1bmsuZGF0YS5zbGljZSgwLCAxKTtcblx0ICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcblx0ICAgICAgICAgICAgY2FzZSAnbyc6XG5cdCAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICd7fScpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5vbk9wZW4ocGF5bG9hZCk7XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgY2FzZSAnYSc6XG5cdCAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICdbXScpO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXlsb2FkLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkV2ZW50KHBheWxvYWRbaV0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIGNhc2UgJ20nOlxuXHQgICAgICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UoY2h1bmsuZGF0YS5zbGljZSgxKSB8fCAnbnVsbCcpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5vbkV2ZW50KHBheWxvYWQpO1xuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIGNhc2UgJ2gnOlxuXHQgICAgICAgICAgICAgICAgdGhpcy5ob29rcy5vbkhlYXJ0YmVhdCh0aGlzKTtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICBjYXNlICdjJzpcblx0ICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ1tdJyk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2UocGF5bG9hZFswXSwgcGF5bG9hZFsxXSwgdHJ1ZSk7XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgSFRUUFNvY2tldC5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0ICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZV8xW1wiZGVmYXVsdFwiXS5DT05ORUNUSU5HKSB7XG5cdCAgICAgICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaG9zdG5hbWUpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb24uYmFzZSA9IHJlcGxhY2VIb3N0KHRoaXMubG9jYXRpb24uYmFzZSwgb3B0aW9ucy5ob3N0bmFtZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gc3RhdGVfMVtcImRlZmF1bHRcIl0uT1BFTjtcblx0ICAgICAgICAgICAgaWYgKHRoaXMub25vcGVuKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9ub3BlbigpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICB0aGlzLm9uQ2xvc2UoMTAwNiwgXCJTZXJ2ZXIgbG9zdCBzZXNzaW9uXCIsIHRydWUpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdCAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gc3RhdGVfMVtcImRlZmF1bHRcIl0uT1BFTiAmJiB0aGlzLm9ubWVzc2FnZSkge1xuXHQgICAgICAgICAgICB0aGlzLm9ubWVzc2FnZSh7IGRhdGE6IGV2ZW50IH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkFjdGl2aXR5ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLm9uYWN0aXZpdHkpIHtcblx0ICAgICAgICAgICAgdGhpcy5vbmFjdGl2aXR5KCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0ICAgICAgICBpZiAodGhpcy5vbmVycm9yKSB7XG5cdCAgICAgICAgICAgIHRoaXMub25lcnJvcihlcnJvcik7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9wZW5TdHJlYW0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICB0aGlzLnN0cmVhbSA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uY3JlYXRlU29ja2V0UmVxdWVzdChcIlBPU1RcIiwgZ2V0VW5pcXVlVVJMKHRoaXMuaG9va3MuZ2V0UmVjZWl2ZVVSTCh0aGlzLmxvY2F0aW9uLCB0aGlzLnNlc3Npb24pKSk7XG5cdCAgICAgICAgdGhpcy5zdHJlYW0uYmluZChcImNodW5rXCIsIGZ1bmN0aW9uIChjaHVuaykge1xuXHQgICAgICAgICAgICBfdGhpcy5vbkNodW5rKGNodW5rKTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgICB0aGlzLnN0cmVhbS5iaW5kKFwiZmluaXNoZWRcIiwgZnVuY3Rpb24gKHN0YXR1cykge1xuXHQgICAgICAgICAgICBfdGhpcy5ob29rcy5vbkZpbmlzaGVkKF90aGlzLCBzdGF0dXMpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHRoaXMuc3RyZWFtLmJpbmQoXCJidWZmZXJfdG9vX2xvbmdcIiwgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBfdGhpcy5yZWNvbm5lY3QoKTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICB0aGlzLnN0cmVhbS5zdGFydCgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBjYXRjaCAoZXJyb3IpIHtcblx0ICAgICAgICAgICAgdXRpbF8xW1wiZGVmYXVsdFwiXS5kZWZlcihmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5vbkVycm9yKGVycm9yKTtcblx0ICAgICAgICAgICAgICAgIF90aGlzLm9uQ2xvc2UoMTAwNiwgXCJDb3VsZCBub3Qgc3RhcnQgc3RyZWFtaW5nXCIsIGZhbHNlKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLmNsb3NlU3RyZWFtID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLnN0cmVhbSkge1xuXHQgICAgICAgICAgICB0aGlzLnN0cmVhbS51bmJpbmRfYWxsKCk7XG5cdCAgICAgICAgICAgIHRoaXMuc3RyZWFtLmNsb3NlKCk7XG5cdCAgICAgICAgICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIEhUVFBTb2NrZXQ7XG5cdH0oKSk7XG5cdGZ1bmN0aW9uIGdldExvY2F0aW9uKHVybCkge1xuXHQgICAgdmFyIHBhcnRzID0gLyhbXlxcP10qKVxcLyooXFw/Py4qKS8uZXhlYyh1cmwpO1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgICBiYXNlOiBwYXJ0c1sxXSxcblx0ICAgICAgICBxdWVyeVN0cmluZzogcGFydHNbMl1cblx0ICAgIH07XG5cdH1cblx0ZnVuY3Rpb24gZ2V0U2VuZFVSTCh1cmwsIHNlc3Npb24pIHtcblx0ICAgIHJldHVybiB1cmwuYmFzZSArIFwiL1wiICsgc2Vzc2lvbiArIFwiL3hocl9zZW5kXCI7XG5cdH1cblx0ZnVuY3Rpb24gZ2V0VW5pcXVlVVJMKHVybCkge1xuXHQgICAgdmFyIHNlcGFyYXRvciA9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSkgPyBcIj9cIiA6IFwiJlwiO1xuXHQgICAgcmV0dXJuIHVybCArIHNlcGFyYXRvciArIFwidD1cIiArICgrbmV3IERhdGUoKSkgKyBcIiZuPVwiICsgYXV0b0luY3JlbWVudCsrO1xuXHR9XG5cdGZ1bmN0aW9uIHJlcGxhY2VIb3N0KHVybCwgaG9zdG5hbWUpIHtcblx0ICAgIHZhciB1cmxQYXJ0cyA9IC8oaHR0cHM/OlxcL1xcLykoW15cXC86XSspKChcXC98Oik/LiopLy5leGVjKHVybCk7XG5cdCAgICByZXR1cm4gdXJsUGFydHNbMV0gKyBob3N0bmFtZSArIHVybFBhcnRzWzNdO1xuXHR9XG5cdGZ1bmN0aW9uIHJhbmRvbU51bWJlcihtYXgpIHtcblx0ICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuXHR9XG5cdGZ1bmN0aW9uIHJhbmRvbVN0cmluZyhsZW5ndGgpIHtcblx0ICAgIHZhciByZXN1bHQgPSBbXTtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICByZXN1bHQucHVzaChyYW5kb21OdW1iZXIoMzIpLnRvU3RyaW5nKDMyKSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xuXHR9XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRUUFNvY2tldDtcblxuXG4vKioqLyB9KSxcbi8qIDM1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBTdGF0ZTtcblx0KGZ1bmN0aW9uIChTdGF0ZSkge1xuXHQgICAgU3RhdGVbU3RhdGVbXCJDT05ORUNUSU5HXCJdID0gMF0gPSBcIkNPTk5FQ1RJTkdcIjtcblx0ICAgIFN0YXRlW1N0YXRlW1wiT1BFTlwiXSA9IDFdID0gXCJPUEVOXCI7XG5cdCAgICBTdGF0ZVtTdGF0ZVtcIkNMT1NFRFwiXSA9IDNdID0gXCJDTE9TRURcIjtcblx0fSkoU3RhdGUgfHwgKFN0YXRlID0ge30pKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdGF0ZTtcblxuXG4vKioqLyB9KSxcbi8qIDM2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBob29rcyA9IHtcblx0ICAgIGdldFJlY2VpdmVVUkw6IGZ1bmN0aW9uICh1cmwsIHNlc3Npb24pIHtcblx0ICAgICAgICByZXR1cm4gdXJsLmJhc2UgKyBcIi9cIiArIHNlc3Npb24gKyBcIi94aHJfc3RyZWFtaW5nXCIgKyB1cmwucXVlcnlTdHJpbmc7XG5cdCAgICB9LFxuXHQgICAgb25IZWFydGJlYXQ6IGZ1bmN0aW9uIChzb2NrZXQpIHtcblx0ICAgICAgICBzb2NrZXQuc2VuZFJhdyhcIltdXCIpO1xuXHQgICAgfSxcblx0ICAgIHNlbmRIZWFydGJlYXQ6IGZ1bmN0aW9uIChzb2NrZXQpIHtcblx0ICAgICAgICBzb2NrZXQuc2VuZFJhdyhcIltdXCIpO1xuXHQgICAgfSxcblx0ICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uIChzb2NrZXQsIHN0YXR1cykge1xuXHQgICAgICAgIHNvY2tldC5vbkNsb3NlKDEwMDYsIFwiQ29ubmVjdGlvbiBpbnRlcnJ1cHRlZCAoXCIgKyBzdGF0dXMgKyBcIilcIiwgZmFsc2UpO1xuXHQgICAgfVxuXHR9O1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGhvb2tzO1xuXG5cbi8qKiovIH0pLFxuLyogMzcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGhvb2tzID0ge1xuXHQgICAgZ2V0UmVjZWl2ZVVSTDogZnVuY3Rpb24gKHVybCwgc2Vzc2lvbikge1xuXHQgICAgICAgIHJldHVybiB1cmwuYmFzZSArIFwiL1wiICsgc2Vzc2lvbiArIFwiL3hoclwiICsgdXJsLnF1ZXJ5U3RyaW5nO1xuXHQgICAgfSxcblx0ICAgIG9uSGVhcnRiZWF0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICB9LFxuXHQgICAgc2VuZEhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuXHQgICAgICAgIHNvY2tldC5zZW5kUmF3KFwiW11cIik7XG5cdCAgICB9LFxuXHQgICAgb25GaW5pc2hlZDogZnVuY3Rpb24gKHNvY2tldCwgc3RhdHVzKSB7XG5cdCAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdCAgICAgICAgICAgIHNvY2tldC5yZWNvbm5lY3QoKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHNvY2tldC5vbkNsb3NlKDEwMDYsIFwiQ29ubmVjdGlvbiBpbnRlcnJ1cHRlZCAoXCIgKyBzdGF0dXMgKyBcIilcIiwgZmFsc2UpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBob29rcztcblxuXG4vKioqLyB9KSxcbi8qIDM4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgaG9va3MgPSB7XG5cdCAgICBnZXRSZXF1ZXN0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG5cdCAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gcnVudGltZV8xW1wiZGVmYXVsdFwiXS5nZXRYSFJBUEkoKTtcblx0ICAgICAgICB2YXIgeGhyID0gbmV3IENvbnN0cnVjdG9yKCk7XG5cdCAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBzd2l0Y2ggKHhoci5yZWFkeVN0YXRlKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM6XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZXNwb25zZVRleHQgJiYgeGhyLnJlc3BvbnNlVGV4dC5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5vbkNodW5rKHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDpcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlc3BvbnNlVGV4dCAmJiB4aHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiZmluaXNoZWRcIiwgeGhyLnN0YXR1cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIHJldHVybiB4aHI7XG5cdCAgICB9LFxuXHQgICAgYWJvcnRSZXF1ZXN0OiBmdW5jdGlvbiAoeGhyKSB7XG5cdCAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cdCAgICAgICAgeGhyLmFib3J0KCk7XG5cdCAgICB9XG5cdH07XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gaG9va3M7XG5cblxuLyoqKi8gfSksXG4vKiAzOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgdXRpbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdHZhciBsZXZlbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MCk7XG5cdHZhciBUaW1lbGluZSA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBUaW1lbGluZShrZXksIHNlc3Npb24sIG9wdGlvbnMpIHtcblx0ICAgICAgICB0aGlzLmtleSA9IGtleTtcblx0ICAgICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xuXHQgICAgICAgIHRoaXMuZXZlbnRzID0gW107XG5cdCAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0ICAgICAgICB0aGlzLnNlbnQgPSAwO1xuXHQgICAgICAgIHRoaXMudW5pcXVlSUQgPSAwO1xuXHQgICAgfVxuXHQgICAgVGltZWxpbmUucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChsZXZlbCwgZXZlbnQpIHtcblx0ICAgICAgICBpZiAobGV2ZWwgPD0gdGhpcy5vcHRpb25zLmxldmVsKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2goQ29sbGVjdGlvbnMuZXh0ZW5kKHt9LCBldmVudCwgeyB0aW1lc3RhbXA6IHV0aWxfMVtcImRlZmF1bHRcIl0ubm93KCkgfSkpO1xuXHQgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0ICYmIHRoaXMuZXZlbnRzLmxlbmd0aCA+IHRoaXMub3B0aW9ucy5saW1pdCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuc2hpZnQoKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBUaW1lbGluZS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ICAgICAgICB0aGlzLmxvZyhsZXZlbF8xW1wiZGVmYXVsdFwiXS5FUlJPUiwgZXZlbnQpO1xuXHQgICAgfTtcblx0ICAgIFRpbWVsaW5lLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdCAgICAgICAgdGhpcy5sb2cobGV2ZWxfMVtcImRlZmF1bHRcIl0uSU5GTywgZXZlbnQpO1xuXHQgICAgfTtcblx0ICAgIFRpbWVsaW5lLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uIChldmVudCkge1xuXHQgICAgICAgIHRoaXMubG9nKGxldmVsXzFbXCJkZWZhdWx0XCJdLkRFQlVHLCBldmVudCk7XG5cdCAgICB9O1xuXHQgICAgVGltZWxpbmUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzLmxlbmd0aCA9PT0gMDtcblx0ICAgIH07XG5cdCAgICBUaW1lbGluZS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChzZW5kZm4sIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICB2YXIgZGF0YSA9IENvbGxlY3Rpb25zLmV4dGVuZCh7XG5cdCAgICAgICAgICAgIHNlc3Npb246IHRoaXMuc2Vzc2lvbixcblx0ICAgICAgICAgICAgYnVuZGxlOiB0aGlzLnNlbnQgKyAxLFxuXHQgICAgICAgICAgICBrZXk6IHRoaXMua2V5LFxuXHQgICAgICAgICAgICBsaWI6IFwianNcIixcblx0ICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5vcHRpb25zLnZlcnNpb24sXG5cdCAgICAgICAgICAgIGNsdXN0ZXI6IHRoaXMub3B0aW9ucy5jbHVzdGVyLFxuXHQgICAgICAgICAgICBmZWF0dXJlczogdGhpcy5vcHRpb25zLmZlYXR1cmVzLFxuXHQgICAgICAgICAgICB0aW1lbGluZTogdGhpcy5ldmVudHNcblx0ICAgICAgICB9LCB0aGlzLm9wdGlvbnMucGFyYW1zKTtcblx0ICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuXHQgICAgICAgIHNlbmRmbihkYXRhLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuXHQgICAgICAgICAgICBpZiAoIWVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5zZW50Kys7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfTtcblx0ICAgIFRpbWVsaW5lLnByb3RvdHlwZS5nZW5lcmF0ZVVuaXF1ZUlEID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRoaXMudW5pcXVlSUQrKztcblx0ICAgICAgICByZXR1cm4gdGhpcy51bmlxdWVJRDtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gVGltZWxpbmU7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVGltZWxpbmU7XG5cblxuLyoqKi8gfSksXG4vKiA0MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgVGltZWxpbmVMZXZlbDtcblx0KGZ1bmN0aW9uIChUaW1lbGluZUxldmVsKSB7XG5cdCAgICBUaW1lbGluZUxldmVsW1RpbWVsaW5lTGV2ZWxbXCJFUlJPUlwiXSA9IDNdID0gXCJFUlJPUlwiO1xuXHQgICAgVGltZWxpbmVMZXZlbFtUaW1lbGluZUxldmVsW1wiSU5GT1wiXSA9IDZdID0gXCJJTkZPXCI7XG5cdCAgICBUaW1lbGluZUxldmVsW1RpbWVsaW5lTGV2ZWxbXCJERUJVR1wiXSA9IDddID0gXCJERUJVR1wiO1xuXHR9KShUaW1lbGluZUxldmVsIHx8IChUaW1lbGluZUxldmVsID0ge30pKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUaW1lbGluZUxldmVsO1xuXG5cbi8qKiovIH0pLFxuLyogNDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIHV0aWxfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHR2YXIgdHJhbnNwb3J0X21hbmFnZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuXHR2YXIgRXJyb3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSk7XG5cdHZhciB0cmFuc3BvcnRfc3RyYXRlZ3lfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpO1xuXHR2YXIgc2VxdWVudGlhbF9zdHJhdGVneV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nyk7XG5cdHZhciBiZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU4KTtcblx0dmFyIGNhY2hlZF9zdHJhdGVneV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1OSk7XG5cdHZhciBkZWxheWVkX3N0cmF0ZWd5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwKTtcblx0dmFyIGlmX3N0cmF0ZWd5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYxKTtcblx0dmFyIGZpcnN0X2Nvbm5lY3RlZF9zdHJhdGVneV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2Mik7XG5cdHZhciBydW50aW1lXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgVHJhbnNwb3J0cyA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uVHJhbnNwb3J0cztcblx0ZXhwb3J0cy5idWlsZCA9IGZ1bmN0aW9uIChzY2hlbWUsIG9wdGlvbnMpIHtcblx0ICAgIHZhciBjb250ZXh0ID0gQ29sbGVjdGlvbnMuZXh0ZW5kKHt9LCBnbG9iYWxDb250ZXh0LCBvcHRpb25zKTtcblx0ICAgIHJldHVybiBldmFsdWF0ZShzY2hlbWUsIGNvbnRleHQpWzFdLnN0cmF0ZWd5O1xuXHR9O1xuXHR2YXIgVW5zdXBwb3J0ZWRTdHJhdGVneSA9IHtcblx0ICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfSxcblx0ICAgIGNvbm5lY3Q6IGZ1bmN0aW9uIChfLCBjYWxsYmFjaykge1xuXHQgICAgICAgIHZhciBkZWZlcnJlZCA9IHV0aWxfMVtcImRlZmF1bHRcIl0uZGVmZXIoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3JzLlVuc3VwcG9ydGVkU3RyYXRlZ3koKSk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIGRlZmVycmVkLmVuc3VyZUFib3J0ZWQoKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKCkgeyB9XG5cdCAgICAgICAgfTtcblx0ICAgIH1cblx0fTtcblx0ZnVuY3Rpb24gcmV0dXJuV2l0aE9yaWdpbmFsQ29udGV4dChmKSB7XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcblx0ICAgICAgICByZXR1cm4gW2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgY29udGV4dF07XG5cdCAgICB9O1xuXHR9XG5cdHZhciBnbG9iYWxDb250ZXh0ID0ge1xuXHQgICAgZXh0ZW5kOiBmdW5jdGlvbiAoY29udGV4dCwgZmlyc3QsIHNlY29uZCkge1xuXHQgICAgICAgIHJldHVybiBbQ29sbGVjdGlvbnMuZXh0ZW5kKHt9LCBmaXJzdCwgc2Vjb25kKSwgY29udGV4dF07XG5cdCAgICB9LFxuXHQgICAgZGVmOiBmdW5jdGlvbiAoY29udGV4dCwgbmFtZSwgdmFsdWUpIHtcblx0ICAgICAgICBpZiAoY29udGV4dFtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgIHRocm93IFwiUmVkZWZpbmluZyBzeW1ib2wgXCIgKyBuYW1lO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBjb250ZXh0W25hbWVdID0gdmFsdWU7XG5cdCAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIGNvbnRleHRdO1xuXHQgICAgfSxcblx0ICAgIGRlZl90cmFuc3BvcnQ6IGZ1bmN0aW9uIChjb250ZXh0LCBuYW1lLCB0eXBlLCBwcmlvcml0eSwgb3B0aW9ucywgbWFuYWdlcikge1xuXHQgICAgICAgIHZhciB0cmFuc3BvcnRDbGFzcyA9IFRyYW5zcG9ydHNbdHlwZV07XG5cdCAgICAgICAgaWYgKCF0cmFuc3BvcnRDbGFzcykge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3JzLlVuc3VwcG9ydGVkVHJhbnNwb3J0KHR5cGUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgZW5hYmxlZCA9ICghY29udGV4dC5lbmFibGVkVHJhbnNwb3J0cyB8fFxuXHQgICAgICAgICAgICBDb2xsZWN0aW9ucy5hcnJheUluZGV4T2YoY29udGV4dC5lbmFibGVkVHJhbnNwb3J0cywgbmFtZSkgIT09IC0xKSAmJlxuXHQgICAgICAgICAgICAoIWNvbnRleHQuZGlzYWJsZWRUcmFuc3BvcnRzIHx8XG5cdCAgICAgICAgICAgICAgICBDb2xsZWN0aW9ucy5hcnJheUluZGV4T2YoY29udGV4dC5kaXNhYmxlZFRyYW5zcG9ydHMsIG5hbWUpID09PSAtMSk7XG5cdCAgICAgICAgdmFyIHRyYW5zcG9ydDtcblx0ICAgICAgICBpZiAoZW5hYmxlZCkge1xuXHQgICAgICAgICAgICB0cmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0X3N0cmF0ZWd5XzFbXCJkZWZhdWx0XCJdKG5hbWUsIHByaW9yaXR5LCBtYW5hZ2VyID8gbWFuYWdlci5nZXRBc3Npc3RhbnQodHJhbnNwb3J0Q2xhc3MpIDogdHJhbnNwb3J0Q2xhc3MsIENvbGxlY3Rpb25zLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAgICBrZXk6IGNvbnRleHQua2V5LFxuXHQgICAgICAgICAgICAgICAgZW5jcnlwdGVkOiBjb250ZXh0LmVuY3J5cHRlZCxcblx0ICAgICAgICAgICAgICAgIHRpbWVsaW5lOiBjb250ZXh0LnRpbWVsaW5lLFxuXHQgICAgICAgICAgICAgICAgaWdub3JlTnVsbE9yaWdpbjogY29udGV4dC5pZ25vcmVOdWxsT3JpZ2luXG5cdCAgICAgICAgICAgIH0sIG9wdGlvbnMpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHRyYW5zcG9ydCA9IFVuc3VwcG9ydGVkU3RyYXRlZ3k7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBuZXdDb250ZXh0ID0gY29udGV4dC5kZWYoY29udGV4dCwgbmFtZSwgdHJhbnNwb3J0KVsxXTtcblx0ICAgICAgICBuZXdDb250ZXh0LlRyYW5zcG9ydHMgPSBjb250ZXh0LlRyYW5zcG9ydHMgfHwge307XG5cdCAgICAgICAgbmV3Q29udGV4dC5UcmFuc3BvcnRzW25hbWVdID0gdHJhbnNwb3J0O1xuXHQgICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCBuZXdDb250ZXh0XTtcblx0ICAgIH0sXG5cdCAgICB0cmFuc3BvcnRfbWFuYWdlcjogcmV0dXJuV2l0aE9yaWdpbmFsQ29udGV4dChmdW5jdGlvbiAoXywgb3B0aW9ucykge1xuXHQgICAgICAgIHJldHVybiBuZXcgdHJhbnNwb3J0X21hbmFnZXJfMVtcImRlZmF1bHRcIl0ob3B0aW9ucyk7XG5cdCAgICB9KSxcblx0ICAgIHNlcXVlbnRpYWw6IHJldHVybldpdGhPcmlnaW5hbENvbnRleHQoZnVuY3Rpb24gKF8sIG9wdGlvbnMpIHtcblx0ICAgICAgICB2YXIgc3RyYXRlZ2llcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5XzFbXCJkZWZhdWx0XCJdKHN0cmF0ZWdpZXMsIG9wdGlvbnMpO1xuXHQgICAgfSksXG5cdCAgICBjYWNoZWQ6IHJldHVybldpdGhPcmlnaW5hbENvbnRleHQoZnVuY3Rpb24gKGNvbnRleHQsIHR0bCwgc3RyYXRlZ3kpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IGNhY2hlZF9zdHJhdGVneV8xW1wiZGVmYXVsdFwiXShzdHJhdGVneSwgY29udGV4dC5UcmFuc3BvcnRzLCB7XG5cdCAgICAgICAgICAgIHR0bDogdHRsLFxuXHQgICAgICAgICAgICB0aW1lbGluZTogY29udGV4dC50aW1lbGluZSxcblx0ICAgICAgICAgICAgZW5jcnlwdGVkOiBjb250ZXh0LmVuY3J5cHRlZFxuXHQgICAgICAgIH0pO1xuXHQgICAgfSksXG5cdCAgICBmaXJzdF9jb25uZWN0ZWQ6IHJldHVybldpdGhPcmlnaW5hbENvbnRleHQoZnVuY3Rpb24gKF8sIHN0cmF0ZWd5KSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBmaXJzdF9jb25uZWN0ZWRfc3RyYXRlZ3lfMVtcImRlZmF1bHRcIl0oc3RyYXRlZ3kpO1xuXHQgICAgfSksXG5cdCAgICBiZXN0X2Nvbm5lY3RlZF9ldmVyOiByZXR1cm5XaXRoT3JpZ2luYWxDb250ZXh0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgc3RyYXRlZ2llcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBiZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5XzFbXCJkZWZhdWx0XCJdKHN0cmF0ZWdpZXMpO1xuXHQgICAgfSksXG5cdCAgICBkZWxheWVkOiByZXR1cm5XaXRoT3JpZ2luYWxDb250ZXh0KGZ1bmN0aW9uIChfLCBkZWxheSwgc3RyYXRlZ3kpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IGRlbGF5ZWRfc3RyYXRlZ3lfMVtcImRlZmF1bHRcIl0oc3RyYXRlZ3ksIHsgZGVsYXk6IGRlbGF5IH0pO1xuXHQgICAgfSksXG5cdCAgICBcImlmXCI6IHJldHVybldpdGhPcmlnaW5hbENvbnRleHQoZnVuY3Rpb24gKF8sIHRlc3QsIHRydWVCcmFuY2gsIGZhbHNlQnJhbmNoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBpZl9zdHJhdGVneV8xW1wiZGVmYXVsdFwiXSh0ZXN0LCB0cnVlQnJhbmNoLCBmYWxzZUJyYW5jaCk7XG5cdCAgICB9KSxcblx0ICAgIGlzX3N1cHBvcnRlZDogcmV0dXJuV2l0aE9yaWdpbmFsQ29udGV4dChmdW5jdGlvbiAoXywgc3RyYXRlZ3kpIHtcblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcblx0ICAgICAgICB9O1xuXHQgICAgfSlcblx0fTtcblx0ZnVuY3Rpb24gaXNTeW1ib2woZXhwcmVzc2lvbikge1xuXHQgICAgcmV0dXJuICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIikgJiYgZXhwcmVzc2lvbi5jaGFyQXQoMCkgPT09IFwiOlwiO1xuXHR9XG5cdGZ1bmN0aW9uIGdldFN5bWJvbFZhbHVlKGV4cHJlc3Npb24sIGNvbnRleHQpIHtcblx0ICAgIHJldHVybiBjb250ZXh0W2V4cHJlc3Npb24uc2xpY2UoMSldO1xuXHR9XG5cdGZ1bmN0aW9uIGV2YWx1YXRlTGlzdE9mRXhwcmVzc2lvbnMoZXhwcmVzc2lvbnMsIGNvbnRleHQpIHtcblx0ICAgIGlmIChleHByZXNzaW9ucy5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICByZXR1cm4gW1tdLCBjb250ZXh0XTtcblx0ICAgIH1cblx0ICAgIHZhciBoZWFkID0gZXZhbHVhdGUoZXhwcmVzc2lvbnNbMF0sIGNvbnRleHQpO1xuXHQgICAgdmFyIHRhaWwgPSBldmFsdWF0ZUxpc3RPZkV4cHJlc3Npb25zKGV4cHJlc3Npb25zLnNsaWNlKDEpLCBoZWFkWzFdKTtcblx0ICAgIHJldHVybiBbW2hlYWRbMF1dLmNvbmNhdCh0YWlsWzBdKSwgdGFpbFsxXV07XG5cdH1cblx0ZnVuY3Rpb24gZXZhbHVhdGVTdHJpbmcoZXhwcmVzc2lvbiwgY29udGV4dCkge1xuXHQgICAgaWYgKCFpc1N5bWJvbChleHByZXNzaW9uKSkge1xuXHQgICAgICAgIHJldHVybiBbZXhwcmVzc2lvbiwgY29udGV4dF07XG5cdCAgICB9XG5cdCAgICB2YXIgdmFsdWUgPSBnZXRTeW1ib2xWYWx1ZShleHByZXNzaW9uLCBjb250ZXh0KTtcblx0ICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgdGhyb3cgXCJVbmRlZmluZWQgc3ltYm9sIFwiICsgZXhwcmVzc2lvbjtcblx0ICAgIH1cblx0ICAgIHJldHVybiBbdmFsdWUsIGNvbnRleHRdO1xuXHR9XG5cdGZ1bmN0aW9uIGV2YWx1YXRlQXJyYXkoZXhwcmVzc2lvbiwgY29udGV4dCkge1xuXHQgICAgaWYgKGlzU3ltYm9sKGV4cHJlc3Npb25bMF0pKSB7XG5cdCAgICAgICAgdmFyIGYgPSBnZXRTeW1ib2xWYWx1ZShleHByZXNzaW9uWzBdLCBjb250ZXh0KTtcblx0ICAgICAgICBpZiAoZXhwcmVzc2lvbi5sZW5ndGggPiAxKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgICAgICAgICB0aHJvdyBcIkNhbGxpbmcgbm9uLWZ1bmN0aW9uIFwiICsgZXhwcmVzc2lvblswXTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB2YXIgYXJncyA9IFtDb2xsZWN0aW9ucy5leHRlbmQoe30sIGNvbnRleHQpXS5jb25jYXQoQ29sbGVjdGlvbnMubWFwKGV4cHJlc3Npb24uc2xpY2UoMSksIGZ1bmN0aW9uIChhcmcpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBldmFsdWF0ZShhcmcsIENvbGxlY3Rpb25zLmV4dGVuZCh7fSwgY29udGV4dCkpWzBdO1xuXHQgICAgICAgICAgICB9KSk7XG5cdCAgICAgICAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIFtmLCBjb250ZXh0XTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICBlbHNlIHtcblx0ICAgICAgICByZXR1cm4gZXZhbHVhdGVMaXN0T2ZFeHByZXNzaW9ucyhleHByZXNzaW9uLCBjb250ZXh0KTtcblx0ICAgIH1cblx0fVxuXHRmdW5jdGlvbiBldmFsdWF0ZShleHByZXNzaW9uLCBjb250ZXh0KSB7XG5cdCAgICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIpIHtcblx0ICAgICAgICByZXR1cm4gZXZhbHVhdGVTdHJpbmcoZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cdCAgICB9XG5cdCAgICBlbHNlIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJvYmplY3RcIikge1xuXHQgICAgICAgIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgQXJyYXkgJiYgZXhwcmVzc2lvbi5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBldmFsdWF0ZUFycmF5KGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBbZXhwcmVzc2lvbiwgY29udGV4dF07XG5cdH1cblxuXG4vKioqLyB9KSxcbi8qIDQyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBmYWN0b3J5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKTtcblx0dmFyIFRyYW5zcG9ydE1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gVHJhbnNwb3J0TWFuYWdlcihvcHRpb25zKSB7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0ICAgICAgICB0aGlzLmxpdmVzTGVmdCA9IHRoaXMub3B0aW9ucy5saXZlcyB8fCBJbmZpbml0eTtcblx0ICAgIH1cblx0ICAgIFRyYW5zcG9ydE1hbmFnZXIucHJvdG90eXBlLmdldEFzc2lzdGFudCA9IGZ1bmN0aW9uICh0cmFuc3BvcnQpIHtcblx0ICAgICAgICByZXR1cm4gZmFjdG9yeV8xW1wiZGVmYXVsdFwiXS5jcmVhdGVBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIodGhpcywgdHJhbnNwb3J0LCB7XG5cdCAgICAgICAgICAgIG1pblBpbmdEZWxheTogdGhpcy5vcHRpb25zLm1pblBpbmdEZWxheSxcblx0ICAgICAgICAgICAgbWF4UGluZ0RlbGF5OiB0aGlzLm9wdGlvbnMubWF4UGluZ0RlbGF5XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHQgICAgVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUuaXNBbGl2ZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5saXZlc0xlZnQgPiAwO1xuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydE1hbmFnZXIucHJvdG90eXBlLnJlcG9ydERlYXRoID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRoaXMubGl2ZXNMZWZ0IC09IDE7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIFRyYW5zcG9ydE1hbmFnZXI7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVHJhbnNwb3J0TWFuYWdlcjtcblxuXG4vKioqLyB9KSxcbi8qIDQzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBhc3Npc3RhbnRfdG9fdGhlX3RyYW5zcG9ydF9tYW5hZ2VyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KTtcblx0dmFyIGhhbmRzaGFrZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NSk7XG5cdHZhciBwdXNoZXJfYXV0aG9yaXplcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OCk7XG5cdHZhciB0aW1lbGluZV9zZW5kZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpO1xuXHR2YXIgcHJlc2VuY2VfY2hhbm5lbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MCk7XG5cdHZhciBwcml2YXRlX2NoYW5uZWxfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNTEpO1xuXHR2YXIgY2hhbm5lbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Mik7XG5cdHZhciBjb25uZWN0aW9uX21hbmFnZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNTQpO1xuXHR2YXIgY2hhbm5lbHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNTUpO1xuXHR2YXIgRmFjdG9yeSA9IHtcblx0ICAgIGNyZWF0ZUNoYW5uZWxzOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBjaGFubmVsc18xW1wiZGVmYXVsdFwiXSgpO1xuXHQgICAgfSxcblx0ICAgIGNyZWF0ZUNvbm5lY3Rpb25NYW5hZ2VyOiBmdW5jdGlvbiAoa2V5LCBvcHRpb25zKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBjb25uZWN0aW9uX21hbmFnZXJfMVtcImRlZmF1bHRcIl0oa2V5LCBvcHRpb25zKTtcblx0ICAgIH0sXG5cdCAgICBjcmVhdGVDaGFubmVsOiBmdW5jdGlvbiAobmFtZSwgcHVzaGVyKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBjaGFubmVsXzFbXCJkZWZhdWx0XCJdKG5hbWUsIHB1c2hlcik7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlUHJpdmF0ZUNoYW5uZWw6IGZ1bmN0aW9uIChuYW1lLCBwdXNoZXIpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IHByaXZhdGVfY2hhbm5lbF8xW1wiZGVmYXVsdFwiXShuYW1lLCBwdXNoZXIpO1xuXHQgICAgfSxcblx0ICAgIGNyZWF0ZVByZXNlbmNlQ2hhbm5lbDogZnVuY3Rpb24gKG5hbWUsIHB1c2hlcikge1xuXHQgICAgICAgIHJldHVybiBuZXcgcHJlc2VuY2VfY2hhbm5lbF8xW1wiZGVmYXVsdFwiXShuYW1lLCBwdXNoZXIpO1xuXHQgICAgfSxcblx0ICAgIGNyZWF0ZVRpbWVsaW5lU2VuZGVyOiBmdW5jdGlvbiAodGltZWxpbmUsIG9wdGlvbnMpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IHRpbWVsaW5lX3NlbmRlcl8xW1wiZGVmYXVsdFwiXSh0aW1lbGluZSwgb3B0aW9ucyk7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlQXV0aG9yaXplcjogZnVuY3Rpb24gKGNoYW5uZWwsIG9wdGlvbnMpIHtcblx0ICAgICAgICBpZiAob3B0aW9ucy5hdXRob3JpemVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmF1dGhvcml6ZXIoY2hhbm5lbCwgb3B0aW9ucyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBuZXcgcHVzaGVyX2F1dGhvcml6ZXJfMVtcImRlZmF1bHRcIl0oY2hhbm5lbCwgb3B0aW9ucyk7XG5cdCAgICB9LFxuXHQgICAgY3JlYXRlSGFuZHNoYWtlOiBmdW5jdGlvbiAodHJhbnNwb3J0LCBjYWxsYmFjaykge1xuXHQgICAgICAgIHJldHVybiBuZXcgaGFuZHNoYWtlXzFbXCJkZWZhdWx0XCJdKHRyYW5zcG9ydCwgY2FsbGJhY2spO1xuXHQgICAgfSxcblx0ICAgIGNyZWF0ZUFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlcjogZnVuY3Rpb24gKG1hbmFnZXIsIHRyYW5zcG9ydCwgb3B0aW9ucykge1xuXHQgICAgICAgIHJldHVybiBuZXcgYXNzaXN0YW50X3RvX3RoZV90cmFuc3BvcnRfbWFuYWdlcl8xW1wiZGVmYXVsdFwiXShtYW5hZ2VyLCB0cmFuc3BvcnQsIG9wdGlvbnMpO1xuXHQgICAgfVxuXHR9O1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZhY3Rvcnk7XG5cblxuLyoqKi8gfSksXG4vKiA0NCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgdXRpbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdHZhciBDb2xsZWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciBBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyKG1hbmFnZXIsIHRyYW5zcG9ydCwgb3B0aW9ucykge1xuXHQgICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG5cdCAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cdCAgICAgICAgdGhpcy5taW5QaW5nRGVsYXkgPSBvcHRpb25zLm1pblBpbmdEZWxheTtcblx0ICAgICAgICB0aGlzLm1heFBpbmdEZWxheSA9IG9wdGlvbnMubWF4UGluZ0RlbGF5O1xuXHQgICAgICAgIHRoaXMucGluZ0RlbGF5ID0gdW5kZWZpbmVkO1xuXHQgICAgfVxuXHQgICAgQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIG9wdGlvbnMgPSBDb2xsZWN0aW9ucy5leHRlbmQoe30sIG9wdGlvbnMsIHtcblx0ICAgICAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiB0aGlzLnBpbmdEZWxheVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy50cmFuc3BvcnQuY3JlYXRlQ29ubmVjdGlvbihuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKTtcblx0ICAgICAgICB2YXIgb3BlblRpbWVzdGFtcCA9IG51bGw7XG5cdCAgICAgICAgdmFyIG9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgY29ubmVjdGlvbi51bmJpbmQoXCJvcGVuXCIsIG9uT3Blbik7XG5cdCAgICAgICAgICAgIGNvbm5lY3Rpb24uYmluZChcImNsb3NlZFwiLCBvbkNsb3NlZCk7XG5cdCAgICAgICAgICAgIG9wZW5UaW1lc3RhbXAgPSB1dGlsXzFbXCJkZWZhdWx0XCJdLm5vdygpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgdmFyIG9uQ2xvc2VkID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcblx0ICAgICAgICAgICAgY29ubmVjdGlvbi51bmJpbmQoXCJjbG9zZWRcIiwgb25DbG9zZWQpO1xuXHQgICAgICAgICAgICBpZiAoY2xvc2VFdmVudC5jb2RlID09PSAxMDAyIHx8IGNsb3NlRXZlbnQuY29kZSA9PT0gMTAwMykge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMubWFuYWdlci5yZXBvcnREZWF0aCgpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2UgaWYgKCFjbG9zZUV2ZW50Lndhc0NsZWFuICYmIG9wZW5UaW1lc3RhbXApIHtcblx0ICAgICAgICAgICAgICAgIHZhciBsaWZlc3BhbiA9IHV0aWxfMVtcImRlZmF1bHRcIl0ubm93KCkgLSBvcGVuVGltZXN0YW1wO1xuXHQgICAgICAgICAgICAgICAgaWYgKGxpZmVzcGFuIDwgMiAqIF90aGlzLm1heFBpbmdEZWxheSkge1xuXHQgICAgICAgICAgICAgICAgICAgIF90aGlzLm1hbmFnZXIucmVwb3J0RGVhdGgoKTtcblx0ICAgICAgICAgICAgICAgICAgICBfdGhpcy5waW5nRGVsYXkgPSBNYXRoLm1heChsaWZlc3BhbiAvIDIsIF90aGlzLm1pblBpbmdEZWxheSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIGNvbm5lY3Rpb24uYmluZChcIm9wZW5cIiwgb25PcGVuKTtcblx0ICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcblx0ICAgIH07XG5cdCAgICBBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKGVudmlyb25tZW50KSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5pc0FsaXZlKCkgJiYgdGhpcy50cmFuc3BvcnQuaXNTdXBwb3J0ZWQoZW52aXJvbm1lbnQpO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXI7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyO1xuXG5cbi8qKiovIH0pLFxuLyogNDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIFByb3RvY29sID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Nik7XG5cdHZhciBjb25uZWN0aW9uXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KTtcblx0dmFyIEhhbmRzaGFrZSA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBIYW5kc2hha2UodHJhbnNwb3J0LCBjYWxsYmFjaykge1xuXHQgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuXHQgICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0ICAgICAgICB0aGlzLmJpbmRMaXN0ZW5lcnMoKTtcblx0ICAgIH1cblx0ICAgIEhhbmRzaGFrZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy51bmJpbmRMaXN0ZW5lcnMoKTtcblx0ICAgICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuXHQgICAgfTtcblx0ICAgIEhhbmRzaGFrZS5wcm90b3R5cGUuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHRoaXMub25NZXNzYWdlID0gZnVuY3Rpb24gKG0pIHtcblx0ICAgICAgICAgICAgX3RoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG5cdCAgICAgICAgICAgIHZhciByZXN1bHQ7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICByZXN1bHQgPSBQcm90b2NvbC5wcm9jZXNzSGFuZHNoYWtlKG0pO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5maW5pc2goXCJlcnJvclwiLCB7IGVycm9yOiBlIH0pO1xuXHQgICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cdCAgICAgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKHJlc3VsdC5hY3Rpb24gPT09IFwiY29ubmVjdGVkXCIpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLmZpbmlzaChcImNvbm5lY3RlZFwiLCB7XG5cdCAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbjogbmV3IGNvbm5lY3Rpb25fMVtcImRlZmF1bHRcIl0ocmVzdWx0LmlkLCBfdGhpcy50cmFuc3BvcnQpLFxuXHQgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5VGltZW91dDogcmVzdWx0LmFjdGl2aXR5VGltZW91dFxuXHQgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5maW5pc2gocmVzdWx0LmFjdGlvbiwgeyBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xuXHQgICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMub25DbG9zZWQgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuXHQgICAgICAgICAgICBfdGhpcy51bmJpbmRMaXN0ZW5lcnMoKTtcblx0ICAgICAgICAgICAgdmFyIGFjdGlvbiA9IFByb3RvY29sLmdldENsb3NlQWN0aW9uKGNsb3NlRXZlbnQpIHx8IFwiYmFja29mZlwiO1xuXHQgICAgICAgICAgICB2YXIgZXJyb3IgPSBQcm90b2NvbC5nZXRDbG9zZUVycm9yKGNsb3NlRXZlbnQpO1xuXHQgICAgICAgICAgICBfdGhpcy5maW5pc2goYWN0aW9uLCB7IGVycm9yOiBlcnJvciB9KTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMudHJhbnNwb3J0LmJpbmQoXCJtZXNzYWdlXCIsIHRoaXMub25NZXNzYWdlKTtcblx0ICAgICAgICB0aGlzLnRyYW5zcG9ydC5iaW5kKFwiY2xvc2VkXCIsIHRoaXMub25DbG9zZWQpO1xuXHQgICAgfTtcblx0ICAgIEhhbmRzaGFrZS5wcm90b3R5cGUudW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRoaXMudHJhbnNwb3J0LnVuYmluZChcIm1lc3NhZ2VcIiwgdGhpcy5vbk1lc3NhZ2UpO1xuXHQgICAgICAgIHRoaXMudHJhbnNwb3J0LnVuYmluZChcImNsb3NlZFwiLCB0aGlzLm9uQ2xvc2VkKTtcblx0ICAgIH07XG5cdCAgICBIYW5kc2hha2UucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uIChhY3Rpb24sIHBhcmFtcykge1xuXHQgICAgICAgIHRoaXMuY2FsbGJhY2soQ29sbGVjdGlvbnMuZXh0ZW5kKHsgdHJhbnNwb3J0OiB0aGlzLnRyYW5zcG9ydCwgYWN0aW9uOiBhY3Rpb24gfSwgcGFyYW1zKSk7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIEhhbmRzaGFrZTtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIYW5kc2hha2U7XG5cblxuLyoqKi8gfSksXG4vKiA0NiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRleHBvcnRzLmRlY29kZU1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgICB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpO1xuXHQgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLmRhdGEgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBwYXJhbXMuZGF0YSA9IEpTT04ucGFyc2UocGFyYW1zLmRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcGFyYW1zO1xuXHQgICAgfVxuXHQgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICB0aHJvdyB7IHR5cGU6ICdNZXNzYWdlUGFyc2VFcnJvcicsIGVycm9yOiBlLCBkYXRhOiBtZXNzYWdlLmRhdGEgfTtcblx0ICAgIH1cblx0fTtcblx0ZXhwb3J0cy5lbmNvZGVNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0ICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblx0fTtcblx0ZXhwb3J0cy5wcm9jZXNzSGFuZHNoYWtlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0ICAgIG1lc3NhZ2UgPSBleHBvcnRzLmRlY29kZU1lc3NhZ2UobWVzc2FnZSk7XG5cdCAgICBpZiAobWVzc2FnZS5ldmVudCA9PT0gXCJwdXNoZXI6Y29ubmVjdGlvbl9lc3RhYmxpc2hlZFwiKSB7XG5cdCAgICAgICAgaWYgKCFtZXNzYWdlLmRhdGEuYWN0aXZpdHlfdGltZW91dCkge1xuXHQgICAgICAgICAgICB0aHJvdyBcIk5vIGFjdGl2aXR5IHRpbWVvdXQgc3BlY2lmaWVkIGluIGhhbmRzaGFrZVwiO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBhY3Rpb246IFwiY29ubmVjdGVkXCIsXG5cdCAgICAgICAgICAgIGlkOiBtZXNzYWdlLmRhdGEuc29ja2V0X2lkLFxuXHQgICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IG1lc3NhZ2UuZGF0YS5hY3Rpdml0eV90aW1lb3V0ICogMTAwMFxuXHQgICAgICAgIH07XG5cdCAgICB9XG5cdCAgICBlbHNlIGlmIChtZXNzYWdlLmV2ZW50ID09PSBcInB1c2hlcjplcnJvclwiKSB7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmdldENsb3NlQWN0aW9uKG1lc3NhZ2UuZGF0YSksXG5cdCAgICAgICAgICAgIGVycm9yOiB0aGlzLmdldENsb3NlRXJyb3IobWVzc2FnZS5kYXRhKVxuXHQgICAgICAgIH07XG5cdCAgICB9XG5cdCAgICBlbHNlIHtcblx0ICAgICAgICB0aHJvdyBcIkludmFsaWQgaGFuZHNoYWtlXCI7XG5cdCAgICB9XG5cdH07XG5cdGV4cG9ydHMuZ2V0Q2xvc2VBY3Rpb24gPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuXHQgICAgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQwMDApIHtcblx0ICAgICAgICBpZiAoY2xvc2VFdmVudC5jb2RlID49IDEwMDIgJiYgY2xvc2VFdmVudC5jb2RlIDw9IDEwMDQpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIFwiYmFja29mZlwiO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgZWxzZSBpZiAoY2xvc2VFdmVudC5jb2RlID09PSA0MDAwKSB7XG5cdCAgICAgICAgcmV0dXJuIFwic3NsX29ubHlcIjtcblx0ICAgIH1cblx0ICAgIGVsc2UgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQxMDApIHtcblx0ICAgICAgICByZXR1cm4gXCJyZWZ1c2VkXCI7XG5cdCAgICB9XG5cdCAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPCA0MjAwKSB7XG5cdCAgICAgICAgcmV0dXJuIFwiYmFja29mZlwiO1xuXHQgICAgfVxuXHQgICAgZWxzZSBpZiAoY2xvc2VFdmVudC5jb2RlIDwgNDMwMCkge1xuXHQgICAgICAgIHJldHVybiBcInJldHJ5XCI7XG5cdCAgICB9XG5cdCAgICBlbHNlIHtcblx0ICAgICAgICByZXR1cm4gXCJyZWZ1c2VkXCI7XG5cdCAgICB9XG5cdH07XG5cdGV4cG9ydHMuZ2V0Q2xvc2VFcnJvciA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG5cdCAgICBpZiAoY2xvc2VFdmVudC5jb2RlICE9PSAxMDAwICYmIGNsb3NlRXZlbnQuY29kZSAhPT0gMTAwMSkge1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIHR5cGU6ICdQdXNoZXJFcnJvcicsXG5cdCAgICAgICAgICAgIGRhdGE6IHtcblx0ICAgICAgICAgICAgICAgIGNvZGU6IGNsb3NlRXZlbnQuY29kZSxcblx0ICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNsb3NlRXZlbnQucmVhc29uIHx8IGNsb3NlRXZlbnQubWVzc2FnZVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHQgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHR9O1xuXG5cbi8qKiovIH0pLFxuLyogNDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuXHQgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG5cdCAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cblx0ICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcblx0fTtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIGRpc3BhdGNoZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXHR2YXIgUHJvdG9jb2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2KTtcblx0dmFyIGxvZ2dlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0dmFyIENvbm5lY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuXHQgICAgX19leHRlbmRzKENvbm5lY3Rpb24sIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBDb25uZWN0aW9uKGlkLCB0cmFuc3BvcnQpIHtcblx0ICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcblx0ICAgICAgICB0aGlzLmlkID0gaWQ7XG5cdCAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cdCAgICAgICAgdGhpcy5hY3Rpdml0eVRpbWVvdXQgPSB0cmFuc3BvcnQuYWN0aXZpdHlUaW1lb3V0O1xuXHQgICAgICAgIHRoaXMuYmluZExpc3RlbmVycygpO1xuXHQgICAgfVxuXHQgICAgQ29ubmVjdGlvbi5wcm90b3R5cGUuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5oYW5kbGVzQWN0aXZpdHlDaGVja3MoKTtcblx0ICAgIH07XG5cdCAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChkYXRhKTtcblx0ICAgIH07XG5cdCAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kX2V2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEsIGNoYW5uZWwpIHtcblx0ICAgICAgICB2YXIgbWVzc2FnZSA9IHsgZXZlbnQ6IG5hbWUsIGRhdGE6IGRhdGEgfTtcblx0ICAgICAgICBpZiAoY2hhbm5lbCkge1xuXHQgICAgICAgICAgICBtZXNzYWdlLmNoYW5uZWwgPSBjaGFubmVsO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBsb2dnZXJfMVtcImRlZmF1bHRcIl0uZGVidWcoJ0V2ZW50IHNlbnQnLCBtZXNzYWdlKTtcblx0ICAgICAgICByZXR1cm4gdGhpcy5zZW5kKFByb3RvY29sLmVuY29kZU1lc3NhZ2UobWVzc2FnZSkpO1xuXHQgICAgfTtcblx0ICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0LnN1cHBvcnRzUGluZygpKSB7XG5cdCAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnBpbmcoKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHRoaXMuc2VuZF9ldmVudCgncHVzaGVyOnBpbmcnLCB7fSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cdCAgICB9O1xuXHQgICAgQ29ubmVjdGlvbi5wcm90b3R5cGUuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHZhciBsaXN0ZW5lcnMgPSB7XG5cdCAgICAgICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uIChtKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZTtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFByb3RvY29sLmRlY29kZU1lc3NhZ2UobSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnTWVzc2FnZVBhcnNlRXJyb3InLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbS5kYXRhXG5cdCAgICAgICAgICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAobWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbG9nZ2VyXzFbXCJkZWZhdWx0XCJdLmRlYnVnKCdFdmVudCByZWNkJywgbWVzc2FnZSk7XG5cdCAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtZXNzYWdlLmV2ZW50KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2hlcjplcnJvcic6XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIHsgdHlwZTogJ1B1c2hlckVycm9yJywgZGF0YTogbWVzc2FnZS5kYXRhIH0pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2hlcjpwaW5nJzpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoXCJwaW5nXCIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2hlcjpwb25nJzpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoXCJwb25nXCIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ21lc3NhZ2UnLCBtZXNzYWdlKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgYWN0aXZpdHk6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoXCJhY3Rpdml0eVwiKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuZW1pdChcImVycm9yXCIsIHsgdHlwZTogXCJXZWJTb2NrZXRFcnJvclwiLCBlcnJvcjogZXJyb3IgfSk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGNsb3NlZDogZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcblx0ICAgICAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuXHQgICAgICAgICAgICAgICAgaWYgKGNsb3NlRXZlbnQgJiYgY2xvc2VFdmVudC5jb2RlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQ2xvc2VFdmVudChjbG9zZUV2ZW50KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zcG9ydCA9IG51bGw7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KFwiY2xvc2VkXCIpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB2YXIgdW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBDb2xsZWN0aW9ucy5vYmplY3RBcHBseShsaXN0ZW5lcnMsIGZ1bmN0aW9uIChsaXN0ZW5lciwgZXZlbnQpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zcG9ydC51bmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBDb2xsZWN0aW9ucy5vYmplY3RBcHBseShsaXN0ZW5lcnMsIGZ1bmN0aW9uIChsaXN0ZW5lciwgZXZlbnQpIHtcblx0ICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5oYW5kbGVDbG9zZUV2ZW50ID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcblx0ICAgICAgICB2YXIgYWN0aW9uID0gUHJvdG9jb2wuZ2V0Q2xvc2VBY3Rpb24oY2xvc2VFdmVudCk7XG5cdCAgICAgICAgdmFyIGVycm9yID0gUHJvdG9jb2wuZ2V0Q2xvc2VFcnJvcihjbG9zZUV2ZW50KTtcblx0ICAgICAgICBpZiAoZXJyb3IpIHtcblx0ICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKGFjdGlvbikge1xuXHQgICAgICAgICAgICB0aGlzLmVtaXQoYWN0aW9uKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIENvbm5lY3Rpb247XG5cdH0oZGlzcGF0Y2hlcl8xW1wiZGVmYXVsdFwiXSkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IENvbm5lY3Rpb247XG5cblxuLyoqKi8gfSksXG4vKiA0OCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgcnVudGltZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIFB1c2hlckF1dGhvcml6ZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gUHVzaGVyQXV0aG9yaXplcihjaGFubmVsLCBvcHRpb25zKSB7XG5cdCAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcblx0ICAgICAgICB2YXIgYXV0aFRyYW5zcG9ydCA9IG9wdGlvbnMuYXV0aFRyYW5zcG9ydDtcblx0ICAgICAgICBpZiAodHlwZW9mIHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uZ2V0QXV0aG9yaXplcnMoKVthdXRoVHJhbnNwb3J0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICB0aHJvdyBcIidcIiArIGF1dGhUcmFuc3BvcnQgKyBcIicgaXMgbm90IGEgcmVjb2duaXplZCBhdXRoIHRyYW5zcG9ydFwiO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLnR5cGUgPSBhdXRoVHJhbnNwb3J0O1xuXHQgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdCAgICAgICAgdGhpcy5hdXRoT3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS5hdXRoIHx8IHt9O1xuXHQgICAgfVxuXHQgICAgUHVzaGVyQXV0aG9yaXplci5wcm90b3R5cGUuY29tcG9zZVF1ZXJ5ID0gZnVuY3Rpb24gKHNvY2tldElkKSB7XG5cdCAgICAgICAgdmFyIHF1ZXJ5ID0gJ3NvY2tldF9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2tldElkKSArXG5cdCAgICAgICAgICAgICcmY2hhbm5lbF9uYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jaGFubmVsLm5hbWUpO1xuXHQgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5hdXRoT3B0aW9ucy5wYXJhbXMpIHtcblx0ICAgICAgICAgICAgcXVlcnkgKz0gXCImXCIgKyBlbmNvZGVVUklDb21wb25lbnQoaSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmF1dGhPcHRpb25zLnBhcmFtc1tpXSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBxdWVyeTtcblx0ICAgIH07XG5cdCAgICBQdXNoZXJBdXRob3JpemVyLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgUHVzaGVyQXV0aG9yaXplci5hdXRob3JpemVycyA9IFB1c2hlckF1dGhvcml6ZXIuYXV0aG9yaXplcnMgfHwgcnVudGltZV8xW1wiZGVmYXVsdFwiXS5nZXRBdXRob3JpemVycygpO1xuXHQgICAgICAgIHJldHVybiBQdXNoZXJBdXRob3JpemVyLmF1dGhvcml6ZXJzW3RoaXMudHlwZV0uY2FsbCh0aGlzLCBydW50aW1lXzFbXCJkZWZhdWx0XCJdLCBzb2NrZXRJZCwgY2FsbGJhY2spO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBQdXNoZXJBdXRob3JpemVyO1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFB1c2hlckF1dGhvcml6ZXI7XG5cblxuLyoqKi8gfSksXG4vKiA0OSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgcnVudGltZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIFRpbWVsaW5lU2VuZGVyID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFRpbWVsaW5lU2VuZGVyKHRpbWVsaW5lLCBvcHRpb25zKSB7XG5cdCAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdCAgICB9XG5cdCAgICBUaW1lbGluZVNlbmRlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChlbmNyeXB0ZWQsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgaWYgKHRoaXMudGltZWxpbmUuaXNFbXB0eSgpKSB7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy50aW1lbGluZS5zZW5kKHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uVGltZWxpbmVUcmFuc3BvcnQuZ2V0QWdlbnQodGhpcywgZW5jcnlwdGVkKSwgY2FsbGJhY2spO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBUaW1lbGluZVNlbmRlcjtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUaW1lbGluZVNlbmRlcjtcblxuXG4vKioqLyB9KSxcbi8qIDUwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcblx0ICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuXHQgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG5cdCAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG5cdH07XG5cdHZhciBwcml2YXRlX2NoYW5uZWxfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNTEpO1xuXHR2YXIgbG9nZ2VyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHR2YXIgbWVtYmVyc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Myk7XG5cdHZhciB1cmxfc3RvcmVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXHR2YXIgUHJlc2VuY2VDaGFubmVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcblx0ICAgIF9fZXh0ZW5kcyhQcmVzZW5jZUNoYW5uZWwsIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBQcmVzZW5jZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG5cdCAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgbmFtZSwgcHVzaGVyKTtcblx0ICAgICAgICB0aGlzLm1lbWJlcnMgPSBuZXcgbWVtYmVyc18xW1wiZGVmYXVsdFwiXSgpO1xuXHQgICAgfVxuXHQgICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICBfc3VwZXIucHJvdG90eXBlLmF1dGhvcml6ZS5jYWxsKHRoaXMsIHNvY2tldElkLCBmdW5jdGlvbiAoZXJyb3IsIGF1dGhEYXRhKSB7XG5cdCAgICAgICAgICAgIGlmICghZXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChhdXRoRGF0YS5jaGFubmVsX2RhdGEgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmVfMVtcImRlZmF1bHRcIl0uYnVpbGRMb2dTdWZmaXgoXCJhdXRoZW50aWNhdGlvbkVuZHBvaW50XCIpO1xuXHQgICAgICAgICAgICAgICAgICAgIGxvZ2dlcl8xW1wiZGVmYXVsdFwiXS53YXJuKChcIkludmFsaWQgYXV0aCByZXNwb25zZSBmb3IgY2hhbm5lbCAnXCIgKyBfdGhpcy5uYW1lICsgXCInLFwiKSArXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIChcImV4cGVjdGVkICdjaGFubmVsX2RhdGEnIGZpZWxkLiBcIiArIHN1ZmZpeCkpO1xuXHQgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKFwiSW52YWxpZCBhdXRoIHJlc3BvbnNlXCIpO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHZhciBjaGFubmVsRGF0YSA9IEpTT04ucGFyc2UoYXV0aERhdGEuY2hhbm5lbF9kYXRhKTtcblx0ICAgICAgICAgICAgICAgIF90aGlzLm1lbWJlcnMuc2V0TXlJRChjaGFubmVsRGF0YS51c2VyX2lkKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgYXV0aERhdGEpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIFByZXNlbmNlQ2hhbm5lbC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblx0ICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XG5cdCAgICAgICAgICAgIGNhc2UgXCJwdXNoZXJfaW50ZXJuYWw6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZFwiOlxuXHQgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWVtYmVycy5vblN1YnNjcmlwdGlvbihkYXRhKTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZFwiLCB0aGlzLm1lbWJlcnMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIGNhc2UgXCJwdXNoZXJfaW50ZXJuYWw6bWVtYmVyX2FkZGVkXCI6XG5cdCAgICAgICAgICAgICAgICB2YXIgYWRkZWRNZW1iZXIgPSB0aGlzLm1lbWJlcnMuYWRkTWVtYmVyKGRhdGEpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdwdXNoZXI6bWVtYmVyX2FkZGVkJywgYWRkZWRNZW1iZXIpO1xuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIGNhc2UgXCJwdXNoZXJfaW50ZXJuYWw6bWVtYmVyX3JlbW92ZWRcIjpcblx0ICAgICAgICAgICAgICAgIHZhciByZW1vdmVkTWVtYmVyID0gdGhpcy5tZW1iZXJzLnJlbW92ZU1lbWJlcihkYXRhKTtcblx0ICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkTWVtYmVyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdwdXNoZXI6bWVtYmVyX3JlbW92ZWQnLCByZW1vdmVkTWVtYmVyKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICBkZWZhdWx0OlxuXHQgICAgICAgICAgICAgICAgcHJpdmF0ZV9jaGFubmVsXzFbXCJkZWZhdWx0XCJdLnByb3RvdHlwZS5oYW5kbGVFdmVudC5jYWxsKHRoaXMsIGV2ZW50LCBkYXRhKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRoaXMubWVtYmVycy5yZXNldCgpO1xuXHQgICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGlzY29ubmVjdC5jYWxsKHRoaXMpO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBQcmVzZW5jZUNoYW5uZWw7XG5cdH0ocHJpdmF0ZV9jaGFubmVsXzFbXCJkZWZhdWx0XCJdKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUHJlc2VuY2VDaGFubmVsO1xuXG5cbi8qKiovIH0pLFxuLyogNTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuXHQgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG5cdCAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cblx0ICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcblx0fTtcblx0dmFyIGZhY3RvcnlfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xuXHR2YXIgY2hhbm5lbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Mik7XG5cdHZhciBQcml2YXRlQ2hhbm5lbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoUHJpdmF0ZUNoYW5uZWwsIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBQcml2YXRlQ2hhbm5lbCgpIHtcblx0ICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgIH1cblx0ICAgIFByaXZhdGVDaGFubmVsLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIGF1dGhvcml6ZXIgPSBmYWN0b3J5XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUF1dGhvcml6ZXIodGhpcywgdGhpcy5wdXNoZXIuY29uZmlnKTtcblx0ICAgICAgICByZXR1cm4gYXV0aG9yaXplci5hdXRob3JpemUoc29ja2V0SWQsIGNhbGxiYWNrKTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gUHJpdmF0ZUNoYW5uZWw7XG5cdH0oY2hhbm5lbF8xW1wiZGVmYXVsdFwiXSkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFByaXZhdGVDaGFubmVsO1xuXG5cbi8qKiovIH0pLFxuLyogNTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuXHQgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG5cdCAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cblx0ICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcblx0fTtcblx0dmFyIGRpc3BhdGNoZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXHR2YXIgRXJyb3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSk7XG5cdHZhciBsb2dnZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdHZhciBDaGFubmVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcblx0ICAgIF9fZXh0ZW5kcyhDaGFubmVsLCBfc3VwZXIpO1xuXHQgICAgZnVuY3Rpb24gQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcblx0ICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblx0ICAgICAgICAgICAgbG9nZ2VyXzFbXCJkZWZhdWx0XCJdLmRlYnVnKCdObyBjYWxsYmFja3Mgb24gJyArIG5hbWUgKyAnIGZvciAnICsgZXZlbnQpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG5cdCAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG5cdCAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gZmFsc2U7XG5cdCAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG5cdCAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQgPSBmYWxzZTtcblx0ICAgIH1cblx0ICAgIENoYW5uZWwucHJvdG90eXBlLmF1dGhvcml6ZSA9IGZ1bmN0aW9uIChzb2NrZXRJZCwgY2FsbGJhY2spIHtcblx0ICAgICAgICByZXR1cm4gY2FsbGJhY2soZmFsc2UsIHt9KTtcblx0ICAgIH07XG5cdCAgICBDaGFubmVsLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG5cdCAgICAgICAgaWYgKGV2ZW50LmluZGV4T2YoXCJjbGllbnQtXCIpICE9PSAwKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcnMuQmFkRXZlbnROYW1lKFwiRXZlbnQgJ1wiICsgZXZlbnQgKyBcIicgZG9lcyBub3Qgc3RhcnQgd2l0aCAnY2xpZW50LSdcIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiB0aGlzLnB1c2hlci5zZW5kX2V2ZW50KGV2ZW50LCBkYXRhLCB0aGlzLm5hbWUpO1xuXHQgICAgfTtcblx0ICAgIENoYW5uZWwucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gZmFsc2U7XG5cdCAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG5cdCAgICB9O1xuXHQgICAgQ2hhbm5lbC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblx0ICAgICAgICBpZiAoZXZlbnQuaW5kZXhPZihcInB1c2hlcl9pbnRlcm5hbDpcIikgPT09IDApIHtcblx0ICAgICAgICAgICAgaWYgKGV2ZW50ID09PSBcInB1c2hlcl9pbnRlcm5hbDpzdWJzY3JpcHRpb25fc3VjY2VlZGVkXCIpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZFwiLCBkYXRhKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCBkYXRhKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgQ2hhbm5lbC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlZCkge1xuXHQgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IHRydWU7XG5cdCAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQgPSBmYWxzZTtcblx0ICAgICAgICB0aGlzLmF1dGhvcml6ZSh0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZCwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG5cdCAgICAgICAgICAgIGlmIChlcnJvcikge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlRXZlbnQoJ3B1c2hlcjpzdWJzY3JpcHRpb25fZXJyb3InLCBkYXRhKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnB1c2hlci5zZW5kX2V2ZW50KCdwdXNoZXI6c3Vic2NyaWJlJywge1xuXHQgICAgICAgICAgICAgICAgICAgIGF1dGg6IGRhdGEuYXV0aCxcblx0ICAgICAgICAgICAgICAgICAgICBjaGFubmVsX2RhdGE6IGRhdGEuY2hhbm5lbF9kYXRhLFxuXHQgICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLm5hbWVcblx0ICAgICAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHQgICAgQ2hhbm5lbC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gZmFsc2U7XG5cdCAgICAgICAgdGhpcy5wdXNoZXIuc2VuZF9ldmVudCgncHVzaGVyOnVuc3Vic2NyaWJlJywge1xuXHQgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICBDaGFubmVsLnByb3RvdHlwZS5jYW5jZWxTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQgPSB0cnVlO1xuXHQgICAgfTtcblx0ICAgIENoYW5uZWwucHJvdG90eXBlLnJlaW5zdGF0ZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCA9IGZhbHNlO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBDaGFubmVsO1xuXHR9KGRpc3BhdGNoZXJfMVtcImRlZmF1bHRcIl0pKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDaGFubmVsO1xuXG5cbi8qKiovIH0pLFxuLyogNTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIE1lbWJlcnMgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gTWVtYmVycygpIHtcblx0ICAgICAgICB0aGlzLnJlc2V0KCk7XG5cdCAgICB9XG5cdCAgICBNZW1iZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaWQpIHtcblx0ICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMubWVtYmVycywgaWQpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgICAgICBpZDogaWQsXG5cdCAgICAgICAgICAgICAgICBpbmZvOiB0aGlzLm1lbWJlcnNbaWRdXG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgTWVtYmVycy5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgQ29sbGVjdGlvbnMub2JqZWN0QXBwbHkodGhpcy5tZW1iZXJzLCBmdW5jdGlvbiAobWVtYmVyLCBpZCkge1xuXHQgICAgICAgICAgICBjYWxsYmFjayhfdGhpcy5nZXQoaWQpKTtcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICBNZW1iZXJzLnByb3RvdHlwZS5zZXRNeUlEID0gZnVuY3Rpb24gKGlkKSB7XG5cdCAgICAgICAgdGhpcy5teUlEID0gaWQ7XG5cdCAgICB9O1xuXHQgICAgTWVtYmVycy5wcm90b3R5cGUub25TdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uRGF0YSkge1xuXHQgICAgICAgIHRoaXMubWVtYmVycyA9IHN1YnNjcmlwdGlvbkRhdGEucHJlc2VuY2UuaGFzaDtcblx0ICAgICAgICB0aGlzLmNvdW50ID0gc3Vic2NyaXB0aW9uRGF0YS5wcmVzZW5jZS5jb3VudDtcblx0ICAgICAgICB0aGlzLm1lID0gdGhpcy5nZXQodGhpcy5teUlEKTtcblx0ICAgIH07XG5cdCAgICBNZW1iZXJzLnByb3RvdHlwZS5hZGRNZW1iZXIgPSBmdW5jdGlvbiAobWVtYmVyRGF0YSkge1xuXHQgICAgICAgIGlmICh0aGlzLmdldChtZW1iZXJEYXRhLnVzZXJfaWQpID09PSBudWxsKSB7XG5cdCAgICAgICAgICAgIHRoaXMuY291bnQrKztcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy5tZW1iZXJzW21lbWJlckRhdGEudXNlcl9pZF0gPSBtZW1iZXJEYXRhLnVzZXJfaW5mbztcblx0ICAgICAgICByZXR1cm4gdGhpcy5nZXQobWVtYmVyRGF0YS51c2VyX2lkKTtcblx0ICAgIH07XG5cdCAgICBNZW1iZXJzLnByb3RvdHlwZS5yZW1vdmVNZW1iZXIgPSBmdW5jdGlvbiAobWVtYmVyRGF0YSkge1xuXHQgICAgICAgIHZhciBtZW1iZXIgPSB0aGlzLmdldChtZW1iZXJEYXRhLnVzZXJfaWQpO1xuXHQgICAgICAgIGlmIChtZW1iZXIpIHtcblx0ICAgICAgICAgICAgZGVsZXRlIHRoaXMubWVtYmVyc1ttZW1iZXJEYXRhLnVzZXJfaWRdO1xuXHQgICAgICAgICAgICB0aGlzLmNvdW50LS07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBtZW1iZXI7XG5cdCAgICB9O1xuXHQgICAgTWVtYmVycy5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5tZW1iZXJzID0ge307XG5cdCAgICAgICAgdGhpcy5jb3VudCA9IDA7XG5cdCAgICAgICAgdGhpcy5teUlEID0gbnVsbDtcblx0ICAgICAgICB0aGlzLm1lID0gbnVsbDtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gTWVtYmVycztcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBNZW1iZXJzO1xuXG5cbi8qKiovIH0pLFxuLyogNTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuXHQgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG5cdCAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cblx0ICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcblx0fTtcblx0dmFyIGRpc3BhdGNoZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXHR2YXIgdGltZXJzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblx0dmFyIGxvZ2dlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIHJ1bnRpbWVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBDb25uZWN0aW9uTWFuYWdlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG5cdCAgICBfX2V4dGVuZHMoQ29ubmVjdGlvbk1hbmFnZXIsIF9zdXBlcik7XG5cdCAgICBmdW5jdGlvbiBDb25uZWN0aW9uTWFuYWdlcihrZXksIG9wdGlvbnMpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuXHQgICAgICAgIHRoaXMua2V5ID0ga2V5O1xuXHQgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdCAgICAgICAgdGhpcy5zdGF0ZSA9IFwiaW5pdGlhbGl6ZWRcIjtcblx0ICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuXHQgICAgICAgIHRoaXMuZW5jcnlwdGVkID0gISFvcHRpb25zLmVuY3J5cHRlZDtcblx0ICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5vcHRpb25zLnRpbWVsaW5lO1xuXHQgICAgICAgIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrcyA9IHRoaXMuYnVpbGRDb25uZWN0aW9uQ2FsbGJhY2tzKCk7XG5cdCAgICAgICAgdGhpcy5lcnJvckNhbGxiYWNrcyA9IHRoaXMuYnVpbGRFcnJvckNhbGxiYWNrcygpO1xuXHQgICAgICAgIHRoaXMuaGFuZHNoYWtlQ2FsbGJhY2tzID0gdGhpcy5idWlsZEhhbmRzaGFrZUNhbGxiYWNrcyh0aGlzLmVycm9yQ2FsbGJhY2tzKTtcblx0ICAgICAgICB2YXIgTmV0d29yayA9IHJ1bnRpbWVfMVtcImRlZmF1bHRcIl0uZ2V0TmV0d29yaygpO1xuXHQgICAgICAgIE5ldHdvcmsuYmluZChcIm9ubGluZVwiLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIF90aGlzLnRpbWVsaW5lLmluZm8oeyBuZXRpbmZvOiBcIm9ubGluZVwiIH0pO1xuXHQgICAgICAgICAgICBpZiAoX3RoaXMuc3RhdGUgPT09IFwiY29ubmVjdGluZ1wiIHx8IF90aGlzLnN0YXRlID09PSBcInVuYXZhaWxhYmxlXCIpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgICBOZXR3b3JrLmJpbmQoXCJvZmZsaW5lXCIsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgX3RoaXMudGltZWxpbmUuaW5mbyh7IG5ldGluZm86IFwib2ZmbGluZVwiIH0pO1xuXHQgICAgICAgICAgICBpZiAoX3RoaXMuY29ubmVjdGlvbikge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuc2VuZEFjdGl2aXR5Q2hlY2soKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHRoaXMudXBkYXRlU3RyYXRlZ3koKTtcblx0ICAgIH1cblx0ICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24gfHwgdGhpcy5ydW5uZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoIXRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKSkge1xuXHQgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKFwiZmFpbGVkXCIpO1xuXHQgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoXCJjb25uZWN0aW5nXCIpO1xuXHQgICAgICAgIHRoaXMuc3RhcnRDb25uZWN0aW5nKCk7XG5cdCAgICAgICAgdGhpcy5zZXRVbmF2YWlsYWJsZVRpbWVyKCk7XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24pIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zZW5kKGRhdGEpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2VuZF9ldmVudCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhLCBjaGFubmVsKSB7XG5cdCAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnNlbmRfZXZlbnQobmFtZSwgZGF0YSwgY2hhbm5lbCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRoaXMuZGlzY29ubmVjdEludGVybmFsbHkoKTtcblx0ICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKFwiZGlzY29ubmVjdGVkXCIpO1xuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5pc0VuY3J5cHRlZCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5lbmNyeXB0ZWQ7XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnN0YXJ0Q29ubmVjdGluZyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG5cdCAgICAgICAgICAgIGlmIChlcnJvcikge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMucnVubmVyID0gX3RoaXMuc3RyYXRlZ3kuY29ubmVjdCgwLCBjYWxsYmFjayk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoaGFuZHNoYWtlLmFjdGlvbiA9PT0gXCJlcnJvclwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdChcImVycm9yXCIsIHsgdHlwZTogXCJIYW5kc2hha2VFcnJvclwiLCBlcnJvcjogaGFuZHNoYWtlLmVycm9yIH0pO1xuXHQgICAgICAgICAgICAgICAgICAgIF90aGlzLnRpbWVsaW5lLmVycm9yKHsgaGFuZHNoYWtlRXJyb3I6IGhhbmRzaGFrZS5lcnJvciB9KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIF90aGlzLmFib3J0Q29ubmVjdGluZygpO1xuXHQgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRzaGFrZUNhbGxiYWNrc1toYW5kc2hha2UuYWN0aW9uXShoYW5kc2hha2UpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLnJ1bm5lciA9IHRoaXMuc3RyYXRlZ3kuY29ubmVjdCgwLCBjYWxsYmFjayk7XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmFib3J0Q29ubmVjdGluZyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAodGhpcy5ydW5uZXIpIHtcblx0ICAgICAgICAgICAgdGhpcy5ydW5uZXIuYWJvcnQoKTtcblx0ICAgICAgICAgICAgdGhpcy5ydW5uZXIgPSBudWxsO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuZGlzY29ubmVjdEludGVybmFsbHkgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5hYm9ydENvbm5lY3RpbmcoKTtcblx0ICAgICAgICB0aGlzLmNsZWFyUmV0cnlUaW1lcigpO1xuXHQgICAgICAgIHRoaXMuY2xlYXJVbmF2YWlsYWJsZVRpbWVyKCk7XG5cdCAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuXHQgICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuYWJhbmRvbkNvbm5lY3Rpb24oKTtcblx0ICAgICAgICAgICAgY29ubmVjdGlvbi5jbG9zZSgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUudXBkYXRlU3RyYXRlZ3kgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5zdHJhdGVneSA9IHRoaXMub3B0aW9ucy5nZXRTdHJhdGVneSh7XG5cdCAgICAgICAgICAgIGtleTogdGhpcy5rZXksXG5cdCAgICAgICAgICAgIHRpbWVsaW5lOiB0aGlzLnRpbWVsaW5lLFxuXHQgICAgICAgICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkXG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnJldHJ5SW4gPSBmdW5jdGlvbiAoZGVsYXkpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh7IGFjdGlvbjogXCJyZXRyeVwiLCBkZWxheTogZGVsYXkgfSk7XG5cdCAgICAgICAgaWYgKGRlbGF5ID4gMCkge1xuXHQgICAgICAgICAgICB0aGlzLmVtaXQoXCJjb25uZWN0aW5nX2luXCIsIE1hdGgucm91bmQoZGVsYXkgLyAxMDAwKSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMucmV0cnlUaW1lciA9IG5ldyB0aW1lcnNfMS5PbmVPZmZUaW1lcihkZWxheSB8fCAwLCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIF90aGlzLmRpc2Nvbm5lY3RJbnRlcm5hbGx5KCk7XG5cdCAgICAgICAgICAgIF90aGlzLmNvbm5lY3QoKTtcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuY2xlYXJSZXRyeVRpbWVyID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLnJldHJ5VGltZXIpIHtcblx0ICAgICAgICAgICAgdGhpcy5yZXRyeVRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcblx0ICAgICAgICAgICAgdGhpcy5yZXRyeVRpbWVyID0gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnNldFVuYXZhaWxhYmxlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICB0aGlzLnVuYXZhaWxhYmxlVGltZXIgPSBuZXcgdGltZXJzXzEuT25lT2ZmVGltZXIodGhpcy5vcHRpb25zLnVuYXZhaWxhYmxlVGltZW91dCwgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0ZShcInVuYXZhaWxhYmxlXCIpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5jbGVhclVuYXZhaWxhYmxlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMudW5hdmFpbGFibGVUaW1lcikge1xuXHQgICAgICAgICAgICB0aGlzLnVuYXZhaWxhYmxlVGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2VuZEFjdGl2aXR5Q2hlY2sgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICB0aGlzLnN0b3BBY3Rpdml0eUNoZWNrKCk7XG5cdCAgICAgICAgdGhpcy5jb25uZWN0aW9uLnBpbmcoKTtcblx0ICAgICAgICB0aGlzLmFjdGl2aXR5VGltZXIgPSBuZXcgdGltZXJzXzEuT25lT2ZmVGltZXIodGhpcy5vcHRpb25zLnBvbmdUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIF90aGlzLnRpbWVsaW5lLmVycm9yKHsgcG9uZ190aW1lZF9vdXQ6IF90aGlzLm9wdGlvbnMucG9uZ1RpbWVvdXQgfSk7XG5cdCAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWN0aXZpdHlDaGVjayA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHRoaXMuc3RvcEFjdGl2aXR5Q2hlY2soKTtcblx0ICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uICYmICF0aGlzLmNvbm5lY3Rpb24uaGFuZGxlc0FjdGl2aXR5Q2hlY2tzKCkpIHtcblx0ICAgICAgICAgICAgdGhpcy5hY3Rpdml0eVRpbWVyID0gbmV3IHRpbWVyc18xLk9uZU9mZlRpbWVyKHRoaXMuYWN0aXZpdHlUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5zZW5kQWN0aXZpdHlDaGVjaygpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnN0b3BBY3Rpdml0eUNoZWNrID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICh0aGlzLmFjdGl2aXR5VGltZXIpIHtcblx0ICAgICAgICAgICAgdGhpcy5hY3Rpdml0eVRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmJ1aWxkQ29ubmVjdGlvbkNhbGxiYWNrcyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2aXR5Q2hlY2soKTtcblx0ICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ21lc3NhZ2UnLCBtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgcGluZzogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuc2VuZF9ldmVudCgncHVzaGVyOnBvbmcnLCB7fSk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGFjdGl2aXR5OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2aXR5Q2hlY2soKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuZW1pdChcImVycm9yXCIsIHsgdHlwZTogXCJXZWJTb2NrZXRFcnJvclwiLCBlcnJvcjogZXJyb3IgfSk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGNsb3NlZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuYWJhbmRvbkNvbm5lY3Rpb24oKTtcblx0ICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zaG91bGRSZXRyeSgpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgX3RoaXMucmV0cnlJbigxMDAwKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmJ1aWxkSGFuZHNoYWtlQ2FsbGJhY2tzID0gZnVuY3Rpb24gKGVycm9yQ2FsbGJhY2tzKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICByZXR1cm4gQ29sbGVjdGlvbnMuZXh0ZW5kKHt9LCBlcnJvckNhbGxiYWNrcywge1xuXHQgICAgICAgICAgICBjb25uZWN0ZWQ6IGZ1bmN0aW9uIChoYW5kc2hha2UpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2aXR5VGltZW91dCA9IE1hdGgubWluKF90aGlzLm9wdGlvbnMuYWN0aXZpdHlUaW1lb3V0LCBoYW5kc2hha2UuYWN0aXZpdHlUaW1lb3V0LCBoYW5kc2hha2UuY29ubmVjdGlvbi5hY3Rpdml0eVRpbWVvdXQgfHwgSW5maW5pdHkpO1xuXHQgICAgICAgICAgICAgICAgX3RoaXMuY2xlYXJVbmF2YWlsYWJsZVRpbWVyKCk7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5zZXRDb25uZWN0aW9uKGhhbmRzaGFrZS5jb25uZWN0aW9uKTtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnNvY2tldF9pZCA9IF90aGlzLmNvbm5lY3Rpb24uaWQ7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0ZShcImNvbm5lY3RlZFwiLCB7IHNvY2tldF9pZDogX3RoaXMuc29ja2V0X2lkIH0pO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICB9O1xuXHQgICAgO1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmJ1aWxkRXJyb3JDYWxsYmFja3MgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICB2YXIgd2l0aEVycm9yRW1pdHRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3VsdCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoXCJlcnJvclwiLCB7IHR5cGU6IFwiV2ViU29ja2V0RXJyb3JcIiwgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfTtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBzc2xfb25seTogd2l0aEVycm9yRW1pdHRlZChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5lbmNyeXB0ZWQgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlU3RyYXRlZ3koKTtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG5cdCAgICAgICAgICAgIH0pLFxuXHQgICAgICAgICAgICByZWZ1c2VkOiB3aXRoRXJyb3JFbWl0dGVkKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLmRpc2Nvbm5lY3QoKTtcblx0ICAgICAgICAgICAgfSksXG5cdCAgICAgICAgICAgIGJhY2tvZmY6IHdpdGhFcnJvckVtaXR0ZWQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgX3RoaXMucmV0cnlJbigxMDAwKTtcblx0ICAgICAgICAgICAgfSksXG5cdCAgICAgICAgICAgIHJldHJ5OiB3aXRoRXJyb3JFbWl0dGVkKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG5cdCAgICAgICAgICAgIH0pXG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdCAgICA7XG5cdCAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2V0Q29ubmVjdGlvbiA9IGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XG5cdCAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcblx0ICAgICAgICBmb3IgKHZhciBldmVudCBpbiB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3MpIHtcblx0ICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoZXZlbnQsIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrc1tldmVudF0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB0aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuXHQgICAgfTtcblx0ICAgIDtcblx0ICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5hYmFuZG9uQ29ubmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGlvbikge1xuXHQgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMuc3RvcEFjdGl2aXR5Q2hlY2soKTtcblx0ICAgICAgICBmb3IgKHZhciBldmVudCBpbiB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3MpIHtcblx0ICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnVuYmluZChldmVudCwgdGhpcy5jb25uZWN0aW9uQ2FsbGJhY2tzW2V2ZW50XSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uO1xuXHQgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG5cdCAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XG5cdCAgICB9O1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKG5ld1N0YXRlLCBkYXRhKSB7XG5cdCAgICAgICAgdmFyIHByZXZpb3VzU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHQgICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcblx0ICAgICAgICBpZiAocHJldmlvdXNTdGF0ZSAhPT0gbmV3U3RhdGUpIHtcblx0ICAgICAgICAgICAgdmFyIG5ld1N0YXRlRGVzY3JpcHRpb24gPSBuZXdTdGF0ZTtcblx0ICAgICAgICAgICAgaWYgKG5ld1N0YXRlRGVzY3JpcHRpb24gPT09IFwiY29ubmVjdGVkXCIpIHtcblx0ICAgICAgICAgICAgICAgIG5ld1N0YXRlRGVzY3JpcHRpb24gKz0gXCIgd2l0aCBuZXcgc29ja2V0IElEIFwiICsgZGF0YS5zb2NrZXRfaWQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgbG9nZ2VyXzFbXCJkZWZhdWx0XCJdLmRlYnVnKCdTdGF0ZSBjaGFuZ2VkJywgcHJldmlvdXNTdGF0ZSArICcgLT4gJyArIG5ld1N0YXRlRGVzY3JpcHRpb24pO1xuXHQgICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oeyBzdGF0ZTogbmV3U3RhdGUsIHBhcmFtczogZGF0YSB9KTtcblx0ICAgICAgICAgICAgdGhpcy5lbWl0KCdzdGF0ZV9jaGFuZ2UnLCB7IHByZXZpb3VzOiBwcmV2aW91c1N0YXRlLCBjdXJyZW50OiBuZXdTdGF0ZSB9KTtcblx0ICAgICAgICAgICAgdGhpcy5lbWl0KG5ld1N0YXRlLCBkYXRhKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnNob3VsZFJldHJ5ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBcImNvbm5lY3RpbmdcIiB8fCB0aGlzLnN0YXRlID09PSBcImNvbm5lY3RlZFwiO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBDb25uZWN0aW9uTWFuYWdlcjtcblx0fShkaXNwYXRjaGVyXzFbXCJkZWZhdWx0XCJdKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29ubmVjdGlvbk1hbmFnZXI7XG5cblxuLyoqKi8gfSksXG4vKiA1NSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgZmFjdG9yeV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG5cdHZhciBDaGFubmVscyA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBDaGFubmVscygpIHtcblx0ICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XG5cdCAgICB9XG5cdCAgICBDaGFubmVscy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHB1c2hlcikge1xuXHQgICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xuXHQgICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcblx0ICAgIH07XG5cdCAgICBDaGFubmVscy5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBDb2xsZWN0aW9ucy52YWx1ZXModGhpcy5jaGFubmVscyk7XG5cdCAgICB9O1xuXHQgICAgQ2hhbm5lbHMucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuXHQgICAgfTtcblx0ICAgIENoYW5uZWxzLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgICAgICAgIHZhciBjaGFubmVsID0gdGhpcy5jaGFubmVsc1tuYW1lXTtcblx0ICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tuYW1lXTtcblx0ICAgICAgICByZXR1cm4gY2hhbm5lbDtcblx0ICAgIH07XG5cdCAgICBDaGFubmVscy5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBDb2xsZWN0aW9ucy5vYmplY3RBcHBseSh0aGlzLmNoYW5uZWxzLCBmdW5jdGlvbiAoY2hhbm5lbCkge1xuXHQgICAgICAgICAgICBjaGFubmVsLmRpc2Nvbm5lY3QoKTtcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gQ2hhbm5lbHM7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ2hhbm5lbHM7XG5cdGZ1bmN0aW9uIGNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG5cdCAgICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhY3RvcnlfMVtcImRlZmF1bHRcIl0uY3JlYXRlUHJpdmF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcblx0ICAgIH1cblx0ICAgIGVsc2UgaWYgKG5hbWUuaW5kZXhPZigncHJlc2VuY2UtJykgPT09IDApIHtcblx0ICAgICAgICByZXR1cm4gZmFjdG9yeV8xW1wiZGVmYXVsdFwiXS5jcmVhdGVQcmVzZW5jZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHQgICAgICAgIHJldHVybiBmYWN0b3J5XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcblx0ICAgIH1cblx0fVxuXG5cbi8qKiovIH0pLFxuLyogNTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGZhY3RvcnlfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xuXHR2YXIgdXRpbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdHZhciBFcnJvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKTtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIFRyYW5zcG9ydFN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFRyYW5zcG9ydFN0cmF0ZWd5KG5hbWUsIHByaW9yaXR5LCB0cmFuc3BvcnQsIG9wdGlvbnMpIHtcblx0ICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXHQgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0ICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQgICAgfVxuXHQgICAgVHJhbnNwb3J0U3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5pc1N1cHBvcnRlZCh7XG5cdCAgICAgICAgICAgIGVuY3J5cHRlZDogdGhpcy5vcHRpb25zLmVuY3J5cHRlZFxuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIFRyYW5zcG9ydFN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuXHQgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdCAgICAgICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZhaWxBdHRlbXB0KG5ldyBFcnJvcnMuVW5zdXBwb3J0ZWRTdHJhdGVneSgpLCBjYWxsYmFjayk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGVsc2UgaWYgKHRoaXMucHJpb3JpdHkgPCBtaW5Qcmlvcml0eSkge1xuXHQgICAgICAgICAgICByZXR1cm4gZmFpbEF0dGVtcHQobmV3IEVycm9ycy5UcmFuc3BvcnRQcmlvcml0eVRvb0xvdygpLCBjYWxsYmFjayk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciBjb25uZWN0ZWQgPSBmYWxzZTtcblx0ICAgICAgICB2YXIgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnQuY3JlYXRlQ29ubmVjdGlvbih0aGlzLm5hbWUsIHRoaXMucHJpb3JpdHksIHRoaXMub3B0aW9ucy5rZXksIHRoaXMub3B0aW9ucyk7XG5cdCAgICAgICAgdmFyIGhhbmRzaGFrZSA9IG51bGw7XG5cdCAgICAgICAgdmFyIG9uSW5pdGlhbGl6ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoXCJpbml0aWFsaXplZFwiLCBvbkluaXRpYWxpemVkKTtcblx0ICAgICAgICAgICAgdHJhbnNwb3J0LmNvbm5lY3QoKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHZhciBvbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIGhhbmRzaGFrZSA9IGZhY3RvcnlfMVtcImRlZmF1bHRcIl0uY3JlYXRlSGFuZHNoYWtlKHRyYW5zcG9ydCwgZnVuY3Rpb24gKHJlc3VsdCkge1xuXHQgICAgICAgICAgICAgICAgY29ubmVjdGVkID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuXHQgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHQgICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcblx0ICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgdmFyIG9uQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcblx0ICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWRUcmFuc3BvcnQ7XG5cdCAgICAgICAgICAgIHNlcmlhbGl6ZWRUcmFuc3BvcnQgPSBDb2xsZWN0aW9ucy5zYWZlSlNPTlN0cmluZ2lmeSh0cmFuc3BvcnQpO1xuXHQgICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3JzLlRyYW5zcG9ydENsb3NlZChzZXJpYWxpemVkVHJhbnNwb3J0KSk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB2YXIgdW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKFwiaW5pdGlhbGl6ZWRcIiwgb25Jbml0aWFsaXplZCk7XG5cdCAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoXCJvcGVuXCIsIG9uT3Blbik7XG5cdCAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoXCJlcnJvclwiLCBvbkVycm9yKTtcblx0ICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZChcImNsb3NlZFwiLCBvbkNsb3NlZCk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0cmFuc3BvcnQuYmluZChcImluaXRpYWxpemVkXCIsIG9uSW5pdGlhbGl6ZWQpO1xuXHQgICAgICAgIHRyYW5zcG9ydC5iaW5kKFwib3BlblwiLCBvbk9wZW4pO1xuXHQgICAgICAgIHRyYW5zcG9ydC5iaW5kKFwiZXJyb3JcIiwgb25FcnJvcik7XG5cdCAgICAgICAgdHJhbnNwb3J0LmJpbmQoXCJjbG9zZWRcIiwgb25DbG9zZWQpO1xuXHQgICAgICAgIHRyYW5zcG9ydC5pbml0aWFsaXplKCk7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ZWQpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcblx0ICAgICAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcblx0ICAgICAgICAgICAgICAgICAgICBoYW5kc2hha2UuY2xvc2UoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcmlvcml0eSA8IHApIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZHNoYWtlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRzaGFrZS5jbG9zZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0LmNsb3NlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gVHJhbnNwb3J0U3RyYXRlZ3k7XG5cdH0oKSk7XG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVHJhbnNwb3J0U3RyYXRlZ3k7XG5cdGZ1bmN0aW9uIGZhaWxBdHRlbXB0KGVycm9yLCBjYWxsYmFjaykge1xuXHQgICAgdXRpbF8xW1wiZGVmYXVsdFwiXS5kZWZlcihmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7IH0sXG5cdCAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKCkgeyB9XG5cdCAgICB9O1xuXHR9XG5cblxuLyoqKi8gfSksXG4vKiA1NyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgQ29sbGVjdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgdXRpbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdHZhciB0aW1lcnNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXHR2YXIgU2VxdWVudGlhbFN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFNlcXVlbnRpYWxTdHJhdGVneShzdHJhdGVnaWVzLCBvcHRpb25zKSB7XG5cdCAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gc3RyYXRlZ2llcztcblx0ICAgICAgICB0aGlzLmxvb3AgPSBCb29sZWFuKG9wdGlvbnMubG9vcCk7XG5cdCAgICAgICAgdGhpcy5mYWlsRmFzdCA9IEJvb2xlYW4ob3B0aW9ucy5mYWlsRmFzdCk7XG5cdCAgICAgICAgdGhpcy50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuXHQgICAgICAgIHRoaXMudGltZW91dExpbWl0ID0gb3B0aW9ucy50aW1lb3V0TGltaXQ7XG5cdCAgICB9XG5cdCAgICBTZXF1ZW50aWFsU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBDb2xsZWN0aW9ucy5hbnkodGhpcy5zdHJhdGVnaWVzLCB1dGlsXzFbXCJkZWZhdWx0XCJdLm1ldGhvZChcImlzU3VwcG9ydGVkXCIpKTtcblx0ICAgIH07XG5cdCAgICBTZXF1ZW50aWFsU3RyYXRlZ3kucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgICAgICB2YXIgc3RyYXRlZ2llcyA9IHRoaXMuc3RyYXRlZ2llcztcblx0ICAgICAgICB2YXIgY3VycmVudCA9IDA7XG5cdCAgICAgICAgdmFyIHRpbWVvdXQgPSB0aGlzLnRpbWVvdXQ7XG5cdCAgICAgICAgdmFyIHJ1bm5lciA9IG51bGw7XG5cdCAgICAgICAgdmFyIHRyeU5leHRTdHJhdGVneSA9IGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG5cdCAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcblx0ICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGhhbmRzaGFrZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCArIDE7XG5cdCAgICAgICAgICAgICAgICBpZiAoX3RoaXMubG9vcCkge1xuXHQgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICUgc3RyYXRlZ2llcy5sZW5ndGg7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA8IHN0cmF0ZWdpZXMubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHRpbWVvdXQgKiAyO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMudGltZW91dExpbWl0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gTWF0aC5taW4odGltZW91dCwgX3RoaXMudGltZW91dExpbWl0KTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBydW5uZXIgPSBfdGhpcy50cnlTdHJhdGVneShzdHJhdGVnaWVzW2N1cnJlbnRdLCBtaW5Qcmlvcml0eSwgeyB0aW1lb3V0OiB0aW1lb3V0LCBmYWlsRmFzdDogX3RoaXMuZmFpbEZhc3QgfSwgdHJ5TmV4dFN0cmF0ZWd5KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBydW5uZXIgPSB0aGlzLnRyeVN0cmF0ZWd5KHN0cmF0ZWdpZXNbY3VycmVudF0sIG1pblByaW9yaXR5LCB7IHRpbWVvdXQ6IHRpbWVvdXQsIGZhaWxGYXN0OiB0aGlzLmZhaWxGYXN0IH0sIHRyeU5leHRTdHJhdGVneSk7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuXHQgICAgICAgICAgICAgICAgbWluUHJpb3JpdHkgPSBwO1xuXHQgICAgICAgICAgICAgICAgaWYgKHJ1bm5lcikge1xuXHQgICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdCAgICBTZXF1ZW50aWFsU3RyYXRlZ3kucHJvdG90eXBlLnRyeVN0cmF0ZWd5ID0gZnVuY3Rpb24gKHN0cmF0ZWd5LCBtaW5Qcmlvcml0eSwgb3B0aW9ucywgY2FsbGJhY2spIHtcblx0ICAgICAgICB2YXIgdGltZXIgPSBudWxsO1xuXHQgICAgICAgIHZhciBydW5uZXIgPSBudWxsO1xuXHQgICAgICAgIGlmIChvcHRpb25zLnRpbWVvdXQgPiAwKSB7XG5cdCAgICAgICAgICAgIHRpbWVyID0gbmV3IHRpbWVyc18xLk9uZU9mZlRpbWVyKG9wdGlvbnMudGltZW91dCwgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG5cdCAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJ1bm5lciA9IHN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG5cdCAgICAgICAgICAgIGlmIChlcnJvciAmJiB0aW1lciAmJiB0aW1lci5pc1J1bm5pbmcoKSAmJiAhb3B0aW9ucy5mYWlsRmFzdCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmICh0aW1lcikge1xuXHQgICAgICAgICAgICAgICAgdGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBoYW5kc2hha2UpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAodGltZXIpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aW1lci5lbnN1cmVBYm9ydGVkKCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKHApIHtcblx0ICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gU2VxdWVudGlhbFN0cmF0ZWd5O1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNlcXVlbnRpYWxTdHJhdGVneTtcblxuXG4vKioqLyB9KSxcbi8qIDU4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBDb2xsZWN0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdHZhciB1dGlsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIEJlc3RDb25uZWN0ZWRFdmVyU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneShzdHJhdGVnaWVzKSB7XG5cdCAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gc3RyYXRlZ2llcztcblx0ICAgIH1cblx0ICAgIEJlc3RDb25uZWN0ZWRFdmVyU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBDb2xsZWN0aW9ucy5hbnkodGhpcy5zdHJhdGVnaWVzLCB1dGlsXzFbXCJkZWZhdWx0XCJdLm1ldGhvZChcImlzU3VwcG9ydGVkXCIpKTtcblx0ICAgIH07XG5cdCAgICBCZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuXHQgICAgICAgIHJldHVybiBjb25uZWN0KHRoaXMuc3RyYXRlZ2llcywgbWluUHJpb3JpdHksIGZ1bmN0aW9uIChpLCBydW5uZXJzKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuXHQgICAgICAgICAgICAgICAgcnVubmVyc1tpXS5lcnJvciA9IGVycm9yO1xuXHQgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFJ1bm5lcnNGYWlsZWQocnVubmVycykpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIENvbGxlY3Rpb25zLmFwcGx5KHJ1bm5lcnMsIGZ1bmN0aW9uIChydW5uZXIpIHtcblx0ICAgICAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShoYW5kc2hha2UudHJhbnNwb3J0LnByaW9yaXR5KTtcblx0ICAgICAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgaGFuZHNoYWtlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9KTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneTtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBCZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5O1xuXHRmdW5jdGlvbiBjb25uZWN0KHN0cmF0ZWdpZXMsIG1pblByaW9yaXR5LCBjYWxsYmFja0J1aWxkZXIpIHtcblx0ICAgIHZhciBydW5uZXJzID0gQ29sbGVjdGlvbnMubWFwKHN0cmF0ZWdpZXMsIGZ1bmN0aW9uIChzdHJhdGVneSwgaSwgXywgcnMpIHtcblx0ICAgICAgICByZXR1cm4gc3RyYXRlZ3kuY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2tCdWlsZGVyKGksIHJzKSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgQ29sbGVjdGlvbnMuYXBwbHkocnVubmVycywgYWJvcnRSdW5uZXIpO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKHApIHtcblx0ICAgICAgICAgICAgQ29sbGVjdGlvbnMuYXBwbHkocnVubmVycywgZnVuY3Rpb24gKHJ1bm5lcikge1xuXHQgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdH1cblx0ZnVuY3Rpb24gYWxsUnVubmVyc0ZhaWxlZChydW5uZXJzKSB7XG5cdCAgICByZXR1cm4gQ29sbGVjdGlvbnMuYWxsKHJ1bm5lcnMsIGZ1bmN0aW9uIChydW5uZXIpIHtcblx0ICAgICAgICByZXR1cm4gQm9vbGVhbihydW5uZXIuZXJyb3IpO1xuXHQgICAgfSk7XG5cdH1cblx0ZnVuY3Rpb24gYWJvcnRSdW5uZXIocnVubmVyKSB7XG5cdCAgICBpZiAoIXJ1bm5lci5lcnJvciAmJiAhcnVubmVyLmFib3J0ZWQpIHtcblx0ICAgICAgICBydW5uZXIuYWJvcnQoKTtcblx0ICAgICAgICBydW5uZXIuYWJvcnRlZCA9IHRydWU7XG5cdCAgICB9XG5cdH1cblxuXG4vKioqLyB9KSxcbi8qIDU5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciB1dGlsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIHJ1bnRpbWVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBzZXF1ZW50aWFsX3N0cmF0ZWd5XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KTtcblx0dmFyIENvbGxlY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIENhY2hlZFN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIENhY2hlZFN0cmF0ZWd5KHN0cmF0ZWd5LCB0cmFuc3BvcnRzLCBvcHRpb25zKSB7XG5cdCAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuXHQgICAgICAgIHRoaXMudHJhbnNwb3J0cyA9IHRyYW5zcG9ydHM7XG5cdCAgICAgICAgdGhpcy50dGwgPSBvcHRpb25zLnR0bCB8fCAxODAwICogMTAwMDtcblx0ICAgICAgICB0aGlzLmVuY3J5cHRlZCA9IG9wdGlvbnMuZW5jcnlwdGVkO1xuXHQgICAgICAgIHRoaXMudGltZWxpbmUgPSBvcHRpb25zLnRpbWVsaW5lO1xuXHQgICAgfVxuXHQgICAgQ2FjaGVkU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG5cdCAgICB9O1xuXHQgICAgQ2FjaGVkU3RyYXRlZ3kucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIGVuY3J5cHRlZCA9IHRoaXMuZW5jcnlwdGVkO1xuXHQgICAgICAgIHZhciBpbmZvID0gZmV0Y2hUcmFuc3BvcnRDYWNoZShlbmNyeXB0ZWQpO1xuXHQgICAgICAgIHZhciBzdHJhdGVnaWVzID0gW3RoaXMuc3RyYXRlZ3ldO1xuXHQgICAgICAgIGlmIChpbmZvICYmIGluZm8udGltZXN0YW1wICsgdGhpcy50dGwgPj0gdXRpbF8xW1wiZGVmYXVsdFwiXS5ub3coKSkge1xuXHQgICAgICAgICAgICB2YXIgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnRzW2luZm8udHJhbnNwb3J0XTtcblx0ICAgICAgICAgICAgaWYgKHRyYW5zcG9ydCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHtcblx0ICAgICAgICAgICAgICAgICAgICBjYWNoZWQ6IHRydWUsXG5cdCAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0OiBpbmZvLnRyYW5zcG9ydCxcblx0ICAgICAgICAgICAgICAgICAgICBsYXRlbmN5OiBpbmZvLmxhdGVuY3lcblx0ICAgICAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICAgICAgc3RyYXRlZ2llcy5wdXNoKG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5XzFbXCJkZWZhdWx0XCJdKFt0cmFuc3BvcnRdLCB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGltZW91dDogaW5mby5sYXRlbmN5ICogMiArIDEwMDAsXG5cdCAgICAgICAgICAgICAgICAgICAgZmFpbEZhc3Q6IHRydWVcblx0ICAgICAgICAgICAgICAgIH0pKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgc3RhcnRUaW1lc3RhbXAgPSB1dGlsXzFbXCJkZWZhdWx0XCJdLm5vdygpO1xuXHQgICAgICAgIHZhciBydW5uZXIgPSBzdHJhdGVnaWVzLnBvcCgpLmNvbm5lY3QobWluUHJpb3JpdHksIGZ1bmN0aW9uIGNiKGVycm9yLCBoYW5kc2hha2UpIHtcblx0ICAgICAgICAgICAgaWYgKGVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICBmbHVzaFRyYW5zcG9ydENhY2hlKGVuY3J5cHRlZCk7XG5cdCAgICAgICAgICAgICAgICBpZiAoc3RyYXRlZ2llcy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXAgPSB1dGlsXzFbXCJkZWZhdWx0XCJdLm5vdygpO1xuXHQgICAgICAgICAgICAgICAgICAgIHJ1bm5lciA9IHN0cmF0ZWdpZXMucG9wKCkuY29ubmVjdChtaW5Qcmlvcml0eSwgY2IpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgc3RvcmVUcmFuc3BvcnRDYWNoZShlbmNyeXB0ZWQsIGhhbmRzaGFrZS50cmFuc3BvcnQubmFtZSwgdXRpbF8xW1wiZGVmYXVsdFwiXS5ub3coKSAtIHN0YXJ0VGltZXN0YW1wKTtcblx0ICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGhhbmRzaGFrZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG5cdCAgICAgICAgICAgICAgICBtaW5Qcmlvcml0eSA9IHA7XG5cdCAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBDYWNoZWRTdHJhdGVneTtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDYWNoZWRTdHJhdGVneTtcblx0ZnVuY3Rpb24gZ2V0VHJhbnNwb3J0Q2FjaGVLZXkoZW5jcnlwdGVkKSB7XG5cdCAgICByZXR1cm4gXCJwdXNoZXJUcmFuc3BvcnRcIiArIChlbmNyeXB0ZWQgPyBcIkVuY3J5cHRlZFwiIDogXCJVbmVuY3J5cHRlZFwiKTtcblx0fVxuXHRmdW5jdGlvbiBmZXRjaFRyYW5zcG9ydENhY2hlKGVuY3J5cHRlZCkge1xuXHQgICAgdmFyIHN0b3JhZ2UgPSBydW50aW1lXzFbXCJkZWZhdWx0XCJdLmdldExvY2FsU3RvcmFnZSgpO1xuXHQgICAgaWYgKHN0b3JhZ2UpIHtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICB2YXIgc2VyaWFsaXplZENhY2hlID0gc3RvcmFnZVtnZXRUcmFuc3BvcnRDYWNoZUtleShlbmNyeXB0ZWQpXTtcblx0ICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRDYWNoZSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsaXplZENhY2hlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICBmbHVzaFRyYW5zcG9ydENhY2hlKGVuY3J5cHRlZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIG51bGw7XG5cdH1cblx0ZnVuY3Rpb24gc3RvcmVUcmFuc3BvcnRDYWNoZShlbmNyeXB0ZWQsIHRyYW5zcG9ydCwgbGF0ZW5jeSkge1xuXHQgICAgdmFyIHN0b3JhZ2UgPSBydW50aW1lXzFbXCJkZWZhdWx0XCJdLmdldExvY2FsU3RvcmFnZSgpO1xuXHQgICAgaWYgKHN0b3JhZ2UpIHtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KGVuY3J5cHRlZCldID0gQ29sbGVjdGlvbnMuc2FmZUpTT05TdHJpbmdpZnkoe1xuXHQgICAgICAgICAgICAgICAgdGltZXN0YW1wOiB1dGlsXzFbXCJkZWZhdWx0XCJdLm5vdygpLFxuXHQgICAgICAgICAgICAgICAgdHJhbnNwb3J0OiB0cmFuc3BvcnQsXG5cdCAgICAgICAgICAgICAgICBsYXRlbmN5OiBsYXRlbmN5XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBjYXRjaCAoZSkge1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0fVxuXHRmdW5jdGlvbiBmbHVzaFRyYW5zcG9ydENhY2hlKGVuY3J5cHRlZCkge1xuXHQgICAgdmFyIHN0b3JhZ2UgPSBydW50aW1lXzFbXCJkZWZhdWx0XCJdLmdldExvY2FsU3RvcmFnZSgpO1xuXHQgICAgaWYgKHN0b3JhZ2UpIHtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICBkZWxldGUgc3RvcmFnZVtnZXRUcmFuc3BvcnRDYWNoZUtleShlbmNyeXB0ZWQpXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH1cblxuXG4vKioqLyB9KSxcbi8qIDYwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciB0aW1lcnNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXHR2YXIgRGVsYXllZFN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIERlbGF5ZWRTdHJhdGVneShzdHJhdGVneSwgX2EpIHtcblx0ICAgICAgICB2YXIgbnVtYmVyID0gX2EuZGVsYXk7XG5cdCAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuXHQgICAgICAgIHRoaXMub3B0aW9ucyA9IHsgZGVsYXk6IG51bWJlciB9O1xuXHQgICAgfVxuXHQgICAgRGVsYXllZFN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5pc1N1cHBvcnRlZCgpO1xuXHQgICAgfTtcblx0ICAgIERlbGF5ZWRTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcblx0ICAgICAgICB2YXIgc3RyYXRlZ3kgPSB0aGlzLnN0cmF0ZWd5O1xuXHQgICAgICAgIHZhciBydW5uZXI7XG5cdCAgICAgICAgdmFyIHRpbWVyID0gbmV3IHRpbWVyc18xLk9uZU9mZlRpbWVyKHRoaXMub3B0aW9ucy5kZWxheSwgZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBydW5uZXIgPSBzdHJhdGVneS5jb25uZWN0KG1pblByaW9yaXR5LCBjYWxsYmFjayk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcblx0ICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcblx0ICAgICAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKHApIHtcblx0ICAgICAgICAgICAgICAgIG1pblByaW9yaXR5ID0gcDtcblx0ICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcblx0ICAgICAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShwKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIERlbGF5ZWRTdHJhdGVneTtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEZWxheWVkU3RyYXRlZ3k7XG5cblxuLyoqKi8gfSksXG4vKiA2MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgSWZTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBJZlN0cmF0ZWd5KHRlc3QsIHRydWVCcmFuY2gsIGZhbHNlQnJhbmNoKSB7XG5cdCAgICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcblx0ICAgICAgICB0aGlzLnRydWVCcmFuY2ggPSB0cnVlQnJhbmNoO1xuXHQgICAgICAgIHRoaXMuZmFsc2VCcmFuY2ggPSBmYWxzZUJyYW5jaDtcblx0ICAgIH1cblx0ICAgIElmU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBicmFuY2ggPSB0aGlzLnRlc3QoKSA/IHRoaXMudHJ1ZUJyYW5jaCA6IHRoaXMuZmFsc2VCcmFuY2g7XG5cdCAgICAgICAgcmV0dXJuIGJyYW5jaC5pc1N1cHBvcnRlZCgpO1xuXHQgICAgfTtcblx0ICAgIElmU3RyYXRlZ3kucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgdmFyIGJyYW5jaCA9IHRoaXMudGVzdCgpID8gdGhpcy50cnVlQnJhbmNoIDogdGhpcy5mYWxzZUJyYW5jaDtcblx0ICAgICAgICByZXR1cm4gYnJhbmNoLmNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4gSWZTdHJhdGVneTtcblx0fSgpKTtcblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBJZlN0cmF0ZWd5O1xuXG5cbi8qKiovIH0pLFxuLyogNjIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gRmlyc3RDb25uZWN0ZWRTdHJhdGVneShzdHJhdGVneSkge1xuXHQgICAgICAgIHRoaXMuc3RyYXRlZ3kgPSBzdHJhdGVneTtcblx0ICAgIH1cblx0ICAgIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG5cdCAgICB9O1xuXHQgICAgRmlyc3RDb25uZWN0ZWRTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcblx0ICAgICAgICB2YXIgcnVubmVyID0gdGhpcy5zdHJhdGVneS5jb25uZWN0KG1pblByaW9yaXR5LCBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuXHQgICAgICAgICAgICBpZiAoaGFuZHNoYWtlKSB7XG5cdCAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgaGFuZHNoYWtlKTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgICByZXR1cm4gcnVubmVyO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBGaXJzdENvbm5lY3RlZFN0cmF0ZWd5O1xuXHR9KCkpO1xuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3k7XG5cblxuLyoqKi8gfSksXG4vKiA2MyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHR2YXIgZGVmYXVsdHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdGV4cG9ydHMuZ2V0R2xvYmFsQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgICB3c0hvc3Q6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLmhvc3QsXG5cdCAgICAgICAgd3NQb3J0OiBkZWZhdWx0c18xW1wiZGVmYXVsdFwiXS53c19wb3J0LFxuXHQgICAgICAgIHdzc1BvcnQ6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLndzc19wb3J0LFxuXHQgICAgICAgIGh0dHBIb3N0OiBkZWZhdWx0c18xW1wiZGVmYXVsdFwiXS5zb2NranNfaG9zdCxcblx0ICAgICAgICBodHRwUG9ydDogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uc29ja2pzX2h0dHBfcG9ydCxcblx0ICAgICAgICBodHRwc1BvcnQ6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLnNvY2tqc19odHRwc19wb3J0LFxuXHQgICAgICAgIGh0dHBQYXRoOiBkZWZhdWx0c18xW1wiZGVmYXVsdFwiXS5zb2NranNfcGF0aCxcblx0ICAgICAgICBzdGF0c0hvc3Q6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLnN0YXRzX2hvc3QsXG5cdCAgICAgICAgYXV0aEVuZHBvaW50OiBkZWZhdWx0c18xW1wiZGVmYXVsdFwiXS5jaGFubmVsX2F1dGhfZW5kcG9pbnQsXG5cdCAgICAgICAgYXV0aFRyYW5zcG9ydDogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0uY2hhbm5lbF9hdXRoX3RyYW5zcG9ydCxcblx0ICAgICAgICBhY3Rpdml0eV90aW1lb3V0OiBkZWZhdWx0c18xW1wiZGVmYXVsdFwiXS5hY3Rpdml0eV90aW1lb3V0LFxuXHQgICAgICAgIHBvbmdfdGltZW91dDogZGVmYXVsdHNfMVtcImRlZmF1bHRcIl0ucG9uZ190aW1lb3V0LFxuXHQgICAgICAgIHVuYXZhaWxhYmxlX3RpbWVvdXQ6IGRlZmF1bHRzXzFbXCJkZWZhdWx0XCJdLnVuYXZhaWxhYmxlX3RpbWVvdXRcblx0ICAgIH07XG5cdH07XG5cdGV4cG9ydHMuZ2V0Q2x1c3RlckNvbmZpZyA9IGZ1bmN0aW9uIChjbHVzdGVyTmFtZSkge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgICB3c0hvc3Q6IFwid3MtXCIgKyBjbHVzdGVyTmFtZSArIFwiLnB1c2hlci5jb21cIixcblx0ICAgICAgICBodHRwSG9zdDogXCJzb2NranMtXCIgKyBjbHVzdGVyTmFtZSArIFwiLnB1c2hlci5jb21cIlxuXHQgICAgfTtcblx0fTtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3B1c2hlci1qcy9kaXN0L3dlYi9wdXNoZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=