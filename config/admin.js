module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b00ffb4e36f69bd09b3426253078ceab'),
  },
});
