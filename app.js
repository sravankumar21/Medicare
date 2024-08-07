"use strict";

var hubs_pdata;
var filterOrderBy;
var pubSubEvents = function () {
  var subscribers = {
    "hubsUpdate": []
  };
  return {
    publish: function publish(eventName, data) {
      if (!subscribers[eventName]) return;
      subscribers[eventName].forEach(function (subscriberCallback) {
        subscriberCallback(typeof data !== 'undefined' ? data : {});
      });
    },
    subscribe: function subscribe(eventName, callback) {
      if (!subscribers[eventName]) {
        subscribers[eventName] = [];
      }
      subscribers[eventName].push(callback);
      return {
        unsubscribe: function unsubscribe() {
          subscribers[eventName].splice(index, 1);
        }
      };
    }
  };
}();
//# sourceMappingURL=app.js.map
