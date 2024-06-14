package net.antioch.dao;

public interface MasterDao {

    void createDatabase();
    void createStationUserTable();
    void createMessageTable();
    void createSentMessageTable();
    void createBankAccountTable();
    void createUserBankAccountsTable();
    void createShipTable();
    void createAnnouncementTable();
    void createJobTable();
    void createUserJobsTable();
    void createLicenseTable();
    void createJobLicensesTable();
    void createOrderTable();
    void createItemTable();
    void createOrderItemTable();
    void createCorporationTable();
}
