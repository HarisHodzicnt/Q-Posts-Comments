const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
};

const HELLO_MESSAGE = "Hello from";

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

const DEFAULT_GLOBAL_ERROR = "Something went wrong, please try again";

const SEARCH_NO_MATCH = "No matching posts. Try a different search term.";

export {
  DEFAULT_OPTIONS,
  HELLO_MESSAGE,
  API_ENDPOINT,
  DEFAULT_GLOBAL_ERROR,
  SEARCH_NO_MATCH,
};
