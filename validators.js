exports.nameValidator = (name) => {
  return new Promise((resolve, reject) => {
    if (!/^[a-zA-ZáäéëöőóíúüűÁÄÉËÖŐÓÍÚÜŰ ]*$/g.test(name)) {
      reject(
        "The name field have to contain a-z A-Z characters (including áé...)."
      );
    }
    resolve();
  });
};

exports.compValidator = (comp) => {
  return new Promise((resolve, reject) => {
    if (!/^[a-zA-Z0-9,_\.\077\*\+\&\#\'\~\;\-\!\@\; ]*$/g.test(comp)) {
      let illegal = comp.match(
        /[^a-zA-Z0-9,_\.\077\*\+\&\#\'\~\;\-\!\@\; ]/
      )[0];
      reject(
        "The company field does not fit for the requirements. " +
          `'${illegal}' is an illegal character`
      );
    }
    resolve();
  });
};

exports.mailValidator = (email) => {
  return new Promise((resolve, reject) => {
    if (!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g.test(email)) {
      reject("The email field does not fit for the requirements.");
    }
    resolve();
  });
};

exports.subjectValidator = (subject) => {
  return new Promise((resolve, reject) => {
    if (!/^[a-zA-Z0-9áäéëöőóíúüűÁÄÉËÖŐÓÍÚÜŰ ]*$/g.test(subject)) {
      reject(
        "The subject field does not fit for the requirements. " +
          "Allowed characters : a-z, A-Z, 0-9, ' '"
      );
    }
    resolve();
  });
};

exports.msgValidator = (msg) => {
  return new Promise((resolve, reject) => {
    if (
      !/^[a-zA-Z0-9áäéëöőóíúüűÁÄÉËÖŐÓÍÚÜŰ,_\.\077\*\+\&\#\'\~\;\-\!\@\; \n]*$/g.test(
        msg
      )
    ) {
      reject(
        "The message does not fit for the requirements. " +
          `'${illegal}' is an illegal character`
      );
    }
    resolve();
  });
};
