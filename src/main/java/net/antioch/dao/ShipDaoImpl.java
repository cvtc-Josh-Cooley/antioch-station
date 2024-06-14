package net.antioch.dao;

import net.antioch.model.Ship;
import net.antioch.model.StationUser;
import net.antioch.utility.DBUtility;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ShipDaoImpl implements ShipDao {

    @Override
    public StationUser retrieveShipById(int id) {
        return null;
    }

    @Override
    public StationUser retrieveShipsByUser(int userId) {
        return null;
    }

    @Override
    public void insertShip(Ship ship) {
        Connection con = null;
        PreparedStatement stmnt = null;


        try {
            con = DBUtility.createConnection();
            String sql = "insert into Ship ( name, type, classification, tonnage, condition, fuel, triangulum, " +
                    "location, flagRegistration, ownerId, isParked) values (?,?,?,?,?,?,?,?,?,?,?);";
            stmnt = con.prepareStatement(sql);

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.setString(1, ship.getName());
            stmnt.setString(2, ship.getType());
            stmnt.setString(3, ship.getClassification());
            stmnt.setInt(4, ship.getTonnage());
            stmnt.setDouble(5, ship.getCondition());
            stmnt.setInt(6, ship.getFuel());
            stmnt.setInt(7, ship.getTriangulum());
            stmnt.setString(8, ship.getLocation());
            stmnt.setString(9, ship.getFlagRegistration());
            stmnt.setInt(10, ship.getOwnerId());
            stmnt.setBoolean(11, ship.getIsParked());



        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public void updateShip(Ship ship) {

    }

    @Override
    public void deleteShip(Ship ship) {

    }
}
