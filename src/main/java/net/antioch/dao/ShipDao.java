package net.antioch.dao;

import net.antioch.model.Ship;
import net.antioch.model.StationUser;

import java.util.List;

public interface ShipDao {

    StationUser retrieveShipById(int id);

    StationUser retrieveShipsByUser(int userId);


    void insertShip(Ship ship);

    void updateShip(Ship ship);

    void deleteShip(Ship ship);
}
