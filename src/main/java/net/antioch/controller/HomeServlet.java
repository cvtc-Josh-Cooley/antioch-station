package net.antioch.controller;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import net.antioch.model.StationUser;
import net.antioch.utility.MockUpUtility;

@WebServlet(name = "HomeServlet", value = "/Home")
public class HomeServlet extends HttpServlet {


    public void init() {

    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        String target = "/home.jsp";
        HttpSession session = request.getSession();
        StationUser user = (StationUser)session.getAttribute("user");
        Object message = request.getAttribute("message");
        if(null != user) {
            request.setAttribute("user", user);
            request.setAttribute("messages", MockUpUtility.generateMessages());
            request.setAttribute("message", message);
        } else {
            target = "/login.jsp";
        }

        getServletContext().getRequestDispatcher(target).forward(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        doGet(request, response);
    }

    public void destroy() {
    }
}