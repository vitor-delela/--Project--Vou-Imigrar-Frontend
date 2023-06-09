export function verifyEmail (email) {
  return email
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

export function verifyName (name) {
  // eslint-disable-next-line prefer-regex-literals
  const re = new RegExp('^[A-zÀ-ÿ]+ [A-zÀ-ÿ]')
  return re.test(name)
}

export function verifyPassword (password) {
  return password.length >= 8 &&
          password
            .match(/^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})/)
}
