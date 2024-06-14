package net.antioch.utility;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DBUtility {

    public static final int TIMEOUT = 30;

    public static final String CONNECTION = "jdbc:sqlite:person.db";
    public static final String DRIVER_NAME = "org.sqlite.JDBC";

    public static Connection createConnection() throws ClassNotFoundException, SQLException {

        // register the DB driver (create an instance of the class)
        Class.forName(DRIVER_NAME);

        return DriverManager.getConnection(CONNECTION);
    }

    public static void closeConnection(final Connection connection, final Statement statement) {

        try {

            if(null != connection) {
                connection.close();
            }
            if(null != statement) {
                statement.close();
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
