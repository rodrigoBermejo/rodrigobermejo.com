import request from 'request';

export default function verifyHumanity(req) {
  const url = 'https://www.google.com/recaptcha/api/siteverify';
  const form = {
    secret: '6LdB-0cUAAAAACTh7XCoGKz4_h21VEa8R4D-p9fY',
    response: req.body['g-recaptcha-response'],
    remoteip: req.connection.remoteAddress
  };

  return new Promise((resolve, reject) => {
    request.post(
      url,
      {
        form
      },
      (err, httpResponse, body) => {
        if (err) {
          reject();
        } else {
          const r = JSON.parse(body);
          if (r.success) {
            d.resolve(r.success);
          } else {
            d.reject(new Error());
          }
        }
      }
    );
  });
}
