(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-ion-simple-mask', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.simpleMask = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isFunction(x) {
        return typeof x === 'function';
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    var config = {
        Promise: undefined,
        set useDeprecatedSynchronousErrorHandling(value) {
            if (value) {
                var error = /*@__PURE__*/ new Error();
                /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
            }
            else if (_enable_super_gross_mode_that_will_cause_bad_things) {
                /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
            }
            _enable_super_gross_mode_that_will_cause_bad_things = value;
        },
        get useDeprecatedSynchronousErrorHandling() {
            return _enable_super_gross_mode_that_will_cause_bad_things;
        },
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function hostReportError(err) {
        setTimeout(function () { throw err; });
    }

    /** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
    var empty = {
        closed: true,
        next: function (value) { },
        error: function (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        },
        complete: function () { }
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isObject(x) {
        return x != null && typeof x === 'object';
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var errorObject = { e: {} };

    /** PURE_IMPORTS_START _errorObject PURE_IMPORTS_END */
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        }
        catch (e) {
            errorObject.e = e;
            return errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    var UnsubscriptionError = UnsubscriptionErrorImpl;

    /** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_tryCatch,_util_errorObject,_util_UnsubscriptionError PURE_IMPORTS_END */
    var Subscription = /*@__PURE__*/ (function () {
        function Subscription(unsubscribe) {
            this.closed = false;
            this._parent = null;
            this._parents = null;
            this._subscriptions = null;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        Subscription.prototype.unsubscribe = function () {
            var hasErrors = false;
            var errors;
            if (this.closed) {
                return;
            }
            var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
            this.closed = true;
            this._parent = null;
            this._parents = null;
            this._subscriptions = null;
            var index = -1;
            var len = _parents ? _parents.length : 0;
            while (_parent) {
                _parent.remove(this);
                _parent = ++index < len && _parents[index] || null;
            }
            if (isFunction(_unsubscribe)) {
                var trial = tryCatch(_unsubscribe).call(this);
                if (trial === errorObject) {
                    hasErrors = true;
                    errors = errors || (errorObject.e instanceof UnsubscriptionError ?
                        flattenUnsubscriptionErrors(errorObject.e.errors) : [errorObject.e]);
                }
            }
            if (isArray(_subscriptions)) {
                index = -1;
                len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject(sub)) {
                        var trial = tryCatch(sub.unsubscribe).call(sub);
                        if (trial === errorObject) {
                            hasErrors = true;
                            errors = errors || [];
                            var err = errorObject.e;
                            if (err instanceof UnsubscriptionError) {
                                errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
            }
            if (hasErrors) {
                throw new UnsubscriptionError(errors);
            }
        };
        Subscription.prototype.add = function (teardown) {
            if (!teardown || (teardown === Subscription.EMPTY)) {
                return Subscription.EMPTY;
            }
            if (teardown === this) {
                return this;
            }
            var subscription = teardown;
            switch (typeof teardown) {
                case 'function':
                    subscription = new Subscription(teardown);
                case 'object':
                    if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                        return subscription;
                    }
                    else if (this.closed) {
                        subscription.unsubscribe();
                        return subscription;
                    }
                    else if (typeof subscription._addParent !== 'function') {
                        var tmp = subscription;
                        subscription = new Subscription();
                        subscription._subscriptions = [tmp];
                    }
                    break;
                default:
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
            var subscriptions = this._subscriptions || (this._subscriptions = []);
            subscriptions.push(subscription);
            subscription._addParent(this);
            return subscription;
        };
        Subscription.prototype.remove = function (subscription) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.prototype._addParent = function (parent) {
            var _a = this, _parent = _a._parent, _parents = _a._parents;
            if (!_parent || _parent === parent) {
                this._parent = parent;
            }
            else if (!_parents) {
                this._parents = [parent];
            }
            else if (_parents.indexOf(parent) === -1) {
                _parents.push(parent);
            }
        };
        Subscription.EMPTY = (function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription()));
        return Subscription;
    }());
    function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var rxSubscriber = typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();

    /** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
    var Subscriber = /*@__PURE__*/ (function (_super) {
        __extends(Subscriber, _super);
        function Subscriber(destinationOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this.syncErrorValue = null;
            _this.syncErrorThrown = false;
            _this.syncErrorThrowable = false;
            _this.isStopped = false;
            _this._parentSubscription = null;
            switch (arguments.length) {
                case 0:
                    _this.destination = empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        _this.destination = empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                            _this.destination = destinationOrNext;
                            destinationOrNext.add(_this);
                        }
                        else {
                            _this.syncErrorThrowable = true;
                            _this.destination = new SafeSubscriber(_this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    _this.syncErrorThrowable = true;
                    _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                    break;
            }
            return _this;
        }
        Subscriber.prototype[rxSubscriber] = function () { return this; };
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        Subscriber.prototype._unsubscribeAndRecycle = function () {
            var _a = this, _parent = _a._parent, _parents = _a._parents;
            this._parent = null;
            this._parents = null;
            this.unsubscribe();
            this.closed = false;
            this.isStopped = false;
            this._parent = _parent;
            this._parents = _parents;
            this._parentSubscription = null;
            return this;
        };
        return Subscriber;
    }(Subscription));
    var SafeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this._parentSubscriber = _parentSubscriber;
            var next;
            var context = _this;
            if (isFunction(observerOrNext)) {
                next = observerOrNext;
            }
            else if (observerOrNext) {
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (observerOrNext !== empty) {
                    context = Object.create(observerOrNext);
                    if (isFunction(context.unsubscribe)) {
                        _this.add(context.unsubscribe.bind(context));
                    }
                    context.unsubscribe = _this.unsubscribe.bind(_this);
                }
            }
            _this._context = context;
            _this._next = next;
            _this._error = error;
            _this._complete = complete;
            return _this;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parentSubscriber = this._parentSubscriber;
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                }
                else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
                if (this._error) {
                    if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, this._error, err);
                        this.unsubscribe();
                    }
                }
                else if (!_parentSubscriber.syncErrorThrowable) {
                    this.unsubscribe();
                    if (useDeprecatedSynchronousErrorHandling) {
                        throw err;
                    }
                    hostReportError(err);
                }
                else {
                    if (useDeprecatedSynchronousErrorHandling) {
                        _parentSubscriber.syncErrorValue = err;
                        _parentSubscriber.syncErrorThrown = true;
                    }
                    else {
                        hostReportError(err);
                    }
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            var _this = this;
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                if (this._complete) {
                    var wrappedComplete = function () { return _this._complete.call(_this._context); };
                    if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(wrappedComplete);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                        this.unsubscribe();
                    }
                }
                else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                this.unsubscribe();
                if (config.useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                else {
                    hostReportError(err);
                }
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            if (!config.useDeprecatedSynchronousErrorHandling) {
                throw new Error('bad call');
            }
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                if (config.useDeprecatedSynchronousErrorHandling) {
                    parent.syncErrorValue = err;
                    parent.syncErrorThrown = true;
                    return true;
                }
                else {
                    hostReportError(err);
                    return true;
                }
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parentSubscriber = this._parentSubscriber;
            this._context = null;
            this._parentSubscriber = null;
            _parentSubscriber.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
    function canReportError(observer) {
        while (observer) {
            var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
            if (closed_1 || isStopped) {
                return false;
            }
            else if (destination && destination instanceof Subscriber) {
                observer = destination;
            }
            else {
                observer = null;
            }
        }
        return true;
    }

    /** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber]) {
                return nextOrObserver[rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber(empty);
        }
        return new Subscriber(nextOrObserver, error, complete);
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function noop() { }

    /** PURE_IMPORTS_START _noop PURE_IMPORTS_END */
    function pipeFromArray(fns) {
        if (!fns) {
            return noop;
        }
        if (fns.length === 1) {
            return fns[0];
        }
        return function piped(input) {
            return fns.reduce(function (prev, fn) { return fn(prev); }, input);
        };
    }

    /** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_internal_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
    var Observable = /*@__PURE__*/ (function () {
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        Observable.prototype.lift = function (operator) {
            var observable$$1 = new Observable();
            observable$$1.source = this;
            observable$$1.operator = operator;
            return observable$$1;
        };
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber(observerOrNext, error, complete);
            if (operator) {
                operator.call(sink, this.source);
            }
            else {
                sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                    this._subscribe(sink) :
                    this._trySubscribe(sink));
            }
            if (config.useDeprecatedSynchronousErrorHandling) {
                if (sink.syncErrorThrowable) {
                    sink.syncErrorThrowable = false;
                    if (sink.syncErrorThrown) {
                        throw sink.syncErrorValue;
                    }
                }
            }
            return sink;
        };
        Observable.prototype._trySubscribe = function (sink) {
            try {
                return this._subscribe(sink);
            }
            catch (err) {
                if (config.useDeprecatedSynchronousErrorHandling) {
                    sink.syncErrorThrown = true;
                    sink.syncErrorValue = err;
                }
                if (canReportError(sink)) {
                    sink.error(err);
                }
                else {
                    console.warn(err);
                }
            }
        };
        Observable.prototype.forEach = function (next, promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var subscription;
                subscription = _this.subscribe(function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        if (subscription) {
                            subscription.unsubscribe();
                        }
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            var source = this.source;
            return source && source.subscribe(subscriber);
        };
        Observable.prototype[observable] = function () {
            return this;
        };
        Observable.prototype.pipe = function () {
            var operations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                operations[_i] = arguments[_i];
            }
            if (operations.length === 0) {
                return this;
            }
            return pipeFromArray(operations)(this);
        };
        Observable.prototype.toPromise = function (promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var value;
                _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
            });
        };
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }());
    function getPromiseCtor(promiseCtor) {
        if (!promiseCtor) {
            promiseCtor = config.Promise || Promise;
        }
        if (!promiseCtor) {
            throw new Error('no Promise impl found');
        }
        return promiseCtor;
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

    /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
    var SubjectSubscription = /*@__PURE__*/ (function (_super) {
        __extends(SubjectSubscription, _super);
        function SubjectSubscription(subject, subscriber) {
            var _this = _super.call(this) || this;
            _this.subject = subject;
            _this.subscriber = subscriber;
            _this.closed = false;
            return _this;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.subscriber);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription));

    /** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
    var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SubjectSubscriber, _super);
        function SubjectSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            return _this;
        }
        return SubjectSubscriber;
    }(Subscriber));
    var Subject = /*@__PURE__*/ (function (_super) {
        __extends(Subject, _super);
        function Subject() {
            var _this = _super.call(this) || this;
            _this.observers = [];
            _this.closed = false;
            _this.isStopped = false;
            _this.hasError = false;
            _this.thrownError = null;
            return _this;
        }
        Subject.prototype[rxSubscriber] = function () {
            return new SubjectSubscriber(this);
        };
        Subject.prototype.lift = function (operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.next = function (value) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            if (!this.isStopped) {
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();
                for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                }
            }
        };
        Subject.prototype.error = function (err) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].error(err);
            }
            this.observers.length = 0;
        };
        Subject.prototype.complete = function () {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].complete();
            }
            this.observers.length = 0;
        };
        Subject.prototype.unsubscribe = function () {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
        };
        Subject.prototype._trySubscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else {
                return _super.prototype._trySubscribe.call(this, subscriber);
            }
        };
        Subject.prototype._subscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription.EMPTY;
            }
            else if (this.isStopped) {
                subscriber.complete();
                return Subscription.EMPTY;
            }
            else {
                this.observers.push(subscriber);
                return new SubjectSubscription(this, subscriber);
            }
        };
        Subject.prototype.asObservable = function () {
            var observable = new Observable();
            observable.source = this;
            return observable;
        };
        Subject.create = function (destination, source) {
            return new AnonymousSubject(destination, source);
        };
        return Subject;
    }(Observable));
    var AnonymousSubject = /*@__PURE__*/ (function (_super) {
        __extends(AnonymousSubject, _super);
        function AnonymousSubject(destination, source) {
            var _this = _super.call(this) || this;
            _this.destination = destination;
            _this.source = source;
            return _this;
        }
        AnonymousSubject.prototype.next = function (value) {
            var destination = this.destination;
            if (destination && destination.next) {
                destination.next(value);
            }
        };
        AnonymousSubject.prototype.error = function (err) {
            var destination = this.destination;
            if (destination && destination.error) {
                this.destination.error(err);
            }
        };
        AnonymousSubject.prototype.complete = function () {
            var destination = this.destination;
            if (destination && destination.complete) {
                this.destination.complete();
            }
        };
        AnonymousSubject.prototype._subscribe = function (subscriber) {
            var source = this.source;
            if (source) {
                return this.source.subscribe(subscriber);
            }
            else {
                return Subscription.EMPTY;
            }
        };
        return AnonymousSubject;
    }(Subject));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    function refCount() {
        return function refCountOperatorFunction(source) {
            return source.lift(new RefCountOperator(source));
        };
    }
    var RefCountOperator = /*@__PURE__*/ (function () {
        function RefCountOperator(connectable) {
            this.connectable = connectable;
        }
        RefCountOperator.prototype.call = function (subscriber, source) {
            var connectable = this.connectable;
            connectable._refCount++;
            var refCounter = new RefCountSubscriber(subscriber, connectable);
            var subscription = source.subscribe(refCounter);
            if (!refCounter.closed) {
                refCounter.connection = connectable.connect();
            }
            return subscription;
        };
        return RefCountOperator;
    }());
    var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RefCountSubscriber, _super);
        function RefCountSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        RefCountSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (!connectable) {
                this.connection = null;
                return;
            }
            this.connectable = null;
            var refCount = connectable._refCount;
            if (refCount <= 0) {
                this.connection = null;
                return;
            }
            connectable._refCount = refCount - 1;
            if (refCount > 1) {
                this.connection = null;
                return;
            }
            var connection = this.connection;
            var sharedConnection = connectable._connection;
            this.connection = null;
            if (sharedConnection && (!connection || sharedConnection === connection)) {
                sharedConnection.unsubscribe();
            }
        };
        return RefCountSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */
    var ConnectableObservable = /*@__PURE__*/ (function (_super) {
        __extends(ConnectableObservable, _super);
        function ConnectableObservable(source, subjectFactory) {
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.subjectFactory = subjectFactory;
            _this._refCount = 0;
            _this._isComplete = false;
            return _this;
        }
        ConnectableObservable.prototype._subscribe = function (subscriber) {
            return this.getSubject().subscribe(subscriber);
        };
        ConnectableObservable.prototype.getSubject = function () {
            var subject = this._subject;
            if (!subject || subject.isStopped) {
                this._subject = this.subjectFactory();
            }
            return this._subject;
        };
        ConnectableObservable.prototype.connect = function () {
            var connection = this._connection;
            if (!connection) {
                this._isComplete = false;
                connection = this._connection = new Subscription();
                connection.add(this.source
                    .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
                if (connection.closed) {
                    this._connection = null;
                    connection = Subscription.EMPTY;
                }
                else {
                    this._connection = connection;
                }
            }
            return connection;
        };
        ConnectableObservable.prototype.refCount = function () {
            return refCount()(this);
        };
        return ConnectableObservable;
    }(Observable));
    var connectableProto = ConnectableObservable.prototype;
    var connectableObservableDescriptor = {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
    };
    var ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ConnectableSubscriber, _super);
        function ConnectableSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        ConnectableSubscriber.prototype._error = function (err) {
            this._unsubscribe();
            _super.prototype._error.call(this, err);
        };
        ConnectableSubscriber.prototype._complete = function () {
            this.connectable._isComplete = true;
            this._unsubscribe();
            _super.prototype._complete.call(this);
        };
        ConnectableSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (connectable) {
                this.connectable = null;
                var connection = connectable._connection;
                connectable._refCount = 0;
                connectable._subject = null;
                connectable._connection = null;
                if (connection) {
                    connection.unsubscribe();
                }
            }
        };
        return ConnectableSubscriber;
    }(SubjectSubscriber));
    var RefCountSubscriber$1 = /*@__PURE__*/ (function (_super) {
        __extends(RefCountSubscriber, _super);
        function RefCountSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        RefCountSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (!connectable) {
                this.connection = null;
                return;
            }
            this.connectable = null;
            var refCount$$1 = connectable._refCount;
            if (refCount$$1 <= 0) {
                this.connection = null;
                return;
            }
            connectable._refCount = refCount$$1 - 1;
            if (refCount$$1 > 1) {
                this.connection = null;
                return;
            }
            var connection = this.connection;
            var sharedConnection = connectable._connection;
            this.connection = null;
            if (sharedConnection && (!connection || sharedConnection === connection)) {
                sharedConnection.unsubscribe();
            }
        };
        return RefCountSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */
    var GroupBySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(GroupBySubscriber, _super);
        function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.elementSelector = elementSelector;
            _this.durationSelector = durationSelector;
            _this.subjectSelector = subjectSelector;
            _this.groups = null;
            _this.attemptedToUnsubscribe = false;
            _this.count = 0;
            return _this;
        }
        GroupBySubscriber.prototype._next = function (value) {
            var key;
            try {
                key = this.keySelector(value);
            }
            catch (err) {
                this.error(err);
                return;
            }
            this._group(value, key);
        };
        GroupBySubscriber.prototype._group = function (value, key) {
            var groups = this.groups;
            if (!groups) {
                groups = this.groups = new Map();
            }
            var group = groups.get(key);
            var element;
            if (this.elementSelector) {
                try {
                    element = this.elementSelector(value);
                }
                catch (err) {
                    this.error(err);
                }
            }
            else {
                element = value;
            }
            if (!group) {
                group = (this.subjectSelector ? this.subjectSelector() : new Subject());
                groups.set(key, group);
                var groupedObservable = new GroupedObservable(key, group, this);
                this.destination.next(groupedObservable);
                if (this.durationSelector) {
                    var duration = void 0;
                    try {
                        duration = this.durationSelector(new GroupedObservable(key, group));
                    }
                    catch (err) {
                        this.error(err);
                        return;
                    }
                    this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
                }
            }
            if (!group.closed) {
                group.next(element);
            }
        };
        GroupBySubscriber.prototype._error = function (err) {
            var groups = this.groups;
            if (groups) {
                groups.forEach(function (group, key) {
                    group.error(err);
                });
                groups.clear();
            }
            this.destination.error(err);
        };
        GroupBySubscriber.prototype._complete = function () {
            var groups = this.groups;
            if (groups) {
                groups.forEach(function (group, key) {
                    group.complete();
                });
                groups.clear();
            }
            this.destination.complete();
        };
        GroupBySubscriber.prototype.removeGroup = function (key) {
            this.groups.delete(key);
        };
        GroupBySubscriber.prototype.unsubscribe = function () {
            if (!this.closed) {
                this.attemptedToUnsubscribe = true;
                if (this.count === 0) {
                    _super.prototype.unsubscribe.call(this);
                }
            }
        };
        return GroupBySubscriber;
    }(Subscriber));
    var GroupDurationSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(GroupDurationSubscriber, _super);
        function GroupDurationSubscriber(key, group, parent) {
            var _this = _super.call(this, group) || this;
            _this.key = key;
            _this.group = group;
            _this.parent = parent;
            return _this;
        }
        GroupDurationSubscriber.prototype._next = function (value) {
            this.complete();
        };
        GroupDurationSubscriber.prototype._unsubscribe = function () {
            var _a = this, parent = _a.parent, key = _a.key;
            this.key = this.parent = null;
            if (parent) {
                parent.removeGroup(key);
            }
        };
        return GroupDurationSubscriber;
    }(Subscriber));
    var GroupedObservable = /*@__PURE__*/ (function (_super) {
        __extends(GroupedObservable, _super);
        function GroupedObservable(key, groupSubject, refCountSubscription) {
            var _this = _super.call(this) || this;
            _this.key = key;
            _this.groupSubject = groupSubject;
            _this.refCountSubscription = refCountSubscription;
            return _this;
        }
        GroupedObservable.prototype._subscribe = function (subscriber) {
            var subscription = new Subscription();
            var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
            if (refCountSubscription && !refCountSubscription.closed) {
                subscription.add(new InnerRefCountSubscription(refCountSubscription));
            }
            subscription.add(groupSubject.subscribe(subscriber));
            return subscription;
        };
        return GroupedObservable;
    }(Observable));
    var InnerRefCountSubscription = /*@__PURE__*/ (function (_super) {
        __extends(InnerRefCountSubscription, _super);
        function InnerRefCountSubscription(parent) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            parent.count++;
            return _this;
        }
        InnerRefCountSubscription.prototype.unsubscribe = function () {
            var parent = this.parent;
            if (!parent.closed && !this.closed) {
                _super.prototype.unsubscribe.call(this);
                parent.count -= 1;
                if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                    parent.unsubscribe();
                }
            }
        };
        return InnerRefCountSubscription;
    }(Subscription));

    /** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
    var BehaviorSubject = /*@__PURE__*/ (function (_super) {
        __extends(BehaviorSubject, _super);
        function BehaviorSubject(_value) {
            var _this = _super.call(this) || this;
            _this._value = _value;
            return _this;
        }
        Object.defineProperty(BehaviorSubject.prototype, "value", {
            get: function () {
                return this.getValue();
            },
            enumerable: true,
            configurable: true
        });
        BehaviorSubject.prototype._subscribe = function (subscriber) {
            var subscription = _super.prototype._subscribe.call(this, subscriber);
            if (subscription && !subscription.closed) {
                subscriber.next(this._value);
            }
            return subscription;
        };
        BehaviorSubject.prototype.getValue = function () {
            if (this.hasError) {
                throw this.thrownError;
            }
            else if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else {
                return this._value;
            }
        };
        BehaviorSubject.prototype.next = function (value) {
            _super.prototype.next.call(this, this._value = value);
        };
        return BehaviorSubject;
    }(Subject));

    /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
    var Action = /*@__PURE__*/ (function (_super) {
        __extends(Action, _super);
        function Action(scheduler, work) {
            return _super.call(this) || this;
        }
        Action.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            return this;
        };
        return Action;
    }(Subscription));

    /** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
    var AsyncAction = /*@__PURE__*/ (function (_super) {
        __extends(AsyncAction, _super);
        function AsyncAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            _this.pending = false;
            return _this;
        }
        AsyncAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (this.closed) {
                return this;
            }
            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, delay);
            }
            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
        };
        AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
        };
        AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && this.delay === delay && this.pending === false) {
                return id;
            }
            clearInterval(id);
        };
        AsyncAction.prototype.execute = function (state, delay) {
            if (this.closed) {
                return new Error('executing a cancelled action');
            }
            this.pending = false;
            var error = this._execute(state, delay);
            if (error) {
                return error;
            }
            else if (this.pending === false && this.id != null) {
                this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
        };
        AsyncAction.prototype._execute = function (state, delay) {
            var errored = false;
            var errorValue = undefined;
            try {
                this.work(state);
            }
            catch (e) {
                errored = true;
                errorValue = !!e && e || new Error(e);
            }
            if (errored) {
                this.unsubscribe();
                return errorValue;
            }
        };
        AsyncAction.prototype._unsubscribe = function () {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;
            if (index !== -1) {
                actions.splice(index, 1);
            }
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
        };
        return AsyncAction;
    }(Action));

    /** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
    var QueueAction = /*@__PURE__*/ (function (_super) {
        __extends(QueueAction, _super);
        function QueueAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        QueueAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay > 0) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.delay = delay;
            this.state = state;
            this.scheduler.flush(this);
            return this;
        };
        QueueAction.prototype.execute = function (state, delay) {
            return (delay > 0 || this.closed) ?
                _super.prototype.execute.call(this, state, delay) :
                this._execute(state, delay);
        };
        QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            return scheduler.flush(this);
        };
        return QueueAction;
    }(AsyncAction));

    var Scheduler = /*@__PURE__*/ (function () {
        function Scheduler(SchedulerAction, now) {
            if (now === void 0) {
                now = Scheduler.now;
            }
            this.SchedulerAction = SchedulerAction;
            this.now = now;
        }
        Scheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) {
                delay = 0;
            }
            return new this.SchedulerAction(this, work).schedule(state, delay);
        };
        Scheduler.now = function () { return Date.now(); };
        return Scheduler;
    }());

    /** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
    var AsyncScheduler = /*@__PURE__*/ (function (_super) {
        __extends(AsyncScheduler, _super);
        function AsyncScheduler(SchedulerAction, now) {
            if (now === void 0) {
                now = Scheduler.now;
            }
            var _this = _super.call(this, SchedulerAction, function () {
                if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                    return AsyncScheduler.delegate.now();
                }
                else {
                    return now();
                }
            }) || this;
            _this.actions = [];
            _this.active = false;
            _this.scheduled = undefined;
            return _this;
        }
        AsyncScheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) {
                delay = 0;
            }
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.schedule(work, delay, state);
            }
            else {
                return _super.prototype.schedule.call(this, work, delay, state);
            }
        };
        AsyncScheduler.prototype.flush = function (action) {
            var actions = this.actions;
            if (this.active) {
                actions.push(action);
                return;
            }
            var error;
            this.active = true;
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (action = actions.shift());
            this.active = false;
            if (error) {
                while (action = actions.shift()) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AsyncScheduler;
    }(Scheduler));

    /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
    var QueueScheduler = /*@__PURE__*/ (function (_super) {
        __extends(QueueScheduler, _super);
        function QueueScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueueScheduler;
    }(AsyncScheduler));

    /** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
    var queue = /*@__PURE__*/ new QueueScheduler(QueueAction);

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
    var EMPTY = /*@__PURE__*/ new Observable(function (subscriber) { return subscriber.complete(); });
    function empty$1(scheduler) {
        return scheduler ? emptyScheduled(scheduler) : EMPTY;
    }
    function emptyScheduled(scheduler) {
        return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isScheduler(value) {
        return value && typeof value.schedule === 'function';
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var subscribeToArray = function (array) {
        return function (subscriber) {
            for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            if (!subscriber.closed) {
                subscriber.complete();
            }
        };
    };

    /** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToArray PURE_IMPORTS_END */
    function fromArray(input, scheduler) {
        if (!scheduler) {
            return new Observable(subscribeToArray(input));
        }
        else {
            return new Observable(function (subscriber) {
                var sub = new Subscription();
                var i = 0;
                sub.add(scheduler.schedule(function () {
                    if (i === input.length) {
                        subscriber.complete();
                        return;
                    }
                    subscriber.next(input[i++]);
                    if (!subscriber.closed) {
                        sub.add(this.schedule());
                    }
                }));
                return sub;
            });
        }
    }

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
    function scalar(value) {
        var result = new Observable(function (subscriber) {
            subscriber.next(value);
            subscriber.complete();
        });
        result._isScalar = true;
        result.value = value;
        return result;
    }

    /** PURE_IMPORTS_START _util_isScheduler,_fromArray,_empty,_scalar PURE_IMPORTS_END */
    function of() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var scheduler = args[args.length - 1];
        if (isScheduler(scheduler)) {
            args.pop();
        }
        else {
            scheduler = undefined;
        }
        switch (args.length) {
            case 0:
                return empty$1(scheduler);
            case 1:
                return scheduler ? fromArray(args, scheduler) : scalar(args[0]);
            default:
                return fromArray(args, scheduler);
        }
    }

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
    function throwError(error, scheduler) {
        if (!scheduler) {
            return new Observable(function (subscriber) { return subscriber.error(error); });
        }
        else {
            return new Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
        }
    }
    function dispatch(_a) {
        var error = _a.error, subscriber = _a.subscriber;
        subscriber.error(error);
    }

    /** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
    var Notification = /*@__PURE__*/ (function () {
        function Notification(kind, value, error) {
            this.kind = kind;
            this.value = value;
            this.error = error;
            this.hasValue = kind === 'N';
        }
        Notification.prototype.observe = function (observer) {
            switch (this.kind) {
                case 'N':
                    return observer.next && observer.next(this.value);
                case 'E':
                    return observer.error && observer.error(this.error);
                case 'C':
                    return observer.complete && observer.complete();
            }
        };
        Notification.prototype.do = function (next, error, complete) {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return next && next(this.value);
                case 'E':
                    return error && error(this.error);
                case 'C':
                    return complete && complete();
            }
        };
        Notification.prototype.accept = function (nextOrObserver, error, complete) {
            if (nextOrObserver && typeof nextOrObserver.next === 'function') {
                return this.observe(nextOrObserver);
            }
            else {
                return this.do(nextOrObserver, error, complete);
            }
        };
        Notification.prototype.toObservable = function () {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return of(this.value);
                case 'E':
                    return throwError(this.error);
                case 'C':
                    return empty$1();
            }
            throw new Error('unexpected notification kind value');
        };
        Notification.createNext = function (value) {
            if (typeof value !== 'undefined') {
                return new Notification('N', value);
            }
            return Notification.undefinedValueNotification;
        };
        Notification.createError = function (err) {
            return new Notification('E', undefined, err);
        };
        Notification.createComplete = function () {
            return Notification.completeNotification;
        };
        Notification.completeNotification = new Notification('C');
        Notification.undefinedValueNotification = new Notification('N', undefined);
        return Notification;
    }());

    /** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
    var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ObserveOnSubscriber, _super);
        function ObserveOnSubscriber(destination, scheduler, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            var _this = _super.call(this, destination) || this;
            _this.scheduler = scheduler;
            _this.delay = delay;
            return _this;
        }
        ObserveOnSubscriber.dispatch = function (arg) {
            var notification = arg.notification, destination = arg.destination;
            notification.observe(destination);
            this.unsubscribe();
        };
        ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
            var destination = this.destination;
            destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
        };
        ObserveOnSubscriber.prototype._next = function (value) {
            this.scheduleMessage(Notification.createNext(value));
        };
        ObserveOnSubscriber.prototype._error = function (err) {
            this.scheduleMessage(Notification.createError(err));
            this.unsubscribe();
        };
        ObserveOnSubscriber.prototype._complete = function () {
            this.scheduleMessage(Notification.createComplete());
            this.unsubscribe();
        };
        return ObserveOnSubscriber;
    }(Subscriber));
    var ObserveOnMessage = /*@__PURE__*/ (function () {
        function ObserveOnMessage(notification, destination) {
            this.notification = notification;
            this.destination = destination;
        }
        return ObserveOnMessage;
    }());

    /** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
    var ReplaySubject = /*@__PURE__*/ (function (_super) {
        __extends(ReplaySubject, _super);
        function ReplaySubject(bufferSize, windowTime, scheduler) {
            if (bufferSize === void 0) {
                bufferSize = Number.POSITIVE_INFINITY;
            }
            if (windowTime === void 0) {
                windowTime = Number.POSITIVE_INFINITY;
            }
            var _this = _super.call(this) || this;
            _this.scheduler = scheduler;
            _this._events = [];
            _this._infiniteTimeWindow = false;
            _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
            _this._windowTime = windowTime < 1 ? 1 : windowTime;
            if (windowTime === Number.POSITIVE_INFINITY) {
                _this._infiniteTimeWindow = true;
                _this.next = _this.nextInfiniteTimeWindow;
            }
            else {
                _this.next = _this.nextTimeWindow;
            }
            return _this;
        }
        ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
            var _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) {
                _events.shift();
            }
            _super.prototype.next.call(this, value);
        };
        ReplaySubject.prototype.nextTimeWindow = function (value) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
            _super.prototype.next.call(this, value);
        };
        ReplaySubject.prototype._subscribe = function (subscriber) {
            var _infiniteTimeWindow = this._infiniteTimeWindow;
            var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
            var scheduler = this.scheduler;
            var len = _events.length;
            var subscription;
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else if (this.isStopped || this.hasError) {
                subscription = Subscription.EMPTY;
            }
            else {
                this.observers.push(subscriber);
                subscription = new SubjectSubscription(this, subscriber);
            }
            if (scheduler) {
                subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
            }
            if (_infiniteTimeWindow) {
                for (var i = 0; i < len && !subscriber.closed; i++) {
                    subscriber.next(_events[i]);
                }
            }
            else {
                for (var i = 0; i < len && !subscriber.closed; i++) {
                    subscriber.next(_events[i].value);
                }
            }
            if (this.hasError) {
                subscriber.error(this.thrownError);
            }
            else if (this.isStopped) {
                subscriber.complete();
            }
            return subscription;
        };
        ReplaySubject.prototype._getNow = function () {
            return (this.scheduler || queue).now();
        };
        ReplaySubject.prototype._trimBufferThenGetEvents = function () {
            var now = this._getNow();
            var _bufferSize = this._bufferSize;
            var _windowTime = this._windowTime;
            var _events = this._events;
            var eventsCount = _events.length;
            var spliceCount = 0;
            while (spliceCount < eventsCount) {
                if ((now - _events[spliceCount].time) < _windowTime) {
                    break;
                }
                spliceCount++;
            }
            if (eventsCount > _bufferSize) {
                spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
            }
            if (spliceCount > 0) {
                _events.splice(0, spliceCount);
            }
            return _events;
        };
        return ReplaySubject;
    }(Subject));
    var ReplayEvent = /*@__PURE__*/ (function () {
        function ReplayEvent(time, value) {
            this.time = time;
            this.value = value;
        }
        return ReplayEvent;
    }());

    /** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */
    var AsyncSubject = /*@__PURE__*/ (function (_super) {
        __extends(AsyncSubject, _super);
        function AsyncSubject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = null;
            _this.hasNext = false;
            _this.hasCompleted = false;
            return _this;
        }
        AsyncSubject.prototype._subscribe = function (subscriber) {
            if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription.EMPTY;
            }
            else if (this.hasCompleted && this.hasNext) {
                subscriber.next(this.value);
                subscriber.complete();
                return Subscription.EMPTY;
            }
            return _super.prototype._subscribe.call(this, subscriber);
        };
        AsyncSubject.prototype.next = function (value) {
            if (!this.hasCompleted) {
                this.value = value;
                this.hasNext = true;
            }
        };
        AsyncSubject.prototype.error = function (error) {
            if (!this.hasCompleted) {
                _super.prototype.error.call(this, error);
            }
        };
        AsyncSubject.prototype.complete = function () {
            this.hasCompleted = true;
            if (this.hasNext) {
                _super.prototype.next.call(this, this.value);
            }
            _super.prototype.complete.call(this);
        };
        return AsyncSubject;
    }(Subject));

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var nextHandle = 1;
    var tasksByHandle = {};
    function runIfPresent(handle) {
        var cb = tasksByHandle[handle];
        if (cb) {
            cb();
        }
    }
    var Immediate = {
        setImmediate: function (cb) {
            var handle = nextHandle++;
            tasksByHandle[handle] = cb;
            Promise.resolve().then(function () { return runIfPresent(handle); });
            return handle;
        },
        clearImmediate: function (handle) {
            delete tasksByHandle[handle];
        },
    };

    /** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */
    var AsapAction = /*@__PURE__*/ (function (_super) {
        __extends(AsapAction, _super);
        function AsapAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && delay > 0) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
        };
        AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
                return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
            }
            if (scheduler.actions.length === 0) {
                Immediate.clearImmediate(id);
                scheduler.scheduled = undefined;
            }
            return undefined;
        };
        return AsapAction;
    }(AsyncAction));

    /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
    var AsapScheduler = /*@__PURE__*/ (function (_super) {
        __extends(AsapScheduler, _super);
        function AsapScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AsapScheduler.prototype.flush = function (action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (++index < count && (action = actions.shift()));
            this.active = false;
            if (error) {
                while (++index < count && (action = actions.shift())) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AsapScheduler;
    }(AsyncScheduler));

    /** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */
    var asap = /*@__PURE__*/ new AsapScheduler(AsapAction);

    /** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
    var async = /*@__PURE__*/ new AsyncScheduler(AsyncAction);

    /** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
    var AnimationFrameAction = /*@__PURE__*/ (function (_super) {
        __extends(AnimationFrameAction, _super);
        function AnimationFrameAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && delay > 0) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
        };
        AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
                return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
            }
            if (scheduler.actions.length === 0) {
                cancelAnimationFrame(id);
                scheduler.scheduled = undefined;
            }
            return undefined;
        };
        return AnimationFrameAction;
    }(AsyncAction));

    /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
    var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
        __extends(AnimationFrameScheduler, _super);
        function AnimationFrameScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimationFrameScheduler.prototype.flush = function (action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (++index < count && (action = actions.shift()));
            this.active = false;
            if (error) {
                while (++index < count && (action = actions.shift())) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AnimationFrameScheduler;
    }(AsyncScheduler));

    /** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */
    var animationFrame = /*@__PURE__*/ new AnimationFrameScheduler(AnimationFrameAction);

    /** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
    var VirtualTimeScheduler = /*@__PURE__*/ (function (_super) {
        __extends(VirtualTimeScheduler, _super);
        function VirtualTimeScheduler(SchedulerAction, maxFrames) {
            if (SchedulerAction === void 0) {
                SchedulerAction = VirtualAction;
            }
            if (maxFrames === void 0) {
                maxFrames = Number.POSITIVE_INFINITY;
            }
            var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
            _this.maxFrames = maxFrames;
            _this.frame = 0;
            _this.index = -1;
            return _this;
        }
        VirtualTimeScheduler.prototype.flush = function () {
            var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
            var error, action;
            while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            }
            if (error) {
                while (action = actions.shift()) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        VirtualTimeScheduler.frameTimeFactor = 10;
        return VirtualTimeScheduler;
    }(AsyncScheduler));
    var VirtualAction = /*@__PURE__*/ (function (_super) {
        __extends(VirtualAction, _super);
        function VirtualAction(scheduler, work, index) {
            if (index === void 0) {
                index = scheduler.index += 1;
            }
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            _this.index = index;
            _this.active = true;
            _this.index = scheduler.index = index;
            return _this;
        }
        VirtualAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (!this.id) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        };
        VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            this.delay = scheduler.frame + delay;
            var actions = scheduler.actions;
            actions.push(this);
            actions.sort(VirtualAction.sortActions);
            return true;
        };
        VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            return undefined;
        };
        VirtualAction.prototype._execute = function (state, delay) {
            if (this.active === true) {
                return _super.prototype._execute.call(this, state, delay);
            }
        };
        VirtualAction.sortActions = function (a, b) {
            if (a.delay === b.delay) {
                if (a.index === b.index) {
                    return 0;
                }
                else if (a.index > b.index) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
            else if (a.delay > b.delay) {
                return 1;
            }
            else {
                return -1;
            }
        };
        return VirtualAction;
    }(AsyncAction));

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    var EmptyError = EmptyErrorImpl;

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    function map(project, thisArg) {
        return function mapOperation(source) {
            if (typeof project !== 'function') {
                throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
            }
            return source.lift(new MapOperator(project, thisArg));
        };
    }
    var MapOperator = /*@__PURE__*/ (function () {
        function MapOperator(project, thisArg) {
            this.project = project;
            this.thisArg = thisArg;
        }
        MapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };
        return MapOperator;
    }());
    var MapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MapSubscriber, _super);
        function MapSubscriber(destination, project, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.count = 0;
            _this.thisArg = thisArg || _this;
            return _this;
        }
        MapSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.project.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return MapSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var OuterSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(OuterSubscriber, _super);
        function OuterSubscriber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        OuterSubscriber.prototype.notifyError = function (error, innerSub) {
            this.destination.error(error);
        };
        OuterSubscriber.prototype.notifyComplete = function (innerSub) {
            this.destination.complete();
        };
        return OuterSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var InnerSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(InnerSubscriber, _super);
        function InnerSubscriber(parent, outerValue, outerIndex) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            _this.outerValue = outerValue;
            _this.outerIndex = outerIndex;
            _this.index = 0;
            return _this;
        }
        InnerSubscriber.prototype._next = function (value) {
            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
        };
        InnerSubscriber.prototype._error = function (error) {
            this.parent.notifyError(error, this);
            this.unsubscribe();
        };
        InnerSubscriber.prototype._complete = function () {
            this.parent.notifyComplete(this);
            this.unsubscribe();
        };
        return InnerSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
    var subscribeToPromise = function (promise) {
        return function (subscriber) {
            promise.then(function (value) {
                if (!subscriber.closed) {
                    subscriber.next(value);
                    subscriber.complete();
                }
            }, function (err) { return subscriber.error(err); })
                .then(null, hostReportError);
            return subscriber;
        };
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function getSymbolIterator() {
        if (typeof Symbol !== 'function' || !Symbol.iterator) {
            return '@@iterator';
        }
        return Symbol.iterator;
    }
    var iterator = /*@__PURE__*/ getSymbolIterator();

    /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
    var subscribeToIterable = function (iterable) {
        return function (subscriber) {
            var iterator$$1 = iterable[iterator]();
            do {
                var item = iterator$$1.next();
                if (item.done) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(item.value);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
            if (typeof iterator$$1.return === 'function') {
                subscriber.add(function () {
                    if (iterator$$1.return) {
                        iterator$$1.return();
                    }
                });
            }
            return subscriber;
        };
    };

    /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
    var subscribeToObservable = function (obj) {
        return function (subscriber) {
            var obs = obj[observable]();
            if (typeof obs.subscribe !== 'function') {
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
            }
            else {
                return obs.subscribe(subscriber);
            }
        };
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isPromise(value) {
        return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }

    /** PURE_IMPORTS_START _Observable,_subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
    var subscribeTo = function (result) {
        if (result instanceof Observable) {
            return function (subscriber) {
                if (result._isScalar) {
                    subscriber.next(result.value);
                    subscriber.complete();
                    return undefined;
                }
                else {
                    return result.subscribe(subscriber);
                }
            };
        }
        else if (result && typeof result[observable] === 'function') {
            return subscribeToObservable(result);
        }
        else if (isArrayLike(result)) {
            return subscribeToArray(result);
        }
        else if (isPromise(result)) {
            return subscribeToPromise(result);
        }
        else if (result && typeof result[iterator] === 'function') {
            return subscribeToIterable(result);
        }
        else {
            var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
            var msg = "You provided " + value + " where a stream was expected."
                + ' You can provide an Observable, Promise, Array, or Iterable.';
            throw new TypeError(msg);
        }
    };

    /** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo PURE_IMPORTS_END */
    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
        if (destination === void 0) {
            destination = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
        }
        if (destination.closed) {
            return;
        }
        return subscribeTo(result)(destination);
    }

    /** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */
    var NONE = {};
    var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(CombineLatestSubscriber, _super);
        function CombineLatestSubscriber(destination, resultSelector) {
            var _this = _super.call(this, destination) || this;
            _this.resultSelector = resultSelector;
            _this.active = 0;
            _this.values = [];
            _this.observables = [];
            return _this;
        }
        CombineLatestSubscriber.prototype._next = function (observable) {
            this.values.push(NONE);
            this.observables.push(observable);
        };
        CombineLatestSubscriber.prototype._complete = function () {
            var observables = this.observables;
            var len = observables.length;
            if (len === 0) {
                this.destination.complete();
            }
            else {
                this.active = len;
                this.toRespond = len;
                for (var i = 0; i < len; i++) {
                    var observable = observables[i];
                    this.add(subscribeToResult(this, observable, observable, i));
                }
            }
        };
        CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
            if ((this.active -= 1) === 0) {
                this.destination.complete();
            }
        };
        CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var values = this.values;
            var oldVal = values[outerIndex];
            var toRespond = !this.toRespond
                ? 0
                : oldVal === NONE ? --this.toRespond : this.toRespond;
            values[outerIndex] = innerValue;
            if (toRespond === 0) {
                if (this.resultSelector) {
                    this._tryResultSelector(values);
                }
                else {
                    this.destination.next(values.slice());
                }
            }
        };
        CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
            var result;
            try {
                result = this.resultSelector.apply(this, values);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return CombineLatestSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
    function isInteropObservable(input) {
        return input && typeof input[observable] === 'function';
    }

    /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
    function isIterable(input) {
        return input && typeof input[iterator] === 'function';
    }

    /** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToPromise PURE_IMPORTS_END */
    function fromPromise(input, scheduler) {
        if (!scheduler) {
            return new Observable(subscribeToPromise(input));
        }
        else {
            return new Observable(function (subscriber) {
                var sub = new Subscription();
                sub.add(scheduler.schedule(function () {
                    return input.then(function (value) {
                        sub.add(scheduler.schedule(function () {
                            subscriber.next(value);
                            sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                        }));
                    }, function (err) {
                        sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
                    });
                }));
                return sub;
            });
        }
    }

    /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator,_util_subscribeToIterable PURE_IMPORTS_END */
    function fromIterable(input, scheduler) {
        if (!input) {
            throw new Error('Iterable cannot be null');
        }
        if (!scheduler) {
            return new Observable(subscribeToIterable(input));
        }
        else {
            return new Observable(function (subscriber) {
                var sub = new Subscription();
                var iterator$$1;
                sub.add(function () {
                    if (iterator$$1 && typeof iterator$$1.return === 'function') {
                        iterator$$1.return();
                    }
                });
                sub.add(scheduler.schedule(function () {
                    iterator$$1 = input[iterator]();
                    sub.add(scheduler.schedule(function () {
                        if (subscriber.closed) {
                            return;
                        }
                        var value;
                        var done;
                        try {
                            var result = iterator$$1.next();
                            value = result.value;
                            done = result.done;
                        }
                        catch (err) {
                            subscriber.error(err);
                            return;
                        }
                        if (done) {
                            subscriber.complete();
                        }
                        else {
                            subscriber.next(value);
                            this.schedule();
                        }
                    }));
                }));
                return sub;
            });
        }
    }

    /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable,_util_subscribeToObservable PURE_IMPORTS_END */
    function fromObservable(input, scheduler) {
        if (!scheduler) {
            return new Observable(subscribeToObservable(input));
        }
        else {
            return new Observable(function (subscriber) {
                var sub = new Subscription();
                sub.add(scheduler.schedule(function () {
                    var observable$$1 = input[observable]();
                    sub.add(observable$$1.subscribe({
                        next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                        error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                        complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                    }));
                }));
                return sub;
            });
        }
    }

    /** PURE_IMPORTS_START _Observable,_util_isPromise,_util_isArrayLike,_util_isInteropObservable,_util_isIterable,_fromArray,_fromPromise,_fromIterable,_fromObservable,_util_subscribeTo PURE_IMPORTS_END */
    function from(input, scheduler) {
        if (!scheduler) {
            if (input instanceof Observable) {
                return input;
            }
            return new Observable(subscribeTo(input));
        }
        if (input != null) {
            if (isInteropObservable(input)) {
                return fromObservable(input, scheduler);
            }
            else if (isPromise(input)) {
                return fromPromise(input, scheduler);
            }
            else if (isArrayLike(input)) {
                return fromArray(input, scheduler);
            }
            else if (isIterable(input) || typeof input === 'string') {
                return fromIterable(input, scheduler);
            }
        }
        throw new TypeError((input !== null && typeof input || input) + ' is not observable');
    }

    /** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */
    var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MergeMapSubscriber, _super);
        function MergeMapSubscriber(destination, project, concurrent) {
            if (concurrent === void 0) {
                concurrent = Number.POSITIVE_INFINITY;
            }
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.concurrent = concurrent;
            _this.hasCompleted = false;
            _this.buffer = [];
            _this.active = 0;
            _this.index = 0;
            return _this;
        }
        MergeMapSubscriber.prototype._next = function (value) {
            if (this.active < this.concurrent) {
                this._tryNext(value);
            }
            else {
                this.buffer.push(value);
            }
        };
        MergeMapSubscriber.prototype._tryNext = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.active++;
            this._innerSub(result, value, index);
        };
        MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            var destination = this.destination;
            destination.add(innerSubscriber);
            subscribeToResult(this, ish, value, index, innerSubscriber);
        };
        MergeMapSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                this.destination.complete();
            }
            this.unsubscribe();
        };
        MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            this.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            }
            else if (this.active === 0 && this.hasCompleted) {
                this.destination.complete();
            }
        };
        return MergeMapSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_isScheduler,_of,_from,_operators_concatAll PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Observable,_util_isArray,_empty,_util_subscribeToResult,_OuterSubscriber,_operators_map PURE_IMPORTS_END */
    function forkJoin() {
        var sources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sources[_i] = arguments[_i];
        }
        var resultSelector;
        if (typeof sources[sources.length - 1] === 'function') {
            resultSelector = sources.pop();
        }
        if (sources.length === 1 && isArray(sources[0])) {
            sources = sources[0];
        }
        if (sources.length === 0) {
            return EMPTY;
        }
        if (resultSelector) {
            return forkJoin(sources).pipe(map(function (args) { return resultSelector.apply(void 0, args); }));
        }
        return new Observable(function (subscriber) {
            return new ForkJoinSubscriber(subscriber, sources);
        });
    }
    var ForkJoinSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ForkJoinSubscriber, _super);
        function ForkJoinSubscriber(destination, sources) {
            var _this = _super.call(this, destination) || this;
            _this.sources = sources;
            _this.completed = 0;
            _this.haveValues = 0;
            var len = sources.length;
            _this.values = new Array(len);
            for (var i = 0; i < len; i++) {
                var source = sources[i];
                var innerSubscription = subscribeToResult(_this, source, null, i);
                if (innerSubscription) {
                    _this.add(innerSubscription);
                }
            }
            return _this;
        }
        ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values[outerIndex] = innerValue;
            if (!innerSub._hasValue) {
                innerSub._hasValue = true;
                this.haveValues++;
            }
        };
        ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
            var _a = this, destination = _a.destination, haveValues = _a.haveValues, values = _a.values;
            var len = values.length;
            if (!innerSub._hasValue) {
                destination.complete();
                return;
            }
            this.completed++;
            if (this.completed !== len) {
                return;
            }
            if (haveValues === len) {
                destination.next(values);
            }
            destination.complete();
        };
        return ForkJoinSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
    function isNumeric(val) {
        return !isArray(val) && (val - parseFloat(val) + 1) >= 0;
    }

    /** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */
    var NEVER = /*@__PURE__*/ new Observable(noop);

    /** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var RaceSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RaceSubscriber, _super);
        function RaceSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasFirst = false;
            _this.observables = [];
            _this.subscriptions = [];
            return _this;
        }
        RaceSubscriber.prototype._next = function (observable) {
            this.observables.push(observable);
        };
        RaceSubscriber.prototype._complete = function () {
            var observables = this.observables;
            var len = observables.length;
            if (len === 0) {
                this.destination.complete();
            }
            else {
                for (var i = 0; i < len && !this.hasFirst; i++) {
                    var observable = observables[i];
                    var subscription = subscribeToResult(this, observable, observable, i);
                    if (this.subscriptions) {
                        this.subscriptions.push(subscription);
                    }
                    this.add(subscription);
                }
                this.observables = null;
            }
        };
        RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            if (!this.hasFirst) {
                this.hasFirst = true;
                for (var i = 0; i < this.subscriptions.length; i++) {
                    if (i !== outerIndex) {
                        var subscription = this.subscriptions[i];
                        subscription.unsubscribe();
                        this.remove(subscription);
                    }
                }
                this.subscriptions = null;
            }
            this.destination.next(innerValue);
        };
        return RaceSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */
    var ZipSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ZipSubscriber, _super);
        function ZipSubscriber(destination, resultSelector, values) {
            if (values === void 0) {
                values = Object.create(null);
            }
            var _this = _super.call(this, destination) || this;
            _this.iterators = [];
            _this.active = 0;
            _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
            _this.values = values;
            return _this;
        }
        ZipSubscriber.prototype._next = function (value) {
            var iterators = this.iterators;
            if (isArray(value)) {
                iterators.push(new StaticArrayIterator(value));
            }
            else if (typeof value[iterator] === 'function') {
                iterators.push(new StaticIterator(value[iterator]()));
            }
            else {
                iterators.push(new ZipBufferIterator(this.destination, this, value));
            }
        };
        ZipSubscriber.prototype._complete = function () {
            var iterators = this.iterators;
            var len = iterators.length;
            this.unsubscribe();
            if (len === 0) {
                this.destination.complete();
                return;
            }
            this.active = len;
            for (var i = 0; i < len; i++) {
                var iterator$$1 = iterators[i];
                if (iterator$$1.stillUnsubscribed) {
                    var destination = this.destination;
                    destination.add(iterator$$1.subscribe(iterator$$1, i));
                }
                else {
                    this.active--;
                }
            }
        };
        ZipSubscriber.prototype.notifyInactive = function () {
            this.active--;
            if (this.active === 0) {
                this.destination.complete();
            }
        };
        ZipSubscriber.prototype.checkIterators = function () {
            var iterators = this.iterators;
            var len = iterators.length;
            var destination = this.destination;
            for (var i = 0; i < len; i++) {
                var iterator$$1 = iterators[i];
                if (typeof iterator$$1.hasValue === 'function' && !iterator$$1.hasValue()) {
                    return;
                }
            }
            var shouldComplete = false;
            var args = [];
            for (var i = 0; i < len; i++) {
                var iterator$$1 = iterators[i];
                var result = iterator$$1.next();
                if (iterator$$1.hasCompleted()) {
                    shouldComplete = true;
                }
                if (result.done) {
                    destination.complete();
                    return;
                }
                args.push(result.value);
            }
            if (this.resultSelector) {
                this._tryresultSelector(args);
            }
            else {
                destination.next(args);
            }
            if (shouldComplete) {
                destination.complete();
            }
        };
        ZipSubscriber.prototype._tryresultSelector = function (args) {
            var result;
            try {
                result = this.resultSelector.apply(this, args);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return ZipSubscriber;
    }(Subscriber));
    var StaticIterator = /*@__PURE__*/ (function () {
        function StaticIterator(iterator$$1) {
            this.iterator = iterator$$1;
            this.nextResult = iterator$$1.next();
        }
        StaticIterator.prototype.hasValue = function () {
            return true;
        };
        StaticIterator.prototype.next = function () {
            var result = this.nextResult;
            this.nextResult = this.iterator.next();
            return result;
        };
        StaticIterator.prototype.hasCompleted = function () {
            var nextResult = this.nextResult;
            return nextResult && nextResult.done;
        };
        return StaticIterator;
    }());
    var StaticArrayIterator = /*@__PURE__*/ (function () {
        function StaticArrayIterator(array) {
            this.array = array;
            this.index = 0;
            this.length = 0;
            this.length = array.length;
        }
        StaticArrayIterator.prototype[iterator] = function () {
            return this;
        };
        StaticArrayIterator.prototype.next = function (value) {
            var i = this.index++;
            var array = this.array;
            return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
        };
        StaticArrayIterator.prototype.hasValue = function () {
            return this.array.length > this.index;
        };
        StaticArrayIterator.prototype.hasCompleted = function () {
            return this.array.length === this.index;
        };
        return StaticArrayIterator;
    }());
    var ZipBufferIterator = /*@__PURE__*/ (function (_super) {
        __extends(ZipBufferIterator, _super);
        function ZipBufferIterator(destination, parent, observable) {
            var _this = _super.call(this, destination) || this;
            _this.parent = parent;
            _this.observable = observable;
            _this.stillUnsubscribed = true;
            _this.buffer = [];
            _this.isComplete = false;
            return _this;
        }
        ZipBufferIterator.prototype[iterator] = function () {
            return this;
        };
        ZipBufferIterator.prototype.next = function () {
            var buffer = this.buffer;
            if (buffer.length === 0 && this.isComplete) {
                return { value: null, done: true };
            }
            else {
                return { value: buffer.shift(), done: false };
            }
        };
        ZipBufferIterator.prototype.hasValue = function () {
            return this.buffer.length > 0;
        };
        ZipBufferIterator.prototype.hasCompleted = function () {
            return this.buffer.length === 0 && this.isComplete;
        };
        ZipBufferIterator.prototype.notifyComplete = function () {
            if (this.buffer.length > 0) {
                this.isComplete = true;
                this.parent.notifyInactive();
            }
            else {
                this.destination.complete();
            }
        };
        ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.buffer.push(innerValue);
            this.parent.checkIterators();
        };
        ZipBufferIterator.prototype.subscribe = function (value, index) {
            return subscribeToResult(this, this.observable, this, index);
        };
        return ZipBufferIterator;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_util_tryCatch,_util_errorObject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var AuditSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(AuditSubscriber, _super);
        function AuditSubscriber(destination, durationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.durationSelector = durationSelector;
            _this.hasValue = false;
            return _this;
        }
        AuditSubscriber.prototype._next = function (value) {
            this.value = value;
            this.hasValue = true;
            if (!this.throttled) {
                var duration = tryCatch(this.durationSelector)(value);
                if (duration === errorObject) {
                    this.destination.error(errorObject.e);
                }
                else {
                    var innerSubscription = subscribeToResult(this, duration);
                    if (!innerSubscription || innerSubscription.closed) {
                        this.clearThrottle();
                    }
                    else {
                        this.add(this.throttled = innerSubscription);
                    }
                }
            }
        };
        AuditSubscriber.prototype.clearThrottle = function () {
            var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
            if (throttled) {
                this.remove(throttled);
                this.throttled = null;
                throttled.unsubscribe();
            }
            if (hasValue) {
                this.value = null;
                this.hasValue = false;
                this.destination.next(value);
            }
        };
        AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
            this.clearThrottle();
        };
        AuditSubscriber.prototype.notifyComplete = function () {
            this.clearThrottle();
        };
        return AuditSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _scheduler_async,_audit,_observable_timer PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var BufferSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferSubscriber, _super);
        function BufferSubscriber(destination, closingNotifier) {
            var _this = _super.call(this, destination) || this;
            _this.buffer = [];
            _this.add(subscribeToResult(_this, closingNotifier));
            return _this;
        }
        BufferSubscriber.prototype._next = function (value) {
            this.buffer.push(value);
        };
        BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var buffer = this.buffer;
            this.buffer = [];
            this.destination.next(buffer);
        };
        return BufferSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var BufferCountSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferCountSubscriber, _super);
        function BufferCountSubscriber(destination, bufferSize) {
            var _this = _super.call(this, destination) || this;
            _this.bufferSize = bufferSize;
            _this.buffer = [];
            return _this;
        }
        BufferCountSubscriber.prototype._next = function (value) {
            var buffer = this.buffer;
            buffer.push(value);
            if (buffer.length == this.bufferSize) {
                this.destination.next(buffer);
                this.buffer = [];
            }
        };
        BufferCountSubscriber.prototype._complete = function () {
            var buffer = this.buffer;
            if (buffer.length > 0) {
                this.destination.next(buffer);
            }
            _super.prototype._complete.call(this);
        };
        return BufferCountSubscriber;
    }(Subscriber));
    var BufferSkipCountSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferSkipCountSubscriber, _super);
        function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
            var _this = _super.call(this, destination) || this;
            _this.bufferSize = bufferSize;
            _this.startBufferEvery = startBufferEvery;
            _this.buffers = [];
            _this.count = 0;
            return _this;
        }
        BufferSkipCountSubscriber.prototype._next = function (value) {
            var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
            this.count++;
            if (count % startBufferEvery === 0) {
                buffers.push([]);
            }
            for (var i = buffers.length; i--;) {
                var buffer = buffers[i];
                buffer.push(value);
                if (buffer.length === bufferSize) {
                    buffers.splice(i, 1);
                    this.destination.next(buffer);
                }
            }
        };
        BufferSkipCountSubscriber.prototype._complete = function () {
            var _a = this, buffers = _a.buffers, destination = _a.destination;
            while (buffers.length > 0) {
                var buffer = buffers.shift();
                if (buffer.length > 0) {
                    destination.next(buffer);
                }
            }
            _super.prototype._complete.call(this);
        };
        return BufferSkipCountSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_scheduler_async,_Subscriber,_util_isScheduler PURE_IMPORTS_END */
    var Context = /*@__PURE__*/ (function () {
        function Context() {
            this.buffer = [];
        }
        return Context;
    }());
    var BufferTimeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferTimeSubscriber, _super);
        function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.bufferTimeSpan = bufferTimeSpan;
            _this.bufferCreationInterval = bufferCreationInterval;
            _this.maxBufferSize = maxBufferSize;
            _this.scheduler = scheduler;
            _this.contexts = [];
            var context = _this.openContext();
            _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
            if (_this.timespanOnly) {
                var timeSpanOnlyState = { subscriber: _this, context: context, bufferTimeSpan: bufferTimeSpan };
                _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
            }
            else {
                var closeState = { subscriber: _this, context: context };
                var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: _this, scheduler: scheduler };
                _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
                _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
            }
            return _this;
        }
        BufferTimeSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            var len = contexts.length;
            var filledBufferContext;
            for (var i = 0; i < len; i++) {
                var context_1 = contexts[i];
                var buffer = context_1.buffer;
                buffer.push(value);
                if (buffer.length == this.maxBufferSize) {
                    filledBufferContext = context_1;
                }
            }
            if (filledBufferContext) {
                this.onBufferFull(filledBufferContext);
            }
        };
        BufferTimeSubscriber.prototype._error = function (err) {
            this.contexts.length = 0;
            _super.prototype._error.call(this, err);
        };
        BufferTimeSubscriber.prototype._complete = function () {
            var _a = this, contexts = _a.contexts, destination = _a.destination;
            while (contexts.length > 0) {
                var context_2 = contexts.shift();
                destination.next(context_2.buffer);
            }
            _super.prototype._complete.call(this);
        };
        BufferTimeSubscriber.prototype._unsubscribe = function () {
            this.contexts = null;
        };
        BufferTimeSubscriber.prototype.onBufferFull = function (context) {
            this.closeContext(context);
            var closeAction = context.closeAction;
            closeAction.unsubscribe();
            this.remove(closeAction);
            if (!this.closed && this.timespanOnly) {
                context = this.openContext();
                var bufferTimeSpan = this.bufferTimeSpan;
                var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
                this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
            }
        };
        BufferTimeSubscriber.prototype.openContext = function () {
            var context = new Context();
            this.contexts.push(context);
            return context;
        };
        BufferTimeSubscriber.prototype.closeContext = function (context) {
            this.destination.next(context.buffer);
            var contexts = this.contexts;
            var spliceIndex = contexts ? contexts.indexOf(context) : -1;
            if (spliceIndex >= 0) {
                contexts.splice(contexts.indexOf(context), 1);
            }
        };
        return BufferTimeSubscriber;
    }(Subscriber));
    function dispatchBufferTimeSpanOnly(state) {
        var subscriber = state.subscriber;
        var prevContext = state.context;
        if (prevContext) {
            subscriber.closeContext(prevContext);
        }
        if (!subscriber.closed) {
            state.context = subscriber.openContext();
            state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
        }
    }
    function dispatchBufferCreation(state) {
        var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
        var context = subscriber.openContext();
        var action = this;
        if (!subscriber.closed) {
            subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
            action.schedule(state, bufferCreationInterval);
        }
    }
    function dispatchBufferClose(arg) {
        var subscriber = arg.subscriber, context = arg.context;
        subscriber.closeContext(context);
    }

    /** PURE_IMPORTS_START tslib,_Subscription,_util_subscribeToResult,_OuterSubscriber PURE_IMPORTS_END */
    var BufferToggleSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferToggleSubscriber, _super);
        function BufferToggleSubscriber(destination, openings, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.openings = openings;
            _this.closingSelector = closingSelector;
            _this.contexts = [];
            _this.add(subscribeToResult(_this, openings));
            return _this;
        }
        BufferToggleSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].buffer.push(value);
            }
        };
        BufferToggleSubscriber.prototype._error = function (err) {
            var contexts = this.contexts;
            while (contexts.length > 0) {
                var context_1 = contexts.shift();
                context_1.subscription.unsubscribe();
                context_1.buffer = null;
                context_1.subscription = null;
            }
            this.contexts = null;
            _super.prototype._error.call(this, err);
        };
        BufferToggleSubscriber.prototype._complete = function () {
            var contexts = this.contexts;
            while (contexts.length > 0) {
                var context_2 = contexts.shift();
                this.destination.next(context_2.buffer);
                context_2.subscription.unsubscribe();
                context_2.buffer = null;
                context_2.subscription = null;
            }
            this.contexts = null;
            _super.prototype._complete.call(this);
        };
        BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
        };
        BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
            this.closeBuffer(innerSub.context);
        };
        BufferToggleSubscriber.prototype.openBuffer = function (value) {
            try {
                var closingSelector = this.closingSelector;
                var closingNotifier = closingSelector.call(this, value);
                if (closingNotifier) {
                    this.trySubscribe(closingNotifier);
                }
            }
            catch (err) {
                this._error(err);
            }
        };
        BufferToggleSubscriber.prototype.closeBuffer = function (context) {
            var contexts = this.contexts;
            if (contexts && context) {
                var buffer = context.buffer, subscription = context.subscription;
                this.destination.next(buffer);
                contexts.splice(contexts.indexOf(context), 1);
                this.remove(subscription);
                subscription.unsubscribe();
            }
        };
        BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
            var contexts = this.contexts;
            var buffer = [];
            var subscription = new Subscription();
            var context = { buffer: buffer, subscription: subscription };
            contexts.push(context);
            var innerSubscription = subscribeToResult(this, closingNotifier, context);
            if (!innerSubscription || innerSubscription.closed) {
                this.closeBuffer(context);
            }
            else {
                innerSubscription.context = context;
                this.add(innerSubscription);
                subscription.add(innerSubscription);
            }
        };
        return BufferToggleSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscription,_util_tryCatch,_util_errorObject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var BufferWhenSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(BufferWhenSubscriber, _super);
        function BufferWhenSubscriber(destination, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.closingSelector = closingSelector;
            _this.subscribing = false;
            _this.openBuffer();
            return _this;
        }
        BufferWhenSubscriber.prototype._next = function (value) {
            this.buffer.push(value);
        };
        BufferWhenSubscriber.prototype._complete = function () {
            var buffer = this.buffer;
            if (buffer) {
                this.destination.next(buffer);
            }
            _super.prototype._complete.call(this);
        };
        BufferWhenSubscriber.prototype._unsubscribe = function () {
            this.buffer = null;
            this.subscribing = false;
        };
        BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openBuffer();
        };
        BufferWhenSubscriber.prototype.notifyComplete = function () {
            if (this.subscribing) {
                this.complete();
            }
            else {
                this.openBuffer();
            }
        };
        BufferWhenSubscriber.prototype.openBuffer = function () {
            var closingSubscription = this.closingSubscription;
            if (closingSubscription) {
                this.remove(closingSubscription);
                closingSubscription.unsubscribe();
            }
            var buffer = this.buffer;
            if (this.buffer) {
                this.destination.next(buffer);
            }
            this.buffer = [];
            var closingNotifier = tryCatch(this.closingSelector)();
            if (closingNotifier === errorObject) {
                this.error(errorObject.e);
            }
            else {
                closingSubscription = new Subscription();
                this.closingSubscription = closingSubscription;
                this.add(closingSubscription);
                this.subscribing = true;
                closingSubscription.add(subscribeToResult(this, closingNotifier));
                this.subscribing = false;
            }
        };
        return BufferWhenSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var CatchSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(CatchSubscriber, _super);
        function CatchSubscriber(destination, selector, caught) {
            var _this = _super.call(this, destination) || this;
            _this.selector = selector;
            _this.caught = caught;
            return _this;
        }
        CatchSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var result = void 0;
                try {
                    result = this.selector(err, this.caught);
                }
                catch (err2) {
                    _super.prototype.error.call(this, err2);
                    return;
                }
                this._unsubscribeAndRecycle();
                var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
                this.add(innerSubscriber);
                subscribeToResult(this, result, undefined, undefined, innerSubscriber);
            }
        };
        return CatchSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _observable_combineLatest PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_isArray,_observable_combineLatest,_observable_from PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_concat PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _concatMap PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var CountSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(CountSubscriber, _super);
        function CountSubscriber(destination, predicate, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.count = 0;
            _this.index = 0;
            return _this;
        }
        CountSubscriber.prototype._next = function (value) {
            if (this.predicate) {
                this._tryPredicate(value);
            }
            else {
                this.count++;
            }
        };
        CountSubscriber.prototype._tryPredicate = function (value) {
            var result;
            try {
                result = this.predicate(value, this.index++, this.source);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (result) {
                this.count++;
            }
        };
        CountSubscriber.prototype._complete = function () {
            this.destination.next(this.count);
            this.destination.complete();
        };
        return CountSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var DebounceSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DebounceSubscriber, _super);
        function DebounceSubscriber(destination, durationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.durationSelector = durationSelector;
            _this.hasValue = false;
            _this.durationSubscription = null;
            return _this;
        }
        DebounceSubscriber.prototype._next = function (value) {
            try {
                var result = this.durationSelector.call(this, value);
                if (result) {
                    this._tryNext(value, result);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        DebounceSubscriber.prototype._complete = function () {
            this.emitValue();
            this.destination.complete();
        };
        DebounceSubscriber.prototype._tryNext = function (value, duration) {
            var subscription = this.durationSubscription;
            this.value = value;
            this.hasValue = true;
            if (subscription) {
                subscription.unsubscribe();
                this.remove(subscription);
            }
            subscription = subscribeToResult(this, duration);
            if (subscription && !subscription.closed) {
                this.add(this.durationSubscription = subscription);
            }
        };
        DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.emitValue();
        };
        DebounceSubscriber.prototype.notifyComplete = function () {
            this.emitValue();
        };
        DebounceSubscriber.prototype.emitValue = function () {
            if (this.hasValue) {
                var value = this.value;
                var subscription = this.durationSubscription;
                if (subscription) {
                    this.durationSubscription = null;
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
                this.value = null;
                this.hasValue = false;
                _super.prototype._next.call(this, value);
            }
        };
        return DebounceSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
    var DebounceTimeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DebounceTimeSubscriber, _super);
        function DebounceTimeSubscriber(destination, dueTime, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.dueTime = dueTime;
            _this.scheduler = scheduler;
            _this.debouncedSubscription = null;
            _this.lastValue = null;
            _this.hasValue = false;
            return _this;
        }
        DebounceTimeSubscriber.prototype._next = function (value) {
            this.clearDebounce();
            this.lastValue = value;
            this.hasValue = true;
            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext$2, this.dueTime, this));
        };
        DebounceTimeSubscriber.prototype._complete = function () {
            this.debouncedNext();
            this.destination.complete();
        };
        DebounceTimeSubscriber.prototype.debouncedNext = function () {
            this.clearDebounce();
            if (this.hasValue) {
                var lastValue = this.lastValue;
                this.lastValue = null;
                this.hasValue = false;
                this.destination.next(lastValue);
            }
        };
        DebounceTimeSubscriber.prototype.clearDebounce = function () {
            var debouncedSubscription = this.debouncedSubscription;
            if (debouncedSubscription !== null) {
                this.remove(debouncedSubscription);
                debouncedSubscription.unsubscribe();
                this.debouncedSubscription = null;
            }
        };
        return DebounceTimeSubscriber;
    }(Subscriber));
    function dispatchNext$2(subscriber) {
        subscriber.debouncedNext();
    }

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var DefaultIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DefaultIfEmptySubscriber, _super);
        function DefaultIfEmptySubscriber(destination, defaultValue) {
            var _this = _super.call(this, destination) || this;
            _this.defaultValue = defaultValue;
            _this.isEmpty = true;
            return _this;
        }
        DefaultIfEmptySubscriber.prototype._next = function (value) {
            this.isEmpty = false;
            this.destination.next(value);
        };
        DefaultIfEmptySubscriber.prototype._complete = function () {
            if (this.isEmpty) {
                this.destination.next(this.defaultValue);
            }
            this.destination.complete();
        };
        return DefaultIfEmptySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_Subscriber,_Notification PURE_IMPORTS_END */
    var DelaySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DelaySubscriber, _super);
        function DelaySubscriber(destination, delay, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.delay = delay;
            _this.scheduler = scheduler;
            _this.queue = [];
            _this.active = false;
            _this.errored = false;
            return _this;
        }
        DelaySubscriber.dispatch = function (state) {
            var source = state.source;
            var queue = source.queue;
            var scheduler = state.scheduler;
            var destination = state.destination;
            while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
                queue.shift().notification.observe(destination);
            }
            if (queue.length > 0) {
                var delay_1 = Math.max(0, queue[0].time - scheduler.now());
                this.schedule(state, delay_1);
            }
            else {
                this.unsubscribe();
                source.active = false;
            }
        };
        DelaySubscriber.prototype._schedule = function (scheduler) {
            this.active = true;
            var destination = this.destination;
            destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
                source: this, destination: this.destination, scheduler: scheduler
            }));
        };
        DelaySubscriber.prototype.scheduleNotification = function (notification) {
            if (this.errored === true) {
                return;
            }
            var scheduler = this.scheduler;
            var message = new DelayMessage(scheduler.now() + this.delay, notification);
            this.queue.push(message);
            if (this.active === false) {
                this._schedule(scheduler);
            }
        };
        DelaySubscriber.prototype._next = function (value) {
            this.scheduleNotification(Notification.createNext(value));
        };
        DelaySubscriber.prototype._error = function (err) {
            this.errored = true;
            this.queue = [];
            this.destination.error(err);
            this.unsubscribe();
        };
        DelaySubscriber.prototype._complete = function () {
            this.scheduleNotification(Notification.createComplete());
            this.unsubscribe();
        };
        return DelaySubscriber;
    }(Subscriber));
    var DelayMessage = /*@__PURE__*/ (function () {
        function DelayMessage(time, notification) {
            this.time = time;
            this.notification = notification;
        }
        return DelayMessage;
    }());

    /** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var DelayWhenSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DelayWhenSubscriber, _super);
        function DelayWhenSubscriber(destination, delayDurationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.delayDurationSelector = delayDurationSelector;
            _this.completed = false;
            _this.delayNotifierSubscriptions = [];
            _this.index = 0;
            return _this;
        }
        DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(outerValue);
            this.removeSubscription(innerSub);
            this.tryComplete();
        };
        DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
            var value = this.removeSubscription(innerSub);
            if (value) {
                this.destination.next(value);
            }
            this.tryComplete();
        };
        DelayWhenSubscriber.prototype._next = function (value) {
            var index = this.index++;
            try {
                var delayNotifier = this.delayDurationSelector(value, index);
                if (delayNotifier) {
                    this.tryDelay(delayNotifier, value);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        DelayWhenSubscriber.prototype._complete = function () {
            this.completed = true;
            this.tryComplete();
            this.unsubscribe();
        };
        DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
            subscription.unsubscribe();
            var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
            if (subscriptionIdx !== -1) {
                this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
            }
            return subscription.outerValue;
        };
        DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
            var notifierSubscription = subscribeToResult(this, delayNotifier, value);
            if (notifierSubscription && !notifierSubscription.closed) {
                var destination = this.destination;
                destination.add(notifierSubscription);
                this.delayNotifierSubscriptions.push(notifierSubscription);
            }
        };
        DelayWhenSubscriber.prototype.tryComplete = function () {
            if (this.completed && this.delayNotifierSubscriptions.length === 0) {
                this.destination.complete();
            }
        };
        return DelayWhenSubscriber;
    }(OuterSubscriber));
    var SubscriptionDelayObservable = /*@__PURE__*/ (function (_super) {
        __extends(SubscriptionDelayObservable, _super);
        function SubscriptionDelayObservable(source, subscriptionDelay) {
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.subscriptionDelay = subscriptionDelay;
            return _this;
        }
        SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
            this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
        };
        return SubscriptionDelayObservable;
    }(Observable));
    var SubscriptionDelaySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SubscriptionDelaySubscriber, _super);
        function SubscriptionDelaySubscriber(parent, source) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            _this.source = source;
            _this.sourceSubscribed = false;
            return _this;
        }
        SubscriptionDelaySubscriber.prototype._next = function (unused) {
            this.subscribeToSource();
        };
        SubscriptionDelaySubscriber.prototype._error = function (err) {
            this.unsubscribe();
            this.parent.error(err);
        };
        SubscriptionDelaySubscriber.prototype._complete = function () {
            this.unsubscribe();
            this.subscribeToSource();
        };
        SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
            if (!this.sourceSubscribed) {
                this.sourceSubscribed = true;
                this.unsubscribe();
                this.source.subscribe(this.parent);
            }
        };
        return SubscriptionDelaySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var DeMaterializeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DeMaterializeSubscriber, _super);
        function DeMaterializeSubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        DeMaterializeSubscriber.prototype._next = function (value) {
            value.observe(this.destination);
        };
        return DeMaterializeSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var DistinctSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DistinctSubscriber, _super);
        function DistinctSubscriber(destination, keySelector, flushes) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.values = new Set();
            if (flushes) {
                _this.add(subscribeToResult(_this, flushes));
            }
            return _this;
        }
        DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values.clear();
        };
        DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        DistinctSubscriber.prototype._next = function (value) {
            if (this.keySelector) {
                this._useKeySelector(value);
            }
            else {
                this._finalizeNext(value, value);
            }
        };
        DistinctSubscriber.prototype._useKeySelector = function (value) {
            var key;
            var destination = this.destination;
            try {
                key = this.keySelector(value);
            }
            catch (err) {
                destination.error(err);
                return;
            }
            this._finalizeNext(key, value);
        };
        DistinctSubscriber.prototype._finalizeNext = function (key, value) {
            var values = this.values;
            if (!values.has(key)) {
                values.add(key);
                this.destination.next(value);
            }
        };
        return DistinctSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_tryCatch,_util_errorObject PURE_IMPORTS_END */
    var DistinctUntilChangedSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DistinctUntilChangedSubscriber, _super);
        function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.hasKey = false;
            if (typeof compare === 'function') {
                _this.compare = compare;
            }
            return _this;
        }
        DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
            return x === y;
        };
        DistinctUntilChangedSubscriber.prototype._next = function (value) {
            var keySelector = this.keySelector;
            var key = value;
            if (keySelector) {
                key = tryCatch(this.keySelector)(value);
                if (key === errorObject) {
                    return this.destination.error(errorObject.e);
                }
            }
            var result = false;
            if (this.hasKey) {
                result = tryCatch(this.compare)(this.key, key);
                if (result === errorObject) {
                    return this.destination.error(errorObject.e);
                }
            }
            else {
                this.hasKey = true;
            }
            if (Boolean(result) === false) {
                this.key = key;
                this.destination.next(value);
            }
        };
        return DistinctUntilChangedSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _distinctUntilChanged PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var FilterSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(FilterSubscriber, _super);
        function FilterSubscriber(destination, predicate, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.thisArg = thisArg;
            _this.count = 0;
            return _this;
        }
        FilterSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.predicate.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (result) {
                this.destination.next(value);
            }
        };
        return FilterSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */
    var TapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TapSubscriber, _super);
        function TapSubscriber(destination, observerOrNext, error, complete) {
            var _this = _super.call(this, destination) || this;
            _this._tapNext = noop;
            _this._tapError = noop;
            _this._tapComplete = noop;
            _this._tapError = error || noop;
            _this._tapComplete = complete || noop;
            if (isFunction(observerOrNext)) {
                _this._context = _this;
                _this._tapNext = observerOrNext;
            }
            else if (observerOrNext) {
                _this._context = observerOrNext;
                _this._tapNext = observerOrNext.next || noop;
                _this._tapError = observerOrNext.error || noop;
                _this._tapComplete = observerOrNext.complete || noop;
            }
            return _this;
        }
        TapSubscriber.prototype._next = function (value) {
            try {
                this._tapNext.call(this._context, value);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(value);
        };
        TapSubscriber.prototype._error = function (err) {
            try {
                this._tapError.call(this._context, err);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.error(err);
        };
        TapSubscriber.prototype._complete = function () {
            try {
                this._tapComplete.call(this._context);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            return this.destination.complete();
        };
        return TapSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _tap,_util_EmptyError PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
    var TakeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TakeSubscriber, _super);
        function TakeSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.count = 0;
            return _this;
        }
        TakeSubscriber.prototype._next = function (value) {
            var total = this.total;
            var count = ++this.count;
            if (count <= total) {
                this.destination.next(value);
                if (count === total) {
                    this.destination.complete();
                    this.unsubscribe();
                }
            }
        };
        return TakeSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _util_ArgumentOutOfRangeError,_filter,_throwIfEmpty,_defaultIfEmpty,_take PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_fromArray,_observable_scalar,_observable_empty,_observable_concat,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var EverySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(EverySubscriber, _super);
        function EverySubscriber(destination, predicate, thisArg, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.thisArg = thisArg;
            _this.source = source;
            _this.index = 0;
            _this.thisArg = thisArg || _this;
            return _this;
        }
        EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
            this.destination.next(everyValueMatch);
            this.destination.complete();
        };
        EverySubscriber.prototype._next = function (value) {
            var result = false;
            try {
                result = this.predicate.call(this.thisArg, value, this.index++, this.source);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (!result) {
                this.notifyComplete(false);
            }
        };
        EverySubscriber.prototype._complete = function () {
            this.notifyComplete(true);
        };
        return EverySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var SwitchFirstSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SwitchFirstSubscriber, _super);
        function SwitchFirstSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasCompleted = false;
            _this.hasSubscription = false;
            return _this;
        }
        SwitchFirstSubscriber.prototype._next = function (value) {
            if (!this.hasSubscription) {
                this.hasSubscription = true;
                this.add(subscribeToResult(this, value));
            }
        };
        SwitchFirstSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (!this.hasSubscription) {
                this.destination.complete();
            }
        };
        SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
            this.remove(innerSub);
            this.hasSubscription = false;
            if (this.hasCompleted) {
                this.destination.complete();
            }
        };
        return SwitchFirstSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */
    var ExhaustMapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ExhaustMapSubscriber, _super);
        function ExhaustMapSubscriber(destination, project) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.hasSubscription = false;
            _this.hasCompleted = false;
            _this.index = 0;
            return _this;
        }
        ExhaustMapSubscriber.prototype._next = function (value) {
            if (!this.hasSubscription) {
                this.tryNext(value);
            }
        };
        ExhaustMapSubscriber.prototype.tryNext = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.hasSubscription = true;
            this._innerSub(result, value, index);
        };
        ExhaustMapSubscriber.prototype._innerSub = function (result, value, index) {
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            var destination = this.destination;
            destination.add(innerSubscriber);
            subscribeToResult(this, result, value, index, innerSubscriber);
        };
        ExhaustMapSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (!this.hasSubscription) {
                this.destination.complete();
            }
            this.unsubscribe();
        };
        ExhaustMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        ExhaustMapSubscriber.prototype.notifyError = function (err) {
            this.destination.error(err);
        };
        ExhaustMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var destination = this.destination;
            destination.remove(innerSub);
            this.hasSubscription = false;
            if (this.hasCompleted) {
                this.destination.complete();
            }
        };
        return ExhaustMapSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_util_tryCatch,_util_errorObject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var ExpandSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ExpandSubscriber, _super);
        function ExpandSubscriber(destination, project, concurrent, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.concurrent = concurrent;
            _this.scheduler = scheduler;
            _this.index = 0;
            _this.active = 0;
            _this.hasCompleted = false;
            if (concurrent < Number.POSITIVE_INFINITY) {
                _this.buffer = [];
            }
            return _this;
        }
        ExpandSubscriber.dispatch = function (arg) {
            var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
            subscriber.subscribeToProjection(result, value, index);
        };
        ExpandSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            if (destination.closed) {
                this._complete();
                return;
            }
            var index = this.index++;
            if (this.active < this.concurrent) {
                destination.next(value);
                var result = tryCatch(this.project)(value, index);
                if (result === errorObject) {
                    destination.error(errorObject.e);
                }
                else if (!this.scheduler) {
                    this.subscribeToProjection(result, value, index);
                }
                else {
                    var state = { subscriber: this, result: result, value: value, index: index };
                    var destination_1 = this.destination;
                    destination_1.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
                }
            }
            else {
                this.buffer.push(value);
            }
        };
        ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
            this.active++;
            var destination = this.destination;
            destination.add(subscribeToResult(this, result, value, index));
        };
        ExpandSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.hasCompleted && this.active === 0) {
                this.destination.complete();
            }
            this.unsubscribe();
        };
        ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this._next(innerValue);
        };
        ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            var destination = this.destination;
            destination.remove(innerSub);
            this.active--;
            if (buffer && buffer.length > 0) {
                this._next(buffer.shift());
            }
            if (this.hasCompleted && this.active === 0) {
                this.destination.complete();
            }
        };
        return ExpandSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_Subscription PURE_IMPORTS_END */
    var FinallySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(FinallySubscriber, _super);
        function FinallySubscriber(destination, callback) {
            var _this = _super.call(this, destination) || this;
            _this.add(new Subscription(callback));
            return _this;
        }
        return FinallySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var FindValueSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(FindValueSubscriber, _super);
        function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.yieldIndex = yieldIndex;
            _this.thisArg = thisArg;
            _this.index = 0;
            return _this;
        }
        FindValueSubscriber.prototype.notifyComplete = function (value) {
            var destination = this.destination;
            destination.next(value);
            destination.complete();
            this.unsubscribe();
        };
        FindValueSubscriber.prototype._next = function (value) {
            var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
            var index = this.index++;
            try {
                var result = predicate.call(thisArg || this, value, index, this.source);
                if (result) {
                    this.notifyComplete(this.yieldIndex ? index : value);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        FindValueSubscriber.prototype._complete = function () {
            this.notifyComplete(this.yieldIndex ? -1 : undefined);
        };
        return FindValueSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _operators_find PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var IgnoreElementsSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(IgnoreElementsSubscriber, _super);
        function IgnoreElementsSubscriber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IgnoreElementsSubscriber.prototype._next = function (unused) {
        };
        return IgnoreElementsSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var IsEmptySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(IsEmptySubscriber, _super);
        function IsEmptySubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
            var destination = this.destination;
            destination.next(isEmpty);
            destination.complete();
        };
        IsEmptySubscriber.prototype._next = function (value) {
            this.notifyComplete(false);
        };
        IsEmptySubscriber.prototype._complete = function () {
            this.notifyComplete(true);
        };
        return IsEmptySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
    var TakeLastSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TakeLastSubscriber, _super);
        function TakeLastSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.ring = new Array();
            _this.count = 0;
            return _this;
        }
        TakeLastSubscriber.prototype._next = function (value) {
            var ring = this.ring;
            var total = this.total;
            var count = this.count++;
            if (ring.length < total) {
                ring.push(value);
            }
            else {
                var index = count % total;
                ring[index] = value;
            }
        };
        TakeLastSubscriber.prototype._complete = function () {
            var destination = this.destination;
            var count = this.count;
            if (count > 0) {
                var total = this.count >= this.total ? this.total : this.count;
                var ring = this.ring;
                for (var i = 0; i < total; i++) {
                    var idx = (count++) % total;
                    destination.next(ring[idx]);
                }
            }
            destination.complete();
        };
        return TakeLastSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _util_EmptyError,_filter,_takeLast,_throwIfEmpty,_defaultIfEmpty,_util_identity PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var MapToSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MapToSubscriber, _super);
        function MapToSubscriber(destination, value) {
            var _this = _super.call(this, destination) || this;
            _this.value = value;
            return _this;
        }
        MapToSubscriber.prototype._next = function (x) {
            this.destination.next(this.value);
        };
        return MapToSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
    var MaterializeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MaterializeSubscriber, _super);
        function MaterializeSubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        MaterializeSubscriber.prototype._next = function (value) {
            this.destination.next(Notification.createNext(value));
        };
        MaterializeSubscriber.prototype._error = function (err) {
            var destination = this.destination;
            destination.next(Notification.createError(err));
            destination.complete();
        };
        MaterializeSubscriber.prototype._complete = function () {
            var destination = this.destination;
            destination.next(Notification.createComplete());
            destination.complete();
        };
        return MaterializeSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var ScanSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ScanSubscriber, _super);
        function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
            var _this = _super.call(this, destination) || this;
            _this.accumulator = accumulator;
            _this._seed = _seed;
            _this.hasSeed = hasSeed;
            _this.index = 0;
            return _this;
        }
        Object.defineProperty(ScanSubscriber.prototype, "seed", {
            get: function () {
                return this._seed;
            },
            set: function (value) {
                this.hasSeed = true;
                this._seed = value;
            },
            enumerable: true,
            configurable: true
        });
        ScanSubscriber.prototype._next = function (value) {
            if (!this.hasSeed) {
                this.seed = value;
                this.destination.next(value);
            }
            else {
                return this._tryNext(value);
            }
        };
        ScanSubscriber.prototype._tryNext = function (value) {
            var index = this.index++;
            var result;
            try {
                result = this.accumulator(this.seed, value, index);
            }
            catch (err) {
                this.destination.error(err);
            }
            this.seed = result;
            this.destination.next(result);
        };
        return ScanSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _scan,_takeLast,_defaultIfEmpty,_util_pipe PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_merge PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_util_tryCatch,_util_errorObject,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber PURE_IMPORTS_END */
    var MergeScanSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MergeScanSubscriber, _super);
        function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
            var _this = _super.call(this, destination) || this;
            _this.accumulator = accumulator;
            _this.acc = acc;
            _this.concurrent = concurrent;
            _this.hasValue = false;
            _this.hasCompleted = false;
            _this.buffer = [];
            _this.active = 0;
            _this.index = 0;
            return _this;
        }
        MergeScanSubscriber.prototype._next = function (value) {
            if (this.active < this.concurrent) {
                var index = this.index++;
                var ish = tryCatch(this.accumulator)(this.acc, value);
                var destination = this.destination;
                if (ish === errorObject) {
                    destination.error(errorObject.e);
                }
                else {
                    this.active++;
                    this._innerSub(ish, value, index);
                }
            }
            else {
                this.buffer.push(value);
            }
        };
        MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            var destination = this.destination;
            destination.add(innerSubscriber);
            subscribeToResult(this, ish, value, index, innerSubscriber);
        };
        MergeScanSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                if (this.hasValue === false) {
                    this.destination.next(this.acc);
                }
                this.destination.complete();
            }
            this.unsubscribe();
        };
        MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var destination = this.destination;
            this.acc = innerValue;
            this.hasValue = true;
            destination.next(innerValue);
        };
        MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            var destination = this.destination;
            destination.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            }
            else if (this.active === 0 && this.hasCompleted) {
                if (this.hasValue === false) {
                    this.destination.next(this.acc);
                }
                this.destination.complete();
            }
        };
        return MergeScanSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_observable_from,_util_isArray,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var OnErrorResumeNextSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(OnErrorResumeNextSubscriber, _super);
        function OnErrorResumeNextSubscriber(destination, nextSources) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.nextSources = nextSources;
            return _this;
        }
        OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
            this.subscribeToNextSource();
        };
        OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
            this.subscribeToNextSource();
        };
        OnErrorResumeNextSubscriber.prototype._error = function (err) {
            this.subscribeToNextSource();
            this.unsubscribe();
        };
        OnErrorResumeNextSubscriber.prototype._complete = function () {
            this.subscribeToNextSource();
            this.unsubscribe();
        };
        OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
            var next = this.nextSources.shift();
            if (next) {
                var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
                var destination = this.destination;
                destination.add(innerSubscriber);
                subscribeToResult(this, next, undefined, undefined, innerSubscriber);
            }
            else {
                this.destination.complete();
            }
        };
        return OnErrorResumeNextSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var PairwiseSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(PairwiseSubscriber, _super);
        function PairwiseSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasPrev = false;
            return _this;
        }
        PairwiseSubscriber.prototype._next = function (value) {
            if (this.hasPrev) {
                this.destination.next([this.prev, value]);
            }
            else {
                this.hasPrev = true;
            }
            this.prev = value;
        };
        return PairwiseSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_not,_filter PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Subject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _BehaviorSubject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _AsyncSubject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _ReplaySubject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_isArray,_observable_race PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_observable_empty PURE_IMPORTS_END */
    var RepeatSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RepeatSubscriber, _super);
        function RepeatSubscriber(destination, count, source) {
            var _this = _super.call(this, destination) || this;
            _this.count = count;
            _this.source = source;
            return _this;
        }
        RepeatSubscriber.prototype.complete = function () {
            if (!this.isStopped) {
                var _a = this, source = _a.source, count = _a.count;
                if (count === 0) {
                    return _super.prototype.complete.call(this);
                }
                else if (count > -1) {
                    this.count = count - 1;
                }
                source.subscribe(this._unsubscribeAndRecycle());
            }
        };
        return RepeatSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subject,_util_tryCatch,_util_errorObject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var RepeatWhenSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RepeatWhenSubscriber, _super);
        function RepeatWhenSubscriber(destination, notifier, source) {
            var _this = _super.call(this, destination) || this;
            _this.notifier = notifier;
            _this.source = source;
            _this.sourceIsBeingSubscribedTo = true;
            return _this;
        }
        RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.sourceIsBeingSubscribedTo = true;
            this.source.subscribe(this);
        };
        RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
            if (this.sourceIsBeingSubscribedTo === false) {
                return _super.prototype.complete.call(this);
            }
        };
        RepeatWhenSubscriber.prototype.complete = function () {
            this.sourceIsBeingSubscribedTo = false;
            if (!this.isStopped) {
                if (!this.retries) {
                    this.subscribeToRetries();
                }
                if (!this.retriesSubscription || this.retriesSubscription.closed) {
                    return _super.prototype.complete.call(this);
                }
                this._unsubscribeAndRecycle();
                this.notifications.next();
            }
        };
        RepeatWhenSubscriber.prototype._unsubscribe = function () {
            var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
            if (notifications) {
                notifications.unsubscribe();
                this.notifications = null;
            }
            if (retriesSubscription) {
                retriesSubscription.unsubscribe();
                this.retriesSubscription = null;
            }
            this.retries = null;
        };
        RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
            var _unsubscribe = this._unsubscribe;
            this._unsubscribe = null;
            _super.prototype._unsubscribeAndRecycle.call(this);
            this._unsubscribe = _unsubscribe;
            return this;
        };
        RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
            this.notifications = new Subject();
            var retries = tryCatch(this.notifier)(this.notifications);
            if (retries === errorObject) {
                return _super.prototype.complete.call(this);
            }
            this.retries = retries;
            this.retriesSubscription = subscribeToResult(this, retries);
        };
        return RepeatWhenSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var RetrySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RetrySubscriber, _super);
        function RetrySubscriber(destination, count, source) {
            var _this = _super.call(this, destination) || this;
            _this.count = count;
            _this.source = source;
            return _this;
        }
        RetrySubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _a = this, source = _a.source, count = _a.count;
                if (count === 0) {
                    return _super.prototype.error.call(this, err);
                }
                else if (count > -1) {
                    this.count = count - 1;
                }
                source.subscribe(this._unsubscribeAndRecycle());
            }
        };
        return RetrySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subject,_util_tryCatch,_util_errorObject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var RetryWhenSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RetryWhenSubscriber, _super);
        function RetryWhenSubscriber(destination, notifier, source) {
            var _this = _super.call(this, destination) || this;
            _this.notifier = notifier;
            _this.source = source;
            return _this;
        }
        RetryWhenSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var errors = this.errors;
                var retries = this.retries;
                var retriesSubscription = this.retriesSubscription;
                if (!retries) {
                    errors = new Subject();
                    retries = tryCatch(this.notifier)(errors);
                    if (retries === errorObject) {
                        return _super.prototype.error.call(this, errorObject.e);
                    }
                    retriesSubscription = subscribeToResult(this, retries);
                }
                else {
                    this.errors = null;
                    this.retriesSubscription = null;
                }
                this._unsubscribeAndRecycle();
                this.errors = errors;
                this.retries = retries;
                this.retriesSubscription = retriesSubscription;
                errors.next(err);
            }
        };
        RetryWhenSubscriber.prototype._unsubscribe = function () {
            var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
            if (errors) {
                errors.unsubscribe();
                this.errors = null;
            }
            if (retriesSubscription) {
                retriesSubscription.unsubscribe();
                this.retriesSubscription = null;
            }
            this.retries = null;
        };
        RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var _unsubscribe = this._unsubscribe;
            this._unsubscribe = null;
            this._unsubscribeAndRecycle();
            this._unsubscribe = _unsubscribe;
            this.source.subscribe(this);
        };
        return RetryWhenSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var SampleSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SampleSubscriber, _super);
        function SampleSubscriber() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasValue = false;
            return _this;
        }
        SampleSubscriber.prototype._next = function (value) {
            this.value = value;
            this.hasValue = true;
        };
        SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.emitValue();
        };
        SampleSubscriber.prototype.notifyComplete = function () {
            this.emitValue();
        };
        SampleSubscriber.prototype.emitValue = function () {
            if (this.hasValue) {
                this.hasValue = false;
                this.destination.next(this.value);
            }
        };
        return SampleSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
    var SampleTimeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SampleTimeSubscriber, _super);
        function SampleTimeSubscriber(destination, period, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.period = period;
            _this.scheduler = scheduler;
            _this.hasValue = false;
            _this.add(scheduler.schedule(dispatchNotification, period, { subscriber: _this, period: period }));
            return _this;
        }
        SampleTimeSubscriber.prototype._next = function (value) {
            this.lastValue = value;
            this.hasValue = true;
        };
        SampleTimeSubscriber.prototype.notifyNext = function () {
            if (this.hasValue) {
                this.hasValue = false;
                this.destination.next(this.lastValue);
            }
        };
        return SampleTimeSubscriber;
    }(Subscriber));
    function dispatchNotification(state) {
        var subscriber = state.subscriber, period = state.period;
        subscriber.notifyNext();
        this.schedule(state, period);
    }

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_tryCatch,_util_errorObject PURE_IMPORTS_END */
    var SequenceEqualSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SequenceEqualSubscriber, _super);
        function SequenceEqualSubscriber(destination, compareTo, comparor) {
            var _this = _super.call(this, destination) || this;
            _this.compareTo = compareTo;
            _this.comparor = comparor;
            _this._a = [];
            _this._b = [];
            _this._oneComplete = false;
            _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));
            return _this;
        }
        SequenceEqualSubscriber.prototype._next = function (value) {
            if (this._oneComplete && this._b.length === 0) {
                this.emit(false);
            }
            else {
                this._a.push(value);
                this.checkValues();
            }
        };
        SequenceEqualSubscriber.prototype._complete = function () {
            if (this._oneComplete) {
                this.emit(this._a.length === 0 && this._b.length === 0);
            }
            else {
                this._oneComplete = true;
            }
            this.unsubscribe();
        };
        SequenceEqualSubscriber.prototype.checkValues = function () {
            var _c = this, _a = _c._a, _b = _c._b, comparor = _c.comparor;
            while (_a.length > 0 && _b.length > 0) {
                var a = _a.shift();
                var b = _b.shift();
                var areEqual = false;
                if (comparor) {
                    areEqual = tryCatch(comparor)(a, b);
                    if (areEqual === errorObject) {
                        this.destination.error(errorObject.e);
                    }
                }
                else {
                    areEqual = a === b;
                }
                if (!areEqual) {
                    this.emit(false);
                }
            }
        };
        SequenceEqualSubscriber.prototype.emit = function (value) {
            var destination = this.destination;
            destination.next(value);
            destination.complete();
        };
        SequenceEqualSubscriber.prototype.nextB = function (value) {
            if (this._oneComplete && this._a.length === 0) {
                this.emit(false);
            }
            else {
                this._b.push(value);
                this.checkValues();
            }
        };
        SequenceEqualSubscriber.prototype.completeB = function () {
            if (this._oneComplete) {
                this.emit(this._a.length === 0 && this._b.length === 0);
            }
            else {
                this._oneComplete = true;
            }
        };
        return SequenceEqualSubscriber;
    }(Subscriber));
    var SequenceEqualCompareToSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SequenceEqualCompareToSubscriber, _super);
        function SequenceEqualCompareToSubscriber(destination, parent) {
            var _this = _super.call(this, destination) || this;
            _this.parent = parent;
            return _this;
        }
        SequenceEqualCompareToSubscriber.prototype._next = function (value) {
            this.parent.nextB(value);
        };
        SequenceEqualCompareToSubscriber.prototype._error = function (err) {
            this.parent.error(err);
            this.unsubscribe();
        };
        SequenceEqualCompareToSubscriber.prototype._complete = function () {
            this.parent.completeB();
            this.unsubscribe();
        };
        return SequenceEqualCompareToSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_EmptyError PURE_IMPORTS_END */
    var SingleSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SingleSubscriber, _super);
        function SingleSubscriber(destination, predicate, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.seenValue = false;
            _this.index = 0;
            return _this;
        }
        SingleSubscriber.prototype.applySingleValue = function (value) {
            if (this.seenValue) {
                this.destination.error('Sequence contains more than one element');
            }
            else {
                this.seenValue = true;
                this.singleValue = value;
            }
        };
        SingleSubscriber.prototype._next = function (value) {
            var index = this.index++;
            if (this.predicate) {
                this.tryNext(value, index);
            }
            else {
                this.applySingleValue(value);
            }
        };
        SingleSubscriber.prototype.tryNext = function (value, index) {
            try {
                if (this.predicate(value, index, this.source)) {
                    this.applySingleValue(value);
                }
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        SingleSubscriber.prototype._complete = function () {
            var destination = this.destination;
            if (this.index > 0) {
                destination.next(this.seenValue ? this.singleValue : undefined);
                destination.complete();
            }
            else {
                destination.error(new EmptyError);
            }
        };
        return SingleSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var SkipSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SkipSubscriber, _super);
        function SkipSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.count = 0;
            return _this;
        }
        SkipSubscriber.prototype._next = function (x) {
            if (++this.count > this.total) {
                this.destination.next(x);
            }
        };
        return SkipSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError PURE_IMPORTS_END */
    var SkipLastSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SkipLastSubscriber, _super);
        function SkipLastSubscriber(destination, _skipCount) {
            var _this = _super.call(this, destination) || this;
            _this._skipCount = _skipCount;
            _this._count = 0;
            _this._ring = new Array(_skipCount);
            return _this;
        }
        SkipLastSubscriber.prototype._next = function (value) {
            var skipCount = this._skipCount;
            var count = this._count++;
            if (count < skipCount) {
                this._ring[count] = value;
            }
            else {
                var currentIndex = count % skipCount;
                var ring = this._ring;
                var oldValue = ring[currentIndex];
                ring[currentIndex] = value;
                this.destination.next(oldValue);
            }
        };
        return SkipLastSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var SkipUntilSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SkipUntilSubscriber, _super);
        function SkipUntilSubscriber(destination, notifier) {
            var _this = _super.call(this, destination) || this;
            _this.hasValue = false;
            var innerSubscriber = new InnerSubscriber(_this, undefined, undefined);
            _this.add(innerSubscriber);
            _this.innerSubscription = innerSubscriber;
            subscribeToResult(_this, notifier, undefined, undefined, innerSubscriber);
            return _this;
        }
        SkipUntilSubscriber.prototype._next = function (value) {
            if (this.hasValue) {
                _super.prototype._next.call(this, value);
            }
        };
        SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.hasValue = true;
            if (this.innerSubscription) {
                this.innerSubscription.unsubscribe();
            }
        };
        SkipUntilSubscriber.prototype.notifyComplete = function () {
        };
        return SkipUntilSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var SkipWhileSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SkipWhileSubscriber, _super);
        function SkipWhileSubscriber(destination, predicate) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.skipping = true;
            _this.index = 0;
            return _this;
        }
        SkipWhileSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            if (this.skipping) {
                this.tryCallPredicate(value);
            }
            if (!this.skipping) {
                destination.next(value);
            }
        };
        SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
            try {
                var result = this.predicate(value, this.index++);
                this.skipping = Boolean(result);
            }
            catch (err) {
                this.destination.error(err);
            }
        };
        return SkipWhileSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _observable_fromArray,_observable_scalar,_observable_empty,_observable_concat,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Observable,_scheduler_asap,_util_isNumeric PURE_IMPORTS_END */
    var SubscribeOnObservable = /*@__PURE__*/ (function (_super) {
        __extends(SubscribeOnObservable, _super);
        function SubscribeOnObservable(source, delayTime, scheduler) {
            if (delayTime === void 0) {
                delayTime = 0;
            }
            if (scheduler === void 0) {
                scheduler = asap;
            }
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.delayTime = delayTime;
            _this.scheduler = scheduler;
            if (!isNumeric(delayTime) || delayTime < 0) {
                _this.delayTime = 0;
            }
            if (!scheduler || typeof scheduler.schedule !== 'function') {
                _this.scheduler = asap;
            }
            return _this;
        }
        SubscribeOnObservable.create = function (source, delay, scheduler) {
            if (delay === void 0) {
                delay = 0;
            }
            if (scheduler === void 0) {
                scheduler = asap;
            }
            return new SubscribeOnObservable(source, delay, scheduler);
        };
        SubscribeOnObservable.dispatch = function (arg) {
            var source = arg.source, subscriber = arg.subscriber;
            return this.add(source.subscribe(subscriber));
        };
        SubscribeOnObservable.prototype._subscribe = function (subscriber) {
            var delay = this.delayTime;
            var source = this.source;
            var scheduler = this.scheduler;
            return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
                source: source, subscriber: subscriber
            });
        };
        return SubscribeOnObservable;
    }(Observable));

    /** PURE_IMPORTS_START _observable_SubscribeOnObservable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */
    var SwitchMapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SwitchMapSubscriber, _super);
        function SwitchMapSubscriber(destination, project) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.index = 0;
            return _this;
        }
        SwitchMapSubscriber.prototype._next = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            }
            catch (error) {
                this.destination.error(error);
                return;
            }
            this._innerSub(result, value, index);
        };
        SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
            var innerSubscription = this.innerSubscription;
            if (innerSubscription) {
                innerSubscription.unsubscribe();
            }
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            var destination = this.destination;
            destination.add(innerSubscriber);
            this.innerSubscription = subscribeToResult(this, result, value, index, innerSubscriber);
        };
        SwitchMapSubscriber.prototype._complete = function () {
            var innerSubscription = this.innerSubscription;
            if (!innerSubscription || innerSubscription.closed) {
                _super.prototype._complete.call(this);
            }
            this.unsubscribe();
        };
        SwitchMapSubscriber.prototype._unsubscribe = function () {
            this.innerSubscription = null;
        };
        SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var destination = this.destination;
            destination.remove(innerSub);
            this.innerSubscription = null;
            if (this.isStopped) {
                _super.prototype._complete.call(this);
            }
        };
        SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        return SwitchMapSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _switchMap,_util_identity PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _switchMap PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var TakeUntilSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TakeUntilSubscriber, _super);
        function TakeUntilSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.seenValue = false;
            return _this;
        }
        TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.seenValue = true;
            this.complete();
        };
        TakeUntilSubscriber.prototype.notifyComplete = function () {
        };
        return TakeUntilSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var TakeWhileSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TakeWhileSubscriber, _super);
        function TakeWhileSubscriber(destination, predicate) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.index = 0;
            return _this;
        }
        TakeWhileSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            var result;
            try {
                result = this.predicate(value, this.index++);
            }
            catch (err) {
                destination.error(err);
                return;
            }
            this.nextOrComplete(value, result);
        };
        TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
            var destination = this.destination;
            if (Boolean(predicateResult)) {
                destination.next(value);
            }
            else {
                destination.complete();
            }
        };
        return TakeWhileSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var ThrottleSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ThrottleSubscriber, _super);
        function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.durationSelector = durationSelector;
            _this._leading = _leading;
            _this._trailing = _trailing;
            _this._hasValue = false;
            return _this;
        }
        ThrottleSubscriber.prototype._next = function (value) {
            this._hasValue = true;
            this._sendValue = value;
            if (!this._throttled) {
                if (this._leading) {
                    this.send();
                }
                else {
                    this.throttle(value);
                }
            }
        };
        ThrottleSubscriber.prototype.send = function () {
            var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
            if (_hasValue) {
                this.destination.next(_sendValue);
                this.throttle(_sendValue);
            }
            this._hasValue = false;
            this._sendValue = null;
        };
        ThrottleSubscriber.prototype.throttle = function (value) {
            var duration = this.tryDurationSelector(value);
            if (duration) {
                this.add(this._throttled = subscribeToResult(this, duration));
            }
        };
        ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
            try {
                return this.durationSelector(value);
            }
            catch (err) {
                this.destination.error(err);
                return null;
            }
        };
        ThrottleSubscriber.prototype.throttlingDone = function () {
            var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
            if (_throttled) {
                _throttled.unsubscribe();
            }
            this._throttled = null;
            if (_trailing) {
                this.send();
            }
        };
        ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.throttlingDone();
        };
        ThrottleSubscriber.prototype.notifyComplete = function () {
            this.throttlingDone();
        };
        return ThrottleSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async,_throttle PURE_IMPORTS_END */
    var ThrottleTimeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ThrottleTimeSubscriber, _super);
        function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
            var _this = _super.call(this, destination) || this;
            _this.duration = duration;
            _this.scheduler = scheduler;
            _this.leading = leading;
            _this.trailing = trailing;
            _this._hasTrailingValue = false;
            _this._trailingValue = null;
            return _this;
        }
        ThrottleTimeSubscriber.prototype._next = function (value) {
            if (this.throttled) {
                if (this.trailing) {
                    this._trailingValue = value;
                    this._hasTrailingValue = true;
                }
            }
            else {
                this.add(this.throttled = this.scheduler.schedule(dispatchNext$3, this.duration, { subscriber: this }));
                if (this.leading) {
                    this.destination.next(value);
                }
            }
        };
        ThrottleTimeSubscriber.prototype._complete = function () {
            if (this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this.destination.complete();
            }
            else {
                this.destination.complete();
            }
        };
        ThrottleTimeSubscriber.prototype.clearThrottle = function () {
            var throttled = this.throttled;
            if (throttled) {
                if (this.trailing && this._hasTrailingValue) {
                    this.destination.next(this._trailingValue);
                    this._trailingValue = null;
                    this._hasTrailingValue = false;
                }
                throttled.unsubscribe();
                this.remove(throttled);
                this.throttled = null;
            }
        };
        return ThrottleTimeSubscriber;
    }(Subscriber));
    function dispatchNext$3(arg) {
        var subscriber = arg.subscriber;
        subscriber.clearThrottle();
    }

    /** PURE_IMPORTS_START _scheduler_async,_scan,_observable_defer,_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var TimeoutWithSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TimeoutWithSubscriber, _super);
        function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.absoluteTimeout = absoluteTimeout;
            _this.waitFor = waitFor;
            _this.withObservable = withObservable;
            _this.scheduler = scheduler;
            _this.action = null;
            _this.scheduleTimeout();
            return _this;
        }
        TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
            var withObservable = subscriber.withObservable;
            subscriber._unsubscribeAndRecycle();
            subscriber.add(subscribeToResult(subscriber, withObservable));
        };
        TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
            var action = this.action;
            if (action) {
                this.action = action.schedule(this, this.waitFor);
            }
            else {
                this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
            }
        };
        TimeoutWithSubscriber.prototype._next = function (value) {
            if (!this.absoluteTimeout) {
                this.scheduleTimeout();
            }
            _super.prototype._next.call(this, value);
        };
        TimeoutWithSubscriber.prototype._unsubscribe = function () {
            this.action = null;
            this.scheduler = null;
            this.withObservable = null;
        };
        return TimeoutWithSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _scheduler_async,_util_TimeoutError,_timeoutWith,_observable_throwError PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _scheduler_async,_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var WindowSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(WindowSubscriber, _super);
        function WindowSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.window = new Subject();
            destination.next(_this.window);
            return _this;
        }
        WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openWindow();
        };
        WindowSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        WindowSubscriber.prototype.notifyComplete = function (innerSub) {
            this._complete();
        };
        WindowSubscriber.prototype._next = function (value) {
            this.window.next(value);
        };
        WindowSubscriber.prototype._error = function (err) {
            this.window.error(err);
            this.destination.error(err);
        };
        WindowSubscriber.prototype._complete = function () {
            this.window.complete();
            this.destination.complete();
        };
        WindowSubscriber.prototype._unsubscribe = function () {
            this.window = null;
        };
        WindowSubscriber.prototype.openWindow = function () {
            var prevWindow = this.window;
            if (prevWindow) {
                prevWindow.complete();
            }
            var destination = this.destination;
            var newWindow = this.window = new Subject();
            destination.next(newWindow);
        };
        return WindowSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_Subject PURE_IMPORTS_END */
    var WindowCountSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(WindowCountSubscriber, _super);
        function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.windowSize = windowSize;
            _this.startWindowEvery = startWindowEvery;
            _this.windows = [new Subject()];
            _this.count = 0;
            destination.next(_this.windows[0]);
            return _this;
        }
        WindowCountSubscriber.prototype._next = function (value) {
            var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
            var destination = this.destination;
            var windowSize = this.windowSize;
            var windows = this.windows;
            var len = windows.length;
            for (var i = 0; i < len && !this.closed; i++) {
                windows[i].next(value);
            }
            var c = this.count - windowSize + 1;
            if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
                windows.shift().complete();
            }
            if (++this.count % startWindowEvery === 0 && !this.closed) {
                var window_1 = new Subject();
                windows.push(window_1);
                destination.next(window_1);
            }
        };
        WindowCountSubscriber.prototype._error = function (err) {
            var windows = this.windows;
            if (windows) {
                while (windows.length > 0 && !this.closed) {
                    windows.shift().error(err);
                }
            }
            this.destination.error(err);
        };
        WindowCountSubscriber.prototype._complete = function () {
            var windows = this.windows;
            if (windows) {
                while (windows.length > 0 && !this.closed) {
                    windows.shift().complete();
                }
            }
            this.destination.complete();
        };
        WindowCountSubscriber.prototype._unsubscribe = function () {
            this.count = 0;
            this.windows = null;
        };
        return WindowCountSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subject,_scheduler_async,_Subscriber,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
    var CountedSubject = /*@__PURE__*/ (function (_super) {
        __extends(CountedSubject, _super);
        function CountedSubject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._numberOfNextedValues = 0;
            return _this;
        }
        CountedSubject.prototype.next = function (value) {
            this._numberOfNextedValues++;
            _super.prototype.next.call(this, value);
        };
        Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
            get: function () {
                return this._numberOfNextedValues;
            },
            enumerable: true,
            configurable: true
        });
        return CountedSubject;
    }(Subject));
    var WindowTimeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(WindowTimeSubscriber, _super);
        function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.windowTimeSpan = windowTimeSpan;
            _this.windowCreationInterval = windowCreationInterval;
            _this.maxWindowSize = maxWindowSize;
            _this.scheduler = scheduler;
            _this.windows = [];
            var window = _this.openWindow();
            if (windowCreationInterval !== null && windowCreationInterval >= 0) {
                var closeState = { subscriber: _this, window: window, context: null };
                var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: _this, scheduler: scheduler };
                _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
                _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
            }
            else {
                var timeSpanOnlyState = { subscriber: _this, window: window, windowTimeSpan: windowTimeSpan };
                _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
            }
            return _this;
        }
        WindowTimeSubscriber.prototype._next = function (value) {
            var windows = this.windows;
            var len = windows.length;
            for (var i = 0; i < len; i++) {
                var window_1 = windows[i];
                if (!window_1.closed) {
                    window_1.next(value);
                    if (window_1.numberOfNextedValues >= this.maxWindowSize) {
                        this.closeWindow(window_1);
                    }
                }
            }
        };
        WindowTimeSubscriber.prototype._error = function (err) {
            var windows = this.windows;
            while (windows.length > 0) {
                windows.shift().error(err);
            }
            this.destination.error(err);
        };
        WindowTimeSubscriber.prototype._complete = function () {
            var windows = this.windows;
            while (windows.length > 0) {
                var window_2 = windows.shift();
                if (!window_2.closed) {
                    window_2.complete();
                }
            }
            this.destination.complete();
        };
        WindowTimeSubscriber.prototype.openWindow = function () {
            var window = new CountedSubject();
            this.windows.push(window);
            var destination = this.destination;
            destination.next(window);
            return window;
        };
        WindowTimeSubscriber.prototype.closeWindow = function (window) {
            window.complete();
            var windows = this.windows;
            windows.splice(windows.indexOf(window), 1);
        };
        return WindowTimeSubscriber;
    }(Subscriber));
    function dispatchWindowTimeSpanOnly(state) {
        var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
        if (window) {
            subscriber.closeWindow(window);
        }
        state.window = subscriber.openWindow();
        this.schedule(state, windowTimeSpan);
    }
    function dispatchWindowCreation(state) {
        var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
        var window = subscriber.openWindow();
        var action = this;
        var context = { action: action, subscription: null };
        var timeSpanState = { subscriber: subscriber, window: window, context: context };
        context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
        action.add(context.subscription);
        action.schedule(state, windowCreationInterval);
    }
    function dispatchWindowClose(state) {
        var subscriber = state.subscriber, window = state.window, context = state.context;
        if (context && context.action && context.subscription) {
            context.action.remove(context.subscription);
        }
        subscriber.closeWindow(window);
    }

    /** PURE_IMPORTS_START tslib,_Subject,_Subscription,_util_tryCatch,_util_errorObject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var WindowToggleSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(WindowToggleSubscriber, _super);
        function WindowToggleSubscriber(destination, openings, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.openings = openings;
            _this.closingSelector = closingSelector;
            _this.contexts = [];
            _this.add(_this.openSubscription = subscribeToResult(_this, openings, openings));
            return _this;
        }
        WindowToggleSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            if (contexts) {
                var len = contexts.length;
                for (var i = 0; i < len; i++) {
                    contexts[i].window.next(value);
                }
            }
        };
        WindowToggleSubscriber.prototype._error = function (err) {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_1 = contexts[index];
                    context_1.window.error(err);
                    context_1.subscription.unsubscribe();
                }
            }
            _super.prototype._error.call(this, err);
        };
        WindowToggleSubscriber.prototype._complete = function () {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_2 = contexts[index];
                    context_2.window.complete();
                    context_2.subscription.unsubscribe();
                }
            }
            _super.prototype._complete.call(this);
        };
        WindowToggleSubscriber.prototype._unsubscribe = function () {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_3 = contexts[index];
                    context_3.window.unsubscribe();
                    context_3.subscription.unsubscribe();
                }
            }
        };
        WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            if (outerValue === this.openings) {
                var closingSelector = this.closingSelector;
                var closingNotifier = tryCatch(closingSelector)(innerValue);
                if (closingNotifier === errorObject) {
                    return this.error(errorObject.e);
                }
                else {
                    var window_1 = new Subject();
                    var subscription = new Subscription();
                    var context_4 = { window: window_1, subscription: subscription };
                    this.contexts.push(context_4);
                    var innerSubscription = subscribeToResult(this, closingNotifier, context_4);
                    if (innerSubscription.closed) {
                        this.closeWindow(this.contexts.length - 1);
                    }
                    else {
                        innerSubscription.context = context_4;
                        subscription.add(innerSubscription);
                    }
                    this.destination.next(window_1);
                }
            }
            else {
                this.closeWindow(this.contexts.indexOf(outerValue));
            }
        };
        WindowToggleSubscriber.prototype.notifyError = function (err) {
            this.error(err);
        };
        WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
            if (inner !== this.openSubscription) {
                this.closeWindow(this.contexts.indexOf(inner.context));
            }
        };
        WindowToggleSubscriber.prototype.closeWindow = function (index) {
            if (index === -1) {
                return;
            }
            var contexts = this.contexts;
            var context = contexts[index];
            var window = context.window, subscription = context.subscription;
            contexts.splice(index, 1);
            window.complete();
            subscription.unsubscribe();
        };
        return WindowToggleSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_Subject,_util_tryCatch,_util_errorObject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var WindowSubscriber$1 = /*@__PURE__*/ (function (_super) {
        __extends(WindowSubscriber, _super);
        function WindowSubscriber(destination, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.closingSelector = closingSelector;
            _this.openWindow();
            return _this;
        }
        WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openWindow(innerSub);
        };
        WindowSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        WindowSubscriber.prototype.notifyComplete = function (innerSub) {
            this.openWindow(innerSub);
        };
        WindowSubscriber.prototype._next = function (value) {
            this.window.next(value);
        };
        WindowSubscriber.prototype._error = function (err) {
            this.window.error(err);
            this.destination.error(err);
            this.unsubscribeClosingNotification();
        };
        WindowSubscriber.prototype._complete = function () {
            this.window.complete();
            this.destination.complete();
            this.unsubscribeClosingNotification();
        };
        WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
            if (this.closingNotification) {
                this.closingNotification.unsubscribe();
            }
        };
        WindowSubscriber.prototype.openWindow = function (innerSub) {
            if (innerSub === void 0) {
                innerSub = null;
            }
            if (innerSub) {
                this.remove(innerSub);
                innerSub.unsubscribe();
            }
            var prevWindow = this.window;
            if (prevWindow) {
                prevWindow.complete();
            }
            var window = this.window = new Subject();
            this.destination.next(window);
            var closingNotifier = tryCatch(this.closingSelector)();
            if (closingNotifier === errorObject) {
                var err = errorObject.e;
                this.destination.error(err);
                this.window.error(err);
            }
            else {
                this.add(this.closingNotification = subscribeToResult(this, closingNotifier));
            }
        };
        return WindowSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    var WithLatestFromSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(WithLatestFromSubscriber, _super);
        function WithLatestFromSubscriber(destination, observables, project) {
            var _this = _super.call(this, destination) || this;
            _this.observables = observables;
            _this.project = project;
            _this.toRespond = [];
            var len = observables.length;
            _this.values = new Array(len);
            for (var i = 0; i < len; i++) {
                _this.toRespond.push(i);
            }
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                _this.add(subscribeToResult(_this, observable, observable, i));
            }
            return _this;
        }
        WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values[outerIndex] = innerValue;
            var toRespond = this.toRespond;
            if (toRespond.length > 0) {
                var found = toRespond.indexOf(outerIndex);
                if (found !== -1) {
                    toRespond.splice(found, 1);
                }
            }
        };
        WithLatestFromSubscriber.prototype.notifyComplete = function () {
        };
        WithLatestFromSubscriber.prototype._next = function (value) {
            if (this.toRespond.length === 0) {
                var args = [value].concat(this.values);
                if (this.project) {
                    this._tryProject(args);
                }
                else {
                    this.destination.next(args);
                }
            }
        };
        WithLatestFromSubscriber.prototype._tryProject = function (args) {
            var result;
            try {
                result = this.project.apply(this, args);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return WithLatestFromSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /**
     * @license Angular v7.0.0
     * (c) 2010-2018 Google, Inc. https://angular.io/
     * License: MIT
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _DOM = null;
    function getDOM() {
        return _DOM;
    }
    function setRootDomAdapter(adapter) {
        if (!_DOM) {
            _DOM = adapter;
        }
    }
    /* tslint:disable:requireParameterType */
    /**
     * Provides DOM operations in an environment-agnostic way.
     *
     * @security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     */
    var DomAdapter = /** @class */ (function () {
        function DomAdapter() {
            this.resourceLoaderType = null;
        }
        Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
            /**
             * Maps attribute names to their corresponding property names for cases
             * where attribute name doesn't match property name.
             */
            get: function () { return this._attrToPropMap; },
            set: function (value) { this._attrToPropMap = value; },
            enumerable: true,
            configurable: true
        });
        return DomAdapter;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Provides DOM operations in any browser environment.
     *
     * @security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     */
    var GenericBrowserDomAdapter = /** @class */ (function (_super) {
        __extends(GenericBrowserDomAdapter, _super);
        function GenericBrowserDomAdapter() {
            var _this = _super.call(this) || this;
            _this._animationPrefix = null;
            _this._transitionEnd = null;
            try {
                var element_1 = _this.createElement('div', document);
                if (_this.getStyle(element_1, 'animationName') != null) {
                    _this._animationPrefix = '';
                }
                else {
                    var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                    for (var i = 0; i < domPrefixes.length; i++) {
                        if (_this.getStyle(element_1, domPrefixes[i] + 'AnimationName') != null) {
                            _this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
                            break;
                        }
                    }
                }
                var transEndEventNames_1 = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend'
                };
                Object.keys(transEndEventNames_1).forEach(function (key) {
                    if (_this.getStyle(element_1, key) != null) {
                        _this._transitionEnd = transEndEventNames_1[key];
                    }
                });
            }
            catch (e) {
                _this._animationPrefix = null;
                _this._transitionEnd = null;
            }
            return _this;
        }
        GenericBrowserDomAdapter.prototype.getDistributedNodes = function (el) { return el.getDistributedNodes(); };
        GenericBrowserDomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
            el.href = href == null ? baseUrl : baseUrl + '/../' + href;
        };
        GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () { return true; };
        GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function () {
            return typeof document.body.createShadowRoot === 'function';
        };
        GenericBrowserDomAdapter.prototype.getAnimationPrefix = function () { return this._animationPrefix ? this._animationPrefix : ''; };
        GenericBrowserDomAdapter.prototype.getTransitionEnd = function () { return this._transitionEnd ? this._transitionEnd : ''; };
        GenericBrowserDomAdapter.prototype.supportsAnimation = function () {
            return this._animationPrefix != null && this._transitionEnd != null;
        };
        return GenericBrowserDomAdapter;
    }(DomAdapter));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _attrToPropMap = {
        'class': 'className',
        'innerHtml': 'innerHTML',
        'readonly': 'readOnly',
        'tabindex': 'tabIndex',
    };
    var DOM_KEY_LOCATION_NUMPAD = 3;
    // Map to convert some key or keyIdentifier values to what will be returned by getEventKey
    var _keyMap = {
        // The following values are here for cross-browser compatibility and to match the W3C standard
        // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
        '\b': 'Backspace',
        '\t': 'Tab',
        '\x7F': 'Delete',
        '\x1B': 'Escape',
        'Del': 'Delete',
        'Esc': 'Escape',
        'Left': 'ArrowLeft',
        'Right': 'ArrowRight',
        'Up': 'ArrowUp',
        'Down': 'ArrowDown',
        'Menu': 'ContextMenu',
        'Scroll': 'ScrollLock',
        'Win': 'OS'
    };
    // There is a bug in Chrome for numeric keypad keys:
    // https://code.google.com/p/chromium/issues/detail?id=155654
    // 1, 2, 3 ... are reported as A, B, C ...
    var _chromeNumKeyPadMap = {
        'A': '1',
        'B': '2',
        'C': '3',
        'D': '4',
        'E': '5',
        'F': '6',
        'G': '7',
        'H': '8',
        'I': '9',
        'J': '*',
        'K': '+',
        'M': '-',
        'N': '.',
        'O': '/',
        '\x60': '0',
        '\x90': 'NumLock'
    };
    var nodeContains;
    if (core.ɵglobal['Node']) {
        nodeContains = core.ɵglobal['Node'].prototype.contains || function (node) {
            return !!(this.compareDocumentPosition(node) & 16);
        };
    }
    /**
     * A `DomAdapter` powered by full browser DOM APIs.
     *
     * @security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     */
    /* tslint:disable:requireParameterType no-console */
    var BrowserDomAdapter = /** @class */ (function (_super) {
        __extends(BrowserDomAdapter, _super);
        function BrowserDomAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BrowserDomAdapter.prototype.parse = function (templateHtml) { throw new Error('parse not implemented'); };
        BrowserDomAdapter.makeCurrent = function () { setRootDomAdapter(new BrowserDomAdapter()); };
        BrowserDomAdapter.prototype.hasProperty = function (element, name) { return name in element; };
        BrowserDomAdapter.prototype.setProperty = function (el, name, value) { el[name] = value; };
        BrowserDomAdapter.prototype.getProperty = function (el, name) { return el[name]; };
        BrowserDomAdapter.prototype.invoke = function (el, methodName, args) {
            var _a;
            (_a = el)[methodName].apply(_a, __spread(args));
        };
        // TODO(tbosch): move this into a separate environment class once we have it
        BrowserDomAdapter.prototype.logError = function (error) {
            if (window.console) {
                if (console.error) {
                    console.error(error);
                }
                else {
                    console.log(error);
                }
            }
        };
        BrowserDomAdapter.prototype.log = function (error) {
            if (window.console) {
                window.console.log && window.console.log(error);
            }
        };
        BrowserDomAdapter.prototype.logGroup = function (error) {
            if (window.console) {
                window.console.group && window.console.group(error);
            }
        };
        BrowserDomAdapter.prototype.logGroupEnd = function () {
            if (window.console) {
                window.console.groupEnd && window.console.groupEnd();
            }
        };
        Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
            get: function () { return _attrToPropMap; },
            enumerable: true,
            configurable: true
        });
        BrowserDomAdapter.prototype.contains = function (nodeA, nodeB) { return nodeContains.call(nodeA, nodeB); };
        BrowserDomAdapter.prototype.querySelector = function (el, selector) { return el.querySelector(selector); };
        BrowserDomAdapter.prototype.querySelectorAll = function (el, selector) { return el.querySelectorAll(selector); };
        BrowserDomAdapter.prototype.on = function (el, evt, listener) { el.addEventListener(evt, listener, false); };
        BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
            el.addEventListener(evt, listener, false);
            // Needed to follow Dart's subscription semantic, until fix of
            // https://code.google.com/p/dart/issues/detail?id=17406
            return function () { el.removeEventListener(evt, listener, false); };
        };
        BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) { el.dispatchEvent(evt); };
        BrowserDomAdapter.prototype.createMouseEvent = function (eventType) {
            var evt = this.getDefaultDocument().createEvent('MouseEvent');
            evt.initEvent(eventType, true, true);
            return evt;
        };
        BrowserDomAdapter.prototype.createEvent = function (eventType) {
            var evt = this.getDefaultDocument().createEvent('Event');
            evt.initEvent(eventType, true, true);
            return evt;
        };
        BrowserDomAdapter.prototype.preventDefault = function (evt) {
            evt.preventDefault();
            evt.returnValue = false;
        };
        BrowserDomAdapter.prototype.isPrevented = function (evt) {
            return evt.defaultPrevented || evt.returnValue != null && !evt.returnValue;
        };
        BrowserDomAdapter.prototype.getInnerHTML = function (el) { return el.innerHTML; };
        BrowserDomAdapter.prototype.getTemplateContent = function (el) {
            return 'content' in el && this.isTemplateElement(el) ? el.content : null;
        };
        BrowserDomAdapter.prototype.getOuterHTML = function (el) { return el.outerHTML; };
        BrowserDomAdapter.prototype.nodeName = function (node) { return node.nodeName; };
        BrowserDomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
        BrowserDomAdapter.prototype.type = function (node) { return node.type; };
        BrowserDomAdapter.prototype.content = function (node) {
            if (this.hasProperty(node, 'content')) {
                return node.content;
            }
            else {
                return node;
            }
        };
        BrowserDomAdapter.prototype.firstChild = function (el) { return el.firstChild; };
        BrowserDomAdapter.prototype.nextSibling = function (el) { return el.nextSibling; };
        BrowserDomAdapter.prototype.parentElement = function (el) { return el.parentNode; };
        BrowserDomAdapter.prototype.childNodes = function (el) { return el.childNodes; };
        BrowserDomAdapter.prototype.childNodesAsList = function (el) {
            var childNodes = el.childNodes;
            var res = new Array(childNodes.length);
            for (var i = 0; i < childNodes.length; i++) {
                res[i] = childNodes[i];
            }
            return res;
        };
        BrowserDomAdapter.prototype.clearNodes = function (el) {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        };
        BrowserDomAdapter.prototype.appendChild = function (el, node) { el.appendChild(node); };
        BrowserDomAdapter.prototype.removeChild = function (el, node) { el.removeChild(node); };
        BrowserDomAdapter.prototype.replaceChild = function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
        BrowserDomAdapter.prototype.remove = function (node) {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            return node;
        };
        BrowserDomAdapter.prototype.insertBefore = function (parent, ref, node) { parent.insertBefore(node, ref); };
        BrowserDomAdapter.prototype.insertAllBefore = function (parent, ref, nodes) {
            nodes.forEach(function (n) { return parent.insertBefore(n, ref); });
        };
        BrowserDomAdapter.prototype.insertAfter = function (parent, ref, node) { parent.insertBefore(node, ref.nextSibling); };
        BrowserDomAdapter.prototype.setInnerHTML = function (el, value) { el.innerHTML = value; };
        BrowserDomAdapter.prototype.getText = function (el) { return el.textContent; };
        BrowserDomAdapter.prototype.setText = function (el, value) { el.textContent = value; };
        BrowserDomAdapter.prototype.getValue = function (el) { return el.value; };
        BrowserDomAdapter.prototype.setValue = function (el, value) { el.value = value; };
        BrowserDomAdapter.prototype.getChecked = function (el) { return el.checked; };
        BrowserDomAdapter.prototype.setChecked = function (el, value) { el.checked = value; };
        BrowserDomAdapter.prototype.createComment = function (text) { return this.getDefaultDocument().createComment(text); };
        BrowserDomAdapter.prototype.createTemplate = function (html) {
            var t = this.getDefaultDocument().createElement('template');
            t.innerHTML = html;
            return t;
        };
        BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
            doc = doc || this.getDefaultDocument();
            return doc.createElement(tagName);
        };
        BrowserDomAdapter.prototype.createElementNS = function (ns, tagName, doc) {
            doc = doc || this.getDefaultDocument();
            return doc.createElementNS(ns, tagName);
        };
        BrowserDomAdapter.prototype.createTextNode = function (text, doc) {
            doc = doc || this.getDefaultDocument();
            return doc.createTextNode(text);
        };
        BrowserDomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) {
            doc = doc || this.getDefaultDocument();
            var el = doc.createElement('SCRIPT');
            el.setAttribute(attrName, attrValue);
            return el;
        };
        BrowserDomAdapter.prototype.createStyleElement = function (css, doc) {
            doc = doc || this.getDefaultDocument();
            var style = doc.createElement('style');
            this.appendChild(style, this.createTextNode(css, doc));
            return style;
        };
        BrowserDomAdapter.prototype.createShadowRoot = function (el) { return el.createShadowRoot(); };
        BrowserDomAdapter.prototype.getShadowRoot = function (el) { return el.shadowRoot; };
        BrowserDomAdapter.prototype.getHost = function (el) { return el.host; };
        BrowserDomAdapter.prototype.clone = function (node) { return node.cloneNode(true); };
        BrowserDomAdapter.prototype.getElementsByClassName = function (element, name) {
            return element.getElementsByClassName(name);
        };
        BrowserDomAdapter.prototype.getElementsByTagName = function (element, name) {
            return element.getElementsByTagName(name);
        };
        BrowserDomAdapter.prototype.classList = function (element) { return Array.prototype.slice.call(element.classList, 0); };
        BrowserDomAdapter.prototype.addClass = function (element, className) { element.classList.add(className); };
        BrowserDomAdapter.prototype.removeClass = function (element, className) { element.classList.remove(className); };
        BrowserDomAdapter.prototype.hasClass = function (element, className) {
            return element.classList.contains(className);
        };
        BrowserDomAdapter.prototype.setStyle = function (element, styleName, styleValue) {
            element.style[styleName] = styleValue;
        };
        BrowserDomAdapter.prototype.removeStyle = function (element, stylename) {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            element.style[stylename] = '';
        };
        BrowserDomAdapter.prototype.getStyle = function (element, stylename) { return element.style[stylename]; };
        BrowserDomAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
            var value = this.getStyle(element, styleName) || '';
            return styleValue ? value == styleValue : value.length > 0;
        };
        BrowserDomAdapter.prototype.tagName = function (element) { return element.tagName; };
        BrowserDomAdapter.prototype.attributeMap = function (element) {
            var res = new Map();
            var elAttrs = element.attributes;
            for (var i = 0; i < elAttrs.length; i++) {
                var attrib = elAttrs.item(i);
                res.set(attrib.name, attrib.value);
            }
            return res;
        };
        BrowserDomAdapter.prototype.hasAttribute = function (element, attribute) {
            return element.hasAttribute(attribute);
        };
        BrowserDomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) {
            return element.hasAttributeNS(ns, attribute);
        };
        BrowserDomAdapter.prototype.getAttribute = function (element, attribute) {
            return element.getAttribute(attribute);
        };
        BrowserDomAdapter.prototype.getAttributeNS = function (element, ns, name) {
            return element.getAttributeNS(ns, name);
        };
        BrowserDomAdapter.prototype.setAttribute = function (element, name, value) { element.setAttribute(name, value); };
        BrowserDomAdapter.prototype.setAttributeNS = function (element, ns, name, value) {
            element.setAttributeNS(ns, name, value);
        };
        BrowserDomAdapter.prototype.removeAttribute = function (element, attribute) { element.removeAttribute(attribute); };
        BrowserDomAdapter.prototype.removeAttributeNS = function (element, ns, name) {
            element.removeAttributeNS(ns, name);
        };
        BrowserDomAdapter.prototype.templateAwareRoot = function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
        BrowserDomAdapter.prototype.createHtmlDocument = function () {
            return document.implementation.createHTMLDocument('fakeTitle');
        };
        BrowserDomAdapter.prototype.getDefaultDocument = function () { return document; };
        BrowserDomAdapter.prototype.getBoundingClientRect = function (el) {
            try {
                return el.getBoundingClientRect();
            }
            catch (e) {
                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
            }
        };
        BrowserDomAdapter.prototype.getTitle = function (doc) { return doc.title; };
        BrowserDomAdapter.prototype.setTitle = function (doc, newTitle) { doc.title = newTitle || ''; };
        BrowserDomAdapter.prototype.elementMatches = function (n, selector) {
            if (this.isElementNode(n)) {
                return n.matches && n.matches(selector) ||
                    n.msMatchesSelector && n.msMatchesSelector(selector) ||
                    n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
            }
            return false;
        };
        BrowserDomAdapter.prototype.isTemplateElement = function (el) {
            return this.isElementNode(el) && el.nodeName === 'TEMPLATE';
        };
        BrowserDomAdapter.prototype.isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
        BrowserDomAdapter.prototype.isCommentNode = function (node) { return node.nodeType === Node.COMMENT_NODE; };
        BrowserDomAdapter.prototype.isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
        BrowserDomAdapter.prototype.hasShadowRoot = function (node) {
            return node.shadowRoot != null && node instanceof HTMLElement;
        };
        BrowserDomAdapter.prototype.isShadowRoot = function (node) { return node instanceof DocumentFragment; };
        BrowserDomAdapter.prototype.importIntoDoc = function (node) { return document.importNode(this.templateAwareRoot(node), true); };
        BrowserDomAdapter.prototype.adoptNode = function (node) { return document.adoptNode(node); };
        BrowserDomAdapter.prototype.getHref = function (el) { return el.getAttribute('href'); };
        BrowserDomAdapter.prototype.getEventKey = function (event) {
            var key = event.key;
            if (key == null) {
                key = event.keyIdentifier;
                // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
                // Safari cf
                // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
                if (key == null) {
                    return 'Unidentified';
                }
                if (key.startsWith('U+')) {
                    key = String.fromCharCode(parseInt(key.substring(2), 16));
                    if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                        // There is a bug in Chrome for numeric keypad keys:
                        // https://code.google.com/p/chromium/issues/detail?id=155654
                        // 1, 2, 3 ... are reported as A, B, C ...
                        key = _chromeNumKeyPadMap[key];
                    }
                }
            }
            return _keyMap[key] || key;
        };
        BrowserDomAdapter.prototype.getGlobalEventTarget = function (doc, target) {
            if (target === 'window') {
                return window;
            }
            if (target === 'document') {
                return doc;
            }
            if (target === 'body') {
                return doc.body;
            }
            return null;
        };
        BrowserDomAdapter.prototype.getHistory = function () { return window.history; };
        BrowserDomAdapter.prototype.getLocation = function () { return window.location; };
        BrowserDomAdapter.prototype.getBaseHref = function (doc) {
            var href = getBaseElementHref();
            return href == null ? null : relativePath(href);
        };
        BrowserDomAdapter.prototype.resetBaseElement = function () { baseElement = null; };
        BrowserDomAdapter.prototype.getUserAgent = function () { return window.navigator.userAgent; };
        BrowserDomAdapter.prototype.setData = function (element, name, value) {
            this.setAttribute(element, 'data-' + name, value);
        };
        BrowserDomAdapter.prototype.getData = function (element, name) {
            return this.getAttribute(element, 'data-' + name);
        };
        BrowserDomAdapter.prototype.getComputedStyle = function (element) { return getComputedStyle(element); };
        // TODO(tbosch): move this into a separate environment class once we have it
        BrowserDomAdapter.prototype.supportsWebAnimation = function () {
            return typeof Element.prototype['animate'] === 'function';
        };
        BrowserDomAdapter.prototype.performanceNow = function () {
            // performance.now() is not available in all browsers, see
            // http://caniuse.com/#search=performance.now
            return window.performance && window.performance.now ? window.performance.now() :
                new Date().getTime();
        };
        BrowserDomAdapter.prototype.supportsCookies = function () { return true; };
        BrowserDomAdapter.prototype.getCookie = function (name) { return common.ɵparseCookieValue(document.cookie, name); };
        BrowserDomAdapter.prototype.setCookie = function (name, value) {
            // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
            // not clear other cookies.
            document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        };
        return BrowserDomAdapter;
    }(GenericBrowserDomAdapter));
    var baseElement = null;
    function getBaseElementHref() {
        if (!baseElement) {
            baseElement = document.querySelector('base');
            if (!baseElement) {
                return null;
            }
        }
        return baseElement.getAttribute('href');
    }
    // based on urlUtils.js in AngularJS 1
    var urlParsingNode;
    function relativePath(url) {
        if (!urlParsingNode) {
            urlParsingNode = document.createElement('a');
        }
        urlParsingNode.setAttribute('href', url);
        return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
            '/' + urlParsingNode.pathname;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
     *
     * Note: Document might not be available in the Application Context when Application and Rendering
     * Contexts are not the same (e.g. when running the application into a Web Worker).
     *
     * @deprecated import from `@angular/common` instead.
     */
    var DOCUMENT$1 = common.DOCUMENT;

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function supportsState() {
        return !!window.history.pushState;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
     * This class should not be used directly by an application developer. Instead, use
     * {@link Location}.
     */
    var BrowserPlatformLocation = /** @class */ (function (_super) {
        __extends(BrowserPlatformLocation, _super);
        function BrowserPlatformLocation(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            _this._init();
            return _this;
        }
        // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
        /** @internal */
        BrowserPlatformLocation.prototype._init = function () {
            this.location = getDOM().getLocation();
            this._history = getDOM().getHistory();
        };
        BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return getDOM().getBaseHref(this._doc); };
        BrowserPlatformLocation.prototype.onPopState = function (fn) {
            getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', fn, false);
        };
        BrowserPlatformLocation.prototype.onHashChange = function (fn) {
            getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', fn, false);
        };
        Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
            get: function () { return this.location.pathname; },
            set: function (newPath) { this.location.pathname = newPath; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
            get: function () { return this.location.search; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
            get: function () { return this.location.hash; },
            enumerable: true,
            configurable: true
        });
        BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
            if (supportsState()) {
                this._history.pushState(state, title, url);
            }
            else {
                this.location.hash = url;
            }
        };
        BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
            if (supportsState()) {
                this._history.replaceState(state, title, url);
            }
            else {
                this.location.hash = url;
            }
        };
        BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
        BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
        BrowserPlatformLocation = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1)),
            __metadata("design:paramtypes", [Object])
        ], BrowserPlatformLocation);
        return BrowserPlatformLocation;
    }(common.PlatformLocation));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * An id that identifies a particular application being bootstrapped, that should
     * match across the client/server boundary.
     */
    var TRANSITION_ID = new core.InjectionToken('TRANSITION_ID');
    function appInitializerFactory(transitionId, document, injector) {
        return function () {
            // Wait for all application initializers to be completed before removing the styles set by
            // the server.
            injector.get(core.ApplicationInitStatus).donePromise.then(function () {
                var dom = getDOM();
                var styles = Array.prototype.slice.apply(dom.querySelectorAll(document, "style[ng-transition]"));
                styles.filter(function (el) { return dom.getAttribute(el, 'ng-transition') === transitionId; })
                    .forEach(function (el) { return dom.remove(el); });
            });
        };
    }
    var SERVER_TRANSITION_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: appInitializerFactory,
            deps: [TRANSITION_ID, DOCUMENT$1, core.Injector],
            multi: true
        },
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var BrowserGetTestability = /** @class */ (function () {
        function BrowserGetTestability() {
        }
        BrowserGetTestability.init = function () { core.setTestabilityGetter(new BrowserGetTestability()); };
        BrowserGetTestability.prototype.addToWindow = function (registry) {
            core.ɵglobal['getAngularTestability'] = function (elem, findInAncestors) {
                if (findInAncestors === void 0) { findInAncestors = true; }
                var testability = registry.findTestabilityInTree(elem, findInAncestors);
                if (testability == null) {
                    throw new Error('Could not find testability for element.');
                }
                return testability;
            };
            core.ɵglobal['getAllAngularTestabilities'] = function () { return registry.getAllTestabilities(); };
            core.ɵglobal['getAllAngularRootElements'] = function () { return registry.getAllRootElements(); };
            var whenAllStable = function (callback /** TODO #9100 */) {
                var testabilities = core.ɵglobal['getAllAngularTestabilities']();
                var count = testabilities.length;
                var didWork = false;
                var decrement = function (didWork_ /** TODO #9100 */) {
                    didWork = didWork || didWork_;
                    count--;
                    if (count == 0) {
                        callback(didWork);
                    }
                };
                testabilities.forEach(function (testability /** TODO #9100 */) {
                    testability.whenStable(decrement);
                });
            };
            if (!core.ɵglobal['frameworkStabilizers']) {
                core.ɵglobal['frameworkStabilizers'] = [];
            }
            core.ɵglobal['frameworkStabilizers'].push(whenAllStable);
        };
        BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
            if (elem == null) {
                return null;
            }
            var t = registry.getTestability(elem);
            if (t != null) {
                return t;
            }
            else if (!findInAncestors) {
                return null;
            }
            if (getDOM().isShadowRoot(elem)) {
                return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
            }
            return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
        };
        return BrowserGetTestability;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
     * `name` is `'probe'`.
     * @param name Name under which it will be exported. Keep in mind this will be a property of the
     * global `ng` object.
     * @param value The value to export.
     */
    function exportNgVar(name, value) {
        if (typeof COMPILED === 'undefined' || !COMPILED) {
            // Note: we can't export `ng` when using closure enhanced optimization as:
            // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
            // - we can't declare a closure extern as the namespace `ng` is already used within Google
            //   for typings for angularJS (via `goog.provide('ng....')`).
            var ng = core.ɵglobal['ng'] = core.ɵglobal['ng'] || {};
            ng[name] = value;
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CORE_TOKENS = {
        'ApplicationRef': core.ApplicationRef,
        'NgZone': core.NgZone,
    };
    var INSPECT_GLOBAL_NAME = 'probe';
    var CORE_TOKENS_GLOBAL_NAME = 'coreTokens';
    /**
     * Returns a {@link DebugElement} for the given native DOM element, or
     * null if the given native element does not have an Angular view associated
     * with it.
     */
    function inspectNativeElement(element) {
        return core.getDebugNode(element);
    }
    function _createNgProbe(coreTokens) {
        exportNgVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
        exportNgVar(CORE_TOKENS_GLOBAL_NAME, __assign({}, CORE_TOKENS, _ngProbeTokensToMap(coreTokens || [])));
        return function () { return inspectNativeElement; };
    }
    function _ngProbeTokensToMap(tokens) {
        return tokens.reduce(function (prev, t) { return (prev[t.name] = t.token, prev); }, {});
    }
    /**
     * Providers which support debugging Angular applications (e.g. via `ng.probe`).
     */
    var ELEMENT_PROBE_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: _createNgProbe,
            deps: [
                [core.NgProbeToken, new core.Optional()],
            ],
            multi: true,
        },
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * The injection token for the event-manager plug-in service.
     */
    var EVENT_MANAGER_PLUGINS = new core.InjectionToken('EventManagerPlugins');
    /**
     * An injectable service that provides event management for Angular
     * through a browser plug-in.
     */
    var EventManager = /** @class */ (function () {
        /**
         * Initializes an instance of the event-manager service.
         */
        function EventManager(plugins, _zone) {
            var _this = this;
            this._zone = _zone;
            this._eventNameToPlugin = new Map();
            plugins.forEach(function (p) { return p.manager = _this; });
            this._plugins = plugins.slice().reverse();
        }
        /**
         * Registers a handler for a specific element and event.
         *
         * @param element The HTML element to receive event notifications.
         * @param eventName The name of the event to listen for.
         * @param handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @returns  A callback function that can be used to remove the handler.
         */
        EventManager.prototype.addEventListener = function (element, eventName, handler) {
            var plugin = this._findPluginFor(eventName);
            return plugin.addEventListener(element, eventName, handler);
        };
        /**
         * Registers a global handler for an event in a target view.
         *
         * @param target A target for global event notifications. One of "window", "document", or "body".
         * @param eventName The name of the event to listen for.
         * @param handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @returns A callback function that can be used to remove the handler.
         */
        EventManager.prototype.addGlobalEventListener = function (target, eventName, handler) {
            var plugin = this._findPluginFor(eventName);
            return plugin.addGlobalEventListener(target, eventName, handler);
        };
        /**
         * Retrieves the compilation zone in which event listeners are registered.
         */
        EventManager.prototype.getZone = function () { return this._zone; };
        /** @internal */
        EventManager.prototype._findPluginFor = function (eventName) {
            var plugin = this._eventNameToPlugin.get(eventName);
            if (plugin) {
                return plugin;
            }
            var plugins = this._plugins;
            for (var i = 0; i < plugins.length; i++) {
                var plugin_1 = plugins[i];
                if (plugin_1.supports(eventName)) {
                    this._eventNameToPlugin.set(eventName, plugin_1);
                    return plugin_1;
                }
            }
            throw new Error("No event manager plugin found for event " + eventName);
        };
        EventManager = __decorate([
            core.Injectable(),
            __param(0, core.Inject(EVENT_MANAGER_PLUGINS)),
            __metadata("design:paramtypes", [Array, core.NgZone])
        ], EventManager);
        return EventManager;
    }());
    var EventManagerPlugin = /** @class */ (function () {
        function EventManagerPlugin(_doc) {
            this._doc = _doc;
        }
        EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
            var target = getDOM().getGlobalEventTarget(this._doc, element);
            if (!target) {
                throw new Error("Unsupported event target " + target + " for event " + eventName);
            }
            return this.addEventListener(target, eventName, handler);
        };
        return EventManagerPlugin;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SharedStylesHost = /** @class */ (function () {
        function SharedStylesHost() {
            /** @internal */
            this._stylesSet = new Set();
        }
        SharedStylesHost.prototype.addStyles = function (styles) {
            var _this = this;
            var additions = new Set();
            styles.forEach(function (style) {
                if (!_this._stylesSet.has(style)) {
                    _this._stylesSet.add(style);
                    additions.add(style);
                }
            });
            this.onStylesAdded(additions);
        };
        SharedStylesHost.prototype.onStylesAdded = function (additions) { };
        SharedStylesHost.prototype.getAllStyles = function () { return Array.from(this._stylesSet); };
        SharedStylesHost = __decorate([
            core.Injectable()
        ], SharedStylesHost);
        return SharedStylesHost;
    }());
    var DomSharedStylesHost = /** @class */ (function (_super) {
        __extends(DomSharedStylesHost, _super);
        function DomSharedStylesHost(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            _this._hostNodes = new Set();
            _this._styleNodes = new Set();
            _this._hostNodes.add(_doc.head);
            return _this;
        }
        DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
            var _this = this;
            styles.forEach(function (style) {
                var styleEl = _this._doc.createElement('style');
                styleEl.textContent = style;
                _this._styleNodes.add(host.appendChild(styleEl));
            });
        };
        DomSharedStylesHost.prototype.addHost = function (hostNode) {
            this._addStylesToHost(this._stylesSet, hostNode);
            this._hostNodes.add(hostNode);
        };
        DomSharedStylesHost.prototype.removeHost = function (hostNode) { this._hostNodes.delete(hostNode); };
        DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
            var _this = this;
            this._hostNodes.forEach(function (hostNode) { return _this._addStylesToHost(additions, hostNode); });
        };
        DomSharedStylesHost.prototype.ngOnDestroy = function () { this._styleNodes.forEach(function (styleNode) { return getDOM().remove(styleNode); }); };
        DomSharedStylesHost = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1)),
            __metadata("design:paramtypes", [Object])
        ], DomSharedStylesHost);
        return DomSharedStylesHost;
    }(SharedStylesHost));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NAMESPACE_URIS = {
        'svg': 'http://www.w3.org/2000/svg',
        'xhtml': 'http://www.w3.org/1999/xhtml',
        'xlink': 'http://www.w3.org/1999/xlink',
        'xml': 'http://www.w3.org/XML/1998/namespace',
        'xmlns': 'http://www.w3.org/2000/xmlns/',
    };
    var COMPONENT_REGEX = /%COMP%/g;
    var COMPONENT_VARIABLE = '%COMP%';
    var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
    var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
    function shimContentAttribute(componentShortId) {
        return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
    }
    function shimHostAttribute(componentShortId) {
        return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
    }
    function flattenStyles(compId, styles, target) {
        for (var i = 0; i < styles.length; i++) {
            var style = styles[i];
            if (Array.isArray(style)) {
                flattenStyles(compId, style, target);
            }
            else {
                style = style.replace(COMPONENT_REGEX, compId);
                target.push(style);
            }
        }
        return target;
    }
    function decoratePreventDefault(eventHandler) {
        return function (event) {
            var allowDefaultBehavior = eventHandler(event);
            if (allowDefaultBehavior === false) {
                // TODO(tbosch): move preventDefault into event plugins...
                event.preventDefault();
                event.returnValue = false;
            }
        };
    }
    var DomRendererFactory2 = /** @class */ (function () {
        function DomRendererFactory2(eventManager, sharedStylesHost) {
            this.eventManager = eventManager;
            this.sharedStylesHost = sharedStylesHost;
            this.rendererByCompId = new Map();
            this.defaultRenderer = new DefaultDomRenderer2(eventManager);
        }
        DomRendererFactory2.prototype.createRenderer = function (element, type) {
            if (!element || !type) {
                return this.defaultRenderer;
            }
            switch (type.encapsulation) {
                case core.ViewEncapsulation.Emulated: {
                    var renderer = this.rendererByCompId.get(type.id);
                    if (!renderer) {
                        renderer =
                            new EmulatedEncapsulationDomRenderer2(this.eventManager, this.sharedStylesHost, type);
                        this.rendererByCompId.set(type.id, renderer);
                    }
                    renderer.applyToHost(element);
                    return renderer;
                }
                case core.ViewEncapsulation.Native:
                case core.ViewEncapsulation.ShadowDom:
                    return new ShadowDomRenderer(this.eventManager, this.sharedStylesHost, element, type);
                default: {
                    if (!this.rendererByCompId.has(type.id)) {
                        var styles = flattenStyles(type.id, type.styles, []);
                        this.sharedStylesHost.addStyles(styles);
                        this.rendererByCompId.set(type.id, this.defaultRenderer);
                    }
                    return this.defaultRenderer;
                }
            }
        };
        DomRendererFactory2.prototype.begin = function () { };
        DomRendererFactory2.prototype.end = function () { };
        DomRendererFactory2 = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [EventManager, DomSharedStylesHost])
        ], DomRendererFactory2);
        return DomRendererFactory2;
    }());
    var DefaultDomRenderer2 = /** @class */ (function () {
        function DefaultDomRenderer2(eventManager) {
            this.eventManager = eventManager;
            this.data = Object.create(null);
        }
        DefaultDomRenderer2.prototype.destroy = function () { };
        DefaultDomRenderer2.prototype.createElement = function (name, namespace) {
            if (namespace) {
                return document.createElementNS(NAMESPACE_URIS[namespace], name);
            }
            return document.createElement(name);
        };
        DefaultDomRenderer2.prototype.createComment = function (value) { return document.createComment(value); };
        DefaultDomRenderer2.prototype.createText = function (value) { return document.createTextNode(value); };
        DefaultDomRenderer2.prototype.appendChild = function (parent, newChild) { parent.appendChild(newChild); };
        DefaultDomRenderer2.prototype.insertBefore = function (parent, newChild, refChild) {
            if (parent) {
                parent.insertBefore(newChild, refChild);
            }
        };
        DefaultDomRenderer2.prototype.removeChild = function (parent, oldChild) {
            if (parent) {
                parent.removeChild(oldChild);
            }
        };
        DefaultDomRenderer2.prototype.selectRootElement = function (selectorOrNode, preserveContent) {
            var el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) :
                selectorOrNode;
            if (!el) {
                throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
            }
            if (!preserveContent) {
                el.textContent = '';
            }
            return el;
        };
        DefaultDomRenderer2.prototype.parentNode = function (node) { return node.parentNode; };
        DefaultDomRenderer2.prototype.nextSibling = function (node) { return node.nextSibling; };
        DefaultDomRenderer2.prototype.setAttribute = function (el, name, value, namespace) {
            if (namespace) {
                name = namespace + ":" + name;
                var namespaceUri = NAMESPACE_URIS[namespace];
                if (namespaceUri) {
                    el.setAttributeNS(namespaceUri, name, value);
                }
                else {
                    el.setAttribute(name, value);
                }
            }
            else {
                el.setAttribute(name, value);
            }
        };
        DefaultDomRenderer2.prototype.removeAttribute = function (el, name, namespace) {
            if (namespace) {
                var namespaceUri = NAMESPACE_URIS[namespace];
                if (namespaceUri) {
                    el.removeAttributeNS(namespaceUri, name);
                }
                else {
                    el.removeAttribute(namespace + ":" + name);
                }
            }
            else {
                el.removeAttribute(name);
            }
        };
        DefaultDomRenderer2.prototype.addClass = function (el, name) { el.classList.add(name); };
        DefaultDomRenderer2.prototype.removeClass = function (el, name) { el.classList.remove(name); };
        DefaultDomRenderer2.prototype.setStyle = function (el, style, value, flags) {
            if (flags & core.RendererStyleFlags2.DashCase) {
                el.style.setProperty(style, value, !!(flags & core.RendererStyleFlags2.Important) ? 'important' : '');
            }
            else {
                el.style[style] = value;
            }
        };
        DefaultDomRenderer2.prototype.removeStyle = function (el, style, flags) {
            if (flags & core.RendererStyleFlags2.DashCase) {
                el.style.removeProperty(style);
            }
            else {
                // IE requires '' instead of null
                // see https://github.com/angular/angular/issues/7916
                el.style[style] = '';
            }
        };
        DefaultDomRenderer2.prototype.setProperty = function (el, name, value) {
            checkNoSyntheticProp(name, 'property');
            el[name] = value;
        };
        DefaultDomRenderer2.prototype.setValue = function (node, value) { node.nodeValue = value; };
        DefaultDomRenderer2.prototype.listen = function (target, event, callback) {
            checkNoSyntheticProp(event, 'listener');
            if (typeof target === 'string') {
                return this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback));
            }
            return this.eventManager.addEventListener(target, event, decoratePreventDefault(callback));
        };
        return DefaultDomRenderer2;
    }());
    var AT_CHARCODE = '@'.charCodeAt(0);
    function checkNoSyntheticProp(name, nameKind) {
        if (name.charCodeAt(0) === AT_CHARCODE) {
            throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
        }
    }
    var EmulatedEncapsulationDomRenderer2 = /** @class */ (function (_super) {
        __extends(EmulatedEncapsulationDomRenderer2, _super);
        function EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, component) {
            var _this = _super.call(this, eventManager) || this;
            _this.component = component;
            var styles = flattenStyles(component.id, component.styles, []);
            sharedStylesHost.addStyles(styles);
            _this.contentAttr = shimContentAttribute(component.id);
            _this.hostAttr = shimHostAttribute(component.id);
            return _this;
        }
        EmulatedEncapsulationDomRenderer2.prototype.applyToHost = function (element) { _super.prototype.setAttribute.call(this, element, this.hostAttr, ''); };
        EmulatedEncapsulationDomRenderer2.prototype.createElement = function (parent, name) {
            var el = _super.prototype.createElement.call(this, parent, name);
            _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
            return el;
        };
        return EmulatedEncapsulationDomRenderer2;
    }(DefaultDomRenderer2));
    var ShadowDomRenderer = /** @class */ (function (_super) {
        __extends(ShadowDomRenderer, _super);
        function ShadowDomRenderer(eventManager, sharedStylesHost, hostEl, component) {
            var _this = _super.call(this, eventManager) || this;
            _this.sharedStylesHost = sharedStylesHost;
            _this.hostEl = hostEl;
            _this.component = component;
            if (component.encapsulation === core.ViewEncapsulation.ShadowDom) {
                _this.shadowRoot = hostEl.attachShadow({ mode: 'open' });
            }
            else {
                _this.shadowRoot = hostEl.createShadowRoot();
            }
            _this.sharedStylesHost.addHost(_this.shadowRoot);
            var styles = flattenStyles(component.id, component.styles, []);
            for (var i = 0; i < styles.length; i++) {
                var styleEl = document.createElement('style');
                styleEl.textContent = styles[i];
                _this.shadowRoot.appendChild(styleEl);
            }
            return _this;
        }
        ShadowDomRenderer.prototype.nodeOrShadowRoot = function (node) { return node === this.hostEl ? this.shadowRoot : node; };
        ShadowDomRenderer.prototype.destroy = function () { this.sharedStylesHost.removeHost(this.shadowRoot); };
        ShadowDomRenderer.prototype.appendChild = function (parent, newChild) {
            return _super.prototype.appendChild.call(this, this.nodeOrShadowRoot(parent), newChild);
        };
        ShadowDomRenderer.prototype.insertBefore = function (parent, newChild, refChild) {
            return _super.prototype.insertBefore.call(this, this.nodeOrShadowRoot(parent), newChild, refChild);
        };
        ShadowDomRenderer.prototype.removeChild = function (parent, oldChild) {
            return _super.prototype.removeChild.call(this, this.nodeOrShadowRoot(parent), oldChild);
        };
        ShadowDomRenderer.prototype.parentNode = function (node) {
            return this.nodeOrShadowRoot(_super.prototype.parentNode.call(this, this.nodeOrShadowRoot(node)));
        };
        return ShadowDomRenderer;
    }(DefaultDomRenderer2));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ɵ0 = function (v) {
        return '__zone_symbol__' + v;
    };
    /**
     * Detect if Zone is present. If it is then use simple zone aware 'addEventListener'
     * since Angular can do much more
     * efficient bookkeeping than Zone can, because we have additional information. This speeds up
     * addEventListener by 3x.
     */
    var __symbol__ = (typeof Zone !== 'undefined') && Zone['__symbol__'] || ɵ0;
    var ADD_EVENT_LISTENER = __symbol__('addEventListener');
    var REMOVE_EVENT_LISTENER = __symbol__('removeEventListener');
    var symbolNames = {};
    var FALSE = 'FALSE';
    var ANGULAR = 'ANGULAR';
    var NATIVE_ADD_LISTENER = 'addEventListener';
    var NATIVE_REMOVE_LISTENER = 'removeEventListener';
    // use the same symbol string which is used in zone.js
    var stopSymbol = '__zone_symbol__propagationStopped';
    var stopMethodSymbol = '__zone_symbol__stopImmediatePropagation';
    var blackListedEvents = (typeof Zone !== 'undefined') && Zone[__symbol__('BLACK_LISTED_EVENTS')];
    var blackListedMap;
    if (blackListedEvents) {
        blackListedMap = {};
        blackListedEvents.forEach(function (eventName) { blackListedMap[eventName] = eventName; });
    }
    var isBlackListedEvent = function (eventName) {
        if (!blackListedMap) {
            return false;
        }
        return blackListedMap.hasOwnProperty(eventName);
    };
    // a global listener to handle all dom event,
    // so we do not need to create a closure every time
    var globalListener = function (event) {
        var symbolName = symbolNames[event.type];
        if (!symbolName) {
            return;
        }
        var taskDatas = this[symbolName];
        if (!taskDatas) {
            return;
        }
        var args = [event];
        if (taskDatas.length === 1) {
            // if taskDatas only have one element, just invoke it
            var taskData = taskDatas[0];
            if (taskData.zone !== Zone.current) {
                // only use Zone.run when Zone.current not equals to stored zone
                return taskData.zone.run(taskData.handler, this, args);
            }
            else {
                return taskData.handler.apply(this, args);
            }
        }
        else {
            // copy tasks as a snapshot to avoid event handlers remove
            // itself or others
            var copiedTasks = taskDatas.slice();
            for (var i = 0; i < copiedTasks.length; i++) {
                // if other listener call event.stopImmediatePropagation
                // just break
                if (event[stopSymbol] === true) {
                    break;
                }
                var taskData = copiedTasks[i];
                if (taskData.zone !== Zone.current) {
                    // only use Zone.run when Zone.current not equals to stored zone
                    taskData.zone.run(taskData.handler, this, args);
                }
                else {
                    taskData.handler.apply(this, args);
                }
            }
        }
    };
    var DomEventsPlugin = /** @class */ (function (_super) {
        __extends(DomEventsPlugin, _super);
        function DomEventsPlugin(doc, ngZone, platformId) {
            var _this = _super.call(this, doc) || this;
            _this.ngZone = ngZone;
            if (!platformId || !common.isPlatformServer(platformId)) {
                _this.patchEvent();
            }
            return _this;
        }
        DomEventsPlugin.prototype.patchEvent = function () {
            if (typeof Event === 'undefined' || !Event || !Event.prototype) {
                return;
            }
            if (Event.prototype[stopMethodSymbol]) {
                // already patched by zone.js
                return;
            }
            var delegate = Event.prototype[stopMethodSymbol] =
                Event.prototype.stopImmediatePropagation;
            Event.prototype.stopImmediatePropagation = function () {
                if (this) {
                    this[stopSymbol] = true;
                }
                // should call native delegate in case
                // in some environment part of the application
                // will not use the patched Event
                delegate && delegate.apply(this, arguments);
            };
        };
        // This plugin should come last in the list of plugins, because it accepts all
        // events.
        DomEventsPlugin.prototype.supports = function (eventName) { return true; };
        DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var _this = this;
            var zoneJsLoaded = element[ADD_EVENT_LISTENER];
            var callback = handler;
            // if zonejs is loaded and current zone is not ngZone
            // we keep Zone.current on target for later restoration.
            if (zoneJsLoaded && (!core.NgZone.isInAngularZone() || isBlackListedEvent(eventName))) {
                var symbolName = symbolNames[eventName];
                if (!symbolName) {
                    symbolName = symbolNames[eventName] = __symbol__(ANGULAR + eventName + FALSE);
                }
                var taskDatas = element[symbolName];
                var globalListenerRegistered = taskDatas && taskDatas.length > 0;
                if (!taskDatas) {
                    taskDatas = element[symbolName] = [];
                }
                var zone = isBlackListedEvent(eventName) ? Zone.root : Zone.current;
                if (taskDatas.length === 0) {
                    taskDatas.push({ zone: zone, handler: callback });
                }
                else {
                    var callbackRegistered = false;
                    for (var i = 0; i < taskDatas.length; i++) {
                        if (taskDatas[i].handler === callback) {
                            callbackRegistered = true;
                            break;
                        }
                    }
                    if (!callbackRegistered) {
                        taskDatas.push({ zone: zone, handler: callback });
                    }
                }
                if (!globalListenerRegistered) {
                    element[ADD_EVENT_LISTENER](eventName, globalListener, false);
                }
            }
            else {
                element[NATIVE_ADD_LISTENER](eventName, callback, false);
            }
            return function () { return _this.removeEventListener(element, eventName, callback); };
        };
        DomEventsPlugin.prototype.removeEventListener = function (target, eventName, callback) {
            var underlyingRemove = target[REMOVE_EVENT_LISTENER];
            // zone.js not loaded, use native removeEventListener
            if (!underlyingRemove) {
                return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
            }
            var symbolName = symbolNames[eventName];
            var taskDatas = symbolName && target[symbolName];
            if (!taskDatas) {
                // addEventListener not using patched version
                // just call native removeEventListener
                return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
            }
            // fix issue 20532, should be able to remove
            // listener which was added inside of ngZone
            var found = false;
            for (var i = 0; i < taskDatas.length; i++) {
                // remove listener from taskDatas if the callback equals
                if (taskDatas[i].handler === callback) {
                    found = true;
                    taskDatas.splice(i, 1);
                    break;
                }
            }
            if (found) {
                if (taskDatas.length === 0) {
                    // all listeners are removed, we can remove the globalListener from target
                    underlyingRemove.apply(target, [eventName, globalListener, false]);
                }
            }
            else {
                // not found in taskDatas, the callback may be added inside of ngZone
                // use native remove listener to remove the callback
                target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
            }
        };
        DomEventsPlugin = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1)),
            __param(2, core.Optional()), __param(2, core.Inject(core.PLATFORM_ID)),
            __metadata("design:paramtypes", [Object, core.NgZone, Object])
        ], DomEventsPlugin);
        return DomEventsPlugin;
    }(EventManagerPlugin));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Supported HammerJS recognizer event names.
     */
    var EVENT_NAMES = {
        // pan
        'pan': true,
        'panstart': true,
        'panmove': true,
        'panend': true,
        'pancancel': true,
        'panleft': true,
        'panright': true,
        'panup': true,
        'pandown': true,
        // pinch
        'pinch': true,
        'pinchstart': true,
        'pinchmove': true,
        'pinchend': true,
        'pinchcancel': true,
        'pinchin': true,
        'pinchout': true,
        // press
        'press': true,
        'pressup': true,
        // rotate
        'rotate': true,
        'rotatestart': true,
        'rotatemove': true,
        'rotateend': true,
        'rotatecancel': true,
        // swipe
        'swipe': true,
        'swipeleft': true,
        'swiperight': true,
        'swipeup': true,
        'swipedown': true,
        // tap
        'tap': true,
    };
    /**
     * DI token for providing [HammerJS](http://hammerjs.github.io/) support to Angular.
     * @see `HammerGestureConfig`
     *
     * @experimental
     */
    var HAMMER_GESTURE_CONFIG = new core.InjectionToken('HammerGestureConfig');
    /** Injection token used to provide a {@link HammerLoader} to Angular. */
    var HAMMER_LOADER = new core.InjectionToken('HammerLoader');
    /**
     * An injectable [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
     * for gesture recognition. Configures specific event recognition.
     * @experimental
     */
    var HammerGestureConfig = /** @class */ (function () {
        function HammerGestureConfig() {
            /**
             * A set of supported event names for gestures to be used in Angular.
             * Angular supports all built-in recognizers, as listed in
             * [HammerJS documentation](http://hammerjs.github.io/).
             */
            this.events = [];
            /**
            * Maps gesture event names to a set of configuration options
            * that specify overrides to the default values for specific properties.
            *
            * The key is a supported event name to be configured,
            * and the options object contains a set of properties, with override values
            * to be applied to the named recognizer event.
            * For example, to disable recognition of the rotate event, specify
            *  `{"rotate": {"enable": false}}`.
            *
            * Properties that are not present take the HammerJS default values.
            * For information about which properties are supported for which events,
            * and their allowed and default values, see
            * [HammerJS documentation](http://hammerjs.github.io/).
            *
            */
            this.overrides = {};
        }
        /**
         * Creates a [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
         * and attaches it to a given HTML element.
         * @param element The element that will recognize gestures.
         * @returns A HammerJS event-manager object.
         */
        HammerGestureConfig.prototype.buildHammer = function (element) {
            var mc = new Hammer(element, this.options);
            mc.get('pinch').set({ enable: true });
            mc.get('rotate').set({ enable: true });
            for (var eventName in this.overrides) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
            return mc;
        };
        HammerGestureConfig = __decorate([
            core.Injectable()
        ], HammerGestureConfig);
        return HammerGestureConfig;
    }());
    var HammerGesturesPlugin = /** @class */ (function (_super) {
        __extends(HammerGesturesPlugin, _super);
        function HammerGesturesPlugin(doc, _config, console, loader) {
            var _this = _super.call(this, doc) || this;
            _this._config = _config;
            _this.console = console;
            _this.loader = loader;
            return _this;
        }
        HammerGesturesPlugin.prototype.supports = function (eventName) {
            if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
                return false;
            }
            if (!window.Hammer && !this.loader) {
                this.console.warn("The \"" + eventName + "\" event cannot be bound because Hammer.JS is not " +
                    "loaded and no custom loader has been specified.");
                return false;
            }
            return true;
        };
        HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var _this = this;
            var zone = this.manager.getZone();
            eventName = eventName.toLowerCase();
            // If Hammer is not present but a loader is specified, we defer adding the event listener
            // until Hammer is loaded.
            if (!window.Hammer && this.loader) {
                // This `addEventListener` method returns a function to remove the added listener.
                // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
                // than remove anything.
                var cancelRegistration_1 = false;
                var deregister_1 = function () { cancelRegistration_1 = true; };
                this.loader()
                    .then(function () {
                    // If Hammer isn't actually loaded when the custom loader resolves, give up.
                    if (!window.Hammer) {
                        _this.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present.");
                        deregister_1 = function () { };
                        return;
                    }
                    if (!cancelRegistration_1) {
                        // Now that Hammer is loaded and the listener is being loaded for real,
                        // the deregistration function changes from canceling registration to removal.
                        deregister_1 = _this.addEventListener(element, eventName, handler);
                    }
                })
                    .catch(function () {
                    _this.console.warn("The \"" + eventName + "\" event cannot be bound because the custom " +
                        "Hammer.JS loader failed.");
                    deregister_1 = function () { };
                });
                // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
                // can change the behavior of `deregister` once the listener is added. Using a closure in
                // this way allows us to avoid any additional data structures to track listener removal.
                return function () { deregister_1(); };
            }
            return zone.runOutsideAngular(function () {
                // Creating the manager bind events, must be done outside of angular
                var mc = _this._config.buildHammer(element);
                var callback = function (eventObj) {
                    zone.runGuarded(function () { handler(eventObj); });
                };
                mc.on(eventName, callback);
                return function () {
                    mc.off(eventName, callback);
                    // destroy mc to prevent memory leak
                    if (typeof mc.destroy === 'function') {
                        mc.destroy();
                    }
                };
            });
        };
        HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
        HammerGesturesPlugin = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1)),
            __param(1, core.Inject(HAMMER_GESTURE_CONFIG)),
            __param(3, core.Optional()), __param(3, core.Inject(HAMMER_LOADER)),
            __metadata("design:paramtypes", [Object, HammerGestureConfig, core.ɵConsole, Object])
        ], HammerGesturesPlugin);
        return HammerGesturesPlugin;
    }(EventManagerPlugin));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Defines supported modifiers for key events.
     */
    var MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
    var ɵ0$1 = function (event) { return event.altKey; }, ɵ1$1 = function (event) { return event.ctrlKey; }, ɵ2$1 = function (event) { return event.metaKey; }, ɵ3 = function (event) { return event.shiftKey; };
    /**
     * Retrieves modifiers from key-event objects.
     */
    var MODIFIER_KEY_GETTERS = {
        'alt': ɵ0$1,
        'control': ɵ1$1,
        'meta': ɵ2$1,
        'shift': ɵ3
    };
    /**
     * @experimental
     * A browser plug-in that provides support for handling of key events in Angular.
     */
    var KeyEventsPlugin = /** @class */ (function (_super) {
        __extends(KeyEventsPlugin, _super);
        /**
         * Initializes an instance of the browser plug-in.
         * @param doc The document in which key events will be detected.
         */
        function KeyEventsPlugin(doc) {
            return _super.call(this, doc) || this;
        }
        KeyEventsPlugin_1 = KeyEventsPlugin;
        /**
          * Reports whether a named key event is supported.
          * @param eventName The event name to query.
          * @return True if the named key event is supported.
         */
        KeyEventsPlugin.prototype.supports = function (eventName) { return KeyEventsPlugin_1.parseEventName(eventName) != null; };
        /**
         * Registers a handler for a specific element and key event.
         * @param element The HTML element to receive event notifications.
         * @param eventName The name of the key event to listen for.
         * @param handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @returns The key event that was registered.
        */
        KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var parsedEvent = KeyEventsPlugin_1.parseEventName(eventName);
            var outsideHandler = KeyEventsPlugin_1.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function () {
                return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
            });
        };
        KeyEventsPlugin.parseEventName = function (eventName) {
            var parts = eventName.toLowerCase().split('.');
            var domEventName = parts.shift();
            if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
                return null;
            }
            var key = KeyEventsPlugin_1._normalizeKey(parts.pop());
            var fullKey = '';
            MODIFIER_KEYS.forEach(function (modifierName) {
                var index = parts.indexOf(modifierName);
                if (index > -1) {
                    parts.splice(index, 1);
                    fullKey += modifierName + '.';
                }
            });
            fullKey += key;
            if (parts.length != 0 || key.length === 0) {
                // returning null instead of throwing to let another plugin process the event
                return null;
            }
            var result = {};
            result['domEventName'] = domEventName;
            result['fullKey'] = fullKey;
            return result;
        };
        KeyEventsPlugin.getEventFullKey = function (event) {
            var fullKey = '';
            var key = getDOM().getEventKey(event);
            key = key.toLowerCase();
            if (key === ' ') {
                key = 'space'; // for readability
            }
            else if (key === '.') {
                key = 'dot'; // because '.' is used as a separator in event names
            }
            MODIFIER_KEYS.forEach(function (modifierName) {
                if (modifierName != key) {
                    var modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                    if (modifierGetter(event)) {
                        fullKey += modifierName + '.';
                    }
                }
            });
            fullKey += key;
            return fullKey;
        };
        /**
         * Configures a handler callback for a key event.
         * @param fullKey The event name that combines all simultaneous keystrokes.
         * @param handler The function that responds to the key event.
         * @param zone The zone in which the event occurred.
         * @returns A callback function.
         */
        KeyEventsPlugin.eventCallback = function (fullKey, handler, zone) {
            return function (event /** TODO #9100 */) {
                if (KeyEventsPlugin_1.getEventFullKey(event) === fullKey) {
                    zone.runGuarded(function () { return handler(event); });
                }
            };
        };
        /** @internal */
        KeyEventsPlugin._normalizeKey = function (keyName) {
            // TODO: switch to a Map if the mapping grows too much
            switch (keyName) {
                case 'esc':
                    return 'escape';
                default:
                    return keyName;
            }
        };
        var KeyEventsPlugin_1;
        KeyEventsPlugin = KeyEventsPlugin_1 = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1)),
            __metadata("design:paramtypes", [Object])
        ], KeyEventsPlugin);
        return KeyEventsPlugin;
    }(EventManagerPlugin));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
     * values to be safe to use in the different DOM contexts.
     *
     * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
     * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
     * the website.
     *
     * In specific situations, it might be necessary to disable sanitization, for example if the
     * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
     * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
     * methods, and then binding to that value from the template.
     *
     * These situations should be very rare, and extraordinary care must be taken to avoid creating a
     * Cross Site Scripting (XSS) security bug!
     *
     * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
     * close as possible to the source of the value, to make it easy to verify no security bug is
     * created by its use.
     *
     * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
     * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
     * code. The sanitizer leaves safe values intact.
     *
     * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
     * sanitization for the value passed in. Carefully check and audit all values and code paths going
     * into this call. Make sure any user data is appropriately escaped for this security context.
     * For more detail, see the [Security Guide](http://g.co/ng/security).
     *
     *
     */
    var DomSanitizer = /** @class */ (function () {
        function DomSanitizer() {
        }
        return DomSanitizer;
    }());
    var DomSanitizerImpl = /** @class */ (function (_super) {
        __extends(DomSanitizerImpl, _super);
        function DomSanitizerImpl(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            return _this;
        }
        DomSanitizerImpl.prototype.sanitize = function (ctx, value) {
            if (value == null)
                return null;
            switch (ctx) {
                case core.SecurityContext.NONE:
                    return value;
                case core.SecurityContext.HTML:
                    if (value instanceof SafeHtmlImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'HTML');
                    return core.ɵ_sanitizeHtml(this._doc, String(value));
                case core.SecurityContext.STYLE:
                    if (value instanceof SafeStyleImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'Style');
                    return core.ɵ_sanitizeStyle(value);
                case core.SecurityContext.SCRIPT:
                    if (value instanceof SafeScriptImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'Script');
                    throw new Error('unsafe value used in a script context');
                case core.SecurityContext.URL:
                    if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
                        // Allow resource URLs in URL contexts, they are strictly more trusted.
                        return value.changingThisBreaksApplicationSecurity;
                    }
                    this.checkNotSafeValue(value, 'URL');
                    return core.ɵ_sanitizeUrl(String(value));
                case core.SecurityContext.RESOURCE_URL:
                    if (value instanceof SafeResourceUrlImpl) {
                        return value.changingThisBreaksApplicationSecurity;
                    }
                    this.checkNotSafeValue(value, 'ResourceURL');
                    throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
                default:
                    throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
            }
        };
        DomSanitizerImpl.prototype.checkNotSafeValue = function (value, expectedType) {
            if (value instanceof SafeValueImpl) {
                throw new Error("Required a safe " + expectedType + ", got a " + value.getTypeName() + " " +
                    "(see http://g.co/ng/security#xss)");
            }
        };
        DomSanitizerImpl.prototype.bypassSecurityTrustHtml = function (value) { return new SafeHtmlImpl(value); };
        DomSanitizerImpl.prototype.bypassSecurityTrustStyle = function (value) { return new SafeStyleImpl(value); };
        DomSanitizerImpl.prototype.bypassSecurityTrustScript = function (value) { return new SafeScriptImpl(value); };
        DomSanitizerImpl.prototype.bypassSecurityTrustUrl = function (value) { return new SafeUrlImpl(value); };
        DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = function (value) {
            return new SafeResourceUrlImpl(value);
        };
        DomSanitizerImpl = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1)),
            __metadata("design:paramtypes", [Object])
        ], DomSanitizerImpl);
        return DomSanitizerImpl;
    }(DomSanitizer));
    var SafeValueImpl = /** @class */ (function () {
        function SafeValueImpl(changingThisBreaksApplicationSecurity) {
            this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
            // empty
        }
        SafeValueImpl.prototype.toString = function () {
            return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity +
                " (see http://g.co/ng/security#xss)";
        };
        return SafeValueImpl;
    }());
    var SafeHtmlImpl = /** @class */ (function (_super) {
        __extends(SafeHtmlImpl, _super);
        function SafeHtmlImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SafeHtmlImpl.prototype.getTypeName = function () { return 'HTML'; };
        return SafeHtmlImpl;
    }(SafeValueImpl));
    var SafeStyleImpl = /** @class */ (function (_super) {
        __extends(SafeStyleImpl, _super);
        function SafeStyleImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SafeStyleImpl.prototype.getTypeName = function () { return 'Style'; };
        return SafeStyleImpl;
    }(SafeValueImpl));
    var SafeScriptImpl = /** @class */ (function (_super) {
        __extends(SafeScriptImpl, _super);
        function SafeScriptImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SafeScriptImpl.prototype.getTypeName = function () { return 'Script'; };
        return SafeScriptImpl;
    }(SafeValueImpl));
    var SafeUrlImpl = /** @class */ (function (_super) {
        __extends(SafeUrlImpl, _super);
        function SafeUrlImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SafeUrlImpl.prototype.getTypeName = function () { return 'URL'; };
        return SafeUrlImpl;
    }(SafeValueImpl));
    var SafeResourceUrlImpl = /** @class */ (function (_super) {
        __extends(SafeResourceUrlImpl, _super);
        function SafeResourceUrlImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SafeResourceUrlImpl.prototype.getTypeName = function () { return 'ResourceURL'; };
        return SafeResourceUrlImpl;
    }(SafeValueImpl));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
        { provide: core.PLATFORM_ID, useValue: common.ɵPLATFORM_BROWSER_ID },
        { provide: core.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
        { provide: common.PlatformLocation, useClass: BrowserPlatformLocation, deps: [DOCUMENT$1] },
        { provide: DOCUMENT$1, useFactory: _document, deps: [] },
    ];
    /**
     * @security Replacing built-in sanitization providers exposes the application to XSS risks.
     * Attacker-controlled data introduced by an unsanitized provider could expose your
     * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
     * @experimental
     */
    var BROWSER_SANITIZATION_PROVIDERS = [
        { provide: core.Sanitizer, useExisting: DomSanitizer },
        { provide: DomSanitizer, useClass: DomSanitizerImpl, deps: [DOCUMENT$1] },
    ];
    var platformBrowser = core.createPlatformFactory(core.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
    function initDomAdapter() {
        BrowserDomAdapter.makeCurrent();
        BrowserGetTestability.init();
    }
    function errorHandler() {
        return new core.ErrorHandler();
    }
    function _document() {
        return document;
    }
    var BROWSER_MODULE_PROVIDERS = [
        BROWSER_SANITIZATION_PROVIDERS,
        { provide: core.ɵAPP_ROOT, useValue: true },
        { provide: core.ErrorHandler, useFactory: errorHandler, deps: [] },
        {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: DomEventsPlugin,
            multi: true,
            deps: [DOCUMENT$1, core.NgZone, core.PLATFORM_ID]
        },
        { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true, deps: [DOCUMENT$1] },
        {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: HammerGesturesPlugin,
            multi: true,
            deps: [DOCUMENT$1, HAMMER_GESTURE_CONFIG, core.ɵConsole, [new core.Optional(), HAMMER_LOADER]]
        },
        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig, deps: [] },
        {
            provide: DomRendererFactory2,
            useClass: DomRendererFactory2,
            deps: [EventManager, DomSharedStylesHost]
        },
        { provide: core.RendererFactory2, useExisting: DomRendererFactory2 },
        { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
        { provide: DomSharedStylesHost, useClass: DomSharedStylesHost, deps: [DOCUMENT$1] },
        { provide: core.Testability, useClass: core.Testability, deps: [core.NgZone] },
        { provide: EventManager, useClass: EventManager, deps: [EVENT_MANAGER_PLUGINS, core.NgZone] },
        ELEMENT_PROBE_PROVIDERS,
    ];
    /**
     * Exports required infrastructure for all Angular apps.
     * Included by defaults in all Angular apps created with the CLI
     * `new` command.
     * Re-exports `CommonModule` and `ApplicationModule`, making their
     * exports and providers available to all apps.
     *
     *
     */
    var BrowserModule = /** @class */ (function () {
        function BrowserModule(parentModule) {
            if (parentModule) {
                throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
            }
        }
        BrowserModule_1 = BrowserModule;
        /**
         * Configures a browser-based app to transition from a server-rendered app, if
         * one is present on the page.
         *
         * @param params An object containing an identifier for the app to transition.
         * The ID must match between the client and server versions of the app.
         * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
         *
         * @experimental
         */
        BrowserModule.withServerTransition = function (params) {
            return {
                ngModule: BrowserModule_1,
                providers: [
                    { provide: core.APP_ID, useValue: params.appId },
                    { provide: TRANSITION_ID, useExisting: core.APP_ID },
                    SERVER_TRANSITION_PROVIDERS,
                ],
            };
        };
        var BrowserModule_1;
        BrowserModule = BrowserModule_1 = __decorate([
            core.NgModule({ providers: BROWSER_MODULE_PROVIDERS, exports: [common.CommonModule, core.ApplicationModule] }),
            __param(0, core.Optional()), __param(0, core.SkipSelf()), __param(0, core.Inject(BrowserModule_1)),
            __metadata("design:paramtypes", [Object])
        ], BrowserModule);
        return BrowserModule;
    }());

    /**
     * Factory to create Meta service.
     */
    function createMeta() {
        return new Meta(core.inject(DOCUMENT$1));
    }
    /**
     * A service that can be used to get and add meta tags.
     *
     * @experimental
     */
    var Meta = /** @class */ (function () {
        function Meta(_doc) {
            this._doc = _doc;
            this._dom = getDOM();
        }
        Meta.prototype.addTag = function (tag, forceCreation) {
            if (forceCreation === void 0) { forceCreation = false; }
            if (!tag)
                return null;
            return this._getOrCreateElement(tag, forceCreation);
        };
        Meta.prototype.addTags = function (tags, forceCreation) {
            var _this = this;
            if (forceCreation === void 0) { forceCreation = false; }
            if (!tags)
                return [];
            return tags.reduce(function (result, tag) {
                if (tag) {
                    result.push(_this._getOrCreateElement(tag, forceCreation));
                }
                return result;
            }, []);
        };
        Meta.prototype.getTag = function (attrSelector) {
            if (!attrSelector)
                return null;
            return this._dom.querySelector(this._doc, "meta[" + attrSelector + "]") || null;
        };
        Meta.prototype.getTags = function (attrSelector) {
            if (!attrSelector)
                return [];
            var list /*NodeList*/ = this._dom.querySelectorAll(this._doc, "meta[" + attrSelector + "]");
            return list ? [].slice.call(list) : [];
        };
        Meta.prototype.updateTag = function (tag, selector) {
            if (!tag)
                return null;
            selector = selector || this._parseSelector(tag);
            var meta = this.getTag(selector);
            if (meta) {
                return this._setMetaElementAttributes(tag, meta);
            }
            return this._getOrCreateElement(tag, true);
        };
        Meta.prototype.removeTag = function (attrSelector) { this.removeTagElement(this.getTag(attrSelector)); };
        Meta.prototype.removeTagElement = function (meta) {
            if (meta) {
                this._dom.remove(meta);
            }
        };
        Meta.prototype._getOrCreateElement = function (meta, forceCreation) {
            if (forceCreation === void 0) { forceCreation = false; }
            if (!forceCreation) {
                var selector = this._parseSelector(meta);
                var elem = this.getTag(selector);
                // It's allowed to have multiple elements with the same name so it's not enough to
                // just check that element with the same name already present on the page. We also need to
                // check if element has tag attributes
                if (elem && this._containsAttributes(meta, elem))
                    return elem;
            }
            var element = this._dom.createElement('meta');
            this._setMetaElementAttributes(meta, element);
            var head = this._dom.getElementsByTagName(this._doc, 'head')[0];
            this._dom.appendChild(head, element);
            return element;
        };
        Meta.prototype._setMetaElementAttributes = function (tag, el) {
            var _this = this;
            Object.keys(tag).forEach(function (prop) { return _this._dom.setAttribute(el, prop, tag[prop]); });
            return el;
        };
        Meta.prototype._parseSelector = function (tag) {
            var attr = tag.name ? 'name' : 'property';
            return attr + "=\"" + tag[attr] + "\"";
        };
        Meta.prototype._containsAttributes = function (tag, elem) {
            var _this = this;
            return Object.keys(tag).every(function (key) { return _this._dom.getAttribute(elem, key) === tag[key]; });
        };
        Meta.ngInjectableDef = core.defineInjectable({ factory: createMeta, token: Meta, providedIn: "root" });
        Meta = __decorate([
            core.Injectable({ providedIn: 'root', useFactory: createMeta, deps: [] }),
            __param(0, core.Inject(DOCUMENT$1)),
            __metadata("design:paramtypes", [Object])
        ], Meta);
        return Meta;
    }());

    /**
     * Factory to create Title service.
     */
    function createTitle() {
        return new Title(core.inject(DOCUMENT$1));
    }
    /**
     * A service that can be used to get and set the title of a current HTML document.
     *
     * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
     * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
     * (representing the `<title>` tag). Instead, this service can be used to set and get the current
     * title value.
     *
     * @experimental
     */
    var Title = /** @class */ (function () {
        function Title(_doc) {
            this._doc = _doc;
        }
        /**
         * Get the title of the current HTML document.
         */
        Title.prototype.getTitle = function () { return getDOM().getTitle(this._doc); };
        /**
         * Set the title of the current HTML document.
         * @param newTitle
         */
        Title.prototype.setTitle = function (newTitle) { getDOM().setTitle(this._doc, newTitle); };
        Title.ngInjectableDef = core.defineInjectable({ factory: createTitle, token: Title, providedIn: "root" });
        Title = __decorate([
            core.Injectable({ providedIn: 'root', useFactory: createTitle, deps: [] }),
            __param(0, core.Inject(DOCUMENT$1)),
            __metadata("design:paramtypes", [Object])
        ], Title);
        return Title;
    }());
    function unescapeHtml(text) {
        var unescapedText = {
            '&a;': '&',
            '&q;': '"',
            '&s;': '\'',
            '&l;': '<',
            '&g;': '>',
        };
        return text.replace(/&[^;]+;/g, function (s) { return unescapedText[s]; });
    }
    /**
     * A key value store that is transferred from the application on the server side to the application
     * on the client side.
     *
     * `TransferState` will be available as an injectable token. To use it import
     * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
     *
     * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
     * boolean, number, string, null and non-class objects will be serialized and deserialzied in a
     * non-lossy manner.
     *
     * @experimental
     */
    var TransferState = /** @class */ (function () {
        function TransferState() {
            this.store = {};
            this.onSerializeCallbacks = {};
        }
        TransferState_1 = TransferState;
        /** @internal */
        TransferState.init = function (initState) {
            var transferState = new TransferState_1();
            transferState.store = initState;
            return transferState;
        };
        /**
         * Get the value corresponding to a key. Return `defaultValue` if key is not found.
         */
        TransferState.prototype.get = function (key, defaultValue) {
            return this.store[key] !== undefined ? this.store[key] : defaultValue;
        };
        /**
         * Set the value corresponding to a key.
         */
        TransferState.prototype.set = function (key, value) { this.store[key] = value; };
        /**
         * Remove a key from the store.
         */
        TransferState.prototype.remove = function (key) { delete this.store[key]; };
        /**
         * Test whether a key exists in the store.
         */
        TransferState.prototype.hasKey = function (key) { return this.store.hasOwnProperty(key); };
        /**
         * Register a callback to provide the value for a key when `toJson` is called.
         */
        TransferState.prototype.onSerialize = function (key, callback) {
            this.onSerializeCallbacks[key] = callback;
        };
        /**
         * Serialize the current state of the store to JSON.
         */
        TransferState.prototype.toJson = function () {
            // Call the onSerialize callbacks and put those values into the store.
            for (var key in this.onSerializeCallbacks) {
                if (this.onSerializeCallbacks.hasOwnProperty(key)) {
                    try {
                        this.store[key] = this.onSerializeCallbacks[key]();
                    }
                    catch (e) {
                        console.warn('Exception in onSerialize callback: ', e);
                    }
                }
            }
            return JSON.stringify(this.store);
        };
        var TransferState_1;
        TransferState = TransferState_1 = __decorate([
            core.Injectable()
        ], TransferState);
        return TransferState;
    }());
    function initTransferState(doc, appId) {
        // Locate the script tag with the JSON data transferred from the server.
        // The id of the script tag is set to the Angular appId + 'state'.
        var script = doc.getElementById(appId + '-state');
        var initialState = {};
        if (script && script.textContent) {
            try {
                initialState = JSON.parse(unescapeHtml(script.textContent));
            }
            catch (e) {
                console.warn('Exception while restoring TransferState for app ' + appId, e);
            }
        }
        return TransferState.init(initialState);
    }
    /**
     * NgModule to install on the client side while using the `TransferState` to transfer state from
     * server to client.
     *
     * @experimental
     */
    var BrowserTransferStateModule = /** @class */ (function () {
        function BrowserTransferStateModule() {
        }
        BrowserTransferStateModule = __decorate([
            core.NgModule({
                providers: [{ provide: TransferState, useFactory: initTransferState, deps: [DOCUMENT$1, core.APP_ID] }],
            })
        ], BrowserTransferStateModule);
        return BrowserTransferStateModule;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var VERSION = new core.Version('7.0.0');

    /**
     * @license Angular v7.0.0
     * (c) 2010-2018 Google, Inc. https://angular.io/
     * License: MIT
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     * Base class for control directives.
     *
     * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
     *
     */
    var AbstractControlDirective = /** @class */ (function () {
        function AbstractControlDirective() {
        }
        Object.defineProperty(AbstractControlDirective.prototype, "value", {
            /**
             * @description
             * Reports the value of the control if it is present, otherwise null.
             */
            get: function () { return this.control ? this.control.value : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
            /**
             * @description
             * Reports whether the control is valid. A control is considered valid if no
             * validation errors exist with the current value.
             * If the control is not present, null is returned.
             */
            get: function () { return this.control ? this.control.valid : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
            /**
             * @description
             * Reports whether the control is invalid, meaning that an error exists in the input value.
             * If the control is not present, null is returned.
             */
            get: function () { return this.control ? this.control.invalid : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
            /**
             * @description
             * Reports whether a control is pending, meaning that that async validation is occurring and
             * errors are not yet available for the input value. If the control is not present, null is
             * returned.
             */
            get: function () { return this.control ? this.control.pending : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
            /**
             * @description
             * Reports whether the control is disabled, meaning that the control is disabled
             * in the UI and is exempt from validation checks and excluded from aggregate
             * values of ancestor controls. If the control is not present, null is returned.
             */
            get: function () { return this.control ? this.control.disabled : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
            /**
             * @description
             * Reports whether the control is enabled, meaning that the control is included in ancestor
             * calculations of validity or value. If the control is not present, null is returned.
             */
            get: function () { return this.control ? this.control.enabled : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
            /**
             * @description
             * Reports the control's validation errors. If the control is not present, null is returned.
             */
            get: function () { return this.control ? this.control.errors : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
            /**
             * @description
             * Reports whether the control is pristine, meaning that the user has not yet changed
             * the value in the UI. If the control is not present, null is returned.
             */
            get: function () { return this.control ? this.control.pristine : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
            /**
             * @description
             * Reports whether the control is dirty, meaning that the user has changed
             * the value in the UI. If the control is not present, null is returned.
             */
            get: function () { return this.control ? this.control.dirty : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
            /**
             * @description
             * Reports whether the control is touched, meaning that the user has triggered
             * a `blur` event on it. If the control is not present, null is returned.
             */
            get: function () { return this.control ? this.control.touched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "status", {
            /**
             * @description
             * Reports the validation status of the control. Possible values include:
             * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
             * If the control is not present, null is returned.
             */
            get: function () { return this.control ? this.control.status : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
            /**
             * @description
             * Reports whether the control is untouched, meaning that the user has not yet triggered
             * a `blur` event on it. If the control is not present, null is returned.
             */
            get: function () { return this.control ? this.control.untouched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
            /**
             * @description
             * Returns a multicasting observable that emits a validation status whenever it is
             * calculated for the control. If the control is not present, null is returned.
             */
            get: function () {
                return this.control ? this.control.statusChanges : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
            /**
             * @description
             * Returns a multicasting observable of value changes for the control that emits every time the
             * value of the control changes in the UI or programmatically.
             * If the control is not present, null is returned.
             */
            get: function () {
                return this.control ? this.control.valueChanges : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "path", {
            /**
             * @description
             * Returns an array that represents the path from the top-level form to this control.
             * Each index is the string name of the control on that level.
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        /**
         * @description
         * Resets the control with the provided value if the control is present.
         */
        AbstractControlDirective.prototype.reset = function (value) {
            if (value === void 0) { value = undefined; }
            if (this.control)
                this.control.reset(value);
        };
        /**
         * @description
         * Reports whether the control with the given path has the error specified.
         * If no path is given, it checks for the error on the present control.
         * If the control is not present, false is returned.
         */
        AbstractControlDirective.prototype.hasError = function (errorCode, path) {
            return this.control ? this.control.hasError(errorCode, path) : false;
        };
        /**
         * @description
         * Reports error data for the control with the given path.
         * If the control is not present, null is returned.
         */
        AbstractControlDirective.prototype.getError = function (errorCode, path) {
            return this.control ? this.control.getError(errorCode, path) : null;
        };
        return AbstractControlDirective;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     * A base class for directives that contain multiple registered instances of `NgControl`.
     * Only used by the forms module.
     */
    var ControlContainer = /** @class */ (function (_super) {
        __extends(ControlContainer, _super);
        function ControlContainer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ControlContainer.prototype, "formDirective", {
            /**
             * @description
             * The top-level form directive for the control.
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlContainer.prototype, "path", {
            /**
             * @description
             * The path to this group.
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        return ControlContainer;
    }(AbstractControlDirective));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function isEmptyInputValue(value) {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
    }
    /**
     * @description
     * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
     *
     * @see `NG_ASYNC_VALIDATORS`
     *
     * @usageNotes
     *
     * ### Providing a custom validator
     *
     * The following example registers a custom validator directive. Adding the validator to the
     * existing collection of validators requires the `multi: true` option.
     *
     * ```typescript
     * @Directive({
     *   selector: '[customValidator]',
     *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
     * })
     * class CustomValidatorDirective implements Validator {
     *   validate(control: AbstractControl): ValidationErrors | null {
     *     return { 'custom': true };
     *   }
     * }
     * ```
     *
     */
    var NG_VALIDATORS = new core.InjectionToken('NgValidators');
    /**
     * @description
     * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
     *
     * @see `NG_VALIDATORS`
     *
     */
    var NG_ASYNC_VALIDATORS = new core.InjectionToken('NgAsyncValidators');
    var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    /**
     * @description
     * Provides a set of built-in validators that can be used by form controls.
     *
     * A validator is a function that processes a `FormControl` or collection of
     * controls and returns an error map or null. A null map means that validation has passed.
     *
     * @see [Form Validation](/guide/form-validation)
     *
     */
    var Validators = /** @class */ (function () {
        function Validators() {
        }
        /**
         * @description
         * Validator that requires the control's value to be greater than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * @usageNotes
         *
         * ### Validate against a minimum of 3
         *
         * ```typescript
         * const control = new FormControl(2, Validators.min(3));
         *
         * console.log(control.errors); // {min: {min: 3, actual: 2}}
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `min` property if the validation check fails, otherwise `null`.
         *
         */
        Validators.min = function (min$$1) {
            return function (control) {
                if (isEmptyInputValue(control.value) || isEmptyInputValue(min$$1)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var value = parseFloat(control.value);
                // Controls with NaN values after parsing should be treated as not having a
                // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
                return !isNaN(value) && value < min$$1 ? { 'min': { 'min': min$$1, 'actual': control.value } } : null;
            };
        };
        /**
         * @description
         * Validator that requires the control's value to be less than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * @usageNotes
         *
         * ### Validate against a maximum of 15
         *
         * ```typescript
         * const control = new FormControl(16, Validators.max(15));
         *
         * console.log(control.errors); // {max: {max: 15, actual: 16}}
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `max` property if the validation check fails, otherwise `null`.
         *
         */
        Validators.max = function (max$$1) {
            return function (control) {
                if (isEmptyInputValue(control.value) || isEmptyInputValue(max$$1)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var value = parseFloat(control.value);
                // Controls with NaN values after parsing should be treated as not having a
                // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
                return !isNaN(value) && value > max$$1 ? { 'max': { 'max': max$$1, 'actual': control.value } } : null;
            };
        };
        /**
         * @description
         * Validator that requires the control have a non-empty value.
         *
         * @usageNotes
         *
         * ### Validate that the field is non-empty
         *
         * ```typescript
         * const control = new FormControl('', Validators.required);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @returns An error map with the `required` property
         * if the validation check fails, otherwise `null`.
         *
         */
        Validators.required = function (control) {
            return isEmptyInputValue(control.value) ? { 'required': true } : null;
        };
        /**
         * @description
         * Validator that requires the control's value be true. This validator is commonly
         * used for required checkboxes.
         *
         * @usageNotes
         *
         * ### Validate that the field value is true
         *
         * ```typescript
         * const control = new FormControl('', Validators.requiredTrue);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @returns An error map that contains the `required` property
         * set to `true` if the validation check fails, otherwise `null`.
         */
        Validators.requiredTrue = function (control) {
            return control.value === true ? null : { 'required': true };
        };
        /**
         * @description
         * Validator that requires the control's value pass an email validation test.
         *
         * @usageNotes
         *
         * ### Validate that the field matches a valid email pattern
         *
         * ```typescript
         * const control = new FormControl('bad@', Validators.email);
         *
         * console.log(control.errors); // {email: true}
         * ```
         *
         * @returns An error map with the `email` property
         * if the validation check fails, otherwise `null`.
         *
         */
        Validators.email = function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
        };
        /**
         * @description
         * Validator that requires the length of the control's value to be greater than or equal
         * to the provided minimum length. This validator is also provided by default if you use the
         * the HTML5 `minlength` attribute.
         *
         * @usageNotes
         *
         * ### Validate that the field has a minimum of 3 characters
         *
         * ```typescript
         * const control = new FormControl('ng', Validators.minLength(3));
         *
         * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
         * ```
         *
         * ```html
         * <input minlength="5">
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `minlength` if the validation check fails, otherwise `null`.
         */
        Validators.minLength = function (minLength) {
            return function (control) {
                if (isEmptyInputValue(control.value)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var length = control.value ? control.value.length : 0;
                return length < minLength ?
                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                    null;
            };
        };
        /**
         * @description
         * Validator that requires the length of the control's value to be less than or equal
         * to the provided maximum length. This validator is also provided by default if you use the
         * the HTML5 `maxlength` attribute.
         *
         * @usageNotes
         *
         * ### Validate that the field has maximum of 5 characters
         *
         * ```typescript
         * const control = new FormControl('Angular', Validators.maxLength(5));
         *
         * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
         * ```
         *
         * ```html
         * <input maxlength="5">
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `maxlength` property if the validation check fails, otherwise `null`.
         */
        Validators.maxLength = function (maxLength) {
            return function (control) {
                var length = control.value ? control.value.length : 0;
                return length > maxLength ?
                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                    null;
            };
        };
        /**
         * @description
         * Validator that requires the control's value to match a regex pattern. This validator is also
         * provided
         * by default if you use the HTML5 `pattern` attribute.
         *
         * @usageNotes
         *
         * ### Validate that the field only contains letters or spaces
         *
         * ```typescript
         * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
         *
         * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
         * ```
         *
         * ```html
         * <input pattern="[a-zA-Z ]*">
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `pattern` property if the validation check fails, otherwise `null`.
         */
        Validators.pattern = function (pattern) {
            if (!pattern)
                return Validators.nullValidator;
            var regex;
            var regexStr;
            if (typeof pattern === 'string') {
                regexStr = '';
                if (pattern.charAt(0) !== '^')
                    regexStr += '^';
                regexStr += pattern;
                if (pattern.charAt(pattern.length - 1) !== '$')
                    regexStr += '$';
                regex = new RegExp(regexStr);
            }
            else {
                regexStr = pattern.toString();
                regex = pattern;
            }
            return function (control) {
                if (isEmptyInputValue(control.value)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var value = control.value;
                return regex.test(value) ? null :
                    { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
            };
        };
        /**
         * @description
         * Validator that performs no operation.
         */
        Validators.nullValidator = function (control) { return null; };
        Validators.compose = function (validators) {
            if (!validators)
                return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                return _mergeErrors(_executeValidators(control, presentValidators));
            };
        };
        /**
         * @description
         * Compose multiple async validators into a single function that returns the union
         * of the individual error objects for the provided control.
         *
         * @returns A validator function that returns an error map with the
         * merged error objects of the async validators if the validation check fails, otherwise `null`.
        */
        Validators.composeAsync = function (validators) {
            if (!validators)
                return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
                return forkJoin(observables).pipe(map(_mergeErrors));
            };
        };
        return Validators;
    }());
    function isPresent(o) {
        return o != null;
    }
    function toObservable(r) {
        var obs = core.ɵisPromise(r) ? from(r) : r;
        if (!(core.ɵisObservable(obs))) {
            throw new Error("Expected validator to return Promise or Observable.");
        }
        return obs;
    }
    function _executeValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    function _executeAsyncValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    function _mergeErrors(arrayOfErrors) {
        var res = arrayOfErrors.reduce(function (res, errors) {
            return errors != null ? __assign({}, res, errors) : res;
        }, {});
        return Object.keys(res).length === 0 ? null : res;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Used to provide a `ControlValueAccessor` for form controls.
     *
     * See `DefaultValueAccessor` for how to implement one.
     *
     */
    var NG_VALUE_ACCESSOR = new core.InjectionToken('NgValueAccessor');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CHECKBOX_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return CheckboxControlValueAccessor; }),
        multi: true,
    };
    /**
     * The accessor for writing a value and listening to changes on a checkbox input element.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * <input type="checkbox" name="rememberLogin" ngModel>
     * ```
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var CheckboxControlValueAccessor = /** @class */ (function () {
        function CheckboxControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
        };
        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        CheckboxControlValueAccessor = __decorate([
            core.Directive({
                selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                providers: [CHECKBOX_VALUE_ACCESSOR]
            }),
            __metadata("design:paramtypes", [core.Renderer2, core.ElementRef])
        ], CheckboxControlValueAccessor);
        return CheckboxControlValueAccessor;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DEFAULT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return DefaultValueAccessor; }),
        multi: true
    };
    /**
     * We must check whether the agent is Android because composition events
     * behave differently between iOS and Android.
     */
    function _isAndroid() {
        var userAgent = getDOM() ? getDOM().getUserAgent() : '';
        return /android (\d+)/.test(userAgent.toLowerCase());
    }
    /**
     * Turn this mode on if you want form directives to buffer IME input until compositionend
     * @experimental
     */
    var COMPOSITION_BUFFER_MODE = new core.InjectionToken('CompositionEventMode');
    /**
     * The default accessor for writing a value and listening to changes that is used by the
     * `NgModel`, `FormControlDirective`, and `FormControlName` directives.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * <input type="text" name="searchQuery" ngModel>
     * ```
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var DefaultValueAccessor = /** @class */ (function () {
        function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._compositionMode = _compositionMode;
            this.onChange = function (_) { };
            this.onTouched = function () { };
            /** Whether the user is creating a composition string (IME events). */
            this._composing = false;
            if (this._compositionMode == null) {
                this._compositionMode = !_isAndroid();
            }
        }
        DefaultValueAccessor.prototype.writeValue = function (value) {
            var normalizedValue = value == null ? '' : value;
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        };
        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /** @internal */
        DefaultValueAccessor.prototype._handleInput = function (value) {
            if (!this._compositionMode || (this._compositionMode && !this._composing)) {
                this.onChange(value);
            }
        };
        /** @internal */
        DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
        /** @internal */
        DefaultValueAccessor.prototype._compositionEnd = function (value) {
            this._composing = false;
            this._compositionMode && this.onChange(value);
        };
        DefaultValueAccessor = __decorate([
            core.Directive({
                selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                // TODO: vsavkin replace the above selector with the one below it once
                // https://github.com/angular/angular/issues/3011 is implemented
                // selector: '[ngModel],[formControl],[formControlName]',
                host: {
                    '(input)': '$any(this)._handleInput($event.target.value)',
                    '(blur)': 'onTouched()',
                    '(compositionstart)': '$any(this)._compositionStart()',
                    '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
                },
                providers: [DEFAULT_VALUE_ACCESSOR]
            }),
            __param(2, core.Optional()), __param(2, core.Inject(COMPOSITION_BUFFER_MODE)),
            __metadata("design:paramtypes", [core.Renderer2, core.ElementRef, Boolean])
        ], DefaultValueAccessor);
        return DefaultValueAccessor;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function normalizeValidator(validator) {
        if (validator.validate) {
            return function (c) { return validator.validate(c); };
        }
        else {
            return validator;
        }
    }
    function normalizeAsyncValidator(validator) {
        if (validator.validate) {
            return function (c) { return validator.validate(c); };
        }
        else {
            return validator;
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NUMBER_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return NumberValueAccessor; }),
        multi: true
    };
    /**
     * The accessor for writing a number value and listening to changes that is used by the
     * `NgModel`, `FormControlDirective`, and `FormControlName` directives.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * <input type="number" [(ngModel)]="age">
     * ```
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var NumberValueAccessor = /** @class */ (function () {
        function NumberValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        NumberValueAccessor.prototype.writeValue = function (value) {
            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
            var normalizedValue = value == null ? '' : value;
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        };
        NumberValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
        };
        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        NumberValueAccessor = __decorate([
            core.Directive({
                selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [NUMBER_VALUE_ACCESSOR]
            }),
            __metadata("design:paramtypes", [core.Renderer2, core.ElementRef])
        ], NumberValueAccessor);
        return NumberValueAccessor;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function unimplemented() {
        throw new Error('unimplemented');
    }
    /**
     * @description
     * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
     * object to a DOM element.
     */
    var NgControl = /** @class */ (function (_super) {
        __extends(NgControl, _super);
        function NgControl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @description
             * The parent form for the control.
             *
             * @internal
             */
            _this._parent = null;
            /**
             * @description
             * The name for the control
             */
            _this.name = null;
            /**
             * @description
             * The value accessor for the control
             */
            _this.valueAccessor = null;
            /**
             * @description
             * The uncomposed array of synchronous validators for the control
             *
             * @internal
             */
            _this._rawValidators = [];
            /**
             * @description
             * The uncomposed array of async validators for the control
             *
             * @internal
             */
            _this._rawAsyncValidators = [];
            return _this;
        }
        Object.defineProperty(NgControl.prototype, "validator", {
            /**
             * @description
             * The registered synchronous validator function for the control
             *
             * @throws An exception that this method is not implemented
             */
            get: function () { return unimplemented(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgControl.prototype, "asyncValidator", {
            /**
             * @description
             * The registered async validator function for the control
             *
             * @throws An exception that this method is not implemented
             */
            get: function () { return unimplemented(); },
            enumerable: true,
            configurable: true
        });
        return NgControl;
    }(AbstractControlDirective));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var RADIO_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return RadioControlValueAccessor; }),
        multi: true
    };
    /**
     * Internal class used by Angular to uncheck radio buttons with the matching name.
     */
    var RadioControlRegistry = /** @class */ (function () {
        function RadioControlRegistry() {
            this._accessors = [];
        }
        RadioControlRegistry.prototype.add = function (control, accessor) {
            this._accessors.push([control, accessor]);
        };
        RadioControlRegistry.prototype.remove = function (accessor) {
            for (var i = this._accessors.length - 1; i >= 0; --i) {
                if (this._accessors[i][1] === accessor) {
                    this._accessors.splice(i, 1);
                    return;
                }
            }
        };
        RadioControlRegistry.prototype.select = function (accessor) {
            var _this = this;
            this._accessors.forEach(function (c) {
                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                    c[1].fireUncheck(accessor.value);
                }
            });
        };
        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
            if (!controlPair[0].control)
                return false;
            return controlPair[0]._parent === accessor._control._parent &&
                controlPair[1].name === accessor.name;
        };
        RadioControlRegistry = __decorate([
            core.Injectable()
        ], RadioControlRegistry);
        return RadioControlRegistry;
    }());
    /**
     * @description
     *
     * Writes radio control values and listens to radio control changes.
     *
     * Used by `NgModel`, `FormControlDirective`, and `FormControlName`
     * to keep the view synced with the `FormControl` model.
     *
     * If you have imported the `FormsModule` or the `ReactiveFormsModule`, this
     * value accessor will be active on any radio control that has a form directive. You do
     * **not** need to add a special selector to activate it.
     *
     * @usageNotes
     * ### How to use radio buttons with form directives
     *
     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
     * in the same group have the same `name` attribute.  Radio buttons with different `name`
     * attributes do not affect each other.
     *
     * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
     *
     * When using radio buttons in a reactive form, radio buttons in the same group should have the
     * same `formControlName`. You can also add a `name` attribute, but it's optional.
     *
     * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var RadioControlValueAccessor = /** @class */ (function () {
        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._registry = _registry;
            this._injector = _injector;
            this.onChange = function () { };
            this.onTouched = function () { };
        }
        RadioControlValueAccessor.prototype.ngOnInit = function () {
            this._control = this._injector.get(NgControl);
            this._checkName();
            this._registry.add(this._control, this);
        };
        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
        RadioControlValueAccessor.prototype.writeValue = function (value) {
            this._state = value === this.value;
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
        };
        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this._fn = fn;
            this.onChange = function () {
                fn(_this.value);
                _this._registry.select(_this);
            };
        };
        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        RadioControlValueAccessor.prototype._checkName = function () {
            if (this.name && this.formControlName && this.name !== this.formControlName) {
                this._throwNameError();
            }
            if (!this.name && this.formControlName)
                this.name = this.formControlName;
        };
        RadioControlValueAccessor.prototype._throwNameError = function () {
            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], RadioControlValueAccessor.prototype, "name", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], RadioControlValueAccessor.prototype, "formControlName", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], RadioControlValueAccessor.prototype, "value", void 0);
        RadioControlValueAccessor = __decorate([
            core.Directive({
                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                providers: [RADIO_VALUE_ACCESSOR]
            }),
            __metadata("design:paramtypes", [core.Renderer2, core.ElementRef,
                RadioControlRegistry, core.Injector])
        ], RadioControlValueAccessor);
        return RadioControlValueAccessor;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var RANGE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return RangeValueAccessor; }),
        multi: true
    };
    /**
     * The accessor for writing a range value and listening to changes that is used by the
     * `NgModel`, `FormControlDirective`, and `FormControlName` directives.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * <input type="range" [(ngModel)]="age" >
     * ```
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var RangeValueAccessor = /** @class */ (function () {
        function RangeValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        RangeValueAccessor.prototype.writeValue = function (value) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
        };
        RangeValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
        };
        RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        RangeValueAccessor = __decorate([
            core.Directive({
                selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [RANGE_VALUE_ACCESSOR]
            }),
            __metadata("design:paramtypes", [core.Renderer2, core.ElementRef])
        ], RangeValueAccessor);
        return RangeValueAccessor;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var FormErrorExamples = {
        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
    };

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ReactiveErrors = /** @class */ (function () {
        function ReactiveErrors() {
        }
        ReactiveErrors.controlParentException = function () {
            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
        };
        ReactiveErrors.ngModelGroupException = function () {
            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
        };
        ReactiveErrors.missingFormException = function () {
            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
        };
        ReactiveErrors.groupParentException = function () {
            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
        };
        ReactiveErrors.arrayParentException = function () {
            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
        };
        ReactiveErrors.disabledAttrWarning = function () {
            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
        };
        ReactiveErrors.ngModelWarning = function (directiveName) {
            console.warn("\n    It looks like you're using ngModel on the same form field as " + directiveName + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + (directiveName === 'formControl' ? 'FormControlDirective'
                : 'FormControlName') + "#use-with-ngmodel\n    ");
        };
        return ReactiveErrors;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SELECT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return SelectControlValueAccessor; }),
        multi: true
    };
    function _buildValueString(id, value) {
        if (id == null)
            return "" + value;
        if (value && typeof value === 'object')
            value = 'Object';
        return (id + ": " + value).slice(0, 50);
    }
    function _extractId(valueString) {
        return valueString.split(':')[0];
    }
    /**
     * @description
     *
     * Writes values and listens to changes on a select element.
     *
     * Used by `NgModel`, `FormControlDirective`, and `FormControlName`
     * to keep the view synced with the `FormControl` model.
     *
     * If you have imported the `FormsModule` or the `ReactiveFormsModule`, this
     * value accessor will be active on any select control that has a form directive. You do
     * **not** need to add a special selector to activate it.
     *
     * @usageNotes
     * ### How to use select controls with form directives
     *
     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
     * attribute to the main `<select>` tag.
     *
     * If your option values are simple strings, you can bind to the normal `value` property
     * on the option.  If your option values happen to be objects (and you'd like to save the
     * selection in your form as an object), use `ngValue` instead:
     *
     * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
     *
     * In reactive forms, you'll also want to add your form directive (`formControlName` or
     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
     * choice of binding to the  `value` or `ngValue` property on the select's options.
     *
     * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
     *
     * ### Caveat: Option selection
     *
     * Angular uses object identity to select option. It's possible for the identities of items
     * to change while the data does not. This can happen, for example, if the items are produced
     * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
     * second response will produce objects with different identities.
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
     * If `compareWith` is given, Angular selects option by the return value of the function.
     *
     * ### Syntax
     *
     * ```
     * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
     *     <option *ngFor="let country of countries" [ngValue]="country">
     *         {{country.name}}
     *     </option>
     * </select>
     *
     * compareFn(c1: Country, c2: Country): boolean {
     *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
     * }
     * ```
     *
     * Note: We listen to the 'change' event because 'input' events aren't fired
     * for selects in Firefox and IE:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var SelectControlValueAccessor = /** @class */ (function () {
        function SelectControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /** @internal */
            this._optionMap = new Map();
            /** @internal */
            this._idCounter = 0;
            this.onChange = function (_) { };
            this.onTouched = function () { };
            this._compareWith = core.ɵlooseIdentical;
        }
        Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
            set: function (fn) {
                if (typeof fn !== 'function') {
                    throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                }
                this._compareWith = fn;
            },
            enumerable: true,
            configurable: true
        });
        SelectControlValueAccessor.prototype.writeValue = function (value) {
            this.value = value;
            var id = this._getOptionId(value);
            if (id == null) {
                this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            }
            var valueString = _buildValueString(id, value);
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
        };
        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this.onChange = function (valueString) {
                _this.value = _this._getOptionValue(valueString);
                fn(_this.value);
            };
        };
        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /** @internal */
        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
        /** @internal */
        SelectControlValueAccessor.prototype._getOptionId = function (value) {
            var e_1, _a;
            try {
                for (var _b = __values(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var id = _c.value;
                    if (this._compareWith(this._optionMap.get(id), value))
                        return id;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        };
        /** @internal */
        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
            var id = _extractId(valueString);
            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Function])
        ], SelectControlValueAccessor.prototype, "compareWith", null);
        SelectControlValueAccessor = __decorate([
            core.Directive({
                selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                providers: [SELECT_VALUE_ACCESSOR]
            }),
            __metadata("design:paramtypes", [core.Renderer2, core.ElementRef])
        ], SelectControlValueAccessor);
        return SelectControlValueAccessor;
    }());
    /**
     * @description
     *
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * See docs for `SelectControlValueAccessor` for usage examples.
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var NgSelectOption = /** @class */ (function () {
        function NgSelectOption(_element, _renderer, _select) {
            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (this._select)
                this.id = this._select._registerOption();
        }
        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
            set: function (value) {
                if (this._select == null)
                    return;
                this._select._optionMap.set(this.id, value);
                this._setElementValue(_buildValueString(this.id, value));
                this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectOption.prototype, "value", {
            set: function (value) {
                this._setElementValue(value);
                if (this._select)
                    this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        NgSelectOption.prototype._setElementValue = function (value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
        };
        NgSelectOption.prototype.ngOnDestroy = function () {
            if (this._select) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        };
        __decorate([
            core.Input('ngValue'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgSelectOption.prototype, "ngValue", null);
        __decorate([
            core.Input('value'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgSelectOption.prototype, "value", null);
        NgSelectOption = __decorate([
            core.Directive({ selector: 'option' }),
            __param(2, core.Optional()), __param(2, core.Host()),
            __metadata("design:paramtypes", [core.ElementRef, core.Renderer2,
                SelectControlValueAccessor])
        ], NgSelectOption);
        return NgSelectOption;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
        multi: true
    };
    function _buildValueString$1(id, value) {
        if (id == null)
            return "" + value;
        if (typeof value === 'string')
            value = "'" + value + "'";
        if (value && typeof value === 'object')
            value = 'Object';
        return (id + ": " + value).slice(0, 50);
    }
    function _extractId$1(valueString) {
        return valueString.split(':')[0];
    }
    /**
     * The accessor for writing a value and listening to changes on a select element.
     *
     * @usageNotes
     * ### Caveat: Options selection
     *
     * Angular uses object identity to select options. It's possible for the identities of items
     * to change while the data does not. This can happen, for example, if the items are produced
     * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
     * second response will produce objects with different identities.
     *
     * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
     * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
     * If `compareWith` is given, Angular selects options by the return value of the function.
     *
     * ### Syntax
     *
     * ```
     * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
     *     <option *ngFor="let country of countries" [ngValue]="country">
     *         {{country.name}}
     *     </option>
     * </select>
     *
     * compareFn(c1: Country, c2: Country): boolean {
     *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
     * }
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     */
    var SelectMultipleControlValueAccessor = /** @class */ (function () {
        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /** @internal */
            this._optionMap = new Map();
            /** @internal */
            this._idCounter = 0;
            this.onChange = function (_) { };
            this.onTouched = function () { };
            this._compareWith = core.ɵlooseIdentical;
        }
        Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
            set: function (fn) {
                if (typeof fn !== 'function') {
                    throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                }
                this._compareWith = fn;
            },
            enumerable: true,
            configurable: true
        });
        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
            var _this = this;
            this.value = value;
            var optionSelectedStateSetter;
            if (Array.isArray(value)) {
                // convert values to ids
                var ids_1 = value.map(function (v) { return _this._getOptionId(v); });
                optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
            }
            else {
                optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
            }
            this._optionMap.forEach(optionSelectedStateSetter);
        };
        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this.onChange = function (_) {
                var selected = [];
                if (_.hasOwnProperty('selectedOptions')) {
                    var options = _.selectedOptions;
                    for (var i = 0; i < options.length; i++) {
                        var opt = options.item(i);
                        var val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
                // Degrade on IE
                else {
                    var options = _.options;
                    for (var i = 0; i < options.length; i++) {
                        var opt = options.item(i);
                        if (opt.selected) {
                            var val = _this._getOptionValue(opt.value);
                            selected.push(val);
                        }
                    }
                }
                _this.value = selected;
                fn(selected);
            };
        };
        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /** @internal */
        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
            var id = (this._idCounter++).toString();
            this._optionMap.set(id, value);
            return id;
        };
        /** @internal */
        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
            var e_1, _a;
            try {
                for (var _b = __values(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var id = _c.value;
                    if (this._compareWith(this._optionMap.get(id)._value, value))
                        return id;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        };
        /** @internal */
        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
            var id = _extractId$1(valueString);
            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Function])
        ], SelectMultipleControlValueAccessor.prototype, "compareWith", null);
        SelectMultipleControlValueAccessor = __decorate([
            core.Directive({
                selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
            }),
            __metadata("design:paramtypes", [core.Renderer2, core.ElementRef])
        ], SelectMultipleControlValueAccessor);
        return SelectMultipleControlValueAccessor;
    }());
    /**
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * <select multiple name="city" ngModel>
     *   <option *ngFor="let c of cities" [value]="c"></option>
     * </select>
     * ```
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var NgSelectMultipleOption = /** @class */ (function () {
        function NgSelectMultipleOption(_element, _renderer, _select) {
            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (this._select) {
                this.id = this._select._registerOption(this);
            }
        }
        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
            set: function (value) {
                if (this._select == null)
                    return;
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
            set: function (value) {
                if (this._select) {
                    this._value = value;
                    this._setElementValue(_buildValueString$1(this.id, value));
                    this._select.writeValue(this._select.value);
                }
                else {
                    this._setElementValue(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        NgSelectMultipleOption.prototype._setElementValue = function (value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
        };
        /** @internal */
        NgSelectMultipleOption.prototype._setSelected = function (selected) {
            this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
        };
        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
            if (this._select) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        };
        __decorate([
            core.Input('ngValue'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgSelectMultipleOption.prototype, "ngValue", null);
        __decorate([
            core.Input('value'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgSelectMultipleOption.prototype, "value", null);
        NgSelectMultipleOption = __decorate([
            core.Directive({ selector: 'option' }),
            __param(2, core.Optional()), __param(2, core.Host()),
            __metadata("design:paramtypes", [core.ElementRef, core.Renderer2,
                SelectMultipleControlValueAccessor])
        ], NgSelectMultipleOption);
        return NgSelectMultipleOption;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function controlPath(name, parent) {
        return __spread(parent.path, [name]);
    }
    function setUpControl(control, dir) {
        if (!control)
            _throwError(dir, 'Cannot find control with');
        if (!dir.valueAccessor)
            _throwError(dir, 'No value accessor for form control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
        dir.valueAccessor.writeValue(control.value);
        setUpViewChangePipeline(control, dir);
        setUpModelChangePipeline(control, dir);
        setUpBlurPipeline(control, dir);
        if (dir.valueAccessor.setDisabledState) {
            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
        }
        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
        dir._rawValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange)
                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
        });
        dir._rawAsyncValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange)
                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
        });
    }
    function cleanUpControl(control, dir) {
        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
        dir._rawValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) {
                validator.registerOnValidatorChange(null);
            }
        });
        dir._rawAsyncValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) {
                validator.registerOnValidatorChange(null);
            }
        });
        if (control)
            control._clearChangeFns();
    }
    function setUpViewChangePipeline(control, dir) {
        dir.valueAccessor.registerOnChange(function (newValue) {
            control._pendingValue = newValue;
            control._pendingChange = true;
            control._pendingDirty = true;
            if (control.updateOn === 'change')
                updateControl(control, dir);
        });
    }
    function setUpBlurPipeline(control, dir) {
        dir.valueAccessor.registerOnTouched(function () {
            control._pendingTouched = true;
            if (control.updateOn === 'blur' && control._pendingChange)
                updateControl(control, dir);
            if (control.updateOn !== 'submit')
                control.markAsTouched();
        });
    }
    function updateControl(control, dir) {
        if (control._pendingDirty)
            control.markAsDirty();
        control.setValue(control._pendingValue, { emitModelToViewChange: false });
        dir.viewToModelUpdate(control._pendingValue);
        control._pendingChange = false;
    }
    function setUpModelChangePipeline(control, dir) {
        control.registerOnChange(function (newValue, emitModelEvent) {
            // control -> view
            dir.valueAccessor.writeValue(newValue);
            // control -> ngModel
            if (emitModelEvent)
                dir.viewToModelUpdate(newValue);
        });
    }
    function setUpFormContainer(control, dir) {
        if (control == null)
            _throwError(dir, 'Cannot find control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    }
    function _noControlError(dir) {
        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
    }
    function _throwError(dir, message) {
        var messageEnd;
        if (dir.path.length > 1) {
            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
        }
        else if (dir.path[0]) {
            messageEnd = "name: '" + dir.path + "'";
        }
        else {
            messageEnd = 'unspecified name attribute';
        }
        throw new Error(message + " " + messageEnd);
    }
    function composeValidators(validators) {
        return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
    }
    function composeAsyncValidators(validators) {
        return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
            null;
    }
    function isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model'))
            return false;
        var change = changes['model'];
        if (change.isFirstChange())
            return true;
        return !core.ɵlooseIdentical(viewModel, change.currentValue);
    }
    var BUILTIN_ACCESSORS = [
        CheckboxControlValueAccessor,
        RangeValueAccessor,
        NumberValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
    ];
    function isBuiltInAccessor(valueAccessor) {
        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
    }
    function syncPendingControls(form, directives) {
        form._syncPendingControls();
        directives.forEach(function (dir) {
            var control = dir.control;
            if (control.updateOn === 'submit' && control._pendingChange) {
                dir.viewToModelUpdate(control._pendingValue);
                control._pendingChange = false;
            }
        });
    }
    // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
    function selectValueAccessor(dir, valueAccessors) {
        if (!valueAccessors)
            return null;
        if (!Array.isArray(valueAccessors))
            _throwError(dir, 'Value accessor was not provided as an array for form control with');
        var defaultAccessor = undefined;
        var builtinAccessor = undefined;
        var customAccessor = undefined;
        valueAccessors.forEach(function (v) {
            if (v.constructor === DefaultValueAccessor) {
                defaultAccessor = v;
            }
            else if (isBuiltInAccessor(v)) {
                if (builtinAccessor)
                    _throwError(dir, 'More than one built-in value accessor matches form control with');
                builtinAccessor = v;
            }
            else {
                if (customAccessor)
                    _throwError(dir, 'More than one custom value accessor matches form control with');
                customAccessor = v;
            }
        });
        if (customAccessor)
            return customAccessor;
        if (builtinAccessor)
            return builtinAccessor;
        if (defaultAccessor)
            return defaultAccessor;
        _throwError(dir, 'No valid value accessor for form control with');
        return null;
    }
    function removeDir(list, el) {
        var index = list.indexOf(el);
        if (index > -1)
            list.splice(index, 1);
    }
    // TODO(kara): remove after deprecation period
    function _ngModelWarning(name, type, instance, warningConfig) {
        if (!core.isDevMode() || warningConfig === 'never')
            return;
        if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
            (warningConfig === 'always' && !instance._ngModelWarningSent)) {
            ReactiveErrors.ngModelWarning(name);
            type._ngModelWarningSentOnce = true;
            instance._ngModelWarningSent = true;
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
     *
     */
    var AbstractFormGroupDirective = /** @class */ (function (_super) {
        __extends(AbstractFormGroupDirective, _super);
        function AbstractFormGroupDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @description
         * An internal callback method triggered on the instance after the inputs are set.
         * Registers the group with its parent group.
         */
        AbstractFormGroupDirective.prototype.ngOnInit = function () {
            this._checkParentType();
            this.formDirective.addFormGroup(this);
        };
        /**
         * @description
         * An internal callback method triggered before the instance is destroyed.
         * Removes the group from its parent group.
         */
        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeFormGroup(this);
            }
        };
        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
            /**
             * @description
             * The `FormGroup` bound to this directive.
             */
            get: function () { return this.formDirective.getFormGroup(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
            /**
             * @description
             * The path to this group from the top-level directive.
             */
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
            /**
             * @description
             * The top-level directive for this group if present, otherwise null.
             */
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
            /**
             * @description
             * The synchronous validators registered with this group.
             */
            get: function () { return composeValidators(this._validators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
            /**
             * @description
             * The async validators registered with this group.
             */
            get: function () {
                return composeAsyncValidators(this._asyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        AbstractFormGroupDirective.prototype._checkParentType = function () { };
        return AbstractFormGroupDirective;
    }(ControlContainer));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var AbstractControlStatus = /** @class */ (function () {
        function AbstractControlStatus(cd) {
            this._cd = cd;
        }
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
            get: function () { return this._cd.control ? this._cd.control.untouched : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
            get: function () { return this._cd.control ? this._cd.control.touched : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
            get: function () { return this._cd.control ? this._cd.control.pristine : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
            get: function () { return this._cd.control ? this._cd.control.dirty : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
            get: function () { return this._cd.control ? this._cd.control.valid : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
            get: function () { return this._cd.control ? this._cd.control.invalid : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
            get: function () { return this._cd.control ? this._cd.control.pending : false; },
            enumerable: true,
            configurable: true
        });
        return AbstractControlStatus;
    }());
    var ngControlStatusHost = {
        '[class.ng-untouched]': 'ngClassUntouched',
        '[class.ng-touched]': 'ngClassTouched',
        '[class.ng-pristine]': 'ngClassPristine',
        '[class.ng-dirty]': 'ngClassDirty',
        '[class.ng-valid]': 'ngClassValid',
        '[class.ng-invalid]': 'ngClassInvalid',
        '[class.ng-pending]': 'ngClassPending',
    };
    /**
     * Directive automatically applied to Angular form controls that sets CSS classes
     * based on control status. The following classes are applied as the properties
     * become true:
     *
     * * ng-valid
     * * ng-invalid
     * * ng-pending
     * * ng-pristine
     * * ng-dirty
     * * ng-untouched
     * * ng-touched
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var NgControlStatus = /** @class */ (function (_super) {
        __extends(NgControlStatus, _super);
        function NgControlStatus(cd) {
            return _super.call(this, cd) || this;
        }
        NgControlStatus = __decorate([
            core.Directive({ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost }),
            __param(0, core.Self()),
            __metadata("design:paramtypes", [NgControl])
        ], NgControlStatus);
        return NgControlStatus;
    }(AbstractControlStatus));
    /**
     * Directive automatically applied to Angular form groups that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var NgControlStatusGroup = /** @class */ (function (_super) {
        __extends(NgControlStatusGroup, _super);
        function NgControlStatusGroup(cd) {
            return _super.call(this, cd) || this;
        }
        NgControlStatusGroup = __decorate([
            core.Directive({
                selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                host: ngControlStatusHost
            }),
            __param(0, core.Self()),
            __metadata("design:paramtypes", [ControlContainer])
        ], NgControlStatusGroup);
        return NgControlStatusGroup;
    }(AbstractControlStatus));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Reports that a FormControl is valid, meaning that no errors exist in the input value.
     *
     * @see `status`
     */
    var VALID = 'VALID';
    /**
     * Reports that a FormControl is invalid, meaning that an error exists in the input value.
     *
     * @see `status`
     */
    var INVALID = 'INVALID';
    /**
     * Reports that a FormControl is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value.
     *
     * @see `markAsPending`
     * @see `status`
     */
    var PENDING = 'PENDING';
    /**
     * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
     * calculations of validity or value.
     *
     * @see `markAsDisabled`
     * @see `status`
     */
    var DISABLED = 'DISABLED';
    function _find(control, path, delimiter) {
        if (path == null)
            return null;
        if (!(path instanceof Array)) {
            path = path.split(delimiter);
        }
        if (path instanceof Array && (path.length === 0))
            return null;
        return path.reduce(function (v, name) {
            if (v instanceof FormGroup) {
                return v.controls.hasOwnProperty(name) ? v.controls[name] : null;
            }
            if (v instanceof FormArray) {
                return v.at(name) || null;
            }
            return null;
        }, control);
    }
    function coerceToValidator(validatorOrOpts) {
        var validator = (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators :
            validatorOrOpts);
        return Array.isArray(validator) ? composeValidators(validator) : validator || null;
    }
    function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
        var origAsyncValidator = (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators :
            asyncValidator);
        return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
            origAsyncValidator || null;
    }
    function isOptionsObj(validatorOrOpts) {
        return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
            typeof validatorOrOpts === 'object';
    }
    /**
     * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
     *
     * It provides some of the shared behavior that all controls and groups of controls have, like
     * running validators, calculating status, and resetting state. It also defines the properties
     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
     * instantiated directly.
     *
     * @see [Forms Guide](/guide/forms)
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     * @see [Dynamic Forms Guide](/guide/dynamic-form)
     *
     */
    var AbstractControl = /** @class */ (function () {
        /**
         * Initialize the AbstractControl instance.
         *
         * @param validator The function that determines the synchronous validity of this control.
         * @param asyncValidator The function that determines the asynchronous validity of this
         * control.
         */
        function AbstractControl(validator, asyncValidator) {
            this.validator = validator;
            this.asyncValidator = asyncValidator;
            /** @internal */
            this._onCollectionChange = function () { };
            /**
             * A control is `pristine` if the user has not yet changed
             * the value in the UI.
             *
             * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
             * Programmatic changes to a control's value do not mark it dirty.
             */
            this.pristine = true;
            /**
             * True if the control is marked as `touched`.
             *
             * A control is marked `touched` once the user has triggered
             * a `blur` event on it.
             */
            this.touched = false;
            /** @internal */
            this._onDisabledChange = [];
        }
        Object.defineProperty(AbstractControl.prototype, "parent", {
            /**
             * The parent control.
             */
            get: function () { return this._parent; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "valid", {
            /**
             * A control is `valid` when its `status` is `VALID`.
             *
             * @see `status`
             *
             * @returns True if the control has passed all of its validation tests,
             * false otherwise.
             */
            get: function () { return this.status === VALID; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "invalid", {
            /**
             * A control is `invalid` when its `status` is `INVALID`.
             *
             * @see `status`
             *
             * @returns True if this control has failed one or more of its validation checks,
             * false otherwise.
             */
            get: function () { return this.status === INVALID; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "pending", {
            /**
             * A control is `pending` when its `status` is `PENDING`.
             *
             * @see `status`
             *
             * @returns True if this control is in the process of conducting a validation check,
             * false otherwise.
             */
            get: function () { return this.status == PENDING; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "disabled", {
            /**
             * A control is `disabled` when its `status` is `DISABLED`.
             *
             * @see `status`
             *
             * Disabled controls are exempt from validation checks and
             * are not included in the aggregate value of their ancestor
             * controls.
             *
             * @returns True if the control is disabled, false otherwise.
             */
            get: function () { return this.status === DISABLED; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "enabled", {
            /**
             * A control is `enabled` as long as its `status` is not `DISABLED`.
             *
             * @see `status`
             *
             * @returns True if the control has any status other than 'DISABLED',
             * false if the status is 'DISABLED'.
             *
             */
            get: function () { return this.status !== DISABLED; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "dirty", {
            /**
             * A control is `dirty` if the user has changed the value
             * in the UI.
             *
             * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
             * Programmatic changes to a control's value do not mark it dirty.
             */
            get: function () { return !this.pristine; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "untouched", {
            /**
             * True if the control has not been marked as touched
             *
             * A control is `untouched` if the user has not yet triggered
             * a `blur` event on it.
             */
            get: function () { return !this.touched; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "updateOn", {
            /**
             * Reports the update strategy of the `AbstractControl` (meaning
             * the event on which the control updates itself).
             * Possible values: `'change'` | `'blur'` | `'submit'`
             * Default value: `'change'`
             */
            get: function () {
                return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this overwrites any existing sync validators.
         */
        AbstractControl.prototype.setValidators = function (newValidator) {
            this.validator = coerceToValidator(newValidator);
        };
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         */
        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
            this.asyncValidator = coerceToAsyncValidator(newValidator);
        };
        /**
         * Empties out the sync validator list.
         */
        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
        /**
         * Empties out the async validator list.
         */
        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
        /**
         * Marks the control as `touched`. A control is touched by focus and
         * blur events that do not change the value; compare `markAsDirty`;
         *
         *  @param opts Configuration options that determine how the control propagates changes
         * and emits events events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         */
        AbstractControl.prototype.markAsTouched = function (opts) {
            if (opts === void 0) { opts = {}; }
            this.touched = true;
            if (this._parent && !opts.onlySelf) {
                this._parent.markAsTouched(opts);
            }
        };
        /**
         * Marks the control as `untouched`.
         *
         * If the control has any children, also marks all children as `untouched`
         * and recalculates the `touched` status of all parent controls.
         *
         *  @param opts Configuration options that determine how the control propagates changes
         * and emits events after the marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         */
        AbstractControl.prototype.markAsUntouched = function (opts) {
            if (opts === void 0) { opts = {}; }
            this.touched = false;
            this._pendingTouched = false;
            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
            if (this._parent && !opts.onlySelf) {
                this._parent._updateTouched(opts);
            }
        };
        /**
         * Marks the control as `dirty`. A control becomes dirty when
         * the control's is changed through the UI; compare `markAsTouched`.
         *
         *  @param opts Configuration options that determine how the control propagates changes
         * and emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         */
        AbstractControl.prototype.markAsDirty = function (opts) {
            if (opts === void 0) { opts = {}; }
            this.pristine = false;
            if (this._parent && !opts.onlySelf) {
                this._parent.markAsDirty(opts);
            }
        };
        /**
         * Marks the control as `pristine`.
         *
         * If the control has any children, marks all children as `pristine`,
         * and recalculates the `pristine` status of all parent
         * controls.
         *
         *  @param opts Configuration options that determine how the control emits events after
         * marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         */
        AbstractControl.prototype.markAsPristine = function (opts) {
            if (opts === void 0) { opts = {}; }
            this.pristine = true;
            this._pendingDirty = false;
            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
            if (this._parent && !opts.onlySelf) {
                this._parent._updatePristine(opts);
            }
        };
        /**
         * Marks the control as `pending`.
         *
         * A control is pending while the control performs async validation.
         *
         *  @param opts Configuration options that determine how the control propagates changes and
         * emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
         * observable emits an event with the latest status the control is marked pending.
         * When false, no events are emitted.
         *
         */
        AbstractControl.prototype.markAsPending = function (opts) {
            if (opts === void 0) { opts = {}; }
            this.status = PENDING;
            if (opts.emitEvent !== false) {
                this.statusChanges.emit(this.status);
            }
            if (this._parent && !opts.onlySelf) {
                this._parent.markAsPending(opts);
            }
        };
        /**
         * Disables the control. This means the control is exempt from validation checks and
         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
         *
         * If the control has children, all children are also disabled.
         *
         *  @param opts Configuration options that determine how the control propagates
         * changes and emits events after the control is disabled.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is disabled.
         * When false, no events are emitted.
         */
        AbstractControl.prototype.disable = function (opts) {
            if (opts === void 0) { opts = {}; }
            this.status = DISABLED;
            this.errors = null;
            this._forEachChild(function (control) { control.disable(__assign({}, opts, { onlySelf: true })); });
            this._updateValue();
            if (opts.emitEvent !== false) {
                this.valueChanges.emit(this.value);
                this.statusChanges.emit(this.status);
            }
            this._updateAncestors(opts);
            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
        };
        /**
         * Enables the control. This means the control is included in validation checks and
         * the aggregate value of its parent. Its status recalculates based on its value and
         * its validators.
         *
         * By default, if the control has children, all children are enabled.
         *
         *  @param opts Configure options that control how the control propagates changes and
         * emits events when marked as untouched
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is enabled.
         * When false, no events are emitted.
         */
        AbstractControl.prototype.enable = function (opts) {
            if (opts === void 0) { opts = {}; }
            this.status = VALID;
            this._forEachChild(function (control) { control.enable(__assign({}, opts, { onlySelf: true })); });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
            this._updateAncestors(opts);
            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
        };
        AbstractControl.prototype._updateAncestors = function (opts) {
            if (this._parent && !opts.onlySelf) {
                this._parent.updateValueAndValidity(opts);
                this._parent._updatePristine();
                this._parent._updateTouched();
            }
        };
        /**
         * @param parent Sets the parent of the control
         */
        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
        /**
         * Recalculates the value and validation status of the control.
         *
         * By default, it also updates the value and validity of its ancestors.
         *
         * @param opts Configuration options determine how the control propagates changes and emits events
         * after updates and validity checks are applied.
         * * `onlySelf`: When true, only update this control. When false or not supplied,
         * update all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is updated.
         * When false, no events are emitted.
         */
        AbstractControl.prototype.updateValueAndValidity = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._setInitialStatus();
            this._updateValue();
            if (this.enabled) {
                this._cancelExistingSubscription();
                this.errors = this._runValidator();
                this.status = this._calculateStatus();
                if (this.status === VALID || this.status === PENDING) {
                    this._runAsyncValidator(opts.emitEvent);
                }
            }
            if (opts.emitEvent !== false) {
                this.valueChanges.emit(this.value);
                this.statusChanges.emit(this.status);
            }
            if (this._parent && !opts.onlySelf) {
                this._parent.updateValueAndValidity(opts);
            }
        };
        /** @internal */
        AbstractControl.prototype._updateTreeValidity = function (opts) {
            if (opts === void 0) { opts = { emitEvent: true }; }
            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity(opts); });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        };
        AbstractControl.prototype._setInitialStatus = function () {
            this.status = this._allControlsDisabled() ? DISABLED : VALID;
        };
        AbstractControl.prototype._runValidator = function () {
            return this.validator ? this.validator(this) : null;
        };
        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
            var _this = this;
            if (this.asyncValidator) {
                this.status = PENDING;
                var obs = toObservable(this.asyncValidator(this));
                this._asyncValidationSubscription =
                    obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
            }
        };
        AbstractControl.prototype._cancelExistingSubscription = function () {
            if (this._asyncValidationSubscription) {
                this._asyncValidationSubscription.unsubscribe();
            }
        };
        /**
         * Sets errors on a form control when running validations manually, rather than automatically.
         *
         * Calling `setErrors` also updates the validity of the parent control.
         *
         * @usageNotes
         * ### Manually set the errors for a control
         *
         * ```
         * const login = new FormControl('someLogin');
         * login.setErrors({
         *   notUnique: true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({ notUnique: true });
         *
         * login.setValue('someOtherLogin');
         *
         * expect(login.valid).toEqual(true);
         * ```
         */
        AbstractControl.prototype.setErrors = function (errors, opts) {
            if (opts === void 0) { opts = {}; }
            this.errors = errors;
            this._updateControlsErrors(opts.emitEvent !== false);
        };
        /**
         * Retrieves a child control given the control's name or path.
         *
         * @param path A dot-delimited string or array of string/number values that define the path to the
         * control.
         *
         * @usageNotes
         * ### Retrieve a nested control
         *
         * For example, to get a `name` control nested within a `person` sub-group:
         *
         * * `this.form.get('person.name');`
         *
         * -OR-
         *
         * * `this.form.get(['person', 'name']);`
         */
        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
        /**
         * Reports error data for a specific error occurring in this control or in another control.
         *
         * @param errorCode The error code for which to retrieve data
         * @param path The path to a control to check. If not supplied, checks for the error in this
         * control.
         *
         * @returns The error data if the control with the given path has the given error, otherwise null
         * or undefined.
         */
        AbstractControl.prototype.getError = function (errorCode, path) {
            var control = path ? this.get(path) : this;
            return control && control.errors ? control.errors[errorCode] : null;
        };
        /**
         * Reports whether the control with the given path has the error specified.
         *
         * @param errorCode The error code for which to retrieve data
         * @param path The path to a control to check. If not supplied, checks for the error in this
         * control.
         * @returns True when the control with the given path has the error, otherwise false.
         */
        AbstractControl.prototype.hasError = function (errorCode, path) { return !!this.getError(errorCode, path); };
        Object.defineProperty(AbstractControl.prototype, "root", {
            /**
             * Retrieves the top-level ancestor of this control.
             */
            get: function () {
                var x = this;
                while (x._parent) {
                    x = x._parent;
                }
                return x;
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
            this.status = this._calculateStatus();
            if (emitEvent) {
                this.statusChanges.emit(this.status);
            }
            if (this._parent) {
                this._parent._updateControlsErrors(emitEvent);
            }
        };
        /** @internal */
        AbstractControl.prototype._initObservables = function () {
            this.valueChanges = new core.EventEmitter();
            this.statusChanges = new core.EventEmitter();
        };
        AbstractControl.prototype._calculateStatus = function () {
            if (this._allControlsDisabled())
                return DISABLED;
            if (this.errors)
                return INVALID;
            if (this._anyControlsHaveStatus(PENDING))
                return PENDING;
            if (this._anyControlsHaveStatus(INVALID))
                return INVALID;
            return VALID;
        };
        /** @internal */
        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
            return this._anyControls(function (control) { return control.status === status; });
        };
        /** @internal */
        AbstractControl.prototype._anyControlsDirty = function () {
            return this._anyControls(function (control) { return control.dirty; });
        };
        /** @internal */
        AbstractControl.prototype._anyControlsTouched = function () {
            return this._anyControls(function (control) { return control.touched; });
        };
        /** @internal */
        AbstractControl.prototype._updatePristine = function (opts) {
            if (opts === void 0) { opts = {}; }
            this.pristine = !this._anyControlsDirty();
            if (this._parent && !opts.onlySelf) {
                this._parent._updatePristine(opts);
            }
        };
        /** @internal */
        AbstractControl.prototype._updateTouched = function (opts) {
            if (opts === void 0) { opts = {}; }
            this.touched = this._anyControlsTouched();
            if (this._parent && !opts.onlySelf) {
                this._parent._updateTouched(opts);
            }
        };
        /** @internal */
        AbstractControl.prototype._isBoxedValue = function (formState) {
            return typeof formState === 'object' && formState !== null &&
                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
        };
        /** @internal */
        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
        /** @internal */
        AbstractControl.prototype._setUpdateStrategy = function (opts) {
            if (isOptionsObj(opts) && opts.updateOn != null) {
                this._updateOn = opts.updateOn;
            }
        };
        return AbstractControl;
    }());
    /**
     * Tracks the value and validation status of an individual form control.
     *
     * This is one of the three fundamental building blocks of Angular forms, along with
     * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
     * implements most of the base functionality for accessing the value, validation status,
     * user interactions and events.
     *
     * @see `AbstractControl`
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see [Usage Notes](#usage-notes)
     *
     * @usageNotes
     *
     * ### Initializing Form Controls
     *
     * Instantiate a `FormControl`, with an initial value.
     *
     * ```ts
     * const control = new FormControl('some value');
     * console.log(control.value);     // 'some value'
     *```
     *
     * The following example initializes the control with a form state object. The `value`
     * and `disabled` keys are required in this case.
     *
     * ```ts
     * const control = new FormControl({ value: 'n/a', disabled: true });
     * console.log(control.value);     // 'n/a'
     * console.log(control.status);    // 'DISABLED'
     * ```
     *
     * The following example initializes the control with a sync validator.
     *
     * ```ts
     * const control = new FormControl('', Validators.required);
     * console.log(control.value);      // ''
     * console.log(control.status);     // 'INVALID'
     * ```
     *
     * The following example initializes the control using an options object.
     *
     * ```ts
     * const control = new FormControl('', {
     *    validators: Validators.required,
     *    asyncValidators: myAsyncValidator
     * });
     * ```
     *
     * ### Configure the control to update on a blur event
     *
     * Set the `updateOn` option to `'blur'` to update on the blur `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'blur' });
     * ```
     *
     * ### Configure the control to update on a submit event
     *
     * Set the `updateOn` option to `'submit'` to update on a submit `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'submit' });
     * ```
     *
     * ### Reset the control back to an initial value
     *
     * You reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * ```ts
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     *
     * control.reset('Drew');
     *
     * console.log(control.value); // 'Drew'
     * ```
     *
     * ### Reset the control back to an initial value and disabled
     *
     * ```
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     * console.log(control.status); // 'VALID'
     *
     * control.reset({ value: 'Drew', disabled: true });
     *
     * console.log(control.value); // 'Drew'
     * console.log(control.status); // 'DISABLED'
     *
    */
    var FormControl = /** @class */ (function (_super) {
        __extends(FormControl, _super);
        /**
        * Creates a new `FormControl` instance.
        *
        * @param formState Initializes the control with an initial value,
        * or an object that defines the initial value and disabled state.
        *
        * @param validatorOrOpts A synchronous validator function, or an array of
        * such functions, or an `AbstractControlOptions` object that contains validation functions
        * and a validation trigger.
        *
        * @param asyncValidator A single async validator or array of async validator functions
        *
        */
        function FormControl(formState, validatorOrOpts, asyncValidator) {
            if (formState === void 0) { formState = null; }
            var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
            /** @internal */
            _this._onChange = [];
            _this._applyFormState(formState);
            _this._setUpdateStrategy(validatorOrOpts);
            _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            _this._initObservables();
            return _this;
        }
        /**
         * Sets a new value for the form control.
         *
         * @param value The new value for the control.
         * @param options Configuration options that determine how the control proopagates changes
         * and emits events when the value changes.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
         * `onChange` event to
         * update the view.
         * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
         * `ngModelChange`
         * event to update the model.
         *
         */
        FormControl.prototype.setValue = function (value, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            this.value = this._pendingValue = value;
            if (this._onChange.length && options.emitModelToViewChange !== false) {
                this._onChange.forEach(function (changeFn) { return changeFn(_this.value, options.emitViewToModelChange !== false); });
            }
            this.updateValueAndValidity(options);
        };
        /**
         * Patches the value of a control.
         *
         * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
         * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
         * `FormArrays`, where it does behave differently.
         *
         * @see `setValue` for options
         */
        FormControl.prototype.patchValue = function (value, options) {
            if (options === void 0) { options = {}; }
            this.setValue(value, options);
        };
        /**
         * Resets the form control, marking it `pristine` and `untouched`, and setting
         * the value to null.
         *
         * @param formState Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         *
         */
        FormControl.prototype.reset = function (formState, options) {
            if (formState === void 0) { formState = null; }
            if (options === void 0) { options = {}; }
            this._applyFormState(formState);
            this.markAsPristine(options);
            this.markAsUntouched(options);
            this.setValue(this.value, options);
            this._pendingChange = false;
        };
        /**
         * @internal
         */
        FormControl.prototype._updateValue = function () { };
        /**
         * @internal
         */
        FormControl.prototype._anyControls = function (condition) { return false; };
        /**
         * @internal
         */
        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
        /**
         * Register a listener for change events.
         *
         * @param fn The method that is called when the value changes
         */
        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
        /**
         * @internal
         */
        FormControl.prototype._clearChangeFns = function () {
            this._onChange = [];
            this._onDisabledChange = [];
            this._onCollectionChange = function () { };
        };
        /**
         * Register a listener for disabled events.
         *
         * @param fn The method that is called when the disabled status changes.
         */
        FormControl.prototype.registerOnDisabledChange = function (fn) {
            this._onDisabledChange.push(fn);
        };
        /**
         * @internal
         */
        FormControl.prototype._forEachChild = function (cb) { };
        /** @internal */
        FormControl.prototype._syncPendingControls = function () {
            if (this.updateOn === 'submit') {
                if (this._pendingDirty)
                    this.markAsDirty();
                if (this._pendingTouched)
                    this.markAsTouched();
                if (this._pendingChange) {
                    this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                    return true;
                }
            }
            return false;
        };
        FormControl.prototype._applyFormState = function (formState) {
            if (this._isBoxedValue(formState)) {
                this.value = this._pendingValue = formState.value;
                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                    this.enable({ onlySelf: true, emitEvent: false });
            }
            else {
                this.value = this._pendingValue = formState;
            }
        };
        return FormControl;
    }(AbstractControl));
    /**
     * Tracks the value and validity state of a group of `FormControl` instances.
     *
     * A `FormGroup` aggregates the values of each child `FormControl` into one object,
     * with each control name as the key.  It calculates its status by reducing the status values
     * of its children. For example, if one of the controls in a group is invalid, the entire
     * group becomes invalid.
     *
     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormArray`.
     *
     * When instantiating a `FormGroup`, pass in a collection of child controls as the first
     * argument. The key for each child registers the name for the control.
     *
     * @usageNotes
     *
     * ### Create a form group with 2 controls
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('Nancy', Validators.minLength(2)),
     *   last: new FormControl('Drew'),
     * });
     *
     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
     * console.log(form.status);  // 'VALID'
     * ```
     *
     * ### Create a form group with a group-level validator
     *
     * You include group-level validators as the second arg, or group-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('', Validators.minLength(2)),
     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
     * }, passwordMatchValidator);
     *
     *
     * function passwordMatchValidator(g: FormGroup) {
     *    return g.get('password').value === g.get('passwordConfirm').value
     *       ? null : {'mismatch': true};
     * }
     * ```
     *
     * Like `FormControl` instances, you choose to pass in
     * validators and async validators as part of an options object.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('')
     *   passwordConfirm: new FormControl('')
     * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
     * ```
     *
     * ### Set the updateOn property for all controls in a form group
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * group level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const c = new FormGroup({
     *   one: new FormControl()
     * }, { updateOn: 'blur' });
     * ```
     */
    var FormGroup = /** @class */ (function (_super) {
        __extends(FormGroup, _super);
        /**
        * Creates a new `FormGroup` instance.
        *
        * @param controls A collection of child controls. The key for each child is the name
        * under which it is registered.
        *
        * @param validatorOrOpts A synchronous validator function, or an array of
        * such functions, or an `AbstractControlOptions` object that contains validation functions
        * and a validation trigger.
        *
        * @param asyncValidator A single async validator or array of async validator functions
        *
        */
        function FormGroup(controls, validatorOrOpts, asyncValidator) {
            var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
            _this.controls = controls;
            _this._initObservables();
            _this._setUpdateStrategy(validatorOrOpts);
            _this._setUpControls();
            _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            return _this;
        }
        /**
         * Registers a control with the group's list of controls.
         *
         * This method does not update the value or validity of the control.
         * Use {@link FormGroup#addControl addControl} instead.
         *
         * @param name The control name to register in the collection
         * @param control Provides the control for the given name
         */
        FormGroup.prototype.registerControl = function (name, control) {
            if (this.controls[name])
                return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
            return control;
        };
        /**
         * Add a control to this group.
         *
         * This method also updates the value and validity of the control.
         *
         * @param name The control name to add to the collection
         * @param control Provides the control for the given name
         */
        FormGroup.prototype.addControl = function (name, control) {
            this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Remove a control from this group.
         *
         * @param name The control name to remove from the collection
         */
        FormGroup.prototype.removeControl = function (name) {
            if (this.controls[name])
                this.controls[name]._registerOnCollectionChange(function () { });
            delete (this.controls[name]);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Replace an existing control.
         *
         * @param name The control name to replace in the collection
         * @param control Provides the control for the given name
         */
        FormGroup.prototype.setControl = function (name, control) {
            if (this.controls[name])
                this.controls[name]._registerOnCollectionChange(function () { });
            delete (this.controls[name]);
            if (control)
                this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Check whether there is an enabled control with the given name in the group.
         *
         * Reports false for disabled controls. If you'd like to check for existence in the group
         * only, use {@link AbstractControl#get get} instead.
         *
         * @param name The control name to check for existence in the collection
         *
         * @returns false for disabled controls, true otherwise.
         */
        FormGroup.prototype.contains = function (controlName) {
            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
        };
        /**
         * Sets the value of the `FormGroup`. It accepts an object that matches
         * the structure of the group, with control names as keys.
         *
         * @usageNotes
         * ### Set the complete value for the form group
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl(),
         *   last: new FormControl()
         * });
         *
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.setValue({first: 'Nancy', last: 'Drew'});
         * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
         * ```
         *
         * @throws When strict checks fail, such as setting the value of a control
         * that doesn't exist or if you excluding the value of a control.
         *
         * @param value The new value for the control that matches the structure of the group.
         * @param options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         */
        FormGroup.prototype.setValue = function (value, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            this._checkAllValuesPresent(value);
            Object.keys(value).forEach(function (name) {
                _this._throwIfControlMissing(name);
                _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            });
            this.updateValueAndValidity(options);
        };
        /**
         * Patches the value of the `FormGroup`. It accepts an object with control
         * names as keys, and does its best to match the values to the correct controls
         * in the group.
         *
         * It accepts both super-sets and sub-sets of the group without throwing an error.
         *
         * @usageNotes
         * ### Patch the value for a form group
         *
         * ```
         * const form = new FormGroup({
         *    first: new FormControl(),
         *    last: new FormControl()
         * });
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.patchValue({first: 'Nancy'});
         * console.log(form.value);   // {first: 'Nancy', last: null}
         * ```
         *
         * @param value The object that matches the structure of the group.
         * @param options Configuration options that determine how the control propagates changes and
         * emits events after the value is patched.
         * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
         * true.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */
        FormGroup.prototype.patchValue = function (value, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            Object.keys(value).forEach(function (name) {
                if (_this.controls[name]) {
                    _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                }
            });
            this.updateValueAndValidity(options);
        };
        /**
         * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
         * the value of all descendants to null.
         *
         * You reset to a specific form state by passing in a map of states
         * that matches the structure of your form, with control names as keys. The state
         * is a standalone value or a form state object with both a value and a disabled
         * status.
         *
         * @param formState Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param options Configuration options that determine how the control propagates changes
         * and emits events when the group is reset.
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * @usageNotes
         *
         * ### Reset the form group values
         *
         * ```ts
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * console.log(form.value);  // {first: 'first name', last: 'last name'}
         *
         * form.reset({ first: 'name', last: 'last name' });
         *
         * console.log(form.value);  // {first: 'name', last: 'last name'}
         * ```
         *
         * ### Reset the form group values and disabled status
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * form.reset({
         *   first: {value: 'name', disabled: true},
         *   last: 'last'
         * });
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * console.log(this.form.get('first').status);  // 'DISABLED'
         * ```
         */
        FormGroup.prototype.reset = function (value, options) {
            if (value === void 0) { value = {}; }
            if (options === void 0) { options = {}; }
            this._forEachChild(function (control, name) {
                control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            });
            this.updateValueAndValidity(options);
            this._updatePristine(options);
            this._updateTouched(options);
        };
        /**
         * The aggregate value of the `FormGroup`, including any disabled controls.
         *
         * Retrieves all values regardless of disabled status.
         * The `value` property is the best way to get the value of the group, because
         * it excludes disabled controls in the `FormGroup`.
         */
        FormGroup.prototype.getRawValue = function () {
            return this._reduceChildren({}, function (acc, control, name) {
                acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
                return acc;
            });
        };
        /** @internal */
        FormGroup.prototype._syncPendingControls = function () {
            var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
                return child._syncPendingControls() ? true : updated;
            });
            if (subtreeUpdated)
                this.updateValueAndValidity({ onlySelf: true });
            return subtreeUpdated;
        };
        /** @internal */
        FormGroup.prototype._throwIfControlMissing = function (name) {
            if (!Object.keys(this.controls).length) {
                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }
            if (!this.controls[name]) {
                throw new Error("Cannot find form control with name: " + name + ".");
            }
        };
        /** @internal */
        FormGroup.prototype._forEachChild = function (cb) {
            var _this = this;
            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
        };
        /** @internal */
        FormGroup.prototype._setUpControls = function () {
            var _this = this;
            this._forEachChild(function (control) {
                control.setParent(_this);
                control._registerOnCollectionChange(_this._onCollectionChange);
            });
        };
        /** @internal */
        FormGroup.prototype._updateValue = function () { this.value = this._reduceValue(); };
        /** @internal */
        FormGroup.prototype._anyControls = function (condition) {
            var _this = this;
            var res = false;
            this._forEachChild(function (control, name) {
                res = res || (_this.contains(name) && condition(control));
            });
            return res;
        };
        /** @internal */
        FormGroup.prototype._reduceValue = function () {
            var _this = this;
            return this._reduceChildren({}, function (acc, control, name) {
                if (control.enabled || _this.disabled) {
                    acc[name] = control.value;
                }
                return acc;
            });
        };
        /** @internal */
        FormGroup.prototype._reduceChildren = function (initValue, fn) {
            var res = initValue;
            this._forEachChild(function (control, name) { res = fn(res, control, name); });
            return res;
        };
        /** @internal */
        FormGroup.prototype._allControlsDisabled = function () {
            var e_1, _a;
            try {
                for (var _b = __values(Object.keys(this.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var controlName = _c.value;
                    if (this.controls[controlName].enabled) {
                        return false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return Object.keys(this.controls).length > 0 || this.disabled;
        };
        /** @internal */
        FormGroup.prototype._checkAllValuesPresent = function (value) {
            this._forEachChild(function (control, name) {
                if (value[name] === undefined) {
                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
                }
            });
        };
        return FormGroup;
    }(AbstractControl));
    /**
     * Tracks the value and validity state of an array of `FormControl`,
     * `FormGroup` or `FormArray` instances.
     *
     * A `FormArray` aggregates the values of each child `FormControl` into an array.
     * It calculates its status by reducing the status values of its children. For example, if one of
     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
     *
     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormGroup`.
     *
     * @usageNotes
     *
     * ### Create an array of form controls
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy', Validators.minLength(2)),
     *   new FormControl('Drew'),
     * ]);
     *
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * console.log(arr.status);  // 'VALID'
     * ```
     *
     * ### Create a form array with array-level validators
     *
     * You include array-level validators and async validators. These come in handy
     * when you want to perform validation that considers the value of more than one child
     * control.
     *
     * The two types of validators are passed in separately as the second and third arg
     * respectively, or together as part of an options object.
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy'),
     *   new FormControl('Drew')
     * ], {validators: myValidator, asyncValidators: myAsyncValidator});
     * ```
     *
      * ### Set the updateOn property for all controls in a form array
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * array level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl()
     * ], {updateOn: 'blur'});
     * ```
     *
     * ### Adding or removing controls from a form array
     *
     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
     * the `FormArray` directly, as that result in strange and unexpected behavior such
     * as broken change detection.
     *
     *
     */
    var FormArray = /** @class */ (function (_super) {
        __extends(FormArray, _super);
        /**
        * Creates a new `FormArray` instance.
        *
        * @param controls An array of child controls. Each child control is given an index
        * where it is registered.
        *
        * @param validatorOrOpts A synchronous validator function, or an array of
        * such functions, or an `AbstractControlOptions` object that contains validation functions
        * and a validation trigger.
        *
        * @param asyncValidator A single async validator or array of async validator functions
        *
        */
        function FormArray(controls, validatorOrOpts, asyncValidator) {
            var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
            _this.controls = controls;
            _this._initObservables();
            _this._setUpdateStrategy(validatorOrOpts);
            _this._setUpControls();
            _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            return _this;
        }
        /**
         * Get the `AbstractControl` at the given `index` in the array.
         *
         * @param index Index in the array to retrieve the control
         */
        FormArray.prototype.at = function (index) { return this.controls[index]; };
        /**
         * Insert a new `AbstractControl` at the end of the array.
         *
         * @param control Form control to be inserted
         */
        FormArray.prototype.push = function (control) {
            this.controls.push(control);
            this._registerControl(control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Insert a new `AbstractControl` at the given `index` in the array.
         *
         * @param index Index in the array to insert the control
         * @param control Form control to be inserted
         */
        FormArray.prototype.insert = function (index, control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
            this.updateValueAndValidity();
        };
        /**
         * Remove the control at the given `index` in the array.
         *
         * @param index Index in the array to remove the control
         */
        FormArray.prototype.removeAt = function (index) {
            if (this.controls[index])
                this.controls[index]._registerOnCollectionChange(function () { });
            this.controls.splice(index, 1);
            this.updateValueAndValidity();
        };
        /**
         * Replace an existing control.
         *
         * @param index Index in the array to replace the control
         * @param control The `AbstractControl` control to replace the existing control
         */
        FormArray.prototype.setControl = function (index, control) {
            if (this.controls[index])
                this.controls[index]._registerOnCollectionChange(function () { });
            this.controls.splice(index, 1);
            if (control) {
                this.controls.splice(index, 0, control);
                this._registerControl(control);
            }
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        Object.defineProperty(FormArray.prototype, "length", {
            /**
             * Length of the control array.
             */
            get: function () { return this.controls.length; },
            enumerable: true,
            configurable: true
        });
        /**
         * Sets the value of the `FormArray`. It accepts an array that matches
         * the structure of the control.
         *
         * This method performs strict checks, and throws an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         * @usageNotes
         * ### Set the values for the controls in the form array
         *
         * ```
         * const arr = new FormArray([
         *   new FormControl(),
         *   new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.setValue(['Nancy', 'Drew']);
         * console.log(arr.value);   // ['Nancy', 'Drew']
         * ```
         *
         * @param value Array of values for the controls
         * @param options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */
        FormArray.prototype.setValue = function (value, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            this._checkAllValuesPresent(value);
            value.forEach(function (newValue, index) {
                _this._throwIfControlMissing(index);
                _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            });
            this.updateValueAndValidity(options);
        };
        /**
         * Patches the value of the `FormArray`. It accepts an array that matches the
         * structure of the control, and does its best to match the values to the correct
         * controls in the group.
         *
         * It accepts both super-sets and sub-sets of the array without throwing an error.
         *
         * @usageNotes
         * ### Patch the values for controls in a form array
         *
         * ```
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.patchValue(['Nancy']);
         * console.log(arr.value);   // ['Nancy', null]
         * ```
         *
         * @param value Array of latest values for the controls
         * @param options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */
        FormArray.prototype.patchValue = function (value, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            value.forEach(function (newValue, index) {
                if (_this.at(index)) {
                    _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
                }
            });
            this.updateValueAndValidity(options);
        };
        /**
         * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
         * value of all descendants to null or null maps.
         *
         * You reset to a specific form state by passing in an array of states
         * that matches the structure of the control. The state is a standalone value
         * or a form state object with both a value and a disabled status.
         *
         * @usageNotes
         * ### Reset the values in a form array
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * arr.reset(['name', 'last name']);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * ```
         *
         * ### Reset the values in a form array and the disabled status for the first control
         *
         * ```
         * this.arr.reset([
         *   {value: 'name', disabled: true},
         *   'last'
         * ]);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * console.log(this.arr.get(0).status);  // 'DISABLED'
         * ```
         *
         * @param value Array of values for the controls
         * @param options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */
        FormArray.prototype.reset = function (value, options) {
            if (value === void 0) { value = []; }
            if (options === void 0) { options = {}; }
            this._forEachChild(function (control, index) {
                control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
            });
            this.updateValueAndValidity(options);
            this._updatePristine(options);
            this._updateTouched(options);
        };
        /**
         * The aggregate value of the array, including any disabled controls.
         *
         * Reports all values regardless of disabled status.
         * For enabled controls only, the `value` property is the best way to get the value of the array.
         */
        FormArray.prototype.getRawValue = function () {
            return this.controls.map(function (control) {
                return control instanceof FormControl ? control.value : control.getRawValue();
            });
        };
        /** @internal */
        FormArray.prototype._syncPendingControls = function () {
            var subtreeUpdated = this.controls.reduce(function (updated, child) {
                return child._syncPendingControls() ? true : updated;
            }, false);
            if (subtreeUpdated)
                this.updateValueAndValidity({ onlySelf: true });
            return subtreeUpdated;
        };
        /** @internal */
        FormArray.prototype._throwIfControlMissing = function (index) {
            if (!this.controls.length) {
                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }
            if (!this.at(index)) {
                throw new Error("Cannot find form control at index " + index);
            }
        };
        /** @internal */
        FormArray.prototype._forEachChild = function (cb) {
            this.controls.forEach(function (control, index) { cb(control, index); });
        };
        /** @internal */
        FormArray.prototype._updateValue = function () {
            var _this = this;
            this.value =
                this.controls.filter(function (control) { return control.enabled || _this.disabled; })
                    .map(function (control) { return control.value; });
        };
        /** @internal */
        FormArray.prototype._anyControls = function (condition) {
            return this.controls.some(function (control) { return control.enabled && condition(control); });
        };
        /** @internal */
        FormArray.prototype._setUpControls = function () {
            var _this = this;
            this._forEachChild(function (control) { return _this._registerControl(control); });
        };
        /** @internal */
        FormArray.prototype._checkAllValuesPresent = function (value) {
            this._forEachChild(function (control, i) {
                if (value[i] === undefined) {
                    throw new Error("Must supply a value for form control at index: " + i + ".");
                }
            });
        };
        /** @internal */
        FormArray.prototype._allControlsDisabled = function () {
            var e_2, _a;
            try {
                for (var _b = __values(this.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var control = _c.value;
                    if (control.enabled)
                        return false;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return this.controls.length > 0 || this.disabled;
        };
        FormArray.prototype._registerControl = function (control) {
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
        };
        return FormArray;
    }(AbstractControl));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var formDirectiveProvider = {
        provide: ControlContainer,
        useExisting: core.forwardRef(function () { return NgForm; })
    };
    var resolvedPromise = Promise.resolve(null);
    /**
     * @description
     *
     * Creates a top-level `FormGroup` instance and binds it to a form
     * to track aggregate form value and validation status.
     *
     * As soon as you import the `FormsModule`, this directive becomes active by default on
     * all `<form>` tags.  You don't need to add a special selector.
     *
     * You can export the directive into a local template variable using `ngForm` as the key
     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
     * `FormGroup` instance are duplicated on the directive itself, so a reference to it
     * will give you access to the aggregate value and validity status of the form, as well as
     * user interaction properties like `dirty` and `touched`.
     *
     * To register child controls with the form, you'll want to use `NgModel` with a
     * `name` attribute.  You can also use `NgModelGroup` if you'd like to create
     * sub-groups within the form.
     *
     * You can listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
     * submission event.
     *
     * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
     * If you want to import the `FormsModule` but skip its usage in some forms,
     * for example, to use native HTML5 validation, you can add `ngNoForm` and the `<form>`
     * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
     * unnecessary because the `<form>` tags are inert. In that case, you would
     * refrain from using the `formGroup` directive.
     *
     * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
     * in Angular v9.
     *
     * This has been deprecated to keep selectors consistent with other core Angular selectors,
     * as element selectors are typically written in kebab-case.
     *
     * Now deprecated:
     * ```html
     * <ngForm #myForm="ngForm">
     * ```
     *
     * After:
     * ```html
     * <ng-form #myForm="ngForm">
     * ```
     *
     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * @ngModule FormsModule
     */
    var NgForm = /** @class */ (function (_super) {
        __extends(NgForm, _super);
        function NgForm(validators, asyncValidators) {
            var _this = _super.call(this) || this;
            _this.submitted = false;
            _this._directives = [];
            _this.ngSubmit = new core.EventEmitter();
            _this.form =
                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
            return _this;
        }
        NgForm.prototype.ngAfterViewInit = function () { this._setUpdateStrategy(); };
        Object.defineProperty(NgForm.prototype, "formDirective", {
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "control", {
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "path", {
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "controls", {
            get: function () { return this.form.controls; },
            enumerable: true,
            configurable: true
        });
        NgForm.prototype.addControl = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var container = _this._findContainer(dir.path);
                dir.control =
                    container.registerControl(dir.name, dir.control);
                setUpControl(dir.control, dir);
                dir.control.updateValueAndValidity({ emitEvent: false });
                _this._directives.push(dir);
            });
        };
        NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
        NgForm.prototype.removeControl = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var container = _this._findContainer(dir.path);
                if (container) {
                    container.removeControl(dir.name);
                }
                removeDir(_this._directives, dir);
            });
        };
        NgForm.prototype.addFormGroup = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var container = _this._findContainer(dir.path);
                var group = new FormGroup({});
                setUpFormContainer(group, dir);
                container.registerControl(dir.name, group);
                group.updateValueAndValidity({ emitEvent: false });
            });
        };
        NgForm.prototype.removeFormGroup = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var container = _this._findContainer(dir.path);
                if (container) {
                    container.removeControl(dir.name);
                }
            });
        };
        NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
        NgForm.prototype.updateModel = function (dir, value) {
            var _this = this;
            resolvedPromise.then(function () {
                var ctrl = _this.form.get(dir.path);
                ctrl.setValue(value);
            });
        };
        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
        NgForm.prototype.onSubmit = function ($event) {
            this.submitted = true;
            syncPendingControls(this.form, this._directives);
            this.ngSubmit.emit($event);
            return false;
        };
        NgForm.prototype.onReset = function () { this.resetForm(); };
        NgForm.prototype.resetForm = function (value) {
            if (value === void 0) { value = undefined; }
            this.form.reset(value);
            this.submitted = false;
        };
        NgForm.prototype._setUpdateStrategy = function () {
            if (this.options && this.options.updateOn != null) {
                this.form._updateOn = this.options.updateOn;
            }
        };
        /** @internal */
        NgForm.prototype._findContainer = function (path) {
            path.pop();
            return path.length ? this.form.get(path) : this.form;
        };
        __decorate([
            core.Input('ngFormOptions'),
            __metadata("design:type", Object)
        ], NgForm.prototype, "options", void 0);
        NgForm = __decorate([
            core.Directive({
                selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
                providers: [formDirectiveProvider],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                outputs: ['ngSubmit'],
                exportAs: 'ngForm'
            }),
            __param(0, core.Optional()), __param(0, core.Self()), __param(0, core.Inject(NG_VALIDATORS)),
            __param(1, core.Optional()), __param(1, core.Self()), __param(1, core.Inject(NG_ASYNC_VALIDATORS)),
            __metadata("design:paramtypes", [Array, Array])
        ], NgForm);
        return NgForm;
    }(ControlContainer));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var TemplateDrivenErrors = /** @class */ (function () {
        function TemplateDrivenErrors() {
        }
        TemplateDrivenErrors.modelParentException = function () {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
        };
        TemplateDrivenErrors.formGroupNameException = function () {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
        };
        TemplateDrivenErrors.missingNameException = function () {
            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
        };
        TemplateDrivenErrors.modelGroupParentException = function () {
            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
        };
        TemplateDrivenErrors.ngFormWarning = function () {
            console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ");
        };
        return TemplateDrivenErrors;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Token to provide to turn off the warning when using 'ngForm' deprecated selector.
     */
    var NG_FORM_SELECTOR_WARNING = new core.InjectionToken('NgFormSelectorWarning');
    /**
     * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
     *
     * @deprecated in Angular v6 and will be removed in Angular v9.
     * @ngModule FormsModule
     */
    var NgFormSelectorWarning = /** @class */ (function () {
        function NgFormSelectorWarning(ngFormWarning) {
            if (((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning_1._ngFormWarning) ||
                ngFormWarning === 'always') {
                TemplateDrivenErrors.ngFormWarning();
                NgFormSelectorWarning_1._ngFormWarning = true;
            }
        }
        NgFormSelectorWarning_1 = NgFormSelectorWarning;
        var NgFormSelectorWarning_1;
        /**
         * Static property used to track whether the deprecation warning for this selector has been sent.
         * Used to support warning config of "once".
         *
         * @internal
         */
        NgFormSelectorWarning._ngFormWarning = false;
        NgFormSelectorWarning = NgFormSelectorWarning_1 = __decorate([
            core.Directive({ selector: 'ngForm' }),
            __param(0, core.Optional()), __param(0, core.Inject(NG_FORM_SELECTOR_WARNING)),
            __metadata("design:paramtypes", [Object])
        ], NgFormSelectorWarning);
        return NgFormSelectorWarning;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var modelGroupProvider = {
        provide: ControlContainer,
        useExisting: core.forwardRef(function () { return NgModelGroup; })
    };
    /**
     * @description
     *
     * Creates and binds a `FormGroup` instance to a DOM element.
     *
     * This directive can only be used as a child of `NgForm` (or in other words,
     * within `<form>` tags).
     *
     * Use this directive if you'd like to create a sub-group within a form. This can
     * come in handy if you want to validate a sub-group of your form separately from
     * the rest of your form, or if some values in your domain model make more sense to
     * consume together in a nested object.
     *
     * Pass in the name you'd like this sub-group to have and it will become the key
     * for the sub-group in the form's full value. You can also export the directive into
     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
     *
     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
     *
     * @ngModule FormsModule
     */
    var NgModelGroup = /** @class */ (function (_super) {
        __extends(NgModelGroup, _super);
        function NgModelGroup(parent, validators, asyncValidators) {
            var _this = _super.call(this) || this;
            _this._parent = parent;
            _this._validators = validators;
            _this._asyncValidators = asyncValidators;
            return _this;
        }
        NgModelGroup_1 = NgModelGroup;
        /** @internal */
        NgModelGroup.prototype._checkParentType = function () {
            if (!(this._parent instanceof NgModelGroup_1) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelGroupParentException();
            }
        };
        var NgModelGroup_1;
        __decorate([
            core.Input('ngModelGroup'),
            __metadata("design:type", String)
        ], NgModelGroup.prototype, "name", void 0);
        NgModelGroup = NgModelGroup_1 = __decorate([
            core.Directive({ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' }),
            __param(0, core.Host()), __param(0, core.SkipSelf()),
            __param(1, core.Optional()), __param(1, core.Self()), __param(1, core.Inject(NG_VALIDATORS)),
            __param(2, core.Optional()), __param(2, core.Self()), __param(2, core.Inject(NG_ASYNC_VALIDATORS)),
            __metadata("design:paramtypes", [ControlContainer, Array, Array])
        ], NgModelGroup);
        return NgModelGroup;
    }(AbstractFormGroupDirective));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var formControlBinding = {
        provide: NgControl,
        useExisting: core.forwardRef(function () { return NgModel; })
    };
    /**
     * `ngModel` forces an additional change detection run when its inputs change:
     * E.g.:
     * ```
     * <div>{{myModel.valid}}</div>
     * <input [(ngModel)]="myValue" #myModel="ngModel">
     * ```
     * I.e. `ngModel` can export itself on the element and then be used in the template.
     * Normally, this would result in expressions before the `input` that use the exported directive
     * to have and old value as they have been
     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
     * detection run.
     *
     * Notes:
     * - this is just one extra run no matter how many `ngModel` have been changed.
     * - this is a general problem when using `exportAs` for directives!
     */
    var resolvedPromise$1 = Promise.resolve(null);
    /**
     * @description
     *
     * Creates a `FormControl` instance from a domain model and binds it
     * to a form control element.
     *
     * The `FormControl` instance will track the value, user interaction, and
     * validation status of the control and keep the view synced with the model. If used
     * within a parent form, the directive will also register itself with the form as a child
     * control.
     *
     * This directive can be used by itself or as part of a larger form. All you need is the
     * `ngModel` selector to activate it.
     *
     * It accepts a domain model as an optional `Input`. If you have a one-way binding
     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
     * the domain model in your class as well.
     *
     * If you wish to inspect the properties of the associated `FormControl` (like
     * validity state), you can also export the directive into a local template variable using
     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
     * will fall through to the control anyway, so you can access them directly. You can see a
     * full list of properties directly available in `AbstractControlDirective`.
     *
     * The following is an example of a simple standalone control using `ngModel`:
     *
     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
     *
     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
     * so that the control can be registered with the parent form under that name.
     *
     * It's worth noting that in the context of a parent form, you often can skip one-way or
     * two-way binding because the parent form will sync the value for you. You can access
     * its properties by exporting it into a local template variable using `ngForm` (ex:
     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
     *
     * If you do need to populate initial values into your form, using a one-way binding for
     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
     * than the domain model's value on submit.
     *
     * Take a look at an example of using `ngModel` within a form:
     *
     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * To see `ngModel` examples with different form control types, see:
     *
     * * Radio buttons: `RadioControlValueAccessor`
     * * Selects: `SelectControlValueAccessor`
     *
     * @ngModule FormsModule
     */
    var NgModel = /** @class */ (function (_super) {
        __extends(NgModel, _super);
        function NgModel(parent, validators, asyncValidators, valueAccessors) {
            var _this = _super.call(this) || this;
            _this.control = new FormControl();
            /** @internal */
            _this._registered = false;
            _this.update = new core.EventEmitter();
            _this._parent = parent;
            _this._rawValidators = validators || [];
            _this._rawAsyncValidators = asyncValidators || [];
            _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
            return _this;
        }
        NgModel.prototype.ngOnChanges = function (changes) {
            this._checkForErrors();
            if (!this._registered)
                this._setUpControl();
            if ('isDisabled' in changes) {
                this._updateDisabled(changes);
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                this._updateValue(this.model);
                this.viewModel = this.model;
            }
        };
        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
        Object.defineProperty(NgModel.prototype, "path", {
            get: function () {
                return this._parent ? controlPath(this.name, this._parent) : [this.name];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "formDirective", {
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "validator", {
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "asyncValidator", {
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        NgModel.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        NgModel.prototype._setUpControl = function () {
            this._setUpdateStrategy();
            this._isStandalone() ? this._setUpStandalone() :
                this.formDirective.addControl(this);
            this._registered = true;
        };
        NgModel.prototype._setUpdateStrategy = function () {
            if (this.options && this.options.updateOn != null) {
                this.control._updateOn = this.options.updateOn;
            }
        };
        NgModel.prototype._isStandalone = function () {
            return !this._parent || !!(this.options && this.options.standalone);
        };
        NgModel.prototype._setUpStandalone = function () {
            setUpControl(this.control, this);
            this.control.updateValueAndValidity({ emitEvent: false });
        };
        NgModel.prototype._checkForErrors = function () {
            if (!this._isStandalone()) {
                this._checkParentType();
            }
            this._checkName();
        };
        NgModel.prototype._checkParentType = function () {
            if (!(this._parent instanceof NgModelGroup) &&
                this._parent instanceof AbstractFormGroupDirective) {
                TemplateDrivenErrors.formGroupNameException();
            }
            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelParentException();
            }
        };
        NgModel.prototype._checkName = function () {
            if (this.options && this.options.name)
                this.name = this.options.name;
            if (!this._isStandalone() && !this.name) {
                TemplateDrivenErrors.missingNameException();
            }
        };
        NgModel.prototype._updateValue = function (value) {
            var _this = this;
            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
        };
        NgModel.prototype._updateDisabled = function (changes) {
            var _this = this;
            var disabledValue = changes['isDisabled'].currentValue;
            var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
            resolvedPromise$1.then(function () {
                if (isDisabled && !_this.control.disabled) {
                    _this.control.disable();
                }
                else if (!isDisabled && _this.control.disabled) {
                    _this.control.enable();
                }
            });
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], NgModel.prototype, "name", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], NgModel.prototype, "isDisabled", void 0);
        __decorate([
            core.Input('ngModel'),
            __metadata("design:type", Object)
        ], NgModel.prototype, "model", void 0);
        __decorate([
            core.Input('ngModelOptions'),
            __metadata("design:type", Object)
        ], NgModel.prototype, "options", void 0);
        __decorate([
            core.Output('ngModelChange'),
            __metadata("design:type", Object)
        ], NgModel.prototype, "update", void 0);
        NgModel = __decorate([
            core.Directive({
                selector: '[ngModel]:not([formControlName]):not([formControl])',
                providers: [formControlBinding],
                exportAs: 'ngModel'
            }),
            __param(0, core.Optional()), __param(0, core.Host()),
            __param(1, core.Optional()), __param(1, core.Self()), __param(1, core.Inject(NG_VALIDATORS)),
            __param(2, core.Optional()), __param(2, core.Self()), __param(2, core.Inject(NG_ASYNC_VALIDATORS)),
            __param(3, core.Optional()), __param(3, core.Self()), __param(3, core.Inject(NG_VALUE_ACCESSOR)),
            __metadata("design:paramtypes", [ControlContainer,
                Array,
                Array, Array])
        ], NgModel);
        return NgModel;
    }(NgControl));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Token to provide to turn off the ngModel warning on formControl and formControlName.
     */
    var NG_MODEL_WITH_FORM_CONTROL_WARNING = new core.InjectionToken('NgModelWithFormControlWarning');
    var formControlBinding$1 = {
        provide: NgControl,
        useExisting: core.forwardRef(function () { return FormControlDirective; })
    };
    /**
     * @description
     *
     * Syncs a standalone `FormControl` instance to a form control element.
     *
     * This directive ensures that any values written to the `FormControl`
     * instance programmatically will be written to the DOM element (model -> view). Conversely,
     * any values written to the DOM element through user input will be reflected in the
     * `FormControl` instance (view -> model).
     *
     * @usageNotes
     * Use this directive if you'd like to create and manage a `FormControl` instance directly.
     * Simply create a `FormControl`, save it to your component class, and pass it into the
     * `FormControlDirective`.
     *
     * This directive is designed to be used as a standalone control.  Unlike `FormControlName`,
     * it does not require that your `FormControl` instance be part of any parent
     * `FormGroup`, and it won't be registered to any `FormGroupDirective` that
     * exists above it.
     *
     * **Get the value**: the `value` property is always synced and available on the
     * `FormControl` instance. See a full list of available properties in
     * `AbstractControl`.
     *
     * **Set the value**: You can pass in an initial value when instantiating the `FormControl`,
     * or you can set it programmatically later using {@link AbstractControl#setValue setValue} or
     * {@link AbstractControl#patchValue patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the control, you can
     * subscribe to the {@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
     * {@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
     *
     * ### Use with ngModel
     *
     * Support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
     *
     * Now deprecated:
     *
     * ```html
     * <input [formControl]="control" [(ngModel)]="value">
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * This has been deprecated for a few reasons. First, developers have found this pattern
     * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
     * an input/output property named `ngModel` on the reactive form directive that simply
     * approximates (some of) its behavior. Specifically, it allows getting/setting the value
     * and intercepting value events. However, some of `ngModel`'s other features - like
     * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
     * which has understandably caused some confusion.
     *
     * In addition, this pattern mixes template-driven and reactive forms strategies, which
     * we generally don't recommend because it doesn't take advantage of the full benefits of
     * either strategy. Setting the value in the template violates the template-agnostic
     * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
     * the class removes the convenience of defining forms in the template.
     *
     * To update your code before v7, you'll want to decide whether to stick with reactive form
     * directives (and get/set values using reactive forms patterns) or switch over to
     * template-driven directives.
     *
     * After (choice 1 - use reactive forms):
     *
     * ```html
     * <input [formControl]="control">
     * ```
     *
     * ```ts
     * this.control.setValue('some value');
     * ```
     *
     * After (choice 2 - use template-driven forms):
     *
     * ```html
     * <input [(ngModel)]="value">
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * By default, when you use this pattern, you will see a deprecation warning once in dev
     * mode. You can choose to silence this warning by providing a config for
     * `ReactiveFormsModule` at import time:
     *
     * ```ts
     * imports: [
     *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
     * ]
     * ```
     *
     * Alternatively, you can choose to surface a separate warning for each instance of this
     * pattern with a config value of `"always"`. This may help to track down where in the code
     * the pattern is being used as the code is being updated.
     *
     * @ngModule ReactiveFormsModule
     */
    var FormControlDirective = /** @class */ (function (_super) {
        __extends(FormControlDirective, _super);
        function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
            var _this = _super.call(this) || this;
            _this._ngModelWarningConfig = _ngModelWarningConfig;
            /** @deprecated as of v6 */
            _this.update = new core.EventEmitter();
            /**
             * Instance property used to track whether an ngModel warning has been sent out for this
             * particular FormControlDirective instance. Used to support warning config of "always".
             *
             * @internal
             */
            _this._ngModelWarningSent = false;
            _this._rawValidators = validators || [];
            _this._rawAsyncValidators = asyncValidators || [];
            _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
            return _this;
        }
        FormControlDirective_1 = FormControlDirective;
        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
            enumerable: true,
            configurable: true
        });
        FormControlDirective.prototype.ngOnChanges = function (changes) {
            if (this._isControlChanged(changes)) {
                setUpControl(this.form, this);
                if (this.control.disabled && this.valueAccessor.setDisabledState) {
                    this.valueAccessor.setDisabledState(true);
                }
                this.form.updateValueAndValidity({ emitEvent: false });
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                _ngModelWarning('formControl', FormControlDirective_1, this, this._ngModelWarningConfig);
                this.form.setValue(this.model);
                this.viewModel = this.model;
            }
        };
        Object.defineProperty(FormControlDirective.prototype, "path", {
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "validator", {
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "control", {
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        FormControlDirective.prototype._isControlChanged = function (changes) {
            return changes.hasOwnProperty('form');
        };
        var FormControlDirective_1;
        /**
         * Static property used to track whether any ngModel warnings have been sent across
         * all instances of FormControlDirective. Used to support warning config of "once".
         *
         * @internal
         */
        FormControlDirective._ngModelWarningSentOnce = false;
        __decorate([
            core.Input('formControl'),
            __metadata("design:type", FormControl)
        ], FormControlDirective.prototype, "form", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], FormControlDirective.prototype, "isDisabled", null);
        __decorate([
            core.Input('ngModel'),
            __metadata("design:type", Object)
        ], FormControlDirective.prototype, "model", void 0);
        __decorate([
            core.Output('ngModelChange'),
            __metadata("design:type", Object)
        ], FormControlDirective.prototype, "update", void 0);
        FormControlDirective = FormControlDirective_1 = __decorate([
            core.Directive({ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' }),
            __param(0, core.Optional()), __param(0, core.Self()), __param(0, core.Inject(NG_VALIDATORS)),
            __param(1, core.Optional()), __param(1, core.Self()), __param(1, core.Inject(NG_ASYNC_VALIDATORS)),
            __param(2, core.Optional()), __param(2, core.Self()), __param(2, core.Inject(NG_VALUE_ACCESSOR)),
            __param(3, core.Optional()), __param(3, core.Inject(NG_MODEL_WITH_FORM_CONTROL_WARNING)),
            __metadata("design:paramtypes", [Array,
                Array, Array, Object])
        ], FormControlDirective);
        return FormControlDirective;
    }(NgControl));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var formDirectiveProvider$1 = {
        provide: ControlContainer,
        useExisting: core.forwardRef(function () { return FormGroupDirective; })
    };
    /**
     * @description
     *
     * Binds an existing `FormGroup` to a DOM element.
     *
     * This directive accepts an existing `FormGroup` instance. It will then use this
     * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
     * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
     * and `FormArrayName` directives.
     *
     * @usageNotes
     * **Set value**: You can set the form's initial value when instantiating the
     * `FormGroup`, or you can set it programmatically later using the `FormGroup`'s
     * {@link AbstractControl#setValue setValue} or {@link AbstractControl#patchValue patchValue}
     * methods.
     *
     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
     * to the `FormGroup`'s {@link AbstractControl#valueChanges valueChanges} event.  You can also
     * listen to its {@link AbstractControl#statusChanges statusChanges} event to be notified when the
     * validation status is re-calculated.
     *
     * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
     * submission event.
     *
     * ### Example
     *
     * In this example, we create form controls for first name and last name.
     *
     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * @ngModule ReactiveFormsModule
     */
    var FormGroupDirective = /** @class */ (function (_super) {
        __extends(FormGroupDirective, _super);
        function FormGroupDirective(_validators, _asyncValidators) {
            var _this = _super.call(this) || this;
            _this._validators = _validators;
            _this._asyncValidators = _asyncValidators;
            _this.submitted = false;
            _this.directives = [];
            _this.form = null;
            _this.ngSubmit = new core.EventEmitter();
            return _this;
        }
        FormGroupDirective.prototype.ngOnChanges = function (changes) {
            this._checkFormPresent();
            if (changes.hasOwnProperty('form')) {
                this._updateValidators();
                this._updateDomValue();
                this._updateRegistrations();
            }
        };
        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "control", {
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "path", {
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        FormGroupDirective.prototype.addControl = function (dir) {
            var ctrl = this.form.get(dir.path);
            setUpControl(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
            this.directives.push(dir);
            return ctrl;
        };
        FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
        FormGroupDirective.prototype.removeControl = function (dir) { removeDir(this.directives, dir); };
        FormGroupDirective.prototype.addFormGroup = function (dir) {
            var ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        };
        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
        FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
        FormGroupDirective.prototype.addFormArray = function (dir) {
            var ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        };
        FormGroupDirective.prototype.removeFormArray = function (dir) { };
        FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
        FormGroupDirective.prototype.updateModel = function (dir, value) {
            var ctrl = this.form.get(dir.path);
            ctrl.setValue(value);
        };
        FormGroupDirective.prototype.onSubmit = function ($event) {
            this.submitted = true;
            syncPendingControls(this.form, this.directives);
            this.ngSubmit.emit($event);
            return false;
        };
        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
        FormGroupDirective.prototype.resetForm = function (value) {
            if (value === void 0) { value = undefined; }
            this.form.reset(value);
            this.submitted = false;
        };
        /** @internal */
        FormGroupDirective.prototype._updateDomValue = function () {
            var _this = this;
            this.directives.forEach(function (dir) {
                var newCtrl = _this.form.get(dir.path);
                if (dir.control !== newCtrl) {
                    cleanUpControl(dir.control, dir);
                    if (newCtrl)
                        setUpControl(newCtrl, dir);
                    dir.control = newCtrl;
                }
            });
            this.form._updateTreeValidity({ emitEvent: false });
        };
        FormGroupDirective.prototype._updateRegistrations = function () {
            var _this = this;
            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
            if (this._oldForm)
                this._oldForm._registerOnCollectionChange(function () { });
            this._oldForm = this.form;
        };
        FormGroupDirective.prototype._updateValidators = function () {
            var sync = composeValidators(this._validators);
            this.form.validator = Validators.compose([this.form.validator, sync]);
            var async$$1 = composeAsyncValidators(this._asyncValidators);
            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async$$1]);
        };
        FormGroupDirective.prototype._checkFormPresent = function () {
            if (!this.form) {
                ReactiveErrors.missingFormException();
            }
        };
        __decorate([
            core.Input('formGroup'),
            __metadata("design:type", FormGroup)
        ], FormGroupDirective.prototype, "form", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], FormGroupDirective.prototype, "ngSubmit", void 0);
        FormGroupDirective = __decorate([
            core.Directive({
                selector: '[formGroup]',
                providers: [formDirectiveProvider$1],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                exportAs: 'ngForm'
            }),
            __param(0, core.Optional()), __param(0, core.Self()), __param(0, core.Inject(NG_VALIDATORS)),
            __param(1, core.Optional()), __param(1, core.Self()), __param(1, core.Inject(NG_ASYNC_VALIDATORS)),
            __metadata("design:paramtypes", [Array, Array])
        ], FormGroupDirective);
        return FormGroupDirective;
    }(ControlContainer));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var formGroupNameProvider = {
        provide: ControlContainer,
        useExisting: core.forwardRef(function () { return FormGroupName; })
    };
    /**
     * @description
     *
     * Syncs a nested `FormGroup` to a DOM element.
     *
     * This directive can only be used with a parent `FormGroupDirective` (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested `FormGroup` you want to link, and
     * will look for a `FormGroup` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * Nested form groups can come in handy when you want to validate a sub-group of a
     * form separately from the rest or when you'd like to group the values of certain
     * controls into their own nested object.
     *
     * @usageNotes
     * **Access the group**: You can access the associated `FormGroup` using the
     * {@link AbstractControl#get get} method. Ex: `this.form.get('name')`.
     *
     * You can also access individual controls within the group using dot syntax.
     * Ex: `this.form.get('name.first')`
     *
     * **Get the value**: the `value` property is always synced and available on the
     * `FormGroup`. See a full list of available properties in `AbstractControl`.
     *
     * **Set the value**: You can set an initial value for each child control when instantiating
     * the `FormGroup`, or you can set it programmatically later using
     * {@link AbstractControl#setValue setValue} or {@link AbstractControl#patchValue patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the group, you can
     * subscribe to the {@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
     * {@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
     *
     * @ngModule ReactiveFormsModule
     */
    var FormGroupName = /** @class */ (function (_super) {
        __extends(FormGroupName, _super);
        function FormGroupName(parent, validators, asyncValidators) {
            var _this = _super.call(this) || this;
            _this._parent = parent;
            _this._validators = validators;
            _this._asyncValidators = asyncValidators;
            return _this;
        }
        /** @internal */
        FormGroupName.prototype._checkParentType = function () {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.groupParentException();
            }
        };
        __decorate([
            core.Input('formGroupName'),
            __metadata("design:type", String)
        ], FormGroupName.prototype, "name", void 0);
        FormGroupName = __decorate([
            core.Directive({ selector: '[formGroupName]', providers: [formGroupNameProvider] }),
            __param(0, core.Optional()), __param(0, core.Host()), __param(0, core.SkipSelf()),
            __param(1, core.Optional()), __param(1, core.Self()), __param(1, core.Inject(NG_VALIDATORS)),
            __param(2, core.Optional()), __param(2, core.Self()), __param(2, core.Inject(NG_ASYNC_VALIDATORS)),
            __metadata("design:paramtypes", [ControlContainer, Array, Array])
        ], FormGroupName);
        return FormGroupName;
    }(AbstractFormGroupDirective));
    var formArrayNameProvider = {
        provide: ControlContainer,
        useExisting: core.forwardRef(function () { return FormArrayName; })
    };
    /**
     * @description
     *
     * Syncs a nested `FormArray` to a DOM element.
     *
     * This directive is designed to be used with a parent `FormGroupDirective` (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested `FormArray` you want to link, and
     * will look for a `FormArray` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * Nested form arrays can come in handy when you have a group of form controls but
     * you're not sure how many there will be. Form arrays allow you to create new
     * form controls dynamically.
     *
     * @usageNotes
     * **Access the array**: You can access the associated `FormArray` using the
     * {@link AbstractControl#get get} method on the parent `FormGroup`.
     * Ex: `this.form.get('cities')`.
     *
     * **Get the value**: the `value` property is always synced and available on the
     * `FormArray`. See a full list of available properties in `AbstractControl`.
     *
     * **Set the value**: You can set an initial value for each child control when instantiating
     * the `FormArray`, or you can set the value programmatically later using the
     * `FormArray`'s {@link AbstractControl#setValue setValue} or
     * {@link AbstractControl#patchValue patchValue} methods.
     *
     * **Listen to value**: If you want to listen to changes in the value of the array, you can
     * subscribe to the `FormArray`'s {@link AbstractControl#valueChanges valueChanges} event.
     * You can also listen to its {@link AbstractControl#statusChanges statusChanges} event to be
     * notified when the validation status is re-calculated.
     *
     * **Add new controls**: You can add new controls to the `FormArray` dynamically by calling
     * its {@link FormArray#push push} method.
     * Ex: `this.form.get('cities').push(new FormControl());`
     *
     * ### Example
     *
     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
     *
     * @ngModule ReactiveFormsModule
     */
    var FormArrayName = /** @class */ (function (_super) {
        __extends(FormArrayName, _super);
        function FormArrayName(parent, validators, asyncValidators) {
            var _this = _super.call(this) || this;
            _this._parent = parent;
            _this._validators = validators;
            _this._asyncValidators = asyncValidators;
            return _this;
        }
        FormArrayName.prototype.ngOnInit = function () {
            this._checkParentType();
            this.formDirective.addFormArray(this);
        };
        FormArrayName.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeFormArray(this);
            }
        };
        Object.defineProperty(FormArrayName.prototype, "control", {
            get: function () { return this.formDirective.getFormArray(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "formDirective", {
            get: function () {
                return this._parent ? this._parent.formDirective : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "path", {
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "validator", {
            get: function () { return composeValidators(this._validators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
            get: function () {
                return composeAsyncValidators(this._asyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        FormArrayName.prototype._checkParentType = function () {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.arrayParentException();
            }
        };
        __decorate([
            core.Input('formArrayName'),
            __metadata("design:type", String)
        ], FormArrayName.prototype, "name", void 0);
        FormArrayName = __decorate([
            core.Directive({ selector: '[formArrayName]', providers: [formArrayNameProvider] }),
            __param(0, core.Optional()), __param(0, core.Host()), __param(0, core.SkipSelf()),
            __param(1, core.Optional()), __param(1, core.Self()), __param(1, core.Inject(NG_VALIDATORS)),
            __param(2, core.Optional()), __param(2, core.Self()), __param(2, core.Inject(NG_ASYNC_VALIDATORS)),
            __metadata("design:paramtypes", [ControlContainer, Array, Array])
        ], FormArrayName);
        return FormArrayName;
    }(ControlContainer));
    function _hasInvalidParent(parent) {
        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
            !(parent instanceof FormArrayName);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var controlNameBinding = {
        provide: NgControl,
        useExisting: core.forwardRef(function () { return FormControlName; })
    };
    /**
     * @description
     *
     * Syncs a `FormControl` in an existing `FormGroup` to a form control
     * element by name.
     *
     * This directive ensures that any values written to the `FormControl`
     * instance programmatically will be written to the DOM element (model -> view). Conversely,
     * any values written to the DOM element through user input will be reflected in the
     * `FormControl` instance (view -> model).
     *
     * @usageNotes
     * This directive is designed to be used with a parent `FormGroupDirective` (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the `FormControl` instance you want to
     * link, and will look for a `FormControl` registered with that name in the
     * closest `FormGroup` or `FormArray` above it.
     *
     * **Access the control**: You can access the `FormControl` associated with
     * this directive by using the {@link AbstractControl#get get} method.
     * Ex: `this.form.get('first');`
     *
     * **Get value**: the `value` property is always synced and available on the `FormControl`.
     * See a full list of available properties in `AbstractControl`.
     *
     *  **Set value**: You can set an initial value for the control when instantiating the
     *  `FormControl`, or you can set it programmatically later using
     *  {@link AbstractControl#setValue setValue} or {@link AbstractControl#patchValue patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the control, you can
     * subscribe to the {@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
     * {@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * In this example, we create form controls for first name and last name.
     *
     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * To see `formControlName` examples with different form control types, see:
     *
     * * Radio buttons: `RadioControlValueAccessor`
     * * Selects: `SelectControlValueAccessor`
     *
     * ### Use with ngModel
     *
     * Support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
     *
     * Now deprecated:
     *
     * ```html
     * <form [formGroup]="form">
     *   <input formControlName="first" [(ngModel)]="value">
     * </form>
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * This has been deprecated for a few reasons. First, developers have found this pattern
     * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
     * an input/output property named `ngModel` on the reactive form directive that simply
     * approximates (some of) its behavior. Specifically, it allows getting/setting the value
     * and intercepting value events. However, some of `ngModel`'s other features - like
     * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
     * which has understandably caused some confusion.
     *
     * In addition, this pattern mixes template-driven and reactive forms strategies, which
     * we generally don't recommend because it doesn't take advantage of the full benefits of
     * either strategy. Setting the value in the template violates the template-agnostic
     * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
     * the class removes the convenience of defining forms in the template.
     *
     * To update your code before v7, you'll want to decide whether to stick with reactive form
     * directives (and get/set values using reactive forms patterns) or switch over to
     * template-driven directives.
     *
     * After (choice 1 - use reactive forms):
     *
     * ```html
     * <form [formGroup]="form">
     *   <input formControlName="first">
     * </form>
     * ```
     *
     * ```ts
     * this.form.get('first').setValue('some value');
     * ```
     *
     * After (choice 2 - use template-driven forms):
     *
     * ```html
     * <input [(ngModel)]="value">
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * By default, when you use this pattern, you will see a deprecation warning once in dev
     * mode. You can choose to silence this warning by providing a config for
     * `ReactiveFormsModule` at import time:
     *
     * ```ts
     * imports: [
     *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
     * ]
     * ```
     *
     * Alternatively, you can choose to surface a separate warning for each instance of this
     * pattern with a config value of `"always"`. This may help to track down where in the code
     * the pattern is being used as the code is being updated.
     *
     * @ngModule ReactiveFormsModule
     */
    var FormControlName = /** @class */ (function (_super) {
        __extends(FormControlName, _super);
        function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
            var _this = _super.call(this) || this;
            _this._ngModelWarningConfig = _ngModelWarningConfig;
            _this._added = false;
            /** @deprecated as of v6 */
            _this.update = new core.EventEmitter();
            /**
             * Instance property used to track whether an ngModel warning has been sent out for this
             * particular FormControlName instance. Used to support warning config of "always".
             *
             * @internal
             */
            _this._ngModelWarningSent = false;
            _this._parent = parent;
            _this._rawValidators = validators || [];
            _this._rawAsyncValidators = asyncValidators || [];
            _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
            return _this;
        }
        FormControlName_1 = FormControlName;
        Object.defineProperty(FormControlName.prototype, "isDisabled", {
            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
            enumerable: true,
            configurable: true
        });
        FormControlName.prototype.ngOnChanges = function (changes) {
            if (!this._added)
                this._setUpControl();
            if (isPropertyUpdated(changes, this.viewModel)) {
                _ngModelWarning('formControlName', FormControlName_1, this, this._ngModelWarningConfig);
                this.viewModel = this.model;
                this.formDirective.updateModel(this, this.model);
            }
        };
        FormControlName.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeControl(this);
            }
        };
        FormControlName.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        Object.defineProperty(FormControlName.prototype, "path", {
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "formDirective", {
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "validator", {
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        FormControlName.prototype._checkParentType = function () {
            if (!(this._parent instanceof FormGroupName) &&
                this._parent instanceof AbstractFormGroupDirective) {
                ReactiveErrors.ngModelGroupException();
            }
            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
                !(this._parent instanceof FormArrayName)) {
                ReactiveErrors.controlParentException();
            }
        };
        FormControlName.prototype._setUpControl = function () {
            this._checkParentType();
            this.control = this.formDirective.addControl(this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this._added = true;
        };
        var FormControlName_1;
        /**
         * Static property used to track whether any ngModel warnings have been sent across
         * all instances of FormControlName. Used to support warning config of "once".
         *
         * @internal
         */
        FormControlName._ngModelWarningSentOnce = false;
        __decorate([
            core.Input('formControlName'),
            __metadata("design:type", String)
        ], FormControlName.prototype, "name", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], FormControlName.prototype, "isDisabled", null);
        __decorate([
            core.Input('ngModel'),
            __metadata("design:type", Object)
        ], FormControlName.prototype, "model", void 0);
        __decorate([
            core.Output('ngModelChange'),
            __metadata("design:type", Object)
        ], FormControlName.prototype, "update", void 0);
        FormControlName = FormControlName_1 = __decorate([
            core.Directive({ selector: '[formControlName]', providers: [controlNameBinding] }),
            __param(0, core.Optional()), __param(0, core.Host()), __param(0, core.SkipSelf()),
            __param(1, core.Optional()), __param(1, core.Self()), __param(1, core.Inject(NG_VALIDATORS)),
            __param(2, core.Optional()), __param(2, core.Self()), __param(2, core.Inject(NG_ASYNC_VALIDATORS)),
            __param(3, core.Optional()), __param(3, core.Self()), __param(3, core.Inject(NG_VALUE_ACCESSOR)),
            __param(4, core.Optional()), __param(4, core.Inject(NG_MODEL_WITH_FORM_CONTROL_WARNING)),
            __metadata("design:paramtypes", [ControlContainer,
                Array,
                Array, Array, Object])
        ], FormControlName);
        return FormControlName;
    }(NgControl));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return RequiredValidator; }),
        multi: true
    };
    var CHECKBOX_REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return CheckboxRequiredValidator; }),
        multi: true
    };
    /**
     * A Directive that adds the `required` validator to any controls marked with the
     * `required` attribute, via the `NG_VALIDATORS` binding.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * <input name="fullName" ngModel required>
     * ```
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var RequiredValidator = /** @class */ (function () {
        function RequiredValidator() {
        }
        Object.defineProperty(RequiredValidator.prototype, "required", {
            get: function () { return this._required; },
            set: function (value) {
                this._required = value != null && value !== false && "" + value !== 'false';
                if (this._onChange)
                    this._onChange();
            },
            enumerable: true,
            configurable: true
        });
        RequiredValidator.prototype.validate = function (control) {
            return this.required ? Validators.required(control) : null;
        };
        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], RequiredValidator.prototype, "required", null);
        RequiredValidator = __decorate([
            core.Directive({
                selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                providers: [REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            })
        ], RequiredValidator);
        return RequiredValidator;
    }());
    /**
     * A Directive that adds the `required` validator to checkbox controls marked with the
     * `required` attribute, via the `NG_VALIDATORS` binding.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * <input type="checkbox" name="active" ngModel required>
     * ```
     *
     * @experimental
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var CheckboxRequiredValidator = /** @class */ (function (_super) {
        __extends(CheckboxRequiredValidator, _super);
        function CheckboxRequiredValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CheckboxRequiredValidator.prototype.validate = function (control) {
            return this.required ? Validators.requiredTrue(control) : null;
        };
        CheckboxRequiredValidator = __decorate([
            core.Directive({
                selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                providers: [CHECKBOX_REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            })
        ], CheckboxRequiredValidator);
        return CheckboxRequiredValidator;
    }(RequiredValidator));
    /**
     * Provider which adds `EmailValidator` to `NG_VALIDATORS`.
     */
    var EMAIL_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return EmailValidator; }),
        multi: true
    };
    /**
     * A Directive that adds the `email` validator to controls marked with the
     * `email` attribute, via the `NG_VALIDATORS` binding.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * <input type="email" name="email" ngModel email>
     * <input type="email" name="email" ngModel email="true">
     * <input type="email" name="email" ngModel [email]="true">
     * ```
     *
     * @experimental
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        Object.defineProperty(EmailValidator.prototype, "email", {
            set: function (value) {
                this._enabled = value === '' || value === true || value === 'true';
                if (this._onChange)
                    this._onChange();
            },
            enumerable: true,
            configurable: true
        });
        EmailValidator.prototype.validate = function (control) {
            return this._enabled ? Validators.email(control) : null;
        };
        EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], EmailValidator.prototype, "email", null);
        EmailValidator = __decorate([
            core.Directive({
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            })
        ], EmailValidator);
        return EmailValidator;
    }());
    /**
     * Provider which adds `MinLengthValidator` to `NG_VALIDATORS`.
     *
     * @usageNotes
     * ### Example:
     *
     * {@example common/forms/ts/validators/validators.ts region='min'}
     */
    var MIN_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MinLengthValidator; }),
        multi: true
    };
    /**
     * A directive which installs the `MinLengthValidator` for any `formControlName`,
     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var MinLengthValidator = /** @class */ (function () {
        function MinLengthValidator() {
        }
        MinLengthValidator.prototype.ngOnChanges = function (changes) {
            if ('minlength' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        MinLengthValidator.prototype.validate = function (control) {
            return this.minlength == null ? null : this._validator(control);
        };
        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        MinLengthValidator.prototype._createValidator = function () {
            this._validator = Validators.minLength(parseInt(this.minlength, 10));
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], MinLengthValidator.prototype, "minlength", void 0);
        MinLengthValidator = __decorate([
            core.Directive({
                selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                providers: [MIN_LENGTH_VALIDATOR],
                host: { '[attr.minlength]': 'minlength ? minlength : null' }
            })
        ], MinLengthValidator);
        return MinLengthValidator;
    }());
    /**
     * Provider which adds `MaxLengthValidator` to `NG_VALIDATORS`.
     *
     * @usageNotes
     * ### Example:
     *
     * {@example common/forms/ts/validators/validators.ts region='max'}
     */
    var MAX_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MaxLengthValidator; }),
        multi: true
    };
    /**
     * A directive which installs the `MaxLengthValidator` for any `formControlName`,
     * `formControl`, or control with `ngModel` that also has a `maxlength` attribute.
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var MaxLengthValidator = /** @class */ (function () {
        function MaxLengthValidator() {
        }
        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
            if ('maxlength' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        MaxLengthValidator.prototype.validate = function (control) {
            return this.maxlength != null ? this._validator(control) : null;
        };
        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        MaxLengthValidator.prototype._createValidator = function () {
            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], MaxLengthValidator.prototype, "maxlength", void 0);
        MaxLengthValidator = __decorate([
            core.Directive({
                selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                providers: [MAX_LENGTH_VALIDATOR],
                host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
            })
        ], MaxLengthValidator);
        return MaxLengthValidator;
    }());
    var PATTERN_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return PatternValidator; }),
        multi: true
    };
    /**
     * A Directive that adds the `pattern` validator to any controls marked with the
     * `pattern` attribute, via the `NG_VALIDATORS` binding. Uses attribute value
     * as the regex to validate Control value against.  Follows pattern attribute
     * semantics; i.e. regex must match entire Control value.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
     * ```
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */
    var PatternValidator = /** @class */ (function () {
        function PatternValidator() {
        }
        PatternValidator.prototype.ngOnChanges = function (changes) {
            if ('pattern' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        PatternValidator.prototype.validate = function (control) { return this._validator(control); };
        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], PatternValidator.prototype, "pattern", void 0);
        PatternValidator = __decorate([
            core.Directive({
                selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                providers: [PATTERN_VALIDATOR],
                host: { '[attr.pattern]': 'pattern ? pattern : null' }
            })
        ], PatternValidator);
        return PatternValidator;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     * Creates an `AbstractControl` from a user-specified configuration.
     *
     * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
     * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
     * forms.
     *
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     *
     */
    var FormBuilder = /** @class */ (function () {
        function FormBuilder() {
        }
        /**
         * @description
         * Construct a new `FormGroup` instance.
         *
         * @param controlsConfig A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param extra An object of configuration options for the `FormGroup`.
         * * `validator`: A synchronous validator function, or an array of validator functions
         * * `asyncValidator`: A single async validator or array of async validator functions
         *
         */
        FormBuilder.prototype.group = function (controlsConfig, extra) {
            if (extra === void 0) { extra = null; }
            var controls = this._reduceControls(controlsConfig);
            var validator = extra != null ? extra['validator'] : null;
            var asyncValidator = extra != null ? extra['asyncValidator'] : null;
            return new FormGroup(controls, validator, asyncValidator);
        };
        /**
         * @description
         * Construct a new `FormControl` instance.
         *
         * @param formState Initializes the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param validator A synchronous validator function, or an array of synchronous validator
         * functions.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         * @usageNotes
         *
         * ### Initialize a control as disabled
         *
         * The following example returns a control with an initial value in a disabled state.
         *
         * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
         *   linenums="false" region="disabled-control">
         * </code-example>
         *
         */
        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
            return new FormControl(formState, validator, asyncValidator);
        };
        /**
         * @description
         * Construct a new `FormArray` instance.
         *
         * @param controlsConfig An array of child controls. The key for each child control is its index
         * in the array.
         *
         * @param validator A synchronous validator function, or an array of synchronous validator
         * functions.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         */
        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
            var _this = this;
            var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
            return new FormArray(controls, validator, asyncValidator);
        };
        /** @internal */
        FormBuilder.prototype._reduceControls = function (controlsConfig) {
            var _this = this;
            var controls = {};
            Object.keys(controlsConfig).forEach(function (controlName) {
                controls[controlName] = _this._createControl(controlsConfig[controlName]);
            });
            return controls;
        };
        /** @internal */
        FormBuilder.prototype._createControl = function (controlConfig) {
            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
                controlConfig instanceof FormArray) {
                return controlConfig;
            }
            else if (Array.isArray(controlConfig)) {
                var value = controlConfig[0];
                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
                return this.control(value, validator, asyncValidator);
            }
            else {
                return this.control(controlConfig);
            }
        };
        FormBuilder = __decorate([
            core.Injectable()
        ], FormBuilder);
        return FormBuilder;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var VERSION$1 = new core.Version('7.0.0');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * Adds `novalidate` attribute to all forms by default.
     *
     * `novalidate` is used to disable browser's native form validation.
     *
     * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
     *
     * ```
     * <form ngNativeValidate></form>
     * ```
     *
     * @experimental
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     */
    var NgNoValidate = /** @class */ (function () {
        function NgNoValidate() {
        }
        NgNoValidate = __decorate([
            core.Directive({
                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                host: { 'novalidate': '' },
            })
        ], NgNoValidate);
        return NgNoValidate;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SHARED_FORM_DIRECTIVES = [
        NgNoValidate,
        NgSelectOption,
        NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
        EmailValidator,
    ];
    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
    /**
     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
     */
    var InternalFormsSharedModule = /** @class */ (function () {
        function InternalFormsSharedModule() {
        }
        InternalFormsSharedModule = __decorate([
            core.NgModule({
                declarations: SHARED_FORM_DIRECTIVES,
                exports: SHARED_FORM_DIRECTIVES,
            })
        ], InternalFormsSharedModule);
        return InternalFormsSharedModule;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Exports the required providers and directives for template-driven forms,
     * making them available for import by NgModules that import this module.
     * @see [Forms](guide/forms)
     *
     * @see [Forms Guide](/guide/forms)
     */
    var FormsModule = /** @class */ (function () {
        function FormsModule() {
        }
        FormsModule_1 = FormsModule;
        /**
         * @description
         * Provides options for configuring the template-driven forms module.
         *
         * @param opts An object of configuration options
         * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
         * `ngForm` selector is used.
         */
        FormsModule.withConfig = function (opts) {
            return {
                ngModule: FormsModule_1,
                providers: [{ provide: NG_FORM_SELECTOR_WARNING, useValue: opts.warnOnDeprecatedNgFormSelector }]
            };
        };
        var FormsModule_1;
        FormsModule = FormsModule_1 = __decorate([
            core.NgModule({
                declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                providers: [RadioControlRegistry],
                exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
            })
        ], FormsModule);
        return FormsModule;
    }());
    /**
     * Exports the required infrastructure and directives for reactive forms,
     * making them available for import by NgModules that import this module.
     * @see [Forms](guide/reactive-forms)
     *
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     *
     */
    var ReactiveFormsModule = /** @class */ (function () {
        function ReactiveFormsModule() {
        }
        ReactiveFormsModule_1 = ReactiveFormsModule;
        /**
         * @description
         * Provides options for configuring the reactive forms module.
         *
         * @param opts An object of configuration options
         * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
         * binding is used with reactive form directives.
         */
        ReactiveFormsModule.withConfig = function (opts) {
            return {
                ngModule: ReactiveFormsModule_1,
                providers: [{
                        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                        useValue: opts.warnOnNgModelWithFormControl
                    }]
            };
        };
        var ReactiveFormsModule_1;
        ReactiveFormsModule = ReactiveFormsModule_1 = __decorate([
            core.NgModule({
                declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                providers: [FormBuilder, RadioControlRegistry],
                exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
            })
        ], ReactiveFormsModule);
        return ReactiveFormsModule;
    }());

    /**
     * @license ngx-ion-simple-mask
     * MIT license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SimpleMask = /** @class */ (function () {
        function SimpleMask() {
            this.patterns = {
                '9': new RegExp('[0-9]'),
                'a': new RegExp('[a-z]'),
                'A': new RegExp('[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ]'),
                'x': new RegExp('[a-zA-Z]'),
                '*': new RegExp('[a-zA-Z0-9]'),
                '~': new RegExp('[-\+]')
            };
        }
        /**
         * set new patterns
         * @param patterns new patterns
         * @param clear true if to clear old patterns
         */
        /**
         * set new patterns
         * @param {?} patterns new patterns
         * @param {?=} clear true if to clear old patterns
         * @return {?}
         */
        SimpleMask.prototype.setPatterns = /**
         * set new patterns
         * @param {?} patterns new patterns
         * @param {?=} clear true if to clear old patterns
         * @return {?}
         */
        function (patterns, clear) {
            if (clear === void 0) { clear = false; }
            if (!patterns) {
                return;
            }
            try {
                JSON.parse(JSON.stringify(patterns));
            }
            catch (_a) {
                throw new Error('Invalid patterns object');
            }
            if (clear) {
                this.patterns = {};
            }
            for (var key in patterns) {
                if (patterns.hasOwnProperty(key)) {
                    this.patterns[key] = new RegExp(patterns[key]);
                }
            }
        };
        /**
         * checks if the char is a pattern, that is, if is a pattern
         * @param char value to check
         * @returns true is a pattern, false if is not
         */
        /**
         * checks if the char is a pattern, that is, if is a pattern
         * @param {?} char value to check
         * @return {?} true is a pattern, false if is not
         */
        SimpleMask.prototype.isPattern = /**
         * checks if the char is a pattern, that is, if is a pattern
         * @param {?} char value to check
         * @return {?} true is a pattern, false if is not
         */
        function (char) {
            for (var key in this.patterns) {
                if (this.patterns.hasOwnProperty(key) && key === char) {
                    return true;
                }
            }
            return false;
        };
        /**
         * Fits the value with the mask and return a formatted value
         * @param value value to fit
         * @returns formatted value
         */
        /**
         * Fits the value with the mask and return a formatted value
         * @param {?} value value to fit
         * @return {?} formatted value
         */
        SimpleMask.prototype.fitToMask = /**
         * Fits the value with the mask and return a formatted value
         * @param {?} value value to fit
         * @return {?} formatted value
         */
        function (value) {
            /** @type {?} */
            var newValue = '';
            // value size adjust to mask size
            /** @type {?} */
            var size = this.mask.replace(/\\(?!\\)/g, '').length;
            value = value.substring(0, size);
            for (var i = 0, j = 0; j < this.mask.length && i < value.length; i++, j++) {
                // ignore next special char
                if (this.mask[j] === '\\') {
                    newValue += this.mask[j + 1];
                    j++;
                    continue;
                }
                // test special char
                if (this.isPattern(this.mask[j])) {
                    if (this.patterns[this.mask[j]].test(value[i])) {
                        newValue += value[i];
                    }
                    else {
                        return newValue;
                    }
                }
                else {
                    newValue += this.mask[j];
                    if (this.mask[j] !== value[i]) {
                        i--;
                    }
                }
            }
            return newValue;
        };
        return SimpleMask;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SimpleMaskDirective = /** @class */ (function (_super) {
        __extends(SimpleMaskDirective, _super);
        function SimpleMaskDirective(renderer, ngControl) {
            var _this = _super.call(this) || this;
            _this.renderer = renderer;
            _this.ngControl = ngControl;
            return _this;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        SimpleMaskDirective.prototype.onInput = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var el = (/** @type {?} */ (event.target));
            /** @type {?} */
            var value = this.fitToMask(el.value);
            this.writeValue(value, event.target);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SimpleMaskDirective.prototype.onBlur = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var el = (/** @type {?} */ (event.target));
            if (el.value && !this.matchMask(el.value) && this.clearIfNotMatch) {
                this.writeValue(null, event.target);
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SimpleMaskDirective.prototype.inputOnblur = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.onBlur(event);
        };
        Object.defineProperty(SimpleMaskDirective.prototype, "addPatterns", {
            set: /**
             * @param {?} values
             * @return {?}
             */
            function (values) {
                this.setPatterns(values);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleMaskDirective.prototype, "newPatterns", {
            set: /**
             * @param {?} values
             * @return {?}
             */
            function (values) {
                this.setPatterns(values, true);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * write the new value on input element and form control
         * @param value value to write
         * @param target input element
         */
        /**
         * write the new value on input element and form control
         * @param {?} value value to write
         * @param {?} target input element
         * @return {?}
         */
        SimpleMaskDirective.prototype.writeValue = /**
         * write the new value on input element and form control
         * @param {?} value value to write
         * @param {?} target input element
         * @return {?}
         */
        function (value, target) {
            target.value = value;
            this.renderer.setProperty(target, 'value', value);
            if (this.ngControl && this.ngControl.control) {
                this.ngControl.control.setValue(value);
                this.ngControl.control.markAsDirty();
                this.ngControl.control.updateValueAndValidity();
            }
        };
        /**
         * Checks if the value matches with the mask and is completed
         * @param value value to check
         * @returns true if match, false if not match
         */
        /**
         * Checks if the value matches with the mask and is completed
         * @param {?} value value to check
         * @return {?} true if match, false if not match
         */
        SimpleMaskDirective.prototype.matchMask = /**
         * Checks if the value matches with the mask and is completed
         * @param {?} value value to check
         * @return {?} true if match, false if not match
         */
        function (value) {
            // value size adjust to mask size
            /** @type {?} */
            var size = this.mask.replace(/\\(?!\\)/g, '').length;
            value = value.substring(0, size);
            return value.length === size ? true : false;
        };
        SimpleMaskDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[simpleMask]'
                    },] },
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SimpleMaskDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: NgControl, decorators: [{ type: core.Self }] }
        ]; };
        SimpleMaskDirective.propDecorators = {
            mask: [{ type: core.Input, args: ['simpleMask',] }],
            clearIfNotMatch: [{ type: core.Input }],
            onInput: [{ type: core.HostListener, args: ['input', ['$event'],] }],
            onBlur: [{ type: core.HostListener, args: ['blur', ['$event'],] }],
            inputOnblur: [{ type: core.HostListener, args: ['ionBlur', ['$event'],] }],
            addPatterns: [{ type: core.Input, args: ['addPatterns',] }],
            newPatterns: [{ type: core.Input, args: ['newPatterns',] }]
        };
        return SimpleMaskDirective;
    }(SimpleMask));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SimpleMaskPipe = /** @class */ (function (_super) {
        __extends(SimpleMaskPipe, _super);
        function SimpleMaskPipe() {
            return _super.call(this) || this;
        }
        /**
         * @param {?} value
         * @param {?} mask
         * @param {?=} patterns
         * @param {?=} clear
         * @return {?}
         */
        SimpleMaskPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} mask
         * @param {?=} patterns
         * @param {?=} clear
         * @return {?}
         */
        function (value, mask, patterns, clear) {
            if (clear === void 0) { clear = false; }
            if (mask) {
                this.mask = mask;
            }
            else {
                throw new Error('A mask is required on simpleMask pipe');
            }
            if (patterns) {
                this.setPatterns(patterns, clear);
            }
            return this.fitToMask(value);
        };
        SimpleMaskPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'simpleMask'
                    },] }
        ];
        /** @nocollapse */
        SimpleMaskPipe.ctorParameters = function () { return []; };
        return SimpleMaskPipe;
    }(SimpleMask));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SimpleMaskModule = /** @class */ (function () {
        function SimpleMaskModule() {
        }
        SimpleMaskModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            SimpleMaskDirective,
                            SimpleMaskPipe
                        ],
                        exports: [
                            SimpleMaskDirective,
                            SimpleMaskPipe
                        ]
                    },] }
        ];
        return SimpleMaskModule;
    }());

    exports.SimpleMaskDirective = SimpleMaskDirective;
    exports.SimpleMaskPipe = SimpleMaskPipe;
    exports.SimpleMaskModule = SimpleMaskModule;
    exports.ɵa = SimpleMask;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-ion-simple-mask.umd.js.map
