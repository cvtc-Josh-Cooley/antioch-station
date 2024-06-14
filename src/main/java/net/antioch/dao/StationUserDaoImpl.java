package net.antioch.dao;

import net.antioch.model.StationUser;
import net.antioch.utility.DBUtility;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class StationUserDaoImpl implements StationUserDao {

    @Override
    public StationUser retrieveUserById(int id) {
        return null;
    }

    @Override
    public StationUser retrieveUserByUsername(String username) {
        return null;
    }

    @Override
    public List<StationUser> retrieveAllStationUsers() {
        Connection con = null;
        Statement stmnt = null;
        List<StationUser> users = new ArrayList<>();

        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            String sql = "select * from StationUser;";

            ResultSet results = stmnt.executeQuery(sql);

            while(results.next()) {
                StationUser user = new StationUser();

                user.setId(results.getInt(""));
                user.setUsername(results.getString(""));
                user.setPassword(results.getString(""));
                user.setFirstName(results.getString(""));
                user.setLastName(results.getString(""));
                user.setAge(results.getInt(""));
                user.setStatus(results.getString(""));

                users.add(user);
            }

            return users;
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }

    }


    @Override
    public void insertUser(StationUser user) {
        Connection con = null;
        PreparedStatement stmnt = null;

        try {
            con = DBUtility.createConnection();
            String sql = "insert into StationUser (username, password, firstName, lastName, status, " +
                    "age, idNumber) values (?,?,?,?,?,?,?);";
            stmnt = con.prepareStatement(sql);

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.setString(1, user.getUsername());
            stmnt.setString(2, user.getPassword());
            stmnt.setString(3, user.getFirstName());
            stmnt.setString(4, user.getLastName());
            stmnt.setString(5, user.getStatus());
            stmnt.setInt(6, user.getAge());
            stmnt.setInt(7, user.getIdNumber());

            stmnt.executeUpdate();

        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }

    }

    @Override
    public void updateUser(StationUser user) {

    }

    @Override
    public void deleteUser(StationUser user) {

    }
}
