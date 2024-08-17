import dotenv from 'dotenv';
dotenv.config();
import { Server } from "socket.io";
import express from "express";
const BASE_URL = process.env.BASE_URL;


const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

const PORT = process.env.PORT;

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
 console.log(onlineUser);
    const receiver = getUser(receiverId);
    if(receiver.socketId)
    io.to(receiver.socketId).emit("getMessage", data);
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});
io.listen(4000);
