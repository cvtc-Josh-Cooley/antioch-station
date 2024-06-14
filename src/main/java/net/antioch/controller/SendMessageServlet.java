package net.antioch.controller;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import net.antioch.model.Message;

@WebServlet(name = "SendMessageServlet", value = "/SendMessage")
public class SendMessageServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {


    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String target = "/Home";
        String message = "";

        String fromString = request.getParameter("fromId");
        String recipientString = request.getParameter("recipient");
        String subject = request.getParameter("subject");
        String body = request.getParameter("body");

        if(fromString != null && !fromString.isEmpty() &&
                recipientString != null && !recipientString.isEmpty() &&
                subject != null && !subject.isEmpty() &&
                body != null && !body.isEmpty()) {

            for(String idString : recipientString.split(",")) {
                int id = Integer.parseInt(idString);
                Message myMessage = new Message();
                myMessage.setFromId(Integer.parseInt(fromString));
                myMessage.setFrom(fromString); //TODO get from name using id
                myMessage.setToId(id);
                myMessage.setSubject(subject);
                myMessage.setBody(body);

                //TODO send message by adding it to database
            }

            message = "Message sent.";
        } else {
            message = "Data missing, message not sent.";
        }

        request.setAttribute("message", message);
        getServletContext().getRequestDispatcher(target).forward(request, response);
    }
}

