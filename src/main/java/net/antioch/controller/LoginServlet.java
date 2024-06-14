package net.antioch.controller;

import java.io.*;
import java.util.List;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import net.antioch.model.Message;
import net.antioch.model.StationUser;
import net.antioch.utility.MockUpUtility;


@WebServlet(name = "LoginServlet", value = "/Login")
public class LoginServlet extends HttpServlet {


    public void init() {

    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        request.setAttribute("announcements", MockUpUtility.generateAnnouncements());

        getServletContext().getRequestDispatcher("/login.jsp").forward(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        String target = "/home.jsp";
        String message = "";
        List<Message> messages = null;

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if(username != null && !username.isEmpty() && password != null && !password.isEmpty()) {
            if(!username.equals("Test") || !password.equals("Test")) {
                message = "Username or password was incorrect";
                target = "/login.jsp";

            } else {
                List<StationUser> users = MockUpUtility.generateUsers();
                messages = MockUpUtility.generateMessages();

                for(StationUser user: users) {
                    if(user.getUsername().equals(username)) {
                        request.setAttribute("user", user);
                        HttpSession session = request.getSession();
                        session.setAttribute("user", user);

                    } else {
                        message = "Your user information was not found";
                        target = "/login.jsp";
                    }
                }
            }
        } else {
            message = "Please enter username and password";
            target = "/login.jsp";

        }

        request.setAttribute("messages", messages);
        request.setAttribute("message", message);
        request.setAttribute("announcements", MockUpUtility.generateAnnouncements());
        getServletContext().getRequestDispatcher(target).forward(request, response);
    }

    public void destroy() {
    }
}