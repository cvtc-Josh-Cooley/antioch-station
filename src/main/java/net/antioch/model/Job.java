package net.antioch.model;

import java.util.ArrayList;
import java.util.List;

public class Job {

    int id;
    int employerId;
    String employerName;
    String type;
    String description;
    List<String> licensesRequired = new ArrayList<>();
    int payment;
    String contractStatus;
    int contractorId;
}
