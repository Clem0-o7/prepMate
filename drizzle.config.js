/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:h0DIVARTfdi4@ep-young-brook-a5ez0e0o.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };