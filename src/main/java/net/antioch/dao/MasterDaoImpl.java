package net.antioch.dao;

import net.antioch.utility.DBUtility;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class MasterDaoImpl implements MasterDao {

    final static String DROP_TABLE_STATION_USER = "drop table if exists StationUser;";
    final static String DROP_TABLE_MESSAGE = "drop table if exists Message";
    final static String DROP_TABLE_SENT_MESSAGES = "drop table if exists SentMessages";
    final static String DROP_TABLE_BANK_ACCOUNT = "drop table if exists BankAccount";
    final static String DROP_TABLE_USER_BANK_ACCOUNTS = "drop table if exists UserBankAccounts";
    final static String DROP_TABLE_JOB = "drop table if exists Job";
    final static String DROP_TABLE_USER_JOBS = "drop table if exists UserJobs";
    final static String DROP_TABLE_LICENSE = "drop table if exists License";
    final static String DROP_TABLE_JOB_LICENSES = "drop table if exists JobLicenses";
    final static String DROP_TABLE_SHIP = "drop table if exists Ship";
    final static String DROP_TABLE_ANNOUNCEMENT = "drop table if exists Announcement";
    final static String DROP_TABLE_CORPORATION = "drop table if exists Corporation";
    final static String DROP_TABLE_ORDER = "drop table if exists OrderTable";
    final static String DROP_TABLE_ITEM = "drop table if exists Item";
    final static String DROP_TABLE_ORDER_ITEMS = "drop table if exists OrderItems";
    final static String CREATE_TABLE_STATION_USER = "create table StationUser(id integer primary key autoincrement, " +
            "username text, password text, firstName, lastName, status text, age integer, idNumber integer);";
    final static String CREATE_TABLE_MESSAGE = "create table Message(id integer primary key autoincrement, " +
            "recipientId integer, senderId integer, subject text, body text);";
    final static String CREATE_TABLE_SENT_MESSAGES = "create table SentMessages(senderId integer, recipientId integer, " +
            "messageId integer);";
    final static String CREATE_TABLE_BANK_ACCOUNT = "create table BankAccount(id integer primary key autoincrement, " +
            "routingNumber text, accountNumber integer, balance real, code text, status text, bankName text);";
    final static String CREATE_TABLE_USER_BANK_ACCOUNTS = "create table UserBankAccounts(userId integer, " +
            "accountId integer);";
    final static String CREATE_TABLE_JOB = "create table Job(id integer primary key autoincrement, employerId integer, " +
            "type text, description text, payment real, contractStatus text, contractorId integer);";
    final static String CREATE_TABLE_USER_JOBS = "create table UserJobs(userId integer, jobId integer);";
    final static String CREATE_TABLE_LICENSE = "create table License(id integer primary key autoincrement, name text, " +
            "issuingBody text, status text);";
    final static String CREATE_TABLE_JOB_LICENSES = "create table JobLicenses(jobId integer, licenseId integer);";
    final static String CREATE_TABLE_SHIP = "create table Ship(id integer primary key autoincrement, name text, " +
            "type text, classification text, tonnage int, condition real, fuel integer, triangulum integer, cargo text, " +
            "location text, flagRegistration text, ownerId integer, isParked integer);";
    final static String CREATE_TABLE_ANNOUNCEMENT = "create table Announcement(id integer primary key autoincrement, " +
            "title text, body text, expire integer);";
    final static String CREATE_TABLE_CORPORATION = "create table Corporation(id integer primary key autoincrement, " +
            "name text, type text, nationalRegistration text, description text);";
    final static String CREATE_TABLE_ORDER = "create table OrderTable(id integer primary key autoincrement, " +
            "sellerId integer, buyerId integer, subTotal real, tax real, total real);";
    final static String CREATE_TABLE_ITEM = "create table Item(id integer primary key autoincrement, name text, " +
            "type text, code text, price real, description text);";
    final static String CREATE_TABLE_ORDER_ITEMS = "create table OrderItems(orderId integer, itemId integer);";

    @Override
    public void createDatabase() {
        createStationUserTable();
        createMessageTable();
        createSentMessageTable();
        createBankAccountTable();
        createUserBankAccountsTable();
        createShipTable();
        createAnnouncementTable();
        createJobTable();
        createUserJobsTable();
        createLicenseTable();
        createJobLicensesTable();
        createOrderTable();
        createItemTable();
        createOrderItemTable();
        createCorporationTable();
    }

    @Override
    public void createStationUserTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - STATION USER");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_STATION_USER);
            stmnt.executeUpdate(CREATE_TABLE_STATION_USER);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }

    }

    @Override
    public void createMessageTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - MESSAGE");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_MESSAGE);
            stmnt.executeUpdate(CREATE_TABLE_MESSAGE);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createSentMessageTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - SENT MESSAGE");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_SENT_MESSAGES);
            stmnt.executeUpdate(CREATE_TABLE_SENT_MESSAGES);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createBankAccountTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - BANK ACCOUNT");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_BANK_ACCOUNT);
            stmnt.executeUpdate(CREATE_TABLE_BANK_ACCOUNT);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createUserBankAccountsTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - USER BANK ACCOUNTS");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_USER_BANK_ACCOUNTS);
            stmnt.executeUpdate(CREATE_TABLE_USER_BANK_ACCOUNTS);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createShipTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - SHIP");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_SHIP);
            stmnt.executeUpdate(CREATE_TABLE_SHIP);

        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createAnnouncementTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - ANNOUNCEMENT");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_ANNOUNCEMENT);
            stmnt.executeUpdate(CREATE_TABLE_ANNOUNCEMENT);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createJobTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - JOB");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_JOB);
            stmnt.executeUpdate(CREATE_TABLE_JOB);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createUserJobsTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - USER JOBS");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_USER_JOBS);
            stmnt.executeUpdate(CREATE_TABLE_USER_JOBS);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createLicenseTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - LICENSE");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_LICENSE);
            stmnt.executeUpdate(CREATE_TABLE_LICENSE);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createJobLicensesTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - JOB LICENSES");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_JOB_LICENSES);
            stmnt.executeUpdate(CREATE_TABLE_JOB_LICENSES);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createOrderTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - ORDER");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_ORDER);
            stmnt.executeUpdate(CREATE_TABLE_ORDER);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createItemTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - ITEM");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_ITEM);
            stmnt.executeUpdate(CREATE_TABLE_ITEM);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createOrderItemTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - ORDER ITEM");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_ORDER_ITEMS);
            stmnt.executeUpdate(CREATE_TABLE_ORDER_ITEMS);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }

    @Override
    public void createCorporationTable() {
        Connection con = null;
        Statement stmnt = null;
        System.out.println("TABLE - CORPORATION");
        try {
            con = DBUtility.createConnection();
            stmnt = con.createStatement();

            stmnt.setQueryTimeout(DBUtility.TIMEOUT);

            stmnt.executeUpdate(DROP_TABLE_CORPORATION);
            stmnt.executeUpdate(CREATE_TABLE_CORPORATION);


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtility.closeConnection(con, stmnt);
        }
    }
}
