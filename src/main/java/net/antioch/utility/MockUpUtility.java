package net.antioch.utility;

import net.antioch.model.*;

import java.util.ArrayList;
import java.util.List;

public class MockUpUtility {

    public static List<Message> generateMessages() {
        Message mes1 = new Message();
        Message mes2 = new Message();
        Message mes3 = new Message();

        mes1.setSubject("A friendly game...");
        mes1.setBody("Thursday next, you know the place.");
        mes1.setFrom("Arn");

        mes2.setSubject("Business to discuss");
        mes2.setBody("I\'ve got information that you may find profitable. If you are interested, meet me in the Arkaden");
        mes2.setFrom("Unknown");

        mes3.setSubject("Super Savings on all your Style Needs!");
        mes3.setBody("Heinrich\'s Haberdashery is proud to serve the style needs of Antioch Station\'s distinguished gentlemen. This week we are offering sales on waistcoats, jackets, and hats of all varieties." +
                " Clothes make the gentleman, and we can help you look the part at a fraction of the cost!");
        mes3.setFrom("Heinrich\'s Haberdashery");

        List<Message> messages = new ArrayList<>();
        messages.add(mes1);
        messages.add(mes2);
        messages.add(mes3);

        return messages;
    }

    public static List<StationUser> generateUsers() {
        List<StationUser> users = new ArrayList<>();

        Ship ship = new Ship();
        BankAccount ba = new BankAccount("Bank of New Marrakesh", 252000.24, "009294194", 234242, "01", "ACTIVE");

        StationUser user1 = new StationUser();
        user1.setId(1);
        user1.setUsername("Test");
        user1.setPassword("Test");
        user1.setFirstName("Aric");
        user1.setLastName("Darius");
        user1.setAge(36);
        user1.setActiveShip(ship);
        user1.setStatus("Green - Active");
        user1.setAccount(ba);

        user1.getShips().add(ship);
        user1.getAccessRoles().add("StationUser");
        user1.getLicenses().add("Bounty Hunter");
        user1.getLicenses().add("Explorer");
        user1.getLicenses().add("Cargo");
        user1.getLicenses().add("Passenger");


        users.add(user1);
        return users;
    }

    public static List<Announcement> generateAnnouncements() {
        Announcement anmnt1 = new Announcement("ALERT: Pirate Advisory", "Pirate activity has been reported on Atlerflig hyperlane. To this point 4 attacks have occurred. Cargo ships may wish to travel alternate routes.");
        Announcement anmnt2 = new Announcement("ALERT: Maintenance on BR-3", "Restrooms on Brown level 3 will be out of order following reports of antigravity malfunctions.");
        Announcement anmnt3 = new Announcement("ALERT: Maintenance on BL-10", "Atmosphere scrubbers on Blue lever 10 will be replaced this afternoon. As a result the level will be closed from 1 PM to 7 PM.");
        Announcement anmnt4 = new Announcement("ENTERTAINMENT: Movie Showing", "The new film, Crisis at Jupiter Station, staring Tom Cruise and Jennifer Connolley, is now showing at theaters on Blue level 9.");

        List<Announcement> announcements = new ArrayList<>();
        announcements.add(anmnt1);
        announcements.add(anmnt2);
        announcements.add(anmnt3);
        announcements.add(anmnt4);

        return announcements;
    }
}
