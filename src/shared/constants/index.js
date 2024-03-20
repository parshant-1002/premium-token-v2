export const API = {
    BASE_URL: 'http://192.180.3.72:4001',
    GET_DATA: '/ttt',
    URL: "/v1",
    LOGIN: "/admin/login",
    RESET_PASSWORD: "/admin/resetpasswordpage",
    FORGOT_PASSWORD: "/admin/forgot-password",
    UPDATE_PASSWORD: "/admin/changePassword",
}

export const API_URLS = {
    GET_CONTENT: API.URL + "/content",
}

export const API_METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete',
}

export const STATUS_CODES  = {
    UNAUTHOURISED: 401,
    SUCCESS: 200,
};

export const STATUS  = {
    SUCCESS: "success",
    ERROR: "error",
}

export const FILTER_ORDER = {
    ASCENDING: -1,
    DESCENDING: 1,
  };
export const INPUT_TYPES = {
    TEXT: 'text',
    TEXT_AREA: 'textarea',
    NUMBER: 'number',
    EMAIL: 'email',
    PASSWORD: 'password',
    SELECT: 'select',
    RICH_TEXT: 'rich-text',
};
  
export const VALIDATION_REGEX = {
    EMAIL: /^\S+@\S+\.\S+$/,
    PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i,
    NUMBER: /\d+/g,
    SPECIAL_CHARACTERS_NOT_ALLOWED: /^[a-zA-Z0-9\s]+$/,
    SPECIAL_CHARACTERS_AND_SPACES_NOT_ALLOWED: /^[a-zA-Z0-9]+$/,
    VALID_LINK: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$/,
    USERNAME: /^[a-z0-9]+$/,
};
