package net.antioch.dao;

import net.antioch.model.StationUser;

import java.util.List;

public interface StationUserDao {

    StationUser retrieveUserById(int id);

    StationUser retrieveUserByUsername(String username);

    List<StationUser> retrieveAllStationUsers();

    void insertUser(StationUser user);

    void updateUser(StationUser user);

    void deleteUser(StationUser user);
}
