import class1xx from './classes/1xx';
import class2xx from './classes/2xx';
import class3xx from './classes/3xx';
import class4xx from './classes/4xx';
import class5xx from './classes/5xx';

export type Status1XXNames =
  | '100 Continue'
  | '101 Switching Protocols'
  | '102 Processing'
  | '103 Early Hints';

export type Status2XXNames =
  | '200 OK'
  | '201 Created'
  | '202 Accepted'
  | '203 Non-Authoritative Information'
  | '204 No Content'
  | '205 Reset Content'
  | '206 Partial Content'
  | '207 Multi-Status'
  | '208 Already Reported'
  | '226 IM Used';

export type Status3XXNames =
  | '300 Multiple Choices'
  | '301 Moved Permanently'
  | '302 Found'
  | '303 See Other'
  | '304 Not Modified'
  | '305 Use Proxy'
  | '307 Temporary Redirect'
  | '308 Permanent Redirect';

export type Status4XXNames =
  | '400 Bad Request'
  | '401 Unauthorized'
  | '402 Payment Required'
  | '403 Forbidden'
  | '404 Not Found'
  | '405 Method Not Allowed'
  | '406 Not Acceptable'
  | '407 Proxy Authentication Required'
  | '408 Request Timeout'
  | '409 Conflict'
  | '410 Gone'
  | '411 Length Required'
  | '412 Precondition Failed'
  | '413 Payload Too Large' /** Server error responses */
  | '414 URI Too Long'
  | '415 Unsupported Media Type'
  | '416 Range Not Satisfiable'
  | '417 Expectation Failed'
  | "418 I'm a Teapot"
  | '421 Misdirected Request'
  | '422 Unprocessable Entity'
  | '423 Locked'
  | '424 Failed Dependency'
  | '425 Too Early'
  | '426 Upgrade Required'
  | '428 Precondition Required'
  | '429 Too Many Requests'
  | '431 Request Header Fields Too Large'
  | '451 Unavailable For Legal Reasons';

export type Status5XXNames =
  | '500 Internal Server Error'
  | '501 Not Implemented'
  | '502 Bad Gateway'
  | '503 Service Unavailable'
  | '504 Gateway Timeout'
  | '505 HTTP Version Not Supported'
  | '506 Variant Also Negotiates'
  | '507 Insufficient Storage'
  | '508 Loop Detected'
  | '509 Bandwidth Limit Exceeded'
  | '510 Not Extended'
  | '511 Network Authentication Required';

export const SchemaCascade = {
  /** Information responses */
  '1XX': class1xx,
  /** Successful responses */
  '2XX': class2xx,
  /** Redirection messages */
  '3XX': class3xx,
  /** Client error responses */
  '4XX': class4xx,
  /** Server error responses */
  '5XX': class5xx
};

export type StatusName =
  | '100 Continue'
  | '101 Switching Protocols'
  | '102 Processing'
  | '103 Early Hints'
  | '200 OK'
  | '201 Created'
  | '202 Accepted'
  | '203 Non-Authoritative Information'
  | '204 No Content'
  | '205 Reset Content'
  | '206 Partial Content'
  | '207 Multi-Status'
  | '208 Already Reported'
  | '226 IM Used'
  | '300 Multiple Choices'
  | '301 Moved Permanently'
  | '302 Found'
  | '303 See Other'
  | '304 Not Modified'
  | '305 Use Proxy'
  | '307 Temporary Redirect'
  | '308 Permanent Redirect'
  | '400 Bad Request'
  | '401 Unauthorized'
  | '402 Payment Required'
  | '403 Forbidden'
  | '404 Not Found'
  | '405 Method Not Allowed'
  | '406 Not Acceptable'
  | '407 Proxy Authentication Required'
  | '408 Request Timeout'
  | '409 Conflict'
  | '410 Gone'
  | '411 Length Required'
  | '412 Precondition Failed'
  | '413 Payload Too Large'
  | '414 URI Too Long'
  | '415 Unsupported Media Type'
  | '416 Range Not Satisfiable'
  | '417 Expectation Failed'
  | "418 I'm a Teapot"
  | '421 Misdirected Request'
  | '422 Unprocessable Entity'
  | '423 Locked'
  | '424 Failed Dependency'
  | '425 Too Early'
  | '426 Upgrade Required'
  | '428 Precondition Required'
  | '429 Too Many Requests'
  | '431 Request Header Fields Too Large'
  | '451 Unavailable For Legal Reasons'
  | '500 Internal Server Error'
  | '501 Not Implemented'
  | '502 Bad Gateway'
  | '503 Service Unavailable'
  | '504 Gateway Timeout'
  | '505 HTTP Version Not Supported'
  | '506 Variant Also Negotiates'
  | '507 Insufficient Storage'
  | '508 Loop Detected'
  | '509 Bandwidth Limit Exceeded'
  | '510 Not Extended'
  | '511 Network Authentication Required';

export default {
  ...class5xx,
  ...class4xx,
  ...class3xx,
  ...class2xx,
  ...class1xx
};
