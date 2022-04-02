import * as admin from "firebase-admin";

// get this JSON from the Firebase board
// you can also store the values in environment variables

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: process.env.firebase_admin_private_key,
      clientEmail: process.env.firebase_admin_client_email,
      projectId: process.env.firebase_admin_project_id,
    }),
    // databaseURL: process.env.firebase_admin_db_url,
  });
}

export default admin;
