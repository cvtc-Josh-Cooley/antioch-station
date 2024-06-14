package net.antioch.controller;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import net.antioch.dao.MasterDao;
import net.antioch.dao.MasterDaoImpl;

@WebServlet(name = "CreateDBServlet", value = "/CreateDBServlet")
public class CreateDBServlet extends HttpServlet {


    public void init() {

    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        MasterDao masterDao = new MasterDaoImpl();

        masterDao.createDatabase();

        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    public void destroy() {
    }
}