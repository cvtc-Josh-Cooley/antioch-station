package net.antioch.model;

import java.io.Serializable;
import java.util.Dictionary;
import java.util.Enumeration;
import java.util.HashMap;

public class Ship implements Serializable {

    int id;
    String name;
    String type;
    String classification;
    boolean isParked;
    int tonnage;
    int registrationNumber;
    double condition;
    int fuel;
    int triangulum;
    HashMap<String, Integer> cargo = new HashMap<String, Integer>();
    String location;
    String flagRegistration;
    int ownerId;

    public Ship() {

    }


    public Ship(int id, String name, String type, String classification, boolean isParked, int tonnage,
                int registrationNumber, double condition, int fuel, int triangulum, HashMap<String, Integer> cargo,
                String location, String flagRegistration, int ownerId) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.classification = classification;
        this.isParked = isParked;
        this.tonnage = tonnage;
        this.registrationNumber = registrationNumber;
        this.condition = condition;
        this.fuel = fuel;
        this.triangulum = triangulum;
        this.cargo = cargo;
        this.location = location;
        this.flagRegistration = flagRegistration;
        this.ownerId = ownerId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getClassification() {
        return classification;
    }

    public void setClassification(String classification) {
        this.classification = classification;
    }

    public int getTonnage() {
        return tonnage;
    }

    public void setTonnage(int tonnage) {
        this.tonnage = tonnage;
    }

    public int getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(int registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public double getCondition() {
        return condition;
    }

    public void setCondition(double condition) {
        this.condition = condition;
    }

    public int getFuel() {
        return fuel;
    }

    public void setFuel(int fuel) {
        this.fuel = fuel;
    }

    public int getTriangulum() {
        return triangulum;
    }

    public void setTriangulum(int triangulum) {
        this.triangulum = triangulum;
    }

    public HashMap<String, Integer> getCargo() {
        return cargo;
    }

    public void setCargo(HashMap<String, Integer> cargo) {
        this.cargo = cargo;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getFlagRegistration() {
        return flagRegistration;
    }

    public void setFlagRegistration(String flagRegistration) {
        this.flagRegistration = flagRegistration;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
    }

    public boolean getIsParked() {
        return isParked;
    }

    public void setIsParked(boolean parked) {
        isParked = parked;
    }
}
