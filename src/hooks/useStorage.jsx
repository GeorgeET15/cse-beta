import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import { projectStorage, projectFirestore } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to check if the component is mounted

    if (file) {
      // references
      const storageRef = ref(projectStorage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          if (isMounted) {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setUrl(downloadURL);

            // Add the URL to Firestore collection 'images'
            const collectionRef = collection(projectFirestore, "images");
            await addDoc(collectionRef, {
              url: downloadURL,
              createdAt: serverTimestamp(),
            });
          }
        }
      );
    }

    // Cleanup function to remove the event listener
    return () => {
      isMounted = false;
    };
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
