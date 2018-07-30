const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addTimestamp = functions.database.ref('/chats/{pushId}').onCreate((snapshot, context) => {
  const original = snapshot.val();
  return snapshot.ref.update({updated_at: Date.now()})
});
