import Peer from "peerjs";
import { useEffect, useState } from "react";

const usePeer = () => {
  const [peer, setPeer] = useState<Peer | null>(null);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    (async function createPeerAndJoinRoom() {
      const peer = new (await import("peerjs")).default();
      setPeer(peer);

      peer.on("open", (id) => {
        setId(id);
        console.log("your device id: ", id);
      });

      peer.on("error", () => {
        console.log("error connecting peer");
      });

      peer.on("disconnected", () => {
        console.log("peer disconnected");
      });
    })();
  }, []);

  return { peer, id };
};

export default usePeer;
