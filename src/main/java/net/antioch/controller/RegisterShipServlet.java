package net.antioch.controller;

import java.io.*;

import com.google.common.base.Strings;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import net.antioch.model.Ship;

@WebServlet(name = "RegisterShipServlet", value = "/RegisterShipServlet")
public class RegisterShipServlet extends HttpServlet {


    public void init() {

    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

            String target = "";
            String message = "";

            String shipName = request.getParameter("name");
            String type = request.getParameter("type");
            String classification = request.getParameter("class");
            String tonnageString = request.getParameter("tonnage");
            String registrationNumberString = request.getParameter("registrationNumber");

            if(Strings.isNullOrEmpty(shipName) || Strings.isNullOrEmpty(type) || Strings.isNullOrEmpty(classification)
                    || Strings.isNullOrEmpty(tonnageString) || Strings.isNullOrEmpty(registrationNumberString)) {

                message = "Please fill out all Ship fields";
                target = "/create-account.jsp";

            } else {

                Ship ship = new Ship();

                ship.setName(shipName);
                ship.setType(type);
                ship.setClassification(classification);
                ship.setTonnage(Integer.parseInt(tonnageString));
                ship.setRegistrationNumber(Integer.parseInt(registrationNumberString));
                ship.setIsParked(false);
                //ship.setFuel();
                //ship.setFlagRegistration();
                ship.setLocation("Antioch Station");
                //ship.setTriangulum();
                //ship.setOwnerId();
                //ship.setCondition();

                //get user from session

                target = "/user-profile.jsp";
            }


        getServletContext().getRequestDispatcher(target).forward(request, response);
    }

    public void destroy() {
    }
}