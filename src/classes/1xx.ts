export default {
  /**
   * This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100)
   */
  '100 Continue': 100,
  /**
   * This code is sent in response to an [Upgrade](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header from the client, and indicates the protocol the server is switching to.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101)
   */
  '101 Switching Protocols': 101,
  /** This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished. */
  '102 Processing': 102,
  /**
   * This status code is primarily intended to be used with the [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header, letting the user agent start [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) resources while the server prepares a response.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103)
   */
  '103 Early Hints': 103
};
