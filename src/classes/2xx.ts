export default {
  /**
   * The request has succeeded. The meaning of the success depends on the HTTP method:
   *
   * - `GET`: The resource has been fetched and is transmitted in the message body.
   * - `HEAD`: The representation headers are included in the response without any message body.
   * - `PUT` or `POST`: The resource describing the result of the action is transmitted in the message body.
   * - `TRACE`: The message body contains the request message as received by the server.

   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
   */
  '200 OK': 200,
  /** The request has succeeded and a new resource has been created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)
   */
  '201 Created': 201,
  /** The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202)
   */
  '202 Accepted': 202,
  /** This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203)
   */
  '203 Non-Authoritative Information': 203,
  /** There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)
   */
  '204 No Content': 204,
  /** Tells the user-agent to reset the document which sent this request.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205)
   */
  '205 Reset Content': 205,
  /** This response code is used when the Range header is sent from the client to request only part of a resource.
   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206)
   */
  '206 Partial Content': 206,
  /** Conveys information about multiple resources, for situations where multiple status codes might be appropriate. */
  '207 Multi-Status': 207,
  /** Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection. */
  '208 Already Reported': 208,
  /** The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance. */
  '226 IM Used': 226
};
