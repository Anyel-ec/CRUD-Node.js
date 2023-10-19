import sql from "mssql";

const dbConfig = {
  server: "localhost",
  user: "tuuser",
  password: "tucontrase",
  port: 1433, 
  database: "Customers",
};

const pool = new sql.ConnectionPool(dbConfig);

export const connectDB = async () => {
  try {
    await pool.connect();
    console.log("Conexión a SQL Server exitosa");
  } catch (error) {
    console.error("Error de conexión a SQL Server:", error);
  }
};

export { pool };
