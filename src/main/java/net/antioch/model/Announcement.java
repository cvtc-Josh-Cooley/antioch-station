package net.antioch.model;

import java.io.Serializable;

public class Announcement implements Serializable {

    String title;
    String body;

    public Announcement() {
    }

    public Announcement(String title, String body) {
        this.title = title;
        this.body = body;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
