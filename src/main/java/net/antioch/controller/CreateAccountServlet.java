package net.antioch.controller;

import java.io.*;

import com.google.common.base.Strings;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import net.antioch.dao.StationUserDao;
import net.antioch.dao.StationUserDaoImpl;
import net.antioch.model.StationUser;
import net.antioch.utility.EncryptionUtility;

import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;


@WebServlet(name = "CreateAccountServlet", value = "/CreateAccount")
public class CreateAccountServlet extends HttpServlet {


    public void init() {

    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        String target = "";
        String message = "";

        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String ageString = request.getParameter("age");
        String idNumString = request.getParameter("idNumber");
        String registerShip = request.getParameter("registerShip");



        if(Strings.isNullOrEmpty(username) || Strings.isNullOrEmpty(password) || Strings.isNullOrEmpty(firstName)
                || Strings.isNullOrEmpty(lastName) || Strings.isNullOrEmpty(ageString)
                || Strings.isNullOrEmpty(idNumString))
        {

            message = "Please provide all required data.";
            target = "/create-account.jsp";
        } else {

            try {
                int age = Integer.parseInt(ageString);
                int idNumber = Integer.parseInt(idNumString);

                SecretKey key = EncryptionUtility.generateKey(256);
                IvParameterSpec iv = EncryptionUtility.generateIv();

                String encryptedPassword = EncryptionUtility.encrypt("AES/CBC/PKCS5Padding", password, key, iv);

                StationUser newUser = new StationUser();

                newUser.setUsername(username);
                newUser.setPassword(encryptedPassword);
                newUser.setFirstName(firstName);
                newUser.setLastName(lastName);
                newUser.setAge(age);
                newUser.setIdNumber(idNumber);

                StationUserDao userDao = new StationUserDaoImpl();
                userDao.insertUser(newUser);

                HttpSession session = request.getSession();
                session.setAttribute("user", newUser);

                target = "/user-profile.jsp";
            } catch (Exception e) {
                message = "Enter only numbers for Age and ID Number.";
                target = "create-account.jsp";
            }

        }


        getServletContext().getRequestDispatcher(target).forward(request, response);
    }

    public void destroy() {
    }


}