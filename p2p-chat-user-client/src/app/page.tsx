"use client";

import { Peer } from "peerjs";
import { socket } from "../socket";
import { useEffect, useRef, useState } from "react";

import UserList from "@/components/organisms/UserList";
import Chat from "@/components/organisms/Chat";
import JoinChatForm from "@/components/molecules/JoinChatForm";
import usePeer from "@/hooks/user-peer";

type User = {
  username: string;
  id: string;
};

export default function Home() {
  const [userName, setUsername] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [connectedUsers, setConnectedUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<null | User>(null);
  const { peer, id } = usePeer();

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onNewUser(newUser: User) {
      setConnectedUsers(connectedUsers.concat(newUser));
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("user:new", onNewUser);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [connectedUsers]);

  const joinChat = (name: string) => {
    setUsername(name);
    socket.emit("user:join", { username: name, id });
  };

  const selecUserToChatWith = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <main className="flex">
      {userName ? (
        <div className="flex columns-2 h-screen w-screen">
          <UserList users={connectedUsers} selectUser={selecUserToChatWith} />
          <Chat userToChatWith={selectedUser} peer={peer} />
        </div>
      ) : (
        <div className="flex h-screen w-screen m-auto">
          <JoinChatForm handleSubmit={joinChat} />
        </div>
      )}
    </main>
  );
}
