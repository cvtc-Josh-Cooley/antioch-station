package net.antioch.model;

import java.io.Serializable;

public class BankAccount implements Serializable {

    String HomeBank;
    double balance;
    String routingNumber;
    int accountNumber;
    String code;
    String status;

    public BankAccount() {
    }

    public BankAccount(String homeBank, double balance, String routingNumber, int accountNumber, String code, String status) {
        HomeBank = homeBank;
        this.balance = balance;
        this.routingNumber = routingNumber;
        this.accountNumber = accountNumber;
        this.code = code;
        this.status = status;
    }

    public String getHomeBank() {
        return HomeBank;
    }

    public void setHomeBank(String homeBank) {
        HomeBank = homeBank;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRoutingNumber() {
        return routingNumber;
    }

    public void setRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }
}
