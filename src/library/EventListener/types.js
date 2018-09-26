/* @flow */
export type EventListenerPropsT = {
  listeners: ListenersT
};

export type ListenersT = Array<ListenerT>;

export type ListenerT = {
  /** Target on which to add event listener. Can be a global such as `window` or `document` or any CSS selector */
  target: string,
  /** Type of event to listen for, e.g. click */
  event: string,
  /** Function called when the event is triggered */
  handler: Function,
  /** Options passed to addEventListener/removeEventListener */
  options?: boolean | Object
};
