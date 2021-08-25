export default {
  /** The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300)
   */
  '300 Multiple Choices': 300,
  /** The URL of the requested resource has been changed permanently. The new URL is given in the response.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301)
   */
  '301 Moved Permanently': 301,
  /** This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)
   */
  '302 Found': 302,
  /** The server sent this response to direct the client to get the requested resource at another URI with a GET request.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303)
   */
  '303 See Other': 303,
  /** This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304)
   */
  '304 Not Modified': 304,
  /** Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy. */
  '305 Use Proxy': 305,
  /** The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307)
   */
  '307 Temporary Redirect': 307,
  /** This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308)
   */
  '308 Permanent Redirect': 308
};
