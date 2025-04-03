"use client";

import { useEffect } from "react";
import { Neko } from "../../neko/neko";

function ClientNeko() {
  useEffect(() => {
    const neko = new Neko({ nekoName: "neko", nekoImageUrl: "/marmalade.png" });
    neko.init();
    neko.isFollowing = true;
  }, [])

  return (<></>)
}

export default ClientNeko;
