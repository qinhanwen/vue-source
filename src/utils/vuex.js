import {
  mapActions as mapActionsFromVuex,
  mapGetters as mapGettersFromVuex
} from "vuex";
export { mapState } from "vuex";
import store from "../store";
import { endsWith, isArray, reduce, isFunction } from "lodash";

/**
 * 根据 `namespace` 获取 `store` 的模块
 * @param {Store} store  Store
 * @param {string} namespace 命名空间
 * @returns {Module}
 */
function getModuleByNamespace(store, namespace) {
  return store._modulesNamespaceMap[
    endsWith(namespace, "/") ? namespace : `${namespace}/`
  ];
}

/**
 * 将各种幺蛾子方法映射成 `vuex` 的 `mapXXX` 的方法
 * @param {string} method 模块的方法名
 * @param {string} namespace 命名空间
 * @param {Array|object} handlers 方法列表/集合
 * @returns {Array|object}
 */
function mapHandlers(method, namespace, handlers) {
  const module = getModuleByNamespace(store, namespace);
  const isArr = isArray(handlers);
  debugger;
  return reduce(
    handlers,
    (acc, originalHandler, handlerName) => {
      let handler = originalHandler;

      if (isFunction(originalHandler)) {
        module[method]((func, funcName) => {
          if (func === originalHandler) {
            handler = funcName;
          }
        });
      }

      if (isArr) {
        acc.push(handler);
      } else {
        acc[handlerName] = handler;
      }

      return acc;
    },
    isArr ? [] : {}
  );
}

/**
 * 映射 `actions`
 * @param {string} namespace 命名空间
 * @param {Array|object} actions
 * @returns {object}
 */
export function mapActions(namespace, actions) {
  return mapActionsFromVuex(
    namespace,
    mapHandlers("forEachAction", namespace, actions)
  );
}

/**
 * 映射 `getters`
 * @param {string} namespace 命名空间
 * @param {Array|object} getters
 * @returns {object}
 */
export function mapGetters(namespace, getters) {
  return mapGettersFromVuex(
    namespace,
    mapHandlers("forEachGetter", namespace, getters)
  );
}
