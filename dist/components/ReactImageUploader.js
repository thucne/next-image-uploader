"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interopRequireWildcard(require("react"));
var _image = /*#__PURE__*/ _interopRequireDefault(require("next/image"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var __generator = ((void 0) && (void 0).__generator) || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var UploadComponent = function(param) {
    var photo = param.photo, setPhoto = param.setPhoto, alt = param.alt, objectFit = param.objectFit, setFileName = param.setFileName, setSize = param.setSize, isFormik = param.isFormik, getFileSize = param.getFileSize, disabled = param.disabled, inputRef = param.inputRef, className = param.className, hoverIcon = param.hoverIcon, _dropScope = param.dropScope, dropScope = _dropScope === void 0 ? "element" : _dropScope, _onError = param.onError, onError = _onError === void 0 ? function() {} : _onError, onDraggingImage = param.onDraggingImage;
    var ref = _slicedToArray((0, _react.useState)(false), 2), dragging = ref[0], setDragging = ref[1];
    var ref1 = _slicedToArray((0, _react.useState)(false), 2), loadingImage = ref1[0], setLoadingImage = ref1[1];
    var ref2 = _slicedToArray((0, _react.useState)(""), 2), localPhoto = ref2[0], setLocalPhoto = ref2[1];
    var alRef = (0, _react.useRef)(null);
    var ref3 = _slicedToArray((0, _react.useState)(null), 2), upLoadRef = ref3[0], setUploadRef = ref3[1];
    var ref4 = _slicedToArray((0, _react.useState)(false), 2), newEffect = ref4[0], setNewEffect = ref4[1];
    var ref5 = _slicedToArray((0, _react.useState)(false), 2), showHoverIcon = ref5[0], setShowHoverIcon = ref5[1];
    var handleChange = function(e) {
        // console.log(e.target.value);
        if (e.target.files && e.target.files[0] && !e.target.files[0].type.includes("image/")) {
            if (onError) onError("File is not an image");
            return;
        }
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();
            var fileName = e.target.files[0].name;
            var file = e.target.files[0];
            reader.onload = function() {
                var _ref = _asyncToGenerator(function(e) {
                    var newImg;
                    return __generator(this, function(_state) {
                        setLocalPhoto(e.target.result);
                        setLoadingImage(true);
                        if (setFileName) {
                            setFileName(fileName);
                        }
                        if (setSize) {
                            newImg = new window.Image();
                            newImg.src = e.target.result;
                            newImg.onload = function() {
                                setSize({
                                    width: this.width,
                                    height: this.height
                                });
                            };
                        }
                        if (setPhoto) {
                            if (isFormik) {
                                setPhoto(file, e.target.result);
                            } else {
                                setPhoto(e.target.result);
                            }
                        }
                        if (getFileSize) {
                            getFileSize(file === null || file === void 0 ? void 0 : file.size);
                        }
                        return [
                            2
                        ];
                    });
                });
                return function(e) {
                    return _ref.apply(this, arguments);
                };
            }();
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    var dropHandler = (0, _react.useCallback)(function(ev) {
        setDragging(false);
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for(var i = 0; i < ev.dataTransfer.items.length; i++){
                // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === "file") {
                    var file = ev.dataTransfer.items[i].getAsFile();
                    if (file.type.includes("image/")) {
                        var reader = new FileReader();
                        reader.onload = function() {
                            var _ref = _asyncToGenerator(function(e) {
                                var newImg;
                                return __generator(this, function(_state) {
                                    setLocalPhoto(e.target.result);
                                    setLoadingImage(true);
                                    if (setFileName) {
                                        setFileName(file.name);
                                    }
                                    if (setSize) {
                                        newImg = new window.Image();
                                        newImg.src = e.target.result;
                                        newImg.onload = function() {
                                            setSize({
                                                width: this.width,
                                                height: this.height
                                            });
                                        };
                                    }
                                    if (setPhoto) {
                                        if (isFormik) {
                                            setPhoto(file, e.target.result);
                                        } else {
                                            setPhoto(e.target.result);
                                        }
                                    }
                                    if (getFileSize) {
                                        getFileSize(file === null || file === void 0 ? void 0 : file.size);
                                    }
                                    return [
                                        2
                                    ];
                                });
                            });
                            return function(e) {
                                return _ref.apply(this, arguments);
                            };
                        }();
                        reader.readAsDataURL(file);
                    } else {
                        if (onError) onError("File is not an image");
                    }
                }
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            for(var i = 0; i < ev.dataTransfer.files.length; i++){
                if (ev.dataTransfer.files[i].type.includes("image/")) {
                    var reader1 = new FileReader();
                    reader1.onload = function() {
                        var _ref = _asyncToGenerator(function(e) {
                            var newImg, ref;
                            return __generator(this, function(_state) {
                                setLocalPhoto(e.target.result);
                                setLoadingImage(true);
                                if (setFileName) {
                                    setFileName(ev.dataTransfer.files[i].name);
                                }
                                if (setSize) {
                                    newImg = new window.Image();
                                    newImg.src = e.target.result;
                                    newImg.onload = function() {
                                        setSize({
                                            width: this.width,
                                            height: this.height
                                        });
                                    };
                                }
                                if (setPhoto) {
                                    if (isFormik) {
                                        setPhoto(ev.dataTransfer.files[i], e.target.result);
                                    } else {
                                        setPhoto(e.target.result);
                                    }
                                }
                                if (getFileSize) {
                                    ;
                                    getFileSize((ref = ev.dataTransfer.files[i]) === null || ref === void 0 ? void 0 : ref.size);
                                }
                                return [
                                    2
                                ];
                            });
                        });
                        return function(e) {
                            return _ref.apply(this, arguments);
                        };
                    }();
                    reader1.readAsDataURL(ev.dataTransfer.files[i]);
                } else {
                    if (onError) onError("File is not an image");
                }
            }
        }
    }, [
        getFileSize,
        isFormik,
        setFileName,
        setPhoto,
        setSize
    ]);
    var dragOverHandler = (0, _react.useCallback)(function(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        setDragging(true);
    }, []);
    var dragLeaveHandler = (0, _react.useCallback)(function(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        setDragging(false);
    }, []);
    var dragEnterHandler = (0, _react.useCallback)(function(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        setDragging(true);
    }, []);
    (0, _react.useEffect)(function() {
        if (dropScope === "window") {
            document.addEventListener("dragover", dragOverHandler);
            document.addEventListener("drop", dropHandler);
            document.addEventListener("mouseout", dragLeaveHandler);
        }
        return function() {
            if (dropScope === "window") {
                document.removeEventListener("dragover", dragOverHandler);
                document.removeEventListener("drop", dropHandler);
                document.removeEventListener("mouseout", dragLeaveHandler);
            }
        };
    }, [
        dropHandler,
        dropScope,
        dragEnterHandler,
        dragLeaveHandler,
        dragOverHandler
    ]);
    (0, _react.useEffect)(function() {
        if (inputRef) {
            setUploadRef(inputRef);
        } else {
            setUploadRef(alRef);
        }
    }, [
        inputRef
    ]);
    (0, _react.useEffect)(function() {
        if (photo) {
            setLocalPhoto(photo);
        }
    }, [
        photo
    ]);
    (0, _react.useEffect)(function() {
        if (localPhoto && photo !== localPhoto) {
            setNewEffect(true);
            setTimeout(function() {
                return setNewEffect(false);
            }, 3000);
        }
    }, [
        localPhoto
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        style: _objectSpreadProps(_objectSpread({}, rootStyle), {
            border: photo ? "none" : "1px dashed #ccc",
            filter: showHoverIcon ? "brightness(0.8)" : "none"
        }),
        className: "".concat(className),
        onClick: function() {
            var ref;
            return (ref = upLoadRef.current) === null || ref === void 0 ? void 0 : ref.click();
        },
        onMouseEnter: hoverIcon && !dragging ? function() {
            return setShowHoverIcon(true);
        } : null,
        onMouseLeave: hoverIcon && !dragging ? function() {
            return setShowHoverIcon(false);
        } : null
    }, /*#__PURE__*/ _react.default.createElement("style", {
        jsx: "true"
    }, "\n                    .blink {\n                        animation: blinker 1s linear infinite;\n                      }\n                      \n                    @keyframes blinker {\n                        50% {\n                          opacity: 0;\n                        }\n                    }\n                "), hoverIcon && /*#__PURE__*/ _react.default.createElement("span", {
        style: _objectSpreadProps(_objectSpread({}, hoverIconStyle), {
            opacity: showHoverIcon ? 1 : 0
        })
    }, hoverIcon), /*#__PURE__*/ _react.default.createElement("input", {
        type: "file",
        ref: upLoadRef,
        style: {
            display: "none"
        },
        accept: "image/*",
        onChange: handleChange,
        disabled: disabled
    }), dropScope === "window" && dragging && /*#__PURE__*/ _react.default.createElement("div", {
        style: windowDropStyle
    }, /*#__PURE__*/ _react.default.createElement("div", {
        style: {
            position: "relative",
            width: "50%",
            height: "50%"
        }
    }, /*#__PURE__*/ _react.default.createElement(_image.default, {
        src: onDraggingImage || "https://res.cloudinary.com/katyperrycbt/image/upload/v1662305403/f8aevquseg2l7lowo8kl.gif",
        alt: "launching",
        layout: "fill",
        quality: 100,
        objectFit: "contain",
        priority: true
    })), /*#__PURE__*/ _react.default.createElement("p", {
        style: {
            color: "black",
            fontSize: "1.5rem"
        }
    }, "Drop your image here")), /*#__PURE__*/ _react.default.createElement("div", {
        style: dragAndDropStyle,
        onDrop: dropHandler,
        onDragOver: dragOverHandler,
        onDragLeave: dragLeaveHandler,
        onDragEnter: dragEnterHandler
    }), (localPhoto === null || localPhoto === void 0 ? void 0 : localPhoto.length) > 0 && /*#__PURE__*/ _react.default.createElement("div", {
        style: _objectSpread({
            display: loadingImage ? "none" : "flex"
        }, photoStyle)
    }, /*#__PURE__*/ _react.default.createElement("div", {
        style: {
            width: "100%",
            height: "100%",
            position: "relative"
        }
    }, /*#__PURE__*/ _react.default.createElement(_image.default, {
        src: localPhoto,
        alt: alt || "image",
        layout: "fill",
        quality: 100,
        objectFit: objectFit || "contain",
        onLoadingComplete: function() {
            return setLoadingImage(false);
        },
        priority: true
    })), newEffect && /*#__PURE__*/ _react.default.createElement("div", {
        style: newEffectStyle,
        className: "blink"
    }, "✔")), dragging && dropScope !== "window" && /*#__PURE__*/ _react.default.createElement("div", {
        style: _objectSpread({
            display: "flex"
        }, draggingStyle)
    }, /*#__PURE__*/ _react.default.createElement("div", {
        style: {
            width: "100%",
            height: "100%",
            position: "relative"
        }
    }, /*#__PURE__*/ _react.default.createElement(_image.default, {
        src: onDraggingImage || "https://res.cloudinary.com/katyperrycbt/image/upload/v1662305403/f8aevquseg2l7lowo8kl.gif",
        alt: "launching",
        layout: "fill",
        quality: 100,
        objectFit: objectFit || "contain",
        priority: true
    }))));
};
var _default = UploadComponent;
var newEffectStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    border: "3px dashed green",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem"
};
var windowDropStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "calc(100vw - 24px)",
    height: "calc(100vh - 24px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000000,
    border: "2px dashed orange",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    flexDirection: "column"
};
var photoStyle = {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "100%"
};
var draggingStyle = {
    display: "flex",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
    height: "100%"
};
var windowDragAndDropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
var dragAndDropStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
var hoverIconStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 20000000
};
var rootStyle = {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
