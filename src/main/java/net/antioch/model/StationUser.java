package net.antioch.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class StationUser implements Serializable {
    int id;
    int idNumber;
    String username;
    String password;
    String firstName;
    String lastName;
    String status;
    int age;
    BankAccount account;
    Ship activeShip;
    List<String> accessRoles = new ArrayList<>();
    List<String> licenses = new ArrayList<>();
    List<Job> activeJobs = new ArrayList<>();
    List<Order> pendingOrders = new ArrayList<>();
    List<Ship> ships = new ArrayList<>();

    public StationUser() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(int idNumber) {
        this.idNumber = idNumber;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public BankAccount getAccount() {
        return account;
    }

    public void setAccount(BankAccount account) {
        this.account = account;
    }

    public Ship getActiveShip() {
        return activeShip;
    }

    public void setActiveShip(Ship activeShip) {
        this.activeShip = activeShip;
    }

    public List<String> getAccessRoles() {
        return accessRoles;
    }

    public void setAccessRoles(List<String> accessRoles) {
        this.accessRoles = accessRoles;
    }

    public List<String> getLicenses() {
        return licenses;
    }

    public void setLicenses(List<String> licenses) {
        this.licenses = licenses;
    }

    public List<Job> getActiveJobs() {
        return activeJobs;
    }

    public void setActiveJobs(List<Job> activeJobs) {
        this.activeJobs = activeJobs;
    }

    public List<Order> getPendingOrders() {
        return pendingOrders;
    }

    public void setPendingOrders(List<Order> pendingOrders) {
        this.pendingOrders = pendingOrders;
    }

    public List<Ship> getShips() {
        return ships;
    }

    public void setShips(List<Ship> ships) {
        this.ships = ships;
    }
}
