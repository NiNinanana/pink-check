import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";

import { auth } from "../utils/firebase/auth";

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return { user };
};

export default useUser;
