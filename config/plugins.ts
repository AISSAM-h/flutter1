module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        webPush: {
          vapidPublicKey: env('VAPID_PUBLIC_KEY'),
          vapidPrivateKey: env('VAPID_PRIVATE_KEY'),
        },
      },
    },
  });