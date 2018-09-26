/* @flow */
import { Component } from 'react';
import { canUseDOM, canUseEventListeners } from 'exenv';

import { eventListenerPropTypes } from './propTypes';
import type { EventListenerPropsT, ListenersT, ListenerT } from './types';

export default class EventListener extends Component<EventListenerPropsT> {
  static propTypes = eventListenerPropTypes;

  componentDidMount() {
    this.addEventListeners();
  }

  componentDidUpdate(prevProps: EventListenerPropsT) {
    this.removeEventListeners(prevProps.listeners);
    this.addEventListeners();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  render() {
    return null;
  }

  getTargetNode(target: string) {
    if (canUseDOM) {
      return global[target] || global.document.querySelector(target);
    }
  }

  addEventListeners(listeners: ListenersT = this.props.listeners) {
    if (canUseEventListeners) {
      listeners.forEach(({ target, event, handler, options }: ListenerT) => {
        const node = this.getTargetNode(target);
        node && node.addEventListener(event, handler, options);
      });
    }
  }

  removeEventListeners(listeners: ListenersT = this.props.listeners) {
    if (canUseEventListeners) {
      listeners.forEach(({ target, event, handler, options }: ListenerT) => {
        const node = this.getTargetNode(target);
        node && node.removeEventListener(event, handler, options);
      });
    }
  }
}
