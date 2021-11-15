import {ref, inject} from 'vue';
import RouterView from './RouterView.vue';
import RouterLink from './RouterLink.vue';

const ROUTER_KEY = '__router__';

function createRouter(options) {
  return new Router(options);
}

function useRouter() {
  return inject(ROUTER_KEY);
}
// hash模式
function createWebHashHistory() {
  function bindEvent(fn) {
    window.addEventListener('hashchange', fn);
  }
  return {
    bindEvent,
    // 取出当前连接的hash值
    url: window.location.hash.slice(1) || '/'
  };
}

// history模式
function createWebHistory() {
  function bindEvent(fn) {
    window.addEventListener('popstate', fn);
  }
  return {
    bindEvent,
    url: window.location.href
  }
}

class Router {
  // options配置有history, routes, current等
  constructor(options) {
    // options.history 为传入的 createWebHashHistory
    this.history = options.history;
    this.routes = options.routes;
    this.current = ref(this.history.url);
    this.history.bindEvent(() => {
      this.current.value = window.location.hash.slice(1)
    });
  }

  install(app) {
    app.provide(ROUTER_KEY, this);
    app.component('router-view', RouterView);
    app.component('router-link', RouterLink);
  }
}

export {createRouter, useRouter, createWebHashHistory, createWebHistory};