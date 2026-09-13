let toString = Object.prototype.toString,
  hasOwnProperty = Object.prototype.hasOwnProperty;
const tools = {
  isFunction: function (obj) {
    return toString.call(obj) === "[object Function]";
  },
  isArray: function (obj) {
    return toString.call(obj) === "[object Array]";
  },
  isPlainObject: function (obj) {
    if (
      !obj ||
      toString.call(obj) !== "[object Object]" ||
      obj.nodeType ||
      obj.setInterval
    ) {
      return false;
    }

    if (
      obj.constructor &&
      !hasOwnProperty.call(obj, "constructor") &&
      !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")
    ) {
      return false;
    }

    var key;
    for (key in obj);

    return key === undefined || hasOwnProperty.call(obj, key);
  }
};

export const extend = function () {
  var options,
    name,
    src,
    copy,
    copyIsArray,
    clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }

  if (typeof target !== "object" && !tools.isFunction(target)) {
    target = {};
  }

  if (length === i) {
    target = this;
    --i;
  }

  for (; i < length; i++) {
    if ((options = arguments[i]) !== null) {
      for (name in options) {
        src = target[name];
        copy = options[name];

        if (target === copy) {
          continue;
        }

        if (
          deep &&
          copy &&
          (tools.isPlainObject(copy) || (copyIsArray = tools.isArray(copy)))
        ) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && tools.isArray(src) ? src : [];
          } else {
            clone = src && tools.isPlainObject(src) ? src : {};
          }

          target[name] = extend(deep, clone, copy);
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
};

export const cloneDates = (arr) => arr.map((d) => d.clone());

export const isSameDay = (a, b) => {
  a = a.clone().set({ h: 12, m: 0 });
  return Math.abs(a.diff(b, "hours")) < 20;
};

export const clone = (obj) => JSON.parse(JSON.stringify(obj));

export const scrollIntoCenter = function (element, duration = 200, callback) {
  if (typeof window === "undefined" || !element || !element.parentNode) {
    if (typeof callback === "function") callback();
    return;
  }

  const parent = element.parentNode;
  const startingTop = parent.scrollTop;
  const parentCenter = parent.offsetHeight / 2;
  const elementCenter = element.offsetHeight / 2;
  const distance =
    element.offsetTop - startingTop - parentCenter + elementCenter;
  let start;
  const done = () => {
    if (typeof callback === "function") callback();
  };

  if (!duration) {
    parent.scrollTo(0, startingTop + distance);
    done();
    return;
  }

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);
    parent.scrollTo(0, startingTop + distance * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    } else {
      done();
    }
  });
};

export const addEventListener = function (el, type, handler) {
  if (typeof document === "undefined") return;
  if (typeof el === "string") el = document.querySelector(el);
  if (!el) return;
  if (el.addEventListener) el.addEventListener(type, handler, true);
  else if (el.attachEvent) el.attachEvent("on" + type, handler);
};

export const addLiveEvent = function (selector, event, callback, context) {
  if (typeof document === "undefined") return;
  addEventListener(context || document, event, function (e) {
    if (e.target && e.target.closest && e.target.closest(selector)) {
      callback.call(e.target, e);
    }
  });
};

export default { extend, clone };
