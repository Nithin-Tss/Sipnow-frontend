// Shared validation rules keep authentication and profile updates consistent.
export const NAME_PART_PATTERN = /^[A-Za-z](?:[A-Za-z]|[ '-](?=[A-Za-z])){1,49}$/;
export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
export const AUSTRALIAN_MOBILE_PATTERN = /^4\d{8}$/;
